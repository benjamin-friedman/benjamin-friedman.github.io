import { musiciansArray } from './data.js';

/*
    Built based on musiciansArray
    {
        'musician1-id' : {
            songs: ['song1', 'song2'...],
            idx: 0
        },
        'musician2-id' : {
            songs: ['song1', 'song2'...],
            idx: 0
        },
        ...
    }
*/
const musiciansObject = {};


const quotesAndAuthors = {
    quotes: [
        'Where words fail, music speaks.',
        'Without music, life would be a mistake.',
        'Music expresses that which cannot be said and on which it is impossible to be silent.',
        'Music is enough for a lifetime, but a lifetime is not enough for music.',
        'Bach is an astronomer discovering the most marvellous stars. Beethoven challenges the universe. I only try to express the soul and heart of man.',
    ],
    authors: [
        'Hans Christian Andersen',
        'Friedrich Nietzsche',
        'Victor Hugo',
        'Rachmaninoff',
        'Chopin'
    ],
    idx: 0,
    displayTime: 15000,             // time to display the quote
    transitionTime: 2500,           // time where opacity is fading
    opacityChangeIntervalTime: 100  // interval time between 1 opacity change
};


// tracks the current song being played
const audioWrapper = {
    audio: new Audio()
};

// tracks the current musician
const currentMusicianWrapper = {
    currentMusician: ''
};

// prevents issues with setTimeout
const songAndMusicianIntervalWrapper = {
    intervalId: 0
};

// tracks the time passed for cycling quotes
const timerWrapper = {
    timePassed: 0
};




/********** function definitions **********/
const initializeInspirationPage = (musiciansArray) => {
    const musiciansSection = document.getElementById('musicians-section');
    musiciansSection.insertAdjacentHTML('afterbegin', '<div class="container" id="musicians-container"></div>');
    const musiciansContainer = document.getElementById('musicians-container');
    let newHTML;

    for (let i = 0; i < musiciansArray.length; i += 3) {
        if (i === musiciansArray.length - 1) {
            newHTML = 
                `
                    <div class="row title-container">
                        <div class="col-4">
                            <h4 id="${musiciansArray[i].id}-title">${musiciansArray[i].name}</h4>
                        </div>
                    </div>
                    <div class="row img-container">
                        <div class="col-4 img-col">
                            <img src="img/musicians/${musiciansArray[i].id}.jpg" class="musician-img" id="${musiciansArray[i].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i].id}-play-button-img">
                        </div>
                    </div>
                    <div class="row song-container">
                        <div class="col-4">
                            <p id="${musiciansArray[i].id}-song"></p>
                        </div>
                    </div>
                `;
        } else if (i === musiciansArray.length - 2) {
            newHTML = 
                `
                    <div class="row title-container">
                        <div class="col-4">
                            <h4 id="${musiciansArray[i].id}-title">${musiciansArray[i].name}</h4>
                        </div>
                        <div class="col-4">
                            <h4 id="${musiciansArray[i + 1].id}-title">${musiciansArray[i + 1].name}</h4>
                        </div>
                    </div>
                    <div class="row img-container">
                        <div class="col-4 img-col">
                            <img src="img/musicians/${musiciansArray[i].id}.jpg" class="musician-img" id="${musiciansArray[i].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i].id}-play-button-img">
                        </div>
                        <div class="col-4 img-col">
                            <img src="img/musicians/${musiciansArray[i + 1].id}.jpg" class="musician-img" id="${musiciansArray[i + 1].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i + 1].id}-play-button-img">
                        </div>
                    </div>
                    <div class="row song-container">
                        <div class="col-4">
                            <p id="${musiciansArray[i].id}-song"></p>
                        </div>
                        <div class="col-4">
                            <p id="${musiciansArray[i + 1].id}-song"></p>
                        </div>
                    </div>
                `;
        } else {
            newHTML = 
                `
                    <div class="row title-container">
                        <div class="col">
                            <h4 id="${musiciansArray[i].id}-title">${musiciansArray[i].name}</h4>
                        </div>
                        <div class="col">
                            <h4 id="${musiciansArray[i + 1].id}-title">${musiciansArray[i + 1].name}</h4>
                        </div>
                        <div class="col">
                            <h4 id="${musiciansArray[i + 2].id}-title">${musiciansArray[i + 2].name}</h4>
                        </div>
                    </div>
                    <div class="row img-container">
                        <div class="col img-col">
                            <img src="img/musicians/${musiciansArray[i].id}.jpg" class="musician-img" id="${musiciansArray[i].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i].id}-play-button-img">
                        </div>
                        <div class="col img-col">
                            <img src="img/musicians/${musiciansArray[i + 1].id}.jpg" class="musician-img" id="${musiciansArray[i + 1].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i + 1].id}-play-button-img">
                        </div>
                        <div class="col img-col">
                            <img src="img/musicians/${musiciansArray[i + 2].id}.jpg" class="musician-img" id="${musiciansArray[i + 2].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i + 2].id}-play-button-img">
                        </div>
                    </div>
                    <div class="row song-container">
                        <div class="col">
                            <p id="${musiciansArray[i].id}-song"></p>
                        </div>
                        <div class="col">
                            <p id="${musiciansArray[i + 1].id}-song"></p>
                        </div>
                        <div class="col">
                            <p id="${musiciansArray[i + 2].id}-song"></p>
                        </div>
                    </div>
                `;
        }
        musiciansContainer.insertAdjacentHTML('beforeend', newHTML);
    }

   document.getElementById('discussion-section').style.visibility= 'visible';
}


const initializeMusiciansObject = (musiciansArray, musiciansObject) => {
    musiciansArray.forEach(musician => {
        musiciansObject[`${musician.id}`] = {
            songs: [],
            idx: 0
        };
        musician.songs.forEach(song => {
            musiciansObject[`${musician.id}`].songs.push(song);
        });
    });
}


const cycleQuotes = (quotesAndAuthors, timerWrapper) => {
    cycleQuotesHelperChangeQuote(quotesAndAuthors);
    timerWrapper.timePassed = 0;
    setInterval(() => {
        if (timerWrapper.timePassed === quotesAndAuthors.displayTime - quotesAndAuthors.transitionTime) {
            cycleQuotesHelperTransition(quotesAndAuthors);
            timerWrapper.timePassed += 100
        }
        else if (timerWrapper.timePassed === quotesAndAuthors.displayTime) {
            cycleQuotesHelperChangeQuote(quotesAndAuthors);
            timerWrapper.timePassed = 0;
        } else {
            timerWrapper.timePassed += 100;
        }
    }, 100);
}


const cycleQuotesHelperChangeQuote = (quotesAndAuthors) => {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    quote.style.opacity = 1;
    author.style.opacity = 1;
    quote.innerHTML = quotesAndAuthors.quotes[quotesAndAuthors.idx];
    author.innerHTML = `- ${quotesAndAuthors.authors[quotesAndAuthors.idx]}`;
    quotesAndAuthors.idx = (quotesAndAuthors.idx < quotesAndAuthors.quotes.length - 1) ? quotesAndAuthors.idx + 1 : 0;
}


const cycleQuotesHelperTransition = (quotesAndAuthors) => {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');

    const opacityChangesCount = quotesAndAuthors.transitionTime / quotesAndAuthors.opacityChangeIntervalTime;
    for (let i = 0; i < opacityChangesCount; ++i) {
        setTimeout(() => {
            quote.style.opacity -= 1 / opacityChangesCount;
            author.style.opacity -= 1 / opacityChangesCount;
        }, (i + 1) * quotesAndAuthors.opacityChangeIntervalTime);
    }  
}


const initializePlaySongEvents = musiciansObject => {
    for (const musician in musiciansObject) {
        document.getElementById(`${musician}-play-button-img`).addEventListener('click', () => {
            playSong(musician, musiciansObject, audioWrapper, currentMusicianWrapper);
            cycleSongAndMusicianOpacity(musician, songAndMusicianIntervalWrapper);
        });
        document.getElementById(`${musician}-play-button-img`).addEventListener('mouseenter', () => {
            document.getElementById(`${musician}-play-button-img`).style.opacity = '50%';
        });
        document.getElementById(`${musician}-play-button-img`).addEventListener('mouseleave', () => {
            document.getElementById(`${musician}-play-button-img`).style.opacity = '0%';
        });       
    }
}


const playSong = (musician, musicians, audioWrapper, currentMusicianWrapper) => {
    // display current muscian's name, hide previous musicians name and song
    if (currentMusicianWrapper.currentMusician !== musician) {
        if (currentMusicianWrapper.currentMusician !== '') {
            document.getElementById(`${currentMusicianWrapper.currentMusician}-title`).style.visibility = 'hidden';
            document.getElementById(`${currentMusicianWrapper.currentMusician}-song`).innerHTML = '';
        }
        currentMusicianWrapper.currentMusician = musician;
        document.getElementById(`${currentMusicianWrapper.currentMusician}-title`).style.visibility = 'visible';
    }

    // display new song name
    const song = musicians[musician].songs[musicians[musician].idx];
    document.getElementById(`${musician}-song`).innerHTML = song;

    const str = `../songs/${musician}/${song}.mp3`;
    musicians[musician].idx = (musicians[musician].idx === musicians[musician].songs.length - 1) ? 0 : musicians[musician].idx + 1;
    audioWrapper.audio.pause();
    audioWrapper.audio = new Audio(str);
    const audioPromise = audioWrapper.audio.play();
    // this is here because of the following error, sometimes play() would fail and an error showed up in the console
    // https://stackoverflow.com/questions/58846042/getting-play-failed-because-the-user-didnt-interact-with-the-document-first
    if (audioPromise !== undefined) {
        audioPromise.then(() => {
            // play was successful
        }).catch(e => {
            // play was not successful, would have to move mouse again
        });
    }
}


const cycleSongAndMusicianOpacity = (musician, songAndMusicianIntervalWrapper) => {
    const title = document.getElementById(`${musician}-title`);
    const song = document.getElementById(`${musician}-song`);
    title.style.opacity = 1;
    song.style.opacity = 1;
    const titleOpacity = getComputedStyle(title).getPropertyValue('opacity'); // starts at 1
    const songOpacity = getComputedStyle(song).getPropertyValue('opacity');   // starts at 1
    const stateTitle = {
        isDecreasing: true,
        opacity: Number(titleOpacity)
    };
    const stateSong = {
        isDecreasing: true,
        opacity: Number(songOpacity)
    };

    if (songAndMusicianIntervalWrapper.intervalId !== 0) {
        clearInterval(songAndMusicianIntervalWrapper.intervalId);
    }
    songAndMusicianIntervalWrapper.intervalId = setInterval(() => {
        cycleSongAndMusicianOpacityHelper(musician, stateTitle, stateSong);
    }, 100);
}


const cycleSongAndMusicianOpacityHelper = (musician, stateTitle, stateSong) => {
    const title = document.getElementById(`${musician}-title`);
    const song = document.getElementById(`${musician}-song`);

    // title
    if (stateTitle.isDecreasing) {
        title.style.opacity = stateTitle.opacity - 0.025;
        stateTitle.opacity -= 0.025;
        if (stateTitle.opacity <= 0.1) { // must be <= and not === b/c javascript floating point math is not good
            stateTitle.isDecreasing = false;
        }
    }
    else {
        title.style.opacity = stateTitle.opacity + 0.025;
        stateTitle.opacity += 0.025;
        if (stateTitle.opacity >= 1) { // must be >= and not === b/c javascript floating point math is not good
            stateTitle.isDecreasing = true;
        }
    }

    // song
    if (stateSong.isDecreasing) {
        song.style.opacity = stateSong.opacity - 0.025;
        stateSong.opacity -= 0.025;
        if (stateSong.opacity <= 0.1) { // must be <= and not === b/c javascript floating point math is not good
            stateSong.isDecreasing = false;
        }
    }
    else {
        song.style.opacity = stateSong.opacity + 0.025;
        stateSong.opacity += 0.025;
        if (stateSong.opacity >= 1) { // must be >= and not === b/c javascript floating point math is not good
            stateSong.isDecreasing = true;
        }
    }
}




/********** function calls **********/
initializeInspirationPage(musiciansArray);
initializeMusiciansObject(musiciansArray, musiciansObject);
initializePlaySongEvents(musiciansObject);
cycleQuotes(quotesAndAuthors, timerWrapper);