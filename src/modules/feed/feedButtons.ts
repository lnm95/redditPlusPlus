import { CURRENT_COLOR, NONE_COLOR, appendSvg, buildSvg } from '../../utils/svg';
import { checkIsRendered, dynamicElement } from '../../utils/tools';
import { appendElement, prependElement } from '../../utils/element';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { FeedLocation, GetFeedLocation } from './feedLocation';
import { FeedSort, GetFeedSorts } from "./feedSort";
import { getCurrentSub, subSettings } from '../subs/subs';
import style from './feedButtons.less';

import buttonBest_empty from '@resources/feedButtons/feedButtonBest_empty.svg';
import buttonBest from '@resources/feedButtons/feedButtonBest.svg';

import settingsSvg from '@resources/settingsGear.svg';

import buttonHot from '@resources/feedButtons/feedButtonHot.svg';
import buttonNew from '@resources/feedButtons/feedButtonNew.svg';
import buttonRising from '@resources/feedButtons/feedButtonRising.svg';
import buttonTop from '@resources/feedButtons/feedButtonTop.svg';


import { CheckFeedRedirect, IsUnsetedFeed } from './feedRedirect';
import { notify, pp_log } from '../toaster';
import { MAX_LOAD_LAG } from '../../defines';
import { feedSettingsWindow } from './feedSettings/feedSettingsWindow';

css.addStyle(style);

const sortIcons: { [key: string]: string } = {
    Best: buttonBest,
    Hot: buttonHot,
    New: buttonNew,
    Top: buttonTop,
    Rising: buttonRising
};

const buttonClasses = [
    `inline-flex`,
    `flex-col`,
    `text-secondary-plain-weak`,
    `font-semibold`,
    `rounded-full`,
    `hover:no-underline`,
    `hover:text-secondary-plain`,
    `hover:bg-secondary-background-hover`,
    `hover:text-secondary-content`,
    `active:bg-secondary-background`,
    `ps-[var(--rem16)]`,
    `pe-[var(--rem16)]`
];


interface HrefGenerator {
    (feedName: string): string;
}

export async function renderFeedButtons(main: Element) {
    if (settings.FEED_BUTTONS.isDisabled() || window.location.href.includes(`/about/`)) return;

    if (checkIsRendered(main)) return;

    const feedPanel = await dynamicElement(() => main.querySelector(`shreddit-async-loader[bundlename="shreddit_sort_dropdown"]`), MAX_LOAD_LAG);

    const sortDropdown = await dynamicElement(() => feedPanel?.querySelector(`shreddit-sort-dropdown`), MAX_LOAD_LAG);

    // skip invalid dropdown    
    if (sortDropdown == null || sortDropdown.getAttribute(`trigger-id`) == `comment-sort-button`) return;


    feedPanel.classList.add(`pp_feedPanel`);

    const feedPanelContent = sortDropdown.parentElement.parentElement;



    const location = GetFeedLocation();

    // get feed sort
    const currentSortText = sortDropdown.querySelector(`div[slot="selected-item"]`)?.textContent;
    const currentSort = FeedSort[currentSortText as keyof typeof FeedSort];
    sortDropdown.remove();

    const sorts = GetFeedSorts(location);
    
    

    
    if(feedPanel.parentElement.className != `flex justify-between flex-wrap mb-xs mt-xs`) {
        feedPanel.parentElement.style.marginBottom = `1rem`;
    }

    const buttonsContainer = prependElement(feedPanelContent, `div`, `pp_feedPanel_buttons`);

    // shortcut buttons
    const isUnseted = IsUnsetedFeed();

    for (const sort of sorts) {
        const button = appendElement(buttonsContainer, `a`, [
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
        ]) as HTMLAnchorElement;

        button.href = generateHref(location, sort);

        const isCurrent = sort == currentSort;
        button.classList.toggle(`bg-secondary-background-selected`, isCurrent);
        button.classList.toggle(`!text-neutral-content-strong`, isCurrent);

        const spanContainer = appendElement(button, `span`, [`inline-flex`, `flex-row`, `items-center`, `gap-xs`, `py-[var(--rem10)]`, `leading-5`, `font-14`, `pp_feedButton`]);

        let graphic = sortIcons[sort];
        if (graphic != null) {
            let svg = buildSvg(graphic, 16, 16);

            spanContainer.append(svg);
        }

        const spanText = appendElement(spanContainer, `span`);
        spanText.textContent = sort;

        /*
        if (isUnseted && CheckFeedRedirect(location, feed)) {
            button.click();
        }*/
    }

    // settings button
    const settingsButtonContainer = appendElement(feedPanelContent, `div`, `pp_feedPanel_settings_container`);
    const settingsButton = appendElement(settingsButtonContainer, `div`, `pp_feedPanel_settings`);
    appendSvg(settingsButton, settingsSvg, 18, 18);

    settingsButton.addEventListener(`click`, event => {
        feedSettingsWindow.open({ location: location });
    });

}


function generateHref(location: FeedLocation, sort: FeedSort): string {
    const lowerCaseSort = sort.toString().toLowerCase();

    switch (location) {
        case FeedLocation.Sub:
            return `/r/${getCurrentSub()}/${lowerCaseSort}/`;
        case FeedLocation.Home:
            return `/${lowerCaseSort}/?feed=home`;
        case FeedLocation.Popular:
            return `/r/popular/${lowerCaseSort}/`;
        case FeedLocation.All:
            return `/r/all/${lowerCaseSort}/`;
    }
}


async function renderFeedButtonsOld(main: Element, feedDropdown: Element) {
    if (settings.FEED_BUTTONS.isDisabled()) return;

    if (checkIsRendered(main)) return;

    // get current feed
    const currentFeed = feedDropdown?.querySelector(`div[slot="selected-item"]`)?.textContent;
    feedDropdown?.remove();

    const location = GetFeedLocation();

    // get container
    let buttonsContainer = null;
    let hrefGenerator: HrefGenerator | null = null;
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
                return `/r/${location == FeedLocation.Popular ? `popular` : `all`}/${feed.toLowerCase()}/`;
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
        if (feedpanel != null) {
            feedpanel.classList.toggle(`justify-between`, false);
            feedpanel.classList.toggle(`flex-wrap`, false);
            feedpanel.classList.toggle(`pp_feedPanel`, true);
        }

        const space = document.createElement(`div`);
        space.classList.add(`pp_feedPanel_space`);
        buttonsContainer.after(space);

        let currentSubSettings = subSettings.get(subName);
        const isDefault = currentSubSettings.defaultSort == undefined ? currentFeed == settings.DEFAULT_FEED_SUB.get() : currentFeed == currentSubSettings.defaultSort;

        const defaultFeedMark = document.createElement(`div`);
        defaultFeedMark.classList.add(`pp_defaultFeed_mark`);
        let svg = buildSvg(isDefault ? buttonBest : buttonBest_empty, 16, 16);
        defaultFeedMark.append(svg);
        space.after(defaultFeedMark);

        const defaultFeedMarkHint = appendElement(defaultFeedMark, `div`, `pp_defaultFeed_mark_hint`);
        const defaultFeedMarkHintSpan = appendElement(defaultFeedMarkHint, `span`);
        defaultFeedMarkHintSpan.textContent = isDefault ? `${currentFeed} is default feed for r/${subName}` : `Set ${currentFeed} as default feed for r/${subName}`;

        if (!isDefault) {
            defaultFeedMark.addEventListener(
                `click`,
                () => {
                    const updatedSvg = buildSvg(buttonBest, 16, 16);
                    svg.replaceWith(updatedSvg);

                    defaultFeedMarkHintSpan.textContent = `${currentFeed} is default feed for r/${subName}`;

                    currentSubSettings.defaultSort = currentFeed;
                    subSettings.set(subName, currentSubSettings);
                },
                { once: true }
            );
        }
    }

    // render buttons
    const feeds = GetFeedSorts(location);
    const isUnseted = IsUnsetedFeed();

    for (const feed of feeds) {
        const button = appendElement(buttonsContainer, `a`, buttonClasses) as HTMLAnchorElement;
        button.href = hrefGenerator(feed);

        const isCurrent = feed == currentFeed;
        button.classList.toggle(`bg-secondary-background-selected`, isCurrent);
        button.classList.toggle(`!text-neutral-content-strong`, isCurrent);

        const spanContainer = appendElement(button, `span`, [`inline-flex`, `flex-row`, `items-center`, `gap-xs`, `py-[var(--rem10)]`, `leading-5`, `font-14`, `pp_feedButton`]);

        let graphic = sortIcons[feed];
        if (graphic != null) {
            let svg = buildSvg(graphic, 16, 16);

            spanContainer.append(svg);
        }

        const spanText = appendElement(spanContainer, `span`);
        spanText.textContent = feed;

        if (isUnseted && CheckFeedRedirect(location, feed)) {
            button.click();
        }
    }
}
