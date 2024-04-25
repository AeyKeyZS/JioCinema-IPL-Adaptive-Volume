function UIRunning() {
    document.getElementById("start").setAttribute('hidden', 'true');
    document.getElementById("stop").removeAttribute('hidden');
    document.getElementById("status").removeAttribute('hidden');
}

function UIStopped() {
    document.getElementById("start").removeAttribute('hidden');
    document.getElementById("stop").setAttribute('hidden', 'true');
    document.getElementById("status").setAttribute('hidden', 'true');
}

chrome.storage.local.get(['isJVARunning'], (result) => {
    const isRunning = result.isJVARunning || false; // Handle potential undefined value
    if (isRunning) {
        // Update popup UI to indicate volume control is running
        UIRunning();
    } else {
        // Update popup UI to indicate volume control is stopped
        UIStopped();
    }
});


document.getElementById("start").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, "start");
        UIRunning();
    });
});

document.getElementById("stop").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, "stop");
        UIStopped();
    });
});

//
// @author https://aeykeyzs.github.io/
///