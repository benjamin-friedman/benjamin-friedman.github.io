import { writingsArray } from './data.js';


/*
    Built based on writingsArray, used for the events to play the writings.
    {
        writing-id' : {
            title: 'title',
            author: 'author',
            fileName: 'writing-file-name',
            writing: [
                [
                    'line',
                    'line',
                    ...
                ],
                [
                    'line',
                    'line',
                    ...
                ],
            ]
        },
        ...
    }
*/
const writingsObject = {};


// tracks the current writing being played
const audioWrapper = {
    audio: new Audio()
};




/********** function definitions **********/
const initializeWritingsPageLayout = (writingsArray) => {
    const writingsMenuContainer = document.getElementById('writings-menu-container');
    let newHTML = '';

    // musicians and photos
    for (let i = 0; i < writingsArray.length; i += 3) {
        if (i === writingsArray.length - 1) {
            newHTML = 
                `
                    <div class="row writings-menu-title-container">
                        <div class="col-12 writings-menu-title">
                            <h5 id="${writingsArray[i].id}">${writingsArray[i].title}</h5>
                        </div>
                    </div>
                `;
        } else if (i === writingsArray.length - 2) {
            newHTML = 
                `
                    <div class="row writings-menu-title-container">
                        <div class="col-6 writings-menu-title">
                            <h5 id="${writingsArray[i].id}">${writingsArray[i].title}</h5>
                        </div>
                        <div class="col-6 writings-menu-title">
                            <h5 id="${writingsArray[i + 1].id}">${writingsArray[i + 1].title}</h5>
                        </div>
                    </div>
                `;
        } else {
            newHTML = 
                `
                    <div class="row writings-menu-title-container">
                        <div class="col-4 writings-menu-title">
                            <h5 id="${writingsArray[i].id}">${writingsArray[i].title}</h5>
                        </div>
                        <div class="col-4 writings-menu-title">
                            <h5 id="${writingsArray[i + 1].id}">${writingsArray[i + 1].title}</h5>
                        </div>
                        <div class="col-4 writings-menu-title">
                            <h5 id="${writingsArray[i + 2].id}">${writingsArray[i + 2].title}</h5>
                        </div>
                    </div>
                `;
        }
        writingsMenuContainer.insertAdjacentHTML('beforeend', newHTML);
    }
}


const initializeWritingsObject = (writingsArray, writingsObject) => {
    writingsArray.forEach(_writing => {
        writingsObject[`${_writing.id}`] = {
            title: _writing.title,
            author: _writing.author,
            fileName: _writing.id,
            writing: _writing.writing
        }
    });
}


const initializeWritingsPageEvents = (writingsObject, audioWrapper) => {
    for (const writingId in writingsObject) {
        const writingElement = document.getElementById(writingId);
        writingElement.addEventListener('mouseover', () => {
            writingElement.style.opacity = 0.5;
        });
        writingElement.addEventListener('mouseleave', () => {
            writingElement.style.opacity = 1;
        });
        writingElement.addEventListener('click', () => {
            playWriting(writingId, writingsObject, audioWrapper);
        });   
    }
}


const playWriting = (writingId, writingsObject, audioWrapper) => {
    const writingTitle = document.getElementById('writing-title');
    const writingAuthor = document.getElementById('writing-author');
    const writing = document.getElementById('writing');
    let newHTML = '';

    writingTitle.innerHTML = '';
    writingTitle.insertAdjacentHTML('beforeend', `<h3>${writingsObject[`${writingId}`].title}</h3>`);
    writingAuthor.innerHTML = '';
    writingAuthor.insertAdjacentHTML('beforeend', `<h5>${writingsObject[`${writingId}`].author}</h5>`);
    writing.innerHTML = '';


    const sections = writingsObject[`${writingId}`].writing.length;
    const sectionsDiv2 = Math.floor(sections / 2);

    // even number of sections
    if (sections % 2 === 0) {
        for (let i = 0; i < sectionsDiv2; ++i) {
            newHTML += '<div class="row writing-section">';

            newHTML += '<div class="col">';
            for (let j = 0; j < writingsObject[`${writingId}`].writing[i].length; ++j) {
                newHTML += `<p>${writingsObject[`${writingId}`].writing[i][j]}</p>`;
            }
            newHTML += '</div>';

            newHTML += '<div class="col">';
            for (let j = 0; j < writingsObject[`${writingId}`].writing[i + sectionsDiv2].length; ++j) {
                newHTML += `<p>${writingsObject[`${writingId}`].writing[i + sectionsDiv2][j]}</p>`;
            }
            newHTML += '</div>'

            newHTML += '</div>';
        }
    } else { // odd number of sections
        for (let i = 0; i < sectionsDiv2 + 1; ++i) {
            newHTML += '<div class="row writing-section">';

            newHTML += '<div class="col">';
            for (let j = 0; j < writingsObject[`${writingId}`].writing[i].length; ++j) {
                newHTML += `<p>${writingsObject[`${writingId}`].writing[i][j]}</p>`;
            }
            newHTML += '</div>';

            // 1 section edge case - don't add second column so it remains centered
            if (sections !== 1) {
                newHTML += '<div class="col">';
                if (i < sectionsDiv2) {
                    for (let j = 0; j < writingsObject[`${writingId}`].writing[i + sectionsDiv2].length; ++j) {
                        newHTML += `<p>${writingsObject[`${writingId}`].writing[i + sectionsDiv2][j]}</p>`;
                    }
                }
                newHTML += '</div>';
            }

            newHTML += '</div>';
        } 
    }
    
    writing.insertAdjacentHTML('beforeend', newHTML);

    // writing
    audioWrapper.audio.pause();
    const writingFilePath = `../res/writings/${writingsObject[`${writingId}`].fileName}.mp3`;
    audioWrapper.audio = new Audio(writingFilePath);
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




/********** function calls **********/
initializeWritingsPageLayout(writingsArray);
initializeWritingsObject(writingsArray, writingsObject);
initializeWritingsPageEvents(writingsObject, audioWrapper);