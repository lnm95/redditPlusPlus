import { SidebarSectionElements, SidebarSectionRenderer } from '../sidebarSectionRenderer';

export class ResourcesRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar: HTMLElement, element: HTMLElement): HTMLElement | null {
        return sidebar.querySelector(`summary[aria-controls="RESOURCES"]`);
    }

    async GetSectionElements(container: HTMLElement): Promise<SidebarSectionElements> {
        return {
            container: container.parentElement!.parentElement!,
            button: container,
            bottomLine: null
        };
    }
}
