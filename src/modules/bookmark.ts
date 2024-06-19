import { buildSvg } from '../utils/svg';
import { css } from './customCSS';
import { settings } from './settings/settings';
import style from './bookmark.less';

import bookmarkSavedSvg from '@resources/bookmarkSaved.svg';
import bookmarkUnsavedSvg from '@resources/bookmarkUnsaved.svg';
import { ModuleTaget } from '../defines';
import { dynamicElement } from '../utils/tools';
import { notify } from './toaster';

css.addStyle(style);

export function renderCommentBookmark(comment: Element, forced: boolean = false) {
    if (settings.SAVED_BOOKMARK_COMMENTS.isDisabled()) return;

    const contextMenuButton = comment.querySelector(`shreddit-overflow-menu`)?.shadowRoot?.querySelector(`faceplate-dropdown-menu`);

    const saveButton = contextMenuButton.querySelector(`.save-comment-menu-button`);
    const saveButtonContent = saveButton.querySelector(`.text-14`);

    saveButton.addEventListener(`click`, () => {
        renderCommentBookmark(comment, true);
    });

    let isSaved = saveButtonContent.textContent == `Remove from saved`;

    if (forced) {
        isSaved = true;
    }

    if (isSaved || forced || settings.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS.isEnabled()) {
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
    if (settings.SAVED_BOOKMARK_POSTS.isDisabled()) return;

    const contextMenu = await dynamicElement(() => post.querySelector(`shreddit-post-overflow-menu`)?.shadowRoot?.querySelector(`faceplate-dropdown-menu`)?.querySelector(`faceplate-menu`), 3000);

    let isSaved: boolean = true;
    let saveButton: Element = null;
    contextMenu.querySelectorAll(`li`).forEach(element => {
        const buttonSpan = element.querySelector(`.text-14`);

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

    if (isSaved || forced || settings.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS.isEnabled()) {
        const downVoteButton = post.shadowRoot?.querySelector(`button[downvote]`);

        const bookmarkButton = downVoteButton.cloneNode(true) as Element;
        bookmarkButton.classList.add(`pp_bookmark_post`);
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
