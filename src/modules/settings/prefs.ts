import { Database } from '../../utils/database';

export class PrefsKey {
    static COMMENTS_CURRENT_SORT: string = `COMMENTS_CURRENT_SORT`;
    static SUB_FILTER: string = `SUB_FILTER`;
    static CONTENT_FILTERS: string = `CONTENT_FILTERS`;
}

export const prefs = new Database<object | string>(`PREFS`);
