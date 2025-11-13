import arrowSvg from '@resources/settingsArrow.svg';
import { appendElement } from '../../utils/element';
import { buildSvg } from '../../utils/svg';
import { InputParams, renderUIInput } from '../../utils/UI/input';
import { renderUIOptions } from '../../utils/UI/options';
import { renderUIToggle } from '../../utils/UI/toggle';
import { Window } from '../../utils/window';
import { css } from '../customCSS';
import { filtersWindow } from '../filters/filtersWindow';
import { SettingBoolProperty, SettingDropdownProperty, settings, SettingStringProperty } from './settings';
import style from './settingsWindow.less';
import { ChangesObserver } from '../../utils/changesObserver';
import { profileMenuWindow } from '../profileMenu/profileMenuWindow';

css.addStyle(style);

export const settingsWindow: Window = new Window('Reddit++ Settings', renderSettingsWindow, closeSettingsWindow);

class SettingBadge {
    text: string;
    color: string;
    link: string;

    static APIRequests: SettingBadge = { text: `API requests`, color: `var(--shreddit-color-wordmark)`, link: `https://github.com/lnm95/redditPlusPlus/blob/main/redditAPI.md` } as SettingBadge;
    static New: SettingBadge = { text: `New`, color: `#2C96C4`, link: `https://greasyfork.org/en/scripts/490046-reddit/versions` } as SettingBadge;
}

let changes: ChangesObserver = new ChangesObserver();

function renderSettingsWindow(win: Window, context: any) {
    // hack to close user menu
    document.body.click();

    changes.Reset();
    changes.RenderBanner(win.content);

    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);

    const elements = appendElement(scroll, `div`, `pp_window_elementsContainer`);

    addSettingString(`App name`, `Without authorization API requests will be limited by 100 per 10 minutes`, `Unauthorized`, settings.API_APP, [SettingBadge.APIRequests]);
    addSettingToggle(`Show the requests limit warnings`, null, settings.API_WARNINGS, [SettingBadge.APIRequests]);

    addSubtittle(`Common`);
    addSettingToggle(`Wide mode`, `Make focus on the content by replacing the right sidebar to screen border`, settings.WIDE_MODE);
    addSettingString(`Content width`, `Width of the feed and comments in pixels`, settings.CONTENT_WIDTH.defaultValue, settings.CONTENT_WIDTH);
    addSettingString(`Content offset`, `Offset of the feed and comments in pixels`, settings.CONTENT_OFFSET.defaultValue, settings.CONTENT_OFFSET);
    addSettingToggle(`Bigger fonts`, `Make fonts bigger for better reading`, settings.BIGGER_FONTS);
    addGotoButton(`Profile menu`, `Hide and replace profile menu elements`, profileMenuWindow, [SettingBadge.New]);
    addSettingToggle(`Scroll to top button`, null, settings.SCROLL_TO_TOP);
    addSettingToggle(`Image viewer`, `Open (zoom) images instead default redirect behaviour`, settings.IMAGE_VIEWER);
    addSettingOptions(`Redirect`, `Special behaviour when you visit old.reddit pages`, settings.REDIRECT_MODE);
    addSettingOptions(`Awards`, `Collapse the award's button for none upvoted posts and comments or remove completely`, settings.COLLAPSE_AWARDS);
    //addSettingToggle(`Better notify popup`, `Make notify popup a bit larger and remove useless button`, settings.NOTIFY_POPUP); //deprecated

    addSubtittle(`Content`);
    addGotoButton(`Filters`, `Hide posts and comments by regular expressions`, filtersWindow);
    addSettingToggle(`Hidden posts history`, `Allows to show latest hidden posts`, settings.SHOW_FILTERED_CONTENT);
    addSettingString(`Hidden posts history limit`, `Max count of posts in history window`, settings.FILTERED_CONTENT_MAX_COUNT.defaultValue, settings.FILTERED_CONTENT_MAX_COUNT);

    addSubtittle(`Users`);
    addSettingToggle(`User info`, `Show user's karma and "new user" mark`, settings.USER_INFO, [SettingBadge.APIRequests]);
    addSettingOptions(`Nickname mode`, `Allows showing a nickname instead of the profile name`, settings.USERNAME_MODE, [SettingBadge.APIRequests, SettingBadge.New]);
    addSettingString(`Nickname max symbols`, `Make nicknames with too many symbols shorter`, settings.USERNAME_MAX_SIMBOLS.defaultValue, settings.USERNAME_MAX_SIMBOLS);
    addSettingToggle(`User tags`, `Enable custom tags (sets via comment's context menu)`, settings.USER_TAGS);

    addSubtittle(`Feed`);
    addSettingToggle(`Feed buttons`, `Unwrap feed sorting buttons`, settings.FEED_BUTTONS);
    addSettingToggle(`Flairs bar`, `Display available flairs to faster navigation. Specific flairs may be hidden via subreddit's flairs settings`, settings.FLAIR_BAR);
    addSettingToggle(`Show flairs always`, `Show flairs for posts in specific feeds (Home, Popular and All) and filter posts by flairs.`, settings.FLAIR_SHOW_ALWAYS, [SettingBadge.APIRequests]);
    addSettingToggle(`Collapse community highlights`, null, settings.COLLAPSE_HIGHLIGHTS);
    addSettingToggle(`Selectable text`, `Make a text selectable when posts viewed in feed`, settings.SELECTABLE_POSTS);
    addSettingToggle(`Unwrap button`, `Show the unwrap button for long-text posts in feed`, settings.UNWRAP_POST);
    addSettingToggle(`Soft background`, `Make the background of posts with soft gradient color`, settings.BACKPLATES);
    addSettingToggle(`Show post's author`, `Relates to Home, Popular and All feeds`, settings.SHOW_POST_AUTHOR);
    addSettingOptions(`Save-post bookmarks`, `Show the save bookmark next to the vote buttons`, settings.SAVED_BOOKMARK_POSTS);

    addSubtittle(`Comments`);
    addSettingToggle(`Sort buttons`, `Unwrap the comment's sort buttons`, settings.COMMENTS_SORT_BUTTONS);
    addSettingToggle(`Remember sort`, `Remember latest used comment's sort`, settings.COMMENTS_REMEMBER_SORT);
    addSettingToggle(`Unwrap "more replies"`, `Automatically unwrap more replies when it becomes visible`, settings.UNWRAP_MORE_REPLIES);
    addSettingToggle(`Hide share button`, `Replace the share button to comment's context menu`, settings.HIDE_SHARE);
    addSettingToggle(`Ghosted comments`, `Make comments ghosted when comment's rating below zero`, settings.GHOSTED_COMMENTS);
    addSettingToggle(`Collapse unwanted`, `Automatic collapse all automoderator and mod's pinned comments`, settings.COLLAPSE_AUTOMODERATOR);
    addSettingOptions(`Save-comment bookmarks`, `Show the save bookmark next to the vote buttons`, settings.SAVED_BOOKMARK_COMMENTS);
    addSettingToggle(`Hide related posts`, null, settings.HIDE_RELATED_POSTS);

    function addSubtittle(text: string) {
        const subtittle = appendElement(elements, `h3`, `pp_settings_subtittle`);
        subtittle.textContent = text;
    }

    function renderBaseProperty(tittleText: string, descriptionText: string, badges: Array<SettingBadge> = []) {
        const propertyArea = appendElement(elements, `div`, `pp_window_element`);

        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = tittleText;
        if (descriptionText != null) {
            const description = appendElement(header, `div`, `pp_settings_propertyHeader_description`);
            description.textContent = descriptionText;
        } else {
            propertyArea.classList.add(`pp_settings_property_oneLine`);
        }

        for (const badge of badges) {
            const badgeLink = appendElement(tittle, `a`, `pp_no_decoration`);
            if (badge.link != null && badge.link.length > 0) {
                badgeLink.setAttribute(`href`, badge.link);
            }

            const badgeContent = appendElement(badgeLink, `div`, [`pp_settings_propertyHeader_badge`, `pp_no_decoration`]);
            badgeContent.textContent = badge.text;
            badgeContent.style.color = badge.color;
            badgeContent.style.borderColor = badge.color;
        }

        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);

        return buttonContainer;
    }

    function addGotoButton(tittleText: string, descriptionText: string, window: Window, badges: Array<SettingBadge> = []) {
        const buttonContainer = renderBaseProperty(tittleText, descriptionText, badges);

        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

        const gotoButton = appendElement(controlArea, `div`, [`pp_ui_options_arrow`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
        const gotoButtonSvg = buildSvg(arrowSvg, 20, 20);
        gotoButton.append(gotoButtonSvg);

        buttonContainer.parentElement.style.cursor = `pointer`;

        buttonContainer.parentElement.addEventListener(`click`, () => {
            window.open();
        });
    }

    function addSettingToggle(tittleText: string, descriptionText: string, setting: SettingBoolProperty, badges: Array<SettingBadge> = []) {
        const buttonContainer = renderBaseProperty(tittleText, descriptionText, badges);

        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

        const changesSource = changes.CreateSource(setting.isEnabled());

        renderUIToggle(controlArea, setting.isEnabled(), (state: boolean) => {
            setting.switch(state);
            changesSource.Capture(setting.isEnabled());
        });
    }

    function addSettingOptions(tittleText: string, descriptionText: string, setting: SettingDropdownProperty, badges: Array<SettingBadge> = []) {
        const buttonContainer = renderBaseProperty(tittleText, descriptionText, badges);

        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

        const changesSource = changes.CreateSource(setting.getIndex());

        renderUIOptions(controlArea, setting.getIndex(), setting.values, index => {
            setting.set(index);
            changesSource.Capture(setting.getIndex());
        });
    }

    function addSettingString(tittleText: string, descriptionText: string, placeholderText: string, setting: SettingStringProperty, badges: Array<SettingBadge> = []) {
        const inputContainer = renderBaseProperty(tittleText, descriptionText, badges);

        const inputArea = appendElement(inputContainer, `div`, `pp_window_controlArea`);

        const changesSource = changes.CreateSource(setting.get());

        renderUIInput(
            inputArea,
            placeholderText,
            setting.get(),
            value => {
                setting.set(value);
                changesSource.Capture(setting.get());
            },
            { alignCenter: true, filter: setting.filter } as InputParams
        );
    }
}

function closeSettingsWindow() {
    if (changes.HasChanges()) {
        settings.nextRevision();

        window.location.reload();
    }
}
