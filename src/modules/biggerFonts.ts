import style from './biggerFonts.less';
import { css } from './customCSS';
import { settings } from './settings/settings';

if (settings.BIGGER_FONTS.isEnabled()) {
    css.addStyle(style);
}

export function renderBiggerFonts() {}
