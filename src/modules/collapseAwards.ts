import { ContentType, MAX_LOAD_LAG } from '../defines';
import { dynamic } from '../utils/dynamic';
import { AwardsMode } from './collapseAwardsMode';
import { CustomCSS } from './customCSS';
import { settings } from './settings/settings';

import style from './collapseAwards.less';

const awardsCss = new CustomCSS();
awardsCss.register(document);
awardsCss.addStyle(style);

export async function renderCollapseAward(target: Element, contentType: ContentType) {
    const mode = settings.COLLAPSE_AWARDS.get() as AwardsMode;

    if (mode == AwardsMode.Default) return;

    const awardButtonRequest = contentType == ContentType.Comment ? () => target.querySelector(`award-button`) : () => target.shadowRoot?.querySelector(`award-button`);
    let awardButton = await dynamic(awardButtonRequest, MAX_LOAD_LAG * 2);

    if (awardButton == null) return;

    if (mode == AwardsMode.RemoveCompletely) {
        awardButton.remove();
        return;
    }

    if (awardButton.getAttribute(`count`) == `0`) {
        if (contentType == ContentType.Post) {
            awardsCss.register(target.shadowRoot);
        }

        const targetContainer = contentType == ContentType.Comment ? target.querySelector(`shreddit-comment-action-row`)?.shadowRoot : target?.shadowRoot;
        const upVoteButton = await dynamic(() => targetContainer?.querySelector(`button[upvote]`), MAX_LOAD_LAG);

        if (upVoteButton == null) return;

        awardButton.classList.toggle(`pp_awardButton_hidden`, isCollapsed(upVoteButton));
        awardButton.classList.toggle(`pp_awardButton_collapsed`, isCollapsed(upVoteButton));
        setTimeout(() => {
            awardButton.classList.add(`pp_awardButton`);
        }, 500);

        upVoteButton.addEventListener(`click`, () => {
            awardButton.classList.toggle(`pp_awardButton_hidden`, isCollapsed(upVoteButton));

            setTimeout(() => {
                awardButton.classList.toggle(`pp_awardButton_collapsed`, isCollapsed(upVoteButton));
            }, 10);
        });
    }
}

function isCollapsed(upVoteButton: Element): boolean {
    return upVoteButton.getAttribute(`aria-pressed`) != `true`;
}
