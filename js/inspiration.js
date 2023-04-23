let audio = new Audio();

const playOrPauseSong = (song) => {
    audio.pause();
    audio = new Audio(`${song}`);
    audio.play();  
}