import { Database } from '../../utils/database';

export class SettingProperty {
    name: string;
    defailtValue: boolean;

    constructor(name: string, defailtValue: boolean = true) {
        this.name = name;
        this.defailtValue = defailtValue;
    }

    isEnabled(): boolean {
        const rawValue = settingsDatabase.get(this.name);
        const isDefault = rawValue instanceof Object;

        return isDefault ? this.defailtValue : rawValue;
    }

    isDisabled(): boolean {
        return !this.isEnabled();
    }

    switch(overridedValue: boolean = null): void {
        settingsDatabase.set(this.name, overridedValue == null ? this.isDisabled() : overridedValue);
    }

    getChild(postfix: string, defaultValue: boolean = true): SettingProperty {
        return new SettingProperty(this.name + postfix, defaultValue);
    }
}

class SettingsManager {
    revision: number = this.getRevision();

    public WIDE_MODE = new SettingProperty(`wideMode`);
    public BIGGER_FONTS = new SettingProperty(`biggerFonts`);
    public NOTIFY_POPUP = new SettingProperty(`notifyPopup`);
    public REDIRECT_SUGGESTION = new SettingProperty(`redirectSuggestion`);
    public REDIRECT_FORCED = new SettingProperty(`redirectForced`, false);
    // left sidebar
    public SUB_FILTER = new SettingProperty(`sidebarSubFilter`);
    public SIDEBAR_CUSTOMS = new SettingProperty(`sidebarCustoms`);
    public SIDEBAR_RECENT = new SettingProperty(`sidebarRecent`);
    public SIDEBAR_SUBS = new SettingProperty(`sidebarSubs`);
    public SIDEBAR_RESOURCES = new SettingProperty(`sidebarResources`);
    // common
    public SCROLL_TO_TOP = new SettingProperty(`scrollToTop`);
    public COLLAPSE_AWARDS = new SettingProperty(`collapseAwards`);
    public COLLAPSE_AWARDS_COMPLETELY = new SettingProperty(`collapseAwardsCompletely`, false);
    // feed
    public FEED_BUTTONS = new SettingProperty(`feedButtons`);
    public FLAIR_BAR = new SettingProperty(`flairbar`);
    public BACKPLATES = new SettingProperty(`backplates`);
    public SELECTABLE_POSTS = new SettingProperty(`selectablePosts`);
    public UNWRAP_POST = new SettingProperty(`unwrapPost`);
    public SAVED_BOOKMARK_POSTS = new SettingProperty(`savedBookmarkPosts`);
    public SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS = new SettingProperty(`savedBookmarkPostsShowAlways`, false);
    // comments
    public COMMENTS_SORT_BUTTONS = new SettingProperty(`commentSortButtons`);
    public COMMENTS_REMEMBER_SORT = new SettingProperty(`commentRememberSort`);
    public UNWRAP_MORE_REPLIES = new SettingProperty(`unwrapMoreReplies`, false);
    public USER_INFO = new SettingProperty(`userInfo`);
    public USER_TAGS = new SettingProperty(`userTags`);
    public SHOW_NAMES = new SettingProperty(`showNames`);
    public HIDE_SHARE = new SettingProperty(`hideShare`);
    public GHOSTED_COMMENTS = new SettingProperty(`ghostedComments`);
    public COLLAPSE_AUTOMODERATOR = new SettingProperty(`collapseAutomoderator`);
    public SAVED_BOOKMARK_COMMENTS = new SettingProperty(`savedBookmarkComments`);
    public SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS = new SettingProperty(`savedBookmarkCommentsShowAlways`, false);

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

const settingsDatabase = new Database<object | boolean>(`SETTINGS`);

export const settings = new SettingsManager();
