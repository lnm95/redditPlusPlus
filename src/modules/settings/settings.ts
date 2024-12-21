import { Database } from '../../utils/database';
import { FeedLocation } from '../feed/feedLocation';
import { GetFeeds } from '../feed/feedType';

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

        return isDefault ? this.defailtValue : rawValue as boolean;
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

        return isDefault ? this.values[this.defaultIndex] : rawValue as string;
    }


    isDefault():boolean {
        return this.get() == this.values[this.defaultIndex];
    }

    switch(shift:number): void {
        let index = this.values.indexOf(this.get()) + shift;

        if(index < 0){
            index = this.values.length - 1;
        }
        if(index >= this.values.length){
            index = 0;
        }

        settingsDatabase.set(this.name, this.values[index]);
    }
}

class SettingsManager {
    revision: number = this.getRevision();

    public WIDE_MODE = new SettingBoolProperty(`wideMode`);
    public CONTENT_WIDTH = new SettingDropdownProperty(`contentWidth`, [`650px`, `700px`, `750px`, `800px`, `900px`, `1000px`], 1);
    public BIGGER_FONTS = new SettingBoolProperty(`biggerFonts`);
    public NOTIFY_POPUP = new SettingBoolProperty(`notifyPopup`);
    public REDIRECT_SUGGESTION = new SettingBoolProperty(`redirectSuggestion`);
    public REDIRECT_FORCED = new SettingBoolProperty(`redirectForced`, false);
    // left sidebar
    public SUB_FILTER = new SettingBoolProperty(`sidebarSubFilter`);
    public SIDEBAR_CUSTOMS = new SettingBoolProperty(`sidebarCustoms`);
    public SIDEBAR_RECENT = new SettingBoolProperty(`sidebarRecent`);
    public SIDEBAR_SUBS = new SettingBoolProperty(`sidebarSubs`);
    public SIDEBAR_RESOURCES = new SettingBoolProperty(`sidebarResources`);
    // common
    public SCROLL_TO_TOP = new SettingBoolProperty(`scrollToTop`);
    public COLLAPSE_AWARDS = new SettingBoolProperty(`collapseAwards`);
    public COLLAPSE_AWARDS_COMPLETELY = new SettingBoolProperty(`collapseAwardsCompletely`, false);
    // feed sorts
    public DEFAULT_FEED_HOME = new SettingDropdownProperty(`defaultFeedHome`, GetFeeds(FeedLocation.Home), 0);
    public DEFAULT_FEED_POPULAR = new SettingDropdownProperty(`defaultFeedPopular`, GetFeeds(FeedLocation.Popular), 1);
    public DEFAULT_FEED_ALL = new SettingDropdownProperty(`defaultFeedAll`, GetFeeds(FeedLocation.All), 0);
    public DEFAULT_FEED_SUB = new SettingDropdownProperty(`defaultFeedSub`, GetFeeds(FeedLocation.Sub), 0);
    // feed
    public FEED_BUTTONS = new SettingBoolProperty(`feedButtons`);
    public FLAIR_BAR = new SettingBoolProperty(`flairbar`);
    public COLLAPSE_HIGHLIGHTS = new SettingBoolProperty(`collapseHighlights`, false);
    public BACKPLATES = new SettingBoolProperty(`backplates`);
    public SELECTABLE_POSTS = new SettingBoolProperty(`selectablePosts`);
    public UNWRAP_POST = new SettingBoolProperty(`unwrapPost`);
    public SHOW_POST_AUTHOR = new SettingBoolProperty(`showPostAuthor`);
    public SAVED_BOOKMARK_POSTS = new SettingBoolProperty(`savedBookmarkPosts`);
    public SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS = new SettingBoolProperty(`savedBookmarkPostsShowAlways`, false);
    // comments
    public COMMENTS_SORT_BUTTONS = new SettingBoolProperty(`commentSortButtons`);
    public COMMENTS_REMEMBER_SORT = new SettingBoolProperty(`commentRememberSort`);
    public UNWRAP_MORE_REPLIES = new SettingBoolProperty(`unwrapMoreReplies`, false);
    public USER_INFO = new SettingBoolProperty(`userInfo`);
    public USER_TAGS = new SettingBoolProperty(`userTags`);
    public SHOW_NAMES = new SettingBoolProperty(`showNames`);
    public HIDE_SHARE = new SettingBoolProperty(`hideShare`);
    public GHOSTED_COMMENTS = new SettingBoolProperty(`ghostedComments`);
    public COLLAPSE_AUTOMODERATOR = new SettingBoolProperty(`collapseAutomoderator`);
    public SAVED_BOOKMARK_COMMENTS = new SettingBoolProperty(`savedBookmarkComments`);
    public SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS = new SettingBoolProperty(`savedBookmarkCommentsShowAlways`, false);

    constructor() {
        // Reload all pages with dirted settings
        window.addEventListener('storage', event => {
            if (this.isDirt()) {
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
