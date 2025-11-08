import { FeedData, subsFeedData } from '../modules/feed/feed';
import { FeedSort } from '../modules/feed/feedSort';
import { Database } from '../utils/database';
import { migration_1_0_0 } from './migration_1_0_0';
import { Migration } from './migrations';


export const migration_1_2_0 = new Migration(`1.2.0`, () => {

    // migrate old sort settings
    const subSettings = new Database<any>(`SUBS_SETTINGS`);

    subSettings.forEach((key, value) => {
        if (value.defaultFeed != undefined && value.defaultFeed in FeedSort) {
            const currentFeedData = subsFeedData.get(key);

            if (currentFeedData == null) {
                subsFeedData.set(key, {
                    redirect: true,
                    defaultSort: value.defaultFeed,
                    hiddenSort: []
                } as FeedData);
            }
        }
    });

    subSettings.wipe();
}, migration_1_0_0);