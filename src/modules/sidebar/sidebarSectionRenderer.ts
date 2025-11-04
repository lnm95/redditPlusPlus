import { checkIsRendered } from "../../utils/tools";
import { SettingBoolProperty } from "../settings/settings";
import { pp_log } from "../toaster";

export class SidebarSectionElements {
    public container: Element;
    public button: Element;
    public bottomLine: Element;
}

export abstract class SidebarSectionRenderer {

    abstract FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement;

    abstract GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements>;

    

    async Render(container: HTMLElement, autocollapse: boolean, setting: SettingBoolProperty) {
        if (checkIsRendered(container)) return;


        container.classList.add(`pp_sidebar_loadingSection`);

        const section: SidebarSectionElements = await this.GetSectionElements(container);

        container.classList.remove(`pp_sidebar_loadingSection`);


        if (setting.isEnabled()) {
            if (autocollapse) {
                const settingCollapsed = setting.getChild(`Collapsed`, false);

                const details = section.container.querySelector(`details`);

                if (settingCollapsed.isEnabled()) {
                    section.container.toggleAttribute(`open`, false);
                    details.classList.add(`pp_sidebar_collapsedSection`);
                }

                section.button.addEventListener(`click`, (e: MouseEvent) => {
                    const button = e.currentTarget as Element;
                    // hack because event may be called before aria-expanded was changed
                    setTimeout(() => {
                        const isCollapsed = button.getAttribute(`aria-expanded`) === 'false';

                        settingCollapsed.switch(isCollapsed);
                        pp_log(`${settingCollapsed.name} set to ${isCollapsed}`);
                    }, 10);

                    details.classList.toggle(`pp_sidebar_collapsedSection`, false);
                });
            }
        } else {
            section.container.remove();
            section.bottomLine?.remove();
        }
    }

    FindBottomLine(container: Element): Element {
        let bottomLine = container.nextElementSibling;

        while (bottomLine != null && !bottomLine.matches(`hr`)) {
            bottomLine = bottomLine.nextElementSibling;
        }

        return bottomLine;
    }

}