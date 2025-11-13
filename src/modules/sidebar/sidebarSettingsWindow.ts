import { ChangesObserver } from '../../utils/changesObserver';
import { appendElement } from '../../utils/element';
import { PascalCase } from '../../utils/tools';
import { renderUIToggle } from '../../utils/UI/toggle';
import { Window } from '../../utils/window';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { navigations, SidebarNavigation } from './sidebarNavigation';
import { sections } from './sidebarSection';

import style from './sidebarSettingsWindow.less';

css.addStyle(style);

export const sidebarSettingsWindow: Window = new Window('Sidebar settings', renderSettingsWindow, closeSettingsWindow);

const changes = new ChangesObserver();

function renderSettingsWindow(win: Window, context: any) {
    changes.Reset();
    changes.RenderBanner(win.content);

    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);

    const elements = appendElement(scroll, `div`, `pp_window_elementsContainer`);

    // filter
    {
        const propertyArea = appendElement(elements, `div`, `pp_window_element`);

        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = `Communities filter`;
        propertyArea.classList.add(`pp_settings_property_oneLine`);

        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);

        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

        const changesSource = changes.CreateSource(settings.SUB_FILTER.isEnabled());

        renderUIToggle(controlArea, settings.SUB_FILTER.isEnabled(), (state: boolean) => {
            settings.SUB_FILTER.switch(state);
            changesSource.Capture(settings.SUB_FILTER.isEnabled());
        });
    }

    // sections
    const subtittleSections = appendElement(elements, `h3`, `pp_settings_subtittle`);
    subtittleSections.textContent = `Sections`;

    sections.forEach((config, section) => {
        const propertyArea = appendElement(elements, `div`, `pp_window_element`);

        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, [`text-12`, `text-secondary-weak`, `tracking-widest`]); //`pp_settings_propertyHeader_tittle`
        tittle.textContent = config.tittle.toUpperCase();
        propertyArea.classList.add(`pp_settings_property_oneLine`);

        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);

        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

        const changesSource = changes.CreateSource(config.setting.isEnabled());

        renderUIToggle(controlArea, config.setting.isEnabled(), (state: boolean) => {
            config.setting.switch(state);
            changesSource.Capture(config.setting.isEnabled());
        });
    });

    // navigations
    const subtittleNavigations = appendElement(elements, `h3`, `pp_settings_subtittle`);
    subtittleNavigations.textContent = `Navigation buttons`;

    navigations.forEach((tittleText, navigaton) => {
        const propertyArea = appendElement(elements, `div`, `pp_window_element`);

        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = tittleText;
        propertyArea.classList.add(`pp_settings_property_oneLine`);

        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);

        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);

        const navSetting = settings.SIDEBAR_NAV_BUTTON.getChild(PascalCase(navigaton), true);

        const changesSource = changes.CreateSource(navSetting.isEnabled());

        renderUIToggle(controlArea, navSetting.isEnabled(), (state: boolean) => {
            navSetting.switch(state);

            changesSource.Capture(navSetting.isEnabled());
        });
    });
}

function closeSettingsWindow() {
    if (changes.HasChanges()) {
        settings.nextRevision();

        window.location.reload();
    }
}
