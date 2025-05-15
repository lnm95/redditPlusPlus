import { buildSvg } from '../../utils/svg';
import { dynamicElement } from '../../utils/tools';
import { settings } from '../settings/settings';
import { UserData, users } from './users';
import { PROFILE_USER_DATA, profiler_comments } from '../../_debug/debug';
import newUserSvg from '@resources/comments/newUser.svg';
import bannedUserSvg from '@resources/comments/bannedUser.svg';
import { DAY_SECONDS, ModuleTaget } from '../../defines';

const NEWUSER_SECONDS_SHIFT = DAY_SECONDS * 64;

let loadQueueLock = false;

export async function renderUserInfo(userId: string, nickName: Element, tagsAnchor: Element, infoAnchor: Element, target: ModuleTaget) {
    if (settings.USER_INFO.isDisabled() && settings.SHOW_NAMES.isDisabled()) return;

    if (DEBUG && PROFILE_USER_DATA) {
        profiler_comments.userDataLoading++;
    }

    await dynamicElement(() => (loadQueueLock ? null : true));

    loadQueueLock = true;

    const userData: UserData = await users.getWithLoader(userId, isLoaded => {
        if (isLoaded) {
            setTimeout(
                () => {
                    loadQueueLock = false;
                },
                16 + Math.random() * 32
            );
        } else {
            loadQueueLock = false;
        }
    });

    if (DEBUG && PROFILE_USER_DATA) {
        profiler_comments.userDataLoading--;
    }

    if (settings.SHOW_NAMES.isEnabled() && userData.nick != undefined && userData.nick) {
        const maxSymbols = parseInt(settings.USERNAME_MAX_SIMBOLS.get());

        nickName.textContent = maxSymbols <= 0 || userData.nick.length < maxSymbols ? userData.nick : userData.nick.slice(0, maxSymbols - 2) + `...`;
    }

    if (settings.USER_INFO.isEnabled()) {
        const rating = document.createElement(`div`);
        rating.classList.add(`text-neutral-content-weak`, `text-12`);

        if (userData.rating != undefined) {
            rating.textContent = userData.rating < 10000 ? `${Math.round(userData.rating / 100) / 10}K` : `${Math.round(userData.rating / 1000)}K`;

            infoAnchor.after(rating);

            const point = document.createElement(`span`);
            if (target.isComment) {
                point.classList.add(`inline-block`, `my-0`, `mx-2xs`, `text-12`, `text-neutral-content-weak`);
            } else {
                point.classList.add(`inline-block`, `my-0`, `created-separator`, `text-neutral-content-weak`);
            }

            point.textContent = `•`;
            rating.after(point);
        }

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
}
