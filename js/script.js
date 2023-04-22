let audio = new Audio('songs/Paradox.mp3');
audio.play();

const playOrPauseSong = (song) => {
    if (audio.paused) {
        audio.pause();
        audio = new Audio(`${song}`);
        audio.play();
    }
    else {
       audio.pause();
    }    
}