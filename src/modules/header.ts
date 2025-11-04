import { observeFor } from '../utils/tools';
import { NONE_COLOR, buildSvg } from '../utils/svg';
import { checkIsRendered, dynamicElement } from '../utils/tools';
import { appendElement } from '../utils/element';
import { css } from './customCSS';
import style from './header.less';
import { renderNotifications } from './notifications';
import { settings } from './settings/settings';
import { settingsWindow } from './settings/settingsWindow';
import settingsButtonSvg from '@resources/settingsButton.svg';

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
            renderSettingsButton();
        },
        { once: true }
    );

    if (settings.NOTIFY_POPUP.isEnabled() && !notificationsInitialized) {
        notificationsInitialized = true;
        observeFor(document.body, (element: HTMLElement) => {
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

function renderSettingsButton() {
    let userMenu = document.getElementById(`user-drawer-content`);

    if (userMenu.querySelector(`faceplate-tracker[noun="pp-settings"]`) != null) {
        return;
    }

    let originSettingsButton = userMenu.querySelector(`faceplate-tracker[noun="settings"]`);

    if (originSettingsButton == null) {
        originSettingsButton = userMenu.querySelector(`faceplate-tracker[noun="login"]`);
    }

    let ppSettingsButton = originSettingsButton.cloneNode(true) as Element;
    ppSettingsButton.setAttribute(`noun`, `pp-settings`);

    originSettingsButton.parentNode.appendChild(ppSettingsButton);

    ppSettingsButton.querySelector(`a`).removeAttribute(`href`);

    const originSvg = ppSettingsButton.querySelector(`svg`);
    const svg = buildSvg(settingsButtonSvg, 20, 20, { strokeColor: NONE_COLOR });
    originSvg.replaceWith(svg);

    let text = ppSettingsButton.querySelector(`.text-14`);
    text.textContent = `Reddit++`;

    ppSettingsButton.addEventListener(`click`, () => {
        settingsWindow.open();
    });
}
