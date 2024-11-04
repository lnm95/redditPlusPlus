import { CURRENT_COLOR, NONE_COLOR, buildSvg } from '../../utils/svg';
import { appendNew, checkIsRendered, dynamicElement } from '../../utils/tools';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { FeedLocation, GetFeedLocation } from './feedLocation';
import { getCurrentSub, subSettings } from '../subs/subs';
import style from './feedButtons.less';

import buttonBest_empty from '@resources/feedButtons/feedButtonBest_empty.svg';
import buttonBest from '@resources/feedButtons/feedButtonBest.svg';
import buttonHot from '@resources/feedButtons/feedButtonHot.svg';
import buttonNew from '@resources/feedButtons/feedButtonNew.svg';
import buttonRising from '@resources/feedButtons/feedButtonRising.svg';
import buttonTop from '@resources/feedButtons/feedButtonTop.svg';
import { CheckFeedRedirect, IsUnsetedFeed } from './feedRedirect';
import { GetFeeds } from './feedType';
import { notify } from '../toaster';

css.addStyle(style);

const BUTTONS_SVG: { [key: string]: string } = {
    Best: buttonBest,
    Hot: buttonHot,
    New: buttonNew,
    Top: buttonTop,
    Rising: buttonRising
};


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

    const location = GetFeedLocation();

    // get container
    let buttonsContainer = null;
    let hrefGenerator: HrefGenerator = null;
    if (location != FeedLocation.Sub) {
        const originContainer = await dynamicElement(() => main.querySelector(`shreddit-layout-event-setter`)?.parentElement);
        originContainer.classList.add(`pp_feedButtonsContainer`);

        buttonsContainer = document.createElement(`div`);
        buttonsContainer.classList.add(`flex`, `mx-md`, `shrink-0`, `pp_feedContainer`);
        originContainer.prepend(buttonsContainer);

        if (location == FeedLocation.Home) {
            hrefGenerator = feed => {
                return `/${feed.toLowerCase()}/?feed=home`;
            };
        } else {
            hrefGenerator = feed => {
                return `/r/${(location == FeedLocation.Popular) ? `popular` : `all`}/${feed.toLowerCase()}/`;
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

        // render default feed dropdown
        const feedpanel = buttonsContainer.parentElement;
        feedpanel.classList.toggle(`justify-between`, false);
        feedpanel.classList.toggle(`flex-wrap`, false);
        feedpanel.classList.toggle(`pp_feedPanel`, true);
        
        const space = document.createElement(`div`);
        space.classList.add(`pp_feedPanel_space`);
        buttonsContainer.after(space);

        let currentSubSettings = subSettings.get(subName);
        const isDefault = (currentSubSettings.defaultFeed == undefined) ? (currentFeed == settings.DEFAULT_FEED_SUB.get()) : (currentFeed == currentSubSettings.defaultFeed);

        const defaultFeedMark = document.createElement(`div`);
        defaultFeedMark.classList.add(`pp_defaultFeed_mark`);
        let svg = buildSvg(isDefault ? buttonBest : buttonBest_empty, 16, 16);
        defaultFeedMark.append(svg);
        space.after(defaultFeedMark);

        const defaultFeedMarkHint = appendNew(defaultFeedMark, `div`, `pp_defaultFeed_mark_hint`);
        const defaultFeedMarkHintSpan = appendNew(defaultFeedMarkHint, `span`);
        defaultFeedMarkHintSpan.textContent = isDefault ? `${currentFeed} is default feed for r/${subName}` : `Set ${currentFeed} as default feed for r/${subName}`;

        if(!isDefault){
            defaultFeedMark.addEventListener(`click`, () => {
                const updatedSvg = buildSvg(buttonBest, 16, 16);
                svg.replaceWith(updatedSvg);

                defaultFeedMarkHintSpan.textContent = `${currentFeed} is default feed for r/${subName}`;

                currentSubSettings.defaultFeed = currentFeed;
                subSettings.set(subName, currentSubSettings);

            }, {once:true});
        }
    }

    // render buttons
    const feeds = GetFeeds(location);
    const isUnseted = IsUnsetedFeed();

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

        if(isUnseted && CheckFeedRedirect(location, feed)){
            button.click();
        }
    }

}
