import { PROFILE_USER_DATA, profiler_comments } from '../../_debug/debug';
import { Database, DatabaseConfig } from '../../utils/database';
import { pp_log } from '../toaster';

export class UserData {
    accountId: string;
    nick: string;
    created: number;
    rating: number;
    banned: boolean;
}

export const users = new Database<UserData>(`USERS`, { isCleanupable: true, validator: userDataValidator, loader: userDataLoader } as DatabaseConfig<UserData>);

function userDataValidator(userData: UserData) {
    return userData.accountId == undefined;
}

async function userDataLoader(userId: string): Promise<UserData> {
    let userData = {} as UserData;

    try {
        const response = await fetch(`https://oauth.reddit.com/user/${userId}/about.json`, { cache: `no-cache`, method: `get` });

        if (!response.ok) {
            pp_log(`Failed to load user (${userId}) data with code ${response.status} : ${response.statusText}`);

            if (DEBUG && PROFILE_USER_DATA) {
                profiler_comments.userDataFailed++;
            }
            
            return userData;
        }

        const json = await response.json();

        if (json.data?.is_suspended == true || json.data?.is_blocked == true) {
            userData.banned = true;
            return userData;
        }

        userData.rating = (json.data?.link_karma ?? 0) + (json.data?.comment_karma ?? 0) / 2;
        if (json.data?.subreddit?.title) {
            userData.nick = json.data.subreddit.title;
        }
        userData.created = json.data?.created ?? 0;
        userData.accountId = json.kind + `_` + json.data?.id;

        return userData;
    } catch (e) {
        pp_log(`Failed to load user (${userId}) data with error ${e}`);

        if (DEBUG && PROFILE_USER_DATA) {
            profiler_comments.userDataFailed++;
        }

        return userData;
    }
}
