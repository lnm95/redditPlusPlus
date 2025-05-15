import { css } from '../../modules/customCSS';
import { buildSvg } from '../svg';
import { appendElement } from '../element';
import arrowSvg from '@resources/settingsArrow.svg';

import style from './options.less';
import { notify } from '../../modules/toaster';

css.addStyle(style);

export function renderUIOptions(container: Element, index: number, values: Array<string>, onChange: (index: number) => void): HTMLElement {
    let currentIndex = index;

    const options = appendElement(container, `div`, `pp_ui_options`);

    const leftButton = appendElement(options, `div`, [`pp_ui_options_arrow`, `pp_ui_options_inversed`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
    const leftButtonSvg = buildSvg(arrowSvg, 20, 20);
    leftButton.append(leftButtonSvg);

    const contentContainer = appendElement(options, `div`, `pp_ui_options_container`);

    const content = appendElement(contentContainer, `span`, [`text-secondary`, `font-normal`]);

    let largerValue = values[0];
    let largerLetters = largerValue.length;
    for (const val of values) {
        if (val.length > largerLetters) {
            largerValue = val;
            largerLetters = val.length;
        }
    }
    content.textContent = largerValue;
    const rect = content.getBoundingClientRect();
    content.style.minWidth = `${rect.width}px`;

    content.textContent = values[index];

    const dots = appendElement(contentContainer, `span`, [`pp_ui_options_dots`, `text-secondary`, `font-normal`]);
    dots.textContent = getDots();

    const rightButton = appendElement(options, `div`, [`pp_ui_options_arrow`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
    const rightButtonSvg = buildSvg(arrowSvg, 20, 20);
    rightButton.append(rightButtonSvg);

    leftButton.addEventListener(`click`, e => {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = values.length - 1;
        }

        change();
    });

    rightButton.addEventListener(`click`, e => {
        currentIndex++;

        if (currentIndex >= values.length) {
            currentIndex = 0;
        }

        change();
    });

    function change() {
        content.textContent = values[currentIndex];
        dots.textContent = getDots();

        onChange(currentIndex);
    }

    function getDots() {
        let i: number = 0;
        let result: string = ``;

        while (i < values.length) {
            result += i == currentIndex ? `•` : `◦`;
            i++;
        }

        return result;
    }

    return options;
}
