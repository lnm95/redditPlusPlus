import { buildSvg } from '../utils/svg';
import { css } from './customCSS';
import { settings } from './settings/settings';
import style from './bookmark.less';

import bookmarkSavedSvg from '@resources/bookmarkSaved.svg';
import bookmarkUnsavedSvg from '@resources/bookmarkUnsaved.svg';
import { dynamicElement } from '../utils/tools';
import { BookmarkMode } from './bookmarkMode';

css.addStyle(style);

export function renderCommentBookmark(comment: Element, forced: boolean = false) {
    const mode = settings.SAVED_BOOKMARK_COMMENTS.get() as BookmarkMode;

    if (mode == BookmarkMode.Disabled) return;

    const contextMenuButton = comment.querySelector(`shreddit-overflow-menu`)?.shadowRoot?.querySelector(`rpl-dropdown`);

    const saveButton = contextMenuButton.querySelector(`.save-comment-menu-button`);
    const saveButtonContent = saveButton.querySelector(`.text-body-2`);

    saveButton.addEventListener(`click`, () => {
        renderCommentBookmark(comment, true);
    });

    let isSaved = saveButtonContent.textContent == `Remove from saved`;

    if (forced) {
        isSaved = true;
    }

    if (isSaved || forced || mode == BookmarkMode.Always) {
        const downVoteButton = comment.querySelector(`shreddit-comment-action-row`)?.shadowRoot?.querySelector(`button[downvote]`);
        css.registry(comment.querySelector(`shreddit-comment-action-row`)?.shadowRoot);

        const bookmarkButton = downVoteButton.cloneNode(true) as Element;
        downVoteButton.after(bookmarkButton);

        let bookmarkSvg = bookmarkButton.querySelector(`svg`);
        bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);

        bookmarkButton.addEventListener(`click`, () => {
            isSaved = !isSaved;
            bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);
        });

        bookmarkButton.append(saveButton);

        saveButton.classList.add(`pp_bookmark_hiddenButton`);
    }
}

export async function renderBookmarkPost(post: Element, forced: boolean = false, forcedValue: boolean | void = undefined) {
    const mode = settings.SAVED_BOOKMARK_POSTS.get() as BookmarkMode;

    if (mode == BookmarkMode.Disabled) return;

    const contextMenu = await dynamicElement(() => post.querySelector(`shreddit-post-overflow-menu`)?.shadowRoot?.querySelector(`rpl-dropdown`)?.querySelector(`faceplate-menu`), 3000);

    if (contextMenu == undefined) {
        return;
    }

    let isSaved: boolean = true;
    let saveButton: Element = null;
    contextMenu.querySelectorAll(`li`).forEach(element => {
        const buttonSpan = element.querySelector(`.text-body-2`);

        if (buttonSpan.textContent == `Save`) {
            isSaved = false;
        }
        if (buttonSpan.textContent == `Save` || buttonSpan.textContent == `Remove from saved`) {
            saveButton = element;
        }
    });

    // just refresh bookmark button
    if (saveButton == null) {
        const upVoteButton = post.shadowRoot?.querySelector(`button[upvote]`);
        const bookmarkButton = post.shadowRoot?.querySelector(`button[bookmark]`);
        bookmarkButton.className = upVoteButton.className;
        bookmarkButton.classList.add(`pp_bookmark_post`);
        return;
    }

    saveButton.addEventListener(`click`, () => {
        renderBookmarkPost(post, true, true);
    });

    const upVoteButton = post.shadowRoot?.querySelector(`button[upvote]`);
    upVoteButton.addEventListener(`click`, () => {
        renderBookmarkPost(post, true);
    });

    if (forcedValue != undefined) {
        isSaved = forcedValue as boolean;
    }

    if (isSaved || forced || mode == BookmarkMode.Always) {
        const downVoteButton = post.shadowRoot?.querySelector(`button[downvote]`);

        const bookmarkButton = downVoteButton.cloneNode(true) as Element;
        bookmarkButton.classList.add(`pp_bookmark_post`);
        bookmarkButton.removeAttribute(`disabled`);
        bookmarkButton.removeAttribute(`downvote`);
        bookmarkButton.setAttribute(`bookmark`, ``);
        downVoteButton.after(bookmarkButton);

        let bookmarkSvg = bookmarkButton.querySelector(`svg`);
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
