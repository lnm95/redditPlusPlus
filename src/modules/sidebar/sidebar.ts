import { observeFor } from '../../utils/tools';
import { checkIsRendered, dynamicElement } from '../../utils/tools';
import { css } from '../customCSS';
import { SettingBoolProperty, settings } from '../settings/settings';
import { pp_log } from '../toaster';
import style from './sidebar.less';
import { renderSubFilter } from './subFilter';

css.addStyle(style);

let resourcesInitialized = false;

export function renderSidebar(sidebar: Element) {
    sidebar.classList.add(`pp_defaultText`);


    observeFor(sidebar, (element: HTMLElement) => {
        const customFeedsSection = element.matches(`faceplate-expandable-section-helper`) ? element : sidebar.querySelector(`faceplate-expandable-section-helper`);

        if (customFeedsSection == null) return;

        const customFeedsButton = sidebar.querySelector(`summary[aria-controls="multireddits_section"]`);

        if (customFeedsButton != null) {
            renderSidebarSection(customFeedsSection, settings.SIDEBAR_CUSTOMS, async () => {
                const openState = await dynamicElement(() => customFeedsSection.getAttribute(`open`));
                if (openState) {
                }

                return {
                    container: customFeedsSection,
                    button: customFeedsButton,
                    hr: customFeedsSection.nextElementSibling
                } as SidebarSection;
            });
            return true;
        }
    });

    observeFor(sidebar, (element: HTMLElement) => {
        const subsSection = element.matches(`faceplate-expandable-section-helper`) ? element : sidebar.querySelector(`faceplate-expandable-section-helper`);

        if (subsSection == null) return;

        const customFeedsButton = sidebar.querySelector(`summary[aria-controls="communities_section"]`);

        if (customFeedsButton != null) {
            renderSubFilter(subsSection);

            renderSidebarSection(subsSection, settings.SIDEBAR_SUBS, async () => {
                const openState = await dynamicElement(() => subsSection.getAttribute(`open`));
                if (openState) {
                }

                let hrElement = subsSection.nextElementSibling;

                while(hrElement != null && !hrElement.matches(`hr`)){
                    hrElement = hrElement.nextElementSibling;
                }

                return {
                    container: subsSection,
                    button: customFeedsButton,
                    hr: hrElement
                } as SidebarSection;
            });
            return true;
        }
    });

    observeFor(sidebar, (element: HTMLElement) => {
        let recentSection = sidebar.querySelector(`reddit-recent-pages`);

        if (recentSection == null && element.matches(`reddit-recent-pages`)) {
            recentSection = element;
        }

        if (recentSection != null) {
            renderSidebarSection(recentSection, settings.SIDEBAR_RECENT, async () => {
                const helper = await dynamicElement(() => {
                    const _helper = recentSection.shadowRoot?.querySelector(`faceplate-expandable-section-helper`);
                    return _helper?.getAttribute(`open`) != null ? _helper : null;
                });

                const button = await dynamicElement(() => helper?.querySelector(`summary`));

                css.registry(recentSection.shadowRoot);
                helper.classList.add(`pp_defaultText`);

                return {
                    container: helper,
                    button: button,
                    hr: recentSection.nextElementSibling //recentSection.querySelector(`hr`)
                } as SidebarSection;
            });
            return true;
        }
    });

    if(!resourcesInitialized){
        resourcesInitialized = true;
        observeFor(sidebar, (element: HTMLElement) => {
            const resources = sidebar.querySelector(`summary[aria-controls="RESOURCES"]`);
    
            if (resources != null) {
                const resourcesContainer = resources.parentElement.parentElement;
                const resourceSection: SidebarSection = {
                    container: resourcesContainer,
                    button: resources,
                    hr: null
                };
    
                renderSidebarSection(resourcesContainer, settings.SIDEBAR_RESOURCES, () => resourceSection);
                return true;
            }
        });
    }    
}

class SidebarSection {
    public container: Element;
    public button: Element;
    public hr: Element;
}

async function renderSidebarSection(preloadContainer: Element, setting: SettingBoolProperty, sectionLoader: Function) {
    if (checkIsRendered(preloadContainer)) return;

    preloadContainer.classList.add(`pp_sidebar_loadingSection`);

    const section: SidebarSection = await sectionLoader();

    preloadContainer.classList.remove(`pp_sidebar_loadingSection`);

    if (setting.isEnabled()) {
        const settingCollapsed = setting.getChild(`Collapsed`, false);

        const details = section.container.querySelector(`details`);

        if (settingCollapsed.isEnabled()) {
            section.container.toggleAttribute(`open`, false);
            details.classList.add(`pp_sidebar_collapsedSection`);
        }

        section.button.addEventListener(`click`, (e: MouseEvent) => {
            const button = e.currentTarget as Element;
            // hack because event may be called before aria-expanded was changed
            setTimeout(() => {
                const isCollapsed = button.getAttribute(`aria-expanded`) === 'false';

                settingCollapsed.switch(isCollapsed);
            }, 10);

            details.classList.toggle(`pp_sidebar_collapsedSection`, false);
        });
    } else {
        section.container.remove();
        section.hr?.remove();
    }
}
