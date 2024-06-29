import wideModeStyle from './wideMode.less';
import { css } from './customCSS';
import { settings } from './settings/settings';

export function renderWideMode(pageContainer: Element, rightSidebar: Element) {
    if (settings.WIDE_MODE.isDisabled()) return;

    css.addStyle(wideModeStyle, `wideMode`);

    css.addVar(`--pp-content-width`, settings.CONTENT_WIDTH.get());

    // prevent additional render when rightbar already moved
    if (rightSidebar.parentNode == pageContainer) {
        return;
    }

    const originContainer = rightSidebar.parentNode;

    let isWideMode = !(window.innerWidth >= 1392);

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
