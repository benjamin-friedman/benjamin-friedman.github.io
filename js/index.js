// song
let audio = new Audio('../songs/Paradox.mp3');
audio.play();

// opacity of welcome message
const runTime = () => {
    const welcomeSection = document.getElementById('welcome');
    const opacity = getComputedStyle(welcomeSection).getPropertyValue('opacity'); // starts at 1
    let state = {
        isDecreasing: true,
        opacity: Number(opacity)
    }
    setInterval( function() { cycleOpacity(state) }, 100);
}

const cycleOpacity = (state) => {
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

runTime();