import { buildSvg } from './svg';
import { appendNew } from './tools';

import imageCloseButtonSvg from '@resources/imageCloseButton.svg';

import style from './imageViewer.less';
import { css } from '../modules/customCSS';

css.addStyle(style);

class Mouse {
    public x: number;
    public y: number;
}

class Drag {
    public enabled: boolean;
    public start: Mouse;
    public current: Mouse;
    public scale: number;
}

class ImageViewer {
    openned: boolean;
    viewer: HTMLElement;
    container: HTMLElement;
    image: HTMLImageElement;

    mouse: Mouse;
    drag: Drag;

    constructor() {
        this.openned = false;
        this.viewer = null;
        this.container = null;
        this.image = null;

        this.mouse = { x: 0, y: 0 };
        this.drag = {
            enabled: false,
            start: { x: 0, y: 0 },
            current: { x: 0, y: 0 },
            scale: 1
        };

        this.scrollImage = this.scrollImage.bind(this);
        this.startDrag = this.startDrag.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.endDrag = this.endDrag.bind(this);
    }

    open(src: string) {
        if (this.openned) return;
        this.openned = true;

        if (this.viewer == null) {
            this.build();
        }

        this.image.src = src;

        window.addEventListener('wheel', this.scrollImage, { passive: false });
        this.image.addEventListener('mousedown', this.startDrag);
        document.addEventListener('mousemove', this.mouseMove);
        this.image.addEventListener('mouseup', this.endDrag);
        this.image.addEventListener('mouseleave', this.endDrag);

        // reset pos
        this.drag.current = { x: 0, y: 0 };
        this.drag.scale = 1;

        this.updateTransform();

        document.body.appendChild(this.viewer);
    }

    close() {
        this.viewer.remove();

        this.drag.enabled = false;

        this.container.classList.toggle(`pp_imageViewer_drag`, false);

        window.removeEventListener('wheel', this.scrollImage);
        this.image.removeEventListener('mousedown', this.startDrag);
        document.removeEventListener('mousemove', this.mouseMove);
        this.image.removeEventListener('mouseup', this.endDrag);
        this.image.removeEventListener('mouseleave', this.endDrag);

        this.openned = false;
    }

    build() {
        this.viewer = document.createElement(`div`);
        this.viewer.classList.add(`pp_imageViewer`);
        this.viewer.dataset.open = String(false);

        const closeButton = appendNew(this.viewer, `div`, `pp_imageViewer_closeButton`);

        const closeSvg = buildSvg(imageCloseButtonSvg, 40, 40);
        closeButton.appendChild(closeSvg);

        this.container = appendNew(this.viewer, `div`, `pp_imageViewer_imageContainer`);

        this.image = appendNew(this.container, `img`, `pp_imageViewer_image`) as HTMLImageElement;
        this.image.alt = `Comment image`;
        this.image.ondragstart = function () {
            return false;
        };

        // close
        this.viewer.addEventListener('click', e => {
            if (e.target != this.image) {
                this.close();
            }
        });

        closeButton.addEventListener('click', () => {
            this.close();
        });
    }

    updateTransform() {
        this.container.style.transform = `translate(${this.drag.current.x}px, ${this.drag.current.y}px) scale(${this.drag.scale}, ${this.drag.scale})`;
    }

    startDrag(event: any) {
        this.drag.start.x = event.screenX - this.drag.current.x;
        this.drag.start.y = event.screenY - this.drag.current.y;
        this.drag.enabled = true;

        this.container.classList.toggle(`pp_imageViewer_drag`, true);
    }

    mouseMove(event: any) {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;

        if (this.drag.enabled) {
            this.drag.current.x = event.screenX - this.drag.start.x;
            this.drag.current.y = event.screenY - this.drag.start.y;

            this.updateTransform();
        }
    }

    endDrag() {
        this.fit(1);

        this.drag.enabled = false;

        this.container.classList.toggle(`pp_imageViewer_drag`, false);
    }

    scrollImage(e: any) {
        const m = Math.max(1.0, 1.0 + Math.log2(this.drag.scale * this.drag.scale));

        const prevScale = this.drag.scale;

        this.drag.scale = Math.max(0.5, this.drag.scale + (-e.deltaY / 1000) * m);

        const rect = this.image.getBoundingClientRect();

        const hh = rect.height / 2;
        const hw = rect.width / 2;

        const dy = rect.y + hh;
        const dx = rect.x + hw;

        const os = this.drag.scale / prevScale - 1;
        this.drag.current.y -= Math.min(Math.max(this.mouse.y - dy, -hh), hh) * os;
        this.drag.current.x -= Math.min(Math.max(this.mouse.x - dx, -hw), hw) * os;

        if (e.deltaY > 0) {
            this.drag.current.y /= 1.1;
            this.drag.current.x /= 1.1;
        }

        this.fit(0.33);

        e.preventDefault();
    }

    fit(force: number) {
        const offset = 0;
        const rect = this.image.getBoundingClientRect();

        const left = offset - rect.left;
        const right = rect.right - window.innerWidth + offset;

        if (left > 0 && right < 0) {
            this.drag.current.x += (rect.width > window.innerWidth ? -right : left) * force;
        } else if (left < 0 && right > 0) {
            this.drag.current.x += (rect.width > window.innerWidth ? left : -right) * force;
        }

        const top = offset - rect.top;
        const bottom = rect.bottom - window.innerHeight + offset;

        if (top > 0 && bottom < 0) {
            this.drag.current.y += (rect.height > window.innerHeight ? -bottom : top) * force;
        } else if (top < 0 && bottom > 0) {
            this.drag.current.y += (rect.height > window.innerHeight ? top : -bottom) * force;
        }

        this.updateTransform();
    }
}

export const imageViewer = new ImageViewer();
