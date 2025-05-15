import { css } from '../modules/customCSS';
import { CURRENT_COLOR, NONE_COLOR, buildSvg } from './svg';
import { appendElement } from './element';
import style from './window.less';

import closeWindowButtonSvg from '@resources/windowCloseButton.svg';

css.addStyle(style);

let currentWindows: Array<Window> = [];

export interface WindowRenderer {
    (window: Window, context: any): void;
}

export function closeAllWindows() {
    while (currentWindows.length > 0) {
        currentWindows[currentWindows.length - 1].close();
    }
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

        let isContainerDown: boolean = false;
        this.container.addEventListener('mousedown', e => {
            isContainerDown = e.target == this.container;
        });

        this.container.addEventListener('click', e => {
            if (isContainerDown && e.target == this.container) {
                this.close();
            }
        });

        const win = appendElement(this.container, `div`, `pp_window`);

        const tittleContainer = appendElement(win, `div`, `pp_window_tittleContainer`);

        let tittle = appendElement(tittleContainer, `div`, [`pp_window_tittle`, `flex`, `flex-row`]);
        tittle = appendElement(tittle, `span`, [`text-24`, `font-semibold`]);
        tittle.textContent = this.tittle;

        this.closeButton = appendElement(tittleContainer, `div`, [`pp_window_closeButton`, `flex`, `items-center`]);
        this.closeButton = appendElement(this.closeButton, `button`, [`button`, `icon`, `inline-flex`, `items-center`, `justify-center`, `button-small`, `button-secondary`, `px-[var(--rem6)]`]);
        this.closeButton.setAttribute(`tittle`, `Close ${this.tittle}`);
        this.closeButton.addEventListener('click', e => {
            this.close();
        });

        this.closeButton = appendElement(this.closeButton, `span`, [`flex`, `items-center`, `justify-center`]);
        this.closeButton = appendElement(this.closeButton, `span`, [`flex`]);

        const svg = buildSvg(closeWindowButtonSvg, 16, 16, { strokeColor: NONE_COLOR });
        this.closeButton.append(svg);

        appendElement(win, `hr`, `border-b-neutral-border-weak`);

        this.content = appendElement(win, `div`, `pp_window_content`);

        appendElement(win, `div`, `pp_window_footer`).textContent = ` `;
    }

    open(context: any = null) {
        if (this.container == null) {
            this.build();
        }

        for (const w of currentWindows) {
            w.container.remove();
        }

        currentWindows.push(this);

        document.body.appendChild(this.container);
        document.body.style.overflow = 'hidden';

        this.render(this, context);
    }

    close() {
        this.container.remove();

        currentWindows.splice(
            currentWindows.findIndex(w => w == this),
            1
        );

        if (currentWindows.length <= 0) {
            document.body.style.overflow = 'visible';
        }

        // cleanup content
        while (this.content.firstChild) {
            this.content.removeChild(this.content.lastChild);
        }

        // show previous window
        if (currentWindows.length > 0) {
            const previous = currentWindows[currentWindows.length - 1];

            document.body.appendChild(previous.container);
        }

        if (this.onClose != null) {
            this.onClose();
        }
    }
}
