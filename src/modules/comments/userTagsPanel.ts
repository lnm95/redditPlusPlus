import { DAY_SECONDS, HOUR_SECONDS } from '../../defines';
import { buildSvg } from '../../utils/svg';
import { appendElement } from '../../utils/element';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { notify } from '../toaster';
import { BLOCK_OPERATION, FOLLOW_OPERATION } from '../users/userOperations';
import { USERTAG_CONFIGS, UserTag, UserTagConfig, renderUserTags, tags } from './userTags';

class UserTagButtonContext {
    userTag: string;
    userId: string;
    button: HTMLElement;
    hint: HTMLElement;
}

const BLOCK_COOLDOWN_SECONDS = DAY_SECONDS + 42;

const INACTIVE_COLOR: string = `#adadad`;

export function renderUserTagsPanel(contextMenu: Element, userId: string) {
    if (settings.USER_TAGS.isDisabled()) return;

    const tagHintOffset = document.createElement(`div`);
    tagHintOffset.classList.add(`pp_tagHint_offset`);
    contextMenu.prepend(tagHintOffset);

    const tagHintContainer = document.createElement(`div`);
    tagHintContainer.classList.add(`pp_tagHintContainer`);
    tagHintOffset.prepend(tagHintContainer);

    const tagHint = appendElement(tagHintContainer, `div`, `pp_tagHint`);
    tagHint.style.display = `none`;

    const tagsPanel = document.createElement(`div`);
    tagsPanel.classList.add(`pp_tagsPanel`);
    tagHintOffset.after(tagsPanel);

    USERTAG_CONFIGS.forEach((config, userTag) => {
        renderTagButton(config, userTag);
    });

    function renderTagButton(config: UserTagConfig, userTag: string) {
        const tagButton = appendElement(tagsPanel, `span`, `pp_tagButton`);
        tagButton.setAttribute(`userTag`, userTag);

        const subscribeIcon = buildSvg(config.button, 20, 20);
        tagButton.appendChild(subscribeIcon);

        const context: UserTagButtonContext = { userTag: userTag, userId: userId, button: tagButton, hint: tagHint };

        tagButton.addEventListener(`click`, () => {
            userTagButtonClick(context);
        });
        tagButton.addEventListener(`mouseenter`, () => {
            userTagButtonEnter(context);
        });
        tagButton.addEventListener(`mouseleave`, () => {
            userTagButtonOut(context);
        });
    }

    refreshUserTagsPanel(tagsPanel, userId);
}

function refreshUserTagsPanel(tagsPanel: Element, userId: string) {
    const tagsData = tags.get(userId);
    const tagsList = tagsData?.tags ?? [];

    tagsPanel.querySelectorAll(`.pp_tagButton`).forEach((button: HTMLElement) => {
        const tag = button.getAttribute(`userTag`);
        const config = USERTAG_CONFIGS.get(tag);

        button.removeAttribute(`has-cooldown`);
        button.removeAttribute(`has-blocked`);

        if (tagsList.includes(tag)) {
            button.classList.toggle(`pp_tagButtonActive`, true);
            button.style.backgroundColor = config.color;
            button.style.color = `white`;
        } else {
            button.classList.toggle(`pp_tagButtonActive`, false);
            button.style.color = config.color;
            button.style.removeProperty(`background-color`);

            if (tag == UserTag.BLOCKED && tagsData.blockCooldown != undefined && Date.now() / 1000 < tagsData.blockCooldown) {
                button.setAttribute(`has-cooldown`, ``);
                button.style.color = INACTIVE_COLOR;
            }

            if (tag == UserTag.FOLLOWED && tagsList.includes(UserTag.BLOCKED)) {
                button.setAttribute(`has-blocked`, ``);
                button.style.color = INACTIVE_COLOR;
            }
        }
    });
}

function userTagButtonClick(context: UserTagButtonContext) {
    if (context.button.getAttribute(`has-cooldown`) != null || context.button.getAttribute(`has-blocked`) != null) {
        notify(`Unable to do this`);
        return;
    }

    let tagsData = tags.get(context.userId);

    if (tagsData.tags == undefined) {
        tagsData.tags = [];
    }

    let isAdded = false;
    if (tagsData.tags.includes(context.userTag)) {
        tagsData.tags = tagsData.tags.filter(t => t != context.userTag);
    } else {
        tagsData.tags.push(context.userTag);
        isAdded = true;

        // auto clear follow state
        if (context.userTag == UserTag.BLOCKED) {
            tagsData.tags = tagsData.tags.filter(t => t != UserTag.FOLLOWED);
        }
    }

    if (tagsData.tags.length > 1) {
        tagsData.tags.sort((firstItem, secondItem) => USERTAG_CONFIGS.get(firstItem).priority - USERTAG_CONFIGS.get(secondItem).priority);
    }

    tags.set(context.userId, tagsData);

    // refresh comments tags
    document.body.querySelectorAll(`shreddit-comment[author="${context.userId}"]`).forEach(comment => {
        renderUserTags(comment);
        console.log(`refresh comment ${context.userId}`);

        if (isAdded && context.userTag == UserTag.BLOCKED) {
            comment.setAttribute(`collapsed`, ``);
        }
    });

    // execute specific operations
    if (context.userTag == UserTag.FOLLOWED) {
        FOLLOW_OPERATION.run(isAdded, context.userId);
    }

    if (context.userTag == UserTag.BLOCKED) {
        if (!isAdded) {
            tagsData.blockCooldown = Date.now() / 1000 + BLOCK_COOLDOWN_SECONDS;
            tags.set(context.userId, tagsData);
        }

        BLOCK_OPERATION.run(isAdded, context.userId);
    }

    // refresh context menu
    refreshUserTagsPanel(context.button.parentElement, context.userId);
}

function userTagButtonEnter(context: UserTagButtonContext) {
    context.hint.style.display = null;

    context.hint.dataset.target = context.userTag;

    const tagsData = tags.get(context.userId);
    const config = USERTAG_CONFIGS.get(context.userTag);

    const isActivated = (tagsData?.tags ?? []).includes(context.userTag);
    context.hint.innerText = isActivated ? config.removeHint : config.addHint;

    if (context.button.getAttribute(`has-cooldown`) != null) {
        const cooldownHours = Math.round((tagsData.blockCooldown - Date.now() / 1000) / HOUR_SECONDS);
        context.hint.innerText = `Unable to block for ${cooldownHours}h after unblocking`;
    }

    if (context.button.getAttribute(`has-blocked`) != null) {
        context.hint.innerText = `Unable to follow on blocked user`;
    }
}

function userTagButtonOut(context: UserTagButtonContext) {
    if (context.hint.dataset?.target == context.userTag) {
        context.hint.style.display = `none`;
    }
}
