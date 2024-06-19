class CustomCSS {
    rootStylesheet: CSSStyleSheet;
    styleSheets: Array<CSSStyleSheet>;
    styleKeys: Set<string>;
    sources: Array<Document | ShadowRoot>;

    constructor() {
        this.rootStylesheet = new CSSStyleSheet();
        this.styleSheets = [this.rootStylesheet];
        this.styleKeys = new Set<string>();
        this.sources = [];

        this.registry(document);
    }

    registry(source: Document | ShadowRoot) {
        this.sources.push(source);

        for (const styleSheet of this.styleSheets) {
            source.adoptedStyleSheets.push(styleSheet);
        }
    }

    addStyle(style: string, key: string = null) {
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
        this.rootStylesheet.insertRule(rule, 0);
    }

    addVar(name: string, lightValue: string, darkValue: string) {
        this.addRule(`:root.theme-light { ${name}: ${lightValue} !important;}`);
        this.addRule(`:root { ${name}: ${darkValue ?? lightValue};}`);
    }
}

export const css = new CustomCSS();
