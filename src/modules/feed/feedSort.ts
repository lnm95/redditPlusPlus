import { FeedLocation } from "./feedLocation";

export enum FeedSort {
    Best = `Best`,
    Hot = `Hot`,
    New = `New`,
    Top = `Top`,
    Rising = `Rising`
}


export function GetFeedSorts(location: FeedLocation): Array<FeedSort> {
    const sorts = new Array<FeedSort>();

    if (location != FeedLocation.All) sorts.push(FeedSort.Best);

    sorts.push(FeedSort.Hot, FeedSort.New, FeedSort.Top, FeedSort.Rising);

    return sorts;
}
