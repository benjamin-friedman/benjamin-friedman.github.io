const hansZimmerSongs = ['WhyDoWeFall.mp3', 'AgentOfChaos.mp3', 'Time.mp3', 'FirstStep.mp3', 'NoTimeForCaution.mp3', 'Mountains.mp3', 'GoodbyeMySon.mp3', 'MarryMeSuite.mp3', 'DavyJones.mp3', 'NotInBloodButInBond.mp3', 'NowWeAreFree.mp3', 'NowWeAreFreeCello.mp3'];
let hansZimmerSongsIndex = 0;
const chopinSongs = [ 'PreludeInEMinor.mp3', 'NocturneInCSharpMinor.mp3', 'PreludeInDFlatMajor.mp3', 'BalladNo1InGMinor.mp3', 'NocturneInBFlatMinor.mp3', 'NocturneInCSharpMinorCello.mp3'];
let chopinSongsIndex = 0;
const schubertSongs = ['PianoTrioNo2InEFlatMajor.mp3', 'Serenade.mp3', 'SerenadePiano.mp3'];
let schubertSongsIndex = 0;
const lisztSongs = ['Liebestraum.mp3', 'ConsolationNo3.mp3', 'LaCampanella.mp3'];
let lisztSongsIndex = 0;
const beethovenSongs = ['MoonlightSonata1stMovement.mp3', 'MoonlightSonata3rdMovement.mp3'];
let beethovenSongsIndex = 0;
const satieSongs = ['Gnossienne1.mp3', 'GymnopedieNo1.mp3'];
let satieSongsIndex = 0;
const mozartSongs = ['FantasiaInDMinor.mp3', 'SerenadeForWinds.mp3'];
let mozartSongsIndex = 0;
const bachSongs = ['ToccataAndFugueInDMinor.mp3', 'AirOnTheGString.mp3'];
let bachSongsIndex = 0;
const albinoniSongs = ['Adagio.mp3'];
let albinoniSongsIndex = 0;
const saintSaensSongs = ['TheSwan.mp3'];
let saintSaensSongsIndex = 0;
const debussySongs = ['Reverie.mp3', 'ClairDeLune.mp3', 'ArabesqueNo1.mp3'];
let debussySongsIndex = 0;
const nicholasHooperSongs = ['WhenGinnyKissedHarry.mp3'];
let nicholasHooperSongsIndex = 0;
const samuelBarberSongs = ['AdagioForStrings.mp3'];
let samuelBarberSongsIndex = 0;
const benEKingSongs = ['StandByMe.mp3'];
let benEKingSongsIndex = 0;
const evaCassidySongs = ['WadeInTheWater.mp3'];
let evaCassidySongsIndex = 0;
const steveVaiSongs = ['ForTheLoveOfGod.mp3', 'TenderSurrender.mp3'];
let steveVaiSongsIndex = 0;
const charlesBradleySongs = ['CryingInTheChapel.mp3'];
let charlesBradleySongsIndex = 0;
const gerryMulliganSongs = ['PreludeInEMinorJazz.mp3'];
let gerryMulliganSongsIndex = 0;
const bearMcCrearySongs = ['Reconciliation.mp3'];
let bearMcCrearySongsIndex = 0;
const donMcLeanSongs = ['Vincent.mp3', 'VincentGuitar.mp3'];
let donMcLeanSongsIndex = 0;
const harryGregsonWilliamsSongs = ['NarniaLullaby.mp3'];
let harryGregsonWilliamsSongsIndex = 0;

let audio = new Audio();

const playSong = (musician) => {
    let str;
    audio.pause();
    switch (musician) {
        case 'Chopin':
            str = `../songs/chopin/${chopinSongs[chopinSongsIndex]}`;
            chopinSongsIndex = (chopinSongsIndex == chopinSongs.length - 1) ? 0 : chopinSongsIndex + 1;
            break;
        case 'Hans Zimmer':
            str = `../songs/hans-zimmer/${hansZimmerSongs[hansZimmerSongsIndex]}`;
            hansZimmerSongsIndex = (hansZimmerSongsIndex == hansZimmerSongs.length - 1) ? 0 : hansZimmerSongsIndex + 1;
            break;
        case 'Schubert':
            str = `../songs/schubert/${schubertSongs[schubertSongsIndex]}`;
            schubertSongsIndex = (schubertSongsIndex == schubertSongs.length - 1) ? 0 : schubertSongsIndex + 1;
            break;
        case 'Liszt':
            str = `../songs/liszt/${lisztSongs[lisztSongsIndex]}`;
            lisztSongsIndex = (lisztSongsIndex == lisztSongs.length - 1) ? 0 : lisztSongsIndex + 1;
            break;
        case 'Beethoven':
            str = `../songs/beethoven/${beethovenSongs[beethovenSongsIndex]}`;
            beethovenSongsIndex = (beethovenSongsIndex == beethovenSongs.length - 1) ? 0 : beethovenSongsIndex + 1;
            break;
        case 'Satie':
            str = `../songs/satie/${satieSongs[satieSongsIndex]}`;
            satieSongsIndex = (satieSongsIndex == satieSongs.length - 1) ? 0 : satieSongsIndex + 1;
            break;
        case 'Mozart':
            str = `../songs/mozart/${mozartSongs[mozartSongsIndex]}`;
            mozartSongsIndex = (mozartSongsIndex == mozartSongs.length - 1) ? 0 : mozartSongsIndex + 1;
            break;
        case 'Bach':
            str = `../songs/bach/${bachSongs[bachSongsIndex]}`;
            bachSongsIndex = (bachSongsIndex == bachSongs.length - 1) ? 0 : bachSongsIndex + 1;
            break;
        case 'Albinoni':
            str = `../songs/albinoni/${albinoniSongs[albinoniSongsIndex]}`;
            albinoniSongsIndex = (albinoniSongsIndex == albinoniSongs.length - 1) ? 0 : albinoniSongsIndex + 1;
            break;
        case 'Saint-Saens':
            str = `../songs/saint-saens/${saintSaensSongs[saintSaensSongsIndex]}`;
            saintSaensSongsIndex = (saintSaensSongsIndex == saintSaensSongs.length - 1) ? 0 : saintSaensSongsIndex + 1;
            break;
        case 'Debussy':
            str = `../songs/debussy/${debussySongs[debussySongsIndex]}`;
            debussySongsIndex = (debussySongsIndex == debussySongsIndex.length - 1) ? 0 : debussySongsIndex + 1;
            break;
        case 'Nicholas Hooper':
            str = `../songs/nicholas-hooper/${nicholasHooperSongs[nicholasHooperSongsIndex]}`;
            nicholasHooperSongsIndex = (nicholasHooperSongsIndex == nicholasHooperSongs.length - 1) ? 0 : nicholasHooperSongsIndex + 1;
            break;
        case 'Samuel Barber':
            str = `../songs/samuel-barber/${samuelBarberSongs[samuelBarberSongsIndex]}`;
            samuelBarberSongsIndex = (samuelBarberSongsIndex == samuelBarberSongs.length - 1) ? 0 : samuelBarberSongsIndex + 1;
            break;
        case 'Ben E. King':
            str = `../songs/ben-e-king/${benEKingSongs[benEKingSongsIndex]}`;
            benEKingSongsIndex = (benEKingSongsIndex == benEKingSongs.length - 1) ? 0 : benEKingSongsIndex + 1;
            break;
        case 'Eva Cassidy':
            str = `../songs/eva-cassidy/${evaCassidySongs[evaCassidySongsIndex]}`;
            evaCassidySongsIndex = (evaCassidySongsIndex == evaCassidySongs.length - 1) ? 0 : evaCassidySongsIndex + 1;
            break;
        case 'Steve Vai':
            str = `../songs/steve-vai/${steveVaiSongs[steveVaiSongsIndex]}`;
            steveVaiSongsIndex = (steveVaiSongsIndex == steveVaiSongs.length - 1) ? 0 : steveVaiSongsIndex + 1;
            break;
        case 'Charles Bradley':
            str = `../songs/charles-bradley/${charlesBradleySongs[charlesBradleySongsIndex]}`;
            charlesBradleySongsIndex = (charlesBradleySongsIndex == charlesBradleySongs.length - 1) ? 0 : charlesBradleySongsIndex + 1;
            break;
        case 'Gerry Mulligan':
            str = `../songs/gerry-mulligan/${gerryMulliganSongs[gerryMulliganSongsIndex]}`;
            gerryMulliganSongsIndex = (gerryMulliganSongsIndex == gerryMulliganSongs.length - 1) ? 0 : gerryMulliganSongsIndex + 1;
            break;
        case 'Bear McCreary':
            str = `../songs/bear-mccreary/${bearMcCrearySongs[bearMcCrearySongsIndex]}`;
            bearMcCrearySongsIndex = (bearMcCrearySongsIndex == bearMcCrearySongs.length - 1) ? 0 : bearMcCrearySongsIndex + 1;
            break;
        case 'Don McLean':
            str = `../songs/don-mclean/${donMcLeanSongs[donMcLeanSongsIndex]}`;
            donMcLeanSongsIndex = (donMcLeanSongsIndex == donMcLeanSongs.length - 1) ? 0 : donMcLeanSongsIndex + 1;
            break;
        case 'Harry Gregson-Williams':
            str = `../songs/harry-gregson-williams/${harryGregsonWilliamsSongs[harryGregsonWilliamsSongsIndex]}`;
            harryGregsonWilliamsSongsIndex = (harryGregsonWilliamsSongsIndex == harryGregsonWilliamsSongs.length - 1) ? 0 : harryGregsonWilliamsSongsIndex + 1;
            break;
    }
    audio = new Audio(str);
    audio.play();
}