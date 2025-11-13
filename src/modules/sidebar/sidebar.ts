import { appendElement, prependElement } from '../../utils/element';
import { appendSvg } from '../../utils/svg';
import { dynamicElement, observeFor } from '../../utils/tools';
import { css } from '../customCSS';
import settingGearSvg from '@resources/settingsGear.svg';
import style from './sidebar.less';
import { sidebarSettingsWindow } from './sidebarSettingsWindow';
import { sections, SidebarSection, SidebarSectionConfig } from './sidebarSection';
import { RenderSidebarNavigations } from './sidebarNavigation';

css.addStyle(style);

export async function renderSidebar(sidebar: Element) {
    sidebar.classList.add(`pp_defaultText`);

    RenderSidebarNavigations(sidebar);

    RenderSettingsButton(sidebar);

    // render sections
    const renderedSections = new Map<SidebarSection, SidebarSectionConfig>(sections);

    observeFor(`SIDEBAR`, sidebar, (element: HTMLElement) => {
        renderedSections.forEach((config, section, map) => {
            const sectionContainer = config.renderer.FindContainer(sidebar as HTMLElement, element);

            if (sectionContainer != null) {
                config.renderer.Render(sectionContainer, config.autocollapse, config.setting);

                map.delete(section);
            }
        });

        if (renderedSections.size == 0) {
            return true;
        }
    });
}

async function RenderSettingsButton(sidebar: Element) {
    const flexSidebar = await dynamicElement(() => sidebar.querySelector(`#flex-left-nav-container`));

    const settingsButtonContainer = prependElement(flexSidebar, `div`);
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
