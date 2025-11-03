import { MAX_LOAD_LAG } from '../../defines';
import { dynamicElement } from '../../utils/tools';
import { renderPost } from '../posts/posts';
import { renderSub } from '../subs/subs';
import { renderFeedButtons } from './feedButtons';

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

    renderSub(main);
    
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
