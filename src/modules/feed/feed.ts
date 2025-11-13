import { MAX_LOAD_LAG } from '../../defines';
import { Database, DatabaseFactory } from '../../utils/database';
import { dynamicElement } from '../../utils/tools';
import { renderCustomFeed } from '../customFeed/customFeed';
import { renderPost } from '../posts/posts';
import { getCurrentSub, renderSub } from '../subs/subs';
import { renderFeedButtons } from './feedButtons';
import { FeedLocation, getFeedLocation } from './feedLocation';
import { redirectConfigs } from './feedRedirect';
import { FeedSort } from './feedSort';

export class FeedData {
    redirect: boolean;
    defaultSort: FeedSort;
    hiddenSort: Array<FeedSort>;
}

export const defaultSorts = new Map<FeedLocation, FeedSort>([
    [FeedLocation.Home, FeedSort.Best],
    [FeedLocation.Popular, FeedSort.Best],
    [FeedLocation.All, FeedSort.Hot],
    [FeedLocation.Sub, FeedSort.Best],
    [FeedLocation.Custom, FeedSort.Hot]
]);

export const defaultFeedData: Database<FeedData> = new Database<FeedData>(`DEFAULT_FEED_DATA`, {
    factory: function (id: string) {
        const location: FeedLocation = FeedLocation[id as keyof typeof FeedLocation];
        const config = redirectConfigs.get(location);

        return { redirect: !config.isOptional, defaultSort: defaultSorts.get(location), hiddenSort: [] } as FeedData;
    }
});

export const customFeedData: Database<FeedData> = new Database<FeedData>(`CUSTOM_FEED_DATA`, { factory: DatabaseFactory.Null });
export const subsFeedData: Database<FeedData> = new Database<FeedData>(`SUBS_FEED_DATA`, { factory: DatabaseFactory.Null });
export const subsLatestSort: Database<FeedSort> = new Database<FeedSort>(`SUBS_LATEST_SORT`, { factory: DatabaseFactory.Null });

let postObserver: MutationObserver = null;

export async function renderFeed(container: Element) {
    const main = await dynamicElement(() => container.querySelector(`#subgrid-container`));

    // render embedded posts
    main.querySelectorAll(`shreddit-post`).forEach(post => {
        renderPost(post);
    });

    const initialPostsObserver = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node instanceof HTMLElement && node.matches(`shreddit-post`)) {
                    renderPost(node);
                }
            }
        }
    });

    initialPostsObserver.observe(main, { childList: true, subtree: true });

    setTimeout(() => {
        initialPostsObserver.disconnect();
    }, MAX_LOAD_LAG);

    // render loaded posts
    initializePostObserver(main);

    const location = getFeedLocation();
    switch (location) {
        case FeedLocation.Sub:
            renderSub(main);
            break;
        case FeedLocation.Custom:
            renderCustomFeed(main);
            break;
    }

    renderFeedButtons(main);
}

export function initializePostObserver(target: Element) {
    if (postObserver != null) {
        postObserver.disconnect();
    }

    postObserver = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node instanceof HTMLElement) {
                    if (node.matches(`faceplate-batch`)) {
                        node.querySelectorAll(`shreddit-post`).forEach(post => {
                            renderPost(post);
                        });
                    }

                    // load r/all posts
                    if (node.matches(`article`)) {
                        renderPost(node.querySelector(`shreddit-post`));
                    }
                }
            }
        }
    });

    postObserver.observe(target, { childList: true, subtree: true });
}

export function generateFeedHref(location: FeedLocation, sort: FeedSort): string {
    const lowerCaseSort = sort.toString().toLowerCase();

    switch (location) {
        case FeedLocation.Sub:
            return `/r/${getCurrentSub()}/${lowerCaseSort}/`;
        case FeedLocation.Home:
            return `/${lowerCaseSort}/?feed=home`;
        case FeedLocation.Popular:
            return `/r/popular/${lowerCaseSort}/`;
        case FeedLocation.All:
            return `/r/all/${lowerCaseSort}/`;
        case FeedLocation.Custom:
            let split = window.location.href.split(`//www.reddit.com`);
            return split.length >= 2 ? `${split[1]}${lowerCaseSort}/` : `/404/`;
        default:
            return `/404/`;
    }
}
