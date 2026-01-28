import { appendElement } from '../../utils/element';
import { appendSvg, buildSvg, CURRENT_COLOR, NONE_COLOR } from '../../utils/svg';
import { Window } from '../../utils/window';
import { prefs, PrefsKey } from '../settings/prefs';
import { generateDefaultLayout, ProfileMenuElement, profileMenuElementConfigs, ProfileMenuElementData, renderProfileMenu } from './profileMenu';
import dragAnchorSvg from '@resources/dragAnchor.svg';
import deleteButtonSvg from '@resources/deleteButton.svg';
import hiddenIcoSvg from '@resources/hiddenIco.svg';
import showIcoSvg from '@resources/showIco.svg';
import style from './profileMenuWindow.less';
import { css } from '../customCSS';
import { renderUIButton } from '../../utils/UI/button';

css.addStyle(style);

export const profileMenuWindow: Window = new Window('Profile menu elements', renderProfileMenuWindow, onClose);

const DRAG_TAG = `profileMenuElement`;

function renderProfileMenuWindow(win: Window, context: any) {
    (win.container as HTMLElement).style.zIndex = `11`;

    cleanupElements();

    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);

    const elements = appendElement(scroll, `ul`, `pp_filter_list`);

    let menuElements = prefs.get(PrefsKey.PROFILE_MENU_ELEMENTS) as Array<ProfileMenuElementData>;
    if (!Array.isArray(menuElements)) {
        menuElements = generateDefaultLayout();
    }

    for (const element of menuElements) {
        addElement(element);
    }

    addSeparatorButton();

    // drag elements
    let draggedMenuElement: HTMLElement = null;

    elements.addEventListener(`dragstart`, e => {
        const target = e.target as HTMLElement;
        if (target.matches(`li`)) {
            draggedMenuElement = target;
            draggedMenuElement.classList.toggle(`pp_filter_dragged`, true);

            e.dataTransfer.effectAllowed = `move`;
        }
    });

    elements.addEventListener(`dragenter`, e => {
        const targetMenuElement = getMenuElementRoot(e.target as HTMLElement);

        if (targetMenuElement != null && targetMenuElement != draggedMenuElement) {
            e.preventDefault();
        }
    });

    elements.addEventListener(`dragend`, e => {
        draggedMenuElement.classList.toggle(`pp_filter_dragged`, false);
        draggedMenuElement = null;
    });

    elements.addEventListener(`dragover`, e => {
        const targetFilter = getMenuElementRoot(e.target as HTMLElement);

        if (targetFilter != null && targetFilter != draggedMenuElement) {
            e.preventDefault();
        }
    });

    elements.addEventListener(`drop`, e => {
        e.preventDefault();

        const targetMenuElement = getMenuElementRoot(e.target as HTMLElement);

        if (targetMenuElement == null) return;

        const fromIndex = parseInt(draggedMenuElement.getAttribute(`index`));
        const toIndex = parseInt(targetMenuElement.getAttribute(`index`));

        // move data
        const movedFilter = menuElements[fromIndex];
        menuElements.splice(fromIndex, 1);
        menuElements.splice(toIndex, 0, movedFilter);
        save();

        // move nodes
        if (fromIndex > toIndex) {
            targetMenuElement.before(draggedMenuElement);
        } else {
            targetMenuElement.after(draggedMenuElement);
        }

        // refresh indexes
        let currentMenuElement = elements.firstElementChild;
        let currentIndex: number = 0;

        while (currentMenuElement.hasAttribute(DRAG_TAG)) {
            currentMenuElement.setAttribute(`index`, currentIndex.toString());
            currentIndex++;

            currentMenuElement = currentMenuElement.nextElementSibling;
        }
    });

    function getMenuElementRoot(element: HTMLElement): HTMLElement {
        let current = element;
        while (!current.hasAttribute(DRAG_TAG) && current.parentElement != null) {
            current = current.parentElement;
        }

        return current.hasAttribute(DRAG_TAG) ? current : null;
    }

    // elements

    function addElement(elementData: ProfileMenuElementData, addButton: Element = null) {
        const elementArea = appendElement(elements, `li`, `pp_filter_element`);
        elementArea.style.borderColor = borderColor();

        elementArea.toggleAttribute(DRAG_TAG, true);
        elementArea.setAttribute(`index`, menuElements.findIndex(f => f == elementData).toString());

        if (addButton != null) {
            addButton.before(elementArea);
        }

        const elementPanel = appendElement(elementArea, `div`);

        // drag
        const dragButton = appendElement(elementPanel, `div`, `pp_filter_element_dragAnchor`);
        const dragButtonSvg = buildSvg(dragAnchorSvg, 16, 16, { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR });
        dragButton.append(dragButtonSvg);

        dragButton.addEventListener(`mousedown`, () => {
            elementArea.setAttribute(`draggable`, `true`);
        });

        dragButton.addEventListener(`mouseenter`, () => {
            elementArea.setAttribute(`draggable`, `true`);
        });

        dragButton.addEventListener(`mouseleave`, () => {
            elementArea.setAttribute(`draggable`, `false`);
        });

        // tittle
        const tittleContainer = appendElement(elementPanel, `div`, `pp_profileMenuElement_tittleContainer`);
        if (elementData.element == ProfileMenuElement.Separator) {
            appendElement(tittleContainer, `hr`);
        } else {
            const elementTittle = appendElement(tittleContainer, `span`);
            elementTittle.textContent = profileMenuElementConfigs.get(elementData.element).tittle;
        }

        function borderColor(): string {
            return elementData.hidden ? `#bdbdbd` : `#00adff`;
        }

        // delete/hide button
        const isDeletable = elementData.element == ProfileMenuElement.Separator;
        const isOptional = isDeletable || profileMenuElementConfigs.get(elementData.element).isOptional;
        if (isOptional) {
            const deleteSpan = appendElement(elementPanel, `span`);
            const deleteButton = appendElement(deleteSpan, `div`, [`pp_ui_options_arrow`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
            let deleteButtonIcon: Element = null;
            if (isDeletable) {
                deleteButtonIcon = appendSvg(deleteButton, deleteButtonSvg, 24, 24, { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR });
            } else {
                deleteButtonIcon = appendSvg(deleteButton, elementData.hidden ? hiddenIcoSvg : showIcoSvg, 18, 18, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });
            }

            deleteButton.addEventListener(`click`, () => {
                if (isDeletable) {
                    menuElements.splice(
                        menuElements.findIndex(f => f == elementData),
                        1
                    );

                    elementArea.remove();
                } else {
                    elementData.hidden = !elementData.hidden;
                    elementArea.style.borderColor = borderColor();

                    deleteButtonIcon.remove();
                    deleteButtonIcon = appendSvg(deleteButton, elementData.hidden ? hiddenIcoSvg : showIcoSvg, 18, 18, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });
                }

                save();
            });
        }
    }

    function addSeparatorButton() {
        const buttonArea = renderUIButton(
            elements,
            `Add a separator`,
            () => {
                const newFilter = {} as ProfileMenuElementData;

                newFilter.element = ProfileMenuElement.Separator;
                newFilter.hidden = false;

                menuElements.push(newFilter);

                addElement(newFilter, buttonArea);

                save();

                scroll.scrollBy(0, 200);
            },
            {
                variant: 'primary',
                size: 'large',
                fullWidth: true
            }
        );
    }

    function save() {
        prefs.set(PrefsKey.PROFILE_MENU_ELEMENTS, menuElements);
    }
}

function onClose() {
    cleanupElements();
    renderProfileMenu();
}

function cleanupElements() {
    let menuElements = prefs.get(PrefsKey.PROFILE_MENU_ELEMENTS) as Array<ProfileMenuElementData>;
    if (!Array.isArray(menuElements)) {
        menuElements = generateDefaultLayout();
    }

    // trim
    let lastIndex = menuElements.length - 1;
    while (lastIndex >= 0 && menuElements[lastIndex].element == ProfileMenuElement.Separator) {
        menuElements.splice(lastIndex, 1);
        lastIndex--;
    }

    while (menuElements[0].element == ProfileMenuElement.Separator) {
        menuElements.splice(0, 1);
    }

    // remove duplicates
    let index = 0;
    while (index < menuElements.length - 1) {
        while (menuElements[index].element == ProfileMenuElement.Separator && menuElements[index + 1].element == ProfileMenuElement.Separator) {
            menuElements.splice(index + 1, 1);
        }
        index++;
    }

    prefs.set(PrefsKey.PROFILE_MENU_ELEMENTS, menuElements);
}
