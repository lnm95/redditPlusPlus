import { appendElement } from '../utils/element';
import { settings } from './settings/settings';
import { css } from './customCSS';

import style from './notifications.less';

if (settings.NOTIFY_POPUP.isEnabled()) {
    css.addStyle(style);
}

export function renderNotifications(container: Element) {
    container.querySelectorAll(`div[data-testid="notification-item"]`).forEach(item => {
        const tittle = item.querySelector(`div[data-testid="title"]`);

        const author = item.querySelector(`.text-secondary-plain`);
        if (author.textContent.includes(`replied`)) {
            author.textContent = author.textContent.split(`replied`)[0];

            const subTittle = document.createElement(`div`);
            tittle.after(subTittle);
            const subTittleContent = appendElement(subTittle, `span`, [`text-secondary-weak`, `font-normal`]);
            let sub = item.parentElement.getAttribute(`href`);
            sub = sub.replace(`https://reddit.com/r/`, ``);
            sub = sub.split(`/`)[0];
            subTittleContent.textContent = `replied in r/${sub}`;
        }

        const time = item.querySelector(`faceplate-number`);

        if (time != null) {
            const spanAgo = document.createElement(`span`);
            spanAgo.textContent = ` ago`;
            time.after(spanAgo);
        }
    });
}
