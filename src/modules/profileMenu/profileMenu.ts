import settingsButtonSvg from '@resources/settingsButton.svg';
import { settingsWindow } from '../settings/settingsWindow';
import { buildSvg, NONE_COLOR } from '../../utils/svg';
import { css } from '../customCSS';
import style from './profileMenu.less';
import { checkIsRendered } from '../../utils/tools';
import { appendElement } from '../../utils/element';
import { prefs, PrefsKey } from '../settings/prefs';
import { pp_log } from '../toaster';

css.addStyle(style);

export enum ProfileMenuElement {
    Separator,
    VeiwProfile,
    EditAvatar,
    Drafts,
    Achievements,
    Earn,
    Premium,
    DarkMode,
    LogOut,
    //br
    Advertise,
    RedditPro,
    //br
    Settings,
    PlusPlus
}

export interface FindProfileMenuElement {
    (element: Element): Element;
}

export interface ProfileMenuElementConfig {
    tittle: string;
    isOptional: boolean;
    find: FindProfileMenuElement;
}

export interface ProfileMenuElementData {
    element: ProfileMenuElement;
    hidden: boolean;
}

export const profileMenuElementConfigs = new Map<ProfileMenuElement, ProfileMenuElementConfig>([
    [
        ProfileMenuElement.VeiwProfile,
        {
            tittle: `View Profile`,
            isOptional: false,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="profile"]`);
            }
        }
    ],
    [
        ProfileMenuElement.EditAvatar,
        {
            tittle: `Edit Avatar`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="edit_avatar"]`);
            }
        }
    ],
    [
        ProfileMenuElement.Drafts,
        {
            tittle: `Drafts`,
            isOptional: true,
            find: element => {
                return element.querySelector(`#drafts-list-item`);
            }
        }
    ],
    [
        ProfileMenuElement.Achievements,
        {
            tittle: `Achievements`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[source="achievements"]`);
            }
        }
    ],
    [
        ProfileMenuElement.Earn,
        {
            tittle: `Earn`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[source="earn"]`);
            }
        }
    ],
    [
        ProfileMenuElement.Premium,
        {
            tittle: `Premium`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="premium_menu"]`);
            }
        }
    ],
    [
        ProfileMenuElement.DarkMode,
        {
            tittle: `Dark Mode`,
            isOptional: true,
            find: element => {
                return element.querySelector(`shreddit-darkmode-setter`);
            }
        }
    ],
    [
        ProfileMenuElement.LogOut,
        {
            tittle: `Log Out`,
            isOptional: false,
            find: element => {
                return element.querySelector(`user-drawer-logout`);
            }
        }
    ],
    [
        ProfileMenuElement.Advertise,
        {
            tittle: `Advertise on Reddit`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="advertise"]`);
            }
        }
    ],
    [
        ProfileMenuElement.RedditPro,
        {
            tittle: `Try Reddit Pro`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="try_reddit_pro"]`);
            }
        }
    ],
    [
        ProfileMenuElement.Settings,
        {
            tittle: `Settings`,
            isOptional: false,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="settings"]`);
            }
        }
    ],
    [
        ProfileMenuElement.PlusPlus,
        {
            tittle: `Reddit++`,
            isOptional: false,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="pp-settings"]`);
            }
        }
    ]
]);

const defaultLayout = Array<ProfileMenuElement>(
    ProfileMenuElement.VeiwProfile,
    ProfileMenuElement.EditAvatar,
    ProfileMenuElement.Drafts,
    ProfileMenuElement.Achievements,
    ProfileMenuElement.Earn,
    ProfileMenuElement.Premium,
    ProfileMenuElement.DarkMode,
    ProfileMenuElement.LogOut,
    ProfileMenuElement.Separator,
    ProfileMenuElement.Advertise,
    ProfileMenuElement.RedditPro,
    ProfileMenuElement.Separator,
    ProfileMenuElement.Settings,
    ProfileMenuElement.PlusPlus
);

export function generateDefaultLayout(): Array<ProfileMenuElementData> {
    const elements = new Array<ProfileMenuElementData>();

    for (const element of defaultLayout) {
        elements.push({ element: element, hidden: false } as ProfileMenuElementData);
    }

    return elements;
}

let originElements: Map<ProfileMenuElement, Element> = null;
let undefinedElements: Array<Element> = null;

export function renderProfileMenu() {
    let profileMenu = document.getElementById(`user-drawer-content`);
    profileMenu.classList.toggle(`pp_defaultText`, true);

    // initialization
    if (originElements == null) {
        renderPlusPlusButton(profileMenu);

        // origin elements search and cleaning
        const searchingElements = Object.values(ProfileMenuElement) as Array<ProfileMenuElement>;
        originElements = new Map<ProfileMenuElement, Element>();
        undefinedElements = new Array<Element>();

        profileMenu.querySelectorAll(`ul`).forEach(ul => {
            for (const element of [...searchingElements]) {
                const find = profileMenuElementConfigs.get(element)?.find;
                const foundElement = find != null ? find(ul) : null;
                if (foundElement) {
                    originElements.set(element, foundElement);
                    foundElement.remove();
                    searchingElements.splice(searchingElements.indexOf(element), 1);
                }
            }

            for (const child of ul.children) {
                undefinedElements.push(child);
            }

            ul.remove();
        });

        profileMenu.querySelectorAll(`hr`).forEach(hr => hr.remove());
    } else {
        // clearing for redraw
        profileMenu.querySelectorAll(`ul`).forEach(ul => ul.remove());
        profileMenu.querySelectorAll(`hr`).forEach(hr => hr.remove());
    }

    // render elements
    let elementsData = prefs.get(PrefsKey.PROFILE_MENU_ELEMENTS) as Array<ProfileMenuElementData>;
    if (!Array.isArray(elementsData)) {
        elementsData = generateDefaultLayout();
    }

    if (undefinedElements.length > 0) {
        pp_log(`Detected ${undefinedElements.length} undefined elements in the Profile menu`);

        const undefinedUl = addUl();
        for (const undefinedElement of undefinedElements) {
            undefinedUl.append(undefinedElement);
        }
        addHr();
    }

    let currentSection = addUl();
    for (const data of elementsData) {
        if (data.hidden) continue;

        if (data.element == ProfileMenuElement.Separator) {
            addHr();
            currentSection = addUl();
        } else {
            const origin = originElements.get(data.element);
            if (origin) {
                currentSection.append(origin);
            }
        }
    }

    function addUl(): Element {
        return appendElement(profileMenu, `ul`, [`w-100`, `p-0`, `m-0`, `list-none`, `my-xs`]);
    }

    function addHr(): void {
        appendElement(profileMenu, `hr`, [`h-px`, `w-100`, `bg-neutral-border-weak`, `border-0`]);
    }
}

function renderPlusPlusButton(profileMenu: Element) {
    let originSettingsButton = profileMenu.querySelector(`faceplate-tracker[noun="settings"]`);

    if (originSettingsButton == null) {
        originSettingsButton = profileMenu.querySelector(`faceplate-tracker[noun="login"]`);
    }

    let ppSettingsButton = originSettingsButton.cloneNode(true) as Element;
    ppSettingsButton.setAttribute(`noun`, `pp-settings`);

    originSettingsButton.parentNode.appendChild(ppSettingsButton);

    ppSettingsButton.querySelector(`a`).removeAttribute(`href`);

    const originSvg = ppSettingsButton.querySelector(`svg`);
    const svg = buildSvg(settingsButtonSvg, 20, 20, { strokeColor: NONE_COLOR });
    originSvg.replaceWith(svg);

    let text = ppSettingsButton.querySelector(`.text-14`);
    text.textContent = `Reddit++`;

    ppSettingsButton.addEventListener(`click`, () => {
        settingsWindow.open();
    });
}
