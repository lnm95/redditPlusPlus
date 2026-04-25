import { dynamic } from '../utils/dynamic';
import { appendElement } from '../utils/element';
import { buildSvg } from '../utils/svg';
import { animate } from '../utils/tools';
import { css } from './customCSS';
import { settings } from './settings/settings';
import { pp_log } from './toaster';

import scrollButtonSvg from '@resources/scrollButton.svg';

import style from './scrollToTop.less';

let scrollToTop: HTMLElement | undefined;
let scrollButton: SVGSVGElement | undefined;

let prevScrollHeight: number = 0;
let isBottom = false;

let contentBlock: HTMLElement | null = null;
let sidebarBlock: HTMLElement | null = null;

const sidebarObserver = new MutationObserver(() => {
    animate(() => {
        checkScreenWidth();
    }, 0.5);
});

export async function renderScrollToTop() {
    if (settings.SCROLL_TO_TOP.isDisabled()) return;

    css.addStyle(style, `scrollToTop`);

    contentBlock = await dynamic(() => document.body.querySelector(`.main-container`) as HTMLElement);
    const sidebar = await dynamic(() => document.body.querySelector(`#left-sidebar-container`));

    if (!contentBlock || !sidebar) {
        pp_log(`Failed to render scroll to top`);
        return;
    }

    sidebarBlock = sidebar.querySelector(`#flex-left-nav-contents`)!;
    const main = contentBlock.parentElement!;

    if (!scrollToTop) {
        // initialize
        window.addEventListener('resize', () => {
            checkScreenWidth();
        });

        const anchor = appendElement(document.body, `div`, `pp_scrollToTop_anchor`);

        const observer = new IntersectionObserver(([entry]) => {
            isBottom = !entry.isIntersecting;

            checkScreenWidth();
        });

        observer.observe(anchor);
    } else {
        // cleaning
        scrollToTop.remove();
        sidebarObserver.disconnect();
        prevScrollHeight = 0;
        isBottom = false;
    }

    sidebarObserver.observe(sidebar, { childList: false, subtree: false, attributes: true });

    const sidebarButton = sidebar.querySelector(`#flex-nav-buttons`);
    if (sidebarButton != null) {
        sidebarButton.addEventListener(`click`, event => {
            animate(() => {
                checkScreenWidth();
            }, 0.5);
        });
    }

    scrollToTop = appendElement(main.parentElement!, `div`, `pp_scrollToTop`);

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
    if (!scrollToTop || !scrollButton) return;

    const left = sidebarBlock?.getBoundingClientRect()?.right ?? 0;
    const right = contentBlock?.getBoundingClientRect()?.left ?? 0;
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
