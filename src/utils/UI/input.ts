import { css } from '../../modules/customCSS';
import { appendSvg, buildSvg, CURRENT_COLOR, NONE_COLOR, SVGConfig } from '../svg';
import { appendElement } from '../element';
import inputClearSvg from '@resources/inputClear.svg';
import style from './input.less';

css.addStyle(style);

export interface InputParams {
    icon?: any;
    iconConfig?: SVGConfig;
    cleanButton?: boolean;
    alignCenter?: boolean;
    filter?: (input: string) => string;
}

export function renderUIInput(container: Element, placeholder: string, value: string, onChange: (value: string) => void, params?: InputParams): HTMLElement {
    const { icon, iconConfig, cleanButton, alignCenter, filter } = {
        icon: null,
        iconConfig: { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR },
        cleanButton: false,
        alignCenter: false,
        filter: (input: string) => input,
        ...params
    };

    const inputContainer = appendElement(container, `div`, `pp_ui_input_container`);

    const inputButton = appendElement(inputContainer, `div`, [`pp_ui_input_button`, `button`, `button-bordered`]);
    inputButton.setAttribute(`tabindex`, `0`);

    const inputShadowRoot = inputButton.attachShadow({ mode: 'open' });
    css.registry(inputShadowRoot);

    const inputPanel = appendElement(inputButton, `span`, [`pp_ui_input_panel`, `flex`, `items-center`, `justify-center`]);
    inputShadowRoot.appendChild(inputPanel);

    if (icon != null) {
        const inputIconSpan = appendElement(inputPanel, `span`, `pp_ui_input_icon`);
        appendSvg(inputIconSpan, icon, 16, 16, iconConfig);
    }

    const inputSpan = appendElement(inputPanel, `span`, `pp_ui_input_span`);

    if (cleanButton == true) {
        inputSpan.style.marginRight = `22px`;
    }

    const input = appendElement(inputSpan, `input`, `pp_ui_input`) as HTMLInputElement;
    input.type = `text`;
    input.placeholder = placeholder;

    if (alignCenter == true) {
        input.style.textAlign = `center`;
    }

    if (value != null && value.length > 0) {
        input.value = value;
    }

    let clearButton: HTMLElement = null;
    if (cleanButton == true) {
        const clearContainer = appendElement(inputContainer, `div`, `pp_ui_input_clearContainer`);
        clearButton = appendElement(clearContainer, `button`, [`pp_ui_input_clearButton`, `button-plain`]);
        clearButton.classList.toggle(`pp_hidden`, (input.value?.length ?? 0) == 0);
        const clearIcon = buildSvg(inputClearSvg, 16, 16);
        clearButton.append(clearIcon);

        clearButton.addEventListener(`click`, () => {
            input.value = filter(``);
            onChange(input.value);

            clearButton.classList.toggle(`pp_hidden`, true);
        });
    }

    input.addEventListener(`input`, () => {
        const value = filter(input.value.trim());
        onChange(value);

        if (cleanButton == true) {
            clearButton.classList.toggle(`pp_hidden`, value.length == 0);
        }
    });

    input.addEventListener(`focusout`, () => {
        const value = filter(input.value.trim());

        if (value != input.value) {
            input.value = value;
        }

        if (cleanButton == true) {
            clearButton.classList.toggle(`pp_hidden`, value.length == 0);
        }
    });

    return inputContainer;
}
