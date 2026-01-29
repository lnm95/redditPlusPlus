import { DAY_SECONDS, HOUR_SECONDS } from '../../defines';
import { buildSvg } from '../../utils/svg';
import { appendElement } from '../../utils/element';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { notify } from '../toaster';
import { BLOCK_OPERATION, FOLLOW_OPERATION } from '../users/userOperations';
import { USERTAG_CONFIGS, UserTag, UserTagConfig, tags } from './userTags';
import { renderUserTagsPanel } from './userTagsPanel';

import shareButtonSvg from '@resources/comments/shareButton.svg';

export function renderContextMenu(comment: Element) {
    let contextMenuButton = comment.querySelector(`shreddit-overflow-menu`).shadowRoot;

    css.registry(contextMenuButton);

    const contextMenu = contextMenuButton.querySelector(`faceplate-menu`);
    const originButton = contextMenu.querySelector(`faceplate-tracker[noun="report"]`);

    if (settings.HIDE_SHARE.isEnabled()) {
        let linkButton = originButton.cloneNode(true) as Element;
        linkButton.querySelector(`span .text-body-2`).textContent = `Copy link`;
        originButton.before(linkButton);

        const originIcon = linkButton.querySelector(`svg`);
        const shareIcon = buildSvg(shareButtonSvg, 20, 20);
        originIcon.replaceWith(shareIcon);

        const permalink = comment.getAttribute(`permalink`);
        linkButton.addEventListener(`click`, () => {
            navigator.clipboard.writeText(`https://www.reddit.com${permalink}`);
            notify(`Link copied`);
        });
    }

    // userTags
    renderUserTagsPanel(contextMenu, comment.getAttribute(`author`));
}
