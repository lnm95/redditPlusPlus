import { css } from '../modules/customCSS';
import { CURRENT_COLOR, NONE_COLOR, buildSvg } from './svg';
import { appendNew } from './tools';
import style from './window.less';
import checkboxStyle from './checkbox.less';

import closeWindowButtonSvg from '@resources/windowCloseButton.svg';

css.addStyle(style);
css.addStyle(checkboxStyle);

export interface WindowRenderer {
    (window: Window, context: any): void;
}

export class Window {
    tittle: string;
    render: WindowRenderer;
    onClose: Function;
    container: Element;
    content: Element;
    closeButton: Element;

    constructor(tittle: string, render: WindowRenderer, onClose: Function = null) {
        this.tittle = tittle;
        this.render = render;
        this.onClose = onClose;
        this.container = null;
        this.content = null;
        this.closeButton = null;
    }

    build() {
        this.container = document.createElement(`div`);
        this.container.classList.add(`pp_window_container`);
        this.container.addEventListener('click', e => {
            if (e.target == this.container) {
                this.close();
            }
        });

        const win = appendNew(this.container, `div`, `pp_window`);

        const tittleContainer = appendNew(win, `div`, `pp_window_tittleContainer`);

        let tittle = appendNew(tittleContainer, `div`, [`pp_window_tittle`, `flex`, `flex-row`]);
        tittle = appendNew(tittle, `span`, [`text-24`, `font-semibold`]);
        tittle.textContent = this.tittle;

        this.closeButton = appendNew(tittleContainer, `div`, [`pp_window_closeButton`, `flex`, `items-center`]);
        this.closeButton = appendNew(this.closeButton, `button`, [`button`, `icon`, `inline-flex`, `items-center`, `justify-center`, `button-small`, `button-secondary`, `px-[var(--rem6)]`]);
        this.closeButton.setAttribute(`tittle`, `Close ${this.tittle}`);
        this.closeButton.addEventListener('click', e => {
            this.close();
        });

        this.closeButton = appendNew(this.closeButton, `span`, [`flex`, `items-center`, `justify-center`]);
        this.closeButton = appendNew(this.closeButton, `span`, [`flex`]);

        const svg = buildSvg(closeWindowButtonSvg, 16, 16, { strokeColor: NONE_COLOR });
        this.closeButton.append(svg);

        appendNew(win, `hr`, `border-b-neutral-border-weak`);

        this.content = appendNew(win, `div`, `pp_window_content`);

        appendNew(win, `div`, `pp_window_footer`).textContent = ` `;
    }

    open(context: any = null) {
        if (this.container == null) {
            this.build();
        }

        while (this.content.firstChild) {
            this.content.removeChild(this.content.lastChild);
        }

        this.render(this, context);

        document.body.appendChild(this.container);
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.container.remove();

        document.body.style.overflow = 'visible';

        if (this.onClose != null) {
            this.onClose();
        }
    }
}
