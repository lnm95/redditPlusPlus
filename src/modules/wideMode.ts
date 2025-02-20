import wideModeStyle from './wideMode.less';
import { css } from './customCSS';
import { settings } from './settings/settings';
import { observeFor } from '../utils/tools';
import { notify } from './toaster';

export function renderWideMode(pageContainer: Element, rightSidebar: Element) {
    if (settings.WIDE_MODE.isDisabled()) return;

    css.addStyle(wideModeStyle, `wideMode`);

    css.addVar(`--pp-content-width`, settings.CONTENT_WIDTH.get());

    css.addVar(`--pp-content-offset`, settings.CONTENT_OFFSET.get());

    // prevent additional render when rightbar already moved
    if (rightSidebar.parentNode == pageContainer) {
        return;
    }

    const originContainer = rightSidebar.parentElement;

    let isWideMode = !(window.innerWidth >= 1392);

    const mainContainer = pageContainer.querySelector(`.main-container`);
    mainContainer.className = `main-container gap-lg w-full`;
    
    // fix for context lookup
    observeFor(pageContainer, renderContextPopup, false);
    observeFor(originContainer, renderContextPopup, false);

    function renderContextPopup(element: HTMLElement) : boolean {        
        if(element.classList.contains(`rounded-[16px]`)) {
            element.classList.add(`pp_rightSidebar_contextLookup`);
            
            if(window.innerWidth < 1392 && element.parentNode != rightSidebar.parentNode) {    
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
            pageContainer.prepend(rightSidebar);

            isWideMode = true;
        }

        if (window.innerWidth < 1392 && isWideMode) {
            originContainer.append(rightSidebar);
            isWideMode = false;
        }
    }
}
