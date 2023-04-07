function initializeStorage() {
    chrome.storage.sync.get(['clearCookiesWebsites'], (result) => {
        console.log("Initial storage data:", result);
        if (!result.clearCookiesWebsites) {
            chrome.storage.sync.set({ clearCookiesWebsites: [] }, () => {
                console.log("Storage initialized with empty array.");
            });
        } else {
            console.log("Storage already initialized.");
        }
    });
}

initializeStorage();

function clearCookies(url, clearCookiesWebsites) {
    if (clearCookiesWebsites && clearCookiesWebsites.some(domain => url.includes(domain))) {
        chrome.cookies.getAll({ url }).then(cookies => {
            cookies.forEach(cookie => {
                chrome.cookies.remove({ url, name: cookie.name });
            });
        });
    }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.storage.sync.get(['clearCookiesWebsites'], (result) => {
            console.log("Retrieved data for clearCookiesWebsites:", result.clearCookiesWebsites);
            clearCookies(tab.url, result.clearCookiesWebsites);
        });
    }
});
