import { dynamic } from '../../../utils/dynamic';
import { SidebarSectionElements, SidebarSectionRenderer } from '../sidebarSectionRenderer';

export class RecentRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement | null {
        let container: HTMLElement | null = sidebar.querySelector(`#recent-communities-section`);

        if (container == null && element.id == `recent-communities-section`) {
            container = element;
        }

        return container;
    }

    async GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements> {
        const helper = await dynamic(() => container.querySelector(`faceplate-expandable-section-helper`) as HTMLElement);
        const button = await dynamic(() => helper?.querySelector(`summary`) as HTMLElement);

        helper!.classList.add(`pp_defaultText`);

        return {
            container: helper!,
            button: button!,
            bottomLine: container
        };
    }
}
