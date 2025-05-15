export function appendElement(target: Element, name: string, classes: string | Array<string> = null): HTMLElement {
    const el = buildElement(name, classes);
    target.append(el);
    return el;
}
export function prependElement(target: Element, name: string, classes: string | Array<string> = null): HTMLElement {
    const el = buildElement(name, classes);
    target.prepend(el);
    return el;
}
export function buildElement(name: string, classes: string | Array<string> = null): HTMLElement {
    const el = document.createElement(name);

    if (classes != null) {
        if (typeof classes === `string` && classes) {
            el.classList.add(classes);
        } else {
            for (const c of classes) {
                el.classList.add(c);
            }
        }
    }

    return el;
}
