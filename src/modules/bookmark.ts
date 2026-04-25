import { MAX_LOAD_LAG } from '../defines';
import { dynamic } from '../utils/dynamic';
import { buildSvg } from '../utils/svg';
import { BookmarkMode } from './bookmarkMode';
import { CustomCSS, css } from './customCSS';
import { settings } from './settings/settings';
import { pp_log } from './toaster';

import bookmarkSavedSvg from '@resources/bookmarkSaved.svg';
import bookmarkUnsavedSvg from '@resources/bookmarkUnsaved.svg';

import style from './bookmark.less';

export const bookmarksCss = new CustomCSS();
bookmarksCss.register(document);
bookmarksCss.addStyle(style);

export function renderCommentBookmark(comment: Element, contextMenu: Element, forced: boolean = false) {
    const mode = settings.SAVED_BOOKMARK_COMMENTS.get() as BookmarkMode;

    if (mode == BookmarkMode.Disabled || contextMenu == null) return;

    const saveButton = contextMenu.querySelector(`.save-comment-menu-button`)!;
    const saveButtonContent = saveButton.querySelector(`.text-body-2`)!;

    saveButton.addEventListener(`click`, () => {
        renderCommentBookmark(comment, contextMenu, true);
    });

    let isSaved = saveButtonContent.textContent == `Remove from saved`;

    if (forced) {
        isSaved = true;
    }

    if (isSaved || forced || mode == BookmarkMode.Always) {
        const actionRowShadowRoot = comment.querySelector(`shreddit-comment-action-row`)!.shadowRoot!;
        bookmarksCss.register(actionRowShadowRoot);

        const downVoteButton = actionRowShadowRoot.querySelector(`button[downvote]`)!;
        const bookmarkButton = downVoteButton.cloneNode(true) as Element;
        downVoteButton.after(bookmarkButton);

        let bookmarkSvg = bookmarkButton.querySelector(`svg`)!;
        bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);

        bookmarkButton.addEventListener(`click`, () => {
            isSaved = !isSaved;
            bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);
        });

        bookmarkButton.append(saveButton);

        saveButton.classList.add(`pp_bookmark_hiddenButton`);
    }
}

export async function renderBookmarkPost(post: Element, forced: boolean = false, forcedIsSaved?: boolean) {
    const mode = settings.SAVED_BOOKMARK_POSTS.get() as BookmarkMode;

    if (mode == BookmarkMode.Disabled) return;

    const contextMenu = await dynamic(() => post.querySelector(`shreddit-post-overflow-menu`)?.shadowRoot?.querySelector(`rpl-dropdown`)?.querySelector(`faceplate-menu`), MAX_LOAD_LAG * 2);

    if (!contextMenu) return;

    let isSaved: boolean = true;
    let saveButton: Element | undefined;
    contextMenu.querySelectorAll(`li`).forEach(element => {
        const buttonSpan = element.querySelector(`.text-body-2`);

        if (!buttonSpan) return;

        if (buttonSpan.textContent == `Save`) {
            isSaved = false;
        }
        if (buttonSpan.textContent == `Save` || buttonSpan.textContent == `Remove from saved`) {
            saveButton = element;
        }
    });

    const upVoteButton = await dynamic(() => post.shadowRoot?.querySelector(`button[upvote]`));

    if (!upVoteButton) {
        pp_log(`${post.getAttribute(`permalink`)} wasn't loaded properly`);
        return;
    }

    // just refresh bookmark button
    if (!saveButton) {
        const bookmarkButton = post.shadowRoot!.querySelector(`button[bookmark]`)!;
        bookmarkButton.className = upVoteButton.className;
        bookmarkButton.classList.add(`pp_bookmark_post`);
        return;
    }

    saveButton.addEventListener(`click`, () => {
        renderBookmarkPost(post, true, true);
    });

    upVoteButton.addEventListener(`click`, () => {
        renderBookmarkPost(post, true);
    });

    if (forcedIsSaved != undefined) {
        isSaved = forcedIsSaved as boolean;
    }

    if (isSaved || forced || mode == BookmarkMode.Always) {
        const downVoteButton = post.shadowRoot!.querySelector(`button[downvote]`)!;

        const bookmarkButton = downVoteButton.cloneNode(true) as Element;
        bookmarkButton.classList.add(`pp_bookmark_post`);
        bookmarkButton.removeAttribute(`disabled`);
        bookmarkButton.removeAttribute(`downvote`);
        bookmarkButton.setAttribute(`bookmark`, ``);
        downVoteButton.after(bookmarkButton);

        let bookmarkSvg = bookmarkButton.querySelector(`svg`)!;
        bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);

        bookmarkButton.addEventListener(`click`, () => {
            isSaved = !isSaved;
            bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);
        });

        bookmarkButton.append(saveButton);

        saveButton.classList.add(`pp_bookmark_hiddenButton`);
    }
}

function replaceBookmarkIcon(originSvg: Element, isSaved: boolean): SVGSVGElement {
    const newSvg = buildSvg(isSaved ? bookmarkSavedSvg : bookmarkUnsavedSvg, 20, 20) as SVGSVGElement;
    newSvg.setAttribute(`width`, `16px`);
    newSvg.setAttribute(`height`, `16px`);

    originSvg.replaceWith(newSvg);

    return newSvg;
}
