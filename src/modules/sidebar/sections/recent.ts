import { dynamicElement } from '../../../utils/tools';
import { css } from '../../customCSS';
import { SidebarSectionElements, SidebarSectionRenderer } from '../sidebarSectionRenderer';

export class RecentRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement {
        let container: HTMLElement = sidebar.querySelector(`reddit-recent-pages`);

        if (container == null && element.matches(`reddit-recent-pages`)) {
            container = element;
        }

        return container;
    }

    async GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements> {
        const helper = await dynamicElement(() => {
            const _helper = container.shadowRoot?.querySelector(`faceplate-expandable-section-helper`);
            return _helper?.getAttribute(`open`) != null ? _helper : null;
        });

        const button = await dynamicElement(() => helper?.querySelector(`summary`));

        css.registry(container.shadowRoot);
        helper.classList.add(`pp_defaultText`);

        return {
            container: helper,
            button: button,
            bottomLine: container.querySelector(`hr`)
        };
    }
}
