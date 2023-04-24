// opacity of welcome message
const cycleOpacity = () => {
    const welcomeSection = document.getElementById('welcome');
    const opacity = getComputedStyle(welcomeSection).getPropertyValue('opacity'); // starts at 1
    let state = {
        isDecreasing: true,
        opacity: Number(opacity)
    }
    setInterval( function() { cycleOpacityHelper(state) }, 100);
}

const cycleOpacityHelper = (state) => {
    const welcomeSection = document.getElementById('welcome');
    if (state.isDecreasing) {
        welcomeSection.style.opacity = state.opacity - 0.025;
        state.opacity -= 0.025;
        if (state.opacity <= 0.1) { // must be <= and not == b/c javascript floating point math is not good
            state.isDecreasing = false;
        }
    }
    else {
        welcomeSection.style.opacity = state.opacity + 0.025;
        state.opacity += 0.025;
        if (state.opacity >= 1) { // must be >= and not == b/c javascript floating point math is not good
            state.isDecreasing = true;
        }
    }
}

// song - autoplay is disabled in newest browser versions, must use an event handler
let hasBeenPlayed= false;
document.addEventListener('mouseover', () => {
    if (!hasBeenPlayed) {
        const song = document.getElementById('background-song');
        song.play();
        hasBeenPlayed = false;
    }
});
cycleOpacity();