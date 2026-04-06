import { dynamicElement } from '../../../utils/tools';
import { css } from '../../customCSS';
import { pp_log } from '../../toaster';
import { SidebarSectionElements, SidebarSectionRenderer } from '../sidebarSectionRenderer';

export class RecentRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement {
        let container: HTMLElement = sidebar.querySelector(`#recent-communities-section`);

        if (container == null && element.id == `recent-communities-section`) {
            container = element;
        }

        return container;
    }

    async GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements> {
        
        const helper = await dynamicElement(() => {
            const _helper = container.querySelector(`faceplate-expandable-section-helper`);
            return _helper?.getAttribute(`open`) != null ? _helper : null;
        });

        const button = await dynamicElement(() => helper?.querySelector(`summary`));

        helper.classList.add(`pp_defaultText`);

        return {
            container: helper,
            button: button,
            bottomLine: container
        };
    }
}
