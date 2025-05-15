## Reddit API

Some features (like showing a user's karma in comments) require requests to the reddit API. But default unauthorized requests have a limit (100 requests per 10 minutes). According to that, all dependent features are disabled by default.

You may:

1. Keep features disabled.
2. Enable features and deal with requests limit.
3. As an experimental way, you probably should install [RES](https://redditenhancementsuite.com/) and then in script settings set the App name to `res` to mimicate. I can't recommend this way as default, but it just works. If you know how to get a unique app name for the script, please let me know.
