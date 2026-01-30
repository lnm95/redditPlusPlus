import { appendElement, buildElement, prependElement } from '../../utils/element';
import { dynamicElement } from '../../utils/tools';
import { initializePostObserver } from '../feed/feed';
import { renderPost } from '../posts/posts';
import { getCurrentUser } from './users';
import style from './userPage.less';
import { css } from '../customCSS';
import { renderUIButton } from '../../utils/UI/button';

css.addStyle(style);

export async function renderUserPage(container: Element) {
    renderUserSearchPosts(container);

    const feed = await dynamicElement(() => container.querySelector(`#subgrid-container`)?.querySelector(`shreddit-feed`));

    // render embedded posts
    feed.querySelectorAll(`shreddit-post`).forEach(post => {
        renderPost(post);
    });

    // render loaded posts
    initializePostObserver(feed);
}

async function renderUserSearchPosts(container: Element) {
    const containerElement = (await dynamicElement(() => container.querySelector(`#subgrid-container`))) as HTMLElement;

    const mainContent = containerElement.querySelector(`[data-testid="profile-main"]`);
    const privateUserContainer = buildElement(`div`, `pp_user_hiddenPostsMessage`);
    mainContent.after(privateUserContainer);

    const currentUser = getCurrentUser();
    const searchPostsUrl = `/user/${currentUser}/search/?q=&sort=new`;
    const searchCommentsUrl = `/user/${currentUser}/search/?q=&sort=new&type=comments`;

    renderUIButton(
        privateUserContainer,
        `Search User's Posts`,
        () => {
            window.location.href = searchPostsUrl;
        },
        {
            variant: 'secondary',
            size: 'small'
        }
    );

    renderUIButton(
        privateUserContainer,
        `Search User's Comments`,
        () => {
            window.location.href = searchCommentsUrl;
        },
        {
            variant: 'secondary',
            size: 'small'
        }
    );
}
