import { Migration } from './migrations';

// from 0.2.x
export const migration_1_0_0 = new Migration(`1.0.0`, () => {
    const settingsDatabase = GM_getValue(`SETTINGS_DATABASE`, null) as any;

    if (settingsDatabase == null) return;

    const bookmarks = settingsDatabase[`savedBookmark`];
    if (bookmarks != undefined) {
        settingsDatabase[`savedBookmarkPosts`] = bookmarks;
        settingsDatabase[`savedBookmarkComments`] = bookmarks;
        delete settingsDatabase[`savedBookmark`];
    }

    const hideUnsaved = settingsDatabase[`savedBookmarkHideUnsaved`];
    if (bookmarks != undefined) {
        settingsDatabase[`savedBookmarkPostsShowAlways`] = !hideUnsaved;
        settingsDatabase[`savedBookmarkCommentsShowAlways`] = !hideUnsaved;
        delete settingsDatabase[`savedBookmarkHideUnsaved`];
    }

    GM_setValue(`SETTINGS_DATABASE`, settingsDatabase);
});
