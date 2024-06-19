import { MAX_LOAD_LAG } from '../../defines';
import { dynamicElement } from '../../utils/tools';
import { renderPost } from '../posts/posts';
import { renderSub } from '../subs/subs';
import { notify } from '../toaster';
import { renderFeedButtons } from './feedButtons';

let postObserver: MutationObserver = null;

export async function renderFeed(container: Element) {
    // skip user page
    if (window.location.href.includes(`/user/`)) return;

    const main = await dynamicElement(() => container.querySelector(`#main-content`));

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

    postObserver.observe(main, { childList: true, subtree: true });

    renderSub(main);

    const feedDropdown = await dynamicElement(() => main.querySelector(`shreddit-sort-dropdown`), MAX_LOAD_LAG);

    // skip non feed page
    const isInvalidDropdown = (feedDropdown == null || feedDropdown.getAttribute(`trigger-id`) == `comment-sort-button`) && !window.location.href.includes(`/about/`);

    if (isInvalidDropdown) return;

    renderFeedButtons(main, feedDropdown);
}
