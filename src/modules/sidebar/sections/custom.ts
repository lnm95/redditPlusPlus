import { dynamicElement } from '../../../utils/tools';
import { SidebarSectionElements, SidebarSectionRenderer } from '../sidebarSectionRenderer';

export class CustomRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement {
        let container: HTMLElement = null;

        sidebar.querySelectorAll(`faceplate-expandable-section-helper`).forEach(helper => {
            const summary = helper.querySelector(`summary[aria-controls="multireddits_section"]`);

            if (summary != null) {
                container = helper as HTMLElement;
            }
        });

        return container;
    }

    async GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements> {
        await dynamicElement(() => container.getAttribute(`open`));

        return {
            container: container,
            button: container.querySelector(`summary[aria-controls="multireddits_section"]`),
            bottomLine: this.FindBottomLine(container)
        };
    }
}
