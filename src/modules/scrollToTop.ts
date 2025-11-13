import { buildSvg } from '../utils/svg';
import { appendElement } from '../utils/element';
import { css } from './customCSS';
import style from './scrollToTop.less';
import scrollButtonSvg from '@resources/scrollButton.svg';
import { settings } from './settings/settings';
import { animate, dynamicElement } from '../utils/tools';

const START_Y: number = 1000;

let scrollToTop: HTMLElement = null;
let scrollButton: SVGSVGElement = null;

let prevScrollHeight: number = 0;
let isBottom = false;

let contentBlock: HTMLElement = null;
let sidebarBlock: HTMLElement = null;

const sidebarObserver = new MutationObserver(() => {
    animate(() => {
        checkScreenWidth();
    }, 0.5);
});

export async function renderScrollToTop() {
    if (settings.SCROLL_TO_TOP.isDisabled()) return;

    css.addStyle(style, `scrollToTop`);

    contentBlock = (await dynamicElement(() => document.body.querySelector(`.main-container`))) as HTMLElement;
    const main = contentBlock.parentElement;

    const sidebar = await dynamicElement(() => document.body.querySelector(`#left-sidebar-container`));

    if (scrollToTop == null) {
        // initialize
        window.addEventListener('resize', () => {
            checkScreenWidth();
        });

        let prevIsBottom = false;
        window.addEventListener(`scroll`, () => {
            isBottom = window.scrollY > START_Y;

            if (isBottom != prevIsBottom) {
                prevIsBottom = isBottom;
                checkScreenWidth();
            }
        });
    } else {
        // cleaning
        scrollToTop.remove();
        sidebarObserver.disconnect();
        prevScrollHeight = 0;
        isBottom = false;
    }

    sidebarObserver.observe(sidebar, { childList: false, subtree: false, attributes: true });

    sidebarBlock = sidebar.querySelector(`#flex-left-nav-contents`);

    const sidebarButton = sidebar.querySelector(`#flex-nav-buttons`);
    if (sidebarButton != null) {
        sidebarButton.addEventListener(`click`, event => {
            animate(() => {
                checkScreenWidth();
            }, 0.5);
        });
    }

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

    checkScreenWidth();
}

let isHidden: boolean = true;
function checkScreenWidth() {
    const left = sidebarBlock?.getBoundingClientRect()?.right ?? 0;
    const right = contentBlock.getBoundingClientRect().left;

    scrollToTop.style.left = `${(left + right) / 2 - 50}px`;

    isHidden = !(right - left > 116 && (isBottom || prevScrollHeight > 0));
    const inverted = !isBottom && prevScrollHeight > 0;
    scrollToTop.classList.toggle(`pp_scrollToTop_hidden`, isHidden);
    scrollButton.classList.toggle(`pp_scrollToTop_inverted`, inverted);

    if (isHidden) {
        setTimeout(() => {
            if (isHidden) {
                scrollToTop.classList.toggle(`pp_hidden`, true);
            }
        }, 500);
    } else {
        scrollToTop.classList.toggle(`pp_hidden`, false);
    }
}
