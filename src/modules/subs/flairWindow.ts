import { appendElement } from '../../utils/element';
import { renderUIOptions } from '../../utils/UI/options';
import { renderUIToggle } from '../../utils/UI/toggle';
import { Window } from '../../utils/window';
import { css } from '../customCSS';
import { getFlairData, renderFlair, setFlairData } from './flair';
import { renderFlairBar } from './flairBar';
import style from './flairWindow.less';
import { FLAIR_BANNED, FLAIR_BLURED, FLAIR_HIDDEN, subs } from './subs';

css.addStyle(style);

export const flairsWindow: Window = new Window('Flairs settings', renderFlairsWindow, closeFlairsWindow);

class FlairWindowContext {
    sub: string;
}

const visabilityOptions = [`Show`, `Blur`, `Hide`];

function renderFlairsWindow(win: Window, context: FlairWindowContext) {
    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);

    const elements = appendElement(scroll, `div`, `pp_window_elementsContainer`);

    const subData = subs.get(context.sub);
    for (const flair of subData.flairs) {
        const panel = appendElement(elements, `div`, [`pp_window_element`, `pp_flairWindow_flair`]);

        const flairContainer = appendElement(panel, `div`, `pp_flairWindow_flairContainer`);
        renderFlair(flairContainer, context.sub, flair);

        // flair bar toggle
        const onBarSpan = appendElement(panel, `span`);
        onBarSpan.textContent = `Flairs bar:`;

        renderUIToggle(panel, !getFlairData(context.sub, flair.text, FLAIR_HIDDEN), state => {
            setFlairData(context.sub, flair.text, FLAIR_HIDDEN, !state);
        });

        const feedSpan = appendElement(panel, `span`);
        feedSpan.textContent = `Feed:`;

        // feed visability options
        const isBlured = getFlairData(context.sub, flair.text, FLAIR_BLURED);
        const isBanned = getFlairData(context.sub, flair.text, FLAIR_BANNED);

        const visability = isBanned ? 2 : isBlured ? 1 : 0;

        renderUIOptions(panel, visability, visabilityOptions, index => {
            setFlairData(context.sub, flair.text, FLAIR_BLURED, false);
            setFlairData(context.sub, flair.text, FLAIR_BANNED, false);

            if (index == 1) {
                setFlairData(context.sub, flair.text, FLAIR_BLURED, true);
            }

            if (index == 2) {
                setFlairData(context.sub, flair.text, FLAIR_BANNED, true);
            }
        });
    }
}

function closeFlairsWindow() {
    const main = document.body.querySelector(`#main-content`);

    renderFlairBar(main);
}
