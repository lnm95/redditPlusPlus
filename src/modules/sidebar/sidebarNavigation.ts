import { dynamic } from '../../utils/dynamic';
import { pascalCase } from '../../utils/tools';
import { settings } from '../settings/settings';

export enum SidebarNavigation {
    Home = `home`,
    Popular = `popular`,
    News = `news`,
    Explore = `explore`
}

export let navigations: Map<SidebarNavigation, string> = new Map<SidebarNavigation, string>([
    [SidebarNavigation.Home, `Home`],
    [SidebarNavigation.Popular, `Popular`],
    [SidebarNavigation.News, `News`],
    [SidebarNavigation.Explore, `Explore`]
]);

export async function RenderSidebarNavigations(sidebar: Element) {
    if (sidebar == null) {
        sidebar = document.body.querySelector(`#left-sidebar-container`)!;
    }

    const section = await dynamic(() => sidebar.querySelector(`left-nav-top-section`));

    Object.values(SidebarNavigation).forEach(name => {
        const setting = settings.SIDEBAR_NAV_BUTTON.getChild(pascalCase(name), true);

        section!.toggleAttribute(name, setting.isEnabled());
    });
}
