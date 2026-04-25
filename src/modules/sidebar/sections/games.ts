import { dynamic } from '../../../utils/dynamic';
import { SidebarSectionElements, SidebarSectionRenderer } from '../sidebarSectionRenderer';

export class GamesRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement | null {
        return sidebar.querySelector(`faceplate-tracker[noun="games_drawer"]`);
    }

    async GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements> {
        await dynamic(() => container.querySelector(`games-section-badge-wrapper`));

        return {
            container: container,
            button: container.querySelector(`summary[aria-controls="games_section"]`) as HTMLElement,
            bottomLine: this.FindBottomLine(container) as HTMLElement
        };
    }
}
