export const NONE_COLOR: string = 'none';
export const CURRENT_COLOR: string = 'currentColor';

export class SVGViewBox {
    w: number;
    h: number;
}

export interface SVGConfig {
    viewBox?: SVGViewBox;
    strokeColor?: string;
    fillColor?: string;
}

const builderContainer = document.createElement('div');

export function buildSvg(graphic: any, w: number, h: number, config?: SVGConfig): SVGSVGElement {
    const { viewBox, strokeColor, fillColor } = { viewBox: null, strokeColor: CURRENT_COLOR, fillColor: CURRENT_COLOR, ...config };

    builderContainer.innerHTML = graphic;

    const svg = builderContainer.firstChild as SVGSVGElement;
    svg.setAttribute(`width`, `${w}px`);
    svg.setAttribute(`height`, `${h}px`);

    if (viewBox != null) {
        svg.setAttribute(`viewBox`, `0 0 ${viewBox.w} ${viewBox.h}`);
    }

    svg.setAttribute(`fill`, fillColor);
    svg.setAttribute(`stroke`, strokeColor);

    return svg;
}

export function appendSvg(target: Element, graphic: any, w: number, h: number, config: SVGConfig = {}): SVGSVGElement {
    const svg = buildSvg(graphic, w, h, config);
    target.append(svg);
    return svg;
}

export function prependSvg(target: Element, graphic: any, w: number, h: number, config: SVGConfig = {}): SVGSVGElement {
    const svg = buildSvg(graphic, w, h, config);
    target.prepend(svg);
    return svg;
}
