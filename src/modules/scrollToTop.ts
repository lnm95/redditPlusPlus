import { buildSvg } from '../utils/svg';
import { appendNew } from '../utils/tools';
import { css } from './customCSS';
import style from './scrollToTop.less';
import scrollButtonSvg from '@resources/scrollButton.svg';
import { settings } from './settings/settings';

const START_Y: number = 1000;

let scrollToTop: HTMLElement = null;
let scrollButton: HTMLElement = null;

let prevScrollHeight: number = 0;
let isWide = false;
let isBottom = false;

export function renderScrollToTop() {
    if (settings.SCROLL_TO_TOP.isDisabled()) return;

    css.addStyle(style, `scrollToTop`);

    const main = document.body.querySelector(`.main-container`).parentElement;

    scrollToTop = appendNew(main.parentElement, `div`, `pp_scrollToTop`);

    scrollButton = buildSvg(scrollButtonSvg, 40, 40) as HTMLElement;
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

        refreshScrollToTop();
    });

    window.addEventListener('resize', event => {
        checkScreenWidth();
    });

    let prevIsBottom = false;
    setInterval(() => {
        isBottom = window.scrollY > START_Y;

        if (isBottom != prevIsBottom) {
            prevIsBottom = isBottom;
            refreshScrollToTop();
        }
    }, 330);

    checkScreenWidth();
}

function checkScreenWidth() {
    isWide = window.innerWidth > 1490;
    scrollToTop.style.left = `${280 + (window.innerWidth - 1490) * 0.26}px`;
    refreshScrollToTop();
}

function refreshScrollToTop() {
    const hidden = !(isWide && (isBottom || prevScrollHeight > 0));
    const inverted = !isBottom && prevScrollHeight > 0;
    scrollToTop.classList.toggle(`pp_scrollToTop_hidden`, hidden);
    scrollButton.classList.toggle(`pp_scrollToTop_inverted`, inverted);
}
