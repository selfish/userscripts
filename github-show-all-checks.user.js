// ==UserScript==
// @version      1.0.0
// @name         Script Name
// @description  Do not scroll GH PR Checks
// @namespace    selfish.github.io/userscripts/template
// @copyright    2021+, Selfish (https://github.com/selfish)
// @author       Selfish
// @contributor  Selfish (https://github.com/selfish)


// @icon         https://github.com/favicon.ico
// @homepageURL  https://github.com/selfish/userscripts
// @supportURL   https://github.com/selfish/userscripts/issues
// @updateURL    https://raw.githubusercontent.com/selfish/userscripts/master/github-show-all-checks.user.js
// @license      MIT; https://raw.githubusercontent.com/selfish/userscripts/master/LICENSE

// @match        https://github.com/*/pull/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @run-at       document-start
// @noframes
// ==/UserScript==

/* globals GM_addStyle */

GM_addStyle(`
.merge-status-list {
  max-height: initial !important;
}

.merge-status-list > .merge-status-item {
  padding: 2px 15px !important;
  font-size: smaller !important;
}
`);
