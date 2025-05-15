import { appendElement, buildElement } from '../../utils/element';
import { appendSvg, CURRENT_COLOR, NONE_COLOR } from '../../utils/svg';
import { css } from '../customCSS';
import hiddenIcoSvg from '@resources/hiddenIco.svg';
import style from './hiddenContent.less';
import { pp_log } from '../toaster';
import { hiddenContentWindow } from './hiddenContentWindow';
import { dynamicElement } from '../../utils/tools';
import { settings } from '../settings/settings';

css.addStyle(style);

export const hiddenContent = new Array<Element>();
let totalHiddentContent: number = 0;
let renderedHiddentContent: number = 0;

let renderTimer: ReturnType<typeof setTimeout> = null;

let hiddenContentButton: HTMLElement = null;
let hiddenContentSpan: HTMLElement = null;
let contentBlock: HTMLElement = null;
let sidebarBlock: HTMLElement = null;

export function registerHiddenContent(content: Element) {
    hiddenContent.push(content);
    totalHiddentContent++;

    if (hiddenContent.length > parseInt(settings.FILTERED_CONTENT_MAX_COUNT.get())) {
        hiddenContent.splice(0, 1);
    }

    updateHiddenContentButton();
}

export function clearHiddenContentButton() {
    if (hiddenContentButton != null) {
        hiddenContentButton.remove();

        hiddenContent.length = 0;
        totalHiddentContent = 0;
        renderedHiddentContent = 0;
    }
}

async function renderHiddenContentButton() {
    contentBlock = (await dynamicElement(() => document.body.querySelector(`.main-container`))) as HTMLElement;
    sidebarBlock = (await dynamicElement(() => document.body.querySelector(`#right-sidebar-contents`))) as HTMLElement;
    const main = contentBlock.parentElement;

    if (hiddenContentButton == null) {
        hiddenContentButton = buildElement(`div`, [`pp_hiddenContent_button`, `text-neutral-content-weak`]);

        const icon = appendSvg(hiddenContentButton, hiddenIcoSvg, 16, 16, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });
        hiddenContentSpan = appendElement(hiddenContentButton, `span`);

        window.addEventListener('resize', event => {
            checkScreenWidth();
        });

        hiddenContentButton.addEventListener(`click`, event => {
            hiddenContentWindow.open();
        });
    } else {
        hiddenContentButton.classList.toggle(`pp_hiddenContent_button_visible`, false);
    }

    main.parentElement.append(hiddenContentButton);

    setTimeout(() => {
        hiddenContentButton.classList.add(`pp_hiddenContent_button_visible`);
    }, 250);
}

function calculateRenderTime() {
    const maxRenderTime = 250;
    const delta = totalHiddentContent - renderedHiddentContent;
    return delta > 0 ? maxRenderTime / delta : maxRenderTime;
}

async function updateHiddenContentButton() {
    if (hiddenContentButton == null || hiddenContentButton.parentElement == null) {
        await renderHiddenContentButton();
    }

    if (totalHiddentContent == 1) {
        hiddenContentSpan.textContent = `1 post`;
        renderedHiddentContent = 1;
    } else if (renderedHiddentContent < totalHiddentContent && renderTimer == null) {
        renderTimer = setTimeout(() => {
            renderedHiddentContent++;
            hiddenContentSpan.textContent = `${renderedHiddentContent} posts`;

            renderTimer = null;

            updateHiddenContentButton();
        }, calculateRenderTime());
    }

    checkScreenWidth();
}

function checkScreenWidth() {
    const isWide = settings.WIDE_MODE.isEnabled();

    const width = hiddenContentButton.getBoundingClientRect().width + 10;
    const left = isWide ? contentBlock.getBoundingClientRect().right : sidebarBlock.getBoundingClientRect().right;
    const right = isWide ? sidebarBlock.getBoundingClientRect().left : window.innerWidth - 16;
    const charOffset = totalHiddentContent.toString().length * 3;
    hiddenContentButton.style.left = `${(left + right) / 2 - (50 + charOffset)}px`;

    hiddenContentButton.classList.toggle(`pp_hiddenContent_button_visible`, right - left > width);
}
