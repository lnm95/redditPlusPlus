import { appendElement } from '../../utils/element';
import { NONE_COLOR, buildSvg } from '../../utils/svg';
import { css } from '../customCSS';
import { PrefsKey, prefs } from '../settings/prefs';
import { settingsWindow } from '../settings/settingsWindow';
import { pp_log } from '../toaster';

import commentsSvg from '@resources/profileMenu/comments.svg';
import historySvg from '@resources/profileMenu/history.svg';
import postsSvg from '@resources/profileMenu/posts.svg';
import savedSvg from '@resources/profileMenu/saved.svg';
import settingsSvg from '@resources/profileMenu/settings.svg';
import upvotedSvg from '@resources/profileMenu/upvoted.svg';

import style from './profileMenu.less';

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

export interface ProfileMenuElementConfig {
    tittle: string;
    icon?: any;
    isCustom?: boolean;
    isOptional: boolean;
    noun?: string;
    find?: (element: Element) => Element | null;
    action?: () => void;
    getHref?: () => string;
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
            getHref: () => {
                return `${GetCurrentUser()}saved/`;
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
            getHref: () => {
                return `${GetCurrentUser()}upvoted/`;
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
            getHref: () => {
                return `${GetCurrentUser()}submitted/`;
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
            getHref: () => {
                return `${GetCurrentUser()}comments/`;
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
            getHref: () => {
                return `${GetCurrentUser()}history/`;
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

let originElements: Map<ProfileMenuElement, Element> | undefined;
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
    const profileMenu = document.getElementById(`user-drawer-content`);

    if (!profileMenu) return;

    profileMenu.classList.toggle(`pp_defaultText`, true);

    const undefinedElements = new Array<Element>();

    // initialization
    if (!originElements) {
        // get user
        const profileAnchor = profileMenu.querySelector(`faceplate-tracker[noun="profile"]`)?.querySelector(`a`) as HTMLAnchorElement;
        if (profileAnchor != null) {
            currentUser = profileAnchor.href;
        }

        // custom buttons
        const originButton = profileMenu.querySelector(`faceplate-tracker[noun="settings"]`) ?? profileMenu.querySelector(`faceplate-tracker[noun="login"]`);

        profileMenuElementConfigs.forEach((config, element) => {
            if (config.isCustom != undefined && config.isCustom) {
                renderCustomButton(originButton!, config);
            }
        });

        // origin elements search and cleaning
        const searchingElements = Object.values(ProfileMenuElement) as Array<ProfileMenuElement>;
        originElements = new Map<ProfileMenuElement, Element>();

        profileMenu.querySelectorAll(`ul`).forEach(ul => {
            for (const element of [...searchingElements]) {
                const noun = profileMenuElementConfigs.get(element)?.noun;
                const find =
                    noun != undefined
                        ? (element: Element) => {
                              return element.querySelector(`faceplate-tracker[noun="${noun}"]`);
                          }
                        : profileMenuElementConfigs.get(element)?.find;

                const foundElement = find?.(ul);
                if (foundElement) {
                    originElements!.set(element, foundElement);
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
        return appendElement(profileMenu!, `ul`, [`w-100`, `p-0`, `m-0`, `list-none`, `my-xs`]);
    }

    function addHr(): void {
        appendElement(profileMenu!, `hr`, [`h-px`, `w-100`, `bg-neutral-border-weak`, `border-0`]);
    }
}

function renderCustomButton(originButton: Element, config: ProfileMenuElementConfig) {
    let ppSettingsButton = originButton.cloneNode(true) as Element;

    if (config.noun) {
        ppSettingsButton.setAttribute(`noun`, config.noun);
    }

    originButton.parentNode!.appendChild(ppSettingsButton);

    const anchor = ppSettingsButton.querySelector(`a`) as HTMLAnchorElement;
    if (config.getHref != undefined) {
        anchor.href = config.getHref();
    } else {
        anchor.removeAttribute(`href`);
    }

    const originSvg = ppSettingsButton.querySelector(`svg`)!;
    const svg = buildSvg(config.icon, 20, 20, { strokeColor: NONE_COLOR });
    originSvg.replaceWith(svg);

    let text = ppSettingsButton.querySelector(`.text-body-2`)!;
    text.textContent = config.tittle;

    if (config.action) {
        ppSettingsButton.addEventListener(`click`, () => {
            config.action!();
        });
    }
}
