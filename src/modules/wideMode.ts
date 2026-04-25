import { observeFor } from '../utils/tools';
import { css } from './customCSS';
import { renderRightSidebar } from './rightSidebar';
import { settings } from './settings/settings';
import { notify } from './toaster';

import wideModeStyle from './wideMode.less';

function safePixels(value: string): string {
    return `${parseInt(value)}px`;
}

export function renderWideMode(pageContainer: Element, rightSidebar: Element) {
    if (settings.WIDE_MODE.isDisabled() && settings.REMOVE_RIGHT_SIDEBAR.isDisabled()) return;

    css.addStyle(wideModeStyle, `wideMode`);

    css.addVar(`--pp-content-width`, safePixels(settings.CONTENT_WIDTH.get()));

    css.addVar(`--pp-content-offset`, safePixels(settings.CONTENT_OFFSET.get()));

    // prevent additional render when rightbar already moved
    if (rightSidebar.parentNode == pageContainer) {
        return;
    }

    renderRightSidebar(rightSidebar);

    const originContainer = rightSidebar.parentElement!;

    let isWideMode = !(window.innerWidth >= 1392);

    const mainContainer = pageContainer.querySelector(`.main-container`)!;
    mainContainer.className = `main-container gap-lg w-full`;

    // fix for context lookup
    observeFor(`WIDEMODE_PAGE`, pageContainer, renderContextPopup, false);

    if (settings.REMOVE_RIGHT_SIDEBAR.isDisabled()) {
        observeFor(`WIDEMODE_CONTEXT`, originContainer, renderContextPopup, false);
    }

    function renderContextPopup(element: HTMLElement): boolean {
        if (element?.classList?.contains(`rounded-[16px]`) ?? false) {
            element.classList.add(`pp_rightSidebar_contextLookup`);

            if (window.innerWidth < 1392 && element.parentNode != rightSidebar.parentNode) {
                rightSidebar.after(element);
            }
        }

        return false;
    }

    refreshAppRender();
    window.addEventListener('resize', event => {
        refreshAppRender();
    });

    function refreshAppRender() {
        if (window.innerWidth >= 1392 && !isWideMode) {
            if (settings.REMOVE_RIGHT_SIDEBAR.isDisabled()) {
                pageContainer.prepend(rightSidebar);
            }

            isWideMode = true;
        }

        if (window.innerWidth < 1392 && isWideMode) {
            if (settings.REMOVE_RIGHT_SIDEBAR.isDisabled()) {
                originContainer.append(rightSidebar);
            }
            isWideMode = false;
        }
    }
}
