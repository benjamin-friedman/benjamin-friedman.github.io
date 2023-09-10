import { writings } from './data.js';


// tracks the current writing being played
const audioWrapper = {
    audio: new Audio()
};

// tracks the time passed for cycling writingss
const timerWrapper = {
    timePassed: 0
};




/********** function definitions **********/
const initializeWritingsPage = () => {
    // Even though opacity should default to 1 upon loading, the value is being recognized as 0 even though it's visible on the screen.
    // Unsure why this is. Regardless, this causes the opacity to immediately go to 0 during the first time cycling the writings so it has to be to 1 here.
    const writingTitle = document.getElementById('writing-title');
    const writingAuthor = document.getElementById('writing-author');
    const writing = document.getElementById('writing');
    writingTitle.style.opacity = 1;
    writingAuthor.style.opacity = 1;
    writing.style.opacity = 1;
}


const cycleWritings = (writings, timerWrapper, audioWrapper) => {
    cycleWritingsHelperChangeWriting(writings, audioWrapper);
    timerWrapper.timePassed = 0;
    let transitionHasBeenInitiated = false;
    setInterval(() => {
        if (
            timerWrapper.timePassed >= (writings.displayTime - writings.transitionTime) && 
            timerWrapper.timePassed < writings.displayTime &&
            !transitionHasBeenInitiated
        ) {
            transitionHasBeenInitiated = true;
            cycleWritingsHelperTransition(writings);
            timerWrapper.timePassed += 100;
        } else if (timerWrapper.timePassed >= writings.displayTime) {
            transitionHasBeenInitiated = false;
            cycleWritingsHelperChangeWriting(writings, audioWrapper);
            timerWrapper.timePassed = 0;
        } else {
            timerWrapper.timePassed += 100;
        }      
    }, 100);
}


const cycleWritingsHelperChangeWriting = (writings, audioWrapper) => {
    const writingTitle = document.getElementById('writing-title');
    const writingAuthor = document.getElementById('writing-author');
    const writing = document.getElementById('writing');
    let newHTML = '';

    writingTitle.innerHTML = '';
    writingTitle.insertAdjacentHTML('beforeend', `<h3>${writings.writingAndAuthor[writings.idx].title}</h3>`);
    writingAuthor.innerHTML = '';
    writingAuthor.insertAdjacentHTML('beforeend', `<h5>${writings.writingAndAuthor[writings.idx].author}</h5>`);
    writing.innerHTML = '';

    const sections = writings.writingAndAuthor[writings.idx].writing.length;
    const sectionsDiv2 = Math.floor(sections / 2);

    // even number of sections
    if (sections % 2 === 0) {
        for (let i = 0; i < sectionsDiv2; ++i) {
            newHTML += '<div class="row writing-section">';

            newHTML += '<div class="col">';
            for (let j = 0; j < writings.writingAndAuthor[writings.idx].writing[i].length; ++j) {
                newHTML += `<p>${writings.writingAndAuthor[writings.idx].writing[i][j]}</p>`;
            }
            newHTML += '</div>';

            newHTML += '<div class="col">';
            for (let j = 0; j < writings.writingAndAuthor[writings.idx].writing[i + sectionsDiv2].length; ++j) {
                newHTML += `<p>${writings.writingAndAuthor[writings.idx].writing[i + sectionsDiv2][j]}</p>`;
            }
            newHTML += '</div>'

            newHTML += '</div>';
        }
    } else { // odd number of sections
        for (let i = 0; i < sectionsDiv2 + 1; ++i) {
            newHTML += '<div class="row writing-section">';

            newHTML += '<div class="col">';
            for (let j = 0; j < writings.writingAndAuthor[writings.idx].writing[i].length; ++j) {
                newHTML += `<p>${writings.writingAndAuthor[writings.idx].writing[i][j]}</p>`;
            }
            newHTML += '</div>';

            // 1 section edge case - don't add second column so it remains centered
            if (sections !== 1) {
                newHTML += '<div class="col">';
                if (i < sectionsDiv2) {
                    for (let j = 0; j < writings.writingAndAuthor[writings.idx].writing[i + sectionsDiv2].length; ++j) {
                        newHTML += `<p>${writings.writingAndAuthor[writings.idx].writing[i + sectionsDiv2][j]}</p>`;
                    }
                }
                newHTML += '</div>';
            }

            newHTML += '</div>';
        } 
    }
    writing.insertAdjacentHTML('beforeend', newHTML);

    // writing
    if (writings.writingAndAuthor[writings.idx].audioExists) {
        audioWrapper.audio.pause();
        const writingFilePath = `../writings/${writings.writingAndAuthor[writings.idx].title}.mp3`;
        audioWrapper.audio = new Audio(writingFilePath);
        const audioPromise = audioWrapper.audio.play();
        // this is here because of the following error, sometimes play() would fail and an error showed up in the console
        // https://stackoverflow.com/questions/58846042/getting-play-failed-because-the-user-didnt-interact-with-the-document-first
        if (audioPromise !== undefined) {
            audioPromise.then(() => {
                // play was successful
                writings.displayTime = audioWrapper.audio.duration * 1000;
                writings.idx = (writings.idx < writings.writingAndAuthor.length - 1) ? writings.idx + 1 : 0;
            }).catch(e => {
                // play was not successful
            });
        }
    } else {
        writings.displayTime = writings.displayTimeDefault;
        writings.idx = (writings.idx < writings.writingAndAuthor.length - 1) ? writings.idx + 1 : 0;
    }
}


const cycleWritingsHelperTransition = (writings) => {
    const writingTitle = document.getElementById('writing-title');
    const writingAuthor = document.getElementById('writing-author');
    const writing = document.getElementById('writing');

    const opacityChangesCount = writings.transitionTime / writings.opacityChangeIntervalTime;
    for (let i = 0; i < opacityChangesCount; ++i) {
        if (i < opacityChangesCount - 1) {
            setTimeout(() => {
                writingTitle.style.opacity = (writingTitle.style.opacity - (1 / (opacityChangesCount - 1)) < 0) ? 0 : writingTitle.style.opacity - (1 / (opacityChangesCount - 1));
                writingAuthor.style.opacity = (writingAuthor.style.opacity - (1 / (opacityChangesCount - 1)) < 0) ? 0 : writingAuthor.style.opacity - (1 / (opacityChangesCount - 1));
                writing.style.opacity = (writing.style.opacity - (1 / (opacityChangesCount - 1)) < 0) ? 0 : writing.style.opacity - (1 / (opacityChangesCount - 1));
            }, (i + 1) * writings.opacityChangeIntervalTime);
        } else {
            setTimeout(() => {
                writingTitle.style.opacity = 1;
                writingAuthor.style.opacity = 1;
                writing.style.opacity = 1;
            }, (i + 1) * writings.opacityChangeIntervalTime);
        }
    }  
}




/********** function calls **********/
initializeWritingsPage();
cycleWritings(writings, timerWrapper, audioWrapper);