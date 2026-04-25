import { profiler } from '../_debug/debug';
import { DAY_SECONDS, HOUR_SECONDS, secondsToTime } from '../defines';
import { pp_log } from '../modules/toaster';

export interface ICleanupableData {
    timestamp: number;
}

export class DatabaseConfig<T> {
    isCleanupable?: boolean;
    validator?: (originData: T) => boolean;
    loader?: (id: string) => Promise<T>;
    factory?: Function;
}

export class DatabaseFactory {
    static Null: Function = function (id: string): any {
        return null;
    };
    static EmptyObject: Function = function (id: string): any {
        return {};
    };
}

export class Database<T> {
    databaseKey: string;
    refreshKey: string;
    cleanupKey: string;
    isCleanupable: boolean;
    factory: Function;

    // Validate data, return true if data requires update
    validator: ((originData: T) => boolean) | null;
    loader: ((id: string) => Promise<T>) | null;

    data: { [id: string]: T };
    refreshed: number = 0;

    constructor(name: string, config: DatabaseConfig<T> = new DatabaseConfig<T>()) {
        this.databaseKey = name + `_DATABASE`;
        this.refreshKey = name + `_REFRESHED`;
        this.cleanupKey = name + `_CLEANUP`;
        this.isCleanupable = config?.isCleanupable ?? false;
        this.validator = config?.validator ?? null;
        this.loader = config?.loader ?? null;
        this.factory = config?.factory ?? DatabaseFactory.EmptyObject;
        this.data = this.refreshData();

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

    private refreshData(): { [id: string]: T } {
        const lastRefreshed = GM_getValue(this.refreshKey, 0);
        if (!this.data || this.refreshed < lastRefreshed) {
            this.refreshed = lastRefreshed;
            const data = GM_getValue(this.databaseKey, {});

            if (DEBUG) {
                profiler.databases.set(this.databaseKey.replace(`_DATABASE`, ``), Object.entries(data).length);
            }

            return data;
        }

        return this.data;
    }

    get(id: string): T {
        this.data = this.refreshData();

        const raw = this.data[id];

        return (raw == undefined ? this.factory(id) : raw) as T;
    }

    forEach(iterator: (key: string, value: any) => void): void {
        this.data = this.refreshData();

        Object.keys(this.data).forEach(key => {
            iterator(key, this.data[key]);
        });
    }

    async getWithLoader(id: string, onLoaded: ((isLoaded: boolean) => void) | null = null): Promise<T> {
        this.data = this.refreshData();

        const raw = this.data[id];
        let data = (raw == undefined ? this.factory(id) : raw) as T;
        let isLoaded = false;

        if (DEBUG && (!this.loader || !this.validator)) {
            pp_log(`Trying call getWithLoader() in an invalid database. The database must define Loader and Validator.`);
            return data as T;
        }

        if (this.validator!(data) ?? true) {
            data = await this.loader!(id);

            this.set(id, data);

            isLoaded = true;
        }

        onLoaded?.(isLoaded);

        return data as T;
    }

    set(id: string, value: T | null) {
        this.data = this.refreshData();

        if (value == null) {
            delete this.data[id];
        } else {
            if (this.isCleanupable) {
                (value as unknown as ICleanupableData).timestamp = Date.now();
            }

            this.data[id] = value;
            this.refreshed = Date.now();
        }

        GM_setValue(this.databaseKey, this.data);
        GM_setValue(this.refreshKey, this.refreshed);
    }

    wipe() {
        GM_deleteValue(this.databaseKey);
        GM_deleteValue(this.refreshKey);
        GM_deleteValue(this.cleanupKey);
    }
}
