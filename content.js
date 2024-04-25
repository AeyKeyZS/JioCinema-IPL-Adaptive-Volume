let isRunning = false; // Flag to control loop
chrome.storage.local.set({ isJVARunning: false }); // Update Chrome storage
chrome.runtime.onMessage.addListener(async function (message) {
    let _Ad = document.getElementsByClassName('mui-style-5kj990-adTag'); // Use querySelector for better performance
    let _Player = document.getElementById("player_video_elem");
    if (message === "start") {
        if (!isRunning) {
            isRunning = true;
            chrome.storage.local.set({ isJVARunning: isRunning }); // Update Chrome storage
            while (isRunning) {
                let rnVol = _Player.volume;
                await new Promise(r => setTimeout(r, 750));
                if (_Ad && _Ad.length && (rnVol != 0.3) && isRunning) {
                    _Player.volume = 0.3;
                } else {
                    await new Promise(r => setTimeout(r, 5000));
                    if (rnVol < 1 && isRunning) {
                        _Player.volume = (_Ad && _Ad.length) ? 0.3 : (_Player.volume == 0.3) ? 0.7 : 1;
                    }
                }
            }
        }
    } else if (message === "stop") {
        if (isRunning) {
            isRunning = false;
            chrome.storage.local.set({ isJVARunning: isRunning }); // Update Chrome storage
            _Player.volume = 1;
            await new Promise(r => setTimeout(r, 5000));
            _Player.volume = 1;
        }
    }
});

//
// @author https://aeykeyzs.github.io/
///