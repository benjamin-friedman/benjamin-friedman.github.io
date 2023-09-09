import { poems } from './data.js';


// tracks the time passed for cycling poems
const timerWrapper = {
    timePassed: 0
};




/********** function definitions **********/
const initializePoemsPage = () => {
    // Even though opacity should default to 1 upon loading, the value is being recognized as 0 even though it's visible on the screen.
    // Unsure why this is. Regardless, this causes the opacity to immediately go to 0 during the first time cycling the poems so it has to be to 1 here.
    const poemTitle = document.getElementById('poem-title');
    const poemAuthor = document.getElementById('poem-author');
    const poem = document.getElementById('poem');
    poemTitle.style.opacity = 1;
    poemAuthor.style.opacity = 1;
    poem.style.opacity = 1;
}


const cyclePoems = (poems, timerWrapper) => {
    cyclePoemsHelperChangePoem(poems);
    timerWrapper.timePassed = 0;
    setInterval(() => {
        if (timerWrapper.timePassed === poems.displayTime - poems.transitionTime) {
            cyclePoemsHelperTransition(poems);
            timerWrapper.timePassed += 100
        }
        else if (timerWrapper.timePassed === poems.displayTime) {
            cyclePoemsHelperChangePoem(poems);
            timerWrapper.timePassed = 0;
        } else {
            timerWrapper.timePassed += 100;
        }
    }, 100);
}


const cyclePoemsHelperChangePoem = (poems) => {
    const poemTitle = document.getElementById('poem-title');
    const poemAuthor = document.getElementById('poem-author');
    const poem = document.getElementById('poem');
    let newHTML = '';

    poemTitle.innerHTML = '';
    poemTitle.insertAdjacentHTML('beforeend', `<h3>${poems.poemAndAuthor[poems.idx].title}</h3>`);
    poemAuthor.innerHTML = '';
    poemAuthor.insertAdjacentHTML('beforeend', `<h5>${poems.poemAndAuthor[poems.idx].author}</h5>`);
    poem.innerHTML = '';

    const stanzas = poems.poemAndAuthor[poems.idx].poem.length;

    // even number of stanzas
    if (stanzas % 2 === 0) {
        for (let i = 0; i < stanzas / 2; ++i) {
            newHTML += '<div class="row poem-stanza">';

            newHTML += '<div class="col">';
            for (let j = 0; j < poems.poemAndAuthor[poems.idx].poem[i].length; ++j) {
                newHTML += `<p>${poems.poemAndAuthor[poems.idx].poem[i][j]}</p>`;
            }
            newHTML += '</div>';

            newHTML += '<div class="col">';
            for (let j = 0; j < poems.poemAndAuthor[poems.idx].poem[i + stanzas / 2].length; ++j) {
                newHTML += `<p>${poems.poemAndAuthor[poems.idx].poem[i + stanzas / 2][j]}</p>`;
            }
            newHTML += '</div>'

            newHTML += '</div>';
        }
    } else { // odd number of stanzas
        for (let i = 0; i < Math.floor(stanzas / 2) + 1; ++i) {
            newHTML += '<div class="row poem-stanza">';

            newHTML += '<div class="col">';
            for (let j = 0; j < poems.poemAndAuthor[poems.idx].poem[i].length; ++j) {
                newHTML += `<p>${poems.poemAndAuthor[poems.idx].poem[i][j]}</p>`;
            }
            newHTML += '</div>';

            // 1 stanza edge case - don't add second column so it remains centered
            if (stanzas !== 1) {
                newHTML += '<div class="col">';
                if (i < Math.floor(stanzas / 2)) {
                    for (let j = 0; j < poems.poemAndAuthor[poems.idx].poem[i + Math.floor(stanzas / 2)].length; ++j) {
                        newHTML += `<p>${poems.poemAndAuthor[poems.idx].poem[i + Math.floor(stanzas / 2)][j]}</p>`;
                    }
                }
                newHTML += '</div>';
            }

            newHTML += '</div>';
        } 
    }

    poem.insertAdjacentHTML('beforeend', newHTML);

    poems.idx = (poems.idx < poems.poemAndAuthor.length - 1) ? poems.idx + 1 : 0;
}


const cyclePoemsHelperTransition = (poems) => {
    const poemTitle = document.getElementById('poem-title');
    const poemAuthor = document.getElementById('poem-author');
    const poem = document.getElementById('poem');

    const opacityChangesCount = poems.transitionTime / poems.opacityChangeIntervalTime;
    for (let i = 0; i < opacityChangesCount; ++i) {
        if (i < opacityChangesCount - 1) {
            setTimeout(() => {
                poemTitle.style.opacity = (poemTitle.style.opacity - (1 / (opacityChangesCount - 1)) < 0) ? 0 : poemTitle.style.opacity - (1 / (opacityChangesCount - 1));
                poemAuthor.style.opacity = (poemAuthor.style.opacity - (1 / (opacityChangesCount - 1)) < 0) ? 0 : poemAuthor.style.opacity - (1 / (opacityChangesCount - 1));
                poem.style.opacity = (poem.style.opacity - (1 / (opacityChangesCount - 1)) < 0) ? 0 : poem.style.opacity - (1 / (opacityChangesCount - 1));
            }, (i + 1) * poems.opacityChangeIntervalTime);
        } else {
            setTimeout(() => {
                poemTitle.style.opacity = 1;
                poemAuthor.style.opacity = 1;
                poem.style.opacity = 1;
            }, (i + 1) * poems.opacityChangeIntervalTime);
            
        }
    }  
}




/********** function calls **********/
initializePoemsPage();
cyclePoems(poems, timerWrapper);