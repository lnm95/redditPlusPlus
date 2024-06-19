import { appendNew } from '../../utils/tools';
import { Window } from '../../utils/window';
import { css } from '../customCSS';
import { renderFlair } from './flair';
import { renderFlairBar } from './flairBar';
import style from './flairWindow.less';
import { FLAIR_BANNED, FLAIR_HIDDEN, flairs, subs } from './subs';

css.addStyle(style);

export const flairsWindow: Window = new Window('Flairs settings', renderFlairsWindow, closeFlairsWindow);

class FlairWindowContext {
    sub: string;
}

function renderFlairsWindow(win: Window, context: FlairWindowContext) {
    const titlePanel = appendNew(win.content, `div`, [`pp_window_element`, `pp_flairWindow_columnTittle`]);

    const tittleBarArea = appendNew(titlePanel, `div`, `pp_checkBox_panelArea`);
    const tittleBar = appendNew(tittleBarArea, `div`, [`text-14`, `font-semibold`, `mb-xs`]);
    tittleBar.textContent = `Flairs bar:`;
    const tittleFeedArea = appendNew(titlePanel, `div`, `pp_checkBox_panelArea`);
    const tittleFeed = appendNew(tittleFeedArea, `div`, [`text-14`, `font-semibold`, `mb-xs`]);
    tittleFeed.textContent = `Feed:`;

    const scroll = appendNew(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);

    const elements = appendNew(scroll, `div`, `pp_window_elementsContainer`);

    const subData = subs.get(context.sub);
    for (const flair of subData.flairs) {
        const panel = appendNew(elements, `div`, `pp_window_element`);

        const flairContainer = appendNew(panel, `div`, `pp_flairWindow_flairContainer`);

        const flairsDataInit = flairs.get(context.sub) as any;

        addFlairToggle(FLAIR_HIDDEN);
        addFlairToggle(FLAIR_BANNED);

        function addFlairToggle(category: string) {
            const checkboxArea = appendNew(panel, `div`, `pp_checkBox_panelArea`);
            const checkBoxContainer = appendNew(checkboxArea, `div`, `pp_checkBox_container`);
            const checkBoxBack = appendNew(checkBoxContainer, `button`, `pp_checkBox_button`);

            const initState = !(flairsDataInit[category]?.includes(flair.text) ?? false);
            checkBoxBack.classList.toggle(`pp_checkBox_buttonActive`, initState);
            const knob = appendNew(checkBoxBack, `div`, `pp_checkBox_knob`);

            checkBoxBack.addEventListener(`click`, e => {
                const flairData = flairs.get(context.sub) as any;

                let state = flairData[category]?.includes(flair.text) ?? false;

                checkBoxBack.classList.toggle(`pp_checkBox_buttonActive`, state);

                if (state) {
                    flairData[category] = (flairData[category] as Array<string>).filter(f => f != flair.text);
                } else {
                    const categoryFlairs = flairData[category] ?? [];
                    categoryFlairs.push(flair.text);
                    flairData[category] = categoryFlairs;
                }

                flairs.set(context.sub, flairData);
            });
        }

        // flair
        renderFlair(flairContainer, context.sub, flair);
    }
}

function closeFlairsWindow() {
    const main = document.body.querySelector(`#main-content`);

    renderFlairBar(main);
}
