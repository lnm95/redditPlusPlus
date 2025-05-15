import { IS_COMMENT, MAX_LOAD_LAG } from '../../defines';
import { imageViewer } from '../../utils/imageViewer';
import { checkIsRendered, dynamicElement } from '../../utils/tools';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import hideShareStyle from './hideShare.less';
import style from './comments.less';
import { renderCommentBookmark } from '../bookmark';
import { renderContextMenu } from './contextMenu';
import { renderUserTags } from './userTags';
import { renderCollapseAward } from '../collapseAwards';
import { OnCommentsTreeLoaded, renderCommentsSortButtons } from './sortButtons';
import { SHOW_RENDERED_COMMENTS, PROFILE_USER_DATA, profiler_comments } from '../../_debug/debug';
import { renderMoreReplies } from './moreReplies';
import { renderUserInfo } from '../users/userInfo';
import { notify } from '../toaster';
import { filterComment } from '../filters/filters';

let rootIntersector: IntersectionObserver = null;
let commentsIntersector: IntersectionObserver = null;

let commentsMutations: MutationObserver = null;

export async function renderComments(container: Element) {
    css.addStyle(style, `comments`);

    if (settings.HIDE_SHARE.isEnabled()) {
        css.addStyle(hideShareStyle, `hideShare`);
    }

    // intersections
    if (rootIntersector != null) {
        rootIntersector.disconnect();

        if (DEBUG && PROFILE_USER_DATA) {
            profiler_comments.observedRoots = 0;
        }
    } else {
        rootIntersector = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        renderComment(entry.target.parentElement);

                        // registry childs when root becomes visible
                        registryAllComments(entry.target.parentElement);

                        if (DEBUG && PROFILE_USER_DATA) {
                            profiler_comments.observedRoots--;
                        }

                        rootIntersector.unobserve(entry.target);
                    }
                }
            },
            { threshold: 0.05 }
        );
    }

    if (commentsIntersector != null) {
        commentsIntersector.disconnect();

        if (DEBUG && PROFILE_USER_DATA) {
            profiler_comments.observedChilds = 0;
            profiler_comments.moreRepliesRendered = 0;
        }
    } else {
        commentsIntersector = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        renderComment(entry.target.parentElement);

                        if (DEBUG && PROFILE_USER_DATA) {
                            profiler_comments.observedChilds--;
                        }

                        commentsIntersector.unobserve(entry.target);
                    }
                }
            },
            { threshold: 0.05 }
        );
    }

    // mutations
    if (commentsMutations != null) {
        commentsMutations.disconnect();
    } else {
        commentsMutations = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node instanceof HTMLElement) {
                        // static comments
                        const commentTree = node.parentElement?.querySelector(`shreddit-comment-tree`);

                        if (commentTree != null) {
                            registryAllRoots(commentTree);

                            // singal to commentsSort buttons that comments refreshed
                            OnCommentsTreeLoaded();
                        }

                        // dynamic comments
                        if (node.matches(`shreddit-comment`)) {
                            if (node.getAttribute(`depth`) == `0`) {
                                registryRoot(node);
                            } else {
                                registryComment(node);

                                registryAllComments(node);
                            }
                        }

                        if (settings.HIDE_RELATED_POSTS.isEnabled() && node.matches(`h2`) && node.textContent.includes(`Related posts`)) {
                            const relatedHeader = node;
                            const relatedPosts = relatedHeader.nextSibling;

                            relatedHeader.remove();
                            relatedPosts.remove();
                        }
                    }
                }
            }
        });
    }

    commentsMutations.observe(container, { childList: true, subtree: true });

    // sort buttons

    renderCommentsSortButtons(container);
}

function registryAllRoots(container: Element) {
    container.querySelectorAll(`shreddit-comment[depth="0"]`).forEach(comment => {
        registryRoot(comment);
    });
}

function registryRoot(comment: Element) {
    if (checkIsRendered(comment)) return;

    rootIntersector.observe(comment.querySelector(`div[slot="commentMeta"]`));

    if (DEBUG && PROFILE_USER_DATA) {
        profiler_comments.observedRoots++;
    }
}

function registryAllComments(container: Element) {
    container.querySelectorAll(`shreddit-comment`).forEach(comment => {
        registryComment(comment);
    });
}

function registryComment(comment: Element) {
    if (checkIsRendered(comment)) return;

    commentsIntersector.observe(comment.querySelector(`div[slot="commentMeta"]`));

    if (DEBUG && PROFILE_USER_DATA) {
        profiler_comments.observedChilds++;
    }
}

export async function renderComment(comment: Element) {
    const commentBody = comment.querySelector(`div[slot="comment"]`);

    if (DEBUG && SHOW_RENDERED_COMMENTS) {
        commentBody.classList.add(`pp_debug_rendered`);
    }

    // filter
    filterComment(comment, commentBody);

    // collapse automoderator and pinned mods
    if (settings.COLLAPSE_AUTOMODERATOR.isEnabled()) {
        const author = comment.getAttribute(`author`);
        if (author != null && author == `AutoModerator`) {
            comment.setAttribute(`collapsed`, ``);
            return;
        }

        const isMod = comment.querySelector(`div[slot="commentMeta"]`)?.querySelector(`shreddit-comment-author-modifier-icon[distinguished-as="MODERATOR"]`) != null;
        const isPinned = comment.querySelector(`shreddit-comment-badges`)?.shadowRoot?.querySelector(`svg[icon-name="pin-fill"]`) != null;

        if (isMod && isPinned) {
            comment.setAttribute(`collapsed`, ``);
            return;
        }
    }

    // unwrap moreComments
    setTimeout(() => {
        renderMoreReplies(comment);
    }, 150);

    // add anchors
    const nickname = comment.querySelector(`div[slot="commentMeta"]`).querySelector(`faceplate-hovercard[data-id="user-hover-card"]`);

    // skip [deleted]
    if (nickname == null) return;

    const tagsAnchor = document.createElement(`div`);
    tagsAnchor.setAttribute(`pp-anchor`, `tags`);
    const OPTag = nickname.parentElement.querySelector(`.ml-2xs`);
    if (OPTag != null) {
        OPTag.after(tagsAnchor);
    } else {
        nickname.after(tagsAnchor);
    }

    const time = await dynamicElement(() => nickname.parentElement.querySelector(`time`)?.parentElement?.parentElement, MAX_LOAD_LAG);

    const infoAnchor = document.createElement(`div`);
    infoAnchor.setAttribute(`pp-anchor`, `info`);
    time?.before(infoAnchor);

    // make ghosted when karma below zero
    if (settings.GHOSTED_COMMENTS.isEnabled() && parseInt(comment.getAttribute(`score`)) < 0) {
        comment.querySelector(`div[slot="commentAvatar"]`).classList.add(`pp_muted_avatar`);
        comment.querySelector(`faceplate-tracker[noun="comment_author"]`).querySelector(`a`).style.color = `#a5a5a5`;
        commentBody.classList.add(`pp_muted_content`);
    }

    // registry image
    const imageContainer = commentBody.querySelector(`figure[class="rte-media"]`);
    if (imageContainer != null && settings.IMAGE_VIEWER.isEnabled()) {
        const imageAnchor = imageContainer.querySelector(`a`) as HTMLAnchorElement;
        const href = imageAnchor.getAttribute(`href`);
        imageAnchor.removeAttribute(`href`);

        let image = imageContainer.querySelector(`img`) as HTMLImageElement | HTMLVideoElement;
        if (image == null) {
            image = imageContainer.querySelector(`shreddit-player-2`);
        }
        image.classList.add(`pp_imageViewable`);

        imageAnchor.addEventListener(`click`, () => {
            imageViewer.open(href);
        });
    }

    renderCollapseAward(comment, IS_COMMENT);

    renderUserTags(comment);

    const userId = comment.getAttribute(`author`);
    const userName = comment.querySelector(`faceplate-tracker[noun="comment_author"]`).querySelector(`a`);
    renderUserInfo(userId, userName, tagsAnchor, infoAnchor, IS_COMMENT);

    const contextMenuButton = await dynamicElement(() => comment.querySelector(`shreddit-overflow-menu`)?.shadowRoot?.querySelector(`faceplate-dropdown-menu`));

    renderCommentBookmark(comment);

    contextMenuButton.addEventListener(
        `click`,
        () => {
            renderContextMenu(comment);
        },
        { once: true }
    );
}
