import { dynamic } from '../../utils/dynamic';
import { CustomCSS } from '../customCSS';

import style from './customFeed.less';

const customFeedCss = new CustomCSS();
customFeedCss.register(document);
customFeedCss.addStyle(style);

export let realCustomFeedTittle: string | null = null;

export function getCurrentCustomFeed() {
    const raw = window.location.href.split(`/m/`);
    return raw.length > 1 ? raw[1].split(`/`)[0] : null;
}

export async function renderCustomFeed(main: Element) {
    const headerShadowRoot = await dynamic(() => main.querySelector(`custom-feed-header`)?.shadowRoot);
    customFeedCss.register(headerShadowRoot);

    const icoContainer = await dynamic(() => headerShadowRoot?.querySelector(`img`)?.parentElement);
    icoContainer?.classList.add(`pp_customFeed_masthead_ico`);

    realCustomFeedTittle = headerShadowRoot?.querySelector(`.text-18`)?.textContent ?? null;
}
