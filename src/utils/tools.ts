import { PROFILE_DYNAMIC_ELEMENTS, profiler_dynamicElements } from '../_debug/debug';

export async function observeChildren(element: Element): Promise<Element> {
    if (element.childElementCount > 0) {
        return element;
    }

    return new Promise<Element>(resolve => {
        let triggered = false;
        const observer = new MutationObserver((list, observer) => {
            if (!triggered) {
                triggered = true;

                observer.disconnect();

                resolve(element);
            }
        });

        observer.observe(element, { childList: true });
    });
}

const observeForInstances = new Map<string, MutationObserver>();

export function observeFor(name: string, root: Element, action: (elment: HTMLElement) => void | boolean, includeChilds: boolean = true) {
    if (name && observeForInstances.has(name)) {
        observeForInstances.get(name)!.disconnect();
        observeForInstances.delete(name);

        if (DEBUG && PROFILE_DYNAMIC_ELEMENTS) {
            profiler_dynamicElements.observeFor--;
        }
    }

    const result = action(root as HTMLElement);

    if (result != undefined && result == true) {
        return;
    }

    if (DEBUG && PROFILE_DYNAMIC_ELEMENTS) {
        profiler_dynamicElements.observeFor++;
    }

    let isValid = true;
    const observer = new MutationObserver((mutations, observer) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (isValid && node instanceof HTMLElement) {
                    const result = action(node);

                    if (result != undefined && result == true) {
                        observer.disconnect();
                        isValid = false;

                        if (DEBUG && PROFILE_DYNAMIC_ELEMENTS) {
                            profiler_dynamicElements.observeFor--;
                        }
                    }
                }
            }
        }
    });

    observer.observe(root, { childList: true, subtree: includeChilds });

    if (name) {
        observeForInstances.set(name, observer);
    }
}

export function checkIsRendered(node: Element, key: string = `pp-rendered`) {
    if (node == null || node.getAttribute(key) != null) {
        return true;
    } else {
        node.setAttribute(key, ``);
        return false;
    }
}

export function getCookie(key: string) {
    return document.cookie
        .split(`; `)
        .find(row => row.startsWith(key))
        ?.split(`=`)[1];
}

export function isLowerVersion(a: string, b: string): boolean {
    if (a == b) return false;

    const a_array = a.split(`.`);
    const b_array = b.split(`.`);

    for (const i of [0, 1, 2]) {
        const a_i = parseInt(a_array[i]);
        const b_i = parseInt(b_array[i]);
        if (a_i != b_i) return a_i < b_i;
    }

    return false;
}

export function animate(action: Function, seconds: number, step: number = 10) {
    let ticks = (seconds * 1000) / step;
    let timer = setInterval(() => {
        action();

        ticks--;
        if (ticks < 0) {
            clearInterval(timer);
        }
    }, step);
}

export function pascalCase(input: string): string {
    if (!input) {
        return input;
    }

    return input.charAt(0).toUpperCase() + input.slice(1);
}
