import { css } from './customCSS';
import { settings } from './settings/settings';

import style from './biggerFonts.less';

css.addStyle(style);

export function renderBiggerFonts() {
    css.addVar(`--pp-biggerFonts-Content`, `${settings.BIGGER_FONTS_CONTENT_SIZE.get()}px`);
    css.addVar(`--pp-biggerFonts-Other`, `${settings.BIGGER_FONTS_OTHER_SIZE.get()}px`);
}
