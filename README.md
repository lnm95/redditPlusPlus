<div>
<img width="820" src="https://raw.githubusercontent.com/lnm95/redditPlusPlus/main/public/scr/readme.png" alt="Reddit++">
</div>

## User

To usage Reddit++ follow next steps:

1. Install `tampermonkey`, `violentmonkey` or any other extension which used to run userscripts.
2. Go to [script homepage](https://greasyfork.org/ru/scripts/490046-reddit) and click install.

## Developer

[That template](https://github.com/trim21/webpack-userscript-template) is used for project.

Using `Visual Studio Code` is recommended.

Required `Node.js`.

### Getting started

Command `npm i` to install dependencies

### Debug

Command `npm run debug` to start debug process

Add generated script-wrapper `redditPlusPlus.dev.user.js` to userscript manager

Allow local files for userscript manager (extension settings)

While debug process is running the script automatically refreshed in browser

To stop debug process kill active terminal


Command `npm run prod` to assembly production


### Release

Command `npm run release` to build in `/public` and automatically patch version
