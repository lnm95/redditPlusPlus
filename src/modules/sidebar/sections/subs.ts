import { dynamic } from '../../../utils/dynamic';
import { SidebarSectionElements, SidebarSectionRenderer } from '../sidebarSectionRenderer';
import { renderSubFilter } from '../subFilter';

export class SubsRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement | null {
        let container: HTMLElement | null = null;

        sidebar.querySelectorAll(`faceplate-expandable-section-helper`).forEach(helper => {
            const summary = helper.querySelector(`summary[aria-controls="communities_section"]`);

            if (summary != null) {
                container = helper as HTMLElement;
            }
        });

        return container;
    }

    async GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements> {
        renderSubFilter(container);

        return {
            container: container,
            button: container.querySelector(`summary[aria-controls="communities_section"]`) as HTMLElement,
            bottomLine: this.FindBottomLine(container) as HTMLElement
        };
    }
}
