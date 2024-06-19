import { appendNew, checkIsRendered, dynamicElement } from '../../utils/tools';
import style from './subFilter.less';
import { css } from '../customCSS';
import { buildSvg } from '../../utils/svg';
import { PrefsKey, prefs } from '../settings/prefs';

import subFilterSvg from '@resources/subFilter.svg';
import subFilterClearSvg from '@resources/subFilterClear.svg';

css.addStyle(style);

let filter: Map<string, HTMLElement>;

export async function renderSubFilter(container: Element) {
    if (checkIsRendered(container, `pp-sub-filter`)) return;

    const filterContainer = appendNew(container, `div`, `pp_subFilter_container`);

    const createSubButton = (await dynamicElement(() => container.querySelector(`left-nav-create-community-button`))) as HTMLElement;

    createSubButton.style.width = `65px`;
    const createSubText = await dynamicElement(() => createSubButton.shadowRoot?.querySelector(`div[role="button"]`)?.querySelector(`.text-14`));
    createSubText.remove();
    createSubButton.replaceWith(filterContainer);
    filterContainer.append(createSubButton);

    const filterButton = appendNew(filterContainer, `div`, [`pp_subFilter`, `button`, `button-bordered`]);
    filterButton.setAttribute(`tabindex`, `0`);

    const sr = filterButton.attachShadow({ mode: 'open' });
    css.registry(sr);

    const span = appendNew(filterButton, `span`, [`flex`, `items-center`, `justify-center`, `pp_subFilter_span`]);
    sr.appendChild(span);
    const iconSpan = appendNew(span, `span`, [`flex`, `items-center`, `justify-center`]);
    const icon = buildSvg(subFilterSvg, 16, 16);
    iconSpan.append(icon);

    const inputContainer = appendNew(span, `div`, [`label-container`, `without-label`]);
    const inputSpan = appendNew(inputContainer, `span`, [`input-container`, `activated`]);
    const input = appendNew(inputSpan, `input`, `pp_subFilter_input`) as HTMLInputElement;
    input.type = `text`;
    input.placeholder = `Filter`;

    const clearContainer = appendNew(filterContainer, `div`, `pp_pp_subFilter_clearContainer`);
    const clearButton = appendNew(clearContainer, `button`, [`pp_subFilter_clear`, `button-plain`, `pp_hidden`]);
    const clearIcon = buildSvg(subFilterClearSvg, 16, 16);
    clearButton.append(clearIcon);

    filterButton.addEventListener(`focus`, () => {
        createSubButton.style.display = `none`;
    });
    filterButton.addEventListener(`focusout`, () => {
        createSubButton.style.display = `block`;
    });

    input.addEventListener(`input`, () => {
        const pattern = input.value.trim().toLowerCase();
        onChangeFilter(pattern);

        clearButton.classList.toggle(`pp_hidden`, pattern.length == 0);
    });

    clearButton.addEventListener(`click`, () => {
        input.value = ``;
        onChangeFilter(``);
        clearButton.classList.toggle(`pp_hidden`, true);
    });

    // init filter database
    if (filter != null) {
        filter.clear();
    }

    filter = new Map<string, HTMLElement>();

    const itemContainer = container.querySelector(`left-nav-communities-controller`).shadowRoot;

    itemContainer.querySelectorAll(`left-nav-community-item`).forEach(item => {
        filter.set(item.getAttribute(`prefixedname`).replace(`r/`, ``).toLowerCase(), item as HTMLElement);
    });

    // init value
    const initPattern = prefs.get(PrefsKey.SUB_FILTER);
    if (!(initPattern instanceof Object)) {
        input.value = initPattern;
        onChangeFilter(initPattern);
        clearButton.classList.toggle(`pp_hidden`, initPattern.length == 0);
    }
}

function onChangeFilter(pattern: string) {
    prefs.set(PrefsKey.SUB_FILTER, pattern);

    filter.forEach((item, sub) => {
        if (sub.includes(pattern)) {
            item.style.removeProperty(`display`);
        } else {
            item.style.display = `none`;
        }
    });
}
