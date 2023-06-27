const musicians = {
    'hans-zimmer': {
        songs: ['Why Do We Fall', 'Agent Of Chaos', 'Molossus', "Gotham's Reckoning", 'Imagine The Fire', 'Necessary Evil', 'Nothing Out There', 'Rise', 'A Dark Knight',
                'Final Ascent', 'Time', 'Projections', 'First Step', 'No Time For Caution', 'Mountains', 'Goodbye My Son', 'Is She With You', 'Marry Me Suite', 'Davy Jones',
                'Not In Blood But In Bond', 'Ah, Putrefaction', 'Now We Are Free', 'Now We Are Free - Cello'],
        idx: 0
    },
    'chopin': {
        songs: ['Nocturne In E Minor Op. 72 No. 1', 'Prelude In E Minor Op. 28 No. 4', 'Prelude In D Flat Major Op. 28 No. 15', 'Nocturne In C Sharp Minor, Op. Posth.', 'Nocturne In B Flat Minor Op. 9 No. 1',
                'Nocturne In E Flat Major Op. 9 No. 2', 'Nocturne In B Major Op. 9 No. 3', 'Nocturne In F Major Op. 15 No. 1', 'Nocturne In F Sharp Major Op. 15 No. 2', 'Nocturne In G Minor Op. 15 No. 3',
                'Nocturne In C Sharp Minor Op. 27 No. 1', 'Nocturne In D Flat Major Op. 27 No. 2', 'Nocturne In B Major Op. 32 No. 1', 'Nocturne In A Flat Major Op. 32 No. 2', 'Nocturne In G Minor Op. 37 No. 1',
                'Nocturne In G Major Op. 37 No. 2', 'Nocturne In C Minor Op. 48 No. 1', 'Nocturne In F Sharp Minor Op. 48 No. 2', 'Nocturne In F Minor Op. 55 No. 1', 'Nocturne In E Flat Major Op. 55 No. 2',
                'Nocturne In B Major Op. 62 No. 1', 'Nocturne In E Major Op. 62 No. 2', 'Nocturne In C Minor Op. Posth.', 'Ballade No. 1 In G Minor Op. 23.', 'Etude In C Minor Op. 10 No. 12 (Revolutionary Etude)',
                'Etude In A Minor Op. 25 No. 11 (Winter Wind)', 'Piano Sonata No. 2 In B Flat Minor Movement III (Funeral March)', 'Nocturne In C Sharp Minor, Op. Posth. - Cello'],
        idx: 0
    },
    'schubert': {
        songs: ['Impromptu In G Flat Major Op. 90 No. 3', 'Piano Trio No. 2 In E Flat Major Movement II Op. 100', 'Serenade', 'Serenade - Piano and Cello', 'Serenade - Piano (arr. Liszt)'],
        idx: 0
    },
    'liszt': {
        songs: ['Liebestraum No. 3', 'Consolation No. 3', 'La Campanella'],
        idx: 0
    },
    'beethoven': {
        songs: ['Moonlight Sonata 1st Movement', 'Moonlight Sonata 1st Movement - Cello and Piano', 'Moonlight Sonata 1st Movement - Ethereal', 'Moonlight Sonata 3rd Movement'],
        idx: 0
    },
    'satie': {
        songs: ['Gnossienne No. 1', 'Gymnopedie No. 1'],
        idx: 0
    },
    'mozart': {
        songs: ['Fantasia No. 3 In D Minor', 'Serenade No. 10 For Winds In B Flat Major 3rd Movement', 'Requiem In D Minor Introitus', 'Requiem In D Minor Lacrimosa', 'Requiem In D Minor Lacrimosa - Cello'],
        idx: 0
    },
    'bach': {
        songs: ['Toccata And Fugue In D Minor', 'Air On The G String', 'Cello Suite No. 1 In G Major Prelude'],
        idx: 0
    },
    'albinoni': {
        songs: ['Adagio'],
        idx: 0
    },
    'saint-saens': {
        songs: ['The Swan - Cello and Harp', 'The Swan - Cello and Piano'],
        idx: 0
    },
    'debussy': {
        songs: ['Reverie', 'Clair De Lune', 'Arabesque No. 1'],
        idx: 0
    },
    'samuel-barber': {
        songs: ['Adagio For Strings'],
        idx: 0
    },
    'rachmaninoff': {
        songs: ['Piano Concerto No. 2 1st Movement', 'Piano Concerto No. 2 2nd Movement', 'Piano Concerto No. 2 3rd Movement', 'Piano Concerto No. 2 2nd Movement - Cello'],
        idx: 0
    },
    'schumann': {
        songs: ['Cello Concerto In A Minor Op. 129'],
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
    'lucio-dalla': {
        songs: ['Caruso', 'Caruso - Cello'],
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
    'bobby-hatfield': {
        songs: ['Unchained Melody'],
        idx: 0
    },
    'johnny-hartman': {
        songs: ['For All We Know'],
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
    'rufus-wainwright': {
        songs: ['Hallelujah'],
        idx: 0
    },
    'steve-vai': {
        songs: ['For The Love Of God', 'Tender Surrender'],
        idx: 0
    },
    'rodrigo-and-gabriela': {
        songs: ['Diablo Rojo'],
        idx: 0
    },
    'rhapsody-of-fire': {
        songs: ['Gargoyles Angels Of Darkness'],
        idx: 0
    },
    'meshuggah': {
        songs: ['Bleed'],
        idx: 0
    },
    'firewind': {
        songs: ['Allegiance'],
        idx: 0
    },
    'slipknot': {
        songs: ['All Out Life', 'Psychosocial', 'Sulfur', 'Disasterpiece', 'Skin Ticket', 'Purity', '(sic)', 'Surfacing', 'Duality', 'Custer', 'The Devil In I'],
        idx: 0
    },
    'nirvana': {
        songs: ['Smells Like Teen Spirit'],
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
    'nicholas-hooper': {
        songs: ['When Ginny Kissed Harry', "Dumbledore's Farewell", 'Possession'],
        idx: 0
    },
    'bear-mccreary': {
        songs: ['Reconciliation'],
        idx: 0
    },
    'johann-johannsson': {
        songs: ["The Sun's Gone Dim And The Sky's Turned Black"],
        idx: 0
    },
    'zack-hemsey': {
        songs: ['The Way'],
        idx: 0
    },
    'james-newton-howard': {
        songs: ['There Are Worse Games To Play-Deep In The Meadow-The Hunger Games Suite', "Rue's Farewell", "Snow's Execution"],
        idx: 0
    },
    'steve-jablonsky': {
        songs: ['Tessa', 'Sacrifice'],
        idx: 0
    },
    'the-xx': {
        songs: ['Intro'],
        idx: 0
    },
    'atis-freivalds': {
        songs: ['Paradox', 'For Her'],
        idx: 0
    },
    'jesper-kyd': {
        songs: ["Ezio's Family", 'Echoes Of The Roman Ruins'],
        idx: 0
    },
    'mike-patton': {
        songs: ['The Snow Angel'],
        idx: 0
    },
    'harry-gregson-williams': {
        songs: ['Narnia Lullaby'],
        idx: 0
    },
    'patrick-doyle': {
        songs: ['Another Year Ends'],
        idx: 0
    }
};

// global variables
const audioWrapper = {
    audio: new Audio()
};

let currentMusicianWrapper = {
    currentMusician: ''
};

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
    musicians[musician].idx = (musicians[musician].idx == musicians[musician].songs.length - 1) ? 0 : musicians[musician].idx + 1;
    audioWrapper.audio.pause();
    audioWrapper.audio = new Audio(str);
    const audioPromise = audioWrapper.audio.play();
    // this is here because of the following error, sometimes play() would fail and an error showed up in the console
    // https://stackoverflow.com/questions/58846042/getting-play-failed-because-the-user-didnt-interact-with-the-document-first
    if (audioPromise !== undefined) {
        audioPromise.then( () => {
            // play was successful
        }).catch(e => {
            // play was not successful, would have to move mouse again
        })
    }
}

for (const musician in musicians) {
    
    document.getElementById(`${musician}-img`).addEventListener('click', () => {
        playSong(musician, musicians, audioWrapper, currentMusicianWrapper);
    });  
}