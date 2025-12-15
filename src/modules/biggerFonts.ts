import style from './biggerFonts.less';
import { css } from './customCSS';
import { settings } from './settings/settings';

if (settings.BIGGER_FONTS.isEnabled()) {
    css.addStyle(style);
}

export function renderBiggerFonts() {
    if (settings.BIGGER_FONTS.isEnabled()) {
        css.addVar(`--pp-biggerFonts-Content`, `${settings.BIGGER_FONTS_CONTENT_SIZE.get()}px`);
        css.addVar(`--pp-biggerFonts-Other`, `${settings.BIGGER_FONTS_OTHER_SIZE.get()}px`);
    }
}
