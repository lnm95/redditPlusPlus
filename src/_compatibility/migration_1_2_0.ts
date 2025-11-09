import { BookmarkMode } from '../modules/bookmarkMode';
import { AwardsMode } from '../modules/collapseAwardsMode';
import { FeedData, subsFeedData } from '../modules/feed/feed';
import { FeedSort } from '../modules/feed/feedSort';
import { RedirectMode } from '../modules/redirectMode';
import { UsernameMode } from '../modules/users/usernameMode';
import { Database } from '../utils/database';
import { migration_1_0_0 } from './migration_1_0_0';
import { Migration } from './migrations';


export const migration_1_2_0 = new Migration(`1.2.0`, () => {
    const settingsDatabase = GM_getValue(`SETTINGS_DATABASE`, null) as any;

    if (settingsDatabase != null) {
        // bookmarks storage rework
        if(settingsDatabase.savedBookmarkPosts != undefined && typeof settingsDatabase.savedBookmarkPosts !== `string`) {
            settingsDatabase.savedBookmarkPosts = (settingsDatabase.savedBookmarkPostsShowAlways == true ? BookmarkMode.Always : (settingsDatabase.savedBookmarkPosts == true ? BookmarkMode.WhenUpvoted : BookmarkMode.Disabled)).toString();
        }

        delete settingsDatabase.savedBookmarkPostsShowAlways;

        if(settingsDatabase.savedBookmarkComments != undefined && typeof settingsDatabase.savedBookmarkComments !== `string`) {
            settingsDatabase.savedBookmarkComments = (settingsDatabase.savedBookmarkCommentsShowAlways == true ? BookmarkMode.Always : (settingsDatabase.savedBookmarkComments == true ? BookmarkMode.WhenUpvoted : BookmarkMode.Disabled)).toString();
        }

        delete settingsDatabase.savedBookmarkCommentsShowAlways;

        // redirect storage rework
        if(settingsDatabase.redirectSuggestion != undefined || settingsDatabase.redirectForced != undefined) {
            settingsDatabase.redirectMode = settingsDatabase.redirectForced == true ? RedirectMode.Forced : (settingsDatabase.redirectSuggestion == true ? RedirectMode.Suggestion : RedirectMode.Disabled);
        }

        delete settingsDatabase.redirectSuggestion;
        delete settingsDatabase.redirectForced;

        // awards storage rework
        if(settingsDatabase.collapseAwards != undefined && typeof settingsDatabase.collapseAwards !== `string`) {
            settingsDatabase.collapseAwards = (settingsDatabase.collapseAwardsCompletely == true ? AwardsMode.RemoveCompletely : (settingsDatabase.collapseAwards == true ? AwardsMode.WhenUpvoted : AwardsMode.Default)).toString();
        }

        delete settingsDatabase.collapseAwardsCompletely;

        // username
        if(settingsDatabase.showNames != undefined && typeof settingsDatabase.showNames !== `string`) {
            settingsDatabase.usernameMode = settingsDatabase.showNames == true ? UsernameMode.Nickname : UsernameMode.ProfileName;

            delete settingsDatabase.showNames;
        }

        GM_setValue(`SETTINGS_DATABASE`, settingsDatabase);
        GM_setValue(`SETTINGS_REFRESHED`, Date.now());
    }
    

    // migrate old sort settings
    const subSettings = new Database<any>(`SUBS_SETTINGS`);

    subSettings.forEach((key, value) => {
        if (value.defaultFeed != undefined && value.defaultFeed in FeedSort) {
            const currentFeedData = subsFeedData.get(key);

            if (currentFeedData == null) {
                subsFeedData.set(key, {
                    redirect: true,
                    defaultSort: value.defaultFeed,
                    hiddenSort: []
                } as FeedData);
            }
        }
    });

    subSettings.wipe();
}, migration_1_0_0);