import { renderUIButton } from '../../utils/UI/button';
import { dynamic } from '../../utils/dynamic';
import { CURRENT_COLOR, NONE_COLOR } from '../../utils/svg';
import { getCurrentUser } from './users';

import backSvg from '@resources/back.svg';

export async function renderUserSearch(container: Element) {
    const tabs = await dynamic(() => container.querySelector(`#search-results-page-tabgroup`));

    if (!tabs) return;

    const currentUser = getCurrentUser();

    const tabsContainer = tabs.parentElement!;

    // back to user button
    const backButton = renderUIButton(
        tabsContainer,
        null,
        () => {
            window.location.replace(`/user/${currentUser}/`);
        },
        {
            icon: backSvg,
            iconConfig: { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR }
        }
    );

    tabsContainer.prepend(backButton);
    tabsContainer.style.gap = `8px`;
    tabsContainer.style.justifyContent = `flex-start`;

    renderSearchButton(tabs, `#search-results-page-tab-posts`, `/user/${currentUser}/search/?q=&sort=new`);
    renderSearchButton(tabs, `#search-results-page-tab-comments`, `/user/${currentUser}/search/?q=&sort=new&type=comments`);
}

function renderSearchButton(tabs: Element, selector: string, url: string) {
    const button = tabs.querySelector(selector) as HTMLAnchorElement;

    if (button == null) return;

    button.href = url;
}
