import { InputParams, renderUIInput } from '../../utils/UI/input';
import { renderUIOptions } from '../../utils/UI/options';
import { renderUIToggle } from '../../utils/UI/toggle';
import { ChangesObserver } from '../../utils/changesObserver';
import { appendElement } from '../../utils/element';
import { buildSvg } from '../../utils/svg';
import { Window } from '../../utils/window';
import { css } from '../customCSS';
import { filtersWindow } from '../filters/filtersWindow';
import { profileMenuWindow } from '../profileMenu/profileMenuWindow';
import { SettingBoolProperty, SettingDropdownProperty, SettingStringProperty, settings } from './settings';

import arrowSvg from '@resources/settingsArrow.svg';

import style from './settingsWindow.less';

css.addStyle(style);

export const settingsWindow: Window = new Window('Reddit++ Settings', renderSettingsWindow, closeSettingsWindow);

class SettingBadge {
    text!: string;
    color!: string;
    link!: string;

    static APIRequests: SettingBadge = { text: `API requests`, color: `var(--shreddit-color-wordmark)`, link: `https://github.com/lnm95/redditPlusPlus/blob/main/redditAPI.md` } as SettingBadge;
    static New: SettingBadge = { text: `New`, color: `#2C96C4`, link: `https://greasyfork.org/en/scripts/490046-reddit/versions` } as SettingBadge;
}

let changes: ChangesObserver = new ChangesObserver();

function renderSettingsWindow(win: Window, context: any) {
    // hack to close profile menu
    document.body.click();

    changes.Reset();
    changes.RenderBanner(win.content);

    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);

    const elements = appendElement(scroll, `div`, `pp_window_elementsContainer`);

    addSettingString(`App name`, `Unauthenticated API requests are limited to 100 requests per 10 minutes`, settings.API_APP, [SettingBadge.APIRequests]);
    addSettingToggle(`Show request limit warnings`, null, settings.API_WARNINGS, [SettingBadge.APIRequests]);

    addSubtitle(`Page view`);
    addSettingToggle(`Wide mode`, `Focus on content by moving the right sidebar to the screen edge`, settings.WIDE_MODE);
    addSettingString(`Content width`, `Width of the feed and comments in pixels`, settings.CONTENT_WIDTH);
    addSettingString(`Content offset`, `Horizontal offset of the feed and comments in pixels`, settings.CONTENT_OFFSET);
    addSettingToggle(`Remove left sidebar`, null, settings.REMOVE_LEFT_SIDEBAR);
    addSettingToggle(`Remove right sidebar`, null, settings.REMOVE_RIGHT_SIDEBAR);

    addSubtitle(`Common enhancements`);
    addGotoButton(`Profile menu`, `Hide and replace profile menu elements`, profileMenuWindow);
    addSettingToggle(`Image viewer`, `Zoom images instead of default redirect behaviour`, settings.IMAGE_VIEWER);
    addSettingToggle(`Scroll to top button`, null, settings.SCROLL_TO_TOP);
    addSettingString(`Content font size`, `Text size for posts and comments (default: 14px)`, settings.BIGGER_FONTS_CONTENT_SIZE);
    addSettingString(`UI font size`, `Text size for UI elements (headings, buttons, etc.) (default: 12px)`, settings.BIGGER_FONTS_OTHER_SIZE);
    addSettingOptions(`Awards`, `Collapse awards for non-upvoted posts and comments or remove them completely`, settings.COLLAPSE_AWARDS);
    addSettingOptions(`Redirect`, `Behavior when visiting old.reddit pages`, settings.REDIRECT_MODE);

    addSubtitle(`Content`);
    addGotoButton(`Filters`, `Hide posts and comments using regular expressions`, filtersWindow);
    addSettingToggle(`Hidden posts history`, `Show recently hidden posts`, settings.SHOW_FILTERED_CONTENT);
    addSettingString(`History limit`, `Maximum number of posts in the history`, settings.FILTERED_CONTENT_MAX_COUNT);

    addSubtitle(`Users`);
    addSettingToggle(`User info`, `Show user karma and a "new user" badge`, settings.USER_INFO, [SettingBadge.APIRequests]);
    addSettingOptions(`Nickname mode`, `Display nickname instead of the profile name`, settings.USERNAME_MODE, [SettingBadge.APIRequests]);
    addSettingString(`Nickname max symbols`, `Shorten nicknames that exceed this lengt`, settings.USERNAME_MAX_SIMBOLS);
    addSettingToggle(`User tags`, `Enable custom user tags (sets via the comment context menu)`, settings.USER_TAGS);
    //addSettingToggle(`Search shortcuts`, `Add search buttons to the user profile page`, settings.USER_SEARCH_SHORTCUTS); //legacy

    addSubtitle(`Feed page`);
    addSettingToggle(`Feed buttons`, `Unwrap sorting buttons`, settings.FEED_BUTTONS);
    addSettingToggle(`Flairs bar`, `Display available flairs for faster navigation (can be customized per subreddit)`, settings.FLAIR_BAR);
    addSettingToggle(`Collapse community highlights`, null, settings.COLLAPSE_HIGHLIGHTS);
    addSettingToggle(`Hide community recommendations`, `Hides the related communities section in the feed`, settings.HIDE_COMMUNITY_RECOMMENDATIONS);

    addSubtitle(`Posts`);
    addSettingToggle(`Soft background`, `Apply a soft gradient background to hovered posts`, settings.BACKPLATES);
    addSettingToggle(`Show post's author`, `Applies to Home and Popular feeds`, settings.SHOW_POST_AUTHOR);
    addSettingToggle(`Show flairs always`, `Always display flairs in specific feeds (Home, Popular) and enable flair-based filtering`, settings.FLAIR_SHOW_ALWAYS, [SettingBadge.APIRequests]);
    addSettingToggle(`Selectable text`, `Allow text selection in posts within the feed`, settings.SELECTABLE_POSTS);
    addSettingToggle(`Unwrap button`, `Show an expand button for long-text posts`, settings.UNWRAP_POST);
    addSettingOptions(`Save bookmarks`, `Show the save button next to vote buttons`, settings.SAVED_BOOKMARK_POSTS);

    addSubtitle(`Comments page`);
    addSettingToggle(`Sort buttons`, `Unwrap comment sort buttons`, settings.COMMENTS_SORT_BUTTONS);
    addSettingToggle(`Remember sort`, `Remember the last used comment sort`, settings.COMMENTS_REMEMBER_SORT);
    addSettingToggle(`Hide related posts`, `Hides the related posts section`, settings.HIDE_RELATED_POSTS);

    addSubtitle(`Comments`);
    addSettingToggle(`Unwrap "more replies"`, `Automatically unwrap more replies when it becomes visible`, settings.UNWRAP_MORE_REPLIES);
    addSettingToggle(`Hide share button`, `Move the share button to the comment context menu`, settings.HIDE_SHARE);
    addSettingToggle(`Ghosted comments`, `Fade comments with a negative score`, settings.GHOSTED_COMMENTS);
    addSettingOptions(`Guidelines color`, null, settings.GUIDELINES_COLOR, [SettingBadge.New]);
    addSettingToggle(`Thick guidelines`, `Doubling the thickness of comment guidelines`, settings.GUIDELINES_THICK, [SettingBadge.New]);
    addSettingToggle(`Collapse pinned`, `Automatically collapse pinned comments (AutoModerator and moderators)`, settings.COLLAPSE_AUTOMODERATOR);
    addSettingOptions(`Save bookmarks`, `Show the save button next to vote buttons`, settings.SAVED_BOOKMARK_COMMENTS);

    function addSubtitle(text: string) {
        const subtittle = appendElement(elements, `h3`, `pp_settings_subtittle`);
        subtittle.textContent = text;
    }

    function renderBaseProperty(tittleText: string, descriptionText: string | null, badges: Array<SettingBadge> = []) {
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

        buttonContainer.parentElement!.style.cursor = `pointer`;

        buttonContainer.parentElement!.addEventListener(`click`, () => {
            window.open();
        });
    }

    function addSettingToggle(tittleText: string, descriptionText: string | null, setting: SettingBoolProperty, badges: Array<SettingBadge> = []) {
        const buttonContainer = renderBaseProperty(tittleText, descriptionText, badges);

        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

        const changesSource = changes.CreateSource(setting.isEnabled());

        renderUIToggle(controlArea, setting.isEnabled(), (state: boolean) => {
            setting.switch(state);
            changesSource.Capture(setting.isEnabled());
        });
    }

    function addSettingOptions(tittleText: string, descriptionText: string | null, setting: SettingDropdownProperty, badges: Array<SettingBadge> = []) {
        const buttonContainer = renderBaseProperty(tittleText, descriptionText, badges);

        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

        const changesSource = changes.CreateSource(setting.getIndex());

        renderUIOptions(controlArea, setting.getIndex(), setting.values, index => {
            setting.set(index);
            changesSource.Capture(setting.getIndex());
        });
    }

    function addSettingString(tittleText: string, descriptionText: string | null, setting: SettingStringProperty, badges: Array<SettingBadge> = []) {
        const inputContainer = renderBaseProperty(tittleText, descriptionText, badges);

        const inputArea = appendElement(inputContainer, `div`, `pp_window_controlArea`);

        const changesSource = changes.CreateSource(setting.get());

        renderUIInput(
            inputArea,
            setting.defaultValue,
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
