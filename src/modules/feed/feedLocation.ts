
export enum FeedLocation {
    Sub,
    Home,
    Popular,
    All
}

export function GetFeedLocation(): FeedLocation {
    if (window.location.href.includes(`?feed=home`) || window.location.href == `https://www.reddit.com/`) return FeedLocation.Home;

    if (window.location.href.includes(`reddit.com/r/popular/`)) return FeedLocation.Popular;

    if (window.location.href.includes(`reddit.com/r/all/`)) return FeedLocation.All;

    return FeedLocation.Sub;
}
