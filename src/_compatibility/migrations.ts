import { FORCE_MIGRATIONS } from '../_debug/debug';
import { notify } from '../modules/toaster';
import { isLowerVersion } from '../utils/tools';

const DATABASE_VERSION: string = `DATABASE_VERSION`;

export class Migration {
    version: string;
    action: Function;
    previous: Migration;

    constructor(version: string, action: Function, previous: Migration = null) {
        this.version = version;
        this.action = action;
        this.previous = previous;
    }

    check() {
        const currentVersion = GM_getValue(DATABASE_VERSION, null);

        if(DEBUG && FORCE_MIGRATIONS) {
            this.previous?.check();
            this.action();
            notify(`Reddit++ was upgraded to ${this.version} (DEBUG)`);
            return;
        }

        if(currentVersion == null) {
            GM_setValue(DATABASE_VERSION, this.version);
            return;
        }

        if (isLowerVersion(currentVersion, this.version)) {
            this.previous?.check();

            this.action();

            GM_setValue(DATABASE_VERSION, this.version);

            notify(`Reddit++ was upgraded to ${this.version}`);
        }
    }
}
