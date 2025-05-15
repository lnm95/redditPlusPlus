import { dynamicElement } from '../utils/tools';

export interface NotifyConfig {
    seconds?: number;
    color?: string;
}

export async function notify(message: string, config?: NotifyConfig) {
    const { seconds, color } = { seconds: 3, color: null, ...config };

    let toaster = await dynamicElement(() => document.body?.querySelector(`alert-controller`)?.shadowRoot?.querySelector(`toaster-lite`));

    let toast = document.createElement(`faceplate-toast`);
    toast.classList.add(`theme-rpl`);
    if (color != null) {
        toast.style.backgroundColor = color;
    }
    toast.textContent = message;

    toaster.appendChild(toast);

    setTimeout(() => {
        toast.setAttribute(`_fading`, ``);
    }, seconds * 1000);
}

export function pp_log(message: string) {
    if (DEBUG) {
        notify(message, { seconds: 6, color: `#df911d` });
    }

    console.log(`Reddit++: ${message}`);
}
