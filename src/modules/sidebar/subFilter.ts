import { renderUIInput } from '../../utils/UI/input';
import { dynamic } from '../../utils/dynamic';
import { CURRENT_COLOR, NONE_COLOR, appendSvg } from '../../utils/svg';
import { checkIsRendered } from '../../utils/tools';
import { PrefsKey, prefs } from '../settings/prefs';
import { settings } from '../settings/settings';

import subsManagerSvg from '@resources/sidebarSubsManager.svg';
import subFilterSvg from '@resources/subFilter.svg';

const filter = new Map<string, HTMLElement>();

export async function renderSubFilter(container: Element) {
    if (checkIsRendered(container, `pp-sub-filter`)) return;

    if (settings.SUB_FILTER.isDisabled()) return;

    const manageSubsLink = await dynamic(() => container.querySelector(`.left-nav-manage-communities-link`) as HTMLElement);

    const subsContainer = await dynamic(() => container.querySelector(`left-nav-communities-controller`)?.shadowRoot?.querySelector(`.items-container`));

    if (!manageSubsLink || !subsContainer) return;

    filter.clear();

    subsContainer.querySelectorAll(`left-nav-community-item`).forEach(sub => {
        const name = sub.getAttribute(`prefixedname`)?.replace(`r/`, ``)?.toLowerCase() ?? null;

        if (name != null) {
            filter.set(name, sub as HTMLElement);
        }
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
    const createSubText = await dynamic(() => manageSubsLink.querySelector(`.text-body-2`));
    createSubText?.remove();
    manageSubsLink.replaceWith(input);
    input.prepend(manageSubsLink);

    const manageSubsLinkIco = manageSubsLink.querySelector(`svg`)!;
    const manageSubsLinkIcoContainer = manageSubsLink.querySelector(`svg`)!.parentElement!;
    manageSubsLinkIco.remove();

    appendSvg(manageSubsLinkIcoContainer, subsManagerSvg, 20, 20);

    const inputButton = input.querySelector(`.pp_ui_input_button`)!;
    inputButton.addEventListener(`focus`, () => {
        manageSubsLink.style.display = `none`;
    });
    inputButton.addEventListener(`focusout`, () => {
        manageSubsLink.style.display = `block`;
    });

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
