import { settings } from '../modules/settings/settings';
import { notify, pp_log } from '../modules/toaster';

const tooManyRequestStatus: number = 429;
let tooManyRequestTimeout: number = null;

export async function requestAPI(api: string): Promise<any> {
    try {
        if (tooManyRequestTimeout != null) {
            if (Date.now() > tooManyRequestTimeout) {
                tooManyRequestTimeout = null;
            } else {
                return { status: tooManyRequestStatus, result: null };
            }
        }

        const headers = new Headers({
            Accept: 'text/vnd.reddit.partial+html, text/html;q=0.9',
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        const url = new URL(`https://www.reddit.com${api}`);

        const appName = settings.API_APP.get();

        if (appName != null && appName.length > 0) {
            url.search = new URLSearchParams({ app: appName }).toString();
        }

        const response = await fetch(url, { credentials: 'include', method: `get`, headers: headers });

        if (!response.ok) {
            pp_log(`${api} request failed with code ${response.status} : ${response.statusText}`);

            if (response.status == tooManyRequestStatus) {
                const resetSeconds = parseInt(response.headers.get(`x-ratelimit-reset`));
                tooManyRequestTimeout = Date.now() + resetSeconds * 1000 + 500;

                if (settings.API_WARNINGS.isEnabled()) {
                    notify(`API request hit a limit. Disable "API requests" features or set correct App name or wait ${resetSeconds} seconds`, { seconds: 15 });
                }
            }

            return { status: response.status, result: null };
        }

        const json = await response.json();

        return { status: response.status, result: json };
    } catch (e) {
        pp_log(`${api} request failed with error: ${e}`);

        return { status: `error`, result: null };
    }
}
