import { SettingBoolProperty, settings } from '../settings/settings';
import { CustomRenderer } from './sections/custom';
import { GamesRenderer } from './sections/games';
import { RecentRenderer } from './sections/recent';
import { ResourcesRenderer } from './sections/resources';
import { SubsRenderer } from './sections/subs';
import { SidebarSectionRenderer } from './sidebarSectionRenderer';

export enum SidebarSection {
    Games = `Games`,
    Custom = `Custom`,
    Recent = `Recent`,
    Subs = `Subs`,
    Resources = `Resources`
}

export interface SidebarSectionConfig {
    tittle: string;
    autocollapse: boolean;
    setting: SettingBoolProperty;
    renderer: SidebarSectionRenderer;
}

export const sections = new Map<SidebarSection, SidebarSectionConfig>([
    [SidebarSection.Games, { tittle: `Games on reddit`, autocollapse: false, setting: settings.SIDEBAR_GAMES, renderer: new GamesRenderer() }],
    [SidebarSection.Custom, { tittle: `Custom feeds`, autocollapse: true, setting: settings.SIDEBAR_CUSTOMS, renderer: new CustomRenderer() }],
    [SidebarSection.Recent, { tittle: `Recent`, autocollapse: true, setting: settings.SIDEBAR_RECENT, renderer: new RecentRenderer() }],
    [SidebarSection.Subs, { tittle: `Communities`, autocollapse: true, setting: settings.SIDEBAR_SUBS, renderer: new SubsRenderer() }],
    [SidebarSection.Resources, { tittle: `Resources`, autocollapse: true, setting: settings.SIDEBAR_RESOURCES, renderer: new ResourcesRenderer() }]
]);
