import { FeedLocation } from "./feedLocation";


export function GetFeeds(location: FeedLocation) : string[] {
    const defaultFeeds = [`Hot`, `New`, `Top`, `Rising`];
        
    if (location == FeedLocation.Home || location == FeedLocation.Popular) {
        return [`Best`].concat(defaultFeeds);
    } else {
        return defaultFeeds;
    }
}