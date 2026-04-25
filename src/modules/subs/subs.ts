import { MAX_LOAD_LAG } from '../../defines';
import { Database, DatabaseConfig, ICleanupableData } from '../../utils/database';
import { dynamic } from '../../utils/dynamic';
import { requestAPI } from '../../utils/redditAPI';
import { checkIsRendered } from '../../utils/tools';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { pp_log } from '../toaster';
import { FlairData } from './flair';
import { renderFlairBar } from './flairBar';
import { flairsWindow } from './flairWindow';

import style from './subs.less';

css.addStyle(style);

// naming a bit weird just to save compatibility
export const FLAIR_HIDDEN: string = `hidden`;
export const FLAIR_BLURED: string = `blured`;
export const FLAIR_BANNED: string = `banned`;

class SubFlairsData {
    hidden!: Array<string>;
    blured!: Array<string>;
    banned!: Array<string>;
}

class SubData implements ICleanupableData {
    timestamp!: number;
    flairs!: Array<FlairData>;
}

export const flairs: Database<SubFlairsData> = new Database<SubFlairsData>(`FLAIRS`);
export const subs: Database<SubData> = new Database<SubData>(`SUBS`, { isCleanupable: true, validator: subDataValidator, loader: subDataLoader } as DatabaseConfig<SubData>);

function subDataValidator(subData: SubData) {
    return subData.flairs == undefined;
}

async function subDataLoader(sub: string): Promise<SubData> {
    let subData = {} as SubData;
    subData.flairs = [];

    const { status, result } = await requestAPI(`/r/${sub}/api/link_flair_v2.json`);

    if (result != null && result.message == null) {
        for (const loadedFlair of result) {
            const flair = { text: loadedFlair.text, color: loadedFlair.text_color, background: loadedFlair.background_color, richtext: loadedFlair.richtext } as FlairData;

            subData.flairs.push(flair);
        }

        return subData;
    }

    return subData;
}

export function getCurrentSub(): string | null {
    const raw = window.location.href.split(`reddit.com/r/`);

    if (raw.length < 2) {
        pp_log(`Failed to get sub name from: ${window.location.href}`);
        return null;
    }

    return raw[1].split(`/`)[0];
}

export async function renderSub(main: Element) {
    // skip page without feed
    const checkIsFeed = await dynamic(() => main.querySelector(`shreddit-feed-error-banner`), MAX_LOAD_LAG);
    if (checkIsFeed == null) return;

    renderMasthead(main);

    renderFlairBar(main);

    renderHighlights(main);

    renderRecommendedCommunities(main);
}

async function renderMasthead(main: Element) {
    const masthead = await dynamic(() => main.parentElement?.parentElement?.querySelector(`.masthead`));

    if (!masthead || checkIsRendered(masthead)) return;

    masthead.querySelector(`section`)?.classList.add(`pp_mastheadSection`);

    document.body.addEventListener(`click`, renderContextMenu);
}

async function renderHighlights(main: Element) {
    if (settings.COLLAPSE_HIGHLIGHTS.isDisabled()) return;

    const highlightButton = await dynamic(() => main?.querySelector(`community-highlight-carousel`)?.shadowRoot?.querySelector(`button`), MAX_LOAD_LAG * 5);

    if (highlightButton != null) {
        (highlightButton as HTMLElement).click();
    }
}

async function renderRecommendedCommunities(main: Element) {
    if (settings.HIDE_COMMUNITY_RECOMMENDATIONS.isDisabled()) return;

    const recommendedCommunities = await dynamic(() => main?.querySelector(`in-feed-community-recommendations`), MAX_LOAD_LAG * 5);

    if (recommendedCommunities != null) {
        (recommendedCommunities as HTMLElement).remove();
    }
}

function renderContextMenu(e: MouseEvent) {
    const targetElement = e.target as Element;

    if (!targetElement.matches(`shreddit-subreddit-header-buttons`)) return;

    if (checkIsRendered(targetElement)) return;

    const controlMenu = targetElement.shadowRoot?.querySelector(`shreddit-subreddit-overflow-control`)?.shadowRoot?.querySelector(`faceplate-menu`);
    const originButton = controlMenu?.querySelector(`li`);

    if (!controlMenu || !originButton) {
        pp_log(`Failed to render subreddit context menu`);
        return;
    }

    // flairs settings
    const menuFlairsButton = originButton.cloneNode(true) as HTMLElement;
    setButtonText(menuFlairsButton, `Flairs settings`);
    controlMenu.prepend(menuFlairsButton);

    const sub = getCurrentSub();

    menuFlairsButton.addEventListener(`click`, () => {
        flairsWindow.open({ sub: sub });
    });

    // about
    const link = document.createElement(`a`);
    link.href = `https://www.reddit.com/` + targetElement.getAttribute(`prefixed-name`) + `/about/`;
    link.classList.add(`no-underline`);
    controlMenu.prepend(link);

    const menuAboutButton = originButton.cloneNode(true) as Element;
    setButtonText(menuAboutButton, `About`);
    link.prepend(menuAboutButton);

    function setButtonText(button: Element, text: string) {
        const textBody = button.querySelector(`.text-body-2`);

        if (textBody) {
            textBody.textContent = text;
        }
    }
}
