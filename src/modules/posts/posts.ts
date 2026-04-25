import { SHOW_RENDERED_POSTS } from '../../_debug/debug';
import { ContentType, MAX_LOAD_LAG } from '../../defines';
import { Database, DatabaseConfig, ICleanupableData } from '../../utils/database';
import { dynamic } from '../../utils/dynamic';
import { appendElement } from '../../utils/element';
import { imageViewer } from '../../utils/imageViewer';
import { requestAPI } from '../../utils/redditAPI';
import { buildSvg } from '../../utils/svg';
import { checkIsRendered } from '../../utils/tools';
import { bookmarksCss, renderBookmarkPost } from '../bookmark';
import { renderCollapseAward } from '../collapseAwards';
import { CustomCSS } from '../customCSS';
import { filterPost } from '../filters/filters';
import { settings } from '../settings/settings';
import { FlairData, renderFlair } from '../subs/flair';
import { pp_log } from '../toaster';
import { renderUserInfo } from '../users/userInfo';

import unwrapButtonSvg from '@resources/postUnwrapButton.svg';

import postsStyle from './posts.less';
import backplatesStyle from './postsBackplates.less';
import shareButtonStyle from './shareButton.less';

const postsCss = new CustomCSS();
postsCss.addStyle(postsStyle);
postsCss.register(document);

const shareButtonCss = new CustomCSS();
shareButtonCss.addStyle(shareButtonStyle);
shareButtonCss.register(document);

class PostData implements ICleanupableData {
    timestamp!: number;
    flair?: FlairData;
}

const posts: Database<PostData> = new Database<PostData>(`POSTS`, { isCleanupable: true, validator: postDataValidator, loader: postDataLoader } as DatabaseConfig<PostData>);

function postDataValidator(subData: PostData) {
    return subData.flair == undefined;
}

async function postDataLoader(post: string): Promise<PostData> {
    let postData = {} as PostData;

    const postId = post.split(`:`);

    const { status, result } = await requestAPI(`/r/${postId[0]}/comments/${postId[1]}.json`);

    if (result != null && result.message == null) {
        for (const item of result) {
            for (const child of item.data.children) {
                if (child.kind == `t3`) {
                    postData.flair = {
                        text: child.data.link_flair_text,
                        color: child.data.link_flair_text_color,
                        background: child.data.link_flair_background_color,
                        richtext: child.data.link_flair_richtext
                    } as FlairData;

                    return postData;
                }
            }
        }
    }

    return postData;
}

if (settings.BACKPLATES.isEnabled()) {
    postsCss.addStyle(backplatesStyle);
}

export async function renderPost(post: Element) {
    if (checkIsRendered(post)) return;

    const shadowRoot = await dynamic(() => post.shadowRoot, MAX_LOAD_LAG * 4);

    if (!shadowRoot) {
        pp_log(`${post.getAttribute(`permalink`)} wasn't loaded properly, waiting for loading...`);
        new MutationObserver((_, observer) => {
            renderPost(post);
            observer.disconnect();
        }).observe(post, { childList: true });
        return;
    }

    postsCss.register(shadowRoot);
    bookmarksCss.register(shadowRoot);

    renderPostFlair(post);

    filterPost(post);

    renderHeader(post);
    renderContent(post);

    renderShareButtonPost(post);

    renderBookmarkPost(post);

    renderCollapseAward(post, ContentType.Post);

    if (settings.SELECTABLE_POSTS.isEnabled()) {
        post.querySelector(`a[slot="full-post-link"]`)?.remove();

        const tittle = await dynamic(() => post.querySelector(`a[slot="title"]`), MAX_LOAD_LAG);
        tittle?.classList?.add(`pp_post_tittle`);
    }

    if (DEBUG && SHOW_RENDERED_POSTS) {
        post.classList.add(`pp_debug_rendered`);
    }
}

export function getSub(post: Element): string {
    return post.getAttribute(`subreddit-prefixed-name`)!.replace(`r/`, ``);
}

async function renderPostFlair(post: Element) {
    const sub = getSub(post);

    const dynamicResult = await dynamic(() => {
        const container = post.querySelector(`shreddit-post-flair`);
        const flair = container?.querySelector<HTMLAnchorElement>(`a`);

        return container && flair ? ([container, flair] as const) : null;
    }, MAX_LOAD_LAG);

    if (!dynamicResult) return;

    const [postFlairContainer, postFlair] = dynamicResult;

    let flairText: string = ``;

    if (postFlair == null) {
        if (settings.FLAIR_SHOW_ALWAYS.isEnabled() && postFlairContainer) {
            const permalink = post.getAttribute(`permalink`)?.split(`/`);

            if (permalink == null || permalink.length < 5) {
                pp_log(`Unable to parse post permalink: ${post.getAttribute(`permalink`)}`);
                return;
            }

            const postId = permalink[2] + `:` + permalink[4];

            const postData = await posts.getWithLoader(postId);

            if (postData.flair != null && postData.flair.text != null) {
                renderFlair(postFlairContainer, sub, postData.flair, true);
            }

            flairText = postData.flair?.text ?? ``;
        }
    } else {
        const split = postFlair.href?.split(`%22`);
        flairText = split != null && split.length > 1 ? decodeURIComponent(split[1]) : ``;
    }

    post.setAttribute(`pp_flair`, flairText);
}

async function renderShareButtonPost(post: Element) {
    if (post.getAttribute(`view-context`) == `CommentsPage`) {
        const shareButton = await dynamic(() => post.querySelector(`.share-dropdown-menu`));

        shareButton?.classList.add(`pp_post_shareButton`);
    } else {
        const dynamicResult = await dynamic(() => {
            const shadowRoot = post.shadowRoot?.querySelector(`shreddit-post-share-button`)?.shadowRoot;
            const shareButton = shadowRoot?.querySelector(`button`);

            return shadowRoot && shareButton ? ([shadowRoot, shareButton] as const) : null;
        });

        if (dynamicResult) {
            const [shadowRoot, shareButton] = dynamicResult;

            shareButtonCss.register(shadowRoot);

            shareButton.classList.add(`pp_post_shareButton`);
        }
    }
}

async function renderHeader(post: Element) {
    const author = post.getAttribute(`author`)!;
    const viewContext = post.getAttribute(`view-context`);

    if (viewContext == `AggregateFeed` || viewContext == `CustomFeed`) {
        if (settings.SHOW_POST_AUTHOR.isDisabled()) return;

        const anchor = await dynamic(() => post.querySelector(`span[slot="credit-bar"]`)?.querySelector(`.created-separator`), MAX_LOAD_LAG);

        if (!anchor) return;

        const userNameLink = document.createElement(`a`);
        userNameLink.classList.add(`flex`, `items-center`, `text-neutral-content`, `visited:text-neutral-content-weak`, `a`, `cursor-pointer`, `no-visited`, `no-underline`, `hover:no-underline`);
        userNameLink.setAttribute(`href`, `/user/${author}/`);
        anchor.before(userNameLink);

        const userName = appendElement(userNameLink, `div`, [`text-neutral-content-weak`, `text-12`]);
        userName.textContent = author;

        const point = document.createElement(`span`);
        point.classList.add(`inline-block`, `my-0`, `created-separator`, `text-neutral-content-weak`);
        point.textContent = `•`;
        userNameLink.before(point);

        // userInfo
        renderUserInfo(author, userName, anchor, anchor, ContentType.Post);
    } else {
        // userInfo
        const creditBar = await dynamic(() => post.querySelector(`[slot="credit-bar"]`), MAX_LOAD_LAG); // usually it's span, but sometimes div
        const userName = await dynamic(() => creditBar?.querySelector(`span[slot="authorName"]`)?.querySelector(`a`)?.querySelector(`.whitespace-nowrap`), MAX_LOAD_LAG);

        const anchor = creditBar?.querySelector(`.created-separator`);

        // skip post view
        if (!anchor || !userName) return;

        renderUserInfo(author, userName, anchor, anchor, ContentType.Post);
    }
}

async function renderContent(post: Element) {
    // comments view
    if (window.location.href.includes(`/comments/`)) {
        registerImages(post, false);

        return;
    }

    // feed view
    const postContent = await dynamic(() => post.querySelector(`.feed-card-text-preview`), MAX_LOAD_LAG);

    if (postContent == null) return;

    if (settings.SELECTABLE_POSTS.isEnabled()) {
        postContent.parentElement!.parentElement!.removeAttribute(`href`);
    }

    // fix bad formated text
    postContent.classList.remove(`feed-card-text-preview`);

    // fix click events
    const postAnchor = post.querySelector(`a[slot="text-body"]`);
    if (postAnchor != null) {
        postAnchor.classList.toggle(`pointer-events-none`, false);
    }

    // forced load preview images
    for (const content of postContent.childNodes) {
        if (content instanceof Element && content.matches(`object`)) {
            const previewHref = (content.querySelector(`a`) as HTMLAnchorElement)?.href;

            if (previewHref != null) {
                const image = document.createElement(`faceplate-img`);
                image.setAttribute(`src`, previewHref);
                image.setAttribute(`loading`, `eager`);
                image.setAttribute(`sizes`, `(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw`);
                image.className = `block w-fit my-0 mx-auto max-w-[100%]`;

                content.replaceWith(image);
            }
        }
    }

    registerImages(post, true);

    renderUnwrapPostButton(post, postContent);
}

async function registerImages(post: Element, isFeed: boolean) {
    if (settings.IMAGE_VIEWER.isDisabled()) return;

    if (isFeed) {
        const anyImage = await dynamic(() => post.querySelector(`faceplate-img`), MAX_LOAD_LAG);

        if (anyImage != null) {
            post.querySelectorAll(`faceplate-img`).forEach(imageContainer => {
                const href = imageContainer.getAttribute(`src`)!;

                let image = imageContainer.shadowRoot?.querySelector(`img`) as HTMLImageElement;
                if (image != null) {
                    image.classList.add(`pp_imageViewable`);
                }

                imageContainer.addEventListener(`click`, () => {
                    imageViewer.open(href);
                });
            });
        }
    } else {
        post.querySelectorAll(`figure[class="rte-media"]`).forEach(imageContainer => {
            const imageAnchor = imageContainer.querySelector(`a`) as HTMLAnchorElement;
            const href = imageAnchor.href;
            imageAnchor.removeAttribute(`href`);

            let image = imageContainer.querySelector(`img`) as HTMLImageElement | HTMLVideoElement | any;
            if (image == null) {
                image = imageContainer.querySelector(`shreddit-player-2`);
            }
            image.classList.add(`pp_imageViewable`);

            imageAnchor.addEventListener(`click`, () => {
                imageViewer.open(href);
            });
        });
    }
}

async function renderUnwrapPostButton(post: Element, postContent: Element) {
    const shadowRoot = await dynamic(() => post.shadowRoot, MAX_LOAD_LAG);

    if (!shadowRoot) return;

    const renderedHeight = postContent.getBoundingClientRect().height;

    postContent.classList.add(`pp_post_noWrap`);
    const actualHeight = postContent.getBoundingClientRect().height;
    postContent.classList.remove(`pp_post_noWrap`);

    if (actualHeight > renderedHeight + 5) {
        const unwrapContainer = appendElement(post, `div`, `pp_post_unwrapContainer`);
        shadowRoot.append(unwrapContainer);
        const unwrapButton = appendElement(unwrapContainer, `div`, `pp_post_unwrapButton`);

        const unwrapIcon = buildSvg(unwrapButtonSvg, 25, 25);
        unwrapButton.append(unwrapIcon);

        unwrapButton.addEventListener(
            `click`,
            () => {
                postContent.classList.add(`pp_post_noWrap`);
                unwrapContainer.remove();
            },
            { once: true }
        );
    }
}
