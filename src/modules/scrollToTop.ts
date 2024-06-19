import { buildSvg } from '../utils/svg';
import { appendNew } from '../utils/tools';
import { css } from './customCSS';
import style from './scrollToTop.less';

import scrollButtonSvg from '@resources/scrollButton.svg';
import { notify } from './toaster';
import { settings } from './settings/settings';

let scrollToTop: HTMLElement = null;

const START_Y: number = 1000;

export function renderScrollToTop() {
    if (settings.SCROLL_TO_TOP.isDisabled()) return;

    css.addStyle(style, `scrollToTop`);

    const main = document.body.querySelector(`.main-container`).parentElement;

    scrollToTop = appendNew(main.parentElement, `div`, `pp_scrollToTop`);

    const scrollButton = buildSvg(scrollButtonSvg, 40, 40);
    scrollToTop.append(scrollButton);

    scrollToTop.addEventListener(`click`, () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        isBottom = false;
        scrollToTop.classList.toggle(`pp_scrollToTop_hidden`, true);
    });

    let hasSpace = false;
    let isBottom = false;
    let prevState = false;

    checkSpace();
    window.addEventListener('resize', event => {
        checkSpace();
    });

    function checkSpace() {
        hasSpace = window.innerWidth > 1490;

        scrollToTop.style.left = `${280 + (window.innerWidth - 1490) * 0.26}px`;

        scrollToTop.classList.toggle(`pp_scrollToTop_hidden`, !(hasSpace && isBottom));
    }

    setInterval(() => {
        isBottom = window.scrollY > START_Y;

        if (prevState != !(hasSpace && isBottom)) {
            prevState = !prevState;
            scrollToTop.classList.toggle(`pp_scrollToTop_hidden`, prevState);
        }
    }, 1000);
}
