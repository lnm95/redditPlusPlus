import { css } from '../../modules/customCSS';
import { appendSvg, CURRENT_COLOR, NONE_COLOR, SVGConfig } from '../svg';
import { appendElement } from '../element';
import style from './button.less';

css.addStyle(style);

export interface ButtonParams {
    icon?: any;
    iconConfig?: SVGConfig;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'plain' | 'bordered';
    fullWidth?: boolean;
    containerClasses?: string[]; // extra classes on wrapper div
    buttonClasses?: string[]; // extra classes on <button>
}

export function renderUIButton(container: Element, label: string, onClick: () => void, params?: ButtonParams): HTMLElement {
    const { icon, iconConfig, size, variant, fullWidth, containerClasses, buttonClasses } = {
        icon: null,
        iconConfig: { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR },
        size: 'medium',
        variant: 'plain',
        fullWidth: false,
        containerClasses: [] as string[],
        buttonClasses: [] as string[],
        ...params
    };

    const btnContainer = appendElement(container, `div`, [`pp_ui_button_container`, `inline-flex`, ...containerClasses]);

    const buttonEl = appendElement(btnContainer, `button`, [
        `pp_ui_button`,
        `button`,
        `px-[var(--rem10)]`,
        `items-center`,
        `justify-center`,
        variant === 'primary' ? `button-primary` : variant === 'secondary' ? `button-secondary` : variant === 'bordered' ? `button-bordered` : `button-plain`,
        size === 'small' ? `button-small` : size === 'large' ? `button-large` : `button-medium`,
        ...buttonClasses
    ]);

    if (fullWidth) {
        btnContainer.classList.add(`w-full`);
        buttonEl.classList.add(`w-full`);
    }

    const panel = appendElement(buttonEl, `span`, [`pp_ui_button_panel`, `inline-flex`, `items-center`, `justify-center`]);

    if (icon != null) {
        const iconSpan = appendElement(panel, `span`, `pp_ui_button_icon`);
        appendSvg(iconSpan, icon, 16, 16, iconConfig);
    }

    const labelSpan = appendElement(panel, `span`, `pp_ui_button_label`);
    labelSpan.textContent = label;

    buttonEl.addEventListener(`click`, () => {
        onClick();
    });

    return btnContainer;
}
