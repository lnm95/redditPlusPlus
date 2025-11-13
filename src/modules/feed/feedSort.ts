import { FeedLocation } from './feedLocation';

export enum FeedSort {
    Best = `Best`,
    Hot = `Hot`,
    New = `New`,
    Top = `Top`,
    Rising = `Rising`
}

export function getFeedSorts(location: FeedLocation): Array<FeedSort> {
    switch (location) {
        case FeedLocation.All:
        case FeedLocation.Custom:
            return Object.values(FeedSort).filter(sort => sort != FeedSort.Best);
        default:
            return Object.values(FeedSort);
    }
}
