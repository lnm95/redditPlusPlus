import { PROFILE_USER_DATA, profiler_comments } from '../../_debug/debug';
import { ContentType, DAY_SECONDS } from '../../defines';
import { appendElement, prependElement } from '../../utils/element';
import { buildSvg } from '../../utils/svg';
import { settings } from '../settings/settings';
import { UsernameMode } from './usernameMode';
import { UserData, users } from './users';

import bannedUserSvg from '@resources/comments/bannedUser.svg';
import newUserSvg from '@resources/comments/newUser.svg';

const NEWUSER_SECONDS_SHIFT = DAY_SECONDS * 64;

const loadQueue: Array<Function> = [];

export async function renderUserInfo(userId: string, nickName: Element, tagsAnchor: Element, infoAnchor: Element, contentType: ContentType) {
    const usernameMode = settings.USERNAME_MODE.get() as UsernameMode;
    if (settings.USER_INFO.isDisabled() && usernameMode == UsernameMode.ProfileName) return;

    if (DEBUG && PROFILE_USER_DATA) {
        profiler_comments.userDataLoading++;
    }

    await new Promise<void>(resolve => {
        loadQueue.push(resolve);

        if (loadQueue.length == 1) {
            resolve();
        }
    });

    const userData: UserData = await users.getWithLoader(userId, isLoaded => {
        loadQueue.shift();

        if (loadQueue.length > 0) {
            const nextResolve = loadQueue[0];
            nextResolve();
        }
    });

    if (DEBUG && PROFILE_USER_DATA) {
        profiler_comments.userDataLoading--;
    }

    if (usernameMode != UsernameMode.ProfileName && userData.nick != undefined && userData.nick) {
        const maxSymbols = parseInt(settings.USERNAME_MAX_SIMBOLS.get());
        nickName.textContent = maxSymbols <= 0 || userData.nick.length < maxSymbols ? userData.nick : userData.nick.slice(0, maxSymbols - 2) + `...`;

        if (usernameMode == UsernameMode.Both) {
            if (userId == nickName.textContent) {
                nickName.textContent = `u/${nickName.textContent}`;
            } else if (contentType == ContentType.Comment) {
                const commentHeader = nickName.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!;
                const flair = commentHeader?.querySelector(`author-flair-event-handler`);

                let profileContainer =
                    flair != null ? flair.parentElement! : appendElement(commentHeader, `div`, [`flex`, `flex-none`, `flex-row`, `items-center`, `flex-nowrap`, `gap-2xs`, `pt-[2px]`]);

                const profileName = prependElement(profileContainer, `div`, [`font-bold`, `text-neutral-content-strong`, `text-12`]);
                profileName.textContent = `u/${userId}`;
                profileName.style.color = `#696969`;
            } else {
                const profileName = prependElement(nickName.parentElement!, `div`);
                profileName.textContent = `| u/${userId}`;
                nickName.after(profileName);
            }
        }
    }

    if (settings.USER_INFO.isEnabled()) {
        const rating = document.createElement(`div`);
        rating.classList.add(`text-neutral-content-weak`, `text-12`);

        if (userData.rating != undefined) {
            rating.textContent = userData.rating < 10000 ? `${Math.round(userData.rating / 100) / 10}K` : `${Math.round(userData.rating / 1000)}K`;

            infoAnchor.after(rating);

            const point = document.createElement(`span`);
            if (contentType == ContentType.Comment) {
                point.classList.add(`inline-block`, `my-0`, `mx-2xs`, `text-12`, `text-neutral-content-weak`);
            } else {
                point.classList.add(`inline-block`, `my-0`, `created-separator`, `text-neutral-content-weak`);
            }

            point.textContent = `•`;
            rating.after(point);
        }

        if (userData.created != undefined && userData.created > Date.now() / 1000 - NEWUSER_SECONDS_SHIFT) {
            const tagSvg = buildSvg(newUserSvg, 20, 20, { viewBox: `-2 -2 20 20` });

            tagsAnchor.before(tagSvg);
        }

        if (userData.banned != undefined && userData.banned) {
            const tagSvg = buildSvg(bannedUserSvg, 20, 20, { viewBox: `-2 -2 20 20` });

            tagsAnchor.before(tagSvg);
        }
    }
}
