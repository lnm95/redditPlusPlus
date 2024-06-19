import { dynamicElement } from '../utils/tools';

class NotifyConfig {
    time?: number;
    color?: string;
}

export const DEFAULT_NOTIFY_TIME: number = 3000;

export async function notify(message: string, config: NotifyConfig = {}) {
    let toaster = await dynamicElement(() => document.body?.querySelector(`alert-controller`)?.shadowRoot?.querySelector(`toaster-lite`));

    let toast = document.createElement(`faceplate-toast`);
    toast.classList.add(`theme-rpl`);
    if (config.color != undefined) {
        toast.style.backgroundColor = config.color;
    }
    toast.textContent = message;

    toaster.appendChild(toast);

    setTimeout(() => {
        toast.setAttribute(`_fading`, ``);
    }, config?.time ?? DEFAULT_NOTIFY_TIME);
}

export function pp_log(message: string) {
    if (DEBUG) {
        notify(message, { color: `#df911d` });
    }

    console.log(`Reddit++: ${message}`);
}
