export const NONE_COLOR: string = 'none';
export const CURRENT_COLOR: string = 'currentColor';

class SVGViewBox {
    w: number;
    h: number;
}

class SVGConfig {
    viewBox?: SVGViewBox;
    strokeColor?: string = CURRENT_COLOR;
    fillColor?: string = NONE_COLOR;
}

export function buildSvg(graphic: any, w: number, h: number, config: SVGConfig = {}): Element {
    const handle = document.createElement('div');
    handle.innerHTML = graphic;

    const svg = handle.firstChild as Element;
    svg.setAttribute(`width`, `${w}px`);
    svg.setAttribute(`height`, `${h}px`);

    if (config.viewBox != undefined) {
        svg.setAttribute(`viewBox`, `0 0 ${config.viewBox.w} ${config.viewBox.h}`);
    }
    svg.setAttribute(`fill`, config?.fillColor ?? CURRENT_COLOR);
    svg.setAttribute(`stroke`, config?.strokeColor ?? CURRENT_COLOR);

    return svg;
}
