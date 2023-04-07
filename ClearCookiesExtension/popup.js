document.getElementById('save').addEventListener('click', () => {
    const domains = document.getElementById('domains').value.split('\n').map(line => line.trim());
    chrome.storage.sync.set({ clearCookiesWebsites: domains }, () => {
        window.close();
    });
});

chrome.storage.sync.get(['clearCookiesWebsites'], ({ clearCookiesWebsites }) => {
    document.getElementById('domains').value = clearCookiesWebsites.join('\n');
});
