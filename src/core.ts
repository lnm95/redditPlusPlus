import { migration_1_0_0 } from './_compatibility/migration_1_0_0';
import { observeFor } from './utils/tools';
import { renderApp } from './modules/app';
import { renderHeader } from './modules/header';
import { checkRedirect } from './modules/redirect';
import { notify, pp_log } from './modules/toaster';
import { MAX_LOAD_LAG } from './defines';
import { dynamicElement } from './utils/tools';
import { checkSortCommentsRedirect } from './modules/comments/sortButtons';

// ***********************************************************************************************************************
// ********************************************** ENTRY POINT ************************************************************
// ***********************************************************************************************************************

startRedditPlusPlus();

async function startRedditPlusPlus() {
    const documentBody = await dynamicElement(() => (document.head != null && document.body != null ? document.body : null));

    // check dublicates
    let pp_meta = document.head.querySelector(`meta[name="reddit-plus-plus"]`);
    if (pp_meta != null) {
        notify(`Reddit++ runned more that one times. Check out userscript manager to disable dublicates.`, { time: 10000 });
        return;
    }

    pp_meta = document.createElement(`meta`);
    pp_meta.setAttribute(`name`, `reddit-plus-plus`);
    pp_meta.setAttribute(`version`, VERSION);
    document.head.append(pp_meta);

    // call latest migration
    migration_1_0_0.check();

    if (checkRedirect()) {
        return;
    }

    const pp_app = await dynamicElement(() => documentBody.querySelector(`shreddit-app`), MAX_LOAD_LAG);
    if (pp_app == null || pp_app.getAttribute(`devicetype`) != `desktop`) {
        pp_log(`Reddit++ was stopped for a non compatible page`);
        return;
    }

    renderHeader(documentBody);

    renderApp();

    observeFor(documentBody, element => {
        // header
        if (element.matches(`reddit-header-large`) == true) {
            renderHeader(element.parentElement);
        }

        // content
        const isSubPage = element.matches(`dsa-transparency-modal-provider`) == true;
        const isMainPage = element.classList.contains(`grid-container`) && element.querySelector(`.main-container`) != null;

        if (isSubPage || isMainPage) {
            renderApp();

            checkSortCommentsRedirect();
        }
    });
}
