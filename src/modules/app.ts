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
import { renderUserPage } from './users/userPage';
import { clearHiddenContentButton } from './filters/hiddenContent';
import { closeAllWindows } from '../utils/window';
import { renderRightSidebar } from './rightSidebar';

export async function renderApp() {
    css.addStyle(style, `app`);

    const app = await dynamicElement(() => document.body.querySelector(`shreddit-app`)?.querySelector(`.grid-container`));

    if (checkIsRendered(app)) return;

    clearHiddenContentButton();

    closeAllWindows();

    if (window.location.href.includes(`/user/`) && !window.location.href.includes(`/m/`)) {
        renderUserPage(document.body);
    } else {
        renderFeed(document.body);
    }

    renderComments(document.body);

    const leftSidebar = await dynamicElement(() => document.body.querySelector(`#left-sidebar-container`), 3000);

    renderSidebar(leftSidebar);

    const pageContainer = leftSidebar.parentElement;
    pageContainer.classList.add(`pp_pageContainer`);

    const mainFeed = pageContainer.querySelector(`.subgrid-container`);
    mainFeed.classList.add(`pp_mainFeed`);

    const rightSidebar = await dynamicElement(() => document.body.querySelector(`#right-sidebar-container`));
    renderRightSidebar(rightSidebar);

    renderWideMode(pageContainer, rightSidebar);

    renderBiggerFonts();
}
