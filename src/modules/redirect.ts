import { appendElement } from '../utils/element';
import { settings } from './settings/settings';

import style from './redirect.less';
import { css } from './customCSS';
import { checkSortCommentsRedirect } from './comments/sortButtons';
import { RedirectMode } from './redirectMode';

export function checkRedirect(): boolean {
    const mode = settings.REDIRECT_MODE.get() as RedirectMode;

    const isOld = window.location.href.includes(`old.reddit.com`);

    let redirect: string = null;
    if (isOld) {
        redirect = window.location.href.replace(`old.reddit.com`, `reddit.com`);
    }

    if (mode == RedirectMode.Forced && redirect != null) {
        window.location.assign(redirect);
    }

    if (mode == RedirectMode.Suggestion && redirect != null) {
        renderSuggestion(redirect);
    }

    const commentsSortRedirect = checkSortCommentsRedirect();

    return redirect != null || commentsSortRedirect;
}

function renderSuggestion(redirect: string) {
    css.addStyle(style);

    let secondsToRedirect = 19;

    const container = appendElement(document.body, `div`, `pp_redirectContainer`);
    const box = appendElement(container, `div`, `pp_redirectBox`);
    box.textContent = `Click here to redirect on compatible page (${secondsToRedirect})`;

    box.addEventListener(`click`, () => {
        window.location.assign(redirect);
    });

    const suggestionId = setInterval(() => {
        secondsToRedirect--;
        box.textContent = `Click here to redirect on compatible page (${secondsToRedirect})`;
        if (secondsToRedirect <= 0) {
            clearInterval(suggestionId);
            container.remove();
        }
    }, 750);
}
