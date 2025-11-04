import { dynamicElement } from "../../../utils/tools";
import { SidebarSectionElements, SidebarSectionRenderer } from "../sidebarSectionRenderer";

export class GamesRenderer extends SidebarSectionRenderer {

    FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement {

        return sidebar.querySelector(`faceplate-tracker[noun="games_drawer"]`);
    }

    async GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements> {
        await dynamicElement(() => container.querySelector(`games-section-badge-wrapper`));

        return {
            container: container,
            button: container.querySelector(`summary[aria-controls="games_section"]`),
            bottomLine: this.FindBottomLine(container)
        };
    }

}