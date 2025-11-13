import { css } from '../modules/customCSS';
import { appendElement } from './element';

import style from './changesObserver.less';

css.addStyle(style);

export class ChangesObserver {
    private changes = 0;
    private bannerContainer: Element = null;

    CreateSource(defaultValue: any): ChangesSource {
        return new PlainChangesSource(this, defaultValue);
    }

    Reset() {
        this.changes = 0;
    }

    HasChanges() {
        return this.changes != 0;
    }

    OnChange(value: number) {
        this.changes += value;

        if (this.bannerContainer != null) {
            this.bannerContainer.classList.toggle(`pp_changesBanner_active`, this.HasChanges());
        }
    }

    RenderBanner(container: Element) {
        if (this.bannerContainer == null) {
            this.bannerContainer = appendElement(container, `div`, `pp_changesBannerContainer`);
            const banner = appendElement(this.bannerContainer, `div`, `pp_changesBanner`);
            banner.textContent = `Page will be reloaded to apply new settings`;
        } else {
            container.append(this.bannerContainer);
            this.bannerContainer.classList.toggle(`pp_changesBanner_active`, false);
        }
    }
}

export abstract class ChangesSource {
    observer: ChangesObserver;

    constructor(observer: ChangesObserver) {
        this.observer = observer;
    }

    abstract Capture(value: any): void;
}

export class PlainChangesSource extends ChangesSource {
    defaultValue: any;
    isChanged: boolean = false;

    constructor(observer: ChangesObserver, defaultValue: any) {
        super(observer);
        this.defaultValue = defaultValue;
    }

    Capture(value: any): void {
        if (this.defaultValue != value && !this.isChanged) {
            this.isChanged = true;
            this.observer.OnChange(1);
        }

        if (this.defaultValue == value && this.isChanged) {
            this.isChanged = false;
            this.observer.OnChange(-1);
        }
    }
}
