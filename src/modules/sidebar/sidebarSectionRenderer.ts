import { checkIsRendered } from '../../utils/tools';
import { SettingBoolProperty } from '../settings/settings';

export class SidebarSectionElements {
    public container!: HTMLElement;
    public button!: HTMLElement;
    public bottomLine!: HTMLElement | null;
}

export abstract class SidebarSectionRenderer {
    abstract FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement | null;

    abstract GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements>;

    async Render(container: HTMLElement, setting: SettingBoolProperty) {
        if (checkIsRendered(container)) return;

        container.classList.add(`pp_sidebar_loadingSection`);

        const section: SidebarSectionElements = await this.GetSectionElements(container);

        container.classList.remove(`pp_sidebar_loadingSection`);

        if (setting.isDisabled()) {
            section.container.remove();
            section.bottomLine?.remove();
        }
    }

    FindBottomLine(container: Element): Element | null {
        let bottomLine = container.nextElementSibling;

        while (bottomLine != null && !bottomLine.matches(`hr`)) {
            bottomLine = bottomLine.nextElementSibling;
        }

        return bottomLine;
    }
}
