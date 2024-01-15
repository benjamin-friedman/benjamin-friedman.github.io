import { musiciansArray, quotes } from './data.js';


/*
    Built based on musiciansArray, used for playing the songs.
    songNames stores the real name of the song
    songFileNames stores the name of the file of the song
    {
        'musician1-id' : {
            songNames: ['songName1', 'songName2'...],
            songFileNames: ['songFileName1', 'songFileName2'...],
            idx: 0
        },
        'musician2-id' : {
            songNames: ['songName1', 'songName2'...],
            songFileNames: ['songFileName1', 'songFileName2'...],
            idx: 0
        },
        ...
    }
*/
const musiciansObject = {};

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
    // Even though opacity should default to 1 upon loading, the value is being recognized as 0 even though it's visible on the screen.
    // Unsure why this is. Regardless, this causes the opacity to immediately go to 0 during the first time cycling the quotes so it has to be to 1 here.
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    quote.style.opacity = 1;
    author.style.opacity = 1;

    const musiciansContainer = document.getElementById('musicians-container');
    let newHTML;

    // musicians and photos
    for (let i = 0; i < musiciansArray.length; i += 3) {
        if (i === musiciansArray.length - 1) {
            newHTML = 
                `
                    <div class="row title-container">
                        <div class="col-4">
                            <h4 id="${musiciansArray[i].id}-title">${musiciansArray[i].name}</h4>
                        </div>
                    </div>
                    <div class="row">
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
                    <div class="row">
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
                    <div class="row">
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


    // visibility
    document.getElementById('discussion-container').style.visibility= 'visible';


    // song listing 
    const songListingContainer = document.getElementById('song-listing-container');
    songListingContainer.insertAdjacentHTML('beforeend', '<h4>Song Listing</h4>');
    songListingContainer.insertAdjacentHTML('beforeend', '<div class="container" id="song-listing-musicians-and-songs-list-container"></div>');
    const songgListingMusiciansAndSongsListContainer = document.getElementById('song-listing-musicians-and-songs-list-container');
    for (let i = 0; i < musiciansArray.length; ++i) {
        newHTML = '<div class="song-listing-musician-and-songs-container">';
        newHTML += `<h5>${musiciansArray[i].name}</h5>`;
        for (let j = 0; j < musiciansArray[i].songs.length; ++j) {
            newHTML += '<div class="row song-listing-song-container">';
            newHTML += `<div class="col-4">${musiciansArray[i].songs[j].name}</div>`;
            if (musiciansArray[i].songs[j].soundtrack) { // from a movie or video game soundtrack
                newHTML += `<div class="col-4">Soundtrack: ${musiciansArray[i].songs[j].soundtrack}</div>`;
            }
            if (musiciansArray[i].songs[j].recordingMusician) { // the musician in the recording of the song, mostly for classical music
                newHTML += `<div class="col-4">Recording: ${musiciansArray[i].songs[j].recordingMusician}</div>`;
            }
            if (musiciansArray[i].songs[j].contributors) { // other composers contributed to the song
                newHTML += `<div class="col-3">Contributors: ${musiciansArray[i].songs[j].contributors}</div>`;
            }
            if (musiciansArray[i].songs[j].composer) { // the song is an arrangement made by the musician in the picture, list the composer of the original
                newHTML += `<div class="col-3">Composer: ${musiciansArray[i].songs[j].composer}</div>`;
            }
            if (musiciansArray[i].songs[j].arrangement) { // the song is an arrangement not made by the musician in the picture or the recording musician
                newHTML += `<div class="col-3">Arrangement: ${musiciansArray[i].songs[j].arrangement}</div>`;
            }
            newHTML += '</div>'; // end song-listing-song-container
        }
        newHTML += '</div>'; // end song-listing-musician-and-songs-container
        songgListingMusiciansAndSongsListContainer.insertAdjacentHTML('beforeend', newHTML);
    }
}


const initializeMusiciansObject = (musiciansArray, musiciansObject) => {
    musiciansArray.forEach(musician => {
        musiciansObject[`${musician.id}`] = {
            songNames: [],
            songFileNames: [],
            idx: 0
        };
        musician.songs.forEach(song => {
            musiciansObject[`${musician.id}`].songNames.push(song.name);
            musiciansObject[`${musician.id}`].songFileNames.push(song.fileName);
        });
    });
}


const cycleQuotes = (quotes, timerWrapper) => {
    cycleQuotesHelperChangeQuote(quotes);
    timerWrapper.timePassed = 0;
    setInterval(() => {
        if (timerWrapper.timePassed === quotes.displayTime - quotes.transitionTime) {
            cycleQuotesHelperTransition(quotes);
            timerWrapper.timePassed += 100;
        } else if (timerWrapper.timePassed === quotes.displayTime) {
            cycleQuotesHelperChangeQuote(quotes);
            timerWrapper.timePassed = 0;
        } else {
            timerWrapper.timePassed += 100;
        }
    }, 100);
}


const cycleQuotesHelperChangeQuote = (quotes) => {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    quote.innerHTML = quotes.quoteAndAuthor[quotes.idx].quote;
    author.innerHTML = `- ${quotes.quoteAndAuthor[quotes.idx].author}`;
    quotes.idx = (quotes.idx < quotes.quoteAndAuthor.length - 1) ? quotes.idx + 1 : 0;
    quote.style.opacity = 1;
    author.style.opacity = 1;
}


const cycleQuotesHelperTransition = (quotes) => {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');

    const opacityChangesCount = quotes.transitionTime / quotes.opacityChangeIntervalTime;
    for (let i = 0; i < opacityChangesCount; ++i) { 
        setTimeout(() => {
            // Conceptually, this if statement shouldn't be necessary, but for reasons not known it was found it caused issues on certain browsers (chrome).
            // The last change in the opacity in the setTimeout function call would actually happen after the opacity is set to 1 in the cycleQuotesHelperChangeQuote function above.
            // The easiest solution was to just restrict the opacity change to happen in all but the last iteration of the loop.
            // As a result, the opacity will never actually reach 0 but will reach the value right before it hits 0. For example, if it gets decremented by 0.04 every time, the range of opacities would be [1, 0.96...0.04]
            // In that sense, there are actually "opacityChangesCount - 1" opacity changes.
            // This difference is so negligible it isn't noticeable on the UI.
            if (i < opacityChangesCount - 1) {
                quote.style.opacity = (quote.style.opacity - (1 / (opacityChangesCount)) < 0) ? 0 : quote.style.opacity - (1 / (opacityChangesCount));
                author.style.opacity = (author.style.opacity - (1 / (opacityChangesCount)) < 0) ? 0 : author.style.opacity - (1 / (opacityChangesCount));
            }
        }, (i + 1) * quotes.opacityChangeIntervalTime);
    }  
}


const initializePlaySongEvents = (musiciansObject) => {
    for (const musician in musiciansObject) {
        document.getElementById(`${musician}-play-button-img`).addEventListener('click', () => {
            playSong(musician, musiciansObject, audioWrapper, currentMusicianWrapper);
            cycleSongAndMusicianOpacity(musician, songAndMusicianIntervalWrapper);
        });
        document.getElementById(`${musician}-play-button-img`).addEventListener('mouseenter', () => {
            document.getElementById(`${musician}-play-button-img`).style.opacity = 0.5;
        });
        document.getElementById(`${musician}-play-button-img`).addEventListener('mouseleave', () => {
            document.getElementById(`${musician}-play-button-img`).style.opacity = 0;
        });       
    }
}


const playSong = (musician, musiciansObject, audioWrapper, currentMusicianWrapper) => {
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
    const songName = musiciansObject[musician].songNames[musiciansObject[musician].idx];
    const songFileName = musiciansObject[musician].songFileNames[musiciansObject[musician].idx];
    document.getElementById(`${musician}-song`).innerHTML = songName;

    const songFilePath = `../songs/${musician}/${songFileName}.mp3`;
    musiciansObject[musician].idx = (musiciansObject[musician].idx === musiciansObject[musician].songNames.length - 1) ? 0 : musiciansObject[musician].idx + 1;
    audioWrapper.audio.pause();
    audioWrapper.audio = new Audio(songFilePath);
    const audioPromise = audioWrapper.audio.play();
    // this is here because of the following error, sometimes play() would fail and an error showed up in the console
    // https://stackoverflow.com/questions/58846042/getting-play-failed-because-the-user-didnt-interact-with-the-document-first
    if (audioPromise !== undefined) {
        audioPromise.then(() => {
            // play was successful
        }).catch(e => {
            // play was not successful
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
    } else {
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
    } else {
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
cycleQuotes(quotes, timerWrapper);