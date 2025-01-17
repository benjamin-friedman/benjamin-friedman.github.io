// In addition to be used to create the html document this is used to create musiciansObject which is used to create the events for playing the songs.
// name vs. fileName: the name of the songs often contain characters for which it's best practice to omit them from file names so the actual file name
// of the song will be stored in fileName and will only include lowercase letters and dashes.
export const musiciansArray = [
    {
        id: 'hans-zimmer',
        name: 'Hans Zimmer',
        songs: [
            { name: 'Corynorhinus', fileName: 'corynorhinus', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Myotis', fileName: 'myotis', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Molossus', fileName: 'molossus', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Lasiurus', fileName: 'lasiurus', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Barbastella', fileName: 'barbastella', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Eptescius', fileName: 'eptescius', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Agent of Chaos', fileName: 'agent-of-chaos', soundtrack: 'The Dark Knight', contributors: 'James Newton Howard' },
            { name: 'A Watchful Guardian', fileName: 'a-watchful-guardian', soundtrack: 'The Dark Knight', contributors: 'James Newton Howard' },
            { name: 'A Dark Knight', fileName: 'a-dark-knight', soundtrack: 'The Dark Knight', contributors: 'James Newton Howard' },
            { name: 'Why Do We Fall?', fileName: 'why-do-we-fall', soundtrack: 'The Dark Knight Rises' },
            { name: "Gotham's Reckoning", fileName: 'gothams-reckoning', soundtrack: 'The Dark Knight Rises' },
            { name: 'Imagine the Fire', fileName: 'imagine-the-fire', soundtrack: 'The Dark Knight Rises' },
            { name: 'Necessary Evil', fileName: 'necessary-evil', soundtrack: 'The Dark Knight Rises' },
            { name: 'Nothing Out There', fileName: 'nothing-out-there', soundtrack: 'The Dark Knight Rises' },
            { name: 'Rise', fileName: 'rise', soundtrack: 'The Dark Knight Rises' },
            { name: 'Final Ascent', fileName: 'final-ascent', soundtrack: 'No Time to Die' },
            { name: "He's a Pirate", fileName: 'hes-a-pirate', soundtrack: "Pirates of the Caribbean: The Curse of the Black Pearl", contributors: 'Klaus Badelt' },
            { name: 'Will and Elizabeth', fileName: 'will-and-elizabeth', soundtrack: "Pirates of the Caribbean: The Curse of the Black Pearl", contributors: 'Klaus Badelt' },
            { name: 'The Black Pearl', fileName: 'the-black-pearl', soundtrack: "Pirates of the Caribbean: The Curse of the Black Pearl", contributors: 'Klaus Badelt' },
            { name: 'Wheel of Fortune', fileName: 'wheel-of-fortune', soundtrack: "Pirates of the Caribbean: Dead Man's Chest" },
            { name: 'Jack Sparrow', fileName: 'jack-sparrow', soundtrack: "Pirates of the Caribbean: Dead Man's Chest" },
            { name: 'Davy Jones', fileName: 'davy-jones', soundtrack: "Pirates of the Caribbean: Dead Man's Chest" },
            { name: 'Davy Jones - Piano', fileName: 'davy-jones-piano', soundtrack: "Pirates of the Caribbean: Dead Man's Chest", recordingMusician: 'Fabian Torres' },
            { name: 'Marry Me', fileName: 'marry-me', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: "At Wit's End", fileName: 'at-wits-end', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'Parlay', fileName: 'parlay', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'One Day', fileName: 'one-day', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'Time', fileName: 'time', soundtrack: 'Inception' },
            { name: 'Projections', fileName: 'projections', soundtrack: 'Inception' },
            { name: 'First Step', fileName: 'first-step', soundtrack: 'Interstellar' },
            { name: 'First Step - Piano', fileName: 'first-step-piano', soundtrack: 'Interstellar', recordingMusician: 'Kyle Landry' },
            { name: 'First Step - Guitar', fileName: 'first-step-guitar', soundtrack: 'Interstellar', recordingMusician: 'Eddie van der Meer' },
            { name: 'No Time for Caution', fileName: 'no-time-for-caution', soundtrack: 'Interstellar' },
            { name: 'Mountains', fileName: 'mountains', soundtrack: 'Interstellar' },
            { name: 'Goodbye My Son', fileName: 'goodbye-my-son', soundtrack: 'Man of Steel' },
            { name: 'Is She with You?', fileName: 'is-she-with-you', specialCharactersName: 'Is She with You?', soundtrack: 'Batman v Superman' },
            { name: 'Not in Blood, But in Bond', fileName: 'not-in-blood-but-in-bond', soundtrack: 'Sherlock Holmes' },
            { name: 'Ah, Putrefaction', fileName: 'ah-putrefaction', soundtrack: 'Sherlock Holmes' },
            { name: 'Sherlock Holmes Fantasy', fileName: 'sherlock-holmes-fantasy', soundtrack: 'Sherlock Holmes', contributors: 'Aleksey Igudesman' },
            { name: 'A Way of Life', fileName: 'a-way-of-life', soundtrack: 'The Last Samurai' },
            { name: 'A Small Measure of Peace', fileName: 'a-small-measure-of-peace', soundtrack: 'The Last Samurai' },
            { name: 'Elysium', fileName: 'elysium', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Honor Him', fileName: 'honor-him', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Now We Are Free - Original (Lisa Gerrard)', fileName: 'now-we-are-free-original-lisa-gerrard', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Now We Are Free - Live (Czarina Russell)', fileName: 'now-we-are-free-live-czarina-russell', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Now We Are Free - Cello', fileName: 'now-we-are-free-cello', soundtrack: 'Gladiator', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
        ]
    },
    {
        id: 'chopin',
        name: 'Chopin',
        songs: [
            { name: 'P4 - Prelude in E Minor Op. 28 No. 4', fileName: 'p4-prelude-in-e-minor-op-28-no-4', recordingMusician: 'Kassia' },
            { name: 'P6 - Prelude in B Minor Op. 28 No. 6', fileName: 'p6-prelude-in-b-minor-op-28-no-6', recordingMusician: 'Rousseau' },
            { name: 'P15 - Prelude in D-Flat Major Op. 28 No. 15 (Raindrop Prelude)', fileName: 'p15-prelude-in-d-flat-major-op-28-no-15-raindrop-prelude', recordingMusician: 'Ivo Pogorelich' },
            { name: 'N1 - Nocturne in B-Flat Minor Op. 9 No. 1', fileName: 'n1-nocturne-in-b-flat-minor-op-9-no-1', recordingMusician: 'François Chaplin' },
            { name: 'N2 - Nocturne in E-Flat Major Op. 9 No. 2', fileName: 'n2-nocturne-in-e-flat-major-op-9-no-2', recordingMusician: 'François Chaplin' },
            { name: 'N3 - Nocturne in B Major Op. 9 No. 3', fileName: 'n3-nocturne-in-b-major-op-9-no-3', recordingMusician: 'François Chaplin' },
            { name: 'N4 - Nocturne in F Major Op. 15 No. 1', fileName: 'n4-nocturne-in-f-major-op-15-no-1', recordingMusician: 'François Chaplin' },
            { name: 'N5 - Nocturne in F-Sharp Major Op. 15 No. 2', fileName: 'n5-nocturne-in-f-sharp-major-op-15-no-2', recordingMusician: 'François Chaplin' },
            { name: 'N6 - Nocturne in G Minor Op. 15 No. 3', fileName: 'n6-nocturne-in-g-minor-op-15-no-3', recordingMusician: 'François Chaplin' },
            { name: 'N7 - Nocturne in C-Sharp Minor Op. 27 No. 1', fileName: 'n7-nocturne-in-c-sharp-minor-op-27-no-1', recordingMusician: 'François Chaplin' },
            { name: 'N8 - Nocturne in D-Flat Major Op. 27 No. 2', fileName: 'n8-nocturne-in-d-flat-major-op-27-no-2', recordingMusician: 'François Chaplin' },
            { name: 'N9 - Nocturne in B Major Op. 32 No. 1', fileName: 'n9-nocturne-in-b-major-op-32-no-1', recordingMusician: 'François Chaplin' },
            { name: 'N10 - Nocturne in A-Flat Major Op. 32 No. 2', fileName: 'n10-nocturne-in-a-flat-major-op-32-no-2', recordingMusician: 'François Chaplin' },
            { name: 'N11 - Nocturne in G Minor Op. 37 No. 1', fileName: 'n11-nocturne-in-g-minor-op-37-no-1', recordingMusician: 'François Chaplin' },
            { name: 'N12 - Nocturne in G Major Op. 37 No. 2', fileName: 'n12-nocturne-in-g-major-op-37-no-2', recordingMusician: 'François Chaplin' },
            { name: 'N13 - Nocturne in C Minor Op. 48 No. 1', fileName: 'n13-nocturne-in-c-minor-op-48-no-1', recordingMusician: 'François Chaplin' },
            { name: 'N14 - Nocturne in F-Sharp Minor Op. 48 No. 2', fileName: 'n14-nocturne-in-f-sharp-minor-op-48-no-2', recordingMusician: 'François Chaplin' },
            { name: 'N15 - Nocturne in F Minor Op. 55 No. 1', fileName: 'n15-nocturne-in-f-minor-op-55-no-1', recordingMusician: 'François Chaplin' },
            { name: 'N16 - Nocturne in E-Flat Major Op. 55 No. 2', fileName: 'n16-nocturne-in-e-flat-major-op-55-no-2', recordingMusician: 'François Chaplin' },
            { name: 'N17 - Nocturne in B Major Op. 62 No. 1', fileName: 'n17-nocturne-in-b-major-op-62-no-1', recordingMusician: 'François Chaplin' },
            { name: 'N18 - Nocturne in E Major Op. 62 No. 2', fileName: 'n18-nocturne-in-e-major-op-62-no-2', recordingMusician: 'François Chaplin' },
            { name: 'N19 - Nocturne in E Minor Op. Posth. 72 No. 1', fileName: 'n19-nocturne-in-e-minor-op-posth-72-no-1-wn-23', recordingMusician: 'SLDD Piano' },
            { name: 'N20 - Nocturne in C-Sharp Minor Op. Posth., P. 1 No. 16', fileName: 'n20-nocturne-in-c-sharp-minor-op-posth-p1-no-16', recordingMusician: 'Nelson Goerner' },
            { name: 'N21 - Nocturne in C Minor Op. Posth., P. 2 No. 8', fileName: 'n21-nocturne-in-c-minor-op-posth-p2-no-8', recordingMusician: 'François Chaplin' },
            { name: 'N20 - Nocturne in C-Sharp Minor Op. Posth., P. 1 No. 16 - Cello and Orchestra', fileName: 'n20-nocturne-in-c-sharp-minor-op-posth-p1-no-16-cello-and-orchestra', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
            { name: 'Etude in C Minor Op. 10 No. 12 (Revolutionary Etude)', fileName: 'etude-in-c-minor-op-10-no-12-revolutionary-etude', recordingMusician: 'Rousseau' },
            { name: 'Etude in A Minor Op. 25 No. 11 (Winter Wind)', fileName: 'etude-in-a-minor-op-25-no-11-winter-wind', recordingMusician: 'Rousseau' },
            { name: 'Piano Sonata No. 2 in B-Flat Minor Op. 35 III. (Funeral March)', fileName: 'piano-sonata-no-2-in-b-flat-minor-op-35-iii-funeral-march', recordingMusician: 'Rousseau' },
            { name: 'Fantaisie-Impromptu in C-Sharp Minor Op. Posth. 66', fileName: 'fantaisie-impromptu-in-c-sharp-minor-op-posth-66', recordingMusician: 'Dmitry Shishkin' },
            { name: 'Ballade No. 1 in G Minor Op. 23 (La Ballade)', fileName: 'ballade-no-1-in-g-minor-op-23-la-ballade', recordingMusician: 'Seong-Jin Cho' }
        ]
    },
    {
        id: 'liszt',
        name: 'Liszt',
        songs: [
            { name: 'Liebestraum No. 3 in A-Flat Major S. 541/3 (Love Dream)', fileName: 'liebestraum-no-3-in-a-flat-major-s-541-3-love-dream', recordingMusician: 'Khatia Buniatishvili' },
            { name: 'Romance "O pourquoi donc" in E Minor S. 169', fileName: 'romance-o-pourquoi-donc-in-e-minor-s-169', recordingMusician: 'Genny Basso' },
            { name: 'Consolation No. 3 in D-Flat Major S. 172/3', fileName: 'consolation-no-3-in-d-flat-major-s-172-3', recordingMusician: 'Rousseau' },
            { name: 'Ständchen S. 559a (Serenade)', fileName: 'standchen-s-559a-serenade', recordingMusician: 'Rousseau', composer: 'Schubert' },
            { name: 'Etude No. 3 in D-Flat Major S. 144/3 (Un Sospiro)', fileName: 'etude-no-3-in-d-flat-major-s-144-3-un-sospiro', recordingMusician: 'Rousseau' },
            { name: 'Etude No. 3 in G-Sharp Minor S. 141/3 (La Campanella)', fileName: 'etude-no-3-in-g-sharp-minor-s-141-3-la-campanella', recordingMusician: 'Rousseau', composer: 'Paganini' },
            { name: 'Auf dem Wasser zu singen S. 558/2 (To Sing on the Water)', fileName: 'auf-dem-wasser-zu-singen-s-558-2-to-sing-on-the-water', recordingMusician: 'Fatjon Zefi', composer: 'Schubert' },
            { name: 'Der Doppelgänger S. 560/12 (The Double Walker)', fileName: 'der-doppelganger-s-560-12-the-double-walker', recordingMusician: 'Traum Piano', composer: 'Schubert' },
            { name: 'Hungarian Rhapsody No. 2 in C-Sharp Minor S. 244/2', fileName: 'hungarian-rhapsody-no-2-in-c-sharp-minor-s-244-2', recordingMusician: 'Rousseau' },
            { name: 'Bénédiction de Dieu dans la Solitude S. 173/3 (The Blessing of God in Solitude)', fileName: 'benediction-de-dieu-dans-la-solitude-s-173-3-the-blessing-of-god-in-solitude', recordingMusician: 'Claudio Arrau' }
        ]
    },
    {
        id: 'schubert',
        name: 'Schubert',
        songs: [
            { name: 'Impromptu in G-Flat Major Op. 90 No. 3, D. 899', fileName: 'impromptu-in-g-flat-major-op-90-no-3-d-899', recordingMusician: 'Olga Jegunova' },
            { name: 'Piano Trio No. 2 in E-Flat Major Op. 100, D. 929 II. - Arrangement 1', fileName: 'piano-trio-no-2-in-e-flat-major-op-100-d-929-arrangement-1', recordingMusician: 'Anthony Goldstone (Piano), Moray Welsh (Cello), Ralph Holmes (Violin)' },
            { name: 'Piano Trio No. 2 in E-Flat Major Op. 100, D. 929 II. - Arrangement 2', fileName: 'piano-trio-no-2-in-e-flat-major-op-100-d-929-arrangement-2', recordingMusician: 'Howard Shelley (Piano), Raphael Wallfisch (Cello), Ralph Holmes (Violin)' },
            { name: 'Ständchen D. 889 (Serenade) - Orchestra', fileName: 'standchen-d-889-serenade-orchestra', recordingMusician: 'Unknown' },
            { name: 'Ständchen D. 889 (Serenade) - Cello and Piano', fileName: 'standchen-d-889-serenade-cello-and-piano', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
            { name: 'String Quartet No. 14 in D Minor D. 810 II. (Death and the Maiden)', fileName: 'string-quartet-no-14-in-d-minor-d-810-ii-death-and-the-maiden', recordingMusician: 'Emerson String Quartet' }
        ]
    },
    {
        id: 'beethoven',
        name: 'Beethoven',
        songs: [
            { name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 I. (Moonlight Sonata)', fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-i-moonlight-sonata', recordingMusician: 'Unknown' },
            { name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 I. (Moonlight Sonata) - Cello and Piano', fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-i-moonlight-sonata-cello-and-piano', recordingMusician: 'Lola Astanova (Piano), Stjepan Hauser (Cello)' },
            { name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 I. (Moonlight Sonata) - Ethereal', fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-i-moonlight-sonata-ethereal', arrangement: 'Chris M.' },
            { name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 III. (Moonlight Sonata)', fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-iii-moonlight-sonata', recordingMusician: 'Rousseau' },
            { name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 III. (Moonlight Sonata) - Guitar and Drums', fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-iii-moonlight-sonata-guitar-and-drums', recordingMusician: 'Cole Rolland (Guitar), Kristina Schiano (Drums)' },
            { name: 'Symphony No. 5 in C Minor Op. 67 I.', fileName: 'symphony-no-5-in-c-minor-op-67-i', recordingMusician: 'Berlin Philharmonic Orchestra' },
            { name: 'Symphony No. 9 in D Minor Op. 125 IV. Ode to Joy', fileName: 'symphony-no-9-in-d-minor-op-125-iv-ode-to-joy', recordingMusician: 'London Symphony Orchestra' }
        ]
    },
    {
        id: 'mozart',
        name: 'Mozart',
        songs: [
            { name: 'Fantasia No. 3 in D Minor K. 397 (385g)', fileName: 'fantasia-no-3-in-d-minor-k-397-385g', recordingMusician: 'Kassia' },
            { name: 'Serenade No. 10 for Winds in B-Flat Major K. 361 (370a) III.', fileName: 'serenade-no-10-for-winds-in-b-flat-major-k-361-370a-iii', recordingMusician: 'Academy of St. Martin in the Fields Orchestra' },
            { name: 'Serenade No. 10 for Winds in B-Flat Major K. 361 (370a) VII.', fileName: 'serenade-no-10-for-winds-in-b-flat-major-k-361-370a-vii', recordingMusician: 'Orpheus Chamber Orchestra' },
            { name: 'Serenade No. 13 for Strings in G Major K. 525 I. (Eine kleine Nachtmusik)', fileName: 'serenade-no-13-for-strings-in-g-major-k-525-i-eine-kleine-nachtmusik', recordingMusician: 'Academy of St. Martin in the Fields Orchestra' },
            { name: 'The Marriage of Figaro K. 492 Overture', fileName: 'the-marriage-of-figaro-k-492-overture', recordingMusician: 'Berlin Philharmonic Orchestra' },
            { name: 'Requiem in D Minor K. 626 I. Introitus - Requiem aeternam', fileName: 'requiem-in-d-minor-k-626-i-introitus-requiem-aeternam', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 II. Kyrie', fileName: 'requiem-in-d-minor-k-626-ii-kyrie', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Dies irae', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-dies-irae', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Tuba mirum', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-tuba-mirum', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Rex tremendae', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-rex-tremendae', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Recordare', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-recordare', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Confutatis', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-confutatis', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Lacrimosa', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-lacrimosa', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 IV. Offertorium - Domine Jesu', fileName: 'requiem-in-d-minor-k-626-iv-offertorium-domine-jesu', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 IV. Offertorium - Hostias', fileName: 'requiem-in-d-minor-k-626-iv-offertorium-hostias', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 V. Sanctus', fileName: 'requiem-in-d-minor-k-626-v-sanctus', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 VI. Benedictus', fileName: 'requiem-in-d-minor-k-626-vi-benedictus', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 VII. Agnus dei', fileName: 'requiem-in-d-minor-k-626-vii-agnus-dei', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 VIII. Communio - Lux aeterna', fileName: 'requiem-in-d-minor-k-626-viii-communio-lux-aeterna', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 VIII. Communio - Cum sanctus tuis', fileName: 'requiem-in-d-minor-k-626-viii-com-sanctus-tuis', recordingMusician: "Choir of King's College, Cambridge" },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Lacrimosa - Cello and Orchestra', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-lacrimosa-cello-and-orchestra', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
        ]
    },
    {
        id: 'bach',
        name: 'Bach',
        songs: [
            { name: 'The Well-Tempered Clavier Book 1: Prelude and Fugue No. 1 in C Major BWV 846 I. Prelude', fileName: 'the-well-tempered-clavier-book-1-prelude-and-fugue-no-1-in-c-major-bwv-846-i-prelude', recordingMusician: 'Sviatoslav Richter' },
            { name: 'The Well-Tempered Clavier Book 1: Prelude and Fugue No. 1 in C Major BWV 846 II. Fugue', fileName: 'the-well-tempered-clavier-book-1-prelude-and-fugue-no-1-in-c-major-bwv-846-ii-fugue', recordingMusician: 'Sviatoslav Richter' },
            { name: 'Orchestral Suite No. 3 in D Major BWV 1068 II. (Air on the G String) - Cello and Orchestra', fileName: 'orchestral-suite-no-3-in-d-major-bwv-1068-ii-air-on-the-g-string-cello-and-orchestra', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra', arrangement: 'August Wilhelmj' },
            { name: 'Orchestral Suite No. 3 in D Major BWV 1068 II. (Air on the G String) - Violin and Piano', fileName: 'orchestral-suite-no-3-in-d-major-bwv-1068-ii-air-on-the-g-string-violin-and-piano', recordingMusician: 'Emiri Miyamoto (Violin), Takashi Sato (Piano)', arrangement: 'August Wilhelmj' },
            { name: 'Orchestral Suite No. 3 in D Major BWV 1068 II. (Air on the G String) - Piano', fileName: 'orchestral-suite-no-3-in-d-major-bwv-1068-ii-air-on-the-g-string-piano', recordingMusician: 'Khatia Buniatishvili', arrangement: 'August Wilhelmj' },
            { name: 'Concerto in D Minor BWV 974 II. Adagio', fileName: 'concerto-in-d-minor-bwv-974-ii-adagio', recordingMusician: 'Khatia Buniatishvili', composer: 'Alessandro Marcello' },
            { name: 'Cello Suite No. 1 in G Major BWV 1007 I. Prelude', fileName: 'cello-suite-no-1-in-g-major-bwv-1007-i-prelude', recordingMusician: 'Yo-Yo Ma' },
            { name: 'Toccata and Fugue in D Minor BWV 565', fileName: 'toccata-and-fugue-in-d-minor-bwv-565', recordingMusician: 'Rousseau' }
        ]
    },
    {
        id: 'rachmaninoff',
        name: 'Rachmaninoff',
        songs: [
            { name: 'Piano Concerto No. 2 in C Minor Op. 18 I.', fileName: 'piano-concerto-no-2-in-c-minor-op-18-i', recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie' },
            { name: 'Piano Concerto No. 2 in C Minor Op. 18 II.', fileName: 'piano-concerto-no-2-in-c-minor-op-18-ii', recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie' },
            { name: 'Piano Concerto No. 2 in C Minor Op. 18 III.', fileName: 'piano-concerto-no-2-in-c-minor-op-18-iii', recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie' },
            { name: 'Piano Concerto No. 2 in C Minor Op. 18 II. - Cello and Orchestra', fileName: 'piano-concerto-no-2-in-c-minor-op-18-ii-cello-and-orchestra', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
            { name: 'Piano Concerto No. 3 in D Minor Op. 30 I.', fileName: 'piano-concerto-no-3-in-d-minor-op-30-i', recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie' },
            { name: 'Piano Concerto No. 3 in D Minor Op. 30 II.', fileName: 'piano-concerto-no-3-in-d-minor-op-30-ii', recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie' },
            { name: 'Piano Concerto No. 3 in D Minor Op. 30 III.', fileName: 'piano-concerto-no-3-in-d-minor-op-30-iii', recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie' },
            { name: 'Moment Musicaux in E Minor Op. 16 No. 4', fileName: 'moment-musicaux-in-e-minor-op-16-no-4', recordingMusician: 'Nikolai Lugansky' },
            { name: 'Morceaux de Fantaisie Op. 3 No. 1 Elegie in E-Flat Minor', fileName: 'morceaux-de-fantaisie-op-3-no-1-elegie-in-e-flat-minor', recordingMusician: 'Luke Faulkner' },
            { name: 'Morceaux de Fantaisie Op. 3 No. 1 Elegie in E-Flat Minor - Cello and Piano', fileName: 'morceaux-de-fantaisie-op-3-no-1-elegie-in-e-flat-minor-cello-and-piano', recordingMusician: 'Isata Kanneh-Mason (Piano), Sheku Kanneh-Mason (Cello)' },
            { name: 'Morceaux de Fantaisie Op. 3 No. 2 Prelude in C-Sharp Minor', fileName: 'morceaux-de-fantaisie-op-3-no-2-prelude-in-c-sharp-minor', recordingMusician: 'Nikolai Lugansky' },
            { name: '14 Romances Op. 34 No. 14 (Vocalise) - Cello and Orchestra', fileName: '14-romances-op-34-no-14-vocalise-cello-and-orchestra', recordingMusician: 'Han-Na Chang, Philharmonia Orchestra' },
            { name: '14 Romances Op. 34 No. 14 (Vocalise) - Vocals and Orchestra', fileName: '14-romances-op-34-no-14-vocalise-vocals-and-orchestra', recordingMusician: 'Alison Lau, re:Sound Collective' },
            { name: 'Cello Sonata in G Minor Op. 19 III.', fileName: 'cello-sonata-in-g-minor-op-19-iii', recordingMusician: 'Marie-Ève Scarfone (Piano), Stéphane Tétreault (Cello)' },
            { name: 'Isle of the Dead Op. 29', fileName: 'isle-of-the-dead-op-29', recordingMusician: 'Royal Stockholm Philharmonic Orchestra' }
        ]
    },
    {
        id: 'satie',
        name: 'Satie',
        songs: [
            { name: 'Gymnopédie No. 1', fileName: 'gymnopedie-no-1', recordingMusician: 'Unknown' },
            { name: 'Gymnopédie No. 2', fileName: 'gymnopedie-no-2', recordingMusician: 'Unknown' },
            { name: 'Gymnopédie No. 3', fileName: 'gymnopedie-no-3', recordingMusician: 'Unknown' },
            { name: 'Gnossienne No. 1 - Interpretation 1', fileName: 'gnossienne-no-1-interpretation-1', recordingMusician: 'Anne Queffélec' },
            { name: 'Gnossienne No. 1 - Interpretation 2', fileName: 'gnossienne-no-1-interpretation-2', recordingMusician: 'Alice Sara Ott' },
            { name: 'Gnossienne No. 2', fileName: 'gnossienne-no-2', recordingMusician: 'Reinbert de Leeuw' },
            { name: 'Gnossienne No. 3', fileName: 'gnossienne-no-3', recordingMusician: 'Anne Queffélec' },
            { name: 'Gnossienne No. 4', fileName: 'gnossienne-no-4', recordingMusician: 'Anne Queffélec' },
            { name: 'Gnossienne No. 5', fileName: 'gnossienne-no-5', recordingMusician: 'Anne Queffélec' },
            { name: 'Gnossienne No. 6', fileName: 'gnossienne-no-6', recordingMusician: 'Anne Queffélec' }
        ]
    },
    {
        id: 'debussy',
        name: 'Debussy',
        songs: [
            { name: 'Rêverie', fileName: 'reverie', recordingMusician: 'Rousseau' },
            { name: 'Suite bergamasque L. 75 III. (Clair de lune)', fileName: 'suite-bergamasque-l-75-iii-clair-de-lune', recordingMusician: 'Rousseau' },
            { name: 'Arabesque No. 1 L. 66', fileName: 'arabesque-no-1-l-66', recordingMusician: 'Rousseau' },
            { name: 'Preludes Book 1 L. 117 VIII. (The Girl with the Flaxen Hair)', fileName: 'preludes-book-1-l-117-viii-the-girl-with-the-flaxen-hair', recordingMusician: 'Jacques Rouvier' }
        ]
    },
    {
        id: 'faure',
        name: 'Fauré',
        songs: [
            { name: 'Élégie Op. 24', fileName: 'elegie-op-24', recordingMusician: 'Harriet Krijgh (Cello), Kamilla Isanbaeva (Piano)' }
        ]
    },
    {
        id: 'elgar',
        name: 'Elgar',
        songs: [
            { name: 'Cello Concerto in E Minor Op. 85 I.', fileName: 'cello-concerto-in-e-minor-op-85-i', recordingMusician: 'Sol Gabetta (Cello), Danish National Symphony Orchestra' }
        ]
    },
    {
        id: 'saint-saens',
        name: 'Saint-Saëns',
        songs: [
            { name: 'The Carnival of the Animals XIII. (The Swan) - Cello, Harp, and Orchestra', fileName: 'the-carnival-of-the-animals-xiii-the-swan-cello-harp-and-orchestra', recordingMusician: 'Stjepan Hauser, Zagreb Philharmonic Orchestra' },
            { name: 'The Carnival of the Animals XIII. (The Swan) - Cello and Piano', fileName: 'the-carnival-of-the-animals-xiii-the-swan-cello-and-piano', recordingMusician: 'Kathryn Stott (Piano), Yo-Yo Ma (Cello)' },
            { name: 'Cello Concerto No. 1 in A Minor Op. 33 I. and III.', fileName: 'cello-concerto-no-1-in-a-minor-op-33-i-and-iii', recordingMusician: 'Andrew Shulman' }
        ]
    },
    {
        id: 'giazotto',
        name: 'Giazotto',
        songs: [
            { name: 'Adagio in G Minor - Cello and Orchestra', fileName: 'adagio-in-g-minor-cello-and-orchestra', recordingMusician: 'Stjepan Hauser, Zagreb Philharmonic Orchestra' }
        ]
    },
    {
        id: 'barber',
        name: 'Barber',
        songs: [
            { name: 'Adagio for Strings - Cello and Orchestra', fileName: 'adagio-for-strings-cello-and-orchestra', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
            { name: 'Agnus Dei', fileName: 'agnus-dei', recordingMusician: 'Dale Warland Singers' }
        ]
    },
    {
        id: 'shostakovich',
        name: 'Shostakovich',
        songs: [
            { name: 'Waltz No. 2', fileName: 'waltz-no-2', recordingMusician: 'Andre Rieu and the Johann Strauss Orchestra' }
        ]
    },
    {
        id: 'massenet',
        name: 'Massenet',
        songs: [
            { name: 'Méditation from Thaïs - Violin and Harp', fileName: 'meditation-from-thais-violin-and-harp', recordingMusician: 'Anne-Sophie Bertrand (Harp), Renaud Capuçon (Violin)' },
            { name: 'Méditation from Thaïs - Cello and Orchestra', fileName: 'meditation-from-thais-cello-and-orchestra', recordingMusician: 'Stjepan Hauser, Zagreb Philharmonic Orchestra' }
        ]
    },
    {
        id: 'mussorgsky',
        name: 'Mussorgsky',
        songs: [
            { name: 'Pictures at an Exhibition No. 2 Il Vecchio Castello', fileName: 'pictures-at-an-exhibition-no-2-il-vecchio-castello', recordingMusician: 'Khatia Buniatishvili' },
            { name: 'Pictures at an Exhibition No. 2 Il Vecchio Castello - Orchestra', fileName: 'pictures-at-an-exhibition-no-2-il-vecchio-castello-orchestra', recordingMusician: 'Metamorphose String Orchestra and Pavel Lyubomudrov', arrangement: 'Ravel' },
            { name: 'Night on Bald Mountain', fileName: 'night-on-bald-mountain', recordingMusician: 'New York Philharmonic Orchestra', arrangement: 'Nikolai Rimsky-Korsakov' }
        ]
    },
    {
        id: 'bruch',
        name: 'Bruch',
        songs: [
            { name: 'Kol Nidre', fileName: 'kol-nidre', recordingMusician: 'Mischa Maisky, Frankfurt Radio Symphony Orchestra' }
        ]
    },
    {
        id: 'gruber',
        name: 'Gruber',
        songs: [
            { name: 'Silent Night - Piano', fileName: 'silent-night-piano', recordingMusician: 'Rousseau' },
            { name: 'Silent Night - Cello', fileName: 'silent-night-cello', recordingMusician: 'Future Cello' }
        ]
    },
    {
        id: 'handel',
        name: 'Handel',
        songs: [
            { name: 'Suite No. 1 in B-Flat Major HWV 434 IV.', fileName: 'suite-no-1-in-b-flat-major-hwv-434-iv', recordingMusician: 'Khatia Buniatishvili', arrangement: 'Wilhelm Kempff' },
        ]
    },
    {
        id: 'tchaikovsky',
        name: 'Tchaikovsky',
        songs: [
            { name: 'Swan Lake Op. 20 I. Enchanted Lake', fileName: 'swan-lake-op-20-i-enchanted-lake', recordingMusician: 'Royal Philharmonic Orchestra' },
            { name: 'Swan Lake Op. 20 XXI. Spanish Dance', fileName: 'swan-lake-op-20-xxi-spanish-dance', recordingMusician: 'Royal Philharmonic Orchestra' },
            { name: 'The Nutcracker Op. 71 Pas de Deux', fileName: 'the-nutcracker-op-71-pas-de-deux', recordingMusician: 'London Symphony Orchestra' },
            { name: 'The Nutcracker Suite Op. 71a No. 2a March of the Toy Soldiers', fileName: 'the-nutcracker-suite-op-71a-no-2a-march-of-the-toy-soldiers', recordingMusician: 'Metamorphose String Orchestra' },
            { name: 'The Nutcracker Suite Op. 71a No. 2b Dance of the Sugar Plum Fairy', fileName: 'the-nutcracker-suite-op-71a-no-2b-dance-of-the-sugar-plum-fairy', recordingMusician: 'Metamorphose String Orchestra' },
            { name: 'The Nutcracker Suite Op. 71a No. 2c Russian Dance', fileName: 'the-nutcracker-suite-op-71a-no-2c-russian-dance', recordingMusician: 'Metamorphose String Orchestra' },
            { name: 'The Nutcracker Suite Op. 71a No. 2f Dance of the Mirlitons', fileName: 'the-nutcracker-suite-op-71a-no-2f-dance-of-the-mirlitons', recordingMusician: 'Metamorphose String Orchestra' },
            { name: 'The Nutcracker Suite Op. 71a No. 3 Waltz of the Flowers', fileName: 'the-nutcracker-suite-op-71a-no-3-waltz-of-the-flowers', recordingMusician: 'London Symphony Orchestra' },
            { name: '1812 Overture Op. 49', fileName: '1812-overture-op-49', recordingMusician: 'St. Petersburg Chamber Choir, Leningrad Military Orchestra' }
        ]
    },
    {
        id: 'brahms',
        name: 'Brahms',
        songs: [
            { name: 'Symphony No. 3 in F Major Op. 90 III.', fileName: 'symphony-no-3-in-f-major-op-90-iii', recordingMusician: 'Berlin Philharmonic Orchestra' },
            { name: 'Hungarian Dance No. 1 in G Minor WoO 1', fileName: 'hungarian-dance-no-1-in-g-minor-woo-1', recordingMusician: 'Vienna Philharmonic Orchestra' },
            { name: 'Hungarian Dance No. 5 in G Minor WoO 1', fileName: 'hungarian-dance-no-5-in-g-minor-woo-1', recordingMusician: 'Vienna Philharmonic Orchestra' }
        ]
    },
    {
        id: 'dvorak',
        name: 'Dvořák',
        songs: [
            { name: 'Symphony No. 9 in E Minor Op. 95 B. 178 II. (From the New World)', fileName: 'symphony-no-9-in-e-minor-op-95-b-178-ii-from-the-new-world', recordingMusician: 'Berlin Philharmonic Orchestra' },
        ]
    },
    {
        id: 'grieg',
        name: 'Grieg',
        songs: [
            { name: 'Peer Gynt Suite No. 1 Op. 46 I. (Morning Mood)', fileName: 'peer-gynt-suite-no-1-op-46-i-morning-mood', recordingMusician: 'Berlin Philharmonic Orchestra' },
            { name: 'Peer Gynt Suite No. 1 Op. 46 IV. (In the Hall of the Mountain King)', fileName: 'peer-gynt-suite-no-1-op-46-iv-in-the-hall-of-the-mountain-king', recordingMusician: 'Kassia' },
            { name: 'Holberg Suite Op. 40 IV. (Air)', fileName: 'holberg-suite-op-40-iv-air', recordingMusician: 'Peter Jablonski' },
        ]
    },
    {
        id: 'strauss',
        name: 'Strauss',
        songs: [
            { name: 'The Beautiful Blue Danube Op. 314', fileName: 'the-beautiful-blue-danube-op-314', recordingMusician: 'Vienna Johann Strauss Orchestra' }
        ]
    },
    {
        id: 'verdi',
        name: 'Verdi',
        songs: [
            { name: 'Messa da Requiem II. Dies irae - Dies irae', fileName: 'messa-da-requiem-ii-dies-irae-dies-irae', recordingMusician: 'Frankfurt Radio Symphony Orchestra' }
        ]
    },
    {
        id: 'donizetti',
        name: 'Donizetti',
        songs: [
            { name: "Una furtiva lagrima from L'elisir d'amore - Cello and Orchestra", fileName: 'una-furtiva-lagrima-from-l-elisir-d-amore-cello-and-orchestra', recordingMusician: 'Camille Thomas, Brussels Philharmonic Orchestra' }
        ]
    },
    {
        id: 'mascagni',
        name: 'Mascagni',
        songs: [
            { name: 'Intermezzo sinfonico from Cavalleria rusticana', fileName: 'intermezzo-sinfonico-from-cavalleria-rusticana', recordingMusician: 'Orchestra del Teatro alla Scala di Milano' },
            { name: 'Intermezzo sinfonico from Cavalleria rusticana - Cello and Orchestra', fileName: 'intermezzo-sinfonico-from-cavalleria-rusticana-cello-and-orchestra', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' }
        ]
    },
    {
        id: 'harry-gregson-williams',
        name: 'Harry Gregson-Williams',
        songs: [
            { name: 'Narnia Lullaby', fileName: 'narnia-lullaby', soundtrack: 'The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe' }
        ]
    },
    {
        id: 'steve-jablonsky',
        name: 'Steve Jablonsky',
        songs: [
            { name: 'Arrival to Earth', fileName: 'arrival-to-earth', soundtrack: 'Transformers' },
            { name: 'Tessa', fileName: 'tessa', soundtrack: 'Transformers: Age of Extinction' },
            { name: 'Sacrifice', fileName: 'sacrifice', soundtrack: 'Transformers: The Last Knight' }
        ]
    },
    {
        id: 'james-newton-howard',
        name: 'James Newton Howard',
        songs: [
            { name: 'Tenuous Winners/Returning Home', fileName: 'tenuous-winners-returning-home', soundtrack: 'The Hunger Games' },
            { name: "Rue's Farewell", fileName: 'rues-farewell', soundtrack: 'The Hunger Games' },
            { name: 'Katniss Is Chosen', fileName: 'katniss-is-chosen', soundtrack: 'The Hunger Games: Catching Fire' },
            { name: 'The Tour', fileName: 'the-tour', soundtrack: 'The Hunger Games: Catching Fire' },
            { name: 'District 8 Hospital', fileName: 'district-8-hospital', soundtrack: 'The Hunger Games: Mockingjay Part 1' },
            { name: "They're Back", fileName: 'theyre-back', soundtrack: 'The Hunger Games: Mockingjay Part 1' },
            { name: 'Send Me to District 2', fileName: 'send-me-to-district-2', soundtrack: 'The Hunger Games: Mockingjay Part 2' },
            { name: 'Primrose', fileName: 'primrose', soundtrack: 'The Hunger Games: Mockingjay Part 2' },
            { name: "Snow's Execution", fileName: 'snows-execution', soundtrack: 'The Hunger Games: Mockingjay Part 2' },
            { name: 'There Are Worse Games to Play-Deep in the Meadow-The Hunger Games Suite', fileName: 'there-are-worse-games-to-play-deep-in-the-meadow-the-hunger-games-suite', soundtrack: 'The Hunger Games: Mockingjay Part 2' }
        ]
    },
    {
        id: 'john-williams',
        name: 'John Williams',
        songs: [
            { name: 'Leaving Hogwarts', fileName: 'leaving-hogwarts', soundtrack: "Harry Potter and the Sorcerer's Stone" }
        ]
    },
    {
        id: 'patrick-doyle',
        name: 'Patrick Doyle',
        songs: [
            { name: 'Another Year Ends', fileName: 'another-year-ends', soundtrack: 'Harry Potter and the Goblet of Fire' }
        ]
    },
    {
        id: 'nicholas-hooper',
        name: 'Nicholas Hooper',
        songs: [
            { name: 'Death of Sirius', fileName: 'death-of-sirius', soundtrack: 'Harry Potter and the Order of the Phoenix' },
            { name: 'Possession', fileName: 'possession', soundtrack: 'Harry Potter and the Order of the Phoenix' },
            { name: 'When Ginny Kissed Harry', fileName: 'when-ginny-kissed-harry', soundtrack: 'Harry Potter and the Half-Blood Prince' },
            { name: 'The Drink of Despair', fileName: 'the-drink-of-despair', soundtrack: 'Harry Potter and the Half-Blood Prince' },
            { name: 'Inferi in the Firestorm', fileName: 'inferi-in-the-firestorm', soundtrack: 'Harry Potter and the Half-Blood Prince' },
            { name: 'The Killing of Dumbledore', fileName: 'the-killing-of-dumbledore', soundtrack: 'Harry Potter and the Half-Blood Prince' },
            { name: "Dumbledore's Farewell", fileName: 'dumbledores-farewell', soundtrack: 'Harry Potter and the Half-Blood Prince' }
        ]
    },
    {
        id: 'alexandre-desplat',
        name: 'Alexandre Desplat',
        songs: [
            { name: "Lily's Theme", fileName: 'lilys-theme', soundtrack: 'Harry Potter and the Deathly Hallows Part 2' },
            { name: 'Severus and Lily', fileName: 'severus-and-lily', soundtrack: 'Harry Potter and the Deathly Hallows Part 2' },
            { name: "Snape's Demise", fileName: 'snapes-demise', soundtrack: 'Harry Potter and the Deathly Hallows Part 2' }
        ]
    },
    {
        id: 'howard-shore',
        name: 'Howard Shore',
        songs: [
            { name: 'Théoden King', fileName: 'theoden-king', soundtrack: 'The Lord of the Rings: The Two Towers' },
            { name: 'Edoras', fileName: 'edoras', soundtrack: 'The Lord of the Rings: The Two Towers' }
        ]
    },
    {
        id: 'michael-giacchino',
        name: 'Michael Giacchino',
        songs: [
            { name: 'Married Life', fileName: 'married-life', soundtrack: 'Up' }
        ]
    },
    {
        id: 'bear-mccreary',
        name: 'Bear McCreary',
        songs: [
            { name: 'The Hand', fileName: 'the-hand', soundtrack: 'The Walking Dead' },
            { name: 'Reconciliation', fileName: 'reconciliation', soundtrack: 'The Walking Dead' },
            { name: "Carl's Theme", fileName: 'carls-theme', soundtrack: 'The Walking Dead' },
            { name: "Rick's Despair", fileName: 'ricks-despair', soundtrack: 'The Walking Dead' },
            { name: 'The Day Will Come', fileName: 'the-day-will-come', soundtrack: 'The Walking Dead' },
            { name: 'Coda', fileName: 'coda', soundtrack: 'The Walking Dead' },
            { name: 'New Journey', fileName: 'new-journey', soundtrack: 'The Walking Dead' },
        ]
    },
    {
        id: 'jesper-kyd',
        name: 'Jesper Kyd',
        songs: [
            { name: 'Earth', fileName: 'earth', soundtrack: "Assassin's Creed II" },
            { name: "Ezio's Family", fileName: 'ezios-family', soundtrack: "Assassin's Creed II" },
            { name: 'Home of the Brotherhood', fileName: 'home-of-the-brotherhood', soundtrack: "Assassin's Creed II" },
            { name: 'Tour of Venice', fileName: 'tour-of-venice', soundtrack: "Assassin's Creed II" },
            { name: 'Flight Over Venice 1', fileName: 'flight-over-venice-1', soundtrack: "Assassin's Creed II" },
            { name: 'City of Rome', fileName: 'city-of-rome', soundtrack: "Assassin's Creed: Brotherhood" },
            { name: 'Echoes of the Roman Ruins', fileName: 'echoes-of-the-roman-ruins', soundtrack: "Assassin's Creed: Brotherhood" },
            { name: "Assassin's Creed Theme", fileName: 'assassins-creed-theme', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'You Have Earned Your Rest', fileName: 'you-have-earned-your-rest', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'We Talk Together', fileName: 'we-talk-together', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'Byzantium', fileName: 'byzantium', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: "Suleiman's Grief", fileName: 'suleimans-grief', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'An Unsubtle Approach', fileName: 'an-unsubtle-approach', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'Labored and Lost', fileName: 'labored-and-lost', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'Chase the Target', fileName: 'chase-the-target', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'The Hunter', fileName: 'the-hunter', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' }
        ]
    },
    {
        id: 'lorne-balfe',
        name: 'Lorne Balfe',
        songs: [
            { name: "Assassin's Creed III Main Theme", fileName: 'assassins-creed-iii-main-theme', soundtrack: "Assassin's Creed III" },
            { name: 'Breaching the Walls', fileName: 'breaching-the-walls', soundtrack: "Assassin's Creed III" },
            { name: "Connor's Life", fileName: 'connors-life', soundtrack: "Assassin's Creed III" },
            { name: 'Farewell', fileName: 'farewell', soundtrack: "Assassin's Creed III" },
            { name: 'Homestead', fileName: 'homestead', soundtrack: "Assassin's Creed III" },
            { name: 'Wild Instincts', fileName: 'wild-instincts', soundtrack: "Assassin's Creed III" },
            { name: 'Welcome to Boston', fileName: 'welcome-to-boston', soundtrack: "Assassin's Creed III" },
            { name: 'Trouble in Town', fileName: 'trouble-in-town', soundtrack: "Assassin's Creed III" },
            { name: 'An Uncertain Present', fileName: 'an-uncertain-present', soundtrack: "Assassin's Creed III" },
            { name: 'Beer and Friends', fileName: 'beer-and-friends', soundtrack: "Assassin's Creed III" },
            { name: 'Fight Club', fileName: 'fight-club', soundtrack: "Assassin's Creed III" },
            { name: 'The Ends of the Earth', fileName: 'the-ends-of-the-earth', soundtrack: "Assassin's Creed IV: Black Flag" }
        ]
    },
    {
        id: 'zack-hemsey',
        name: 'Zack Hemsey',
        songs: [
            { name: 'The Way', fileName: 'the-way' }
        ]
    },
    {
        id: 'jorge-quintero',
        name: 'Jorge Quintero',
        songs: [
            { name: '300 Violin Orchestra', fileName: '300-violin-orchestra' }
        ]
    },
    {
        id: 'johann-johannsson',
        name: 'Johann Johannsson',
        songs: [
            { name: "The Sun's Gone Dim and the Sky's Turned Black", fileName: 'the-suns-gone-dim-and-the-skys-turned-black' }
        ]
    },
    {
        id: 'atis-freivalds',
        name: 'Atis Freivalds',
        songs: [
            { name: 'Paradox', fileName: 'paradox' },
            { name: 'For Her', fileName: 'for-her' },
            { name: 'Aurora Borealis', fileName: 'aurora-borealis' },
            { name: 'The Light Between Us', fileName: 'the-light-between-us' },
            { name: 'Rain', fileName: 'rain' },
            { name: 'You and Me', fileName: 'you-and-me' }
        ]
    },
    {
        id: 'mike-patton',
        name: 'Mike Patton',
        songs: [
            { name: 'The Snow Angel', fileName: 'the-snow-angel', soundtrack: 'The Place Beyond the Pines' }
        ]
    },
    {
        id: 'max-richter',
        name: 'Max Richter',
        songs: [
            { name: 'On the Nature of Daylight', fileName: 'on-the-nature-of-daylight' }
        ]
    },
    {
        id: 'andrea-guerra',
        name: 'Andrea Guerra',
        songs: [
            { name: 'Welcome Chris', fileName: 'welcome-chris', soundtrack: 'The Pursuit of Happyness' }
        ]
    },
    {
        id: 'marcelo-zarvos',
        name: 'Marcelo Zarvos',
        songs: [
            { name: "Clay and Daniella's Theme", fileName: 'clay-and-daniellas-theme', soundtrack: 'The Words' },
            { name: 'Haunted', fileName: 'haunted', soundtrack: 'The Words' },
            { name: 'The Old Man', fileName: 'the-old-man', soundtrack: 'The Words' },
            { name: 'The Wedding', fileName: 'the-wedding', soundtrack: 'The Words' }
        ]
    },
    {
        id: 'lucio-dalla',
        name: 'Lucio Dalla',
        songs: [
            { name: 'Caruso', fileName: 'caruso' },
            { name: 'Caruso - Cello', fileName: 'caruso-cello', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' }
        ]
    },
    {
        id: 'luciano-pavarotti',
        name: 'Luciano Pavarotti',
        songs: [
            { name: 'Nessun Dorma', fileName: 'nessun-dorma' }
            
        ]
    },
    {
        id: 'ben-e-king',
        name: 'Ben E. King',
        songs: [
            { name: 'Stand By Me', fileName: 'stand-by-me' }
        ]
    },
    {
        id: 'eva-cassidy',
        name: 'Eva Cassidy',
        songs: [
            { name: 'Wade in the Water', fileName: 'wade-in-the-water' },
            { name: 'Fields of Gold', fileName: 'fields-of-gold' }
        ]
    },
    {
        id: 'charles-bradley',
        name: 'Charles Bradley',
        songs: [
            { name: 'Crying in the Chapel', fileName: 'crying-in-the-chapel' }
        ]
    },
    {
        id: 'marvin-gaye-tammi-terrell',
        name: 'Marvin Gaye and Tammi Terrell',
        songs: [
            { name: "Ain't No Mountain High Enough", fileName: 'aint-no-mountain-high-enough' }
        ]
    },
    {
        id: 'donny-hathaway',
        name: 'Donny Hathaway',
        songs: [
            { name: 'A Song for You', fileName: 'a-song-for-you' }
        ]
    },
    {
        id: 'the-foundations',
        name: 'The Foundations',
        songs: [
            { name: 'Build Me Up Buttercup', fileName: 'build-me-up-buttercup' }
        ]
    },
    {
        id: 'righteous-brothers',
        name: 'Righteous Brothers',
        songs: [
            { name: 'Unchained Melody', fileName: 'unchained-melody' }
        ]
    },
    {
        id: 'johnny-hartman',
        name: 'Johnny Hartman',
        songs: [
            { name: 'For All We Know', fileName: 'for-all-we-know' },
            { name: 'I See Your Face Before Me', fileName: 'i-see-your-face-before-me' }
        ]
    },
    {
        id: 'bobby-darin',
        name: 'Bobby Darin',
        songs: [
            { name: 'The Curtain Falls', fileName: 'the-curtain-falls' }
        ]
    },
    {
        id: 'van-morrison',
        name: 'Van Morrison',
        songs: [
            { name: 'Moondance', fileName: 'moondance' },
            { name: 'Brown Eyed Girl', fileName: 'brown-eyed-girl' }
        ]
    },
    {
        id: 'james-brown',
        name: 'James Brown',
        songs: [
            { name: 'Try Me', fileName: 'try-me' }
        ]
    },
    {
        id: 'etta-james',
        name: 'Etta James',
        songs: [
            { name: "I'd Rather Go Blind", fileName: 'id-rather-go-blind' },
            { name: "Lord Don't Move That Mountain", fileName: 'lord-dont-move-that-mountain' }
        ]
    },
    {
        id: 'charles-aznavour',
        name: 'Charles Aznavour',
        songs: [
            { name: 'For Me Formidable', fileName: 'for-me-formidable' }
        ]
    },
    {
        id: 'jerry-herman',
        name: 'Jerry Herman',
        songs: [
            { name: 'It Only Takes a Moment', fileName: 'it-only-takes-a-moment', recordingMusician: 'Michael Crawford, Marianne McAndrew' },
        ]
    },
    {
        id: 'kitty-kallen',
        name: 'Kitty Kallen',
        songs: [
            { name: "It's Been a Long, Long Time", fileName: 'its-been-a-long-long-time', composer: 'Jule Styne (Music), Sammy Cahn (Lyrics)', recordingMusician: 'Kitty Kallen, Harry James and His Orchestra' },
        ]
    },
    {
        id: 'israel-kamakawiwoole',
        name: "Israel Kamakawiwo'ole",
        songs: [
            { name: 'Somewhere Over the Rainbow', fileName: 'somewhere-over-the-rainbow' }
        ]
    },
    {
        id: 'nick-cave',
        name: 'Nick Cave',
        songs: [
            { name: 'O Children', fileName: 'o-children' }
        ]
    },
    {
        id: 'imogen-heap',
        name: 'Imogen Heap',
        songs: [
            { name: 'Hide and Seek', fileName: 'hide-and-seek' }
        ]
    },
    {
        id: 'don-mclean',
        name: 'Don McLean',
        songs: [
            { name: 'Vincent', fileName: 'vincent' },
            { name: 'Vincent - Guitar', fileName: 'vincent-guitar', recordingMusician: 'Daniel Champagne' },
            { name: 'American Pie', fileName: 'american-pie' }
        ]
    },
    {
        id: 'the-mamas-and-the-papas',
        name: 'The Mamas and the Papas',
        songs: [
            { name: "California Dreamin'", fileName: 'california-dreamin' }
        ]
    },
    {
        id: 'patrick-watson',
        name: 'Patrick Watson',
        songs: [
            { name: 'To Build a Home', fileName: 'to-build-a-home', contributors: 'The Cinematic Orchestra' }
        ]
    },
    {
        id: 'rufus-wainwright',
        name: 'Rufus Wainwright',
        songs: [
            { name: 'Hallelujah', fileName: 'hallelujah', composer: 'Leonard Bernstein' }
        ]
    },
    {
        id: 'duffy',
        name: 'Duffy',
        songs: [
            { name: 'Delayed Devotion', fileName: 'delayed-devotion' }
        ]
    },
    {
        id: 'matt-maltese',
        name: 'Matt Maltese',
        songs: [
            { name: 'As the World Caves In', fileName: 'as-the-world-caves-in' }
        ]
    },
    {
        id: 'maxwell',
        name: 'Maxwell',
        songs: [
            { name: 'Pretty Wings', fileName: 'pretty-wings' }
        ]
    },
    {
        id: 'bob-dylan',
        name: 'Bob Dylan',
        songs: [
            { name: 'Things Have Changed', fileName: 'things-have-changed' }
        ]
    },
    {
        id: 'johnny-cash',
        name: 'Johnny Cash',
        songs: [
            { name: "God's Gonna Cut You Down", fileName: 'gods-gonna-cut-you-down' },
            { name: 'Hurt', fileName: 'hurt' }
        ]
    },
    {
        id: 'ben-howard',
        name: 'Ben Howard',
        songs: [
            { name: 'Oats in the Water', fileName: 'oats-in-the-water' }
        ]
    },
    {
        id: 'd-angelo',
        name: "D'Angelo",
        songs: [
            { name: 'Unshaken', fileName: 'unshaken' }
        ]
    },
    {
        id: 'jamie-n-commons',
        name: 'Jamie N Commons',
        songs: [
            { name: 'Lead Me Home', fileName: 'lead-me-home' }
        ]
    },
    {
        id: 'phillip-phillips',
        name: 'Phillip Phillips',
        songs: [
            { name: 'Home', fileName: 'home' }
        ]
    },
    {
        id: 'hunter-metts',
        name: 'Hunter Metts',
        songs: [
            { name: 'Open', fileName: 'open' }
        ]
    },
    {
        id: 'john-mayer',
        name: 'John Mayer',
        songs: [
            { name: 'Gravity', fileName: 'gravity' }
        ]
    },
    {
        id: 'billy-joel',
        name: 'Billy Joel',
        songs: [
            { name: 'Piano Man', fileName: 'piano-man' }
        ]
    },
    {
        id: 'john-denver',
        name: 'John Denver',
        songs: [
            { name: 'Take Me Home, Country Roads', fileName: 'take-me-home-country-roads' }
        ]
    },
    {
        id: 'ritchie-valens',
        name: 'Ritchie Valens',
        songs: [
            { name: 'La Bamba', fileName: 'la-bamba' }
        ]
    },
    {
        id: 'jon-batiste',
        name: 'Jon Batiste',
        songs: [
            { name: 'Blackbird', fileName: 'blackbird', composer: 'The Beatles' }
        ]
    },
    {
        id: 'the-chords',
        name: 'The Chords',
        songs: [
            { name: 'Sh-Boom', fileName: 'sh-boom' }
        ]
    },
    {
        id: 'the-isley-brothers',
        name: 'The Isley Brothers',
        songs: [
            { name: 'Shout', fileName: 'shout' }
        ]
    },
    {
        id: 'luis-demetrio-pablo-beltran-ruiz',
        name: 'Luis Demetrio and Pablo Beltrán Ruiz',
        songs: [
            { name: 'Sway (¿Quién será?)', fileName: 'sway-quien-sera', recordingMusician: 'Michael Bublé', contributors: 'Norman Gimbel' },
            { name: 'Sway (¿Quién será?) - Cello', fileName: 'sway-quien-sera-cello', recordingMusician: 'Stjepan Hauser' }
        ]
    },
    {
        id: 'joe-strummer-and-the-mescaleros',
        name: 'Joe Strummer and the Mescaleros',
        songs: [
            { name: 'Mondo Bongo', fileName: 'mondo-bongo' }
        ]
    },
    {
        id: 'imad-fares',
        name: 'Imad Fares',
        songs: [
            { name: 'Gipsy Kings', fileName: 'gipsy-kings' }
        ]
    },
    {
        id: 'rodrigo-and-gabriela',
        name: 'Rodrigo y Gabriela',
        songs: [
            { name: 'Diablo Rojo', fileName: 'diablo-rojo' }
        ]
    },
    {
        id: 'estas-tonne',
        name: 'Estas Tonne',
        songs: [
            { name: 'The Song of the Golden Dragon', fileName: 'the-song-of-the-golden-dragon' }
        ]
    },
    {
        id: 'steve-vai',
        name: 'Steve Vai',
        songs: [
            { name: 'For the Love of God', fileName: 'for-the-love-of-god' },
            { name: 'Tender Surrender', fileName: 'tender-surrender' }
        ]
    },
    {
        id: 'neogeofanatic',
        name: 'Neogeofanatic',
        songs: [
            { name: 'My Gibson Les Paul Is Crying', fileName: 'my-gibson-les-paul-is-crying' }
        ]
    },
    {
        id: 'rhapsody-of-fire',
        name: 'Rhapsody of Fire',
        songs: [
            { name: 'Gargoyles, Angels of Darkness', fileName: 'gargoyles-angels-of-darkness' }
        ]
    },
    {
        id: 'meshuggah',
        name: 'Meshuggah',
        songs: [
            { name: 'Bleed', fileName: 'bleed' },
            { name: 'Demiurge', fileName: 'demiurge' }
        ]
    },
    {
        id: 'slipknot',
        name: 'Slipknot',
        songs: [
            { name: 'All Out Life', fileName: 'all-out-life' },
            { name: 'Psychosocial', fileName: 'psychosocial' },
            { name: 'Sulfur', fileName: 'sulfur' },
            { name: 'Disasterpiece', fileName: 'disasterpiece' },
            { name: 'Skin Ticket', fileName: 'skin-ticket' },
            { name: 'Purity', fileName: 'purity' },
            { name: '(sic)', fileName: 'sic' },
            { name: 'Surfacing', fileName: 'surfacing' },
            { name: 'Duality', fileName: 'duality' },
            { name: 'Custer', fileName: 'custer' },
            { name: 'The Devil in I', fileName: 'the-devil-in-i' },
            { name: 'Everything Ends', fileName: 'everything-ends' },
            { name: 'The Negative One', fileName: 'the-negative-one' },
            { name: 'Snuff', fileName: 'snuff' }
        ]
    },
    {
        id: 'firewind',
        name: 'Firewind',
        songs: [
            { name: 'Allegiance', fileName: 'allegiance' }
        ]
    },
    {
        id: 'pantera',
        name: 'Pantera',
        songs: [
            { name: 'Mouth for War', fileName: 'mouth-for-war' },
            { name: 'Walk', fileName: 'walk' }
        ]
    },
    {
        id: 'system-of-a-down',
        name: 'System of a Down',
        songs: [
            { name: 'Toxicity', fileName: 'toxicity' }
        ]
    },
    {
        id: 'rage-against-the-machine',
        name: 'Rage Against the Machine',
        songs: [
            { name: 'Killing in the Name', fileName: 'killing-in-the-name' }
        ]
    },
    {
        id: 'disturbed',
        name: 'Disturbed',
        songs: [
            { name: 'Down with the Sickness', fileName: 'down-with-the-sickness' },
            { name: 'The Sound of Silence', fileName: 'the-sound-of-silence', composer: 'Simon and Garfunkel' }
        ]
    },
    {
        id: 'nirvana',
        name: 'Nirvana',
        songs: [
            { name: 'Smells Like Teen Spirit', fileName: 'smells-like-teen-spirit' },
            { name: 'Heart-Shaped Box', fileName: 'heart-shaped-box' }
        ]
    },
    {
        id: 'metallica',
        name: 'Metallica',
        songs: [
            { name: 'Enter Sandman', fileName: 'enter-sandman' },
            { name: 'Nothing Else Matters', fileName: 'nothing-else-matters' }
        ]
    },
    {
        id: 'aerosmith',
        name: 'Aerosmith',
        songs: [
            { name: 'Dream On', fileName: 'dream-on' }
        ]
    },
    {
        id: 'blue-oyster-cult',
        name: 'Blue Oyster Cult',
        songs: [
            { name: "(Don't Fear) The Reaper", fileName: 'dont-fear-the-reaper' }
        ]
    },
    {
        id: 'guns-n-roses',
        name: "Guns N' Roses",
        songs: [
            { name: "Sweet Child O' Mine", fileName: 'sweet-child-o-mine' },
            { name: 'Welcome to the Jungle', fileName: 'welcome-to-the-jungle' }
        ]
    },
    {
        id: 'ac-dc',
        name: 'AC/DC',
        songs: [
            { name: 'Thunderstruck', fileName: 'thunderstruck' },
            { name: 'Thunderstruck - Cello', fileName: 'thunderstruck-cello', recordingMusician: '2Cellos' }
        ]
    },
    {
        id: 'motley-crue',
        name: 'Motley Crue',
        songs: [
            { name: 'Kickstart My Heart', fileName: 'kickstart-my-heart' }
        ]
    },
    {
        id: 'the-who',
        name: 'The Who',
        songs: [
            { name: "Baba O'Riley", fileName: 'baba-o-riley' },
            { name: 'Who Are You', fileName: 'who-are-you' },
            { name: 'Pinball Wizard', fileName: 'pinball-wizard' }
        ]
    },
    {
        id: 'rem',
        name: 'R.E.M.',
        songs: [
            { name: 'Losing My Religion', fileName: 'losing-my-religion' },
            { name: 'Man on the Moon', fileName: 'man-on-the-moon' }
        ]
    },
    {
        id: 'creedence-clearwater-revival',
        name: 'Creedence Clearwater Revival',
        songs: [
            { name: 'Have You Ever Seen the Rain', fileName: 'have-you-ever-seen-the-rain' },
            { name: 'Fortunate Son', fileName: 'fortunate-son' }
        ]
    },
    {
        id: 'the-beatles',
        name: 'The Beatles',
        songs: [
            { name: 'In My Life', fileName: 'in-my-life' },
            { name: 'Let It Be', fileName: 'let-it-be' },
            { name: 'Girl', fileName: 'girl' },
            { name: 'Michelle', fileName: 'michelle' },
            { name: 'Eleanor Rigby', fileName: 'eleanor-rigby' },
            { name: 'The Long and Winding Road', fileName: 'the-long-and-winding-road' },
            { name: 'Yesterday', fileName: 'yesterday' },
            { name: 'Twist and Shout', fileName: 'twist-and-shout' },
            { name: 'Help!', fileName: 'help' },
            { name: 'All You Need Is Love', fileName: 'all-you-need-is-love' },
            { name: 'Penny Lane', fileName: 'penny-lane' },
            { name: 'Hey Jude', fileName: 'hey-jude' }
        ]
    },
    {
        id: 'steely-dan',
        name: 'Steely Dan',
        songs: [
            { name: 'Do It Again', fileName: 'do-it-again' }
        ]
    },
    {
        id: 'the-band',
        name: 'The Band',
        songs: [
            { name: 'The Weight', fileName: 'the-weight' }
        ]
    },
    {
        id: 'electric-light-orchestra',
        name: 'Electric Light Orchestra',
        songs: [
            { name: 'Mr. Blue Sky', fileName: 'mr-blue-sky' }
        ]
    },
    {
        id: 'cream',
        name: 'Cream',
        songs: [
            { name: 'White Room', fileName: 'white-room' }
        ]
    },
    {
        id: 'the-j-geils-band',
        name: 'The J. Geils Band',
        songs: [
            { name: 'Centerfold', fileName: 'centerfold' }
        ]
    },
    {
        id: 'dick-dale',
        name: 'Dick Dale',
        songs: [
            { name: 'Miserlou', fileName: 'miserlou' }
        ]
    },
    {
        id: 'joan-jett-and-the-blackhearts',
        name: 'Joan Jett and the Blackhearts',
        songs: [
            { name: "I Love Rock 'N Roll", fileName: 'i-love-rock-n-roll', composer: 'The Arrows' }
        ]
    },
    {
        id: 'the-cranberries',
        name: 'The Cranberries',
        songs: [
            { name: 'Zombie', fileName: 'zombie' }
        ]
    },
    {
        id: '4-non-blondes',
        name: '4 Non Blondes',
        songs: [
            { name: "What's Up", fileName: 'whats-up' }
        ]
    },
    {
        id: 'radiohead',
        name: 'Radiohead',
        songs: [
            { name: 'Creep', fileName: 'creep' },
            { name: 'How to Disappear Completely', fileName: 'how-to-disappear-completely' }
        ]
    },
    {
        id: 'alice-in-chains',
        name: 'Alice in Chains',
        songs: [
            { name: 'Nutshell', fileName: 'nutshell' }
        ]
    },
    {
        id: 'muse',
        name: 'Muse',
        songs: [
            { name: 'Uprising', fileName: 'uprising' },
            { name: 'Starlight', fileName: 'starlight' },
            { name: 'Supermassive Black Hole', fileName: 'supermassive-black-hole' }
        ]
    },
    {
        id: 'my-chemical-romance',
        name: 'My Chemical Romance',
        songs: [
            { name: 'The Ghost of You', fileName: 'the-ghost-of-you' }
        ]
    },
    {
        id: 'linkin-park',
        name: 'Linkin Park',
        songs: [
            { name: 'Numb', fileName: 'numb' }
        ]
    },
    {
        id: 'twenty-one-pilots',
        name: 'Twenty One Pilots',
        songs: [
            { name: 'Ride', fileName: 'ride' }
        ]
    },
    {
        id: 'the-goo-goo-dolls',
        name: 'The Goo Goo Dolls',
        songs: [
            { name: 'Iris', fileName: 'iris' }
        ]
    },
    {
        id: 'oasis',
        name: 'Oasis',
        songs: [
            { name: 'Wonderwall', fileName: 'wonderwall' }
        ]
    },
    {
        id: 'augustana',
        name: 'Augustana',
        songs: [
            { name: 'Boston', fileName: 'boston' }
        ]
    },
    {
        id: 'the-killers',
        name: 'The Killers',
        songs: [
            { name: 'Mr. Brightside', fileName: 'mr-brightside' }
        ]
    },
    {
        id: 'green-day',
        name: 'Green Day',
        songs: [
            { name: 'Boulevard of Broken Dreams', fileName: 'boulevard-of-broken-dreams' },
            { name: '21 Guns', fileName: '21-guns' }
        ]
    },
    {
        id: 'coldplay',
        name: 'Coldplay',
        songs: [
            { name: 'The Scientist', fileName: 'the-scientist' },
            { name: 'Yellow', fileName: 'yellow' },
            { name: 'Fix You', fileName: 'fix-you' },
            { name: 'Viva la Vida', fileName: 'viva-la-vida' },
            { name: 'Adventure of a Lifetime', fileName: 'adventure-of-a-lifetime' }
        ]
    },
    {
        id: 'snow-patrol',
        name: 'Snow Patrol',
        songs: [
            { name: 'Chasing Cars', fileName: 'chasing-cars' }
        ]
    },
    {
        id: 'wilco',
        name: 'Wilco',
        songs: [
            { name: 'How to Fight Loneliness', fileName: 'how-to-fight-loneliness' }
        ]
    },
    {
        id: 'wang-chung',
        name: 'Wang Chung',
        songs: [
            { name: 'Space Junk', fileName: 'space-junk' }
        ]
    },
    {
        id: 'dropkick-murphys',
        name: 'Dropkick Murphys',
        songs: [
            { name: "I'm Shipping Up to Boston", fileName: 'im-shipping-up-to-boston' },
            { name: 'Tessie', fileName: 'tessie' }
        ]
    },
    {
        id: 'smash-mouth',
        name: 'Smash Mouth',
        songs: [
            { name: 'All Star', fileName: 'all-star' }
        ]
    },
    {
        id: 'u2',
        name: 'U2',
        songs: [
            { name: 'Vertigo', fileName: 'vertigo' },
            { name: 'Beautiful Day', fileName: 'beautiful-day' },
            { name: 'With or Withou You', fileName: 'with-or-without-you' }
        ]
    },
    {
        id: 'kaiser-chiefs',
        name: 'Kaiser Chiefs',
        songs: [
            { name: 'Ruby', fileName: 'ruby' }
        ]
    },
    {
        id: 'jet',
        name: 'Jet',
        songs: [
            { name: 'Are You Gonna Be My Girl', fileName: 'are-you-gonna-be-my-girl' }
        ]
    },
    {
        id: 'hometown-hero',
        name: 'Hometown Hero',
        songs: [
            { name: 'Robbers', fileName: 'robbers' }
        ]
    },
    {
        id: 'chronic-future',
        name: 'Chronic Future',
        songs: [
            { name: 'Time and Time Again', fileName: 'time-and-time-again' }
        ]
    },
    {
        id: 'the-von-bondies',
        name: 'The Von Bondies',
        songs: [
            { name: "C'mon C'mon", fileName: 'cmon-cmon' }
        ]
    },
    {
        id: 'to-my-surprise',
        name: 'To My Surprise',
        songs: [
            { name: 'Get It to Go', fileName: 'get-it-to-go' }
        ]
    },
    {
        id: 'stray-cats',
        name: 'Stray Cats',
        songs: [
            { name: 'Stray Cat Strut', fileName: 'stray-cat-strut' }
        ]
    },
    {
        id: 'tears-for-fears',
        name: 'Tears For Fears',
        songs: [
            { name: 'Sowing the Seeds of Love', fileName: 'sowing-the-seeds-of-love' },
            { name: 'Everybody Wants to Rule the World', fileName: 'everybody-wants-to-rule-the-world' }
        ]
    },
    {
        id: 'a-ha',
        name: 'A-ha',
        songs: [
            { name: 'Take On Me', fileName: 'take-on-me' }
        ]
    },
    {
        id: 'culture-club',
        name: 'Culture Club',
        songs: [
            { name: 'Karma Chameleon', fileName: 'karma-chameleon' }
        ]
    },
    {
        id: 'john-waite',
        name: 'John Waite',
        songs: [
            { name: 'Missing You', fileName: 'missing-you' }
        ]
    },
    {
        id: 'eddie-money',
        name: 'Eddie Money',
        songs: [
            { name: 'Baby Hold On', fileName: 'baby-hold-on' }
        ]
    },
    {
        id: 'phil-collins',
        name: 'Phil Collins',
        songs: [
            { name: 'In the Air Tonight', fileName: 'in-the-air-tonight' },
            { name: "You'll Be in My Heart", fileName: 'youll-be-in-my-heart' }
        ]
    },
    {
        id: 'gloria-gaynor',
        name: 'Gloria Gaynor',
        songs: [
            { name: 'I Will Survive', fileName: 'i-will-survive' }
        ]
    },
    {
        id: 'andrea-true-connection',
        name: 'Andrea True Connection',
        songs: [
            { name: 'More, More, More', fileName: 'more-more-more' }
        ]
    },
    {
        id: 'kc-and-the-sunshine-band',
        name: 'KC And The Sunshine Band',
        songs: [
            { name: 'Get Down Tonight', fileName: 'get-down-tonight' },
            { name: "That's the Way (I Like It)", fileName: 'thats-the-way-i-like-it' }
        ]
    },
    {
        id: 'earth-wind-and-fire',
        name: 'Earth, Wind & Fire',
        songs: [
            { name: 'September', fileName: 'september' },
            { name: 'Shining Star', fileName: 'shining-star' }
        ]
    },
    {
        id: 'the-village-people',
        name: 'The Village People',
        songs: [
            { name: 'Y.M.C.A.', fileName: 'ymca' }
        ]
    },
    {
        id: 'the-gap-band',
        name: 'The Gap Band',
        songs: [
            { name: 'You Dropped a Bomb on Me', fileName: 'you-dropped-a-bomb-on-me' }
        ]
    },
    {
        id: 'elton-john',
        name: 'Elton John',
        songs: [
            { name: 'Tiny Dancer', fileName: 'tiny-dancer' }
        ]
    },
    {
        id: 'styx',
        name: 'Styx',
        songs: [
            { name: 'Come Sail Away', fileName: 'come-sail-away' }
        ]
    },
    {
        id: 'queen',
        name: 'Queen',
        songs: [
            { name: 'Bohemian Rhapsody', fileName: 'bohemian-rhapsody' }
        ]
    },
    {
        id: 'gnarls-barkley',
        name: 'Gnarls Barkley',
        songs: [
            { name: 'Crazy', fileName: 'crazy' }
        ]
    },
    {
        id: 'suicidal-tendencies',
        name: 'Suicidal Tendencies',
        songs: [
            { name: 'Institutionalized', fileName: 'institutionalized' }
        ]
    },
    {
        id: 'house-of-pain',
        name: 'House Of Pain',
        songs: [
            { name: 'Jump Around', fileName: 'jump-around' }
        ]
    },
    {
        id: 'naughty-by-nature',
        name: 'Naughty By Nature',
        songs: [
            { name: 'Hip Hop Hooray', fileName: 'hip-hop-hooray' }
        ]
    },
    {
        id: 'eminem',
        name: 'Eminem',
        songs: [
            { name: 'Sing for the Moment', fileName: 'sing-for-the-moment' },
            { name: 'Lose Yourself', fileName: 'lose-yourself' },
            { name: 'Till I Collapse', fileName: 'till-i-collapse', contributors: 'Nate Dogg' },
            { name: "Won't Back Down", fileName: 'wont-back-down', contributors: 'Pink' },
            { name: 'Like Toy Soldiers', fileName: 'like-toy-soldiers' },
            { name: 'Stan', fileName: 'stan', contributors: 'Dido' },
            { name: 'Fast Lane', fileName: 'fast-lane', contributors: `Royce da 5'9"` },
            { name: 'Rap God', fileName: 'rap-god' },
            { name: 'Space Bound', fileName: 'space-bound' }
        ]
    },
    {
        id: 'dr-dre',
        name: 'Dr. Dre',
        songs: [
            { name: `Nuthin' but a "G" Thang`, fileName: 'nuthin-but-a-g-thang', contributors: 'Snoop Dogg' },
            { name: 'Big Egos', fileName: 'big-egos', contributors: 'Hittman' },
            { name: "What's the Difference", fileName: 'whats-the-difference', contributors: 'Eminem, Xzibit' },
            { name: 'Light Speed', fileName: 'light-speed', contributors: 'Hittman' },
            { name: 'The Watcher', fileName: 'the-watcher', contributors: "Eminem, Knoc-turn'al" },
            { name: 'Forgot About Dre', fileName: 'forgot-about-dre', contributors: 'Eminem, Hittman' },
            { name: 'The Message', fileName: 'the-message', contributors: 'Mary J. Blige, Rell' },
            { name: 'Still D.R.E.', fileName: 'still-dre', contributors: 'Snoop Dogg' },
            { name: 'I Need a Doctor', fileName: 'i-need-a-doctor', contributors: 'Eminem, Skylar Grey' }
        ]
    },
    {
        id: 'kendrick-lamar',
        name: 'Kendrick Lamar',
        songs: [
            { name: 'HiiiPower', fileName: 'hiiipower' },
            { name: 'Black Boy Fly', fileName: 'black-boy-fly' },
            { name: 'Ignorance Is Bliss', fileName: 'ignorance-is-bliss' },
            { name: 'Money Trees', fileName: 'money-trees' },
            { name: 'The Recipe', fileName: 'the-recipe', contributors: 'Dr. Dre' },
            { name: 'm.A.A.d city', fileName: 'maad-city', contributors: 'MC Eiht' },
            { name: "Bitch, Don't Kill My Vibe", fileName: 'bitch-dont-kill-my-vibe' },
            { name: 'Poetic Justice', fileName: 'poetic-justice', contributors: 'Drake' },
            { name: 'Ronald Reagan Era', fileName: 'ronald-reagan-era' },
            { name: 'Swimming Pools (Drank)', fileName: 'swimming-pools-drank' },
            { name: 'untitled 07 | levitate', fileName: 'untitled-07-levitate' }
            
        ]
    },
    {
        id: 'kanye-west',
        name: 'Kanye West',
        songs: [
            { name: 'Heartless', fileName: 'heartless' },
            { name: 'Love Lockdown', fileName: 'love-lockdown' },
            { name: 'Send It Up', fileName: 'send-it-up' },
            { name: 'No Church in the Wild', fileName: 'no-church-in-the-wild', contributors: 'Jay-Z' },
            { name: 'Gotta Have It', fileName: 'gotta-have-it', contributors: 'Jay-Z' },
            { name: 'Blood on the Leaves', fileName: 'blood-on-the-leaves' },
            { name: 'Flashing Lights', fileName: 'flashing-lights' },
            { name: 'Jesus Walks', fileName: 'jesus-walks' }
        ]
    },
    {
        id: 'jay-z',
        name: 'Jay-Z',
        songs: [
            { name: 'Hard Knock Life', fileName: 'hard-knock-life' },
        ]
    },
    {
        id: 'drake',
        name: 'Drake',
        songs: [
            { name: 'Forever', fileName: 'forever', contributors: 'Kanye West, Lil Wayne, Eminem' },
            { name: "God's Plan", fileName: 'gods-plan' }
        ]
    },
    {
        id: 'ice-cube',
        name: 'Ice Cube',
        songs: [
            { name: 'You Know How We Do It', fileName: 'you-know-how-we-do-it' }
        ]
    },
    {
        id: 'lupe-fiasco',
        name: 'Lupe Fiasco',
        songs: [
            { name: 'Superstar', fileName: 'superstar', contributors: 'Matthew Santos' }
        ]
    },
    {
        id: 'outkast',
        name: 'Outkast',
        songs: [
            { name: 'Hey Ya!', fileName: 'hey-ya' },
            { name: 'Ms. Jackson', fileName: 'ms-jackson' }
        ]
    },
    {
        id: 'flobots',
        name: 'Flobots',
        songs: [
            { name: 'Handlebars', fileName: 'handlebars' }
        ]
    },
    {
        id: 'tom-pepe',
        name: 'Tom Pepe',
        songs: [
            { name: 'The River Runs Deep', fileName: 'the-river-runs-deep' }
        ]
    },
    {
        id: 'black-eyed-peas',
        name: 'Black Eyed Peas',
        songs: [
            { name: 'Where Is the Love', fileName: 'where-is-the-love' },
            { name: "Let's Get It Started", fileName: 'lets-get-it-started' },
            { name: 'Boom Boom Pow', fileName: 'boom-boom-pow' },
            { name: 'I Gotta Feeling', fileName: 'i-gotta-feeling' },
            { name: 'Meet Me Halfway', fileName: 'meet-me-halfway' },
            { name: "Just Can't Get Enough", fileName: 'just-cant-get-enough' },
            { name: 'Rock That Body', fileName: 'rock-that-body' }
        ]
    },
    {
        id: 'frank-ocean',
        name: 'Frank Ocean',
        songs: [
            { name: 'Nikes', fileName: 'nikes' },
            { name: 'Thinkin Bout You', fileName: 'thinkin-bout-you' }
        ]
    },
    {
        id: 'kid-cudi',
        name: 'Kid Cudi',
        songs: [
            { name: 'Pursuit of Happiness', fileName: 'pursuit-of-happiness' },
            { name: 'Just What I Am', fileName: 'just-what-i-am' },
            { name: 'REVOFEV', fileName: 'revofev' },
            { name: "Day 'n' Nite", fileName: 'day-n-nite' },
            { name: 'Beez', fileName: 'beez' }
        ]
    },
    {
        id: 'j-squad',
        name: 'J-Squad',
        songs: [
            { name: 'TTBZ Anthem', fileName: 'ttbz-anthem' }
        ]
    },
    {
        id: 'gerry-mulligan',
        name: 'Gerry Mulligan',
        songs: [
            { name: 'Prelude in E Minor Op. 28 No. 4 - Jazz', fileName: 'prelude-in-e-minor-op-28-no-4-jazz', composer: 'Chopin' }
        ]
    },
    {
        id: 'dave-brubeck',
        name: 'Dave Brubeck',
        songs: [
            { name: 'Take Five', fileName: 'take-five' },
            { name: 'Maria', fileName: 'maria' }
        ]
    },
    {
        id: 'john-wasson',
        name: 'John Wasson',
        songs: [
            { name: 'Caravan', fileName: 'caravan' }
        ]
    },
    {
        id: 'larnell-lewis',
        name: 'Larnell Lewis',
        songs: [
            { name: 'Drum Solo', fileName: 'drum-solo' }
        ]
    },
    {
        id: 'daniel-glass',
        name: 'Daniel Glass',
        songs: [
            { name: 'Drum Solo', fileName: 'drum-solo' }
        ]
    },
    {
        id: 'carly-comando',
        name: 'Carly Comando',
        songs: [
            { name: 'Everyday', fileName: 'everyday' }
        ]
    },
    {
        id: 'the-xx',
        name: 'The XX',
        songs: [
            { name: 'Intro', fileName: 'intro' },
            { name: 'Angels', fileName: 'angels' }
        ]
    },
    {
        id: 'henry-krinkle',
        name: 'Henry Krinkle',
        songs: [
            { name: 'Stay', fileName: 'stay' }
        ]
    },
    {
        id: 'imagine-dragons',
        name: 'Imagine Dragons',
        songs: [
            { name: 'Radioactive', fileName: 'radioactive' },
            { name: 'Believer', fileName: 'believer' }
        ]
    },
    {
        id: 'awolnation',
        name: 'AWOLNATION',
        songs: [
            { name: 'Sail', fileName: 'sail' }
        ]
    },
    {
        id: 'flume',
        name: 'Flume',
        songs: [
            { name: 'You & Me', fileName: 'you-and-me', contributors: 'Disclosure' },
            { name: 'Sleepless', fileName: 'sleepless' }
        ]
    },
    {
        id: 'mike-posner',
        name: 'Mike Posner',
        songs: [
            { name: 'I Took a Pill in Ibiza', fileName: 'i-took-a-pill-in-ibiza' }
        ]
    },
    {
        id: 'skrillex',
        name: 'Skrillex',
        songs: [
            { name: 'Cinema', fileName: 'cinema' },
            { name: 'First of the Year', fileName: 'first-of-the-year' },
            { name: 'Scary Monsters and Nice Sprites', fileName: 'scary-monsters-and-nice-sprites' }
        ]
    },
    {
        id: 'omega',
        name: 'Omega',
        songs: [
            { name: 'Overseer', fileName: 'overseer' }
        ]
    },
    {
        id: 'bag-raiders',
        name: 'Bag Raiders',
        songs: [
            { name: 'Shooting Stars', fileName: 'shooting-stars' }
        ]
    },
    {
        id: 'feed-me-and-crystal-fighters',
        name: 'Feed Me and Crystal Fighters',
        songs: [
            { name: 'Love Is All I Got', fileName: 'love-is-all-i-got' }
        ]
    },
    {
        id: 'junior-senior',
        name: 'Junior Senior',
        songs: [
            { name: 'Move Your Feet', fileName: 'move-your-feet' }
        ]
    },
    {
        id: 'stromae',
        name: 'Stromae',
        songs: [
            { name: 'Alors on danse', fileName: 'alors-on-danse' }
        ]
    },
    {
        id: 'eiffel-65',
        name: 'Eiffel 65',
        songs: [
            { name: 'Blue (Da Ba Dee)', fileName: 'blue-da-ba-dee' }
        ]
    },
    {
        id: 'jamiroqaui',
        name: 'Jamiroqaui',
        songs: [
            { name: 'Canned Heat', fileName: 'canned-heat' }
        ]
    },
    {
        id: 'o-zone',
        name: 'O-Zone',
        songs: [
            { name: 'Dragostea Din Tei', fileName: 'dragostea-din-tei' }
        ]
    },
    {
        id: 'daughter',
        name: 'Daughter',
        songs: [
            { name: 'Medicine', fileName: 'medicine' }
        ]
    },
    {
        id: 'mindy-jones',
        name: 'Mindy Jones',
        songs: [
            { name: 'Wait for Me', fileName: 'wait-for-me', contributors: 'Moby' }
        ]
    },
    {
        id: 'sufjan-stevens',
        name: 'Sufjan Stevens',
        songs: [
            { name: 'Fourth of July', fileName: 'fourth-of-july' }
        ]
    },
    {
        id: 'ta-ku',
        name: 'Ta-Ku',
        songs: [
            { name: 'Night 3', fileName: 'night-3' }
        ]
    },
    {
        id: 'tony-anderson',
        name: 'Tony Anderson',
        songs: [
            { name: 'Ember', fileName: 'ember' }
        ]
    },
    {
        id: 'celine-dion',
        name: 'Celine Dion',
        songs: [
            { name: 'My Heart Will Go On', fileName: 'my-heart-will-go-on' }
        ]
    },
    {
        id: 'secret-garden',
        name: 'Secret Garden',
        songs: [
            { name: 'You Raise Me Up', fileName: 'you-raise-me-up', recordingMusician: 'Josh Groban' },
            { name: 'You Raise Me Up - Cello', fileName: 'you-raise-me-up-cello', recordingMusician: 'Jodok Cello' },
            { name: 'Adagio', fileName: 'adagio' },
            { name: 'Nocturne', fileName: 'nocturne' }
        ]
    },
    {
        id: 'frederic-weatherly',
        name: 'Frederic Weatherly',
        songs: [
            { name: 'Danny Boy', fileName: 'danny-boy', recordingMusician: 'Gentri' }
        ]
    },
    {
        id: 'john-newton',
        name: 'John Newton',
        songs: [
            { name: 'Amazing Grace - Bagpipes', fileName: 'amazing-grace-bagpipes', recordingMusician: 'Bagpipe Master' },
            { name: 'Amazing Grace', fileName: 'amazing-grace', recordingMusician: 'Dan Vasc' }
        ]
    },
    {
        id: 'joseph-kilna-mackenzie',
        name: 'Joseph Kilna MacKenzie',
        songs: [
            { name: 'Sgt. MacKenzie', fileName: 'sgt-mackenzie' }
        ]
    },
    {
        id: 'the-revels',
        name: 'The Revels',
        songs: [
            { name: 'Lord of the Dance', fileName: 'lord-of-the-dance' }
        ]
    }
];




export const quotes = {
    quoteAndAuthor: [
        { 
            author: 'Friedrich Nietzsche',
            quote: 'Without music, life would be a mistake.'
        },
        { 
            author: 'Hans Christian Andersen',
            quote: 'Where words fail, music speaks.'
        },
        { 
            author: 'Victor Hugo',
            quote: 'Music expresses that which cannot be said and on which it is impossible to be silent.'
        },
        { 
            author: 'Rachmaninoff',
            quote: 'Music is enough for a lifetime, but a lifetime is not enough for music.'
        },
        {
            author: 'Debussy',
            quote: 'Chopin is the greatest of them all, for with the piano alone he discovered everything.'
        },
        { 
            author: 'Chopin',
            quote: 'Bach is an astronomer discovering the most marvelous stars. Beethoven challenges the universe. I only try to express the soul and heart of man.'
        },
        { 
            author: 'Jack London',
            quote: 'The proper function of man is to live, not to exist. I shall not waste my days trying to prolong them. I shall use my time.'
        }
    ],
    idx: 0,
    displayTime: 15000,             // time to display the quote
    transitionTime: 2500,           // time where opacity is fading
    opacityChangeIntervalTime: 100  // interval time between 1 opacity change
};




export const writingsArray = [
    {
        id: 'invictus',
        title: 'Invictus',
        author: 'William Ernest Henley',
        writing: [
            [
                'Out of the night that covers me,',
                'Black as the pit from pole to pole,',
                'I thank whatever gods may be',
                'For my unconquerable soul.'
            ],
            [
                'In the fell clutch of circumstance,',
                'I have not winced nor cried aloud.',
                'Under the bludgeonings of chance',
                'My head is bloody, but unbowed.'
            ],
            [
                'Beyond this place of wrath and tears',
                'Looms but the Horror of the shade,',
                'And yet the menace of the years',
                'Finds, and shall find, me unafraid.'
            ],
            [
                'It matters not how strait the gate,',
                'How charged with punishments the scroll,',
                'I am the master of my fate,',
                'I am the captain of my soul.'
            ]
        ]
    },
    {
        id: 'do-not-go-gentle-into-that-good-night',
        title: 'Do not go gentle into that good night',
        author: 'Dylan Thomas',
        writing: [
            [
                'Do not go gentle into that good night,',
                'Old age should burn and rave at close of day;',
                'Rage, rage against the dying of the light.'
            ],
            [
                'Though wise men at their end know dark is right,',
                'Because their words had forked no lightning they',
                'Do not go gentle into that good night.'
            ],
            [
                'Good men, the last wave by, crying how bright',
                'Their frail deeds might have danced in a green bay,',
                'Rage, rage against the dying of the light.'
            ],
            [
                'Wild men who caught and sang the sun in flight,',
                'And learn, too late, they grieved it on its way,',
                'Do not go gentle into that good night.'
            ],
            [
                'Grave men, near death, who see with blinding sight',
                'Blind eyes could blaze like meteors and be gay,',
                'Rage, rage against the dying of the light.'
            ],
            [
                'And you, my father, there on the sad height,',
                'Curse, bless, me now with your fierce tears, I pray.',
                'Do not go gentle into that good night.',
                'Rage, rage against the dying of the light.'
            ]
        ]
    },
    {
        id: 'the-charge-of-the-light-brigade',
        title: 'The Charge of the Light Brigade',
        author: 'Alfred, Lord Tennyson',
        writing: [
            [
                'Half a league, half a league,',
                'Half a league onward,',
                'All in the valley of Death',
                'Rode the six hundred.',
                '“Forward, the Light Brigade!',
                'Charge for the guns!” he said.',
                'Into the valley of Death',
                'Rode the six hundred.'
            ],
            [
                '“Forward, the Light Brigade!”',
                'Was there a man dismayed?',
                'Not though the soldier knew',
                'Someone had blundered.',
                'Theirs not to make reply,',
                'Theirs not to reason why,',
                'Theirs but to do and die.',
                'Into the valley of Death',
                'Rode the six hundred.'
            ],
            [
                'Cannon to right of them,',
                'Cannon to left of them,',
                'Cannon in front of them',
                'Volleyed and thundered;',
                'Stormed at with shot and shell,',
                'Boldly they rode and well,',
                'Into the jaws of Death,',
                'Into the mouth of hell',
                'Rode the six hundred.'
            ],
            [
                'Flashed all their sabres bare,',
                'Flashed as they turned in air',
                ' Sabring the gunners there,',
                'Charging an army, while',
                'All the world wondered.',
                'Plunged in the battery-smoke',
                'Right through the line they broke;',
                ' Cossack and Russian',
                'Reeled from the sabre stroke',
                'Shattered and sundered.',
                'Then they rode back, but not',
                'Not the six hundred.'
            ],
            [
                'Cannon to right of them,',
                'Cannon to left of them,',
                'Cannon behind them',
                'Volleyed and thundered;',
                'Stormed at with shot and shell,',
                'While horse and hero fell.',
                'They that had fought so well',
                'Came through the jaws of Death,',
                'Back from the mouth of hell,',
                'All that was left of them,',
                'Left of six hundred.'
            ],
            [
                'When can their glory fade?',
                'O the wild charge they made!',
                'All the world wondered.',
                'Honour the charge they made!',
                'Honour the Light Brigade,',
                'Noble six hundred!'
            ]
        ]
    },
    {
        id: 'a-tale-of-two-cities',
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        writing: [
            [
                'I see a beautiful city and a brilliant people rising from this abyss.',
                "I see the lives for which I lay down my life, peaceful, useful, prosperous, and happy.",
                'I see that I hold a sanctuary in their hearts, and in the hearts of their descendants, generations hence.',
                'It is a far, far better thing that I do, than I have ever done;',
                'It is a far, far better rest that I go to, than I have ever known.'
            ]
        ]
    },
    {
        id: 'once-more-into-the-fray',
        title: 'Once More Into the Fray',
        author: 'Joe Carnahan',
        writing: [
            [
                'Once more into the fray...',
                "Into the last good fight I'll ever know...",
                'Live and die on this day...',
                'Live and die on this day...'
            ]
        ]
    },
    {
        id: 'if',
        title: 'If—',
        author: 'Rudyard Kipling',
        writing: [
            [
                `If you can keep your head when all about you`,
                `Are losing theirs and blaming it on you,`,
                `If you can trust yourself when all men doubt you,`,
                `But make allowance for their doubting too;`,
                `If you can wait and not be tired by waiting,`,
                `Or being lied about, don’t deal in lies,`,
                `Or being hated, don’t give way to hating,`,
                `And yet don’t look too good, nor talk too wise:`
            ],
            [
                `If you can dream—and not make dreams your master;`,
                `If you can think—and not make thoughts your aim;`,
                `If you can meet with Triumph and Disaster`,
                `And treat those two impostors just the same;`,   
                `If you can bear to hear the truth you’ve spoken`,
                `Twisted by knaves to make a trap for fools,`,
                `Or watch the things you gave your life to, broken,`,
                `And stoop and build ’em up with worn-out tools:`
            ],
            [
                `If you can make one heap of all your winnings`,
                `And risk it on one turn of pitch-and-toss,`,
                `And lose, and start again at your beginnings`,
                `And never breathe a word about your loss;`,
                `If you can force your heart and nerve and sinew`,
                `To serve your turn long after they are gone,`,
                `And so hold on when there is nothing in you`,
                `Except the Will which says to them: ‘Hold on!’`
            ],
            [
                `If you can talk with crowds and keep your virtue,`,
                `Or walk with Kings—nor lose the common touch,`,
                `If neither foes nor loving friends can hurt you,`,
                `If all men count with you, but none too much;`,
                `If you can fill the unforgiving minute`,
                `With sixty seconds’ worth of distance run,`,
                `Yours is the Earth and everything that’s in it,`,
                `And—which is more—you’ll be a Man, my son!`
            ]
        ]
    },
    {
        id: 'the-final-speech',
        title: 'The Final Speech',
        author: 'The Great Dictator',
        writing: [
            [
                `Soldiers! Don't give yourselves to brutes!`,
                `Men who despise you, enslave you, who regiment your lives!`,
                `Tell you what to do, what to think, and what to feel!`,
                `Who drill you, diet you, treat you like cattle, use you as cannon fodder!`,
                `Don't give yourselves to these unnatural men!`,
                `Machine men, with machine minds, and machine hearts!`,
                `You are not machines! You are not cattle! You are men!`,
                `You have the love of Humanity in your hearts!`,
                `You don't hate! Only the unloved hate - the unloved and the unnatural!`,
                `Soldiers! Don't fight for slavery! Fight for liberty!`,
                `In the 17th Chapter of St. Luke it is written: "the Kingdom of God is within Man" - not one man nor a group of men, but in all men!`,
                `In you! You the People have the power!`,
                `The power to create machines. The power to create happiness!`,
                `You the People have the power to make this life free and beautiful!`,
                `To make this life a wonderful adventure!`,
                `Then, in the name of democracy, let us use that power, let us all unite!`,
                `Let us fight for a new world!`,
                `A decent world that will give men a chance to work, that will give youth a future, and old age a security!`,
                `By the promise of these things, brutes have risen to power!`,
                `But they lie! They do not fulfill that promise. They never will!`,
                `Dictators free themselves but they enslave the People!`,
                `Now let us fight to fulfill that promise!`,
                `Let us fight to free the world!`,
                `To do away with national barriers!`,
                `To do away with greed, with hate, and intolerance!`,
                `Let us fight for a world of reason!`,
                `A world where science and progress will lead to all men's happiness!`,
                `Soldiers! In the name of democracy, let us all unite!`
            ]
        ]
    },
    {
        id: 'free-speech',
        title: 'Free Speech',
        author: 'Christopher Hitchens',
        writing: [
            [
                ``
            ]
        ]
    }
];




export const discussionsParagraphs = [
    `
    Hans Zimmer is one of the best composers ever and the greatest soundtrack composer of all time.
    The breadth and depth of his work is unrivaled, having composed some of the most beautiful, powerful, moving, and emotional music ever written in scores of major motion picture soundtracks.
    It is the combination of the somewhat unfathomable expanse of his body of work in stride with the diverse and at times disparate nature of his compositions that renders him into a category of his own.
    Some of his best work comes from The Dark Knight trilogy, The Pirates of the Caribbean series, Inception, and Interstellar amongst many other films.
    From The Dark Knight trilogy his best compositions include Corynorhinus, Myotis, Molossus, A Dark Knight, Agent of Chaos, and Why Do We Fall, and one of the most beautiful songs ever written is the unreleased track Marry Me from Pirates of the Caribbean: At World's End.
    Other incredible songs he has composed include Time from Inception, First Steps, No Time for Caution, and Mountains from Interstellar, Final Ascent from No Time to Die, and A Way of Life and A Small Measure of Peace from The Last Samurai.
    Hans has worked frequently with director Christopher Nolan including on some of the films mentioned.
    The directorial genius of Nolan combined with the musical genius of Hans creates an unfettered hybrid yielding some of the most profound cinematic experiences, and a better composer-director pair there probably never was.
    It should be noted that Hans collaborated significantly with James Newton Howard for the first two films of The Dark Knight Trilogy, Klaus Badelt for the first Pirates of the Caribbean film and Gladiator, and Lisa Gerrard in Gladiator so the credit goes to them as well.
    Now We Are Free from Gladiator is one of the best songs ever composed with Gerrard's otherworldly glossolalia penetrating the air with her angelically mystical voice as if one were listening to the voice of the Gods.
    Few vocal performances have ever been able to rival that of Gerrard's in the original, but one such performance can be found with Czarina Russell, and Croatian cellist Stjepan Hauser did an incredible cello arrangement of it out of which is delivered a whole new experience from that song whose original version was already phenomenal enough. 
    `,
    `
    Frédéric Chopin is one of the greatest classical piano composers of all time and lived from 1810 to 1849.
    Although his father was French and his name would suggest as such, he was actually born and raised in Poland as Fryderyk Franciszek Chopin and only adopted the French version of his name after moving to France in his later years.
    Despite his French heritage, Chopin remained loyal to his homeland and always considered himself Polish.
    Chopin was a signature hallmark of the Romantic period, and he is often regarded as <i>the pianist's composer</i> due to his work being almost exclusively for the solo piano and wholesomely defined by its emotional expressiveness and virtuosity, the two defining elements of Romantic period piano composing.
    However, despite his greatness it is still not said that Chopin is <i>the</i> greatest classical piano composer of all time because the pursuit of such a choice ultimately proves to be untenable.
    Though the claim he is the greatest might subconsciously arise in the mind out of instinct, by the time that thought is proffered in either the spoken or written word there is a tinge of discomfort that begins to accumulate in the air.
    How could it be said that Chopin is the greatest when there exists the works of Liszt, Rachmaninoff, Beethoven, and so many others?
    To live without the compositions of these composers would be a crime on its best day, and saying any single one composer is the greatest feels like a betrayal of all the others.
    The opposing forces of Chopin's greatness and the feeling of betrayal almost inclines one to state that Chopin is the greatest and not the greatest simultaneously because an impossible question can only be satisfied with an impossible answer, and consequently the predicament created by the question of who is the greatest classical piano composer of all time bears liking to the unstoppable force paradox in which is asked what happens when an unstoppable force meets an immovable object?
    After ample time passes grappling with this futile decision, the only moral conclusion that can be ascertained that does not diminish any one composer is that any attempt at a ranking is a mostly worthless pursuit, and that there is no single greatest but rather a mosaic of faces and names all contributing in the most profound way to the musical experience; to the pursuit of part of which makes being alive more than just existence.
    Music is, after all, partially subjective - predominantly objective regarding a piece's quality and performative difficulty but subjective regarding any ranking derived from individual preference.
    However, if an answer to that question were coerced, then it could be stated that Chopin is the greatest, and if not that then at a minimum he would be one of the strongest candidates if not the strongest.
    Whether it is numerous works by Liszt or Beethoven's immortal Moonlight Sonata, other composers have written piano songs equally as beautiful and moving as any of Chopin's and that statement can be made without hesitation, so any ranking deduced solely from a qualitative capability is unattainable.
    What could position Chopin as the greatest is no different than that which positions Hans in the arena of soundtrack composing which is the quantity of incredible songs he composed seconded by their emotional heterogeneity.
    In his own words, <i>Bach is an astronomer discovering the most marvelous stars. Beethoven challenges the universe. I only try to express the soul and heart of man.</i>
    Chopin, like other composers but especially him, had this innate ability to do just that - to write piano pieces that expressed <i>the soul and heart of man</i>; to take emotion and put it into music.
    And he did not just do this once or twice or a handful of times but rather did so time and time again culminating in a body of work too impressive to comprehend and representative of the full emotional spectrum from jovial elation and profound introspection to painful sadness and tragic despair.
    As was once asserted by Debussy, <i>Chopin is the greatest of them all, for with the piano alone he discovered everything</i>.
    Chopin's series of twenty-one nocturnes embody this most aptly.
    Beginning with Nocturne 1 in B-Flat Minor there is the touching way it goes from A, down to A-flat, down to G-flat, back up to A-flat, and finally back up to A in measures 67 through 69 leaving one to forever contemplate what he was trying to say.
    Then in Nocturne 4 in F Major and Nocturne 8 in D-Flat Major there is the striking contrast between the peace, calm, and bliss of the beginning and ending and the intensity, velocity, and passion of the middle.
    Towards the end of the nocturnes comes forth two of the best amongst them all, Nocturne 19 in E Minor and Nocturne 20 in C-Sharp Minor, which are a baring of the soul of humanity.
    The final nocturne, Nocturne 21 in C Minor, possesses some of the same essence of Nocturnes 19 and 20, and then after those six nocturnes there are still fifteen remaining each of which is a standalone work of art worthy of admiration.
    This is in which lies the basis for their exceptionalism - there is not one single one of them that is lacking in some way; not one single one of them that is out of place.
    Even for a composer as distinguished as Chopin some lenience could be offered if a few out of the twenty-one did not quite rise to expectations but that is not the case.
    Together, they form an elegant series of twenty-one compositions each with their own uniqueness, righteousness, and emotional narration.
    Even between the ones possessing similarities said qualities are maintained through their subtle differences.
    Chopin's nocturnes collectively stand out as one of the most remarkable works of art ever created and truly have no equal.
    Unfortunately, Nocturnes 19, 20, and 21 were published posthumously and were not appreciated until after his death.
    This is fervently regretful for all three and emphatically so for 19 and 20 given that they are the most beautiful and moving nocturnes he ever composed most noteworthy for numerous parts including one of the most beautiful chord progressions ever in measures 15 through 17 of Nocturne 19 and the nearly dexterously impossible ending to Nocturne 20.
    Residing closeby behind them is the 21st which presents a convincing argument for the tertiary rank amongst other stout contenders such as the 1st.
    Numerous pianists over the years have delivered their individual interpretations of Chopin's nocturnes engraved with personal variances, nuances, and discoveries, and Argentinian pianist Nelson Goerner has one of the best interpretations ever of Nocturne 20.
    In addition to his nocturnes his over two hundred works include twenty-seven preludes (one of them unfinished), twenty-seven etudes, three piano sonatas, and four ballades.
    Rivaling the emotional depth of his nocturnes are three of his preludes: Prelude 4 in E Minor, Prelude 6 in B Minor, and Prelude 15 in D-Flat Major more affectionately referred to as Raindrop Prelude.
    It is difficult for words to suffice any worthy articulation regarding Prelude in E Minor, and by his own request Chopin had it performed at his funeral.
    Prelude in E Minor is one of the finest examples of what Chopin meant when he said he only tries to express the soul and heart of man, and it is one of the purest musical embodiments ever of sadness, pain, tragedy, despair, or any other similar adjective that one could conjure.
    Which adjectives to select, and whether the selection is that of a standalone or an aggregate, is wholly up to the listener.
    Moreover, it is an apt example of music's ability to touch the spirit and change the present state of the local universe; the world is one way, the sound of the music is released into existence, and then the world is another way, and this can even be achieved with a piece like Prelude in E Minor that is relatively simple both in regards to its arrangement on paper and its short duration.
    What makes Raindrop Prelude so remarkable is that the first part of the song, albeit nice, is actually rather unremarkable, and then out of nowhere in the 27th measure it suddenly pivots into one of the deepest pieces of music ever written marked by seven calm yet heavy hits of A-flat followed by the repetitive hitting of G-sharp in conjunction with some lower octave two-note chord progressions beginning with a strike of G-sharp and C-sharp one octave down.
    An optimum example of how the interpretation is everything in classical music, the rushing of this part will grievously dismantle its moving sentiment as is born out in a number of performances, but interpretations by pianists like Ivo Pogorelich, Daniil Trifonov, Pavel Kolesnikov, and Grigory Sokolov do not commit this blunder and preserve the essence that Raindrop Prelude is meant to have, and one cannot help but wonder if their collective Slavic heritage really is just a coincidence thus emphasizing the storied and intimate connection those countries have to classical music.
    Preludes 4 and 15 are equivalent to Nocturnes 19 and 20 in that a written description of their sentiment is mostly intangible.
    The relationship that his 6th prelude has to his 4th and 15th preludes is akin to the relationship his 21st nocturne has to his 19th and 20th nocturnes in that although his 4th and 15th preludes are his best, his 6th prelude contains some of their same essence and unequivocally deserves to be remarked upon as well. 
    It too by his own request was played at his funeral along with the third movement of his Piano Sonata No. 2 in B-Flat Minor also known as Funeral March and parts of Mozart's Requiem.
    Then there are songs like Fantaisie-Impromptu, Winter Wind, and Revolutionary Etude which capture an intensity and even at times a kind of violence that Chopin is capable of.
    Lastly, the beauty, power, emotion, and virtuosity of his first and most famous ballade, Ballade No. 1 in G Minor, defensibly situates it as Chopin's crowning achievement.
    With parts that are gentle and unhurried, parts that are swift and vehement, parts that are awe-inspiring, and in its totality a traversal of much of the emotional range, Chopin's first ballade is demonstrative of his illustriousness and everything that he is capable of as a composer all manifested within one single song.
    Ballade No. 1 in G Minor was the first ever piano ballade with Chopin having coined the term <i>ballade</i> in relation to its use with the piano allegedly drawing inspiration from its traditional use to describe narrative poetry.
    Fittingly, Chopin's first ballade, and therefore classical music's primordial piano ballade, is one of the best if not the best of all time most revered for its quintessential coda whose iconicism in classical piano is challenged by few others.
    Another renowned Argentinian pianist, Daniel Barenboim, tells the story of when acclaimed Russian pianist Vladimir Horowitz returned to Europe for a performance after a long absence it was asked what will he be playing, and the response was <i>La Ballade</i>, French for <i>The Ballade</i> - it is the ballade of all ballades, and one does not need to specify Ballade No. 1 in G Minor in its reference but rather due to the approbation deservedly bestowed upon it one can simply say The Ballade and it will be known which piece is being referred to.
    Although classical music is unfortunately often outside the purview of mainstream culture, La Ballade received a rise in mainstream cultural attention due to its featuring in the 2002 film The Pianist about the life of Jewish pianist and Holocaust survivor Władysław Szpilman whose life was spared in the midst of World War II by Wehrmact officer Wilm Hosenfield after accidentally stumbling upon him in hiding and then bearing witness to his playing upon request.
    The scene in which this is reenacted depicts Szpilman playing an abridged version of the piece and is one of the most powerful scenes in cinematic history.
    As an aside, it should be noted that in reality Szpilman performed Nocturne 20 in C-Sharp Minor.
    Not that it matters significantly which song is chosen from the standpoint of creating a movie to retell the story of Szpilman's inspiring life, but it is worth mentioning due to the effect it has on Chopin's 20th nocturne.
    Moving enough in the absence of that knowledge, Nocturne 20 in C-Sharp Minor becomes even more so upon learning that it was once used by a man to save his own life and spare him from that wretched atrocity.
    More broadly speaking, it demonstrates the power of music whereby a man who would otherwise kill his alleged enemy is able to in that moment discard of his tribalism, escape the facade that it actually is, and relate to him and see him for what he really is which is his fellow brother in humanity all because of a piece of music.
    Chopin's life was largely defined by numerous hardships including mental and spiritual torment and a plague of chronic health issues.
    Unquestionably his pain and suffering were a forceful influence on his music, and he was a realization at least in part of the tortured artist.
    This is readily palpable in many of his compositions which typify the actuality that out of pain and darkness can come forth beauty, and it is an especial shade of beauty unachievable with alternate derivations.
    Chopin was able to take his pain and suffering and convert it into something beautiful, inspiring, profound, pure, filled with truth, and impossible to live without once experienced.
    His music is a gift to this world, and those who are privileged enough to experience it should be so lucky and never take for granted the opportunity to hear and feel the music of this man who had such a deep and layered understanding of the human condition, and somehow was able to express that understanding through the simple miracle of sound.
    And, like all great composers trapped in the box of time preceding sound recording, his voice is not lost to the muted past and can be succinctly heard through his notes on paper.
    In other words, one does not need to hear Chopin speak in order to hear Chopin speak.
    Unfortunately, his health issues eventually claimed his life and he died fairly young at the age of 39.
    To date, there are only three known photographs of Chopin.
    The most famous was taken shortly before his death and displays Chopin seated at a piano next to a musical score, arms crossed, hands exposed, and staring directly into the camera.
    The toll of his suffering is in plain view, and a gaze into this treasured picture propels a silent wave of emotion through one's body as it is the only opportunity to see Chopin clearly in his physical form, look directly into the eyes, into the being, of this great and wonderful man, and even see the literal hands that were used to put pen to paper for such incredible music and strike the notes on the piano revealing them to the world for the first time.
    Somewhere out there in the universe are all of the compositions he would have written had he not died young yet to be heard or experienced like a truth that is yet to be known.
    Perhaps one of them would have been another Prelude in E Minor, Nocturne in C-Sharp Minor, or Ballade No. 1 in G Minor, and it is nothing short of a tragedy if that were true.
    However, it is inane to complain or lament about his premature death and what could have been.
    Chopin graced this world for some time and gifted it an abundance of incredible music before succumbing to the inevitable conclusion.
    The world should just be grateful that he existed at all and it can be left at that.
    It has been said that Mozart, Beethoven, and Chopin never died. They simply became music.
    `,
    `
    Franz Liszt, a Hungarian composer living from 1811 to 1886, was another beacon of the Romantic period who alongside Chopin and others is regarded as one of its sentinels.
    Unlike Chopin, many of Liszt's compositions, which surpass seven hundred in number, traverse outside the world of the solo piano and include organ pieces, choral and vocal works, orchestral works, symphonic poems, and chamber music.
    However, like Chopin, Liszt is most hallowed for his solo piano compositions, and if it were to be said that Chopin is the greatest classical piano composer of all time then he is maybe the first to come to mind for which it would feel like a betrayal were being enacted upon him.
    Certainly, <i>the pianist's composer</i> would be a suitable term for him as well.
    Together, Chopin and Liszt are the archetypes of Romantic period piano composers; the twins of virtuosic piano and the ambassadors of emotional expression on the piano.
    After moving to France around the same time as Chopin, the two became friends and although not especially close they deeply respected each other's work both as composers and musicians.
    Their relationship did at times have its struggles for a number of reasons, but despite any negativity that may have arisen the similarity of their musical style, talent, and greatness makes them out to be like two kindred souls mirroring and echoing each other's spirit and understanding of the human condition.
    Aside from his greatness as a piano composer and performative ability as a virtuoso pianist, something that makes Liszt unique is his work as a composer is not limited to his own original compositions but also includes piano arrangements of songs previously composed for other instruments.
    Amongst the most famous of his own original compositions are Liebestraum (Love Dream) No. 3 from his set of three Liebesträume (Dreams of Love), Romance "O pourquoi donc", Consolation No. 3 from his set of six Consolations, the third étude Un Sospiro (A Sigh) from Three Concert Études, Hungarian Rhapsody No. 2 from his set of nineteen Hungarian Rhapsodies, his series of twelve Transcendental Études, and Bénédiction de Dieu dans la Solitude (The Blessing of God in Solitude) which is the third of ten pieces from Harmonies Poétiques et Religieuses (Poetic and Religious Harmonies) inspired by French poet Alphonse de Lamartine.
    His most famous piano arrangements of songs previously composed for other instruments include that of Paganini's violin composition La Campanella (The Little Bell) and those of three of Schubert's lieder: Ständchen (Serenade), Auf dem Wasser zu singen (To Sing on the Water), and Der Doppelgänger (The Double Walker). 
    The beauty and emotion of Liebestraum No. 3 has a uniqueness to it unmatched by any other piano song, and that within Romance "O pourquoi donc", Consolation No. 3, and Un Sospiro parallels Chopin's work.
    Like Chopin and his first ballade, it could be proposed that Liebestraum No. 3 is Liszt's crowning achievement for how it wields together the strongest of his abilities which are to create piano songs that are beautiful and piano songs that are technically demanding, and it is one of the immediate examples of why claiming that Chopin is <i>the</i> greatest classical piano composer of all time feels so controversial.
    Unsurprisingly, the key of E minor is used in some of the most beautiful works of these composers - Romance "O pourquoi donc" for Liszt and Prelude 4 and Nocturne 19 for Chopin.
    Liszt's piano arrangement of Schubert's Serenade is able to capture the same emotion and beauty of that song on the piano that exists in the arrangement on the strings.
    The emotion of the opening melody beginning with A, B-flat, A, and D is only furthered by the intensity and almost unexpectedness of its shift one octave down partway through.
    La Campanella adequately illustrates his reputation for creating these technically demanding songs which in this case is partially due to the exhausting movement of the right hand constantly jumping back and forth to different octaves just to play consecutive notes, and its ending stands out as one of the most remarkable endings to any piano song.
    Bénédiction de Dieu dans la Solitude is another wonderful Liszt masterpiece impressive for how it perpetually extravasates serenity from the piano despite its long duration and regardless of changes in tempo or intensity.
    A fitting conclusion to the discussion of Liszt could be found with his piano arrangement of Schubert's Der Doppelgänger because it is about the conclusion to life, and it is also one of the most beautifully dark and intense pieces of music ever composed.
    Fittingly as well is the fact that Schubert composed Der Doppelgänger in the exact same year of his own death.
    The German word doppelgänger, and its English equivalent without the umlaut, is a person that looks identical to another person in physical appearance despite having no biological relation.
    In essence, an identical twin that is not actually an identical twin.
    The word is apathetic and there is no negative or positive undertone.
    However, in its roots it is actually a loanword from the term Doppelgänger which translates to <i>double walker</i>, and in this context it takes on a sinister persona.
    In German folklore, a double walker refers to a ghostly or paranormal replica of oneself, and if seen is an omen or sign of bad luck very often denoting that death is imminent.
    It is for this reason that the song is captured by this beautiful darkness along with some somberness, intensity, and tragedy.
    Schubert's original Der Doppelgänger is based on a poem by German poet Heinrich Heine.
    Although the word Doppelgänger is used in the poem, the poem itself is untitled, and Schubert is the one who applied the title Der Doppelgänger to his lied.
    The music adequately captures the story of the poem - the night begins calm and quiet for a man until he sees his Doppelgänger and becomes terrified and tormented.
    Putting aside the specific story narration of the poem, a more general story could be contrived from the music.
    The tone of the entire song is dark, but its tempo and intensity changes throughout.
    It begins with a slow tempo as if to indicate one's Doppelgänger has been dispatched and is lurking nearby but still unseen.
    Towards the late middle, the tempo and intensity increases as if to describe the moment when a person sees their Doppelgänger, realizes what it is, and then immediately knows that death is now upon them.
    This is followed by some kind of desperate but noble effort to escape the clutches of one's Doppelgänger and avoid this inevitability, but its eventual return to the slow tempo and reduction in intensity that it had at the beginning signifies the failure of this effort, the acceptance of this inevitability, and ultimately the death itself.
    Liszt's arrangement of this song with its darkness is an example of the diversity of his persona.
    He was not just limited to expressions of emotions disassociated with anything dark like the bliss felt in Consolation No. 3, the love felt in Liebestraum No. 3, or just the general beauty felt in To Sing on the Water.
    Liszt, like Chopin, could interact with both the light and the darkness.
    `,
    `
    Franz Schubert was an Austrian composer whose life intersected both the Classical and Romantic periods from 1797 to 1828.
    The most impressive part of Schubert is that he has hundreds of compositions to his name despite dying even younger than Chopin at the age of 31, and as previously discussed a number of his pieces were also posthumous inspirations for piano arrangements composed by Liszt showing how even death could not get in the way of Schubert continuing to contribute to the musical landscape.
    Amongst all of his compositions, a sampling of ones he is most well known for includes Ständchen (Serenade), String Quartet No. 14 in D Minor, Impromptu in G-Flat Major, and Piano Trio No. 2 in E-Flat Major.
    Serenade, though originally composed as a lied wherein poetry is set to classical music very often in the form of vocals and piano, is most widely recognized for its version that has the main melody played with strings most commonly with a group of strings or a solo cello, and versions that use the solo cello frequently partner it with the piano for its accompaniment.
    The cello and the piano ascend as some of the most beautiful instruments in all of music and are each a direct gateway into the soul and heart of man as Chopin put it.
    In and of themselves they are beautiful, and together they create a type of musical duality, a distinctive fusion, that is realized in any composition derived from their pairing.
    On par with the beauty of Serenade on the strings is the second movement of String Quartet No. 14 in D Minor, and then if one jumps down from a quartet to a trio, something that also utilizes this musical fusion is Piano Trio No. 2 in E-Flat Major whose second movement, with the assistance of the violin to complete the trio as is traditionally done in classical piano trios, is one of the most beautiful movements of all time from any piano trio.
    This particular piano trio is plausibly the most well known of them all amongst the general public due to the presence of its second movement in various films and television series over the years.
    Its first appearance was in the 1975 film Barry Lyndon in which is featured the arrangement of the second movement more traditionally heard where the main melody is first played by the cello followed by the piano.
    Its second appearance came eight years later in the film The Hunger in which a less commonly heard arrangement is featured that has multiple differences including a reversal of the order of the cello and piano, and the cello being marked by more tragedy and intensity than is felt in the other arrangement.
    If the mood of the moment has an inclination more towards that tragedy and intensity, then that second arrangement probably wins the day.
    However, when the daily dust settles and the bigger picture is examined, both versions are exquisite and neither is necessarily superior.
    Rather, it is an example of how in classical music, unlike most other genres of music, a single song is not a monolith and can beget different experiences either by different arrangements altogether such as in this case or with Serenade, or by different musicians having different interpretations of the same arrangement.
    `,
    `
    Ludwig van Beethoven was a German composer whose lifespan like Schubert's spanned the Classical and Romantic periods from 1770 to 1827.
    As is the case with Schubert, the intersection of Beethoven's life with both the Classical and Romantic periods means that the style of any given composition of his could be characterized by either, and therefore his anthology is not bound by the confines of a single era.
    Für Elise, for example, is one of his most familiar compositions and is a superb representative for a piano song coming from the Classical period.
    Journeying over to the Romantic period though is where Beethoven's finest achievement on the piano can be found: Piano Sonata No. 14 in C-Sharp Minor colloquially known as Moonlight Sonata.
    Cloaked in the spirit of the Romantic period, the first movement of Moonlight Sonata is potentially the most recognizable solo piano work of all time.
    Its sentiment cannot be underscored enough, and it is a timeless entity that exists in its own realm.
    Even if Beethoven had composed no other music he could still be thrusted into the hierarchy of the greats due to this piece's composition, and a coincidence it is not that his most beautiful and moving piece uses the same key as one of Chopin's most beautiful and moving pieces - C-sharp minor.
    Like other piano pieces that are simple on paper including Chopin's Prelude in E Minor, the simplicity of Moonlight Sonata 1st Movement means that the subtlety of its details is the most influential factor in the formation of its interpretation, and those who can explore within that subtlety and nuance are able to engender the most moving of interpretations.
    Exuding that deep, heavy, profound, intangible, and indescribable emotional essence that so often characterizes Romantic period songs, Moonlight Sonata 1st Movement presents itself as a candidate for the most beautiful and moving song ever composed on the piano, but once again one finds oneself in an impossible situation when trying to construct such rankings.
    It cannot be claimed that Moonlight Sonata 1st Movement is <i>the</i> most beautiful and moving song ever composed on the piano when standing there right next to it in the rain is a song like Chopin's Prelude in E Minor or Nocturne in C-Sharp Minor.
    Confronted once again with the unstoppable force paradox - an impossible situation birthing an impossible question begging an impossible answer - it is realized that no such answer exists.
    Instead, there is a collective of candidates each worthy of the nomination, but at the final hour, on the one-yard line, when the decision has to be made, no singular candidate possesses a worthiness allowing it to surpass all the others.
    If this view is adopted, it allows the psyche to rest and avoid the unnecessarily manufactured turmoil that arises from trying to construct such a ranking.
    Each song can be appreciated for what it is, and nothing else has to be done.
    <i>Comparison is the thief of joy</i> as the old adage goes.
    Following the first movement of Moonlight Sonata the second movement which is nothing to glance at and intentionally so, as it serves to provide a transition out of the emotional experience of the first and reset one's emotions back to some type of baseline in preparation for what is about to come: Moonlight Sonata 3rd Movement.
    Regarded as one of the most challenging piano pieces ever capable of being played only by a select few, it too is cloaked in the spirit of the Romantic period but this time in the form of its virtuosity and beautiful and violent intensity.
    Like Chopin's <i>La Ballade</i>, Moonlight Sonata 3rd Movement revealed unseen heights, dimensions, and possibilities within the piano that were hidden from the world prior to its composition.
    Alongside Moonlight Sonata, in the halls of history Beethoven is most remembered for his symphonies particularly Symphony No. 5 which was featured in Disney's Fantasia 2000 in 1999 and Symphony No. 9. whose fourth movement Ode to Joy is one of the most iconic pieces of music of all time.
    Like some cruel action partaken in the name of sadistic jest, Beethoven developed progressive deafness beginning in his twenties the cause of which although theorized about is officially unknown.
    Despite his affliction, not only was he still able to compose music but it was during this time that he actually composed Symphony No. 9.
    In case the significance of this goes unnoticed, Beethoven, while not being able to hear, composed what is regarded as not just one of the greatest symphonies ever but one of the greatest pieces of music ever in all of musical history.
    Few composers have ever been tested in such a distinguished way, this feat is unmatched by any other, and it is a testament to the eminence of his musical being, intuition, and unshakeable genius.
    `,
    `
    Wolfgang Amadeus Mozart was a strictly Classical period composer born in Austria living from 1756 to 1791.
    His best work includes Fantasia No. 3 in D Minor, Serenade No. 10 for Winds in B-Flat Major, Serenade No. 13 for Strings in G Major (Eine kleine Nachtmusik), The Marriage of Figaro Overture, and The Requiem in D Minor.
    Mozart's style, being that he was from the Classical period, was dominated by the pursuit of musical exquisiteness and perfection less so than the expression of emotion like Chopin or Liszt who were from the Romantic period.
    Inevitably, many retain an involuntary partiality, even an incredibly strong one, but neither style could so boldly be claimed to be inherently superior or pure in its musical essence or a composer more of a genius by virtue of his association with thereof.
    Rather, they are the peaks of two separate exalted mountains, and the superiority is derived from the preference of the individual if such a superiority exists at all.
    By way of example, in Serenade No. 10 for Winds in B-Flat Major the magnitude of the exquisiteness of the opening of the third movement and the magnitude of the perfection of the ending of the seventh movement matches the magnitude of the beauty of the pain of Chopin's Prelude in E Minor and the magnitude of the beauty of the love of Liszt's Liebestraum No. 3.
    It is in some sense like asking what is more superior - a majestic view from the top of a mountain exemplifying the beauty of nature, a prolonged gaze into the night sky fomenting the contemplation of existentialism, a willing sacrifice for another person expressing the power of love, a resolute stance in the face of opposition manifesting the act of courage, or the filling of the unforgiving minute with sixty seconds worth of distance run embracing the pursuit of challenge interwoven with the inevitability of time as is proposed by Kipling?
    Mozart produced the majestic view, Chopin induced the prolonged gaze, Liszt illustrated the willing sacrifice, and so on - answers to such questions do not really endure and are better left unpondered; superiority does not always exist and can sometimes only serve to diminish the essentialness of all parties involved.
    Despite his style though, the lifeblood of the Romantic period did at times appear to exist within Mozart as can be heard throughout the majority of Fantasia No. 3 in D Minor like it were a foreshadowing of what was to come, but then towards the end of the song its tone somewhat surprisingly shifts to the Classical period as if Mozart were reminding the listener which one he belongs to.
    This juxtaposition does make one think what would have happened if Mozart had lived during the Romantic period and Chopin and Liszt during the Classical period?
    Are they products of their time and would have composed different music altogether, in this case Chopin and Liszt being the purveyors of musical exquisiteness and perfection and Mozart the purveyor of the expression of emotion, or are they truly unique creatures each destined to have been born on the day that they were born and to have lived during the time that they lived?
    Intuition leans one towards the latter, but an answer to this question cannot ever truly be surmised, and it is a puzzling and mind-bending thing to ponder which ultimately leads to nowhere.
    Mozart's final masterpiece, The Requiem, is divided into eight primary sections with fifteen unique pieces in total.
    The most recognizable pieces include I. Introitus: Requiem aeternam, II. Sequentia: Dies irae, and III. Sequentia: Lacrimosa with Introitus opening with those ever recognizable hits of D, C-sharp, D, E/A, F, A-flat...feeling like a heavy sigh and its associated feelings encountered in a difficult time or a confrontation with death at life's terminus.
    Mozart died before he could complete The Requiem, and as a result there is unfortunately much controversy surrounding the piece and the events leading up to his death with much of it caused by apocryphal claims made by his wife Constanze in the aftermath.
    There is debate concerning which parts of The Requiem are his own work, and whether or not his death was the result of a rather sudden illness or a slow deterioration of his health in the months prior.
    It is also alleged that when he knew he was dying he professed that he believed he was writing The Requiem for himself.
    Although it is all speculative, this alleged profession and these facts make the piece all the more compelling because the cardinal truth remains that Mozart <i>was</i> struck with an illness at some point during the piece's composition and he <i>did</i> ultimately die before its completion, so in that sense he was writing The Requiem for himself.
    The point being, regardless of which parts of The Requiem are his own work, regardless of whether his illness came on suddenly or it was slow and progressive, and regardless of whether or not he actually uttered that statement or at a minimum believed it in his conscience, the compellingness of the circumstances is not lessened by the ambiguity surrounding what is historically accurate.
    <i>I fear that I am writing a Requiem for myself</i> he is alleged to have said.
    `,
    `
    Johann Sebastian Bach was a German composer like Beethoven but part of the Baroque period having lived much earlier from 1685 to 1750.
    Although there are other very well known composers from the Baroque period such as Vivaldi or Handel, if there were one Baroque composer to rule them all then without question it would be Bach.
    By the time he died, he had composed over one thousand pieces of music, and just like Mozart's Köchel catalog (K), Schubert's Deutsch (D) catalog, or Liszt's Searle catalog (S), Bach's body of work is all cataloged in the Bach-Werke-Verzeichnis (BWV).
    Due to the sheer number of his compositions and their importance in musical history, the BWV is far from the only attempt to catalog his work, but it is the one most commonly used and is regarded as the de facto Bach catalog.
    With Bach now in hand, a readers digest version of the history of classical music could be experientially obtained by listening to Bach for the Baroque period, Mozart for the Classical period, Schubert and Beethoven for both the Classical and Romantic periods and the transition between the two, and lastly Chopin and Liszt for the Romantic period.
    Some of Bach's best work includes The Well-Tempered Clavier, Concerto in D Minor, Toccata and Fugue in D Minor, Air on the G String, and his famed cello prelude from Cello Suite No. 1 in G Major.
    The Well-Tempered Clavier is a series of 96 wonderful preludes and fugues covering all major and minor keys split amongst two books with one of the most famous being Prelude 1 in C Major which is the first prelude from Book 1.
    Staying with the piano for a moment one can find Bach's piano arrangement of Alessandro Marcello's Oboe Concerto in D Minor which is especially noteworthy for its second movement Adagio.
    Transitioning over to the organ comes forth Toccata and Fugue in D Minor whose almost divine transcendance separates it from every other piece of music ever written, and similar to Euler's identity could confirm for a believer the existence of God and could make a non-believer almost believe in God.
    Measures 30 through 46 are one of the most beautiful pieces of music ever written with bar 3 of measure 41 through bar 2 of measure 45 being one of the most beautiful pieces of music ever written within one of the most beautiful pieces of music ever written like a dream within a dream as is theorized in Nolan and Zimmer's Inception.
    Air on the G String makes a laudable attempt to embody the music of the air most notably felt in those long, drawn out notes that hover gracefully in the atmosphere.
    Bach's original composition is actually the second movement of his Orchestral Suite No. 3 in D Major titled Air, and the name Air on the G String was born out of an arrangement by German violinist August Wilhelmj.
    Though there are multiple differences in Wilhelmj's arrangement including changing the main key from D major to C, the name comes from the fact that Wilhelmj took the part for two violins and a viola, transferred it to the solo violin, and brought the melody down an entire octave so that it could be played entirely on the violin's lowest string, the G string.
    In the original score of the arrangement, Wilhelmj wrote <i>auf der G-Saite</i> above the staff of the violin, German for <i>on the G-String</i>, and thus the name was born by merging Bach's <i>Air</i> with Wilhelmj's <i>on the G-String</i>.
    The descriptive elegance of the name has allowed its popularity to endure, and as a result the piece is most often referred to as Air on the G String even when Bach's original version Air is being played.
    The opening of Air on the G String, along with the aforementioned bars and measures of Toccata and Fugue in D Minor, highlight one of Bach's most prominent qualities which is his ability to create these fusions of notes too beautiful, too perfect, and too astounding to really describe as if one did not even know that something like that were possible until first experienced. 
    Chopin is more the master of expressing the soul and heart of man whereas Bach is more the master of expressing the soul and heart of the universe; one can listen to Chopin and behold the human condition whereas one can listen to Bach and behold the world itself in all its forms.
    A journey into Chopin's Prelude in E Minor will narrate the raw tragedy, sadness, and pain of humanity whereas a dive into Toccata and Fugue in D Minor will illustrate the marvelous nature of the cosmos.
    Behold, what a beautiful universe that we live in, and behold, what a beautiful illustration of the universe that we can find in cosmic conduits like Bach.
    And on the point of illustrating the universe, one can also include Bach's cello prelude which cellist Yo-Yo Ma most exceptionally describes as a representation of the infinitude of the natural world, be that the infinite beauty of nature or how it is constant and unchanging. 
    `,
    `
    Sergei Rachmaninoff, aside from being one of the most prominent composers ever in general, is arguably the most prominent hailing from Russia and lived both before and during the Soviet Union from 1873 to 1943.
    <i>Music is enough for a lifetime, but a lifetime is not enough for music</i> Rachmaninoff once said in a bid to describe the limitless possibility that resides within it.
    There is enough music to satisfy the soul of any one person during the course of their life, but any venture to find its endpoint will never succeed.
    Music is beyond just being enough, beyond just being vast.
    It exists on an infinite plane, and that plane is infinite both in regards to its capacity for creation and the experiences that can come from it.
    Ergo, in the background of the passage of time dwells an ever present ray of hope, like an undying ember, that the next piece of music that will move one in a way unlike anything else can is always lingering around the corner just waiting to be discovered, and in the meantime the anticipation it generates can be effortlessly assuaged by taking refuge in the discoveries that have already occurred.
    In other words, could there come forth in the fabric of spacetime a new composition which possesses in some equivalent form the tragedy and sadness of Chopin's Prelude in E Minor, the profundity and introspection of Beethoven's Moonlight Sonata, the beauty and yearning of Liszt's Liebestraum, or just more generally the mostly indescribable emotivity in whatever form it takes that exists in these songs and so many others in their cohort?
    The infinitude of the plane suggests the answer is in the affirmative, but until that day comes those pieces and their fellow tribesmen are more than enough to suffice.
    Undoubtedly one of the most significant contributors to this infinite plane is Rachmaninoff.
    A prevailing theme in his work, and that by which Rachmaninoff's essence is derived from and defined by, is his ability to create powerful music juxtaposed against his ability to create beautiful music.
    It is difficult to find a piece of music more powerful than the opening of the first movement of Piano Concerto No. 2 in C Minor, the fourth piece of Moment Musicaux in E Minor which is comparable to Chopin's Revolutionary Etude, Prelude in C-Sharp Minor from Morceaux de Fantaisie, or his symphonic poem Isle of the Dead in which is felt an incredibly powerful sense of anticipation inspired by the equivalently named painting by Swiss painter Arnold Böcklin.
    Then, compare those pieces with the second movement of Piano Concerto No. 2 in C Minor, Elegie in E-Flat Minor from Morceaux de Fantaisie which strikes at the heart of some of Chopin's nocturnes, Vocalise from his 14 Romances, or the third movement of Cello Sonata in G Minor.
    Since power and beauty do not necessitate mutual exclusivity, many of his pieces including some just mentioned often coalesce power and beauty and are simultaneously beautifully powerful and powerfully beautiful.
    Thus, Rachmaninoff is a consummate example of the rare and impressive creative dichotomy that exists within certain musical geniuses, and the power and beauty of the infinite plane was incalculably elevated by his seventy year existence.
    If a single Rachmaninoff composition had to be selected for additional highlighting avoiding the traditional selection, and rightfully so, of Piano Concerto No. 2 in C Minor which is probably the most celebrated piano concerto of all time, then it could be Elegie in E-Flat Minor from Morceaux de Fantaisie.
    French for <i>Fantasy Pieces</i>, Morceaux de Fantaisie is a set of five solo piano works beginning with Elegie.
    Just when one thought that the experience created by the original Elegie on the piano was sufficient enough, it was eventually doubled by the creation of a second arrangement on the cello.
    One of the most beautiful and moving songs ever on the cello, it is a perfect example of the cello's heart-wrenching capabilities wherein the way the bow tears at the strings of the cello replicates the way the sound tears at the strings of the heart.
    The opening specifically is one of the most beautiful melodies ever written and starts with a high G-flat in measure 3 that in the piano arrangement hits like an aggressive strike but in the cello arrangement is played a bit more delicately.
    Following this is then a gentle pitch downwards for six measures until it reaches one of the most beautiful E-minor's ever written that mesmerically hangs in the air satiating the soul for four consecutive bars.
    After reverting course and ascending upwards eventually reaching that same high G-flat again in measure 11, beauty continues to be present for the duration of the song, and Rachmaninoff's ability to union it with power is felt numerous times including for the first time in measure 12 and later on in an especially climactic section towards the middle.
    Furthermore, Elegie is yet another example of the ability of classical music to be able to forge multiple experiences with a single song.
    In this case, since the two different experiences stem from arrangements using two different instruments, it could be taken a step further and even claimed that when this happens in some sense it is like having two different songs altogether.
    Some genres of music cannot accomplish this forging, and even for the ones that can the prevalence is typically lesser.
    Anyone who appreciates classical music should occasionally take the time to remind oneself of the beauty of this feature within it and ultimately ensure that it is never taken for granted.
    `,
    `
    Erik Satie was an enigmatic French composer living from 1866 to 1925 most well known for his series of Gnossiennes and Gymnopédies with the first composition in each series being the most renowned.
    The spirit of these compositions situates them uniquely amongst all other pieces of music ever composed.
    There is a deep level of calmness within his first Gymnopédie, and his first Gnossienne is an inscrutably beautiful piece for which any attempt to pinpoint the emotion it strikes at is a mostly unfeasible task ripe for failure and primed for speculation.
    These pieces illustrate the larger point which is that his work positions him somewhat as the stereotypical mad scientist or eccentric artist - in a good sense - attempting to go places no one else has ever gone before.
    An exploration into the world of Satie is a deviation from anything conventional, and his unconventional nature is even reflected by his physical appearance in his signature Satie-esque look of donning glasses without temples and occasionally a top hat.
    His music is not easily comparable to anything else, and subsequently as a composer he cannot be easily ascribed to any classification in the same way it could be comfortably said that Mozart was a Classical period composer and Chopin a Romantic period composer.
    His music is mysterious, idiosyncratic, and unrepeatable in the best sense lacking any negative connotation.
    There never has been and never will be another Erik Satie.
    Of course, that statement could be declared concerning many other composers as well; there never has been and never will be another Chopin, and there never has been and never will be another Liszt, both of which are true.
    But even then, it remains slightly more pertinent for Satie by a fine edge in a niche regard, for out of those two geniuses could be constructed a collation whose foundation is grounded in their likeness.
    Who could Erik Satie be so easily compared to?
    It is the atypical artistry of Satie, the uniqueness of his uniqueness, that makes it especially apposite for him and any quest for a replication of his mind that was conceived preceding his birth, in existence paralleling his life, or resurrected succeeding his death is inexorably doomed for foundering.
    `,
    `
    Claude Debussy, another French composer living from 1862 to 1918 whose life intersected with Satie's, composed music defined by its own particular essence comprised of a beautiful tranquility embedded within its sound by which it can be identified.
    His music feels like some kind of alluring oasis serving as a sanctuary for peace; as if something pure cleared a section of land, cleansed it of all negative forces, and transformed it into a refuge for all that is good in this world.
    Debussy was influenced by Satie and the two were friends for some time despite later having a falling out.
    This influence is not surprising since Debussy's music is quite inimitable like Satie's although it is more easily classifiable given that Debussy is considered to be the founder of musical Impressionism despite his disdain for that attribution.
    Debussy's most popular song Clair de lune is alike to Beethoven's Moonlight Sonata 1st Movement, Bach's cello prelude, Mozart's Eine kleine Nachtmusik, and other classical songs both by and not by those composers in that it is a song most would recognize even if not attuned to classical music or having the ability to recall the song's name at all.
    Similar to Rachmaninoff's Isle of the Dead, Debussy's inspiration for Clair de lune was from another identically named piece of art, in this case a poem written by French poet Paul Verlaine in 1869.
    Knowing that <i>clair de lune</i> is French for <i>moonlight</i>, one can then envision an evening spent standing on the sands of an ocean beach or the grass of an open field looking upwards at the clear night sky paired with the moon on full display, beholding its absolute majestic beauty as Clair de lune's notes audibly ring out in the background mirroring the way the moonlight visually rings out in the sky.
    Aside from just generally being a beautiful song, the true magnificence of Clair de lune lies within the fact that Debussy is able to maintain his signature essence aforementioned even in the parts where the velocity increases significantly from its slow-tempoed beginning.
    That is not at all to say that Clair de lune is therefore superior to other Debussy masterpieces whose tempos remain slow throughout such as Rêverie.
    Together, Clair de lune and Rêverie stand shoulder to shoulder.
    Rather, it is a feat worth mentioning because it is perhaps easier to achieve that maintenance in a song like Rêverie where the tempo's slowness remains consistent throughout.
    Other magical and dreamlike Debussy creations include Arabesque No. 1 which is like the flow of water or the breath of life as it cascades from E and F-sharp down to a lower octave B in its most recognizable part, and The Girl with the Flaxen Hair which is most familiar in measures 22 and 23 with those unmistakable quick and successive hits of D-flat, E-flat, D-flat, and B-flat.
    `,
    `
    Gabriel Fauré, yet again another French composer, lived from 1845 to 1924.
    Fauré is less famed amongst the general public than other composers, but his stature as a household name deserves to be raised due to his piece Élégie which, like Rachmaninoff's, is one of the most emotionally intense and beautiful pieces of music ever written.
    Arranged for the cello and piano, Élégie is once again an embodiment of the incredible beauty that materializes when the cello and piano unite, and with the unrelenting avocation present within every classical music aficionado to seek out the most superlative interpretations, one such interpretation can be found with Dutch cellist Harriet Krijgh.
    An utmost appreciation for the elegies of Fauré, Rachmaninoff, and any other for that matter, requires an education if not already had on the word <i>elegy</i>, with <i>elegie</i> being its French equivalent.
    Its origin is in the ancient Greek word <i>elegos</i> which had two meanings: a sad and mournful song accompanied by an aulos which is an ancient Greek wind instrument, or a poem constructed using elegiac couplets which is a coupling of verses, an elegiac hexameter and elegiac pentameter, utilizing a particular rhythm.
    In the English language, its first meaning up until the early seventeenth century was that of a serious meditative poem.
    This particular definition was unrelated to music nor did it demand an association with anything sad or mournful.
    Eventually, the definition evolved to what it is now in modern English which is a song or poem that is sad and mournful, typically to lament for someone who has died.
    As per the definition, a musical elegy is ubiquitously used in the context of death but this is not required.
    It simply expresses something in life that is sad, somber, and even tragic not beholden to anything in particular.
    Whether or not Fauré and Rachmaninoff composed their elegies with the intention to employ the secondary and discretionary part of the definition remains ambiguous.
    In Rachmaninoff's case, Elegie, as one of the five individual compositions of the collective that is Morceaux de Fantaisie, was composed as a dedication to his harmony teacher at the Moscow Conservatory Anton Arensky who, having died in 1905, was still alive at the time of Morceaux de Fantaisie's publication in 1892, and therefore it is not immediately apparent that Rachmaninoff composed Elegie with death on his mind.
    On the contrary, Rachmaninoff did once compose an elegy, Trio élégiaque No. 2, with the explicit purpose of honoring someone who had died which in this case was fellow Russian composer Tchaikovsky who was a mentor of Rachmaninoff's and a significant influence in his life.
    This still does not mean that it can be posited that Rachmaninoff did not compose Elegie to lament over death as he could have very well composed it for death in a general sense not specific to any one person.
    Regardless, any guesswork is suppositional and his motivation is ultimately unknown.
    Fauré's elegy is in a similar boat as Rachmaninoff's from Morceaux de Fantaisie, but if one were to speculate then it appears most plausible that Fauré composed Élégie for a metaphorical death.
    He composed it in 1880 originally as a movement for a cello sonata, but he never completed the remaining movements and it was eventually officially published in 1883 as a standalone piece titled Élégie.
    Just prior to that in 1877, he had become engaged to a woman named Marianne Viardot after four years of courtship who then broke off the engagement in that same year.
    Fauré dearly loved Marianne and the breakup was not mutual, so given that Fauré composed Élégie in the aftermath of this, it could be reasonably inferred that Élégie is the expression of Fauré's grief regarding the death of their relationship.
    Alternatively, if that were not Fauré's explicit intention, then potentially the lingering effects of this breakup were impactful on Élégie's sentiment be that a conscious or subconscious decision on Fauré's part.
    Regardless of Fauré and Rachmaninoff's intentions, in the case of either of their elegies the specificity of their emotional interpretations regarding whether they should be directly associated with death is ultimately at the mercy of the listener.
    If during any instance of listening this relationship with death is not desired, then the elegies of Fauré and Rachmaninoff's can be divorced from it, and the songs can be appreciated for simply being two incredible compositions expressing what they express independent of life's departure.
    However, if such a relationship is desired then it can easily be had, and every one of death's emotions can be felt from the painful sadness of the loss, to the blessed joy of the memories, to the raging anger of the passing, and to the ultimate finality of the acceptance.
    Fauré's Élégie is able to capture every emotion associated with death and grief, and this is why aside from just being such a beautiful song in general, his composition is such a gift to the world.
    As is typical of these great composers, someway, somehow they are able to take the emotions and experiences that people all go through in their lives and express them with this transcendentally mysterious gift of sound, and although maybe it could be studied comprehensively from a musical theory standpoint, one's intuition might be that there does exist some prevalence of intangibility that cannot be espoused from an academic view.
    Much of the song including its beginning is constructed by utilizing sets of threes as is commonplace in music.
    Opening in C minor, the song begins by emulating a tolling bell, as if to mark the beginning of a funeral procession, with eight chord strikes on the piano with the first being loud and its successors becoming gradually softer. 
    The cello then begins playing in forte the most iconic part of its beautifully sad and introspective melody that makes the journey from E-flat down to C one octave below striking the soul and encapsulating the overwhelming sadness felt in the immediate aftermath of loss.
    This is played for a second time pianissimo in the 6th measure and for a third time in the 18th measure pianississimo.
    Along the way in the 10th measure right after the second occurrence of the opening melody there begins a passionately intense build up to a peak of three sets of F-sharp and G in the 16th and 17th measures consisting of three sets of two heavy hits of the same note starting at A, then C, and then A again one octave above.
    It is right after reaching this peak that it abruptly reverts back to the third occurrence of the opening melody.
    If played correctly, the disparity between the loud intensity of the peak and the quiet softness of that third occurrence is indescribably compelling and one of the most beautiful parts of the song.
    The song then transitions to something hopeful and uplifting, like the fond memories of a loved one while they were still alive, in measures 23 through 34 immediately followed by a section whose intensity is marked by power, velocity, and anger, describing the enraged protest born from death.
    Then at measure 39 this intensity is passed on to the opening melody, foisting onto it a whole new shade of meaning from what it was in the beginning.
    After its completion in measure 42 there is a beautiful descent of three sets of E-flat, D-flat, and C culminating in measure 45 with a quiet yet resolute C holding out in the background during a brief section where the piano takes charge of the melody.
    The melody is then returned to the cello in measure 47 where the song then lives out the rest of its life eventually terminating in that same C describing the sad but necessary acceptance required by death.
    All of these parts contribute to Élégie being one of the most beautiful songs ever written on the cello, one of the most beautiful songs ever written in general, and nothing less than a complete musical masterpiece.
    `,
    `
    Sir Edward William Elgar was a British composer from 1857 to 1934 and is most well known for his Cello Concerto in E Minor which rests squarely adjacent to Fauré's and Rachmaninoff's elegies.
    All exude many of the same emotions including a sense of finality, and in Elgar's case it was the final piece he ever composed engendering it to be like his farewell to life.
    It is inconceivable that the concerto did not initially receive the praise that it deserves, and it was not until a 1965 recording by British cellist Jacqeuline du Pré which catalyzed the development of its reverence that it finally achieved the recognition that it merits.
    At that point, decades had passed since its debut in 1919.
    The opening of the first movement is almost indescribable.
    It is like being punched directly in the soul, and similar to the second half of Chopin's Prelude in E Minor it happens so abruptly that one is left sitting there in a state of shock trying to comprehend what just happened.
    Elgar identified with this particular piece of music more than any he ever wrote.
    Within it is one of the most beautiful and peaceful melodies ever written beginning with B, C, B, D, E, D, and C, and shortly before his death he remarked that if someone is ever heard whistling this tune up in the Malvern Hills after his passing that it would be him.
    Aside from its opening and that melody, the first movement is most revered for the way it sensationally builds up to a high E in a part towards the middle.
    It is the shock value of the opening, the beauty and peace of that melody, and the transcendence of that buildup by which Elgar formulates a musical triumvirate arduous to find anywhere else.
    In the spirit of threes, the first movement of Elgar's Cello Concerto in E Minor, Fauré's Élégie, and the cello arrangement of Rachmaninoff's Elegie exemplify the cello's ability to be a distinctive conduit for emotion, and they are some of the most emotionally powerful cello scores ever composed.
    As previously established, any endeavor at a ranking is iniquitous and even nefarious.
    What action is achieved, what purpose is served, by venturing to compare different things that are dually beautiful and necessary.
    The end state is a violation of the sanctity of the ones positioned at a lesser ranking.
    In lieu of a hierarchical ranking, a more appropriate selection is rooted in a non-hierarchical comparison of their sentiment.
    If, during any snapshot of time one feels drawn more towards that of the shock value and transcendence supplied by Elgar's cello concerto, then it will rise up as the victor.
    If, on the other hand the moment's gravity pulls one more towards that of the raw tragedy, somberness, and at times pain of Fauré and Rachmaninoff's elegies, then those compositions will be the tying victors and one can not go wrong either way.
    Ultimately, all three of these cello pieces are incredible, all three of them should be appreciated and listened to, and similar to the works of Chopin, Liszt, Schubert, and all the others, if any of them ceased to exist it would rip out not just a piece of the soul of classical music, but a piece of the soul of humanity, and the world would somehow be lesser.
    `,
    `
    Charles-Camille Saint-Saëns was a French composer from 1835 to 1921 most well known for his piece The Swan and his Cello Concerto in A Minor.
    An incredibly technically demanding cello piece that is intense, smooth, precise, and nimble, the beginning and ending of Cello Concerto in A Minor constitute its most recognizable parts with the latter being most notable for its climactic finish that pierces the air with nine high octave A's.
    Antipodal to the intensity of Cello Concerto in A Minor is The Swan which is one of the most peaceful and beautiful songs ever composed and one of the most sampled cello pieces ever.
    The Swan, or <i>Le cygne</i> as it is more properly known in French, is the 13th movement from his suite of 14 movements The Carnival of the Animals.
    Ironically, Saint-Saëns was no fan of his own creation and feared that any public exposure of The Carnival of the Animals would harm the perception of him as a serious composer.
    He delayed its publishing until after his death as specified in his will, and while he was still alive enacted a prohibition on performances of it in the public domain.
    However, despite any deficiencies he perceived in the other movements, even Saint-Saëns recognized the beauty and brilliance of The Swan, and it was the one movement that he allowed to be published during his lifetime which happened in 1887.
    The Swan was originally composed for the cello and piano but is also traditionally played with the cello and harp.
    Just like with the different arrangements of many other songs including Schubert's Serenade and Piano Trio No. 2 in E-Flat Major 2nd Movement, Bach's Air on the G String, and Rachmaninoff's Elegie in E-Flat Minor from Morceaux de Fantaisie, The Swan becomes even further remarkable because it is a single song out of which comes two different experiences which are each uniquely beautiful in their own way.
    And, like some of the compositions formerly mentioned, the piano-cello version of The Swan captures that unrivaled duality that exists with the piano and the cello.
    Regardless of which version is played, the beauty of The Swan throughout most of the song is dominated by the cello playing the main melody with the piano or harp serving as its accompaniment.
    However, for its conclusion the focus is transferred entirely over to the piano or harp in the final three measures playing a beautiful melody primarily formed by E, D, and B that makes a graceful descent down three different octaves constituting one of the most satiating endings ever in all of music.
    `,
    `
    Remo Giazotto was a 20th century Italian musicologist living from 1910 to 1998.
    Given that he was a musicologist, he is not known as a composer like the rest of them and the only song to his name is Adagio in G Minor.
    Adagio's composition is often mistakenly credited to Tomaso Albinoni of whom Giazotto was a biographer, and as a result it is often incorrectly referred to as <i>Albinoni's Adagio</i>.
    Giazotto originally claimed that a small amount of the song came from Albinoni but later retracted that claim so the facts remain unclear with the mistakened accreditation being his own doing with a cryptic rationale.
    However, the accepted narrative is that the credit for the majority of the song goes to Giazotto even if a small amount did come from Albinoni.
    If it truly is <i>Giazotto's Adagio</i> and not <i>Albinoni's Adagio</i>, then it would appear that Remo's talent as a composer was largely neglected and squandered given that it is the only song he ever composed yet is also one of the most beautiful songs ever composed.
    Beginning with a sublime eight measure introduction most breathtakingly played on the organ, the song then transitions into the melody with much of it marked by the repetitive plucking of some background strings serving as its figurative heartbeat accentuating even further the heavy beauty of the melody.
    `,
    `
    Samuel Barber is one of the most acclaimed American composers of the 20th century living from 1910 to 1981 and is most known for his song Adagio for Strings.
    Originally arranged for a string orchestra, it is also commonly performed with a choir in which it is alternatively known as Agnus Dei.
    The orchestral strings arrangement is nice, but the unchallengeable sound and emotion of the solo cello really drives forward the cello arrangement to be the best of them all.
    Although not an exhaustive list, collectively Schubert's Serenade and Piano Trio No. 2 in E-Flat Major 2nd Movement, Bach's Cello Suite No. 1 in G Major Prelude, Rachmaninoff's Elegie in E-Flat Minor from Morceaux de Fantaisie, Vocalise from his 14 Romances, and Cello Sonata in G Minor 3rd Movement, Faure's Élégie, Elgar's Cello Concerto in E Minor 1st Movement, Saint-Saëns' The Swan, Giazotto's Adagio, and Barber's Adagio for Strings are some of the most beautiful and moving songs ever composed or arranged for the cello.
    `,
    `
    Dmitri Shostakovich was a Russian composer like Rachmaninoff living from 1906 to 1975.
    Waltz No. 2, his most famous composition and one of the most famous waltzes ever, is one of those pieces for which there are few if any people who could ever get tired of listening to it.
    The elegant feeling of the song is no doubt in part due to Shostakovich's choice to utilize the saxophone for the main melody.
    Although the saxophone was originally invented for classical music in the 1840s by Belgian instrument maker Adolphe Sax long before the invention of Jazz, it is most commonly associated with the latter genre, and as such this blending between classical music and an instrument traditionally associated with Jazz will deliver a pleasant surprise for most upon hearing it for the first time.
    Other versions have been performed as well with other instruments including the cello, and versions that do this deserve recognition.
    However, the grandest form of Waltz No. 2 remains with the saxophone, and those pure and soothing notes emanating from the sax really help to exude its elegant spirit.
    `,
    `
    Jules Massenet was a French composer living from 1842 to 1912 primarily known for his operas.
    The author confesses to an unwavering preference for the cello, but his violin piece Méditation from the opera Thaïs is as strong a candidate as any for one of the most beautiful songs ever written and potentially the most formidable spokesman for what the violin can be.
    The song feels like the definition in musical form of a kind of heavenly bliss achieving pure perfection which, like many of Debussy's creations, is completely void of anything negative as if such a thing were not ever even known.
    The beauty of the melody is born out by a trinity of something peaceful, profound, and yearning, and the background accompaniment of the harp in such arrangements only propagates its beauty further as if it were not already beautiful enough.
    Cello arrangements are also commonly performed and are unquestionably beautiful, moving, and worthy of listening.
    However, the indubitable abode of Méditation from Thaïs resides with the violin.
    It is the violinist's piece, and those high notes of the violin pierce the soul in a way unlike any other song concluding with a high octave A tenderly fading away into the distant cosmic beauty of the universe.
    `,
    `
    Modest Mussorgsky, another Russian composer and member of Russia's extolled musical group The Five, lived from 1839 to 1881 and composed a number of great compositions including Pictures at an Exhibition and Night on Bald Mountain.
    Pictures at an Exhibition is a ten-movement piano suite, with the addition of a theme titled Promenade, depicting Mussorgsky's tour of an 1874 exhibition of paintings by Russian painter Viktor Hartmann at the Imperial Academy of Arts in Saint Petersburg.
    The exhibition was put on in honor of Hartmann's memory who had died unexpectedly in the year prior, and his death personally affected Mussorgsky who was a longtime friend of his and had even been given two of his paintings by Hartmann himself.
    Each piece depicts an individual painting Mussorgsky observed amongst the over four hundred in total at the exhibition, and unfortunately some of the ten were eventually lost leaving Mussorgsky's musical depiction the only thing left of them.
    Although Mussorgsky's original composition is for the piano, the most widely performed version is that of French composer Maurice Ravel who adapted it for orchestra in 1922. 
    The second and one of the most famous movements, <i>Il Vecchio Castello</i>, is one of the most hauntingly beautiful pieces of music ever composed.
    The painting associated with this particular movement is unfortunately one of the ones lost to history, but what is known about it is that it was an architectural sketch in the form of a watercolor painting of an old medieval castle Hartmann had encountered in his travels throughout Europe.
    Hartman was known for adding human figures to his architectural sketches to adequately capture scale which in this case took the form of a troubadour performing outside the castle, a troubadour being a knightly composer and performer of lyric poetry in the Occitania region during the High Middle Ages.
    <i>Il Vecchio Castello</i> is Italian for <i>The Old Castle</i>, but it is disputed whether the painting actually depicted a castle in Italy or Mussorgsky made that attribution himself and the castle resided in a different country.
    However, there is evidence to support that it actually was in Italy given that Hartmann had in fact visited Italy during his travels, and the Occitania was comprised of territory that later became part of Italy along with France and Spain.
    Regardless, if not versed in Italian then upon learning that <i>il vecchio castello</i> translates to <i>the old castle</i> the feeling of the song becomes quite fitting.
    Such an old castle can be envisioned - large and abandoned but still maintaining a noble and majestic aura; host to another time of man now bygone, and despite its long unoccupied state the presence of that which was can still be felt like a gentle wind traversing the air while the at times eerily beautiful sentiment of the music echoes the secrets, mysteries, and magic that such places might have possessed.
    The melody in measures 7 through 15, beginning with D-sharp and G-sharp and terminating with B and G-sharp one octave down, is one of the most beautiful and picturesque pieces of music ever put to paper.
    It vividly resonates in the air with something calm, peaceful, elegant, soothing, mysterious, reflective, and nostalgic, and its ability to continuously move one's inner spirit no matter how many times it is listened to is present in any arrangement be that with the saxophone in Ravel's orchestral arrangement or the piano in Mussorgsky's original.
    Similar to Liszt's piano arrangement of Schubert's Serenade, Bach's Adagio, or piano arrangements of his Air on the G String, the piano version of Il Vecchio Castello demonstrates how musical beauty does not mandate complexity, and some of the most beautiful songs ever composed on the piano are actually birthed from some of the most simple.
    Moving away from the haunting beauty found in Il Vecchio Castello, Mussorgsky shifts gears to something more exhilarating, frightful, and dark in Night on Bald Mountain.
    Night on Bald Mountain is a tone poem that underwent numerous revisions over time both in regards to its musical composition and story narration, but it generally tells the story of some evening revelry of dark spirits on a mountain led by some great demonic character.
    In its first version named St. John's Night on the Bare Mountain, Mussorgsky sought to narrate the Russian legend of a Witches Sabbath led by Satan on a mountain named Lysa Hora near the city of Kyiv on St. John's Night.
    His mentor and leader of The Five Mily Balakirev disapproved of the piece and refused to perform it, but motivated by an affinity for his composition Mussorgsky made multiple attempts at its salvation in the subsequent years before his death by composing two additional versions.
    The second version was composed five years after the original for a scene named Night on Mount Triglav in his opera-ballet Mlada in which it was renamed to Glorification of Chernobog referencing the god of misfortune Chernobog from Polabian mythology, and the third version Dream Vision of the Peasant Lad thirteen years after the original for his opera The Fair at Sorochyntsi.
    Despite Mussorgsky's efforts over the span of that thirteen years any version of his was unsuccessful.
    The second version was never published or performed at all - Mlada was never completed by Mussorgsky and although some of its musical scores survived, Glorification of Chernobog did not.
    The first and third versions were at least performed but not until many years after his death and they never achieved any notable esteem.
    The fourth and most popular version of the piece, and the one that is traditionally performed in orchestras, was composed five years after his death by fellow member of The Five Nikolai Rimsky-Korsakov who drew from all previous versions for both its musical composition and storytelling and as such can be thought of as a trihybrid of Mussorgsky's three versions.
    The fourth version narrates the story of an evening gathering of dark spirits led by Chernobog in which there is a glorification of Chernobog, a Black Service, and a Sabbath which is ultimately brought to a cessation by the ringing of church bells in a nearby village culminating in the arrival of the bright morning.
    From the standpoint of its story narration, the general premise and plotline of the story is most closely aligned with Mussorgsky's first version, the utilization of Chernobog comes from Mussorgsky's second version, and the cessation of the sinister gathering by village church bells comes from Mussorgsky's third version.
    From the standpoint of its musical composition, the piece is a conglomerate of, in Rimsky-Korsakov's own words, Mussorgsky's best and coherent material added with the fewest possible interpolations of his own.
    The fame rendered to Night on Bald Mountain was partially due to the fourth version's greatness in and of itself given that it was very well received from the time of its public debut in 1886, but the chief accelerator was its featuring in Disney's Fantasia in 1940 in which is used a fifth and final version by Leopold Stokowski.
    The story narration of this fifth version matches the fourth, and its musical composition, according to Stokowski, is based on the fourth in form and content but Mussogrsky's original in orchestration.
    The animation in Fantasia compellingly brings the narration of the story to life, and the stopping of the endeavors of Chernobog and the dark spirits by the ringing church bells can be thought of to signify how light and goodness can conquer all things; the sensitivity that evil has to good whereby a small amount of good has the potential to defeat evil, or how a single light can be used to liberate an entire place consumed and entrenched with darkness.
    A subtle but easily overlooked detail is that Chernobog and the dark spirits are not actually killed but rather the dark spirits simply retreat and Chernobog returns to his original dormant position atop the mountain leaving open the possibility of their return at some future time as if to illustrate how evil can never be defeated into extinction but merely into dormancy, and therefore the light and the goodness must maintain a sustained and unwavering level of vigilance.
    In the midst of the foggy confusion created by the five different versions, clarity can be supplied by stating that any reference to Night on Bald Mountain is generally either to Rimsky-Korsakov's fourth version or Stokowski's fifth version both of which have their provenance to varying degrees in Mussorgsky's original three versions, and therefore Night on Bald Mountain's authorship should include an acknowledgement of their contributions.
    However, if a single version had to be handpicked as <i>the</i> Night on Bald Mountain, then it would be Rimsky-Korsakov's fourth version.
    Stokowski's fifth version, although the more famous of the two due to its presence in Fantasia, is seldom heard beyond that, and any performance of Night on Bald Mountain is presumably Rimsky-Korsakov's fourth version unless indicated otherwise.
    `,
    `
    The remaining composers are Max Bruch, Franz Gruber, George Frideric Handel, Pyotr Ilyich Tchaikovsky, Antonín Dvořák, Johannes Brahms, Edvard Grieg, Johann Strauss II, Giuseppe Verdi, Gaetano Donizetti, and Pietro Mascagni.
    Bruch's Kol Nidre and Gruber's Silent Night are two incredible compositions coming from the Jewish and Christian traditions.
    Although not very comparable in their actual sentiment they are comparable in their beauty.
    Wilhelm Kempff's piano arrangement of Handel's fourth movement of Suite No. 1 in B-Flat Major emanates the spirit of the Romantic period out of a song originally composed by a Baroque period composer.
    It is extraordinarily beautiful and one of the finest expressions of melancholy delivering a type of beautiful sadness joined with a delicate softness.
    The works of Tchaikovsky, Brahms, Dvořák, Grieg, Strauss, and Verdi can help to complete any classical music collection.
    Tchaikovsky is another seminal and salient composer from Russia and why it is stated Rachmaninoff is <i>arguably</i> the most prominent composer hailing from Russia instead of definitively stating as such, and out of his ballets Swan Lake and The Nutcracker come forth some of the most recognizable pieces of all time such as Enchanted Lake, Waltz of the Flowers, and Pas de Deux which has one of the most sensational musical climaxes of all time.
    Also quite noteworthy is his 1812 Overture which serves to celebrate Russia's defeat of the French invasion led by Napoleon which is one of the only songs ever to incorporate actual cannons as is heard in its historic ending.
    The unmistakable opening of Grieg's Morning Mood from the play Peer Gynt with that iconic singing of the winds reminds one of waking up to overlook some breathtaking natural landscape like a scatter of green rolling hills in the countryside.
    This is in stark dissimilarity to his piece In the Hall of the Mountain King from the same play which seeks to emit a fierce buildup of power, intensity, and fear that one might feel upon tentatively penetrating a mountainside leading to the hall of a fortress embedded within of some mighty mountain king in a fantastical fantasy.
    A lesser known Grieg piece, but one of the most beautiful, is the fourth movement Air from Holberg Suite whose beauty is reminiscent of Bach's Adagio.
    Dvořák's Symphony No. 9 in E Minor, From the New World, is most heralded for its second movement which brings forth an overwhelming sense of calm and hopefulness.
    Alongside Dvořák's symphony is Brahms' Symphony No. 3 in F Major whose third movement is especially beautiful as well, and no mention of Brahms would be appropriate without the inclusion of his Hungarian Dances.
    Strauss's The Beautiful Blue Danube is firmly in line with Shostakovich's Waltz No. 2 or Tchaikovsky's Waltz of the Flowers as one of the most famous waltzes ever, and on the opposing end of the musical spectrum comes Dies irae from Verdi's Requiem.
    Undeniably one of the most powerful compositions ever in choral form, the almighty bellowing of the chorus is likely the foremost manifestation ever of a type of power amalgamated with fear and horror that could be experienced on the <i>Dies irae</i> (Day of Wrath).
    An alternative but fitting interpretation could be the narration of a frightful and terrifying nightmare maybe involving an encounter with some hellish monster.
    Regardless, if an offer of the musical manifestation of heaven and hell were obligated, then Massenet's Méditation from Thaïs and Verdi's Dies irae would certainly be a fitting pair.
    Donizetti and Mascagni were both composers known for their operas like Massenet.
    Intermezzo sinfonico from Mascagni's opera Cavalleria rusticana is a very beautiful piece as is Una furtiva lagrima from Donizetti's opera L'elisir d'amore.
    Intermezzo sinfonico was originally composed for an orchestra and Una furtiva lagrima for vocals but the cello versions are very moving as well.
    `,
    `
    Although the works of Hans Zimmer undoubtedly deserve special recognition in the landscape of soundtrack composing, the landscape is painted on a vast canvas with a varied assembly of artists, colors, and techniques in which a steadfast and dominant but merely singular section is formed from him and his contributions, and as such it would be flagrantly remiss and unjustifiable to limit the viewing to Hans' section alone thereby excluding many other remarkable composers and compositions no different than how the same situation would arise in the landscape of classical piano if the view were restricted to Chopin's territory.
    In either case, the view would exist in a state of contrived incompleteness objectionable by any reasonable standard.
    So, moving on to other soundtrack composers, Harry Gregson-Williams's Narnia Lullaby, although brief in duration, is one of the most strikingly beautiful and transcendent pieces of music ever composed.
    Created for The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe, the film unmaliciously but deceptively covers the origins of the beautiful sound in that it appears to originate from some type of fictional woodwind most akin to an offshoot of the aulos when in reality the originator is the beautiful duduk hailing from Armenia, and a very similar sound can be achieved with the ocarina which is one of the oldest instruments known to man.
    Steve Jablsonky and James Newton Howard are known for their contributions to motion picture soundtracks like Hans Zimmer with Steve being best known for his work in the Transformers series and James for his work in many films including The Hunger Games series and his collaboration with Hans Zimmer in the first two films of The Dark Knight trilogy.
    John Williams, Nicholas Hooper, Patrick Doyle, and Alexandre Desplat all contributed to the Harry Potter series soundtrack, and Howard Shore composed The Lord of the Rings series soundtrack.
    Michael Giacchino's Married Life from Up is a beautiful song, and Bear McCreary did the music for The Walking Dead TV series.
    Jesper Kyd and Lorne Balfe composed the soundtracks for a number of games in the Assassin's Creed franchise with Kyd doing the soundtracks for the first three games, Balfe for the fifth and sixth, and a collaboration between the two for the fourth.
    The soundtracks contain songs that range from being calm and meditative, having the ability to transport one to another world, and even at times capable of evoking the same legendary motivational substance that lives within many Hans Zimmer tracks like Myotis, Agent of Chaos, and Why Do We Fall as is seen in Kyd and Balfe's Chase the Target.
    Words cannot describe Balfe's song The Ends of the Earth, and its criminal lack of mainstream exposure and recognition is no doubt due to its presence in a video game soundtrack deviating from Balfe's more traditional role of composing for movie soundtracks.
    As good as any of Zimmer's most renowned tracks, its ending is one of the best and most breathtaking pieces of music ever composed.
    `,
    `
    It is difficult to make assertions wholly lacking uncertainty and maybe absolutes do not exist, but if the task were to be undertaken then it could be asserted that music is the greatest tool that humans have at their disposal for the expression of the human condition.
    That is not at all to say that other tools such as the spoken or written word are inferior or lacking in some sense.
    It is impossible to read Dickens' A Tale of Two Cities where Carton describes the far, far better thing that he does than he has ever done and the far, far better rest that he goes to than he has ever known, and not feel something; to read McCarthy's Blood Meridian where Sproule tells the kid that he knows his kind and what is wrong with him is wrong all the way through him, and not feel a chill.
    There are times where words can suffice and can even suffice better than anything else.
    Everything has its place.
    But there are also times where they cannot.
    As French writer Victor Hugo once said, <i>Music expresses that which cannot be said and on which it is impossible to be silent.</i>
    Music is a conduit for the soul in these times - it has the ability to at times describe what cannot be described, to narrate what cannot be narrated, and to express what cannot be expressed in any other form.
    And although all genres of music can be equally powerful, the time does need to be taken without reservation to single out classical music, and if the author could be so daring then he will propound that all people love classical music even if they do not know it yet.
    Many traverse the circle never making this discovery despite it being in plain view either due to a lack of exposure entirely or never hearing the right songs.
    Classical music is not unidimensional and is as diverse if not more diverse than any other genre of music.
    Even amongst those who could not live without classical music, there are still plenty of songs that are not listened to nor particularly cared for.
    It is about finding the songs that move one's soul in a way unlike anything else can move it, and the songs that speak to one's heart in a way unlike anything else can speak to it.
    The songs that express what one feels in a way not capable by one's own volition, and the songs that assert what one knows to be true even if not having the ability to articulate it at all, or maybe not even knowing it were true until hearing it for the first time.
    The withholding of that discovery, the deprivation of that experience, is one of the greatest tragedies of all.
    But if one does achieve that unearthing, then it can be heard and felt all of that which Chopin, Liszt, Schubert, Beethoven, Mozart, Bach, Rachmaninoff, Satie, Debussy, Fauré, Elgar, Saint-Saëns, Massenet, Mussorgsky, and all the rest of them were trying to say.
    One simply needs to listen.
    `
];