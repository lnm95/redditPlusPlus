import { appendSvg, buildSvg, CURRENT_COLOR, NONE_COLOR } from '../../utils/svg';
import { dynamicElement } from '../../utils/tools';
import { buildElement, prependElement } from '../../utils/element';
import { appendElement } from '../../utils/element';
import { css } from '../customCSS';
import { prefs, PrefsKey } from '../settings/prefs';
import style from './filters.less';
import hiddenSvg from '@resources/hiddenIco.svg';
import { getSub } from '../posts/posts';
import { flairs, subs } from '../subs/subs';
import { MAX_LOAD_LAG } from '../../defines';
import { registerHiddenContent } from './hiddenContent';
import { settings } from '../settings/settings';

css.addStyle(style);

export enum FilterAction {
    Hide,
    Blur,
    Hightlight
}

export const filterActions: Array<string> = (Object.values(FilterAction) as Array<string>).slice(0, Object.values(FilterAction).length / 2);

export class FilterData {
    expression: string;
    posts: boolean;
    comments: boolean;
    color: string;
    action: FilterAction;
}

class Filter {
    regExp: RegExp;
    data: FilterData;
}

class FiltrationState {
    isPost: boolean;
    hide: boolean = false;
    blur: { text: string; color: string } = null;
}

let postsFilters: Array<Filter> = null;
let commentsFilters: Array<Filter> = null;

function buildFilters(dataFilter: (data: FilterData) => boolean) {
    let datas = prefs.get(PrefsKey.CONTENT_FILTERS) as Array<FilterData>;
    if (!(datas instanceof Array)) {
        datas = [] as Array<FilterData>;
    }

    const filters: Array<Filter> = [];

    for (const data of datas) {
        if (dataFilter(data) == true) {
            filters.push({ regExp: new RegExp(data.expression, data.action == FilterAction.Hightlight ? `gi` : `i`), data: data } as Filter);
        }
    }

    return filters;
}

export async function filterPost(post: Element) {
    const isFeed = !window.location.href.includes(`/comments/`);

    if (postsFilters == null) {
        postsFilters = buildFilters(data => data.posts == true);
    }

    const state = new FiltrationState();
    state.isPost = true;

    applyFilters(post.querySelector(`a[slot="title"]`), postsFilters, state);

    post
        .querySelector(`a[slot="text-body"]`)
        ?.querySelectorAll(`p`)
        ?.forEach(p => {
            applyFilters(p, postsFilters, state);
        });

    // skip flair
    if (isFeed && state.hide) {
        hidePost();
        return;
    }

    // flairs filtration
    if (isFeed) {
        const flairLock = await dynamicElement(() => (post.hasAttribute(`pp_flair`) ? post : null));
        const flairText = post.getAttribute(`pp_flair`);

        const sub = getSub(post);
        const flairData = flairs.get(sub);

        if (flairText.length > 0) {
            if (flairData.banned?.includes(flairText) ?? false) {
                state.hide = true;
            }

            if (flairData.blured?.includes(flairText) ?? false) {
                const subData = subs.get(sub);
                const flairData = subData.flairs.find(f => f.text == flairText);

                if (state.blur == null) {
                    state.blur = { text: flairText, color: flairData.background };
                }
            }
        }
    }

    if (isFeed && state.hide) {
        hidePost();
    } else if (isFeed && state.blur != null) {
        blurContent(post, state);
    }

    async function hidePost() {
        const next = await dynamicElement(() => post.parentElement.nextElementSibling, MAX_LOAD_LAG);

        post.remove();
        next?.remove();

        if (settings.SHOW_FILTERED_CONTENT.isEnabled()) {
            registerHiddenContent(post);
        }
    }
}

function applyFilters(element: Element, filters: Filter[], state: FiltrationState) {
    const content = element?.textContent;

    if (content == null || content.length == 0) return;

    for (const filter of filters) {
        if (filter.data.action == FilterAction.Blur && state.blur != null) continue;
        if (filter.data.action == FilterAction.Hide && state.hide) continue;

        const matches = filter.regExp.exec(content);

        if (matches != null && matches.length > 0) {
            switch (filter.data.action) {
                case FilterAction.Hide:
                    state.hide = true;
                    break;

                case FilterAction.Blur:
                    state.blur = { text: matchesToText(matches), color: filter.data.color };
                    break;
            }

            highlightContent(matches, filter.data, element);
        }
    }
}

export function filterComment(comment: Element, commentBody: Element) {
    if (commentsFilters == null) {
        commentsFilters = buildFilters(data => data.comments == true);
    }

    const state = new FiltrationState();

    commentBody.querySelectorAll(`p`).forEach(p => {
        applyFilters(p, commentsFilters, state);
    });

    if (state.hide) {
        hideComment();
    } else if (state.blur != null) {
        blurContent(commentBody, state);
    }

    function hideComment() {
        comment.classList.add(`pp_hidden_comment`);

        const showButtonContainer = appendElement(comment, `div`);
        const showButton = appendElement(showButtonContainer, `div`, [`pp_hidden_button`, `button`, `button-plain-weak`, `button-small`]);
        const icon = buildSvg(hiddenSvg, 16, 16, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });
        showButton.append(icon);
        const text = appendElement(showButton, `span`);
        text.textContent = `Show a hidden comment`;

        showButton.addEventListener(
            `click`,
            () => {
                comment.classList.toggle(`pp_hidden_comment`, false);
                showButtonContainer.remove();
            },
            { once: true }
        );

        comment.prepend(showButtonContainer);
    }
}

function matchesToText(input: RegExpExecArray): string {
    if (input.length > 1) {
        input.sort((a, b) => a.length - b.length);
    }

    let text = input[0].trim();
    if (text.length > 50) {
        return `${text.slice(0, 48).trimEnd()}...`;
    }

    return text;
}

function blurContent(body: Element, state: FiltrationState) {
    body.classList.add(`pp_blured_content_animator`);
    body.classList.add(`pp_blured_content`);

    const clickArea = prependElement(body, `div`, `pp_blured_content_area`);

    const showButtonContainer = prependElement(body.parentElement, `div`, `pp_blured_button_container`);

    const showButton = appendElement(showButtonContainer, `div`, `pp_blured_button`);
    showButton.style.backgroundColor = state.blur.color + `55`;
    if (state.isPost) {
        showButton.style.top = `20px`;
    }

    const showButtonContent = appendElement(showButton, `div`, `pp_blured_button_content`);

    const icon = appendSvg(showButtonContent, hiddenSvg, 16, 16, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });

    const showContent = appendElement(showButtonContent, `span`);
    showContent.textContent = state.blur.text;

    clickArea.addEventListener(
        `click`,
        () => {
            body.classList.toggle(`pp_blured_content`, false);
            showButtonContainer.remove();
            clickArea.remove();
        },
        { once: true }
    );
}

function highlightContent(matches: RegExpExecArray, data: FilterData, p: Element) {
    let inner = p.innerHTML;

    const uniqueMathces = new Set(matches);

    for (const match of uniqueMathces) {
        const split = inner.split(match);

        if (split.length > 1) {
            inner = split[0];

            let i = 1;
            while (i < split.length) {
                inner += `<span style="border-radius: 6px; background-color: ${data.color}88;">${match}</span>`;
                inner += split[i];
                i++;
            }
        }
    }

    p.innerHTML = inner;
}
