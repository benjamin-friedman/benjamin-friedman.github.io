const musicianNames = ['hans-zimmer', 'chopin', 'schubert', 'liszt', 'beethoven', 'satie', 'mozart', 'bach', 'albinoni',
                       'saint-saens', 'debussy', 'samuel-barber', 'ben-e-king', 'eva-cassidy', 'charles-bradley', 'donny-hathaway',
                       'bobby-hatfield', 'johnny-hartman', 'van-morrison', 'james-brown', 'etta-james', 'charles-aznavour',
                       'israel-kamakawiwoole', 'don-mclean', 'steve-vai', 'gerry-mulligan', 'nicholas-hooper', 'bear-mccreary',
                       'johann-johannsson', 'zack-hemsey', 'james-newton-howard', 'steve-jablonsky', 'harry-gregson-williams'];

const musicianSongs = {
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
    'don-mclean': {
        songs: ['Vincent.mp3', 'VincentGuitar.mp3'],
        idx: 0
    },
    'steve-vai': {
        songs: ['ForTheLoveOfGod.mp3', 'TenderSurrender.mp3'],
        idx: 0
    },
    'gerry-mulligan': {
        songs: ['PreludeInEMinorJazz.mp3'],
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
    'harry-gregson-williams': {
        songs: ['NarniaLullaby.mp3'],
        idx: 0
    }
};

const audioWrapper = {
    audio: new Audio()
};

const playSong = (musicianName, musicianSongs, audioWrapper) => {
    const str = `../songs/${musicianName}/${musicianSongs[musicianName].songs[musicianSongs[musicianName].idx]}`;
    musicianSongs[musicianName].idx = (musicianSongs[musicianName].idx == musicianSongs[musicianName].songs.length - 1) ? 0 : musicianSongs[musicianName].idx + 1;
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

document.getElementById(musicianNames[0]).addEventListener('mouseover', () => {
    playSong(musicianNames[0], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[1]).addEventListener('mouseover', () => {
    playSong(musicianNames[1], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[2]).addEventListener('mouseover', () => {
    playSong(musicianNames[2], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[3]).addEventListener('mouseover', () => {
    playSong(musicianNames[3], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[4]).addEventListener('mouseover', () => {
    playSong(musicianNames[4], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[5]).addEventListener('mouseover', () => {
    playSong(musicianNames[5], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[6]).addEventListener('mouseover', () => {
    playSong(musicianNames[6], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[7]).addEventListener('mouseover', () => {
    playSong(musicianNames[7], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[8]).addEventListener('mouseover', () => {
    playSong(musicianNames[8], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[9]).addEventListener('mouseover', () => {
    playSong(musicianNames[9], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[10]).addEventListener('mouseover', () => {
    playSong(musicianNames[10], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[11]).addEventListener('mouseover', () => {
    playSong(musicianNames[11], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[12]).addEventListener('mouseover', () => {
    playSong(musicianNames[12], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[13]).addEventListener('mouseover', () => {
    playSong(musicianNames[13], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[14]).addEventListener('mouseover', () => {
    playSong(musicianNames[14], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[15]).addEventListener('mouseover', () => {
    playSong(musicianNames[15], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[16]).addEventListener('mouseover', () => {
    playSong(musicianNames[16], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[17]).addEventListener('mouseover', () => {
    playSong(musicianNames[17], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[18]).addEventListener('mouseover', () => {
    playSong(musicianNames[18], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[19]).addEventListener('mouseover', () => {
    playSong(musicianNames[19], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[20]).addEventListener('mouseover', () => {
    playSong(musicianNames[20], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[21]).addEventListener('mouseover', () => {
    playSong(musicianNames[21], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[22]).addEventListener('mouseover', () => {
    playSong(musicianNames[22], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[23]).addEventListener('mouseover', () => {
    playSong(musicianNames[23], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[24]).addEventListener('mouseover', () => {
    playSong(musicianNames[24], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[25]).addEventListener('mouseover', () => {
    playSong(musicianNames[25], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[26]).addEventListener('mouseover', () => {
    playSong(musicianNames[26], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[27]).addEventListener('mouseover', () => {
    playSong(musicianNames[27], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[28]).addEventListener('mouseover', () => {
    playSong(musicianNames[28], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[29]).addEventListener('mouseover', () => {
    playSong(musicianNames[29], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[30]).addEventListener('mouseover', () => {
    playSong(musicianNames[30], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[31]).addEventListener('mouseover', () => {
    playSong(musicianNames[31], musicianSongs, audioWrapper);
});
document.getElementById(musicianNames[32]).addEventListener('mouseover', () => {
    playSong(musicianNames[32], musicianSongs, audioWrapper);
});