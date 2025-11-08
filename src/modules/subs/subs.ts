import { Database, DatabaseConfig, ICleanupableData } from '../../utils/database';
import { notify, pp_log } from '../toaster';
import { renderFlairBar } from './flairBar';
import { css } from '../customCSS';
import style from './subs.less';
import { FlairData } from './flair';
import { checkIsRendered, dynamicElement } from '../../utils/tools';
import { flairsWindow } from './flairWindow';
import { MAX_LOAD_LAG } from '../../defines';
import { settings } from '../settings/settings';
import { requestAPI } from '../../utils/redditAPI';
import { FeedSort } from '../feed/feedSort';

css.addStyle(style);

// naming a bit weird just to save compatibility
export const FLAIR_HIDDEN: string = `hidden`;
export const FLAIR_BLURED: string = `blured`;
export const FLAIR_BANNED: string = `banned`;


class SubFlairsData {
    hidden: Array<string>;
    blured: Array<string>;
    banned: Array<string>;
}

class SubData implements ICleanupableData {
    timestamp: number;

    flairs: Array<FlairData>;
}

export const flairs: Database<SubFlairsData> = new Database<SubFlairsData>(`FLAIRS`);
export const subs: Database<SubData> = new Database<SubData>(`SUBS`, { isCleanupable: true, validator: subDataValidator, loader: subDataLoader } as DatabaseConfig<SubData>);

function subDataValidator(subData: SubData) {
    return subData.flairs == undefined;
}

async function subDataLoader(sub: string): Promise<SubData> {
    let subData = { flairs: [] } as SubData;

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

export function getCurrentSub(): string {
    const raw = window.location.href.split(`reddit.com/r/`);
    return raw.length > 1 ? raw[1].split(`/`)[0] : null;
}

export async function renderSub(main: Element) {
    // skip page without feed
    const checkIsFeed = await dynamicElement(() => main.querySelector(`shreddit-feed-error-banner`), MAX_LOAD_LAG);
    if (checkIsFeed == null) return;

    renderMasthead(main);

    renderFlairBar(main);

    renderHighlights(main);
}

async function renderMasthead(main: Element) {
    const masthead = await dynamicElement(() => main.parentElement.parentElement.querySelector(`.masthead`));

    if (checkIsRendered(masthead)) return;

    masthead.querySelector(`section`).classList.add(`pp_mastheadSection`);

    document.body.addEventListener(`click`, renderContextMenu);
}

async function renderHighlights(main: Element) {
    if (settings.COLLAPSE_HIGHLIGHTS.isDisabled()) return;

    const highlightButton = await dynamicElement(() => main?.querySelector(`community-highlight-carousel`)?.shadowRoot?.querySelector(`button`), MAX_LOAD_LAG * 5);

    if (highlightButton != null) {
        (highlightButton as HTMLElement).click();
    }
}

function renderContextMenu(e: MouseEvent) {
    const targetElement = e.target as Element;

    if (targetElement.matches(`shreddit-subreddit-header-buttons`) != true) return;

    if (checkIsRendered(targetElement)) return;

    const controlMenu = targetElement.shadowRoot.querySelector(`shreddit-subreddit-overflow-control`).shadowRoot.querySelector(`faceplate-menu`);

    const originButton = controlMenu.querySelector(`li`);

    // flairs settings
    const menuFlairsButton = originButton.cloneNode(true) as Element;
    menuFlairsButton.querySelector(`.text-14`).textContent = `Flairs settings`;
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
    menuAboutButton.querySelector(`.text-14`).textContent = `About`;
    link.prepend(menuAboutButton);
}
