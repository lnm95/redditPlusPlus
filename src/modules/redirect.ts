import { appendNew } from '../utils/tools';
import { settings } from './settings/settings';

import style from './reddirect.less';
import { css } from './customCSS';
import { checkSortCommentsRedirect } from './comments/sortButtons';

export function checkRedirect(): boolean {
    const isOld = window.location.href.includes(`old.reddit.com`);
    const isPrev = window.location.href.includes(`new.reddit.com`);

    let redirect: string = null;
    if (isOld) {
        redirect = window.location.href.replace(`old.reddit.com`, `reddit.com`);
    }
    if (isPrev) {
        redirect = window.location.href.replace(`new.reddit.com`, `reddit.com`);
    }

    if (settings.REDIRECT_FORCED.isEnabled() && redirect != null) {
        window.location.assign(redirect);
    }

    if (settings.REDIRECT_SUGGESTION.isEnabled() && redirect != null) {
        renderSuggestion(redirect);
    }

    const commentsSortRedirect = checkSortCommentsRedirect();

    return redirect != null || commentsSortRedirect;
}

function renderSuggestion(redirect: string) {
    css.addStyle(style);

    let secondsToRedirect = 19;

    const container = appendNew(document.body, `div`, `pp_redirectContainer`);
    const box = appendNew(container, `div`, `pp_redirectBox`);
    box.textContent = `Click here to reddirect on compatible page (${secondsToRedirect})`;

    box.addEventListener(`click`, () => {
        window.location.assign(redirect);
    });

    const suggestionId = setInterval(() => {
        secondsToRedirect--;
        box.textContent = `Click here to reddirect on compatible page (${secondsToRedirect})`;
        if (secondsToRedirect <= 0) {
            clearInterval(suggestionId);
            container.remove();
        }
    }, 750);
}
