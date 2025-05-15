import { css } from '../../modules/customCSS';
import { appendElement } from '../element';
import style from './toggle.less';

css.addStyle(style);

export function renderUIToggle(container: Element, value: boolean, onClick: (state: boolean) => void): HTMLElement {
    const toggle = appendElement(container, `div`, `pp_ui_toggle`);
    const toggleButton = appendElement(toggle, `button`, `pp_ui_toggle_button`);
    toggleButton.classList.toggle(`pp_ui_toggle_active`, value);
    appendElement(toggleButton, `div`, `pp_ui_toggle_knob`);

    let state = value;

    toggleButton.addEventListener(`click`, () => {
        state = !state;
        toggleButton.classList.toggle(`pp_ui_toggle_active`, state);

        onClick(state);
    });

    return toggle;
}
