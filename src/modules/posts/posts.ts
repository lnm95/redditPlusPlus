import { SHOW_RENDERED_POSTS } from '../../_debug/debug';
import { IS_POST, MAX_LOAD_LAG } from '../../defines';
import { buildSvg } from '../../utils/svg';
import { appendNew, checkIsRendered, dynamicElement } from '../../utils/tools';
import { renderBookmarkPost } from '../bookmark';
import { renderCollapseAward } from '../collapseAwards';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { flairs } from '../subs/subs';
import { renderUserInfo } from '../users/userInfo';
import style from './posts.less';
import backplatesStyle from './postsBackplates.less';

import unwrapButtonSvg from '@resources/postUnwrapButton.svg';

css.addStyle(style);

if (settings.BACKPLATES.isEnabled()) {
    css.addStyle(backplatesStyle);
}

export async function renderPost(post: Element) {
    if (checkIsRendered(post)) return;

    checkVisability(post);

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

    if(DEBUG && SHOW_RENDERED_POSTS){
        post.classList.add(`pp_debug_rendered`);
    }
}

async function checkVisability(post: Element) {
    if(window.location.href.includes(`/comments/`)) {
        return;
    }
    
    const sub = post.getAttribute(`subreddit-prefixed-name`).replace(`r/`, ``);
    const flairData = flairs.get(sub);

    const postFlair = await dynamicElement(() => post.querySelector(`shreddit-post-flair`)?.querySelector(`a`), MAX_LOAD_LAG) as HTMLAnchorElement;
    
    if (postFlair != null) {
        const postFlairText = decodeURIComponent(postFlair.href.split(`%22`)[1]);

        if (flairData.banned != undefined && flairData.banned.includes(postFlairText)) {
            const next = await dynamicElement(() => post.parentElement.nextElementSibling, MAX_LOAD_LAG);

            post.remove();
            next?.remove();
        }
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

async function renderHeader(post: Element) {
    
    const author = post.getAttribute(`author`);
    
    if(post.getAttribute(`view-context`) == `AggregateFeed`) {
        if(settings.SHOW_POST_AUTHOR.isDisabled()) return;

        const anchor = await dynamicElement(() => post.querySelector(`span[slot="credit-bar"]`)?.querySelector(`.created-separator`), MAX_LOAD_LAG);
        
        const userNameLink = document.createElement(`a`);
        userNameLink.classList.add(`flex`, `items-center`, `text-neutral-content`, `visited:text-neutral-content-weak`, `a`, `cursor-pointer`, `no-visited`, `no-underline`, `hover:no-underline`);
        userNameLink.setAttribute(`href`, `/user/${author}/`);
        anchor.before(userNameLink);

        const userName = appendNew(userNameLink, `div`, [`text-neutral-content-weak`, `text-12`]);
        userName.textContent = author;

        const point = document.createElement(`span`);
        point.classList.add(`inline-block`, `my-0`, `created-separator`, `text-neutral-content-weak`);
        point.textContent = `•`;
        userNameLink.before(point);

        // userInfo
        renderUserInfo(author, userName, anchor, anchor, IS_POST);

    } else {
        // userInfo
        const creditBar = await dynamicElement(() => post.querySelector(`span[slot="credit-bar"]`), MAX_LOAD_LAG);
        const userName = await dynamicElement(() => creditBar.querySelector(`span[slot="authorName"]`)?.querySelector(`a`)?.querySelector(`.whitespace-nowrap`), MAX_LOAD_LAG);
        const anchor = await dynamicElement(() => creditBar.querySelector(`.created-separator`), MAX_LOAD_LAG);

        renderUserInfo(author, userName, anchor, anchor, IS_POST);
    }



    
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
