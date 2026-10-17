import { MAX_LOAD_LAG } from '../defines';
import { dynamic } from '../utils/dynamic';
import { buildElement } from '../utils/element';
import { buildSvg } from '../utils/svg';
import { BookmarkMode } from './bookmarkMode';
import { CustomCSS } from './customCSS';
import { settings } from './settings/settings';
import { pp_log } from './toaster';

import bookmarkSavedSvg from '@resources/bookmarkSaved.svg';
import bookmarkUnsavedSvg from '@resources/bookmarkUnsaved.svg';

import style from './bookmark.less';

export const bookmarksCss = new CustomCSS();
bookmarksCss.register(document);
bookmarksCss.addStyle(style);

export function renderCommentBookmark(comment: Element, contextMenu: Element, forceRender: boolean = false, forceSaved?: boolean) {
    const mode = settings.SAVED_BOOKMARK_COMMENTS.get() as BookmarkMode;

    if (mode == BookmarkMode.Disabled || contextMenu == null || comment.hasAttribute(`pp-bookmark-rendered`)) return;

    const saveButton = contextMenu.querySelector(`.save-comment-menu-button`)!;

    let isSaved: boolean = forceSaved != undefined ? true : saveButton.querySelector(`.text-body-2`)?.textContent == `Remove from saved`;

    const actionRowShadowRoot = comment.querySelector(`shreddit-comment-action-row`)!.shadowRoot!;

    if (mode == BookmarkMode.WhenUpvoted) {
        saveButton.addEventListener(
            `click`,
            () => {
                renderCommentBookmark(comment, contextMenu, true, true);
            },
            { once: true }
        );

        actionRowShadowRoot.querySelector(`button[upvote]`)?.addEventListener(
            `click`,
            () => {
                renderCommentBookmark(comment, contextMenu, true);
            },
            { once: true }
        );
    }

    if (mode == BookmarkMode.Always || isSaved || forceRender) {
        comment.toggleAttribute(`pp-bookmark-rendered`, true);
        bookmarksCss.register(actionRowShadowRoot);

        const downVoteButton = actionRowShadowRoot.querySelector(`button[downvote]`)!;
        const bookmarkButton = renderBookmarkButton(downVoteButton, saveButton, isSaved);

        downVoteButton.parentElement!.after(bookmarkButton);
    }
}

export async function renderBookmarkPost(post: Element, forceRender: boolean = false, forceSaved?: boolean) {
    const mode = settings.SAVED_BOOKMARK_POSTS.get() as BookmarkMode;

    if (mode == BookmarkMode.Disabled || post.hasAttribute(`pp-bookmark-rendered`)) return;

    const contextMenu = await dynamic(() => post.querySelector(`shreddit-post-overflow-menu`)?.shadowRoot?.querySelector(`rpl-dropdown`)?.querySelector(`faceplate-menu`), MAX_LOAD_LAG * 2);

    if (!contextMenu) return;

    let saveButton: Element | null = contextMenu.querySelector(`#post-overflow-save`);

    if (!saveButton) return;

    let isSaved: boolean = forceSaved != undefined ? true : saveButton?.querySelector(`.text-body-2`)?.textContent == `Remove from saved`;

    if (mode == BookmarkMode.WhenUpvoted) {
        saveButton.addEventListener(
            `click`,
            () => {
                renderBookmarkPost(post, true, true);
            },
            { once: true }
        );

        dynamic(() => post.shadowRoot?.querySelector(`button[upvote]`)).then(upvoteButton => {
            upvoteButton?.addEventListener(
                `click`,
                () => {
                    renderBookmarkPost(post, true);
                },
                { once: true }
            );
        });
    }

    if (mode == BookmarkMode.Always || isSaved || forceRender) {
        post.toggleAttribute(`pp-bookmark-rendered`, true);

        const downVoteButton = post.shadowRoot!.querySelector(`button[downvote]`)!;

        const bookmarkContainer = buildElement(`span`);
        bookmarkContainer.className = `p-0 button-shell overflow-visible font-semibold flex items-center cursor-auto flex flex-row justify-center items-center h-xl font-semibold relative text-label-2 button-secondary button-activated inline-flex items-center`;
        downVoteButton.parentElement?.parentElement?.parentElement?.after(bookmarkContainer);

        const bookmarkButton = renderBookmarkButton(downVoteButton, saveButton, isSaved);

        bookmarkContainer.append(bookmarkButton);
    }
}

function renderBookmarkButton(referenceButton: Element, originButton: Element, state: boolean): Element {
    const button = referenceButton.cloneNode(true) as Element;
    button.classList.add(`pp_bookmark_button`);
    button.removeAttribute(`disabled`);
    button.removeAttribute(`downvote`);
    button.removeAttribute(`data-action-bar-action`);

    function replaceIcon(graphic: any, name: string) {
        dynamic(() => button.querySelector(`span .${name}`)?.querySelector(`svg`), MAX_LOAD_LAG).then(originSvg => {
            if (!originSvg) return;
            const iconSvg = buildSvg(graphic, 16, 16) as SVGSVGElement;
            originSvg.replaceWith(iconSvg);
        });
    }

    replaceIcon(bookmarkSavedSvg, `vote-icon-fill`);
    replaceIcon(bookmarkUnsavedSvg, `vote-icon-outline`);

    button.setAttribute(`aria-pressed`, state.toString());

    button.addEventListener(`click`, () => {
        state = !state;
        button.setAttribute(`aria-pressed`, state.toString());
    });

    button.append(originButton);
    originButton.classList.add(`pp_bookmark_hiddenButton`);

    return button;
}
