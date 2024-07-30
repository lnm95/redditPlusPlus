import { MAX_LOAD_LAG } from '../../defines';
import { appendNew, dynamicElement } from '../../utils/tools';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { renderFlair } from './flair';
import style from './flairBar.less';
import { flairs, getCurrentSub, subs } from './subs';

css.addStyle(style);

export async function renderFlairBar(main: Element) {
    if (settings.FLAIR_BAR.isDisabled()) return;

    let feedContent = await dynamicElement(() => main?.querySelector(`shreddit-title`)?.parentElement, MAX_LOAD_LAG);

    // skip render for non feed page
    if (feedContent == null) return;

    const subHighlights = main?.querySelector(`community-highlight-carousel`) as HTMLElement;

    if(subHighlights != null){
        feedContent = subHighlights;
    }

    const prevFlairMenu = feedContent.parentElement?.querySelector(`.pp_flairBar`)?.parentElement;
    if (prevFlairMenu != null) {
        prevFlairMenu.remove();
    }

    const sub = getCurrentSub();

    // load data
    const subData = await subs.getWithLoader(sub);
    const flairsData = flairs.get(sub);

    // skip render when sub haven't flairs
    if (subData.flairs == undefined || subData.flairs.length == 0) return;

    const flairMenuContainer = document.createElement(`div`);
    feedContent.before(flairMenuContainer);

    const flairMenu = appendNew(flairMenuContainer, `div`, `pp_flairBar`);

    if(subHighlights != null){
        flairMenu.classList.add(`pp_flairBar_highlights`);        
    }

    const ul = appendNew(flairMenu, `ul`, [`p-0`, `m-0`, `list-none`, `gap-xs`, `flex`, `flex-row`, `pp_flairBar_list`]);
    let flairsRendered = 0;

    for (const flair of subData.flairs) {
        if (flairsData.hidden != undefined && flairsData.hidden.includes(flair.text)) continue;

        const li = appendNew(ul, `li`, `max-w-full`);

        renderFlair(li, sub, flair);

        flairsRendered++;
    }

    // prevent render empty menu
    if (flairsRendered == 0) {
        flairMenuContainer.remove();
        return;
    }

    // borders
    const borderContainer = document.createElement(`div`);
    borderContainer.classList.add(`pp_flairBar_bordersContainer`);
    flairMenuContainer.prepend(borderContainer);

    const borderLeftC = appendNew(borderContainer, `div`, `pp_flairBar_preBorder`);
    const borderLeft = appendNew(borderLeftC, `div`, [`pp_flairBar_border`, `pp_flairBar_border_left`]);
    borderLeft.textContent = ` `;
    const borderRightC = appendNew(borderContainer, `div`, `pp_flairBar_preBorder`);
    const borderRight = appendNew(borderRightC, `div`, [`pp_flairBar_border`, `pp_flairBar_border_right`]);
    borderRight.textContent = ` `;

    const hr = document.createElement(`hr`);
    hr.classList.add(`border-0`, `border-b-sm`, `border-solid`, `border-b-neutral-border-weak`);
    flairMenuContainer.prepend(hr);

    const mymx = document.createElement(`div`);
    mymx.classList.add(`my-xs`, `mx-2xs0`);
    flairMenuContainer.prepend(mymx);

    // navigation
    ul.style.left = `25px`;
    const ulRect = ul.getBoundingClientRect();
    const menuRect = flairMenu.getBoundingClientRect();

    flairMenu.addEventListener(`mousemove`, e => {
        onMoveOverFlairs(e, ul, flairMenu);
    });

    if (ulRect.width > menuRect.width * 1.72) {
        ul.classList.add(`pp_flairBar_listSmoothed`);
    }
}

function onMoveOverFlairs(e: MouseEvent, ul: HTMLElement, flairMenu: HTMLElement) {
    const ulRect = ul.getBoundingClientRect();
    const menuRect = flairMenu.getBoundingClientRect();

    if (ulRect.width < menuRect.width) {
        ul.style.left = `25px`;
        return;
    }

    let scale = (e.clientX - (menuRect.x + 25)) / (menuRect.right - 25 - (menuRect.x + 25));
    scale = Math.max(0, Math.min(scale, 1));

    ul.style.left = `${Math.round(25 - (ulRect.width - menuRect.width + 50) * scale)}px`;
}
