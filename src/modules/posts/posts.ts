import { IS_POST, MAX_LOAD_LAG } from '../../defines';
import { buildSvg } from '../../utils/svg';
import { appendNew, checkIsRendered, dynamicElement } from '../../utils/tools';
import { renderBookmarkPost } from '../bookmark';
import { renderCollapseAward } from '../collapseAwards';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { flairs } from '../subs/subs';
import style from './posts.less';
import backplatesStyle from './postsBackplates.less';

import unwrapButtonSvg from '@resources/postUnwrapButton.svg';

css.addStyle(style);

if (settings.BACKPLATES.isEnabled()) {
    css.addStyle(backplatesStyle);
}

export async function renderPost(post: Element) {
    if (checkIsRendered(post)) return;

    applyShadowRoot(post);

    const sub = post.getAttribute(`subreddit-prefixed-name`).replace(`r/`, ``);
    const flairData = flairs.get(sub);

    const postFlair = post.querySelector(`shreddit-post-flair`)?.querySelector(`a`);
    if (postFlair != null) {
        const postFlairText = decodeURIComponent(postFlair.href.split(`%22`)[1]);

        if (flairData.banned != undefined && flairData.banned.includes(postFlairText)) {
            const next = post.parentElement.nextElementSibling;
            next.classList.add(`pp_bannedPost`);
            post.parentElement.classList.add(`pp_bannedPost`);
            post.classList.add(`pp_bannedPost`);
            post.querySelector(`faceplate-tracker[source="post_credit_bar"]`).classList.add(`pp_bannedPost`);

            return;
        }
    }

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

async function renderContent(post: Element) {
    const postContent = await dynamicElement(() => post.querySelector(`.feed-card-text-preview`), MAX_LOAD_LAG);

    if (postContent == null) return;

    if (settings.SELECTABLE_POSTS.isEnabled()) {
        postContent.parentElement.parentElement.removeAttribute(`href`);
    }

    // fix bad formated text
    postContent.classList.remove(`feed-card-text-preview`);

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

    renderUnwrapPostButton(post, postContent);
}

async function renderUnwrapPostButton(post: Element, postContent: Element) {
    // hack to await when post loaded properly
    const postShadowRoot = await dynamicElement(() => post.shadowRoot, MAX_LOAD_LAG);


    const renderedHeight = postContent.getBoundingClientRect().height;

    postContent.classList.add(`pp_post_noWrap`);
    const actualHeight = postContent.getBoundingClientRect().height;
    postContent.classList.remove(`pp_post_noWrap`);

    if (actualHeight > renderedHeight + 5) {
        const unwrapContainer = appendNew(post, `div`, `pp_post_unwrapContainer`);
        post.shadowRoot.append(unwrapContainer);
        const unwrapButton = appendNew(unwrapContainer, `div`, `pp_post_unwrapButton`);

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
