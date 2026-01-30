import { dynamicElement } from '../../utils/tools';
import { initializePostObserver } from '../feed/feed';
import { renderPost } from '../posts/posts';
import { getCurrentUser } from './users';
import style from './userPage.less';
import { css } from '../customCSS';
import { MAX_LOAD_LAG } from '../../defines';
import searchSvg from '@resources/subFilter.svg';
import { CURRENT_COLOR, NONE_COLOR, prependSvg } from '../../utils/svg';

css.addStyle(style);

export async function renderUserPage(container: Element) {
    const subgrid = await dynamicElement(() => container.querySelector(`#subgrid-container`), MAX_LOAD_LAG);

    if (subgrid == null) return;

    renderButtons(subgrid);

    renderPosts(subgrid);
}

async function renderPosts(subgrid: Element) {
    const feed = await dynamicElement(() => subgrid.querySelector(`shreddit-feed`), MAX_LOAD_LAG);

    if (feed == null) return;

    // render embedded posts
    feed.querySelectorAll(`shreddit-post`).forEach(post => {
        renderPost(post);
    });

    // render loaded posts
    initializePostObserver(feed);
}

async function renderButtons(subgrid: Element) {
    const userPageContainer = await dynamicElement(() => subgrid.querySelector(`main`)?.querySelector(`div`), MAX_LOAD_LAG);

    const shyNotice = userPageContainer?.lastElementChild?.querySelector('.text-body-1');
    if (shyNotice == null || !shyNotice.textContent.includes(`hidden`)) return;

    const currentUser = getCurrentUser();
    const tabs = userPageContainer.querySelector(`#profile-feed-tabgroup`);

    renderSearchButton(tabs, `#profile-tab-posts_tab`, `/user/${currentUser}/search/?q=&sort=new`);
    renderSearchButton(tabs, `#profile-tab-comments_tab`, `/user/${currentUser}/search/?q=&sort=new&type=comments`);
}

function renderSearchButton(tabs: Element, selector: string, url: string) {
    const postButton = tabs.querySelector(selector) as HTMLAnchorElement;
    postButton.href = url;
    const postSpan = postButton.querySelector(`span .gap-xs`);
    prependSvg(postSpan, searchSvg, 16, 16, { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR });
}
