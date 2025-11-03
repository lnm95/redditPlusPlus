<div>
<img width="820" src="https://raw.githubusercontent.com/lnm95/redditPlusPlus/main/public/scr/readme.png" alt="Reddit++">
</div>

## User

To usage Reddit++ follow next steps:

1. Install `tampermonkey`, `violentmonkey` or any other userscript manager.
2. Go to [script homepage](https://greasyfork.org/en/scripts/490046-reddit) and click install.

## Developer

[That template](https://github.com/trim21/webpack-userscript-template) is used for project.

Using `Visual Studio Code` is recommended.

### Getting started

Required `Node.js`.

Command `npm i` to install dependencies

### Debug

Command `npm run debug` to start debug process

Add generated script-wrapper `redditPlusPlus.dev.user.js` from `/dist` to userscript manager

Allow local files for userscript manager (extesions > details > allow access to file URLs).

The latest version of Chrome browser requires allowing Eval (Tampermonkey Dashboard > Settings > Modify existing content security policy (CSP) headers > remove entirely)

While debug process is running the script automatically refresh in browser

To stop debug process kill active terminal

### Preview

Command `npm run preview` to build preview of production in `/dist`

### Release

Command `npm run release` to build production in `/public` and automatically patch version

### Known issues

Debug process periodically gones to memory leak that's crash browser.

Intersection observer cause poor performance in posts with a lot of comments.
