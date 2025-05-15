import { appendElement } from '../../utils/element';
import { Window } from '../../utils/window';
import { hiddenContent } from './hiddenContent';

export const hiddenContentWindow: Window = new Window('Hidden content', renderFiltersWindow, onCloseWindow);

function renderFiltersWindow(win: Window, context: any) {
    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);

    const elements = appendElement(scroll, `div`, `pp_window_elementsContainer`);
    elements.style.margin = `20px 100px`;

    for (const content of hiddenContent) {
        elements.prepend(content);
    }
}

function onCloseWindow() {
    for (const content of hiddenContent) {
        content.remove();
    }
}
