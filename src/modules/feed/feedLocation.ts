
export enum FeedLocation {
    Sub,
    Home,
    Popular,
    All,
    Custom
}

const customRegex = new RegExp(`www.reddit.com/user/.*/m/`);

export function getFeedLocation(): FeedLocation {
    if (window.location.href.includes(`?feed=home`) || window.location.href == `https://www.reddit.com/`) return FeedLocation.Home;

    if (window.location.href.includes(`reddit.com/r/popular/`)) return FeedLocation.Popular;

    if (window.location.href.includes(`reddit.com/r/all/`)) return FeedLocation.All;

    if(customRegex.test(window.location.href)) return FeedLocation.Custom;

    return FeedLocation.Sub;
}

export function isOverridableLocation(location:FeedLocation) {
    return location == FeedLocation.Sub || location == FeedLocation.Custom;
}
