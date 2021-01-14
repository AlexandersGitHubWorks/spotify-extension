let volumeIcon = document.querySelector('.control-button.volume-bar__icon');

let itWasAdvertisement = false;

let isItAdvertisement, volumeIsOff;

let mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (element) {
        isItAdvertisement = element.target.text.includes('Advertisement');
        volumeIsOff = volumeIcon.className.includes('spoticon-volume-off');

        if (isItAdvertisement && !itWasAdvertisement) {
            if (!volumeIsOff) {
                volumeIcon.click();

                itWasAdvertisement = true;
            }
        }

        if (!isItAdvertisement && itWasAdvertisement) {
            if (volumeIsOff) {
                volumeIcon.click();
            }

            itWasAdvertisement = false;
        }
    });
});

// Starts listening for changes in the root HTML element of the page.
mutationObserver.observe(document.querySelector('title'), {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
});
