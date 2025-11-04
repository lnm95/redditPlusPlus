import { checkIsRendered, dynamicElement } from '../../utils/tools';
import { appendElement } from '../../utils/element';
import { PrefsKey, prefs } from '../settings/prefs';

import subFilterSvg from '@resources/subFilter.svg';
import subsManagerSvg from '@resources/sidebarSubsManager.svg';
import { notify } from '../toaster';
import { InputParams, renderUIInput } from '../../utils/UI/input';
import { appendSvg, CURRENT_COLOR, NONE_COLOR } from '../../utils/svg';
import { settings } from '../settings/settings';


let filter: Map<string, HTMLElement> = null;

export async function renderSubFilter(container: Element) {
    if (checkIsRendered(container, `pp-sub-filter`)) return;

    if(settings.SUB_FILTER.isDisabled()) return;

    const manageSubsLink = (await dynamicElement(() => container.querySelector(`.left-nav-manage-communities-link`))) as HTMLElement;

    // filter database
    if (filter != null) {
        filter.clear();
    } else {
        filter = new Map<string, HTMLElement>();
    }

    const subsContainer = await dynamicElement(() => container.querySelector(`left-nav-communities-controller`)?.shadowRoot?.querySelector(`.items-container`));

    subsContainer.querySelectorAll(`left-nav-community-item`).forEach(sub => {
        filter.set(sub.getAttribute(`prefixedname`).replace(`r/`, ``).toLowerCase(), sub as HTMLElement);
    });

    // filter value
    let initValue = prefs.get(PrefsKey.SUB_FILTER);
    if (initValue == null || initValue instanceof Object) {
        initValue = ``;
    }

    const input = renderUIInput(
        container,
        `Filter`,
        initValue,
        value => {
            onChangeFilter(value);
        },
        {
            icon: subFilterSvg,
            iconConfig: { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR },
            cleanButton: true,
            filter: (input: string) => input.trim()
        }
    );

    // minify the create sub button

    manageSubsLink.style.width = `65px`;
    manageSubsLink.style.paddingRight = `10px`;
    const createSubText = await dynamicElement(() => manageSubsLink.querySelector(`.text-14`));
    createSubText.remove();
    manageSubsLink.replaceWith(input);
    input.prepend(manageSubsLink);

    const manageSubsLinkIco = manageSubsLink.querySelector(`svg`);
    const manageSubsLinkIcoContainer = manageSubsLink.querySelector(`svg`).parentElement;
    manageSubsLinkIco.remove();

    appendSvg(manageSubsLinkIcoContainer, subsManagerSvg, 20, 20);

    const inputButton = input.querySelector(`.pp_ui_input_button`);
    inputButton.addEventListener(`focus`, () => {
        manageSubsLink.style.display = `none`;
    });
    inputButton.addEventListener(`focusout`, () => {
        manageSubsLink.style.display = `block`;
    });

    // init

    onChangeFilter(initValue);
}

function onChangeFilter(value: string) {
    prefs.set(PrefsKey.SUB_FILTER, value);

    filter.forEach((item, sub) => {
        if (sub.includes(value.toLowerCase())) {
            item.style.removeProperty(`display`);
        } else {
            item.style.display = `none`;
        }
    });
}
