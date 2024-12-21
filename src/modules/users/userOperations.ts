import { getCookie } from '../../utils/tools';
import { notify } from '../toaster';
import { users } from './users';

class UserOperation {
    key: string;
    enable: string;
    disable: string;
    getInput(state: boolean, accountId: string) {}

    run(state: boolean, userId: string) {
        let userData = users.get(userId);

        const body = {
            csrf_token: getCookie(`csrf_token`),
            operation: this.key,
            variables: {
                input: this.getInput(state, userData.accountId)
            }
        };

        fetch(`https://www.reddit.com/svc/shreddit/graphql`, {
            method: `post`,
            headers: new Headers({
                Accept: `application/json`,
                'Content-Type': `application/json`
            }),
            body: JSON.stringify(body)
        })
            .then(r => r.json())
            .then(result => {
                if (result != null && result.errors?.message) {
                    notify(result.errors.message);
                }
            });
    }
}

class FollowOperation extends UserOperation {
    key: string = `UpdateProfileFollowState`;
    enable: string = `FOLLOWED`;
    disable: string = `NONE`;

    getInput(state: boolean, accountId: string) {
        return {
            accountId: accountId,
            state: state ? this.enable : this.disable
        };
    }
}

class BlockOperation extends UserOperation {
    key: string = `UpdateRedditorBlockState`;
    enable: string = `BLOCKED`;
    disable: string = `NONE`;

    getInput(state: boolean, accountId: string) {
        return {
            redditorId: accountId,
            blockState: state ? this.enable : this.disable
        };
    }
}

export const FOLLOW_OPERATION = new FollowOperation();
export const BLOCK_OPERATION = new BlockOperation();
