import settingsSvg from '@resources/profileMenu/settings.svg';
import savedSvg from '@resources/profileMenu/saved.svg';
import upvotedSvg from '@resources/profileMenu/upvoted.svg';
import postsSvg from '@resources/profileMenu/posts.svg';
import commentsSvg from '@resources/profileMenu/comments.svg';
import historySvg from '@resources/profileMenu/history.svg';

import { settingsWindow } from '../settings/settingsWindow';
import { buildSvg, NONE_COLOR } from '../../utils/svg';
import { css } from '../customCSS';
import style from './profileMenu.less';
import { checkIsRendered } from '../../utils/tools';
import { appendElement } from '../../utils/element';
import { prefs, PrefsKey } from '../settings/prefs';
import { pp_log } from '../toaster';
import { title } from 'process';

css.addStyle(style);

export enum ProfileMenuElement {
    Separator,
    VeiwProfile,
    EditAvatar,
    Drafts,
    Achievements,
    Earn,
    Premium,
    DisplayMode,
    LogOut,
    //br
    Advertise,
    RedditPro,
    //br
    Settings,
    PlusPlus,
    //optional
    Saved,
    Upvoted,
    Posts,
    Comments,
    History
}

export interface FindProfileMenuElement {
    (element: Element): Element;
}

export interface ProfileMenuElementConfig {
    tittle: string;
    icon?: any;
    isCustom?: boolean;
    isOptional: boolean;
    noun?: string;
    find?: FindProfileMenuElement;
    action?: Function;
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
            noun: `profile`
        }
    ],
    [
        ProfileMenuElement.EditAvatar,
        {
            tittle: `Edit Avatar`,
            isOptional: true,
            noun: `edit_avatar`
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
            noun: `premium_menu`
        }
    ],
    [
        ProfileMenuElement.DisplayMode,
        {
            tittle: `Display Mode`,
            isOptional: true,
            noun: `dark_mode`
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
            noun: `advertise`
        }
    ],
    [
        ProfileMenuElement.RedditPro,
        {
            tittle: `Try Reddit Pro`,
            isOptional: true,
            noun: `try_reddit_pro`
        }
    ],
    [
        ProfileMenuElement.Settings,
        {
            tittle: `Settings`,
            isOptional: false,
            noun: `settings`
        }
    ],
    [
        ProfileMenuElement.PlusPlus,
        {
            isCustom: true,
            tittle: `Reddit++`,
            icon: settingsSvg,
            isOptional: false,
            noun: `pp-settings`,
            action: () => {
                settingsWindow.open();
            }
        }
    ],
    [
        ProfileMenuElement.Saved,
        {
            isCustom: true,
            tittle: `Saved`,
            icon: savedSvg,
            isOptional: true,
            noun: `pp-saved`,
            action: () => {
                window.location.replace(`${GetCurrentUser()}/saved/`);
            }
        }
    ],
    [
        ProfileMenuElement.Upvoted,
        {
            isCustom: true,
            tittle: `Upvoted`,
            icon: upvotedSvg,
            isOptional: true,
            noun: `pp-upvoted`,
            action: () => {
                window.location.replace(`${GetCurrentUser()}/upvoted/`);
            }
        }
    ],
    [
        ProfileMenuElement.Posts,
        {
            isCustom: true,
            tittle: `Posts`,
            icon: postsSvg,
            isOptional: true,
            noun: `pp-posts`,
            action: () => {
                window.location.replace(`${GetCurrentUser()}/submitted/`);
            }
        }
    ],
    [
        ProfileMenuElement.Comments,
        {
            isCustom: true,
            tittle: `Comments`,
            icon: commentsSvg,
            isOptional: true,
            noun: `pp-comments`,
            action: () => {
                window.location.replace(`${GetCurrentUser()}/comments/`);
            }
        }
    ],
    [
        ProfileMenuElement.History,
        {
            isCustom: true,
            tittle: `History`,
            icon: historySvg,
            isOptional: true,
            noun: `pp-history`,
            action: () => {
                window.location.replace(`${GetCurrentUser()}/history/`);
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
    ProfileMenuElement.DisplayMode,
    ProfileMenuElement.LogOut,
    ProfileMenuElement.Separator,
    ProfileMenuElement.Advertise,
    ProfileMenuElement.RedditPro,
    ProfileMenuElement.Separator,
    ProfileMenuElement.Settings,
    ProfileMenuElement.PlusPlus
);


let originElements: Map<ProfileMenuElement, Element> = null;
let undefinedElements: Array<Element> = null;
let currentUser: string;

export function ensureValidProfileMenu(elements: Array<ProfileMenuElementData>): Array<ProfileMenuElementData> {
    if (!Array.isArray(elements)) {
        elements = generateDefaultLayout();
    }

    // add new or missed elements
    profileMenuElementConfigs.forEach((config, element) => {
        if (elements.find(data => data.element == element) == null) {
            elements.push({ element: element, hidden: true } as ProfileMenuElementData);
        }
    });

    return elements;
}

function generateDefaultLayout(): Array<ProfileMenuElementData> {
    const elements = new Array<ProfileMenuElementData>();

    for (const element of defaultLayout) {
        elements.push({ element: element, hidden: false } as ProfileMenuElementData);
    }

    return elements;
}

function GetCurrentUser(): string {
    return currentUser;
}

export function renderProfileMenu() {
    let profileMenu = document.getElementById(`user-drawer-content`);
    profileMenu.classList.toggle(`pp_defaultText`, true);

    // initialization
    if (originElements == null) {
        // custom buttons
        let originButton = profileMenu.querySelector(`faceplate-tracker[noun="settings"]`);

        if (originButton == null) {
            originButton = profileMenu.querySelector(`faceplate-tracker[noun="login"]`);
        }

        profileMenuElementConfigs.forEach((config, element) => {
            if (config.isCustom != undefined && config.isCustom) {
                renderCustomButton(originButton, config);
            }
        });

        // origin elements search and cleaning
        const searchingElements = Object.values(ProfileMenuElement) as Array<ProfileMenuElement>;
        originElements = new Map<ProfileMenuElement, Element>();
        undefinedElements = new Array<Element>();

        profileMenu.querySelectorAll(`ul`).forEach(ul => {
            for (const element of [...searchingElements]) {
                const noun = profileMenuElementConfigs.get(element)?.noun;
                let find: Function;
                if (noun != undefined) {
                    find = (element: Element) => {
                        return element.querySelector(`faceplate-tracker[noun="${noun}"]`);
                    }
                } else {
                    find = profileMenuElementConfigs.get(element)?.find;
                }

                const foundElement = find != null ? find(ul) : null;
                if (foundElement) {
                    if (element == ProfileMenuElement.VeiwProfile) {
                        const a = foundElement.querySelector(`a`) as HTMLAnchorElement;
                        currentUser = a.href;
                    }

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
    elementsData = ensureValidProfileMenu(elementsData);


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

function renderCustomButton(originButton: Element, config: ProfileMenuElementConfig) {

    let ppSettingsButton = originButton.cloneNode(true) as Element;
    ppSettingsButton.setAttribute(`noun`, config.noun);

    originButton.parentNode.appendChild(ppSettingsButton);

    ppSettingsButton.querySelector(`a`).removeAttribute(`href`);

    const originSvg = ppSettingsButton.querySelector(`svg`);
    const svg = buildSvg(config.icon, 20, 20, { strokeColor: NONE_COLOR });
    originSvg.replaceWith(svg);

    let text = ppSettingsButton.querySelector(`.text-body-2`);
    text.textContent = config.tittle;

    ppSettingsButton.addEventListener(`click`, () => {
        config.action();
    });
}
