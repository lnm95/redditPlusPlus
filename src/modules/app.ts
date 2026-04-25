import { MAX_LOAD_LAG } from '../defines';
import { dynamic } from '../utils/dynamic';
import { checkIsRendered } from '../utils/tools';
import { closeAllWindows } from '../utils/window';
import { renderBiggerFonts } from './biggerFonts';
import { renderComments } from './comments/comments';
import { css } from './customCSS';
import { renderFeed } from './feed/feed';
import { clearHiddenContentButton } from './filters/hiddenContent';
import { renderRightSidebar } from './rightSidebar';
import { renderSidebar } from './sidebar/sidebar';
import { pp_log } from './toaster';
import { renderUserPage } from './users/userPage';
import { renderUserSearch } from './users/userSearchPage';
import { renderWideMode } from './wideMode';

import style from './app.less';

export async function renderApp() {
    css.addStyle(style, `app`);

    const app = await dynamic(() => document.body.querySelector(`shreddit-app`)?.querySelector(`.grid-container`));

    if (!app || checkIsRendered(app)) return;

    clearHiddenContentButton();

    closeAllWindows();

    if (window.location.href.includes(`/user/`) && !window.location.href.includes(`/m/`)) {
        if (window.location.href.includes(`/search/`)) {
            renderUserSearch(document.body);
        } else {
            renderUserPage(document.body);
        }
    } else {
        renderFeed(document.body);
    }

    renderComments(document.body);

    const leftSidebar = await dynamic(() => document.body.querySelector(`#left-sidebar-container`), MAX_LOAD_LAG * 2);

    if (!leftSidebar) {
        pp_log(`Failed to render app`);
        return;
    }

    const pageContainer = leftSidebar.parentElement!;
    pageContainer.classList.add(`pp_pageContainer`);

    renderSidebar(leftSidebar);

    const mainFeed = pageContainer.querySelector(`.subgrid-container`)!;
    mainFeed.classList.add(`pp_mainFeed`);

    const rightSidebar = await dynamic(() => document.body.querySelector(`#right-sidebar-container`), MAX_LOAD_LAG);

    if (rightSidebar != null) {
        renderRightSidebar(rightSidebar);

        renderWideMode(pageContainer, rightSidebar);
    }

    renderBiggerFonts();
}
