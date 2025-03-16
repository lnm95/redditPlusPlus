import { dynamicElement } from "../../utils/tools";
import { initializePostObserver } from "../feed/feed";
import { renderPost } from "../posts/posts";


export async function renderUserPage(container: Element) {

    const feed = await dynamicElement(() => container.querySelector(`#subgrid-container`)?.querySelector(`shreddit-feed`));

    // render embedded posts
    feed.querySelectorAll(`shreddit-post`).forEach(post => {
        renderPost(post);
    });

    // render loaded posts
    initializePostObserver(feed);
}