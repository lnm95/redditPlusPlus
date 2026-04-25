import { renderUIOptions } from '../../../utils/UI/options';
import { renderUIToggle } from '../../../utils/UI/toggle';
import { ChangesObserver, ChangesSource } from '../../../utils/changesObserver';
import { Database } from '../../../utils/database';
import { appendElement } from '../../../utils/element';
import { Window } from '../../../utils/window';
import { css } from '../../customCSS';
import { getCurrentCustomFeed, realCustomFeedTittle } from '../../customFeed/customFeed';
import { getCurrentSub } from '../../subs/subs';
import { FeedData, customFeedData, defaultFeedData, defaultSorts, subsFeedData } from '../feed';
import { FeedLocation } from '../feedLocation';
import { redirectConfigs } from '../feedRedirect';
import { FeedSort, getFeedSorts } from '../feedSort';

import style from './feedSettingsWindow.less';

css.addStyle(style);

export const feedSettingsWindow: Window = new Window('Feed sort settings', renderFeedSettingsWindow, onCloseWindow);

export interface FeedSettingsContext {
    location: FeedLocation;
}

class Override {
    key: string | null = null;
    database: Database<FeedData> | null = null;
    data: FeedData | null = null;
    area: Element | null = null;

    set(data: FeedData | null): void {
        this.data = data;
        this.database!.set(this.key!, data);

        this.renderArea();
    }

    isOverrided(): boolean {
        return this.data != null;
    }

    renderArea() {
        this.area?.classList.toggle(`pp_feedSettings_overrideSub`, this.isOverrided());
    }
}

const changes = new ChangesObserver();
const sortChanges = new Map<FeedSort, ChangesSource>();

function renderFeedSettingsWindow(win: Window, context: any) {
    changes.Reset();
    changes.RenderBanner(win.content!);

    const location = (context as FeedSettingsContext).location;
    const redirectConfig = redirectConfigs.get(location)!;

    const scroll = appendElement(win.content!, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const commonArea = appendElement(scroll, `div`, `pp_window_elementsContainer`);

    const defaultData: FeedData = defaultFeedData.get(FeedLocation[location]);

    const override = new Override();

    function getOverrideTittle() {
        if (location == FeedLocation.Custom) {
            return `${realCustomFeedTittle ?? override.key} custom feed`;
        } else {
            return `r/${override.key}`;
        }
    }

    if (redirectConfig.isOverridable) {
        const isSub = location == FeedLocation.Sub;
        override.database = isSub ? subsFeedData : customFeedData;
        override.key = isSub ? getCurrentSub() : getCurrentCustomFeed();

        if (override.database && override.key) {
            override.data = override.database.get(override.key);

            const propertyArea = appendElement(commonArea, `div`, `pp_window_element`);

            const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
            const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
            tittle.textContent = `Override ${getOverrideTittle()}`;
            const description = appendElement(header, `div`, `pp_settings_propertyHeader_description`);
            description.textContent = `Apply settings to this ${isSub ? `subreddit` : `custom feed`} only`;

            const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
            const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

            renderUIToggle(controlArea, override.isOverrided(), (state: boolean) => {
                if (state) {
                    override.set({
                        redirect: defaultData.redirect,
                        defaultSort: defaultData.defaultSort,
                        hiddenSort: [...defaultData.hiddenSort]
                    } as FeedData);
                } else {
                    override.set(null);
                }

                renderWindowTittle();
                renderOverrideArea();
            });
        }
    }

    renderWindowTittle();

    function renderWindowTittle() {
        win.tittle.innerHTML = override.isOverrided() ? `Feed sort: <span class="pp_feedSettings_overrideTittle">${getOverrideTittle()}</span>` : `Feed sort: ${redirectConfig.tittle}`;
    }

    const sorts = getFeedSorts(location);

    renderOverrideArea();

    function renderOverrideArea() {
        if (override.area != null) {
            override.area.remove();
            override.area = null;
        }

        override.area = appendElement(scroll, `div`, `pp_window_elementsContainer`);
        override.renderArea();

        const currentData = override.isOverrided() ? override.data! : defaultData;

        function saveCurrentData() {
            if (override.isOverrided()) {
                override.set(currentData);
            } else {
                defaultFeedData.set(FeedLocation[location], currentData);
            }
        }

        let defaultSortToogle: Element | null = null;

        // enable redirect
        if (redirectConfig.isOptional) {
            const propertyArea = appendElement(override.area, `div`, `pp_window_element`);

            const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
            const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
            tittle.textContent = `Redirect`;
            const description = appendElement(header, `div`, `pp_settings_propertyHeader_description`);
            description.innerHTML = `By default Reddit loads the latest used sort for subs. That option forces redirect to the <b>Default sort</b>`;

            const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
            const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

            renderUIToggle(controlArea, currentData.redirect, (state: boolean) => {
                currentData.redirect = state;
                saveCurrentData();

                defaultSortToogle?.classList.toggle(`pp_ui_disabled`, !currentData.redirect);
            });
        }

        // default sort
        {
            const propertyArea = appendElement(override.area, `div`, `pp_window_element`);

            const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
            const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
            tittle.textContent = `Default sort`;
            const description = appendElement(header, `div`, `pp_settings_propertyHeader_description`);
            description.innerHTML = `By default Reddit uses <b>${defaultSorts.get(location)}</b> sort for <b>${redirectConfig.descriptionLabel}</b> feed`;

            const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);

            const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

            defaultSortToogle = renderUIOptions(controlArea, sorts.indexOf(currentData.defaultSort), sorts, (index: number) => {
                currentData.defaultSort = sorts[index];
                saveCurrentData();
            }).parentElement!.parentElement!.parentElement!;

            defaultSortToogle.classList.toggle(`pp_ui_disabled`, !currentData.redirect);
        }

        // buttons visability
        const subtittleSections = appendElement(override.area, `h3`, `pp_settings_subtittle`);
        subtittleSections.textContent = `Visible buttons`;

        sorts.forEach(sort => {
            const propertyArea = appendElement(override.area!, `div`, `pp_window_element`);

            const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
            const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
            tittle.textContent = sort;
            propertyArea.classList.add(`pp_settings_property_oneLine`);

            const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
            const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

            const defaultValue = !currentData.hiddenSort.includes(sort);
            let changesSource: ChangesSource;
            if (sortChanges.has(sort)) {
                changesSource = sortChanges.get(sort)!;
                changesSource.Capture(defaultValue);
            } else {
                changesSource = changes.CreateSource(defaultValue);
                sortChanges.set(sort, changesSource);
            }

            renderUIToggle(controlArea, defaultValue, (state: boolean) => {
                if (state) {
                    currentData.hiddenSort = currentData.hiddenSort.filter(hiddenSort => hiddenSort != sort);
                } else {
                    currentData.hiddenSort.push(sort);
                }

                changesSource.Capture(state);
                saveCurrentData();
            });
        });
    }
}

function onCloseWindow() {
    if (changes.HasChanges()) {
        window.location.reload();
    }
}
