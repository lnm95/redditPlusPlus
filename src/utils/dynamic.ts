import { PROFILE_DYNAMIC_ELEMENTS, profiler_dynamicElements } from '../_debug/debug';
import { pp_log } from '../modules/toaster';

const MAX_LIFETIME_MS: number = 20000;
const POOLING_MS: number = 10;

class DynamicRequest {
    requestRO!: Function;
    process!: (expired: boolean) => boolean;
    ticksRemaining!: number;
    logExpired!: boolean;
}

const requests: Array<DynamicRequest> = [];

let isWorking: boolean = false;

// request must be exception free
export async function dynamic<T>(request: () => T | null | undefined, maxLifetime: number = MAX_LIFETIME_MS): Promise<T | null> {
    let result = request() as T;

    if (result != null && result != undefined) {
        return result;
    }

    return new Promise<T | null>(resolve => {
        const dynamic = new DynamicRequest();
        dynamic.logExpired = maxLifetime >= MAX_LIFETIME_MS;
        dynamic.ticksRemaining = maxLifetime / POOLING_MS;
        dynamic.requestRO = request;
        dynamic.process = (expired: boolean) => {
            const value = request();

            if ((value != null && value != undefined) || expired) {
                resolve(value != undefined ? value : null);
                return true;
            }

            return false;
        };

        requests.push(dynamic);

        if (!isWorking) runWorker();

        if (DEBUG && PROFILE_DYNAMIC_ELEMENTS) {
            profiler_dynamicElements.dynamicRequests++;
        }
    });
}

function runWorker() {
    isWorking = true;

    let accumulatedTicks: number = 0;
    let idleTicks: number = 0;
    let processing: boolean = false;

    const workerId = setInterval(() => {
        if (processing) {
            accumulatedTicks++;
            return;
        }

        if (requests.length > 0) {
            processing = true;
            idleTicks = 0;

            const currentTicks = 1 + accumulatedTicks;

            let write = 0;
            let read = 0;

            function process(deadline: IdleDeadline) {
                while (read < requests.length && deadline.timeRemaining() > 0) {
                    const dynamic = requests[read++];

                    dynamic.ticksRemaining -= currentTicks;
                    const expired = dynamic.ticksRemaining <= 0;

                    if (dynamic.process(expired)) {
                        if (DEBUG && PROFILE_DYNAMIC_ELEMENTS) {
                            profiler_dynamicElements.dynamicRequests--;
                        }

                        if (expired && dynamic.logExpired) {
                            pp_log(`Dynamic request expired: ${dynamic.requestRO.toString()}`);
                        }
                    } else {
                        requests[write++] = dynamic;
                    }
                }

                if (read < requests.length) {
                    requestIdleCallback(process);
                } else {
                    requests.length = write;
                    processing = false;
                }
            }

            requestIdleCallback(process);
        } else {
            idleTicks++;

            if (idleTicks > 50) {
                clearInterval(workerId);
                isWorking = false;
            }
        }

        accumulatedTicks = 0;
    }, POOLING_MS);
}
