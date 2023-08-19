const musicians = {
    'hans-zimmer': {
        songs: ['Why Do We Fall', 'Agent Of Chaos', 'Molossus', "Gotham's Reckoning", 'Lasiurus', 'Barbastella', 'Corynorhinus', 'Eptescius', 'Myotis', 'Imagine The Fire', 'Necessary Evil', 'Nothing Out There', 'Rise', 'A Dark Knight',
                'Final Ascent',
                'Marry Me Suite', 'One Day', 'Wheel Of Fortune', "At Wit's End", 'Jack Sparrow', 'Parlay', 'Will And Elizabeth', 'The Black Pearl', 'Davy Jones', 'Davy Jones - Piano',        
                'Time', 'Projections',
                'First Step', 'No Time For Caution', 'Mountains',
                'Goodbye My Son', 'Is She With You',
                'Not In Blood But In Bond', 'Ah, Putrefaction',
                'Elysium', 'Honor Him', 'Now We Are Free', 'Now We Are Free - Cello'],
        idx: 0
    },
    'chopin': {
        songs: ['N19 - Nocturne In E Minor Op. 72 No. 1', 'P4 - Prelude In E Minor Op. 28 No. 4', 'P15 - Prelude In D Flat Major Op. 28 No. 15 (Raindrop Prelude)', 'N20 - Nocturne In C Sharp Minor, Op. Posth. - Interpretation 1',
                'N20 - Nocturne In C Sharp Minor, Op. Posth. - Interpretation 2', 'N21 - Nocturne In C Minor Op. Posth.', 'N1 - Nocturne In B Flat Minor Op. 9 No. 1', 'N2 - Nocturne In E Flat Major Op. 9 No. 2', 'N3 - Nocturne In B Major Op. 9 No. 3',
                'N4 - Nocturne In F Major Op. 15 No. 1', 'N5 - Nocturne In F Sharp Major Op. 15 No. 2', 'N6 - Nocturne In G Minor Op. 15 No. 3', 'N7 - Nocturne In C Sharp Minor Op. 27 No. 1', 'N8 - Nocturne In D Flat Major Op. 27 No. 2',
                'N9 - Nocturne In B Major Op. 32 No. 1', 'N10 - Nocturne In A Flat Major Op. 32 No. 2', 'N11 - Nocturne In G Minor Op. 37 No. 1', 'N12 - Nocturne In G Major Op. 37 No. 2', 'N13 - Nocturne In C Minor Op. 48 No. 1',
                'N14 - Nocturne In F Sharp Minor Op. 48 No. 2', 'N15 - Nocturne In F Minor Op. 55 No. 1', 'N16 - Nocturne In E Flat Major Op. 55 No. 2', 'N17 - Nocturne In B Major Op. 62 No. 1', 'N18 - Nocturne In E Major Op. 62 No. 2',
                'Ballade No. 1 In G Minor Op. 23.', 'Etude In C Minor Op. 10 No. 12 (Revolutionary Etude)', 'Etude In A Minor Op. 25 No. 11 (Winter Wind)', 'Piano Sonata No. 2 In B Flat Minor Movement III (Funeral March)',
                'Fantaisie Impromptu in C Sharp Minor Op. Posth. 66 WN 46', 'N20 - Nocturne In C Sharp Minor, Op. Posth. - Cello'],
        idx: 0
    },
    'schubert': {
        songs: ['Impromptu In G Flat Major Op. 90 No. 3', 'Piano Trio No. 2 In E Flat Major Movement II Op. 100', 'Serenade - Interpretation 1', 'Serenade - Interpretation 2', 'Serenade - Piano and Cello', 'Serenade - Piano (arr. Liszt)'],
        idx: 0
    },
    'liszt': {
        songs: ['Liebestraum No. 3 In A Flat Major', 'Consolation No. 3 In D Flat Major', 'Romance O Pourquoi Donc In E Minor S. 169', 'Etude No. 3 In G Sharp Minor (La Campanella)'],
        idx: 0
    },
    'beethoven': {
        songs: ['Moonlight Sonata 1st Movement', 'Moonlight Sonata 1st Movement - Cello and Piano', 'Moonlight Sonata 1st Movement - Ethereal', 'Moonlight Sonata 3rd Movement',
                'Moonlight Sonata 3rd Movement - Guitar and Drums'],
        idx: 0
    },
    'satie': {
        songs: ['Gnossienne No. 1 - Interpretation 1', 'Gnossienne No. 1 - Interpretation 2', 'Gnossienne No. 2', 'Gnossienne No. 3', 'Gnossienne No. 4', 'Gnossienne No. 5', 'Gymnopedie No. 1'],
        idx: 0
    },
    'mozart': {
        songs: ['Fantasia No. 3 In D Minor', 'Serenade No. 10 For Winds In B Flat Major 3rd Movement', 'Requiem In D Minor Introitus', 'Requiem In D Minor Lacrimosa', 'Requiem In D Minor Lacrimosa - Cello'],
        idx: 0
    },
    'bach': {
        songs: ['Toccata And Fugue In D Minor', 'Orchestral Suite No. 3 In D Major Movement II, BWV 1068 (Air On The G String)', 'Cello Suite No. 1 In G Major Prelude'],
        idx: 0
    },
    'albinoni': {
        songs: ['Adagio'],
        idx: 0
    },
    'saint-saens': {
        songs: ['The Swan - Cello and Harp', 'The Swan - Cello and Piano', 'Cello Concerto No. 1 In A Minor Op. 33'],
        idx: 0
    },
    'debussy': {
        songs: ['Reverie', 'Clair De Lune', 'Arabesque No. 1'],
        idx: 0
    },
    'samuel-barber': {
        songs: ['Adagio For Strings', 'Agnus Dei'],
        idx: 0
    },
    'rachmaninoff': {
        songs: ['Piano Concerto No. 2 1st Movement', 'Piano Concerto No. 2 2nd Movement', 'Piano Concerto No. 2 3rd Movement', 'Piano Concerto No. 2 2nd Movement - Cello'],
        idx: 0
    },
    'shostakovich': {
        songs: ['Waltz No. 2'],
        idx: 0
    },
    'bruch': {
        songs: ['Kol Nidre'],
        idx: 0
    },
    'gruber': {
        songs: ['Silent Night - Piano', 'Silent Night - Cello'],
        idx: 0
    },
    'grieg': {
        songs: ['Peer Gynt Suite No. 1 Op. 46 (Morning Mood)'],
        idx: 0
    },
    'tchaikovsky': {
        songs: ['Swan Lake Suite Op. 20 - Swan Theme'],
        idx: 0
    },
    'harry-gregson-williams': {
        songs: ['Narnia Lullaby'],
        idx: 0
    },
    'steve-jablonsky': {
        songs: ['Tessa', 'Sacrifice', 'Arrival To Earth'],
        idx: 0
    },
    'james-newton-howard': {
        songs: ['There Are Worse Games To Play-Deep In The Meadow-The Hunger Games Suite', "Rue's Farewell", "Snow's Execution"],
        idx: 0
    },
    'nicholas-hooper': {
        songs: ['When Ginny Kissed Harry', "Dumbledore's Farewell", 'Possession'],
        idx: 0
    },
    'patrick-doyle': {
        songs: ['Another Year Ends'],
        idx: 0
    },
    'alexandre-desplat': {
        songs: ['Severus and Lily'],
        idx: 0
    },
    'howard-shore': {
        songs: ['Théoden King', 'Edoras'],
        idx: 0
    },
    'michael-giacchino': {
        songs: ['Married Life'],
        idx: 0
    },
    'bear-mccreary': {
        songs: ['Reconciliation'],
        idx: 0
    },
    'jesper-kyd': {
        songs: ["Ezio's Family", 'Echoes Of The Roman Ruins'],
        idx: 0
    },
    'zack-hemsey': {
        songs: ['The Way'],
        idx: 0
    },
    'johann-johannsson': {
        songs: ["The Sun's Gone Dim And The Sky's Turned Black"],
        idx: 0
    },
    'atis-freivalds': {
        songs: ['Paradox', 'For Her'],
        idx: 0
    },
    'mike-patton': {
        songs: ['The Snow Angel'],
        idx: 0
    },
    'lucio-dalla': {
        songs: ['Caruso', 'Caruso - Cello'],
        idx: 0
    },
    'luciano-pavarotti': {
        songs: ['Nessun Dorma'],
        idx: 0
    },
    'ben-e-king': {
        songs: ['Stand By Me'],
        idx: 0
    },
    'eva-cassidy': {
        songs: ['Wade In The Water'],
        idx: 0
    },
    'charles-bradley': {
        songs: ['Crying In The Chapel'],
        idx: 0
    },
    'marvin-gaye-tammi-terrell': {
        songs: ["Ain't No Mountain High Enough"],
        idx: 0
    },
    'donny-hathaway': {
        songs: ['A Song For You'],
        idx: 0
    },
    'the-foundations': {
        songs: ['Build Me Up Buttercup'],
        idx: 0
    },
    'righteous-brothers': {
        songs: ['Unchained Melody'],
        idx: 0
    },
    'johnny-hartman': {
        songs: ['For All We Know', 'I See Your Face Before Me'],
        idx: 0
    },
    'bobby-darin': {
        songs: ['The Curtain Falls'],
        idx: 0
    },
    'van-morrison': {
        songs: ['Moondance'],
        idx: 0
    },
    'james-brown': {
        songs: ['Try Me'],
        idx: 0
    },
    'etta-james': {
        songs: ["I'd Rather Go Blind", "Lord Don't Move That Mountain"],
        idx: 0
    },
    'charles-aznavour': {
        songs: ['For Me Formidable'],
        idx: 0
    },
    'israel-kamakawiwoole': {
        songs: ['Somewhere Over The Rainbow'],
        idx: 0
    },
    'nick-cave': {
        songs: ['O Children'],
        idx: 0
    },
    'imogen-heap': {
        songs: ['Hide And Seek'],
        idx: 0
    },
    'don-mclean': {
        songs: ['Vincent', 'Vincent - Guitar', 'American Pie'],
        idx: 0
    },
    'the-mamas-and-the-papas': {
        songs: ["California Dreamin'"],
        idx: 0
    },
    'patrick-watson': {
        songs: ['To Build A Home'],
        idx: 0
    },
    'rufus-wainwright': {
        songs: ['Hallelujah'],
        idx: 0
    },
    'duffy': {
        songs: ['Delayed Devotion'],
        idx: 0
    },
    'maxwell': {
        songs: ['Pretty Wings'],
        idx: 0
    },
    'bob-dylan': {
        songs: ['Things Have Changed'],
        idx: 0
    },
    'johnny-cash': {
        songs: ["God's Gonna Cut You Down", 'Hurt'],
        idx: 0
    },
    'ben-howard': {
        songs: ['Oats In The Water'],
        idx: 0
    },
    'jamie-n-commons': {
        songs: ['Lead Me Home'],
        idx: 0
    },
    'phillip-phillips': {
        songs: ['Home'],
        idx: 0
    },
    'john-denver': {
        songs: ['Take Me Home, Country Roads'],
        idx: 0
    },
    'ritchie-valens': {
        songs: ['La Bamba'],
        idx: 0
    },
    'jon-batiste': {
        songs: ['Blackbird'],
        idx: 0
    },
    'the-chords': {
        songs: ['Sh-Boom'],
        idx: 0
    },
    'imad-fares': {
        songs: ['Gipsy Kings'],
        idx: 0
    },
    'rodrigo-and-gabriela': {
        songs: ['Diablo Rojo'],
        idx: 0
    },
    'steve-vai': {
        songs: ['For The Love Of God', 'Tender Surrender'],
        idx: 0
    },
    'neogeofanatic': {
        songs: ['My Gibson Les Paul Is Crying'],
        idx: 0
    },
    'rhapsody-of-fire': {
        songs: ['Gargoyles Angels Of Darkness'],
        idx: 0
    },
    'meshuggah': {
        songs: ['Bleed', 'Demiurge'],
        idx: 0
    },
    'slipknot': {
        songs: ['All Out Life', 'Psychosocial', 'Sulfur', 'Disasterpiece', 'Skin Ticket', 'Purity', '(sic)', 'Surfacing', 'Duality', 'Custer',
                'The Devil In I', 'The Devil In I (Live)', 'Everything Ends', 'The Negative One', 'Snuff'],
        idx: 0
    },
    'firewind': {
        songs: ['Allegiance'],
        idx: 0
    },
    'pantera': {
        songs: ['Mouth For War'],
        idx: 0
    },
    'rage-against-the-machine': {
        songs: ['Killing In The Name'],
        idx: 0
    },
    'disturbed': {
        songs: ['Down With The Sickness', 'The Sound Of Silence'],
        idx: 0
    },
    'nirvana': {
        songs: ['Smells Like Teen Spirit', 'Heart-Shaped Box'],
        idx: 0
    },
    'aerosmith': {
        songs: ['Dream On'],
        idx: 0
    },
    'blue-oyster-cult': {
        songs: ["(Don't Fear) The Reaper"],
        idx: 0
    },
    'metallica': {
        songs: ['Enter Sandman', 'Nothing Else Matters', 'Master Of Puppets', 'For Whom The Bell Tolls'],
        idx: 0
    },
    'guns-n-roses': {
        songs: ["Sweet Child O' Mine", 'Welcome To The Jungle'],
        idx: 0
    },
    'ac-dc': {
        songs: ['Thunderstruck', 'Thunderstruck - Cello'],
        idx: 0
    },
    'motley-crue': {
        songs: ['Kickstart My Heart'],
        idx: 0
    },
    'linkin-park': {
        songs: ['Numb'],
        idx: 0
    },
    'my-chemical-romance': {
        songs: ['The Ghost Of You'],
        idx: 0
    },
    'radiohead': {
        songs: ['Creep'],
        idx: 0
    },
    'the-who': {
        songs: ["Baba O'Riley", 'Who Are You', 'Pinball Wizard'],
        idx: 0
    },
    'rem': {
        songs: ['Losing My Religion', 'Man On The Moon'],
        idx: 0
    },
    'steely-dan': {
        songs: ['Do It Again'],
        idx: 0
    },
    'the-band': {
        songs: ['The Weight'],
        idx: 0
    },
    'creedence-clearwater-revival': {
        songs: ['Have You Ever Seen The Rain'],
        idx: 0
    },
    'the-beatles': {
        songs: ['In My Life', 'Let It Be', 'Girl', 'Michelle', 'Eleanor Rigby', 'The Long And Winding Road', 'Yesterday', 'Twist And Shout', 'Help!', 'All You Need Is Love', 'Hey Jude'],
        idx: 0
    },
    'electric-light-orchestra': {
        songs: ['Mr. Blue Sky'],
        idx: 0
    },
    'cream': {
        songs: ['White Room'],
        idx: 0
    },
    'the-goo-goo-dolls': {
        songs: ['Iris'],
        idx: 0
    },
    'oasis': {
        songs: ['Wonderwall'],
        idx: 0
    },
    'augustana': {
        songs: ['Boston'],
        idx: 0
    },
    'the-killers': {
        songs: ['Mr. Brightside'],
        idx: 0
    },
    'wilco': {
        songs: ['How To Fight Loneliness'],
        idx: 0
    },
    'coldplay': {
        songs: ['The Scientist', 'Yellow', 'Fix You', 'Viva La Vida', 'Adventure Of A Lifetime'],
        idx: 0
    },
    'muse': {
        songs: ['Uprising', 'Starlight', 'Supermassive Black Hole'],
        idx: 0
    },
    'bag-raiders': {
        songs: ['Shooting Stars'],
        idx: 0
    },
    'wang-chung': {
        songs: ['Space Junk'],
        idx: 0
    },
    'joe-strummer-and-the-mescaleros': {
        songs: ['Mondo Bongo'],
        idx: 0
    },
    'stray-cats': {
        songs: ['Stray Cat Strut'],
        idx: 0
    },
    'tears-for-fears': {
        songs: ['Sowing The Seeds Of Love', 'Everybody Wants To Rule The World'],
        idx: 0
    },
    'culture-club': {
        songs: ['Karma Chameleon'],
        idx: 0
    },
    'john-waite': {
        songs: ['Missing You'],
        idx: 0
    },
    'eddie-money': {
        songs: ['Baby Hold On'],
        idx: 0
    },
    'phil-collins': {
        songs: ['In The Air Tonight'],
        idx: 0
    },
    'eminem': {
        songs: ['Sing For The Moment', 'Sing For The Moment (Instrumental)', 'Lose Yourself', 'Till I Collapse', "Won't Back Down", 'Stan', 'Fast Lane'],
        idx: 0
    },
    'kendrick-lamar': {
        songs: ['Hiiipower', 'Black Boy Fly', 'Ignorance Is Bliss', 'Money Trees', 'The Recipe'],
        idx: 0
    },
    'kanye-west': {
        songs: ['Heartless', 'Love Lockdown', 'Send It Up', 'No Church In The Wild', 'Blood On The Leaves', 'Flashing Lights'],
        idx: 0
    },
    'lupe-fiasco': {
        songs: ['Superstar'],
        idx: 0
    },
    'suicidal-tendencies': {
        songs: ['Institutionalized'],
        idx: 0
    },
    'flobots': {
        songs: ['Handlebars'],
        idx: 0
    },
    'house-of-pain': {
        songs: ['Jump Around'],
        idx: 0
    },
    'naughty-by-nature': {
        songs: ['Hip Hop Hooray'],
        idx: 0
    },
    'tom-pepe': {
        songs: ['The River Runs Deep'],
        idx: 0
    },
    'gerry-mulligan': {
        songs: ['Prelude In E Minor Op. 28 No. 4 - Jazz'],
        idx: 0
    },
    'dave-brubeck': {
        songs: ['Take Five', 'Maria'],
        idx: 0
    },
    'larnell-lewis': {
        songs: ['Drum Solo'],
        idx: 0
    },
    'carly-comando': {
        songs: ['Everyday'],
        idx: 0
    },
    'joseph-kilna-mackenzie': {
        songs: ['Sgt. MacKenzie'],
        idx: 0
    },
    'the-xx': {
        songs: ['Intro', 'Angels'],
        idx: 0
    },
    'henry-krinkle': {
        songs: ['Stay'],
        idx: 0
    },
    'tony-anderson': {
        songs: ['Ember'],
        idx: 0
    },
    'disclosure': {
        songs: ['You & Me'],
        idx: 0
    },
    'feed-me-and-crystal-fighters': {
        songs: ['Love Is All I Got'],
        idx: 0
    },
    'junior-senior': {
        songs: ['Move Your Feet'],
        idx: 0
    },
    'stromae': {
        songs: ['Alors On Danse'],
        idx: 0
    },
    'ta-ku': {
        songs: ['Night 3'],
        idx: 0
    },
    // writers follow the same logic as musicians
    'dylan-thomas': {
        songs: ['Do Not Go Gentle Into That Good Night'],
        idx: 0
    },
    'william-ernest-henley': {
        songs: ['Invictus'],
        idx: 0
    },
    'charles-dickens': {
        songs: ['A Tale Of Two Cities'],
        idx: 0
    },
};


const quotesAndAuthors = {
    quotes: [
        'Where words fail, music speaks.',
        'Without music, life would be a mistake.',
        'Music expresses that which cannot be said and on which it is impossible to be silent.',
        'Bach is an astronomer discovering the most marvellous stars. Beethoven challenges the universe. I only try to express the soul and heart of man.',
    ],
    authors: [
        'Hans Christian Andersen',
        'Friedrich Nietzsche',
        'Victor Hugo',
        'Chopin'
    ],
    idx: 0,
    displayTime: 15000,             // time to display the quote
    transitionTime: 2500,           // time where opacity is fading
    opacityChangeIntervalTime: 100  // interval time between 1 opacity change
};


// global variables
// tracks the current song being played
const audioWrapper = {
    audio: new Audio()
};

// tracks the current musician
const currentMusicianWrapper = {
    currentMusician: ''
};

//
const songAndMusicianIntervalWrapper = {
    intervalId: 0
};




/********** function definitions **********/
const cycleQuotes = (quotesAndAuthors) => {
    cycleQuotesHelper(quotesAndAuthors);
    setInterval(() => {
         cycleQuotesHelper(quotesAndAuthors);
    }, quotesAndAuthors.displayTime);
}

const cycleQuotesHelper = (quotesAndAuthors) => {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    quote.style.opacity = 1;
    author.style.opacity = 1;
    quote.innerHTML = quotesAndAuthors.quotes[quotesAndAuthors.idx];
    author.innerHTML = `- ${quotesAndAuthors.authors[quotesAndAuthors.idx]}`;
    quotesAndAuthors.idx = (quotesAndAuthors.idx < quotesAndAuthors.quotes.length - 1) ? quotesAndAuthors.idx + 1 : 0;

    const opacityChangesCount = quotesAndAuthors.transitionTime / quotesAndAuthors.opacityChangeIntervalTime;
    setTimeout(() => {
        for (let i = 0; i < opacityChangesCount; ++i) {
            setTimeout(() => {
                quote.style.opacity -= 1 / opacityChangesCount;
                author.style.opacity -= 1 / opacityChangesCount;
            }, (i + 1) * quotesAndAuthors.opacityChangeIntervalTime);
        }
    }, quotesAndAuthors.displayTime - quotesAndAuthors.transitionTime);
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
cycleQuotes(quotesAndAuthors);

for (const musician in musicians) {
    document.getElementById(`${musician}-play-button-img`).addEventListener('click', () => {
        playSong(musician, musicians, audioWrapper, currentMusicianWrapper);
        cycleSongAndMusicianOpacity(musician, songAndMusicianIntervalWrapper);
    });
    document.getElementById(`${musician}-play-button-img`).addEventListener('mouseenter', () => {
        document.getElementById(`${musician}-play-button-img`).style.opacity = '50%';
    });
    document.getElementById(`${musician}-play-button-img`).addEventListener('mouseleave', () => {
        document.getElementById(`${musician}-play-button-img`).style.opacity = '0%';
    });       
}