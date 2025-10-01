import { PROFILE_DYNAMIC_ELEMENTS, profiler_dynamicElements } from '../_debug/debug';

const DYNAMIC_ELEMENT_FREQUENCY: number = 10;

export async function dynamicElement(elementRequest: Function, maxLifetime: number = 0): Promise<Element> {
    return new Promise<Element>(resolve => {
        let element = elementRequest();

        if (element != null) {
            return resolve(element);
        }

        if (DEBUG && PROFILE_DYNAMIC_ELEMENTS) {
            profiler_dynamicElements.dynamicElement++;
        }

        let time = maxLifetime / DYNAMIC_ELEMENT_FREQUENCY;

        const intervalId = setInterval(() => {
            element = elementRequest();
            let forced = false;
            if (maxLifetime > 0) {
                time--;
                if (time < 0) forced = true;
            }

            if (element != null || forced) {
                if (DEBUG && PROFILE_DYNAMIC_ELEMENTS) {
                    profiler_dynamicElements.dynamicElement--;
                }

                clearInterval(intervalId);
                return resolve(element);
            }
        }, DYNAMIC_ELEMENT_FREQUENCY);
    });
}

function safeCheck<T>(fn: () => T): T | null {
    try {
        return fn();
    } catch {
        return null as any;
    }
}

export function observeOnce(root: Element | Document, check: () => Element | null, onFound?: (el: Element) => void): Promise<Element> | void {
    const first = safeCheck(check);
    if (first) {
        if (onFound) {
            onFound(first);
            return;
        }
        return Promise.resolve(first);
    }

    const executor = (resolve?: (el: Element) => void) => {
        const mo = new MutationObserver(() => {
            const hit = safeCheck(check);
            if (hit) {
                mo.disconnect();
                onFound?.(hit);
                resolve?.(hit);
            }
        });
        mo.observe(root instanceof Document ? root : root, { childList: true, subtree: true });
    };

    if (onFound) {
        executor();
        return;
    }
    return new Promise<Element>(executor);
}

interface ObserveAction {
    (elment: HTMLElement): void | boolean;
}

export function observeFor(root: Element, action: ObserveAction, includeChilds: boolean = true) {
    const result = action(root as HTMLElement);

    if (result != undefined && result == true) {
        return;
    }

    if (DEBUG && PROFILE_DYNAMIC_ELEMENTS) {
        profiler_dynamicElements.observeFor++;
    }

    let observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (observer && node instanceof HTMLElement) {
                    const result = action(node);

                    if (result != undefined && result == true) {
                        observer.disconnect();
                        observer = null;

                        if (DEBUG && PROFILE_DYNAMIC_ELEMENTS) {
                            profiler_dynamicElements.observeFor--;
                        }
                    }
                }
            }
        }
    });

    observer.observe(root, { childList: true, subtree: includeChilds });
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
