import { appendSvg, buildSvg } from '../../utils/svg';
import { checkIsRendered, dynamicElement } from '../../utils/tools';
import { appendElement, prependElement } from '../../utils/element';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { FeedLocation, getFeedLocation } from './feedLocation';
import { FeedSort, getFeedSorts } from './feedSort';
import { getCurrentSub } from '../subs/subs';
import style from './feedButtons.less';

import buttonBest from '@resources/feedButtons/feedButtonBest.svg';

import settingsSvg from '@resources/settingsGear.svg';

import buttonHot from '@resources/feedButtons/feedButtonHot.svg';
import buttonNew from '@resources/feedButtons/feedButtonNew.svg';
import buttonRising from '@resources/feedButtons/feedButtonRising.svg';
import buttonTop from '@resources/feedButtons/feedButtonTop.svg';

import { MAX_LOAD_LAG } from '../../defines';
import { FeedSettingsContext, feedSettingsWindow } from './feedSettings/feedSettingsWindow';
import { customFeedData, defaultFeedData, FeedData, generateFeedHref, subsFeedData, subsLatestSort } from './feed';
import { getCurrentCustomFeed } from '../customFeed/customFeed';

css.addStyle(style);

const sortIcons: { [key: string]: string } = {
    Best: buttonBest,
    Hot: buttonHot,
    New: buttonNew,
    Top: buttonTop,
    Rising: buttonRising
};

export async function renderFeedButtons(main: Element) {
    if (settings.FEED_BUTTONS.isDisabled() || window.location.href.includes(`/about/`)) return;

    if (checkIsRendered(main)) return;

    const feedPanel = await dynamicElement(() => main.querySelector(`shreddit-async-loader[bundlename="shreddit_sort_dropdown"]`), MAX_LOAD_LAG);

    const sortDropdown = await dynamicElement(() => feedPanel?.querySelector(`shreddit-sort-dropdown`), MAX_LOAD_LAG);

    // skip invalid dropdown
    if (sortDropdown == null || sortDropdown.getAttribute(`trigger-id`) == `comment-sort-button`) return;

    feedPanel.classList.add(`pp_feedPanel`);

    const feedPanelContent = sortDropdown.parentElement.parentElement;

    const location = getFeedLocation();

    // remove rudiment
    if (location == FeedLocation.Custom && feedPanel.previousElementSibling.className == `s:invisible`) {
        feedPanel.previousElementSibling.remove();
    }

    // get feed sorting
    const currentSortText = sortDropdown.querySelector(`div[slot="selected-item"]`)?.textContent;
    const currentSort = FeedSort[currentSortText as keyof typeof FeedSort];
    sortDropdown.remove();

    let data = defaultFeedData.get(FeedLocation[location]);
    if (location == FeedLocation.Sub) {
        const sub = getCurrentSub();
        const subData = subsFeedData.get(sub);

        if (subData) {
            data = subData;
        }

        subsLatestSort.set(sub, currentSort);
    }
    if (location == FeedLocation.Custom) {
        const custom = getCurrentCustomFeed();
        const customData = customFeedData.get(custom);

        if (customData != null) {
            data = customData;
        }
    }

    const sorts = getFeedSorts(location);

    if (feedPanel.parentElement.className != `flex justify-between flex-wrap mb-xs mt-xs`) {
        feedPanel.parentElement.style.marginBottom = `1rem`;
    }

    const buttonsContainer = prependElement(feedPanelContent, `div`, `pp_feedPanel_buttons`);

    // shortcut buttons
    for (const sort of sorts) {
        if (data.hiddenSort.includes(sort) && sort != currentSort) continue;

        const button = appendElement(buttonsContainer, `a`, [
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
        ]) as HTMLAnchorElement;

        button.href = generateFeedHref(location, sort);

        const isCurrent = sort == currentSort;
        button.classList.toggle(`bg-secondary-background-selected`, isCurrent);
        button.classList.toggle(`!text-neutral-content-strong`, isCurrent);

        const spanContainer = appendElement(button, `span`, [`inline-flex`, `flex-row`, `items-center`, `gap-xs`, `py-[var(--rem10)]`, `leading-5`, `font-14`]);

        let graphic = sortIcons[sort];
        if (graphic != null) {
            let svg = buildSvg(graphic, 16, 16);

            spanContainer.append(svg);
        }

        const spanText = appendElement(spanContainer, `span`);
        spanText.textContent = sort;
    }

    // settings button
    const settingsButtonContainer = appendElement(feedPanelContent, `div`, `pp_feedPanel_settings_container`);
    const settingsButton = appendElement(settingsButtonContainer, `div`, `pp_feedPanel_settings`);
    appendSvg(settingsButton, settingsSvg, 18, 18);

    settingsButton.addEventListener(`click`, event => {
        feedSettingsWindow.open({ location: location } as FeedSettingsContext);
    });
}
