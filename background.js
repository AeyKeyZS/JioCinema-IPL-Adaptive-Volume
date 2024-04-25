chrome.runtime.onMessage.addListener((message) => {
    if (message === "changeIconToRunning") {
        chrome.browserAction.setIcon({ path: { "48": "icons/jadapvolr.ico" } });
    } else if (message === "changeIconToNormal") {
        chrome.browserAction.setIcon({ path: { "48": "icons/jadapvol.ico" } });
    }
});

//
// @author https://aeykeyzs.github.io/
///