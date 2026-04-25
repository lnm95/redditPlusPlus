import { dynamic } from '../utils/dynamic';
import { appendElement } from '../utils/element';
import { observeFor } from '../utils/tools';
import { checkIsRendered } from '../utils/tools';
import { css } from './customCSS';
import { renderNotifications } from './notifications';
import { renderProfileMenu } from './profileMenu/profileMenu';
import { settings } from './settings/settings';

import style from './header.less';

css.addStyle(style);

//let notificationsInitialized = false;

export async function renderHeader(container: Element) {
    const nav = await dynamic(() => container.querySelector(`reddit-header-large`)?.querySelector(`nav`));

    if (!nav || checkIsRendered(nav)) return;

    const logo = container.querySelector(`#reddit-logo`)!;
    const logoPP = appendElement(logo, `div`, `pp_logo`);
    logoPP.textContent = `++`;
    if (DEBUG) {
        logoPP.innerHTML = logoPP.textContent + ` <sup>(dev ${VERSION})</sup>`;
    }

    dynamic(() => nav.querySelector(`span[data-part="inbox"]`)?.parentElement?.parentElement).then(userPanel => {
        if (!userPanel) return;

        userPanel.classList.add(`pp_userPanel`);
        userPanel.addEventListener(
            `click`,
            () => {
                renderProfileMenu();
            },
            { once: true }
        );
    });

    /*
    if (settings.NOTIFY_POPUP.isEnabled() && !notificationsInitialized) {
        notificationsInitialized = true;
        observeFor(`HEADER`, document.body, (element: HTMLElement) => {
            if (element.getAttribute(`data-id`) == `notification-container-element` && !checkIsRendered(element)) {
                renderNotifications(element);
            }
        });
    }*/
}
