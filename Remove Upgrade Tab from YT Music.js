// ==UserScript==
// @name         Remove Upgrade Tab from YT Music
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Tired of seeing the Upgrade button on music.youtube.com.
// @author       Seth-Revz
// @icon         https://music.youtube.com/favicon.ico
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener('load', function() {
        const columns = document.getElementsByClassName('ytmusic-pivot-bar-renderer');
        columns[3].remove();
    }, false);
})();