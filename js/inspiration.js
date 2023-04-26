const musicians = {
    'hans-zimmer': {
        songs: ['WhyDoWeFall.mp3', 'AgentOfChaos.mp3', 'Time.mp3', 'FirstStep.mp3', 'NoTimeForCaution.mp3', 'Mountains.mp3',
                'GoodbyeMySon.mp3', 'MarryMeSuite.mp3', 'DavyJones.mp3', 'NotInBloodButInBond.mp3', 'NowWeAreFree.mp3',
                'NowWeAreFreeCello.mp3'],
        idx: 0
    },
    'chopin': {
        songs: ['PreludeInEMinor.mp3', 'NocturneInCSharpMinor.mp3', 'PreludeInDFlatMajor.mp3', 'BalladNo1InGMinor.mp3',
                'NocturneInBFlatMinor.mp3', 'NocturneInCSharpMinorCello.mp3'],
        idx: 0
    },
    'schubert': {
        songs: ['PianoTrioNo2InEFlatMajor.mp3', 'Serenade.mp3', 'SerenadePiano.mp3'],
        idx: 0
    },
    'liszt': {
        songs: ['Liebestraum.mp3', 'ConsolationNo3.mp3', 'LaCampanella.mp3'],
        idx: 0
    },
    'beethoven': {
        songs: ['MoonlightSonata1stMovement.mp3', 'MoonlightSonata3rdMovement.mp3'],
        idx: 0
    },
    'satie': {
        songs: ['Gnossienne1.mp3', 'GymnopedieNo1.mp3'],
        idx: 0
    },
    'mozart': {
        songs: ['FantasiaInDMinor.mp3', 'SerenadeForWinds.mp3'],
        idx: 0
    },
    'bach': {
        songs: ['ToccataAndFugueInDMinor.mp3', 'AirOnTheGString.mp3'],
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
    'steve-vai': {
        songs: ['ForTheLoveOfGod.mp3', 'TenderSurrender.mp3'],
        idx: 0
    },
    'rodrigo-and-gabriela': {
        songs: ['DiabloRojo.mp3'],
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
        songs: ['WhenGinnyKissedHarry.mp3', 'DumbledoresFarewell.mp3'],
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
        songs: ['Molossus.mp3', 'TenuousWinnersReturningHome.mp3', 'RuesFarewell.mp3'],
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
    'harry-gregson-williams': {
        songs: ['NarniaLullaby.mp3'],
        idx: 0
    },
    'patrick-doyle': {
        songs: ['AnotherYearEnds.mp3'],
        idx: 0
    }
};

const audioWrapper = {
    audio: new Audio()
};

const playSong = (musician, musicians, audioWrapper) => {
    const str = `../songs/${musician}/${musicians[musician].songs[musicians[musician].idx]}`;
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
    document.getElementById(musician).addEventListener('mouseover', () => {
        playSong(musician, musicians, audioWrapper);
    });  
}