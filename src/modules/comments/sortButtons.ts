import { MAX_LOAD_LAG } from '../../defines';
import { buildSvg } from '../../utils/svg';
import { appendNew, checkIsRendered, dynamicElement } from '../../utils/tools';
import { css } from '../customCSS';
import { settings } from '../settings/settings';
import { notify } from '../toaster';
import style from './sortButtons.less';

import bestSvg from '@resources/feedButtons/feedButtonBest.svg';
import newSvg from '@resources/feedButtons/feedButtonNew.svg';
import topSvg from '@resources/feedButtons/feedButtonTop.svg';

import controversialSvg from '@resources/comments/sortButtons/controversial.svg';
import oldSvg from '@resources/comments/sortButtons/old.svg';
import qaSvg from '@resources/comments/sortButtons/qa.svg';
import { PrefsKey, prefs } from '../settings/prefs';

class CommentSort {
    static BEST: string = `Best`;
    static TOP: string = `Top`;
    static NEW: string = `New`;
    static CONTROVERSIAL: string = `Controversial`;
    static OLD: string = `Old`;
    static QA: string = `QA`;
}

interface CommentSortCheck {
    (href: string): boolean;
}

class CommentSortConfig {
    icon: string;
    href: string;
    isCurrent?: CommentSortCheck;
    isHidden?: boolean;
    overrideName?: string;
}

const SORT_SEPARATOR: string = `sort=`;

function isCurrentSort(href: string, sort: string): boolean {
    // if there is no sort query param, then it is the default sort (confidence)
    if (sort === 'confidence' && !href.includes('?')) {
        return true;
    }
    return href.includes(`${SORT_SEPARATOR}${sort}`);
}

const COMMENTS_SORT_CONFIGS = new Map<string, CommentSortConfig>([
    [
        CommentSort.BEST,
        {
            icon: bestSvg,
            href: `confidence`,
            isCurrent: href => isCurrentSort(href, 'confidence')
        }
    ],
    [
        CommentSort.TOP,
        {
            icon: topSvg,
            href: `top`,
            isCurrent: href => isCurrentSort(href, 'top')
        }
    ],
    [
        CommentSort.NEW,
        {
            icon: newSvg,
            href: `new`,
            isCurrent: href => isCurrentSort(href, 'new')
        }
    ],
    [
        CommentSort.CONTROVERSIAL,
        {
            icon: controversialSvg,
            href: `controversial`,
            isCurrent: href => isCurrentSort(href, 'controversial')
        }
    ],
    [
        CommentSort.OLD,
        {
            icon: oldSvg,
            href: `old`,
            isCurrent: href => isCurrentSort(href, 'old')
        }
    ],
    [
        CommentSort.QA,
        {
            icon: qaSvg,
            href: `qa`,
            isCurrent: href => isCurrentSort(href, 'qa'),
            overrideName: `Q&A`
        }
    ]
]);

let sortButtonsRendered: boolean = false;

function getCurrentSort(): string {
    let currentSort = prefs.get(PrefsKey.COMMENTS_CURRENT_SORT);

    if (currentSort instanceof Object) {
        currentSort = CommentSort.BEST;
    }

    return currentSort;
}

export function checkSortCommentsRedirect(): boolean {
    if (settings.COMMENTS_REMEMBER_SORT.isEnabled() && window.location.href.includes(`/comments/`)) {
        const config = COMMENTS_SORT_CONFIGS.get(getCurrentSort());

        if (config.isCurrent(window.location.href)) {
            return false;
        }

        let postHref = window.location.href;

        const hasQueryThatIsNotSort = postHref.includes('?') && !postHref.includes(SORT_SEPARATOR);
        if (postHref.includes(SORT_SEPARATOR)) {
            const separatorIndex = postHref.indexOf(SORT_SEPARATOR);
            const newString = postHref.slice(0, separatorIndex - 1);
            postHref = newString;
        }

        window.location.replace(postHref + (hasQueryThatIsNotSort ? '&' : '?') + SORT_SEPARATOR + config.href);
        return true;
    }

    return false;
}

export async function renderCommentsSortButtons(container: Element) {
    if (settings.COMMENTS_SORT_BUTTONS.isDisabled()) return;

    css.addStyle(style, `sortButtons`);

    sortButtonsRendered = false;

    const sortContainer = await dynamicElement(() => container.querySelector(`comment-body-header`)?.querySelector(`.pdp-comments-tree-sort-container`), MAX_LOAD_LAG);

    if (sortContainer == null) return;

    if (checkIsRendered(sortContainer)) {
        return;
    }

    renderSearchComments(container);

    sortContainer.querySelector(`shreddit-sort-dropdown`).classList.add(`pp_sortDropdown_hidden`);
    

    let currentSort: string = undefined;

    if (settings.COMMENTS_REMEMBER_SORT.isEnabled()) {
        currentSort = getCurrentSort();
    } else {
        COMMENTS_SORT_CONFIGS.forEach((config, sort) => {
            if (config.isCurrent(window.location.href)) {
                currentSort = sort;
            }
        });
    }

    COMMENTS_SORT_CONFIGS.forEach((config, sort) => {
        renderButton(sort, config);
    });

    function renderButton(sort: string, config: CommentSortConfig) {
        const button = appendNew(sortContainer, `div`, `pp_sortButton`);
        button.classList.toggle(`pp_sortButton_active`, sort == currentSort);
        button.setAttribute(`commentSort`, sort);

        button.addEventListener(`click`, () => {
            switchSort(sort);
        });

        const iconSpan = appendNew(button, `span`);
        const iconSvg = buildSvg(config.icon, 16, 16);
        iconSpan.append(iconSvg);
        const labelSpan = appendNew(button, `span`);
        labelSpan.textContent = config.overrideName != undefined ? config.overrideName : sort;
    }

    sortButtonsRendered = true;
}

async function renderSearchComments(container: Element){
    const searchSpan = await dynamicElement(() => container.querySelector(`comment-body-header`)?.querySelector(`pdp-comment-search-input`)?.shadowRoot?.querySelector(`.pr-xs`), MAX_LOAD_LAG);
    
    if(searchSpan == null) return;
    
    searchSpan.textContent = `Search`;
}


let isCommentsSortLocked: boolean = false;

export function OnCommentsTreeLoaded() {
    isCommentsSortLocked = false;

    if (!sortButtonsRendered) {
        renderCommentsSortButtons(document.body);
    }
}

export async function switchSort(sort: string) {
    if (isCommentsSortLocked) {
        notify(`Unable to switch sort while loading comments`);
        return;
    }

    const sortContainer = await dynamicElement(() => document.body.querySelector(`comment-body-header`)?.querySelector(`.pdp-comments-tree-sort-container`), MAX_LOAD_LAG);

    const config = COMMENTS_SORT_CONFIGS.get(sort);

    const newButton = sortContainer.querySelector(`data[value="${config.href.toUpperCase()}"]`) as HTMLElement;
    newButton.click();

    prefs.set(PrefsKey.COMMENTS_CURRENT_SORT, sort);

    isCommentsSortLocked = true;

    const awaitRefreshId = setInterval(() => {
        if (config.isCurrent(window.location.href)) {
            clearInterval(awaitRefreshId);

            // refresh buttons
            COMMENTS_SORT_CONFIGS.forEach((refreshConfig, refreshSort) => {
                const button = sortContainer.querySelector(`div[commentSort="${refreshSort}"]`);
                button.classList.toggle(`pp_sortButton_active`, refreshSort == sort);
            });
        }
    }, 20);
}
