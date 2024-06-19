import { appendNew } from '../../utils/tools';
import { Window } from '../../utils/window';
import { css } from '../customCSS';
import { SettingProperty, settings } from './settings';
import style from './settingsWindow.less';

css.addStyle(style);

export const settingsWindow: Window = new Window('Settings', renderSettingsWindow, closeSettingsWindow);

let changes: number = 0;

function renderSettingsWindow(win: Window, context: any) {
    // hack to close user menu
    document.body.click();

    changes = 0;

    const changesBannerContainer = appendNew(win.content, `div`, `pp_settings_changesBannerContainer`);
    const changesBanner = appendNew(changesBannerContainer, `div`, `pp_settings_changesBanner`);
    changesBanner.textContent = `Page will be reloaded to apply new settings`;

    const scroll = appendNew(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);

    const elements = appendNew(scroll, `div`, `pp_window_elementsContainer`);

    addSettingToggle(`Wide mode`, `Make focus on the content by replaced right sidebar and limited width of content`, settings.WIDE_MODE);
    addSettingToggle(`Bigger fonts`, `Make fonts bigger for better reading`, settings.BIGGER_FONTS);
    addSettingToggle(`Better notify popup`, `Make notify popup a bit larger and remove useless button`, settings.NOTIFY_POPUP);
    addSettingToggle(`Redirect suggestion`, `Show suggestion to redirect from old.reddit and new.reddit to compatible pages`, settings.REDIRECT_SUGGESTION);
    addSettingToggle(`Redirect forced`, `Automatically redirect to compatible pages`, settings.REDIRECT_FORCED);

    addSubtittle(`Left sidebar`);
    addSettingToggle(`Sub filter`, `Tool for find subs on sidebar by name`, settings.SUB_FILTER);
    addSettingToggle(`Show Custom feeds`, null, settings.SIDEBAR_CUSTOMS);
    addSettingToggle(`Show Recent`, null, settings.SIDEBAR_RECENT);
    addSettingToggle(`Show Communities`, null, settings.SIDEBAR_SUBS);
    addSettingToggle(`Show Resources`, null, settings.SIDEBAR_RESOURCES);

    addSubtittle(`Common`);
    addSettingToggle(`Scroll to top button`, null, settings.SCROLL_TO_TOP);
    addSettingToggle(`Collapse Awards`, `Automatic collapse the award's button for none upvoted posts and comments`, settings.COLLAPSE_AWARDS);
    addSettingToggle(`Remove Awards`, `Remove the award's buttons completely`, settings.COLLAPSE_AWARDS_COMPLETELY);

    addSubtittle(`Feed`);
    addSettingToggle(`Feed buttons`, `Unwrap feed sorting buttons`, settings.FEED_BUTTONS);
    addSettingToggle(`Flairs bar`, `Display available flairs to faster navigation. Specific flairs may be hidden via subreddit's flairs settings`, settings.FLAIR_BAR);
    addSettingToggle(`Selectable text`, `Make a text selectable when posts viewed in feed`, settings.SELECTABLE_POSTS);
    addSettingToggle(`Unwrap button`, `Show the unwrap button for long-text posts in feed`, settings.UNWRAP_POST);
    addSettingToggle(`Soft background`, `Make the background of posts with soft gradient color`, settings.BACKPLATES);
    addSettingToggle(`Show bookmark`, `Show the bookmark button for saved and upvoted posts`, settings.SAVED_BOOKMARK_POSTS);
    addSettingToggle(`Show bookmark always`, `Show the bookmark button for all posts`, settings.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS);

    addSubtittle(`Comments`);
    addSettingToggle(`Sort buttons`, `Unwrap the comment's sort buttons`, settings.COMMENTS_SORT_BUTTONS);
    addSettingToggle(`Remember sort`, `Remember latest used comment's sort`, settings.COMMENTS_REMEMBER_SORT);
    addSettingToggle(`Unwrap "more replies"`, `Automatically unwrap more replies when it becomes visible`, settings.UNWRAP_MORE_REPLIES);
    addSettingToggle(`User info`, `Show user's karma and "new user" mark`, settings.USER_INFO);
    addSettingToggle(`User tags`, `Enable custom tags (sets via comment's context menu)`, settings.USER_TAGS);
    addSettingToggle(`Show nicknames`, `Use user's nicknames instead profile names`, settings.SHOW_NAMES);
    addSettingToggle(`Hide share button`, `Replace the share button to comment's context menu`, settings.HIDE_SHARE);
    addSettingToggle(`Ghosted comments`, `Make comments ghosted when comment's rating below zero`, settings.GHOSTED_COMMENTS);
    addSettingToggle(`Collapse unwanted`, `Automatic collapse all automoderator and mod's pinned comments`, settings.COLLAPSE_AUTOMODERATOR);
    addSettingToggle(`Show bookmark`, `Show the bookmark button for saved comments`, settings.SAVED_BOOKMARK_COMMENTS);
    addSettingToggle(`Show bookmark always`, `Show the bookmark button for all comments`, settings.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS);

    function addSubtittle(text: string) {
        const subtittle = appendNew(elements, `h3`, `pp_settings_subtittle`);
        subtittle.textContent = text;
    }

    function addSettingToggle(tittleText: string, descriptionText: string, setting: SettingProperty) {
        const propertyArea = appendNew(elements, `div`, `pp_window_element`);

        const header = appendNew(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendNew(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = tittleText;
        if (descriptionText != null) {
            const description = appendNew(header, `div`, `pp_settings_propertyHeader_description`);
            description.textContent = descriptionText;
        } else {
            propertyArea.classList.add(`pp_settings_property_oneLine`);
        }

        const buttonContainer = appendNew(propertyArea, `div`, `pp_settings_propertyButtonContainer`);

        const toggleArea = appendNew(buttonContainer, `div`, `pp_checkBox_panelArea`);
        const toggleContainer = appendNew(toggleArea, `div`, `pp_checkBox_container`);
        const toggleBack = appendNew(toggleContainer, `button`, `pp_checkBox_button`);
        toggleBack.classList.toggle(`pp_checkBox_buttonActive`, setting.isEnabled());
        const knob = appendNew(toggleBack, `div`, `pp_checkBox_knob`);

        let changed = false;

        toggleBack.addEventListener(`click`, e => {
            const state = setting.isEnabled();

            toggleBack.classList.toggle(`pp_checkBox_buttonActive`, !state);

            setting.switch();

            changes += changed ? -1 : 1;
            changed = !changed;

            changesBannerContainer.classList.toggle(`pp_settings_changesBanner_active`, changes > 0);
        });
    }
}

function closeSettingsWindow() {
    if (changes > 0) {
        settings.nextRevision();

        window.location.reload();
    }
}
