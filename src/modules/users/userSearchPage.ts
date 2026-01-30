import { CURRENT_COLOR, NONE_COLOR } from '../../utils/svg';
import { dynamicElement } from '../../utils/tools';
import { ButtonSize, ButtonVariant, renderUIButton } from '../../utils/UI/button';
import { getCurrentUser } from './users';
import backSvg from '@resources/back.svg';

export async function renderUserSearch(container: Element) {
    const tabs = await dynamicElement(() => container.querySelector(`#search-results-page-tabgroup`));

    const currentUser = getCurrentUser();

    // back to user button
    const backButton = renderUIButton(
        tabs.parentElement,
        null,
        () => {
            window.location.replace(`/user/${currentUser}/`);
        },
        {
            icon: backSvg,
            iconConfig: { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR }
        }
    );
    tabs.parentElement.prepend(backButton);
    tabs.parentElement.style.gap = `8px`;
    tabs.parentElement.style.justifyContent = `flex-start`;

    renderSearchButton(tabs, `#search-results-page-tab-posts`, `/user/${currentUser}/search/?q=&sort=new`);
    renderSearchButton(tabs, `#search-results-page-tab-comments`, `/user/${currentUser}/search/?q=&sort=new&type=comments`);
}

function renderSearchButton(tabs: Element, selector: string, url: string) {
    const button = tabs.querySelector(selector) as HTMLAnchorElement;

    console.log(`serach page ${selector} is ${button != null}`);

    if (button == null) return;

    button.href = url;
}
