## Reddit API

Some features (such as displaying a user's karma in comments) require requests to the Reddit API. However, unauthenticated requests are rate-limited (100 requests per 10 minutes). Because of this, all dependent features are disabled by default.

You have a few options:

1. Keep these features disabled.
2. Enable them and accept the rate limits.
3. As an experimental workaround, you can install [RES](https://redditenhancementsuite.com/) and set the App name to `res` in the script settings to mimic its requests. This method is not recommended as a default solution, but it just works.

If you know a better way to obtain a unique app name for the script, please let me know.
