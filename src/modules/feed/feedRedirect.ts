import { SettingDropdownProperty, settings } from '../settings/settings';
import { getCurrentSub, subSettings } from '../subs/subs';
import { FeedLocation, GetFeedLocation } from './feedLocation';

function GetDefaultFeedProperty(location: FeedLocation): SettingDropdownProperty {
    switch (location) {
        case FeedLocation.Home:
            return settings.DEFAULT_FEED_HOME;
        case FeedLocation.Popular:
            return settings.DEFAULT_FEED_POPULAR;
        case FeedLocation.All:
            return settings.DEFAULT_FEED_ALL;
        default:
            return settings.DEFAULT_FEED_SUB;
    }
}

export function IsUnsetedFeed() {
    if (window.location.href == `https://www.reddit.com/`) return true;

    if (window.location.href.includes(`/?f=flair_name`)) return false;

    if (window.location.href.includes(`?feed=home`)) {
        return window.location.href.includes(`reddit.com/?feed=home`);
    } else {
        return window.location.href.split(`/r/`)[1].split(`/`).length < 3;
    }
}

export function CheckFeedRedirect(location: FeedLocation, sort: String): boolean {
    if (location == FeedLocation.Sub) {
        const currentSubSettings = subSettings.get(getCurrentSub());

        if (currentSubSettings.defaultSort != undefined) {
            return currentSubSettings.defaultSort == sort;
        }
    }

    const defaultFeedProperty = GetDefaultFeedProperty(location);

    return !defaultFeedProperty.isDefault() && defaultFeedProperty.get() == sort;
}
