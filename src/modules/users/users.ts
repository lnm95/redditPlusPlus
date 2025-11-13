import { PROFILE_USER_DATA, profiler_comments } from '../../_debug/debug';
import { Database, DatabaseConfig } from '../../utils/database';
import { requestAPI } from '../../utils/redditAPI';
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

    if (userId == `[deleted]`) {
        userData.banned = true;
        return userData;
    }

    const { status, result } = await requestAPI(`/user/${userId}/about.json`);

    if (status != 404 && result == null) {
        if (DEBUG && PROFILE_USER_DATA) {
            profiler_comments.userDataFailed++;
        }

        return userData;
    }

    if (status == 404 || result.data?.is_suspended == true || result.data?.is_blocked == true) {
        userData.banned = true;
        return userData;
    }

    userData.rating = (result.data?.link_karma ?? 0) + (result.data?.comment_karma ?? 0) / 2;
    if (result.data?.subreddit?.title) {
        userData.nick = result.data.subreddit.title;
    }
    userData.created = result.data?.created ?? 0;
    userData.accountId = result.kind + `_` + result.data?.id;

    return userData;
}
