import { getCurrentCustomFeed } from '../customFeed/customFeed';
import { getCurrentSub } from '../subs/subs';
import { customFeedData, defaultFeedData, defaultSorts, generateFeedHref, subsFeedData, subsLatestSort } from './feed';
import { FeedLocation, getFeedLocation } from './feedLocation';

export interface RedirectConfig {
    tittle: string;
    descriptionLabel: string;
    isOverridable: boolean;
    isOptional: boolean;
}

export const redirectConfigs = new Map<FeedLocation, RedirectConfig>([
    [FeedLocation.Sub, { tittle: `Subreddits`, descriptionLabel: `Subreddits`, isOverridable: true, isOptional: true }],
    [FeedLocation.Home, { tittle: `Home`, descriptionLabel: `Home`, isOverridable: false, isOptional: false }],
    [FeedLocation.Popular, { tittle: `Popular`, descriptionLabel: `r/Popular`, isOverridable: false, isOptional: false }],
    [FeedLocation.All, { tittle: `All`, descriptionLabel: `r/All`, isOverridable: false, isOptional: false }],
    [FeedLocation.Custom, { tittle: `Custom feeds`, descriptionLabel: `Custom`, isOverridable: true, isOptional: false }]
]);

function isRedirectable() {
    if (window.location.href == `https://www.reddit.com/`) return true;

    if (window.location.href.includes(`/?f=flair_name`)) return false;

    if (window.location.href.includes(`?feed=home`)) {
        return window.location.href.includes(`reddit.com/?feed=home`);
    }

    const subSplit = window.location.href.split(`/r/`);
    if (subSplit.length == 2) {
        return subSplit[1].split(`/`).length <= 2;
    }

    const customSplit = window.location.href.split(`/m/`);
    if (customSplit.length == 2) {
        return customSplit[1].split(`/`).length <= 2;
    }

    return false;
}

export function initializeFeedRedirect() {
    checkFeedRedirect();

    const observeUrlChange = () => {
        let oldHref = document.location.href;
        const body = document.querySelector('body');
        const observer = new MutationObserver(mutations => {
            if (oldHref !== document.location.href) {
                oldHref = document.location.href;

                checkFeedRedirect();
            }
        });
        observer.observe(body, { childList: true, subtree: true });
    };

    window.onload = observeUrlChange;
}

function checkFeedRedirect() {
    if (!isRedirectable()) return;

    const location = getFeedLocation();
    const data = defaultFeedData.get(FeedLocation[location]);
    const defaultSort = defaultSorts.get(location);

    if (location == FeedLocation.Sub) {
        const sub = getCurrentSub();
        const latest = subsLatestSort.get(sub);
        const subData = subsFeedData.get(sub);

        if (subData != null) {
            if (subData.defaultSort == latest || !subData.redirect) return;

            document.location.replace(`${document.location.href}${subData.defaultSort.toString().toLowerCase()}/`);
            return;
        }

        if (!data.redirect) return;

        if (latest != null && data.defaultSort != latest) {
            document.location.replace(`${document.location.href}${subData.defaultSort.toString().toLowerCase()}/`);
            return;
        }
    }

    if (location == FeedLocation.Custom) {
        const custom = getCurrentCustomFeed();
        const customData = customFeedData.get(custom);

        if (customData != null) {
            if (customData.defaultSort == defaultSort || !customData.redirect) return;

            document.location.replace(`${document.location.href}${customData.defaultSort.toString().toLowerCase()}/`);
            return;
        }
    }

    if (data.defaultSort == defaultSort) return;

    document.location.replace(`https://www.reddit.com${generateFeedHref(location, data.defaultSort)}`);
}
