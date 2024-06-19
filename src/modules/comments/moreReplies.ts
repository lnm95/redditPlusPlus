import { PROFILE_COMMENTS, profiler_comments } from '../../_debug/debug';
import { checkIsRendered } from '../../utils/tools';
import { settings } from '../settings/settings';
import { pp_log } from '../toaster';

export function renderMoreReplies(comment: Element) {
    if (settings.UNWRAP_MORE_REPLIES.isDisabled()) return;

    if (comment.getAttribute(`collapsed`) != null) return;

    for (const moreReplies of comment.childNodes) {
        if (moreReplies instanceof HTMLElement) {
            // loadable replies
            if (moreReplies.matches(`faceplate-partial`) && moreReplies.getAttribute(`src`)?.includes(`/more-comments/`) && !checkIsRendered(moreReplies)) {
                if (DEBUG && PROFILE_COMMENTS) {
                    profiler_comments.moreRepliesRendered++;
                }

                moreReplies.click();

                let refreshTicks = 0;
                const refreshAwaiter = setInterval(() => {
                    refreshTicks++;

                    if (moreReplies.parentNode == null) {
                        clearInterval(refreshAwaiter);
                        setTimeout(() => {
                            renderMoreReplies(comment);
                        }, 50);
                        return;
                    }
                    if (refreshTicks > 60) {
                        clearInterval(refreshAwaiter);
                        pp_log(`Unable load more replies`);

                        if (DEBUG && PROFILE_COMMENTS) {
                            profiler_comments.moreRepliesFailed++;
                        }
                    }
                }, 100);
            }

            // redirectable replies
            if (moreReplies.matches(`a`) && moreReplies.getAttribute(`slot`) == `more-comments-permalink`) {
                moreReplies.querySelector(`.text-secondary-weak`).textContent = `More replies in single thread`;
            }
        }
    }
}
