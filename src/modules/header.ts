import { observeFor } from '../utils/tools';
import { checkIsRendered, dynamicElement } from '../utils/tools';
import { appendElement } from '../utils/element';
import { css } from './customCSS';
import style from './header.less';
import { renderNotifications } from './notifications';
import { settings } from './settings/settings';
import { renderProfileMenu } from './profileMenu/profileMenu';

css.addStyle(style);

let notificationsInitialized = false;

export async function renderHeader(container: Element) {
    const nav = await dynamicElement(() => container.querySelector(`reddit-header-large`)?.querySelector(`nav`));

    if (checkIsRendered(nav)) return;

    const userPanel = await dynamicElement(() => nav.querySelector(`span[data-part="inbox"]`)?.parentElement?.parentElement);

    userPanel.classList.add(`pp_userPanel`);
    userPanel.addEventListener(
        `click`,
        () => {
            renderProfileMenu();
        },
        { once: true }
    );

    if (settings.NOTIFY_POPUP.isEnabled() && !notificationsInitialized) {
        notificationsInitialized = true;
        observeFor(`HEADER`, document.body, (element: HTMLElement) => {
            if (element.getAttribute(`data-id`) == `notification-container-element` && !checkIsRendered(element)) {
                renderNotifications(element);
            }
        });
    }

    const logo = container.querySelector(`#reddit-logo`);
    const logoPP = appendElement(logo, `div`, `pp_logo`);
    logoPP.textContent = `++`;
    if (DEBUG) {
        logoPP.innerHTML = logoPP.textContent + ` <sup>(dev ${VERSION})</sup>`;
    }
}

