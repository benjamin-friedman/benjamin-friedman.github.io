const musicians = {
    'hans-zimmer': {
        songs: ['Why Do We Fall', 'Agent Of Chaos', 'Molossus', 'Time', 'First Step', 'No Time For Caution',
                'Mountains', 'Goodbye My Son', 'Marry Me Suite', 'Davy Jones', 'Not In Blood But In Bond',
                'Ah, Putrefaction', 'Now We Are Free', 'Now We Are Free - Cello (Hauser)'],
        idx: 0
    },
    'chopin': {
        songs: ['Prelude In E Minor Op. 28 No. 4', 'Prelude In D Flat Major Op. 28 No. 15', 'Nocturne In B Flat Minor Op. 9 No. 1', 'Nocturne In E Flat Major Op. 9 No. 2', 'Nocturne In B Major Op. 9 No. 3',
                'Nocturne In F Major Op. 15 No. 1', 'Nocturne In F Sharp Major Op. 15 No. 2', 'Nocturne In G Minor Op. 15 No. 3', 'Nocturne In C Sharp Minor Op 27. No. 1', 'Nocturne In D Flat Major Op. 27 No. 2',
                'Nocturne In B Major Op. 32 No. 1', 'Nocturne In A Flat Major Op. 32 No. 2', 'Nocturne In G Minor Op. 37 No. 1', 'Nocturne In G Major Op. 37 No. 2', 'Nocturne In C Minor Op. 48 No. 1',
                'Nocturne In F Sharp Minor Op. 48 No. 2', 'Nocturne In F Minor Op. 55 No. 1', 'Nocturne In E Flat Major Op. 55 No. 2', 'Nocturne In B Major Op. 62 No. 1', 'Nocturne In E Major Op. 62 No. 2',
                'Nocturne In E Minor Op. 72 No. 1', 'Nocturne In C Sharp Minor, Op. Posth.', 'Nocturne In C Minor Op. Posth.', 'Ballade No. 1 In G Minor Op. 23.', 'Etude In C Minor Op. 10 No. 12 (Revolutionary Etude)',
                'Etude In A Minor Op. 25 No. 11 (Winter Wind)', 'Piano Sonata No. 2 In B Flat Minor Movement III (Funeral March)', 'Nocturne In C Sharp Minor, Op. Posth. - Cello (Hauser)'],
        idx: 0
    },
    'schubert': {
        songs: ['Impromptu In G Flat Major Op. 90 No. 3', 'Piano Trio No. 2 In E Flat Major Movement II Op. 100', 'Serenade', 'Serenade - Piano (arr. Liszt)'],
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
        songs: ['FantasiaInDMinor.mp3', 'SerenadeForWinds.mp3'],
        idx: 0
    },
    'bach': {
        songs: ['ToccataAndFugueInDMinor.mp3', 'AirOnTheGString.mp3', 'CelloSuiteNo1InGMajorPrelude.mp3'],
        idx: 0
    },
    'albinoni': {
        songs: ['Adagio.mp3'],
        idx: 0
    },
    'saint-saens': {
        songs: ['TheSwan.mp3'],
        idx: 0
    },
    'debussy': {
        songs: ['Reverie.mp3', 'ClairDeLune.mp3', 'ArabesqueNo1.mp3'],
        idx: 0
    },
    'samuel-barber': {
        songs: ['AdagioForStrings.mp3'],
        idx: 0
    },
    'rachmaninoff': {
        songs: ['PianoConcertoNo21stMovement.mp3', 'PianoConcertoNo22ndMovement.mp3', 'PianoConcertoNo23rdMovement.mp3','PianoConcertoNo22ndMovementCello.mp3'],
        idx: 0
    },
    'bruch': {
        songs: ['KolNidre.mp3'],
        idx: 0
    },
    'gruber': {
        songs: ['SilentNightPiano.mp3', 'SilentNightCello.mp3'],
        idx: 0
    },
    'lucio-dallo': {
        songs: ['Caruso.mp3'],
        idx: 0
    },
    'ben-e-king': {
        songs: ['StandByMe.mp3'],
        idx: 0
    },
    'eva-cassidy': {
        songs: ['WadeInTheWater.mp3'],
        idx: 0
    },
    'charles-bradley': {
        songs: ['CryingInTheChapel.mp3'],
        idx: 0
    },
    'marvin-gaye-tammi-terrell': {
        songs: ['AintNoMountainHighEnough.mp3'],
        idx: 0
    },
    'donny-hathaway': {
        songs: ['ASongForYou.mp3'],
        idx: 0
    },
    'bobby-hatfield': {
        songs: ['UnchainedMelody.mp3'],
        idx: 0
    },
    'johnny-hartman': {
        songs: ['ForAllWeKnow.mp3'],
        idx: 0
    },
    'van-morrison': {
        songs: ['Moondance.mp3'],
        idx: 0
    },
    'james-brown': {
        songs: ['TryMe.mp3'],
        idx: 0
    },
    'etta-james': {
        songs: ['IdRatherGoBlind.mp3'],
        idx: 0
    },
    'charles-aznavour': {
        songs: ['ForMeFormidable.mp3'],
        idx: 0
    },
    'israel-kamakawiwoole': {
        songs: ['SomewhereOverTheRainbow.mp3'],
        idx: 0
    },
    'nick-cave': {
        songs: ['OChildren.mp3'],
        idx: 0
    },
    'imogen-heap': {
        songs: ['HideAndSeek.mp3'],
        idx: 0
    },
    'don-mclean': {
        songs: ['Vincent.mp3', 'VincentGuitar.mp3'],
        idx: 0
    },
    'the-mamas-and-the-papas': {
        songs: ['CaliforniaDreamin.mp3'],
        idx: 0
    },
    'rufus-wainwright': {
        songs: ['Hallelujah.mp3'],
        idx: 0
    },
    'steve-vai': {
        songs: ['ForTheLoveOfGod.mp3', 'TenderSurrender.mp3'],
        idx: 0
    },
    'rodrigo-and-gabriela': {
        songs: ['DiabloRojo.mp3'],
        idx: 0
    },
    'rhapsody-of-fire': {
        songs: ['GargoylesAngelsOfDarkness.mp3'],
        idx: 0
    },
    'gerry-mulligan': {
        songs: ['PreludeInEMinorJazz.mp3'],
        idx: 0
    },
    'dave-brubeck': {
        songs: ['TakeFive.mp3', 'Maria.mp3'],
        idx: 0
    },
    'nicholas-hooper': {
        songs: ['WhenGinnyKissedHarry.mp3', 'DumbledoresFarewell.mp3', 'Possession.mp3'],
        idx: 0
    },
    'bear-mccreary': {
        songs: ['Reconciliation.mp3'],
        idx: 0
    },
    'johann-johannsson': {
        songs: ['TheSunsGoneDimAndTheSkysTurnedBlack.mp3'],
        idx: 0
    },
    'zack-hemsey': {
        songs: ['TheWay.mp3'],
        idx: 0
    },
    'james-newton-howard': {
        songs: ['TenuousWinnersReturningHome.mp3', 'RuesFarewell.mp3'],
        idx: 0
    },
    'steve-jablonsky': {
        songs: ['Tessa.mp3', 'Sacrifice.mp3'],
        idx: 0
    },
    'the-xx': {
        songs: ['Intro.mp3'],
        idx: 0
    },
    'mike-patton': {
        songs: ['TheSnowAngel.mp3'],
        idx: 0
    },
    'harry-gregson-williams': {
        songs: ['NarniaLullaby.mp3'],
        idx: 0
    },
    'patrick-doyle': {
        songs: ['AnotherYearEnds.mp3'],
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
            document.getElementById(currentMusicianWrapper.currentMusician).getElementsByTagName('h4')[0].style.visibility = 'hidden';
            document.getElementById(currentMusicianWrapper.currentMusician).getElementsByTagName('p')[0].innerHTML = '';
        }
        currentMusicianWrapper.currentMusician = musician;
        document.getElementById(musician).getElementsByTagName('h4')[0].style.visibility = 'visible';
    }

    // display new song name
    const song = musicians[musician].songs[musicians[musician].idx];
    document.getElementById(musician).getElementsByTagName('p')[0].innerHTML = song;

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
    
    document.getElementById(musician).getElementsByTagName('img')[0].addEventListener('click', () => {
        playSong(musician, musicians, audioWrapper, currentMusicianWrapper);
    });  
}