// ==UserScript==
// @version      1.0.0
// @name         Zoom Killer
// @description  Kill Zoom.us leftover page after starting a meeting
// @namespace    selfish.github.io/userscripts/zoom/killer
// @copyright    2021+, Selfish (https://github.com/selfish)
// @author       Selfish

// @icon         https://st1.zoom.us/zoom.ico
// @homepageURL  https://github.com/selfish/userscripts
// @supportURL   https://github.com/selfish/userscripts/issues
// @updateURL    https://raw.githubusercontent.com/selfish/userscripts/master/zoom-killer.user.js
// @license      MIT; https://raw.githubusercontent.com/selfish/userscripts/master/LICENSE

// @match        https://zoom.us/j/*
// @match        https://*.zoom.us/j/*
// @grant        window.close
// @noframes
// ==/UserScript==

(() => setTimeout(() => open(location, '_self').close(), 5000))();
