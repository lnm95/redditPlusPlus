import { appendElement } from '../../utils/element';
import { Window } from '../../utils/window';
import { css } from '../customCSS';
import { prefs, PrefsKey } from '../settings/prefs';
import { FilterAction, filterActions, FilterData } from './filters';
import dragAnchor from '@resources/dragAnchor.svg';
import deleteButtonSVG from '@resources/deleteButton.svg';
import conetnFilterSVG from '@resources/contentFilter.svg';

import style from './filtersWindow.less';
import { buildSvg, CURRENT_COLOR, NONE_COLOR } from '../../utils/svg';
import { renderUIOptions } from '../../utils/UI/options';
import { renderUIToggle } from '../../utils/UI/toggle';
import { InputParams, renderUIInput } from '../../utils/UI/input';

export const filtersWindow: Window = new Window('Content filters', renderFiltersWindow, onClose);

css.addStyle(style);

function renderFiltersWindow(win: Window, context: any) {
    (win.container as HTMLElement).style.zIndex = `11`;

    cleanupBlankFilters();

    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);

    const elements = appendElement(scroll, `ul`, `pp_filter_list`);

    let filters = prefs.get(PrefsKey.CONTENT_FILTERS) as Array<FilterData>;
    if (!Array.isArray(filters)) {
        filters = [] as Array<FilterData>;
    }

    for (const filter of filters) {
        addFilter(filter);
    }

    addAddButton();

    // drag filters
    let draggedFilter: HTMLElement = null;

    elements.addEventListener(`dragstart`, e => {
        const target = e.target as HTMLElement;
        if (target.matches(`li`)) {
            draggedFilter = target;
            draggedFilter.classList.toggle(`pp_filter_dragged`, true);

            e.dataTransfer.effectAllowed = `move`;
        }
    });

    elements.addEventListener(`dragenter`, e => {
        const targetFilter = getFilterRoot(e.target as HTMLElement);

        if (targetFilter != null && targetFilter != draggedFilter) {
            e.preventDefault();
        }
    });

    elements.addEventListener(`dragend`, e => {
        draggedFilter.classList.toggle(`pp_filter_dragged`, false);
        draggedFilter = null;
    });

    elements.addEventListener(`dragover`, e => {
        const targetFilter = getFilterRoot(e.target as HTMLElement);

        if (targetFilter != null && targetFilter != draggedFilter) {
            e.preventDefault();
        }
    });

    elements.addEventListener(`drop`, e => {
        e.preventDefault();

        const targetFilter = getFilterRoot(e.target as HTMLElement);

        if (targetFilter == null) return;

        const fromIndex = parseInt(draggedFilter.getAttribute(`index`));
        const toIndex = parseInt(targetFilter.getAttribute(`index`));

        // move data
        const movedFilter = filters[fromIndex];
        filters.splice(fromIndex, 1);
        filters.splice(toIndex, 0, movedFilter);
        save();

        // move nodes
        if (fromIndex > toIndex) {
            targetFilter.before(draggedFilter);
        } else {
            targetFilter.after(draggedFilter);
        }

        // refresh indexes
        let currentFilter = elements.firstElementChild;
        let currentIndex: number = 0;

        while (currentFilter.hasAttribute(`filter`)) {
            currentFilter.setAttribute(`index`, currentIndex.toString());
            currentIndex++;

            currentFilter = currentFilter.nextElementSibling;
        }
    });

    function getFilterRoot(element: HTMLElement): HTMLElement {
        let current = element;
        while (!current.hasAttribute(`filter`) && current.parentElement != null) {
            current = current.parentElement;
        }

        return current.hasAttribute(`filter`) ? current : null;
    }

    function addFilter(filter: FilterData, addButton: Element = null) {
        const filterArea = appendElement(elements, `li`, `pp_filter_element`);
        filterArea.style.borderColor = borderColor(filter.color);

        filterArea.toggleAttribute(`filter`, true);
        filterArea.setAttribute(`index`, filters.findIndex(f => f == filter).toString());

        if (addButton != null) {
            addButton.before(filterArea);
        }

        const filterPanel = appendElement(filterArea, `div`);

        // drag
        const dragButton = appendElement(filterPanel, `div`, `pp_filter_element_dragAnchor`);
        const dragButtonSvg = buildSvg(dragAnchor, 16, 16, { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR });
        dragButton.append(dragButtonSvg);

        dragButton.addEventListener(`mousedown`, () => {
            filterArea.setAttribute(`draggable`, `true`);
        });

        dragButton.addEventListener(`mouseenter`, () => {
            filterArea.setAttribute(`draggable`, `true`);
        });

        dragButton.addEventListener(`mouseleave`, () => {
            filterArea.setAttribute(`draggable`, `false`);
        });

        // input

        const inputContainer = renderUIInput(
            filterPanel,
            `Regular expression`,
            filter.expression,
            value => {
                filter.expression = value;
                save();
            },
            { icon: conetnFilterSVG } as InputParams
        );

        // color picker
        const colorPickerContainer = appendElement(filterPanel, `div`, `pp_filter_element_colorPicker`);
        const colorPicker = appendElement(colorPickerContainer, `input`);
        colorPicker.setAttribute(`type`, `color`);
        colorPicker.setAttribute(`value`, filter.color);

        colorPicker.addEventListener(`input`, onColorChange);
        colorPicker.addEventListener(`change`, onColorChange);

        function onColorChange(event: any) {
            filter.color = event.target.value;
            filterArea.style.borderColor = borderColor(filter.color);

            save();
        }

        function borderColor(input: string): string {
            return filter.posts || filter.comments ? input : `${input}4f`;
        }

        // posts / comments

        const togglesContainer = appendElement(filterPanel, `div`, `pp_filter_element_toggles`);

        const postsContainer = appendElement(togglesContainer, `div`);
        const postsTittle = appendElement(postsContainer, `span`, [`text-secondary`, `font-normal`]);
        postsTittle.textContent = `Posts:`;
        renderUIToggle(postsContainer, filter.posts, state => {
            filter.posts = state;
            filterArea.style.borderColor = borderColor(filter.color);
            save();
        });

        const commentsContainer = appendElement(togglesContainer, `div`);
        const commentsTittle = appendElement(commentsContainer, `span`, [`text-secondary`, `font-normal`]);
        commentsTittle.textContent = `Comments:`;
        renderUIToggle(commentsContainer, filter.comments, state => {
            filter.comments = state;
            filterArea.style.borderColor = borderColor(filter.color);
            save();
        });

        // action

        const actionOptions = renderUIOptions(filterPanel, filter.action as number, filterActions, index => {
            filter.action = index;

            let color: string = null;
            switch (filter.action) {
                case FilterAction.Hide:
                    color = `#6A51D9`;
                    break;
                case FilterAction.Blur:
                    color = `#5BB3D9`;
                    break;
                case FilterAction.Hightlight:
                    color = `#74CB39`;
                    break;
            }

            if (color != null && (filter.color == `#6A51D9` || filter.color == `#5BB3D9` || filter.color == `#74CB39`)) {
                filter.color = color;
                filterArea.style.borderColor = borderColor(color);
                colorPicker.setAttribute(`value`, color);
            }

            save();
        });

        const inputButton = inputContainer.querySelector(`.pp_ui_input_button`);

        inputButton.addEventListener(`focus`, () => {
            colorPickerContainer.classList.toggle(`pp_hidden`, true);
            togglesContainer.classList.toggle(`pp_hidden`, true);
            actionOptions.classList.toggle(`pp_hidden`, true);
        });
        inputButton.addEventListener(`focusout`, () => {
            colorPickerContainer.classList.toggle(`pp_hidden`, false);
            togglesContainer.classList.toggle(`pp_hidden`, false);
            actionOptions.classList.toggle(`pp_hidden`, false);
        });

        // delete button
        const deleteSpan = appendElement(filterPanel, `span`);
        const deleteButton = appendElement(deleteSpan, `div`, [`pp_ui_options_arrow`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
        const deleteButtonSvg = buildSvg(deleteButtonSVG, 24, 24, { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR });
        deleteButton.append(deleteButtonSvg);

        deleteButton.addEventListener(`click`, () => {
            filters.splice(
                filters.findIndex(f => f == filter),
                1
            );

            save();

            filterArea.remove();
        });
    }

    function addAddButton() {
        const buttonArea = appendElement(elements, `div`, [`pp_filter_addButton`, `button`, `button-primary`, `inline-flex`, `items-center`, `justify-center`]);
        const buttonSpan = appendElement(buttonArea, `span`, [`flex`, `items-center`, `justify-center`]);
        const buttonText = appendElement(buttonSpan, `span`, [`flex`, `items-center`, `gap-xs`]);
        buttonText.textContent = `Add a filter`;

        buttonArea.addEventListener(`click`, () => {
            const newFilter = new FilterData();

            newFilter.expression = ``;
            newFilter.color = `#6A51D9`;
            newFilter.posts = true;
            newFilter.comments = true;
            newFilter.action = FilterAction.Hide;

            filters.push(newFilter);

            addFilter(newFilter, buttonArea);

            save();

            scroll.scrollBy(0, 200);
        });
    }

    function save() {
        prefs.set(PrefsKey.CONTENT_FILTERS, filters);
    }
}

function onClose() {
    cleanupBlankFilters();
}

function cleanupBlankFilters() {
    let filters = prefs.get(PrefsKey.CONTENT_FILTERS) as Array<FilterData>;
    if (!Array.isArray(filters)) {
        filters = [] as Array<FilterData>;
    }

    filters = filters.filter(f => f != null && f.expression != null && f.expression.length > 0);

    prefs.set(PrefsKey.CONTENT_FILTERS, filters);
}
