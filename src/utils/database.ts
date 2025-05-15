import { profiler } from '../_debug/debug';
import { DAY_SECONDS, HOUR_SECONDS, secondsToTime } from '../defines';

export interface ICleanupableData {
    timestamp: number;
}

// Return true when data need to refresh
interface DataValidator<T> {
    (originData: T): boolean;
}

interface DataLoader<T> {
    (id: string): Promise<T>;
}

export class DatabaseConfig<T> {
    isCleanupable?: boolean;
    validator?: DataValidator<T>;
    loader?: DataLoader<T>;
}

interface WithLoaderResult {
    (isLoaded: boolean): void;
}

export class Database<T> {
    databaseKey: string;
    refreshKey: string;
    cleanupKey: string;
    isCleanupable: boolean;

    validator: DataValidator<T>;
    loader: DataLoader<T>;

    data: { [id: string]: T };
    refreshed: number;

    constructor(name: string, config: DatabaseConfig<T> = new DatabaseConfig<T>()) {
        this.databaseKey = name + `_DATABASE`;
        this.refreshKey = name + `_REFRESHED`;
        this.cleanupKey = name + `_CLEANUP`;
        this.isCleanupable = config?.isCleanupable ?? false;
        this.validator = config?.validator ?? null;
        this.loader = config?.loader ?? null;
        this.refresh();

        // cleanup database
        if (this.isCleanupable && GM_getValue(this.cleanupKey, 0) < Date.now()) {
            const items = Object.entries(this.data).length;
            const timestampLimit = Date.now() - secondsToTime(DAY_SECONDS * (1000 / items));

            this.data = Object.fromEntries(Object.entries(this.data).filter(([key, value]) => (value as ICleanupableData).timestamp > timestampLimit));
            this.refreshed = Date.now();

            GM_setValue(this.databaseKey, this.data);
            GM_setValue(this.refreshKey, this.refreshed);
            GM_setValue(this.cleanupKey, Date.now() + 1000 * HOUR_SECONDS);
        }
    }

    refresh() {
        const lastRefreshed = GM_getValue(this.refreshKey, 0);
        if (this.data == undefined || this.refreshed < lastRefreshed) {
            this.refreshed = lastRefreshed;
            this.data = GM_getValue(this.databaseKey, {});

            if (DEBUG) {
                profiler.databases.set(this.databaseKey.replace(`_DATABASE`, ``), Object.entries(this.data).length);
            }
        }
    }

    get(id: string): T {
        this.refresh();

        const raw = this.data[id];

        return (raw == undefined ? {} : raw) as T;
    }

    async getWithLoader(id: string, onLoaded: WithLoaderResult = null): Promise<T> {
        this.refresh();

        const raw = this.data[id];
        let data = (raw == undefined ? {} : raw) as T;
        let isLoaded = false;

        if (this.validator(data)) {
            data = await this.loader(id);

            this.set(id, data);

            isLoaded = true;
        }

        if (onLoaded != null) {
            onLoaded(isLoaded);
        }

        return data as T;
    }

    set(id: string, value: T) {
        this.refresh();

        if (this.isCleanupable) {
            (value as ICleanupableData).timestamp = Date.now();
        }

        this.data[id] = value;
        this.refreshed = Date.now();

        GM_setValue(this.databaseKey, this.data);
        GM_setValue(this.refreshKey, this.refreshed);
    }
}
