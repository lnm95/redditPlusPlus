import { SHOW_RENDERED_POSTS } from '../../_debug/debug';
import { IS_POST, MAX_LOAD_LAG, MIN_LOAD_LAG } from '../../defines';
import { Database, DatabaseConfig, ICleanupableData } from '../../utils/database';
import { imageViewer } from '../../utils/imageViewer';
import { requestAPI } from '../../utils/redditAPI';
import { buildSvg } from '../../utils/svg';
import { checkIsRendered, dynamicElement } from '../../utils/tools';
import { appendElement } from '../../utils/element';
import { renderBookmarkPost } from '../bookmark';
import { renderCollapseAward } from '../collapseAwards';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { FlairData, renderFlair } from '../subs/flair';
import { flairs } from '../subs/subs';
import { notify, pp_log } from '../toaster';
import { renderUserInfo } from '../users/userInfo';
import style from './posts.less';
import backplatesStyle from './postsBackplates.less';

import unwrapButtonSvg from '@resources/postUnwrapButton.svg';
import { filterPost } from '../filters/filters';

class PostData implements ICleanupableData {
    timestamp: number;

    flair: FlairData;
}

const posts: Database<PostData> = new Database<PostData>(`POSTS`, { isCleanupable: true, validator: postDataValidator, loader: postDataLoader } as DatabaseConfig<PostData>);

function postDataValidator(subData: PostData) {
    return subData.flair == undefined;
}

async function postDataLoader(post: string): Promise<PostData> {
    let postData = { flair: null } as PostData;

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

css.addStyle(style);

if (settings.BACKPLATES.isEnabled()) {
    css.addStyle(backplatesStyle);
}

export async function renderPost(post: Element) {
    if (checkIsRendered(post)) return;

    renderPostFlair(post);

    filterPost(post);

    applyShadowRoot(post);

    renderHeader(post);
    renderContent(post);

    renderShareButtonPost(post);

    renderBookmarkPost(post);

    const award = await dynamicElement(() => post.shadowRoot?.querySelector(`award-button`), MAX_LOAD_LAG);
    if (award != null) {
        renderCollapseAward(post, IS_POST);
    }

    if (settings.SELECTABLE_POSTS.isEnabled()) {
        post.querySelector(`a[slot="full-post-link"]`)?.remove();

        const tittle = await dynamicElement(() => post.querySelector(`a[slot="title"]`), MAX_LOAD_LAG);
        tittle?.classList?.add(`pp_post_tittle`);
    }

    if (DEBUG && SHOW_RENDERED_POSTS) {
        post.classList.add(`pp_debug_rendered`);
    }
}

export function getSub(post: Element): string {
    return post.getAttribute(`subreddit-prefixed-name`).replace(`r/`, ``);
}

async function renderPostFlair(post: Element) {
    const sub = getSub(post);

    const postFlairContainer = await dynamicElement(() => post.querySelector(`shreddit-post-flair`), MAX_LOAD_LAG);
    const postFlair = (await dynamicElement(() => postFlairContainer?.querySelector(`a`), MIN_LOAD_LAG)) as HTMLAnchorElement;

    let flairText: string = ``;

    if (postFlair == null) {
        if (settings.FLAIR_SHOW_ALWAYS.isEnabled()) {
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

            flairText = postData.flair.text;
        }
    } else {
        const split = postFlair.href?.split(`%22`);
        flairText = split != null && split.length > 1 ? decodeURIComponent(split[1]) : ``;
    }

    post.setAttribute(`pp_flair`, flairText);
}

async function applyShadowRoot(post: Element) {
    const shadowRootLock = await dynamicElement(() => post.shadowRoot);

    css.registry(post.shadowRoot);
}

async function renderShareButtonPost(post: Element) {
    const shareButton = await dynamicElement(() => post.shadowRoot?.querySelector(`shreddit-post-share-button`)?.shadowRoot?.querySelector(`button`));

    css.registry(shareButton.parentNode.parentNode as ShadowRoot);

    shareButton.classList.add(`pp_post_shareButton`);
}

async function renderHeader(post: Element) {
    const author = post.getAttribute(`author`);

    if (post.getAttribute(`view-context`) == `AggregateFeed`) {
        if (settings.SHOW_POST_AUTHOR.isDisabled()) return;

        const anchor = await dynamicElement(() => post.querySelector(`span[slot="credit-bar"]`)?.querySelector(`.created-separator`), MAX_LOAD_LAG);

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
        renderUserInfo(author, userName, anchor, anchor, IS_POST);
    } else {
        // userInfo
        const creditBar = await dynamicElement(() => post.querySelector(`[slot="credit-bar"]`), MAX_LOAD_LAG); // usually it's span, but sometimes div
        const userName = await dynamicElement(() => creditBar.querySelector(`span[slot="authorName"]`)?.querySelector(`a`)?.querySelector(`.whitespace-nowrap`), MAX_LOAD_LAG);

        const anchor = creditBar.querySelector(`.created-separator`);
        if (anchor == null) return; // post view

        renderUserInfo(author, userName, anchor, anchor, IS_POST);
    }
}

async function renderContent(post: Element) {
    // comments view
    if (window.location.href.includes(`/comments/`)) {
        registerImages(post, false);

        return;
    }

    // feed view

    const postContent = await dynamicElement(() => post.querySelector(`.feed-card-text-preview`), MAX_LOAD_LAG);

    if (postContent == null) return;

    if (settings.SELECTABLE_POSTS.isEnabled()) {
        postContent.parentElement.parentElement.removeAttribute(`href`);
    }

    // fix bad formated text
    postContent.classList.remove(`feed-card-text-preview`);

    // fix click events
    const postAnchor = post.querySelector(`a[slot="text-body"]`);
    if(postAnchor != null) {
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
        const anyImage = await dynamicElement(() => post.querySelector(`faceplate-img`), MAX_LOAD_LAG);

        if (anyImage != null) {
            post.querySelectorAll(`faceplate-img`).forEach(imageContainer => {
                const href = imageContainer.getAttribute(`src`);

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
        });
    }
}

async function renderUnwrapPostButton(post: Element, postContent: Element) {
    // hack to await when post loaded properly
    const postShadowRoot = await dynamicElement(() => post.shadowRoot, MAX_LOAD_LAG);

    const renderedHeight = postContent.getBoundingClientRect().height;

    postContent.classList.add(`pp_post_noWrap`);
    const actualHeight = postContent.getBoundingClientRect().height;
    postContent.classList.remove(`pp_post_noWrap`);

    if (actualHeight > renderedHeight + 5) {
        const unwrapContainer = appendElement(post, `div`, `pp_post_unwrapContainer`);
        post.shadowRoot.append(unwrapContainer);
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
