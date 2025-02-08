import { checkIsRendered, dynamicElement } from '../utils/tools';
import { renderWideMode } from './wideMode';

import style from './app.less';
import { css } from './customCSS';
import { renderSidebar } from './sidebar/sidebar';
import { renderBiggerFonts } from './biggerFonts';
import { renderFeed } from './feed/feed';
import { notify } from './toaster';
import { renderComments } from './comments/comments';
import { renderScrollToTop } from './scrollToTop';

export async function renderApp() {
    css.addStyle(style, `app`);

    const app = await dynamicElement(() => document.body.querySelector(`shreddit-app`)?.querySelector(`.grid-container`));

    if (checkIsRendered(app)) return;

    renderFeed(document.body);

    renderComments(document.body);

    const leftSidebar = await dynamicElement(() => document.body.querySelector(`#left-sidebar-container`), 3000);

    renderSidebar(leftSidebar);

    const pageContainer = leftSidebar.parentElement;
    pageContainer.classList.add(`pp_pageContainer`);

    const mainFeed = pageContainer.querySelector(`.subgrid-container`);
    mainFeed.classList.add(`pp_mainFeed`);

    const rightSidebar = await dynamicElement(() => document.body.querySelector(`#right-sidebar-container`));
    rightSidebar.classList.add(`pp_rightSidebar`);
    rightSidebar.classList.toggle(`styled-scrollbars`, true);

    renderWideMode(pageContainer, rightSidebar);

    renderBiggerFonts();

    renderScrollToTop();
}
