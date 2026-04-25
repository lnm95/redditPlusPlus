import { latestMigration } from './_compatibility/latestMigration';
import { MAX_LOAD_LAG } from './defines';
import { renderApp } from './modules/app';
import { checkSortCommentsRedirect } from './modules/comments/sortButtons';
import { initializeFeedRedirect } from './modules/feed/feedRedirect';
import { renderHeader } from './modules/header';
import { checkRedirect } from './modules/redirect';
import { renderScrollToTop } from './modules/scrollToTop';
import { notify, pp_log } from './modules/toaster';
import { dynamic } from './utils/dynamic';
import { observeFor } from './utils/tools';

// ***********************************************************************************************************************
// ********************************************** ENTRY POINT ************************************************************
// ***********************************************************************************************************************

startRedditPlusPlus();

async function startRedditPlusPlus() {
    const documentBody = await dynamic(() => (document.head != null && document.body != null ? document.body : null));

    if (documentBody == null) {
        pp_log(`Failed to get document.body`);
        return;
    }

    // check dublicates
    let pp_meta = document.head.querySelector(`meta[name="reddit-plus-plus"]`);
    if (pp_meta != null) {
        notify(`Reddit++ ran more than once. Check out the userscript manager to disable dublicates.`, { seconds: 10 });
        return;
    }

    pp_meta = document.createElement(`meta`);
    pp_meta.setAttribute(`name`, `reddit-plus-plus`);
    pp_meta.setAttribute(`version`, VERSION);
    document.head.append(pp_meta);

    latestMigration.check();

    if (checkRedirect()) {
        return;
    }

    initializeFeedRedirect();

    const pp_app = await dynamic(() => documentBody.querySelector(`shreddit-app`), MAX_LOAD_LAG);
    if (pp_app == null || pp_app.getAttribute(`devicetype`) != `desktop`) {
        pp_log(`Reddit++ was stopped for a non compatible page`);
        return;
    }

    renderHeader(documentBody);

    renderApp();
    renderScrollToTop();

    observeFor(`CORE`, documentBody, element => {
        // header
        if (element.matches(`reddit-header-large`) == true) {
            renderHeader(element.parentElement!);
        }

        // content
        const isSubPage = element.matches(`shreddit-app`) == true;

        const isParentSh = element.parentElement?.matches(`shreddit-app`) == true;
        const isMainPage = isParentSh && element.classList.contains(`grid-container`);
        const isUserSearchPage = isParentSh && element.matches(`search-dynamic-id-cache-controller`) == true;

        if (isSubPage || isMainPage || isUserSearchPage) {
            renderApp();
            renderScrollToTop();
            checkSortCommentsRedirect();
        }
    });
}
