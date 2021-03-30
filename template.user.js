// ==UserScript==
// @version      1.0.0
// @name         TEMPLATE + EXAMPLES
// @description  Just a userscript template to remind me of the tools I created and the meta required.
// @namespace    selfish.github.io/userscripts/github-show-all-checks
// @copyright    2021+, Selfish (https://github.com/selfish)
// @author       Selfish

// @icon         https://github.com/favicon.ico
// @homepageURL  https://github.com/selfish/userscripts
// @supportURL   https://github.com/selfish/userscripts/issues
// @updateURL    https://raw.githubusercontent.com/selfish/userscripts/master/template.user.js
// @license      MIT; https://raw.githubusercontent.com/selfish/userscripts/master/LICENSE

// @match        https://github.com/*/pull/*
// @grant        GM_addStyle
// @run-at       document-start
// @noframes
// ==/UserScript==


/* globals GM_addStyle, GM_getResourceText  */

// Loading external style:
const addCss = fileName => GM_addStyle(GM_getResourceText(fileName))
addCss('https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/css/iziToast.min.css');

// Adding manual style:
GM_addStyle(`
body {
  background-color: red;
}
`);
