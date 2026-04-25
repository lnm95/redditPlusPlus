import { pp_log } from './toaster';

export class CustomCSS {
    styleSheets: Array<CSSStyleSheet>;
    styleKeys: Set<string>;
    sources: Array<Document | ShadowRoot>;
    rulesStyleSheet!: CSSStyleSheet;

    constructor() {
        this.styleSheets = [];
        this.styleKeys = new Set<string>();
        this.sources = [];
    }

    register(source: Document | ShadowRoot | null | undefined) {
        if (!source) {
            pp_log('Trying register an invalid source in CustomCSS');
            return;
        }

        this.sources.push(source);

        for (const styleSheet of this.styleSheets) {
            source.adoptedStyleSheets.push(styleSheet);
        }
    }

    addStyle(style: string, key: string | null = null) {
        if (key != null) {
            if (this.styleKeys.has(key)) return;

            this.styleKeys.add(key);
        }

        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(style);

        this.styleSheets.push(styleSheet);

        for (const source of this.sources) {
            source.adoptedStyleSheets.push(styleSheet);
        }
    }

    addRule(rule: string) {
        if (!this.rulesStyleSheet) {
            this.rulesStyleSheet = new CSSStyleSheet();

            this.styleSheets.push(this.rulesStyleSheet);

            for (const source of this.sources) {
                source.adoptedStyleSheets.push(this.rulesStyleSheet);
            }
        }

        this.rulesStyleSheet.insertRule(rule, 0);
    }

    addVar(name: string, lightValue: string, darkValue: string | null = null) {
        this.addRule(`:root.theme-light { ${name}: ${lightValue} !important;}`);
        this.addRule(`:root { ${name}: ${darkValue ?? lightValue};}`);
    }
}

export const css = new CustomCSS();

css.register(document);
