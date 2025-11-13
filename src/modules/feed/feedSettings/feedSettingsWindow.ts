import { ChangesObserver, ChangesSource } from "../../../utils/changesObserver";
import { Database } from "../../../utils/database";
import { appendElement } from "../../../utils/element";
import { renderUIOptions } from "../../../utils/UI/options";
import { renderUIToggle } from "../../../utils/UI/toggle";
import { Window } from "../../../utils/window";
import { css } from "../../customCSS";
import { getCurrentCustomFeed, realCustomFeedTittle } from "../../customFeed/customFeed";
import { getCurrentSub } from "../../subs/subs";
import { customFeedData, defaultFeedData, defaultSorts, FeedData, subsFeedData } from "../feed";
import { FeedLocation } from "../feedLocation";
import { redirectConfigs } from "../feedRedirect";
import { FeedSort, getFeedSorts } from "../feedSort";

import style from "./feedSettingsWindow.less";

css.addStyle(style);


export const feedSettingsWindow: Window = new Window('Feed sort settings', renderFeedSettingsWindow, onCloseWindow);

export interface FeedSettingsContext {
    location: FeedLocation;
}

const changes = new ChangesObserver();
const sortChanges = new Map<FeedSort, ChangesSource>();


function renderFeedSettingsWindow(win: Window, context: any) {

    changes.Reset();
    changes.RenderBanner(win.content);

    const location = (context as FeedSettingsContext).location;
    const redirectConfig = redirectConfigs.get(location);

    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const commonArea = appendElement(scroll, `div`, `pp_window_elementsContainer`);


    let defaultData: FeedData = defaultFeedData.get(FeedLocation[location]);
    let overrideDatabase: Database<FeedData> = null;
    let overrideKey: string = null;
    let overrideData: FeedData = null;
    let isOverrided: boolean = false;
    let overrideArea: Element = null;

    function getOverrideTittle() {
        if (location == FeedLocation.Custom) {
            return `${realCustomFeedTittle ?? overrideKey} custom feed`;
        } else {
            return `r/${overrideKey}`;
        }
    }

    if (redirectConfig.isOverridable) {
        const isSub = location == FeedLocation.Sub;
        overrideDatabase = isSub ? subsFeedData : customFeedData;
        overrideKey = isSub ? getCurrentSub() : getCurrentCustomFeed();
        overrideData = overrideDatabase.get(overrideKey);

        const propertyArea = appendElement(commonArea, `div`, `pp_window_element`);

        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = `Override ${getOverrideTittle()}`;
        const description = appendElement(header, `div`, `pp_settings_propertyHeader_description`);
        description.textContent = `Apply settings to this ${isSub ? `subreddit` : `custom feed`} only`;

        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

        isOverrided = overrideData != null;

        renderUIToggle(controlArea, isOverrided, (state: boolean) => {
            if (state) {
                overrideData = {
                    redirect: defaultData.redirect,
                    defaultSort: defaultData.defaultSort,
                    hiddenSort: [...defaultData.hiddenSort]
                } as FeedData;

                overrideDatabase.set(overrideKey, overrideData);
            } else {
                overrideDatabase.set(overrideKey, null);
            }

            isOverrided = state;
            overrideArea.classList.toggle(`pp_feedSettings_overrideSub`, isOverrided);
            
            renderWindowTittle();
            renderOverrideArea();
        });
    }

    renderWindowTittle();

    function renderWindowTittle() {
        win.tittle.innerHTML = isOverrided ? `Feed sort: <span class="pp_feedSettings_overrideTittle">${getOverrideTittle()}</span>` : `Feed sort: ${redirectConfig.tittle}`;
    }


    const sorts = getFeedSorts(location);

    renderOverrideArea();

    function renderOverrideArea() {
        if (overrideArea != null) {
            overrideArea.remove();
            overrideArea = null;
        }

        overrideArea = appendElement(scroll, `div`, `pp_window_elementsContainer`);
        overrideArea.classList.toggle(`pp_feedSettings_overrideSub`, isOverrided);

        const currentData = isOverrided ? overrideData : defaultData;

        function saveCurrentData() {
            if (isOverrided) {
                overrideDatabase.set(overrideKey, currentData);
            } else {
                defaultFeedData.set(FeedLocation[location], currentData);
            }
        }

        let defaultSortToogle: Element = null;

        // enable redirect
        if (redirectConfig.isOptional) {
            const propertyArea = appendElement(overrideArea, `div`, `pp_window_element`);

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

                defaultSortToogle.classList.toggle(`pp_ui_disabled`, !currentData.redirect);
            });
        }

        // default sort
        {
            const propertyArea = appendElement(overrideArea, `div`, `pp_window_element`);

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
            }).parentElement.parentElement.parentElement;

            defaultSortToogle.classList.toggle(`pp_ui_disabled`, !currentData.redirect);
        }

        // buttons visability
        const subtittleSections = appendElement(overrideArea, `h3`, `pp_settings_subtittle`);
        subtittleSections.textContent = `Visible buttons`;

        sorts.forEach(sort => {
            const propertyArea = appendElement(overrideArea, `div`, `pp_window_element`);

            const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
            const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
            tittle.textContent = sort;
            propertyArea.classList.add(`pp_settings_property_oneLine`);

            const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
            const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

            const defaultValue = !currentData.hiddenSort.includes(sort);
            let changesSource:ChangesSource = null; 
            if(sortChanges.has(sort)) {
                changesSource = sortChanges.get(sort);
                changesSource.Capture(defaultValue);
            } else {
                changesSource = changes.CreateSource(defaultValue);
                sortChanges.set(sort, changesSource);
            }

            renderUIToggle(controlArea, defaultValue, (state: boolean) => {
                if (state) {
                    currentData.hiddenSort = currentData.hiddenSort.filter((hiddenSort) => hiddenSort != sort);
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