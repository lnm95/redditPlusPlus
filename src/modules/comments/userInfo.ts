import { buildSvg } from '../../utils/svg';
import { dynamicElement } from '../../utils/tools';
import { settings } from '../settings/settings';
import { UserData, users } from '../users';
import { PROFILE_COMMENTS, profiler_comments } from '../../_debug/debug';
import newUserSvg from '@resources/comments/newUser.svg';
import bannedUserSvg from '@resources/comments/bannedUser.svg';
import { DAY_SECONDS } from '../../defines';

const NEWUSER_SECONDS_SHIFT = DAY_SECONDS * 64;

let loadQueueLock = false;

export async function renderUserInfo(comment: Element) {
    if (settings.USER_INFO.isDisabled()) return;

    if (DEBUG && PROFILE_COMMENTS) {
        profiler_comments.userDataLoading++;
    }

    await dynamicElement(() => (loadQueueLock ? null : true));

    loadQueueLock = true;

    const userId = comment.getAttribute(`author`);

    const userData: UserData = await users.getWithLoader(userId, isLoaded => {
        if (isLoaded) {
            setTimeout(
                () => {
                    loadQueueLock = false;
                },
                150 + Math.random() * 100
            );
        } else {
            loadQueueLock = false;
        }
    });

    if (DEBUG && PROFILE_COMMENTS) {
        profiler_comments.userDataLoading--;
    }

    let nickName = comment.querySelector(`faceplate-tracker[noun="comment_author"]`).querySelector(`a`);

    if (settings.SHOW_NAMES.isEnabled() && userData.nick != undefined && userData.nick) {
        nickName.textContent = userData.nick;
    }

    const infoAnchor = comment.querySelector(`div[pp-anchor="info"]`);

    const rating = document.createElement(`div`);
    rating.classList.add(`text-neutral-content-weak`, `text-12`);

    if (userData.rating != undefined) {
        rating.textContent = userData.rating < 10000 ? `${Math.round(userData.rating / 100) / 10}K` : `${Math.round(userData.rating / 1000)}K`;

        infoAnchor.after(rating);

        const point = document.createElement(`span`);
        point.classList.add(`inline-block`, `my-0`, `mx-2xs`, `text-12`, `text-neutral-content-weak`);
        point.textContent = `•`;
        rating.after(point);
    }

    const tagsAnchor = comment.querySelector(`div[pp-anchor="tags"]`);

    if (userData.created != undefined && userData.created > Date.now() / 1000 - NEWUSER_SECONDS_SHIFT) {
        const newSvg = buildSvg(newUserSvg, 20, 20);
        newSvg.setAttribute(`viewBox`, `-2 -2 20 20`);

        tagsAnchor.before(newSvg);
    }

    if (userData.banned != undefined && userData.banned) {
        const newSvg = buildSvg(bannedUserSvg, 20, 20);
        newSvg.setAttribute(`viewBox`, `-2 -2 20 20`);

        tagsAnchor.before(newSvg);
    }
}
