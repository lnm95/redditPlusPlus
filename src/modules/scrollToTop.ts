import { buildSvg } from '../utils/svg';
import { appendElement } from '../utils/element';
import { css } from './customCSS';
import style from './scrollToTop.less';
import scrollButtonSvg from '@resources/scrollButton.svg';
import { settings } from './settings/settings';
import { notify } from './toaster';
import { animate, observeFor } from '../utils/tools';

const START_Y: number = 1000;

let scrollToTop: HTMLElement = null;
let scrollButton: SVGSVGElement = null;

let prevScrollHeight: number = 0;
let isWide = false;
let isBottom = false;

let contentBlock: HTMLElement = null;
let sidebarBlock: HTMLElement = null;

export function renderScrollToTop() {
    if (settings.SCROLL_TO_TOP.isDisabled()) return;

    css.addStyle(style, `scrollToTop`);

    contentBlock = document.body.querySelector(`.main-container`);
    const main = contentBlock.parentElement;

    const sidebar = document.body.querySelector(`#left-sidebar-container`);

    const sidebarObserver = new MutationObserver(mutations => {
        animate(() => {
            checkScreenWidth();
        }, 0.5);
    });

    sidebarObserver.observe(sidebar, { childList: false, subtree: false, attributes: true });

    sidebarBlock = sidebar.querySelector(`#flex-left-nav-contents`);

    const sidebarButton = sidebar.querySelector(`#flex-nav-buttons`);
    sidebarButton.addEventListener(`click`, event => {
        animate(() => {
            checkScreenWidth();
        }, 0.5);
    });

    scrollToTop = appendElement(main.parentElement, `div`, `pp_scrollToTop`);

    scrollButton = buildSvg(scrollButtonSvg, 40, 40);
    scrollToTop.append(scrollButton);

    scrollToTop.addEventListener(`click`, () => {
        if (isBottom) {
            prevScrollHeight = window.scrollY;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            isBottom = false;
        } else if (prevScrollHeight > 0) {
            window.scrollTo({ top: prevScrollHeight, behavior: 'smooth' });
            prevScrollHeight = 0;
            isBottom = true;
        }

        checkScreenWidth();
    });

    window.addEventListener('resize', event => {
        checkScreenWidth();
    });

    let prevIsBottom = false;
    window.addEventListener(`scroll`, event => {
        isBottom = window.scrollY > START_Y;

        if (isBottom != prevIsBottom) {
            prevIsBottom = isBottom;
            checkScreenWidth();
        }
    });

    checkScreenWidth();
}

function checkScreenWidth() {
    const left = sidebarBlock.getBoundingClientRect().right;
    const right = contentBlock.getBoundingClientRect().left;

    scrollToTop.style.left = `${(left + right) / 2 - 50}px`;

    const hidden = !(right - left > 116 && (isBottom || prevScrollHeight > 0));
    const inverted = !isBottom && prevScrollHeight > 0;
    scrollToTop.classList.toggle(`pp_scrollToTop_hidden`, hidden);
    scrollButton.classList.toggle(`pp_scrollToTop_inverted`, inverted);

    if(hidden) {
        setTimeout(() => {
            scrollToTop.classList.toggle(`pp_hidden`, true);
        }, 500);
    } else {
        scrollToTop.classList.toggle(`pp_hidden`, false);
    }
}
