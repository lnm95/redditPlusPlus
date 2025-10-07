import { buildSvg } from '../utils/svg';
import { appendElement } from '../utils/element';
import { css } from './customCSS';
import style from './scrollToTop.less';
import scrollButtonSvg from '@resources/scrollButton.svg';
import { settings } from './settings/settings';
import { animate, observeFor } from '../utils/tools';

const START_Y: number = 1000;

let scrollToTop: HTMLElement = null;
let scrollButton: SVGSVGElement = null;

// FAB (Floating Action Button) elements
let scrollFAB: HTMLElement = null;
let fabButton: SVGSVGElement = null;

let prevScrollHeight: number = 0;
let isWide = false;
let isBottom = false;

let contentBlock: HTMLElement = null;
let sidebarBlock: HTMLElement = null;

// Debounce timer for resize events
let resizeTimer: ReturnType<typeof setTimeout> | null = null;

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

    sidebarBlock = sidebar.querySelector(`#flex-left-nav-container`);

    const sidebarButton = sidebar.querySelector(`#flex-nav-buttons`);
    sidebarButton.addEventListener(`click`, event => {
        animate(() => {
            checkScreenWidth();
        }, 0.5);
    });

    scrollToTop = appendElement(main.parentElement, `div`, `pp_scrollToTop`);

    scrollButton = buildSvg(scrollButtonSvg, 40, 40);
    scrollToTop.append(scrollButton);

    // Create FAB (Floating Action Button) for very small spaces
    scrollFAB = appendElement(document.body, `div`, `pp_scrollToTop_fab`);
    fabButton = buildSvg(scrollButtonSvg, 24, 24);
    scrollFAB.append(fabButton);

    const handleScrollClick = () => {
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
    };

    scrollToTop.addEventListener(`click`, handleScrollClick);
    scrollFAB.addEventListener(`click`, handleScrollClick);

    window.addEventListener('resize', event => {
        // Debounce resize events to improve performance
        if (resizeTimer) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(() => {
            checkScreenWidth();
            resizeTimer = null;
        }, 150);
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
    const availableSpace = right - left;

    // Minimum space needed for the button (40px icon + padding)
    const minButtonSpace = 60;
    // Optimal button width
    const optimalWidth = 100;
    // Minimum gap needed (space for button + margins)
    const minGap = 80;

    let buttonWidth = optimalWidth;
    let leftPosition = (left + right) / 2 - buttonWidth / 2;

    // Adaptive width and positioning based on available space
    if (availableSpace >= minGap + 40) {
        // Enough space - use optimal or constrained width
        buttonWidth = Math.min(optimalWidth, availableSpace - 20); // 20px total margin
        leftPosition = (left + right) / 2 - buttonWidth / 2;
    } else if (availableSpace >= minButtonSpace) {
        // Limited space - use minimal width
        buttonWidth = Math.max(minButtonSpace, availableSpace - 10); // 10px minimal margin
        leftPosition = (left + right) / 2 - buttonWidth / 2;
    } else {
        // Try positioning at the edge of sidebar if there's some space
        if (availableSpace >= 40 && availableSpace < minButtonSpace) {
            buttonWidth = Math.max(40, availableSpace - 5);
            leftPosition = left + (availableSpace - buttonWidth) / 2;
        } else {
            // Last resort - position over the sidebar edge (semi-transparent)
            buttonWidth = 60;
            leftPosition = left - 30; // Half over sidebar, half in gap
            scrollToTop.style.opacity = '0.7';
        }
    }

    // Apply the calculated dimensions and position
    scrollToTop.style.width = `${buttonWidth}px`;
    scrollToTop.style.left = `${leftPosition}px`;

    // Reset opacity if not in last resort mode
    if (availableSpace >= 40) {
        scrollToTop.style.opacity = '';
    }

    // Check if page is actually scrollable
    const isPageScrollable = document.documentElement.scrollHeight > window.innerHeight;

    // Determine which button to show based on available space and scrollability
    const shouldShowRegular = isPageScrollable && (isBottom || prevScrollHeight > 0) && availableSpace >= 30;
    const shouldShowFAB = isPageScrollable && (isBottom || prevScrollHeight > 0) && availableSpace < 30;
    const inverted = !isBottom && prevScrollHeight > 0;

    // Show/hide regular scroll button
    scrollToTop.classList.toggle(`pp_scrollToTop_hidden`, !shouldShowRegular);
    scrollButton.classList.toggle(`pp_scrollToTop_inverted`, inverted);

    // Show/hide FAB
    scrollFAB.classList.toggle(`pp_scrollToTop_fab_hidden`, !shouldShowFAB);
    fabButton.classList.toggle(`pp_scrollToTop_inverted`, inverted);

    // Add classes for different space conditions
    scrollToTop.classList.toggle(`pp_scrollToTop_compact`, availableSpace < minGap);
    scrollToTop.classList.toggle(`pp_scrollToTop_minimal`, availableSpace < minButtonSpace);
}
