import { CURRENT_COLOR, NONE_COLOR, buildSvg } from '../../utils/svg';
import { appendNew, checkIsRendered, dynamicElement } from '../../utils/tools';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { getCurrentSub } from '../subs/subs';
import style from './feedButtons.less';

import buttonBest from '@resources/feedButtons/feedButtonBest.svg';
import buttonHot from '@resources/feedButtons/feedButtonHot.svg';
import buttonNew from '@resources/feedButtons/feedButtonNew.svg';
import buttonRising from '@resources/feedButtons/feedButtonRising.svg';
import buttonTop from '@resources/feedButtons/feedButtonTop.svg';

css.addStyle(style);

const BUTTONS_SVG: { [key: string]: string } = {
    Best: buttonBest,
    Hot: buttonHot,
    New: buttonNew,
    Top: buttonTop,
    Rising: buttonRising
};

const FEED_BUTTONS_EXTENDED = [`Best`, `Hot`, `New`, `Top`, `Rising`];
const FEED_BUTTONS = [`Hot`, `New`, `Top`, `Rising`];

const BUTTON_CLASSES = [
    `inline-flex`,
    `flex-col`,
    `text-neutral-content-weak`,
    `font-semibold`,
    `rounded-full`,
    `hover:no-underline`,
    `hover:bg-secondary-background-hover`,
    `hover:text-secondary-content`,
    `active:bg-secondary-background`,
    `pl-[var(--rem16)]`,
    `pr-[var(--rem16)]`
];

interface HrefGenerator {
    (feedName: string): string;
}

export async function renderFeedButtons(main: Element, feedDropdown: Element) {
    if (settings.FEED_BUTTONS.isDisabled()) return;

    if (checkIsRendered(main)) return;

    // get current feed
    const currentFeed = feedDropdown?.querySelector(`div[slot="selected-item"]`)?.textContent;
    feedDropdown?.remove();

    const isHome = window.location.href.includes(`?feed=home`) || window.location.href == `https://www.reddit.com/`;
    const isPopular = window.location.href.includes(`reddit.com/r/popular/`);
    const isAll = window.location.href.includes(`reddit.com/r/all/`);

    // get container
    let buttonsContainer = null;
    let hrefGenerator: HrefGenerator = null;
    if (isHome || isPopular || isAll) {
        const originContainer = await dynamicElement(() => main.querySelector(`shreddit-layout-event-setter`)?.parentElement);
        originContainer.classList.add(`pp_feedButtonsContainer`);

        buttonsContainer = document.createElement(`div`);
        buttonsContainer.classList.add(`flex`, `mx-md`, `shrink-0`, `pp_feedContainer`);
        originContainer.prepend(buttonsContainer);

        if (isHome) {
            hrefGenerator = feed => {
                return `/${feed.toLowerCase()}/?feed=home`;
            };
        } else {
            hrefGenerator = feed => {
                return `/r/${isPopular ? `popular` : `all`}/${feed.toLowerCase()}/`;
            };
        }
    } else {
        const aboutContainer = await dynamicElement(() => main.querySelector(`a[slot="page-3"]`)?.parentElement?.parentElement);

        buttonsContainer = document.createElement(`div`);
        buttonsContainer.classList.add(`flex`, `mx-md`, `shrink-0`, `pp_feedContainer`);
        aboutContainer.before(buttonsContainer);

        aboutContainer.remove();

        const subName = getCurrentSub();
        hrefGenerator = feed => {
            return `/r/${subName}/${feed.toLowerCase()}/`;
        };
    }

    // render buttons
    const feeds = isHome || isPopular ? FEED_BUTTONS_EXTENDED : FEED_BUTTONS;

    for (const feed of feeds) {
        const button = appendNew(buttonsContainer, `a`, BUTTON_CLASSES) as HTMLAnchorElement;
        button.href = hrefGenerator(feed);

        const isCurrent = feed == currentFeed;
        button.classList.toggle(`bg-secondary-background-selected`, isCurrent);
        button.classList.toggle(`!text-neutral-content-strong`, isCurrent);

        const spanContainer = appendNew(button, `span`, [`inline-flex`, `flex-row`, `items-center`, `gap-xs`, `py-[var(--rem10)]`, `leading-5`, `font-14`, `pp_feedButton`]);

        let graphic = BUTTONS_SVG[feed];
        if (graphic != null) {
            let svg = buildSvg(graphic, 16, 16);

            spanContainer.append(svg);
        }

        const spanText = appendNew(spanContainer, `span`);
        spanText.textContent = feed;
    }
}
