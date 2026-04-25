# Reddit++

A script that enhances the new Reddit interface and provides flexible customization options.

<details>
    <summary>🗨️ Feed page</summary>
    <img width="820" src="https://raw.githubusercontent.com/lnm95/redditPlusPlus/main/public/screenshots/readme/feed.png" alt="Feed page">
</details>

<details>
    <summary>💬 Comments page</summary>
    <img width="820" src="https://raw.githubusercontent.com/lnm95/redditPlusPlus/main/public/screenshots/readme/comments.png" alt="Comments page">
</details>

<details>
    <summary>⚙️ The script settings</summary>
    <img width="820" src="https://raw.githubusercontent.com/lnm95/redditPlusPlus/main/public/screenshots/readme/settings.png" alt="The script settings">
</details>

## Usage

1. Install `Tampermonkey`, `Violentmonkey` or any other userscript manager.
2. Go to [the script homepage](https://greasyfork.org/en/scripts/490046-reddit) and click **Install**.

## Development

[That template](https://github.com/trim21/webpack-userscript-template) is used for the project.

### Getting started

Using `Visual Studio Code` is recommended.

Required `Node.js`.

Run `npm i` to install dependencies.

### Debug

Run `npm run debug` to start debug process.

Add generated script wrapper `redditPlusPlus.dev.user.js` from `/dist` to userscript manager.

Allow local files for userscript manager (extensions > details > allow access to file URLs).

Chrome requires allowing Eval (Tampermonkey Dashboard > Settings > Modify existing content security policy (CSP) headers > remove entirely).

While the debug process is running, the script will automatically refresh in the browser.

To stop the debug process, kill the active terminal.

### Build

Run `npm run build` to build the release version in `/dist`.

### Contributing

Contributions are welcome. Feel free to open issues or submit pull requests.
