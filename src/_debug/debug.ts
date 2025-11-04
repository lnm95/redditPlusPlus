import { css } from '../modules/customCSS';
import { notify } from '../modules/toaster';
import { dynamicElement } from '../utils/tools';
import { appendElement } from '../utils/element';
import style from './debug.less';

class DebugProfiler {
    box: HTMLElement = null;
    stats: Array<object> = [];

    databases: Map<string, number> = new Map<string, number>();

    constructor() {
        setTimeout(() => {
            if (this.stats.length > 0 && window.location == window.parent.location) {
                this.render();
            }
        }, 1000);
    }

    async render() {
        if(!SHOW_PROFILER) return;

        const documentBody = await dynamicElement(() => document.body);

        const container = appendElement(documentBody, `div`, `pp_debug_profilerContainer`);
        this.box = appendElement(container, `div`, `pp_debug_profiler`);

        setInterval(() => {
            let data: string = `Reddit++ Profiler\r\n`;
            for (const stat of this.stats) {
                data += `---${stat?.constructor?.name ?? `undefined`}---\r\n`;

                for (const [key, value] of Object.entries(stat)) {
                    data += `${key}: ${value}\r\n`;
                }
            }

            if (this.databases.size > 0) {
                data += `---Databases---\r\n`;

                for (const [key, value] of this.databases) {
                    data += `${key}: ${value}\r\n`;
                }
            }

            this.box.textContent = data;
        }, 500);
    }
}

class DynamicElementStat {
    dynamicElement: number = 0;
    observeFor: number = 0;
}

class CommentsStat {
    observedRoots: number = 0;
    observedChilds: number = 0;
    moreRepliesRendered: number = 0;
    moreRepliesFailed: number = 0;
    userDataLoading: number = 0;
    userDataFailed: number = 0;
}

css.addStyle(style);

if (!DEBUG) {
    notify(`DEBUG IN PROD, THAT'S INVALID BEHAVIOUR. USE "DEBUG" KEYWORD TO PREVENT IT`, { seconds: 9999, color: `#ff0000` });
}

export const SHOW_RENDERED_POSTS: boolean = false;
export const SHOW_RENDERED_COMMENTS: boolean = false;

export const SHOW_LOGS: boolean = true;
export const SHOW_PROFILER: boolean = true;

export const PROFILE_DYNAMIC_ELEMENTS: boolean = true;
export const PROFILE_USER_DATA: boolean = true;

export const profiler = new DebugProfiler();

export const profiler_dynamicElements = new DynamicElementStat();
export const profiler_comments = new CommentsStat();

if (PROFILE_DYNAMIC_ELEMENTS) {
    profiler.stats.push(profiler_dynamicElements);
}

if (PROFILE_USER_DATA) {
    profiler.stats.push(profiler_comments);
}
