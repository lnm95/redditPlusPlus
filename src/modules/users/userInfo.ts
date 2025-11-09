import { buildSvg } from '../../utils/svg';
import { dynamicElement } from '../../utils/tools';
import { settings } from '../settings/settings';
import { UserData, users } from './users';
import { PROFILE_USER_DATA, profiler_comments } from '../../_debug/debug';
import newUserSvg from '@resources/comments/newUser.svg';
import bannedUserSvg from '@resources/comments/bannedUser.svg';
import { ContentType, DAY_SECONDS } from '../../defines';
import { UsernameMode } from './usernameMode';
import { appendElement, prependElement } from '../../utils/element';

const NEWUSER_SECONDS_SHIFT = DAY_SECONDS * 64;

let loadQueueLock = false;

export async function renderUserInfo(userId: string, nickName: Element, tagsAnchor: Element, infoAnchor: Element, contentType: ContentType) {
    const usernameMode = settings.USERNAME_MODE.get() as UsernameMode;
    if (settings.USER_INFO.isDisabled() && usernameMode == UsernameMode.ProfileName) return;

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

    if ((usernameMode != UsernameMode.ProfileName) && userData.nick != undefined && userData.nick) {
        const maxSymbols = parseInt(settings.USERNAME_MAX_SIMBOLS.get());
        nickName.textContent = (maxSymbols <= 0 || userData.nick.length < maxSymbols) ? userData.nick : userData.nick.slice(0, maxSymbols - 2) + `...`;

        if (usernameMode == UsernameMode.Both) {
            if(userId == nickName.textContent) {
                nickName.textContent = `u/${nickName.textContent}`;
            }
            else if (contentType == ContentType.Comment) {
                const commentHeader = nickName.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
                const flair = commentHeader.querySelector(`author-flair-event-handler`);
                let profileContainer = null;
                if (flair != null) {
                    profileContainer = flair.parentElement;
                } else {
                    profileContainer = appendElement(commentHeader, `div`, [`flex`, `flex-none`, `flex-row`, `items-center`, `flex-nowrap`, `gap-2xs`, `pt-[2px]`]);
                }

                const profileName = prependElement(profileContainer, `div`, [`font-bold`, `text-neutral-content-strong`, `text-12`]);
                profileName.textContent = `u/${userId}`;
                profileName.style.color = `#696969`;
            } else {
                const profileName = prependElement(nickName.parentElement, `div`);
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
