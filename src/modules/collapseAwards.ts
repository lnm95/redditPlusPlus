import { MAX_LOAD_LAG, ModuleTaget } from '../defines';
import { dynamicElement } from '../utils/tools';
import style from './collapseAwards.less';
import { AwardsMode } from './collapseAwardsMode';
import { css } from './customCSS';
import { settings } from './settings/settings';

css.addStyle(style);

export async function renderCollapseAward(target: Element, targetType: ModuleTaget) {
    const mode = settings.COLLAPSE_AWARDS.get() as AwardsMode;
    
    if (mode == AwardsMode.Default) return;

    css.addStyle(style, `collapseAwards`);

    const awardButton = targetType.isComment ? target.querySelector(`award-button`) : target.shadowRoot.querySelector(`award-button`);

    if (awardButton == null) return;

    if (mode == AwardsMode.RemoveCompletely) {
        awardButton.remove();
        return;
    }

    if (awardButton.getAttribute(`count`) == `0`) {
        if (!targetType.isComment) {
            css.registry(target.shadowRoot);
        }

        const targetContainer = targetType.isComment ? target.querySelector(`shreddit-comment-action-row`)?.shadowRoot : target?.shadowRoot;
        const upVoteButton = await dynamicElement(() => targetContainer?.querySelector(`button[upvote]`), MAX_LOAD_LAG);

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
