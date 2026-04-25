import { MAX_LOAD_LAG } from '../../defines';
import { Database } from '../../utils/database';
import { dynamic } from '../../utils/dynamic';
import { buildSvg } from '../../utils/svg';
import { CustomCSS } from '../customCSS';
import { settings } from '../settings/settings';

import blockedButton from '@resources/comments/userTags/blockedButton.svg';
import blockedIcon from '@resources/comments/userTags/blockedIcon.svg';
import followedButton from '@resources/comments/userTags/followedButton.svg';
import followedIcon from '@resources/comments/userTags/followedIcon.svg';
import likedButton from '@resources/comments/userTags/likedButton.svg';
import likedIcon from '@resources/comments/userTags/likedIcon.svg';
import warningButton from '@resources/comments/userTags/warningButton.svg';
import warningIcon from '@resources/comments/userTags/warningIcon.svg';

import style from './userTags.less';

export const userTagsCss = new CustomCSS();
userTagsCss.register(document);

export class UserTag {
    static FOLLOWED: string = `Followed`;
    static LIKED: string = `Liked`;
    static WARNING: string = `Warning`;
    static BLOCKED: string = `Blocked`;
}

export class UserTagConfig {
    priority!: number;
    addHint!: string;
    removeHint!: string;
    color!: string;
    icon: any;
    button: any;
}

export const USERTAG_CONFIGS = new Map<string, UserTagConfig>([
    [UserTag.FOLLOWED, { priority: 100, addHint: `Follow`, removeHint: `Unfollow`, color: `#0b7ed3`, icon: followedIcon, button: followedButton }],
    [UserTag.LIKED, { priority: 2, addHint: `Tag as liked`, removeHint: `Remove liked tag`, color: `#C95A54`, icon: likedIcon, button: likedButton }],
    [UserTag.WARNING, { priority: 1, addHint: `Tag as warned`, removeHint: `Remove warned tag`, color: `#D4A343`, icon: warningIcon, button: warningButton }],
    [UserTag.BLOCKED, { priority: 0, addHint: `Block`, removeHint: `Unblock`, color: `#663988`, icon: blockedIcon, button: blockedButton }]
]);

class UserTagsData {
    tags!: Array<string>;
    blockCooldown!: number;
}

export const tags: Database<UserTagsData> = new Database<UserTagsData>(`TAGS`);

export async function renderUserTags(comment: Element) {
    if (settings.USER_TAGS.isDisabled()) return;

    userTagsCss.addStyle(style, `userTags`);

    const userId = comment.getAttribute(`author`);
    if (userId == null) return;

    const tagsData = tags.get(userId);
    const tagsContainer = await dynamic(() => comment.querySelector(`div[pp-anchor="tags"]`), MAX_LOAD_LAG);

    // comment not rendered
    if (!tagsContainer) return;

    // clear old tags
    tagsContainer.parentNode!.querySelectorAll(`svg[userTag="true"]`).forEach(tag => {
        tag.remove();
    });

    if (tagsData.tags != undefined) {
        for (const tag of tagsData.tags) {
            renderNextTag(tag);
        }
    }

    function renderNextTag(tag: string) {
        const config = USERTAG_CONFIGS.get(tag)!;

        const tagSvg = buildSvg(config.icon, 20, 20, { viewBox: `-4 -4 20 20` });
        tagSvg.setAttribute(`userTag`, `true`);
        tagSvg.style.color = config.color;
        tagsContainer!.after(tagSvg);
    }
}
