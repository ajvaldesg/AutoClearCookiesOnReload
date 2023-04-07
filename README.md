# Auto Clear Cookies on Reload for Specific Websites

This userscript automatically clears cookies for specified websites when you reload a page or navigate away from it. It can be used with the [Tampermonkey](https://www.tampermonkey.net/) browser extension.

## Features

- Automatically clears cookies for specified websites
- Works with Tampermonkey on various browsers, including Microsoft Edge, Google Chrome, and Mozilla Firefox

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension for your preferred browser.
2. Click [here](https://github.com/ajvaldesg/AutoClearCookiesOnReload/raw/main/auto_clear_cookies_on_reload.user.js) to install the userscript from the GitHub repository. 
3. Tampermonkey should automatically detect the userscript and prompt you to install it. Click "Install" to confirm.

## Configuration

To specify the websites where the script should run, edit the userscript in the Tampermonkey dashboard and replace the `@match` lines with the desired website domains:

```javascript
// @match        *://*.example.com/*
// @match        *://*.example2.com/*

## Support
If you encounter any issues or have questions, please open an issue on the GitHub repository.