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

        if (currentVersion == null || isLowerVersion(currentVersion, this.version)) {
            this.previous?.check();

            this.action();

            GM_setValue(DATABASE_VERSION, this.version);

            notify(`Reddit++ was upgraded to ${this.version}`);
        }
    }
}
