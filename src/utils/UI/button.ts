import { css } from '../../modules/customCSS';
import { appendSvg, CURRENT_COLOR, NONE_COLOR, SVGConfig } from '../svg';
import { appendElement } from '../element';
import style from './button.less';

css.addStyle(style);

export enum ButtonSize {
    Small,
    Medium,
    Large
}

export enum ButtonVariant {
    Primary,
    Secondary,
    Plain,
    Bordered
}

export interface ButtonParams {
    icon?: any;
    iconConfig?: SVGConfig;
    size?: ButtonSize;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    borderRadius?: number;
    containerClasses?: string[]; // extra classes on wrapper div
    buttonClasses?: string[]; // extra classes on <button>
}

const SIZE_CLASSES = new Map<ButtonSize, string>([
    [ButtonSize.Small, `button-small`],
    [ButtonSize.Medium, `button-medium`],
    [ButtonSize.Large, `button-large`]
]);

const VARINAT_CLASSES = new Map<ButtonVariant, string>([
    [ButtonVariant.Primary, `button-primary`],
    [ButtonVariant.Secondary, `button-secondary`],
    [ButtonVariant.Plain, `button-plain`],
    [ButtonVariant.Bordered, `button-bordered`]
]);

export function renderUIButton(container: Element, label: string, onClick: () => void, params?: ButtonParams): HTMLElement {
    const { icon, iconConfig, size, variant, fullWidth, borderRadius, containerClasses, buttonClasses } = {
        icon: null,
        iconConfig: { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR },
        size: ButtonSize.Medium,
        variant: ButtonVariant.Plain,
        fullWidth: false,
        borderRadius: -1,
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
        VARINAT_CLASSES.get(variant),
        SIZE_CLASSES.get(size),
        ...buttonClasses
    ]);

    if (fullWidth) {
        btnContainer.classList.add(`w-full`);
        buttonEl.classList.add(`w-full`);
    }

    if (borderRadius >= 0) {
        buttonEl.style.borderRadius = `${borderRadius}px`;
    }

    const panel = appendElement(buttonEl, `span`, [`pp_ui_button_panel`, `inline-flex`, `items-center`, `justify-center`]);

    if (icon != null) {
        const iconSpan = appendElement(panel, `span`, `pp_ui_button_icon`);
        appendSvg(iconSpan, icon, 16, 16, iconConfig);
    }

    if (label != null) {
        const labelSpan = appendElement(panel, `span`, `pp_ui_button_label`);
        labelSpan.textContent = label;
    }

    buttonEl.addEventListener(`click`, () => {
        onClick();
    });

    return btnContainer;
}
