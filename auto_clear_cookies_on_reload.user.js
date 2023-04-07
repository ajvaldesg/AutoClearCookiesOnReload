// ==UserScript==
// @name         Auto Clear Cookies on Reload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically clear cookies on page reload
// @author       Jonathan Valdes
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function clearCookies() {
        let cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
        }
    }

    function checkResourcesLoaded() {
        let resources = window.performance.getEntriesByType('resource');
        let allResourcesLoaded = true;

        for (let i = 0; i < resources.length; i++) {
            if (resources[i].responseEnd === 0) {
                allResourcesLoaded = false;
                break;
            }
        }

        if (allResourcesLoaded) {
            setTimeout(clearCookies, 1000);
        } else {
            setTimeout(checkResourcesLoaded, 100);
        }
    }

    window.addEventListener('load', checkResourcesLoaded);
})();