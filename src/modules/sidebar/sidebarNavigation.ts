import { dynamicElement, PascalCase } from '../../utils/tools';
import { settings } from '../settings/settings';

export enum SidebarNavigation {
    Home = `home`,
    Popular = `popular`,
    Guides = `guides`,
    Explore = `explore`,
    All = `all`
}

export let navigations: Map<SidebarNavigation, string> = new Map<SidebarNavigation, string>([
    [SidebarNavigation.Home, `Home`],
    [SidebarNavigation.Popular, `Popular`],
    [SidebarNavigation.Guides, `Answers`],
    [SidebarNavigation.Explore, `Explore`],
    [SidebarNavigation.All, `All`]
]);

export async function RenderSidebarNavigations(sidebar: Element) {
    if (sidebar == null) {
        sidebar = document.body.querySelector(`#left-sidebar-container`);
    }

    const section = await dynamicElement(() => sidebar.querySelector(`left-nav-top-section`));

    Object.values(SidebarNavigation).forEach(name => {
        const setting = settings.SIDEBAR_NAV_BUTTON.getChild(PascalCase(name), true);

        section.toggleAttribute(name, setting.isEnabled());
    });
}
