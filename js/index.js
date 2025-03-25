/********** function definitions **********/
// opacity of welcome message
const cycleOpacity = () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const opacity = getComputedStyle(welcomeContainer).getPropertyValue('opacity'); // starts at 1
    let state = {
        isDecreasing: true,
        opacity: Number(opacity)
    }
    setInterval( function() { cycleOpacityHelper(state) }, 100);
}


const cycleOpacityHelper = (state) => {
    const welcomeContainer = document.getElementById('welcome-container');
    if (state.isDecreasing) {
        welcomeContainer.style.opacity = state.opacity - 0.025;
        state.opacity -= 0.025;
        if (state.opacity <= 0.1) { // must be <= and not === b/c javascript floating point math is not good
            state.isDecreasing = false;
        }
    } else {
        welcomeContainer.style.opacity = state.opacity + 0.025;
        state.opacity += 0.025;
        if (state.opacity >= 1) { // must be >= and not === b/c javascript floating point math is not good
            state.isDecreasing = true;
        }
    }
}


const initializeHereForBackgroundSongEvents = () => {
    document.getElementById('here-for-background-song').addEventListener('mouseenter', () => {
        document.getElementById('here-for-background-song').style.opacity = 0.5;
    });
    document.getElementById('here-for-background-song').addEventListener('mouseleave', () => {
        document.getElementById('here-for-background-song').style.opacity = 1;
    });  

    // song - autoplay on document loading is disabled in newest browser versions, must use an event handler
    document.getElementById('here-for-background-song').addEventListener('click', () => {
        const audio = document.getElementById('background-song');
        if (audio.paused) {
            const audioPromise = audio.play();
            // this is here because of the following error, sometimes play() would fail and an error showed up in the console
            // https://stackoverflow.com/questions/58846042/getting-play-failed-because-the-user-didnt-interact-with-the-document-first
            if (audioPromise !== undefined) {
                audioPromise.then( () => {
                    // play was successful
                }).catch(e => {
                    // play was not successful, would have to move mouse again
                })
            }
        }
    });
}




/********** function calls **********/
initializeHereForBackgroundSongEvents();
cycleOpacity();