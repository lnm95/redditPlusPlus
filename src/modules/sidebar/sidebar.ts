import { dynamic } from '../../utils/dynamic';
import { appendElement, prependElement } from '../../utils/element';
import { appendSvg } from '../../utils/svg';
import { observeFor } from '../../utils/tools';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { RenderSidebarNavigations } from './sidebarNavigation';
import { SidebarSection, SidebarSectionConfig, sections } from './sidebarSection';
import { sidebarSettingsWindow } from './sidebarSettingsWindow';

import settingGearSvg from '@resources/settingsGear.svg';

import style from './sidebar.less';

css.addStyle(style);

export async function renderSidebar(sidebar: Element) {
    if (settings.REMOVE_LEFT_SIDEBAR.isEnabled()) {
        sidebar.remove();
        return;
    }

    sidebar.classList.add(`pp_defaultText`);

    RenderSidebarNavigations(sidebar);

    RenderSettingsButton(sidebar);

    // render sections
    const unrenderedSections = new Map<SidebarSection, SidebarSectionConfig>(sections);

    observeFor(`SIDEBAR`, sidebar, (element: HTMLElement) => {
        unrenderedSections.forEach((config, section, map) => {
            const sectionContainer = config.renderer.FindContainer(sidebar as HTMLElement, element);

            if (sectionContainer != null) {
                config.renderer.Render(sectionContainer, config.setting);

                map.delete(section);
            }
        });

        if (unrenderedSections.size == 0) {
            return true;
        }
    });
}

async function RenderSettingsButton(sidebar: Element) {
    const flexSidebar = await dynamic(() => sidebar.querySelector(`#flex-left-nav-container`));

    const settingsButtonContainer = prependElement(flexSidebar!, `div`);
    settingsButtonContainer.setAttribute(`id`, `pp-settings`);

    const settingsButtonTooltip = appendElement(settingsButtonContainer, `rpl-tooltip`);
    settingsButtonTooltip.setAttribute(`placement`, `right`);
    settingsButtonTooltip.setAttribute(`content`, `Reddit++ sidebar settings`);
    settingsButtonTooltip.setAttribute(`appearance`, `inverted`);
    settingsButtonTooltip.style.cssText = `--show-delay: 750ms; --hide-delay: 50ms`;

    const settingsButton = appendElement(settingsButtonTooltip, `button`);
    settingsButton.className = `bg-neutral-background shadow-xs
button-small px-[var(--rem6)]
button-bordered
icon
items-center justify-center
button inline-flex `;

    settingsButton.addEventListener(`click`, () => sidebarSettingsWindow.open());

    const settingsButtonSpan = appendElement(settingsButton, `span`, [`flex`, `items-center`, `justify-center`]);
    const settingsButtonSpanSpan = appendElement(settingsButtonSpan, `span`, `flex`);
    const settingsButtonSvg = appendSvg(settingsButtonSpanSpan, settingGearSvg, 16, 16);
}
