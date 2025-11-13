import { dynamicElement } from '../../utils/tools';
import { css } from '../customCSS';
import style from './customFeed.less';

css.addStyle(style);

export let realCustomFeedTittle: string = null;

export function getCurrentCustomFeed() {
    const raw = window.location.href.split(`/m/`);
    return raw.length > 1 ? raw[1].split(`/`)[0] : null;
}

export async function renderCustomFeed(main: Element) {
    const header = await dynamicElement(() => main.querySelector(`custom-feed-header`));
    const icoContainer = await dynamicElement(() => header.shadowRoot?.querySelector(`img`)?.parentElement);

    css.registry(header.shadowRoot);

    icoContainer.classList.add(`pp_customFeed_masthead_ico`);

    realCustomFeedTittle = header.shadowRoot?.querySelector(`.text-18`)?.textContent;
}
