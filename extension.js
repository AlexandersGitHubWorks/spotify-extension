let volumeIcon, isItAdvertisement, volumeIsOff, itWasAdvertisement;

let mutationObserver = new MutationObserver(function (mutations) {

    if (volumeIcon == null) {
        volumeIcon = document.querySelector('.control-button.volume-bar__icon-button');
    }

    mutations.forEach(function (element) {
        isItAdvertisement = element.target.text.includes('Advertisement');
        volumeIsOff = (volumeIcon.getAttribute('aria-label') === "Unmute");

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
