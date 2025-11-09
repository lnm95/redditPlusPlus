import { Database } from '../../utils/database';
import { BookmarkMode } from '../bookmarkMode';
import { AwardsMode } from '../collapseAwardsMode';
import { FeedLocation } from '../feed/feedLocation';
import { getFeedSorts } from "../feed/feedSort";
import { RedirectMode } from '../redirectMode';
import { UsernameMode } from '../users/usernameMode';


export class SettingBoolProperty {
    name: string;
    defailtValue: boolean;

    constructor(name: string, defailtValue: boolean = true) {
        this.name = name;
        this.defailtValue = defailtValue;
    }

    isEnabled(): boolean {
        const rawValue = settingsDatabase.get(this.name);
        const isDefault = rawValue instanceof Object;

        return isDefault ? this.defailtValue : (rawValue as boolean);
    }

    isDisabled(): boolean {
        return !this.isEnabled();
    }

    switch(overridedValue: boolean = null): void {
        settingsDatabase.set(this.name, overridedValue == null ? this.isDisabled() : overridedValue);
    }

    getChild(postfix: string, defaultValue: boolean = true): SettingBoolProperty {
        return new SettingBoolProperty(this.name + postfix, defaultValue);
    }
}

export class SettingDropdownProperty {
    name: string;
    defaultIndex: number;
    values: Array<string>;

    constructor(name: string, values: Array<string>, defaultIndex: number = 0) {
        this.name = name;
        this.values = values;
        this.defaultIndex = defaultIndex;
    }

    get(): string {
        const rawValue = settingsDatabase.get(this.name);
        const isDefault = rawValue instanceof Object;

        return isDefault ? this.values[this.defaultIndex] : (rawValue as string);
    }

    getIndex(): number {
        return this.values.indexOf(this.get());
    }

    isDefault(): boolean {
        return this.get() == this.values[this.defaultIndex];
    }

    set(index: number): void {
        settingsDatabase.set(this.name, this.values[index]);
    }
}

export class SettingStringProperty {
    name: string;
    defaultValue: string;
    filter: (input: string) => string;

    constructor(name: string, defaultValue: string, filter: (input: string) => string = null) {
        this.name = name;
        this.defaultValue = defaultValue;

        this.filter = filter != null ? filter : (input: string) => input;
    }

    get(): string {
        const rawValue = settingsDatabase.get(this.name);
        const isDefault = rawValue instanceof Object;

        return isDefault ? this.defaultValue : (rawValue as string);
    }

    isDefault(): boolean {
        return this.get() == this.defaultValue;
    }

    set(value: string): void {
        settingsDatabase.set(this.name, value);
    }
}

function defaultFilter(defaultValue: number) {
    return (input: string) => {
        const parsed = parseInt(input).toString();

        return parsed != `NaN` ? parsed : defaultValue.toString();
    };
}

function defaultPositiveFilter(defaultValue: number) {
    return (input: string) => {
        const parsed = Math.abs(parseInt(input)).toString();

        return parsed != `NaN` ? parsed : defaultValue.toString();
    };
}

class SettingsManager {
    revision: number = this.getRevision();
    isDirted: boolean = false;

    public API_APP = new SettingStringProperty(`apiApp`, ``);
    public API_WARNINGS = new SettingBoolProperty(`apiWarnings`);

    //common
    public WIDE_MODE = new SettingBoolProperty(`wideMode`);
    public CONTENT_WIDTH = new SettingStringProperty(`contentWidth`, `700`, defaultPositiveFilter(700));
    public CONTENT_OFFSET = new SettingStringProperty(`contentOffset`, `0`, defaultFilter(0));
    public BIGGER_FONTS = new SettingBoolProperty(`biggerFonts`);
    public SCROLL_TO_TOP = new SettingBoolProperty(`scrollToTop`);
    public IMAGE_VIEWER = new SettingBoolProperty(`imageViewer`);
    public COLLAPSE_AWARDS = new SettingDropdownProperty(`collapseAwards`, Object.values(AwardsMode), 1);
    public REDIRECT_MODE = new SettingDropdownProperty(`redirectMode`, Object.values(RedirectMode), 1);

    public NOTIFY_POPUP = new SettingBoolProperty(`notifyPopup`); // legacy

    // content
    public SHOW_FILTERED_CONTENT = new SettingBoolProperty(`showFilteredContent`);
    public FILTERED_CONTENT_MAX_COUNT = new SettingStringProperty(`filteredContentMaxCount`, `20`, defaultPositiveFilter(20));

    // left sidebar
    public SUB_FILTER = new SettingBoolProperty(`sidebarSubFilter`);
    public SIDEBAR_GAMES = new SettingBoolProperty(`sidebarGames`);
    public SIDEBAR_CUSTOMS = new SettingBoolProperty(`sidebarCustoms`);
    public SIDEBAR_RECENT = new SettingBoolProperty(`sidebarRecent`);
    public SIDEBAR_SUBS = new SettingBoolProperty(`sidebarSubs`);
    public SIDEBAR_RESOURCES = new SettingBoolProperty(`sidebarResources`);
    public SIDEBAR_NAV_BUTTON = new SettingBoolProperty(`sidebarNavigation`);

    // feed
    public FEED_BUTTONS = new SettingBoolProperty(`feedButtons`);
    public FLAIR_BAR = new SettingBoolProperty(`flairbar`);
    public FLAIR_SHOW_ALWAYS = new SettingBoolProperty(`flairShowAlways`, false);
    public COLLAPSE_HIGHLIGHTS = new SettingBoolProperty(`collapseHighlights`, false);
    public BACKPLATES = new SettingBoolProperty(`backplates`);
    public SELECTABLE_POSTS = new SettingBoolProperty(`selectablePosts`);
    public UNWRAP_POST = new SettingBoolProperty(`unwrapPost`);
    public SHOW_POST_AUTHOR = new SettingBoolProperty(`showPostAuthor`);
    public SAVED_BOOKMARK_POSTS = new SettingDropdownProperty(`savedBookmarkPosts`, Object.values(BookmarkMode), 1);

    // comments
    public COMMENTS_SORT_BUTTONS = new SettingBoolProperty(`commentSortButtons`);
    public COMMENTS_REMEMBER_SORT = new SettingBoolProperty(`commentRememberSort`);
    public UNWRAP_MORE_REPLIES = new SettingBoolProperty(`unwrapMoreReplies`, false);
    public USER_INFO = new SettingBoolProperty(`userInfo`, false);
    public USERNAME_MODE = new SettingDropdownProperty(`usernameMode`, Object.values(UsernameMode), 0);
    public USERNAME_MAX_SIMBOLS = new SettingStringProperty(`usernameMaxSimbols`, `50`, defaultPositiveFilter(50));
    public USER_TAGS = new SettingBoolProperty(`userTags`);
    public HIDE_SHARE = new SettingBoolProperty(`hideShare`);
    public GHOSTED_COMMENTS = new SettingBoolProperty(`ghostedComments`);
    public COLLAPSE_AUTOMODERATOR = new SettingBoolProperty(`collapseAutomoderator`);
    public SAVED_BOOKMARK_COMMENTS = new SettingDropdownProperty(`savedBookmarkComments`, Object.values(BookmarkMode), 1);
    public HIDE_RELATED_POSTS = new SettingBoolProperty(`hideRelatedPosts`, false);

    constructor() {
        // Reload all pages with dirted settings
        window.addEventListener('storage', event => {
            if (this.isDirt() && !this.isDirted) {
                this.isDirted = true;

                document.addEventListener(
                    'visibilitychange',
                    () => {
                        window.location.reload();
                    },
                    { once: true }
                );
            }
        });
    }

    getRevision(): number {
        return parseInt(localStorage.getItem(`pp_settings_s_revision`) ?? `0`);
    }

    nextRevision(): void {
        this.revision++;
        localStorage.setItem(`pp_settings_s_revision`, String(this.revision));
    }

    isDirt(): boolean {
        const currentRevision = this.getRevision();

        return currentRevision != this.revision;
    }
}

const settingsDatabase = new Database<object | string | boolean>(`SETTINGS`);

export const settings = new SettingsManager();
