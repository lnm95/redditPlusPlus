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

let shouldShow: boolean = true;
function checkScreenWidth() {
    const left = sidebarBlock?.getBoundingClientRect()?.right ?? 0;
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
    shouldShow = isPageScrollable && (isBottom || prevScrollHeight > 0) && availableSpace >= 30;
    const inverted = !isBottom && prevScrollHeight > 0;

    scrollToTop.classList.toggle(`pp_hidden`, !shouldShow);
    scrollButton.classList.toggle(`pp_scrollToTop_inverted`, inverted);
}
