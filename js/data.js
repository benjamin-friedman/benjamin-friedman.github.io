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
            { name: 'Why Do We Fall', fileName: 'why-do-we-fall', soundtrack: 'The Dark Knight Rises' },
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
            { name: 'Now We Are Free', fileName: 'now-we-are-free', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
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
            { name: 'N19 - Nocturne in E Minor Op. Posth. 72 No. 1, WN 23', fileName: 'n19-nocturne-in-e-minor-op-posth-72-no-1-wn-23', recordingMusician: 'SLDD Piano' },
            { name: 'N20 - Nocturne in C-Sharp Minor Op. Posth., WN 37 - Interpretation 1', fileName: 'n20-nocturne-in-c-sharp-minor-op-posth-wn-37-interpretation-1', recordingMusician: 'Rousseau' },
            { name: 'N20 - Nocturne in C-Sharp Minor Op. Posth., WN 37 - Interpretation 2', fileName: 'n20-nocturne-in-c-sharp-minor-op-posth-wn-37-interpretation-2', recordingMusician: 'Nelson Goerner' },
            { name: 'N21 - Nocturne in C Minor Op. Posth., WN 62', fileName: 'n21-nocturne-in-c-minor-op-posth-wn-62', recordingMusician: 'François Chaplin' },
            { name: 'Etude in C Minor Op. 10 No. 12 (Revolutionary Etude)', fileName: 'etude-in-c-minor-op-10-no-12-revolutionary-etude', recordingMusician: 'Rousseau' },
            { name: 'Etude in A Minor Op. 25 No. 11 (Winter Wind)', fileName: 'etude-in-a-minor-op-25-no-11-winter-wind', recordingMusician: 'Rousseau' },
            { name: 'Piano Sonata No. 2 in B-Flat Minor Op. 35 III. (Funeral March)', fileName: 'piano-sonata-no-2-in-b-flat-minor-op-35-iii-funeral-march', recordingMusician: 'Rousseau' },
            { name: 'Fantaisie-Impromptu in C-Sharp Minor Op. Posth. 66, WN 46', fileName: 'fantaisie-impromptu-in-c-sharp-minor-op-posth-66-wn-46', recordingMusician: 'Dmitry Shishkin' },
            { name: 'Ballade No. 1 in G Minor Op. 23 (La Ballade)', fileName: 'ballade-no-1-in-g-minor-op-23-la-ballade', recordingMusician: 'Seong-Jin Cho' },
            { name: 'N20 - Nocturne in C-Sharp Minor Op. Posth., WN 37 - Cello', fileName: 'n20-nocturne-in-c-sharp-minor-op-posth-wn-37-cello', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
        ]
    },
    {
        id: 'liszt',
        name: 'Liszt',
        songs: [
            { name: 'Liebestraum No. 3 in A-Flat Major S. 541 (Love Dream)', fileName: 'liebestraum-no-3-in-a-flat-major-s-541-love-dream', recordingMusician: 'Khatia Buniatishvili' },
            { name: 'Romance "O pourquoi donc" in E Minor S. 169', fileName: 'romance-o-pourquoi-donc-in-e-minor-s-169', recordingMusician: 'Genny Basso' },
            { name: 'Consolation No. 3 in D-Flat Major S. 172', fileName: 'consolation-no-3-in-d-flat-major-s-172', recordingMusician: 'Rousseau' },
            { name: 'Serenade D. 889 - Piano', fileName: 'serenade-d-889-piano', recordingMusician: 'Rousseau', composer: 'Schubert' },
            { name: 'Etude No. 3 in D-Flat Major S. 144 (Un Sospiro)', fileName: 'etude-no-3-in-d-flat-major-s-144-un-sospiro', recordingMusician: 'Rousseau' },
            { name: 'Etude No. 3 in G-Sharp Minor S. 141 (La Campanella)', fileName: 'etude-no-3-in-g-sharp-minor-s-141-la-campanella', recordingMusician: 'Rousseau', composer: 'Paganini' }
        ]
    },
    {
        id: 'schubert',
        name: 'Schubert',
        songs: [
            { name: 'Impromptu in G-Flat Major Op. 90 No. 3, D. 899', fileName: 'impromptu-in-g-flat-major-op-90-no-3-d-899', recordingMusician: 'Olga Jegunova' },
            { name: 'Piano Trio No. 2 in E-Flat Major Op. 100, D. 929 II. - Interpretation 1', fileName: 'piano-trio-no-2-in-e-flat-major-op-100-d-929-interpretation-1', recordingMusician: 'Howard Shelley (Piano), Raphael Wallfisch (Cello), Ralph Holmes (Violin)' },
            { name: 'Piano Trio No. 2 in E-Flat Major Op. 100, D. 929 II. - Interpretation 2', fileName: 'piano-trio-no-2-in-e-flat-major-op-100-d-929-interpretation-2', recordingMusician: 'Anthony Goldstone (Piano), Moray Welsh (Cello), Ralph Holmes (Violin)' },
            { name: 'Serenade D. 889', fileName: 'serenade-d-889', recordingMusician: 'Unknown' },
            { name: 'Serenade D. 889 - Piano and Cello', fileName: 'serenade-d-889-piano-and-cello', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' }
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
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Lacrimosa - Cello', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-lacrimosa-cello', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
        ]
    },
    {
        id: 'bach',
        name: 'Bach',
        songs: [
            { name: 'Orchestral Suite No. 3 in D Major BWV 1068 II. (Air on the G String)', fileName: 'orchestral-suite-no-3-in-d-major-bwv-1068-ii-air-on-the-g-string', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra', arrangement: 'August Wilhelmj' },
            { name: 'Orchestral Suite No. 3 in D Major BWV 1068 II. (Air on the G String) - Piano', fileName: 'orchestral-suite-no-3-in-d-major-bwv-1068-ii-air-on-the-g-string-piano', recordingMusician: 'Khatia Buniatishvili', arrangement: 'August Wilhelmj' },
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
            { name: 'Piano Concerto No. 2 in C Minor Op. 18 II. - Cello', fileName: 'piano-concerto-no-2-in-c-minor-op-18-ii-cello', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
            { name: 'Moment Musicaux in E Minor Op. 16 No. 4', fileName: 'moment-musicaux-in-e-minor-op-16-no-4', recordingMusician: 'Nikolai Lugansky' },
            { name: 'Morceaux de Fantaisie Op. 3 No. 1 Elégie in E-Flat Minor', fileName: 'morceaux-de-fantaisie-op-3-no-1-elegie-in-e-flat-minor', recordingMusician: 'Luke Faulkner' },
            { name: 'Morceaux de Fantaisie Op. 3 No. 1 Elégie in E-Flat Minor - Cello', fileName: 'morceaux-de-fantaisie-op-3-no-1-elegie-in-e-flat-minor-cello', recordingMusician: 'Sheku Kanneh-Mason' },
            { name: 'Morceaux de Fantaisie Op. 3 No. 2 Prelude in C-Sharp Minor', fileName: 'morceaux-de-fantaisie-op-3-no-2-prelude-in-c-sharp-minor', recordingMusician: 'Nikolai Lugansky' },
            { name: '14 Romances Op. 34 No. 14 (Vocalise) - Cello', fileName: '14-romances-op-34-no-14-vocalise-cello', recordingMusician: 'Han-Na Chang' },
            { name: '14 Romances Op. 34 No. 14 (Vocalise) - Voice', fileName: '14-romances-op-34-no-14-vocalise-voice', recordingMusician: 'Alison Lau' },
            { name: 'Cello Sonata in G Minor Op. 19 III.', fileName: 'cello-sonata-in-g-minor-op-19-iii', recordingMusician: 'Marie-Ève Scarfone (Piano), Stéphane Tétreault (Cello)' },
            { name: 'Isle of the Dead Op. 29', fileName: 'isle-of-the-dead-op-29', recordingMusician: 'Royal Stockholm Philharmonic Orchestra' }
        ]
    },
    {
        id: 'satie',
        name: 'Satie',
        songs: [
            { name: 'Gymnopédie No. 1', fileName: 'gymnopedie-no-1', recordingMusician: 'Rousseau' },
            { name: 'Gnossienne No. 1 - Interpretation 1', fileName: 'gnossienne-no-1-interpretation-1', recordingMusician: 'Anne Queffelec' },
            { name: 'Gnossienne No. 1 - Interpretation 2', fileName: 'gnossienne-no-1-interpretation-2', recordingMusician: 'Alice Sara Ott' },
            { name: 'Gnossienne No. 2', fileName: 'gnossienne-no-2', recordingMusician: 'Reinbert de Leeuw' },
            { name: 'Gnossienne No. 3', fileName: 'gnossienne-no-3', recordingMusician: 'Anne Queffelec' },
            { name: 'Gnossienne No. 4', fileName: 'gnossienne-no-4', recordingMusician: 'Anne Queffelec' },
            { name: 'Gnossienne No. 5', fileName: 'gnossienne-no-5', recordingMusician: 'Anne Queffelec' }
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
            { name: 'Cello Concerto in E Minor Op. 85 I.', fileName: 'cello-concerto-in-e-minor-op-85-i', recordingMusician: 'Sophie Kauer, London Symphony Orchestra' }
        ]
    },
    {
        id: 'saint-saens',
        name: 'Saint-Saëns',
        songs: [
            { name: 'The Carnival of the Animals XIII. (The Swan) - Cello and Harp', fileName: 'the-carnival-of-the-animals-xiii-the-swan-cello-and-harp', recordingMusician: 'Stjepan Hauser, Zagreb Philharmonic Orchestra' },
            { name: 'The Carnival of the Animals XIII. (The Swan) - Cello and Piano', fileName: 'the-carnival-of-the-animals-xiii-the-swan-cello-and-piano', recordingMusician: 'Kathryn Stott (Piano), Yo-Yo Ma (Cello)' },
            { name: 'Cello Concerto No. 1 in A Minor Op. 33 I. and III.', fileName: 'cello-concerto-no-1-in-a-minor-op-33-i-and-iii', recordingMusician: 'Andrew Shulman' }
        ]
    },
    {
        id: 'giazotto',
        name: 'Giazotto',
        songs: [
            { name: 'Adagio in G Minor', fileName: 'adagio-in-g-minor', recordingMusician: 'Stjepan Hauser, Zagreb Philharmonic Orchestra' }
        ]
    },
    {
        id: 'barber',
        name: 'Barber',
        songs: [
            { name: 'Adagio for Strings', fileName: 'adagio-for-strings', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
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
            { name: 'Méditation from Thaïs', fileName: 'meditation-from-thais', recordingMusician: 'Anne-Sophie Bertrand (Harp), Renaud Capuçon (Violin)' },
            { name: 'Méditation from Thaïs - Cello', fileName: 'meditation-from-thais-cello', recordingMusician: 'Stjepan Hauser, Zagreb Philharmonic Orchestra' }
        ]
    },
    {
        id: 'mussorgsky',
        name: 'Mussorgsky',
        songs: [
            { name: 'Pictures at an Exhibition No. 2 Il Vecchio Castello', fileName: 'pictures-at-an-exhibition-no-2-il-vecchio-castello', recordingMusician: 'Metamorphose String Orchestra and Pavel Lyubomudrov' },
            { name: 'Pictures at an Exhibition No. 2 Il Vecchio Castello - Piano', fileName: 'pictures-at-an-exhibition-no-2-il-vecchio-castello-piano', recordingMusician: 'Khatia Buniatishvili' },
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
            { name: 'Peer Gynt Suite No. 1 Op. 46 IV. (In the Hall of the Mountain King)', fileName: 'peer-gynt-suite-no-1-op-46-iv-in-the-hall-of-the-mountain-king', recordingMusician: 'Kassia' }
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
            { name: "Una furtiva lagrima from L'elisir d'amore - Cello", fileName: 'una-furtiva-lagrima-from-l-elisir-d-amore-cello', recordingMusician: 'Camille Thomas, Brussels Philharmonic Orchestra' }
        ]
    },
    {
        id: 'mascagni',
        name: 'Mascagni',
        songs: [
            { name: 'Intermezzo sinfonico from Cavalleria rusticana - Cello', fileName: 'intermezzo-sinfonico-from-cavalleria-rusticana-cello', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' }
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
            { name: "Rue's Farewell", fileName: 'rues-farewell', soundtrack: 'The Hunger Games' },
            { name: 'There Are Worse Games to Play-Deep in the Meadow-The Hunger Games Suite', fileName: 'there-are-worse-games-to-play-deep-in-the-meadow-the-hunger-games-suite', soundtrack: 'The Hunger Games: Mockingjay Part 2' },
            { name: "Snow's Execution", fileName: 'snows-execution', soundtrack: 'The Hunger Games: Mockingjay Part 2' }
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
            { name: 'Possession', fileName: 'possession', soundtrack: 'Harry Potter and the Order of the Phoenix' },
            { name: 'When Ginny Kissed Harry', fileName: 'when-ginny-kissed-harry', soundtrack: 'Harry Potter and the Half-Blood Prince' },
            { name: "Dumbledore's Farewell", fileName: 'dumbledores-farewell', soundtrack: 'Harry Potter and the Half-Blood Prince' }
        ]
    },
    {
        id: 'alexandre-desplat',
        name: 'Alexandre Desplat',
        songs: [
            { name: 'Severus and Lily', fileName: 'severus-and-lily', soundtrack: 'Harry Potter and the Deathly Hallows Part 2' }
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
            { name: 'Reconciliation', fileName: 'reconciliation', soundtrack: 'The Walking Dead' }
        ]
    },
    {
        id: 'jesper-kyd',
        name: 'Jesper Kyd',
        songs: [
            { name: "Ezio's Family", fileName: 'ezios-family', soundtrack: "Assassin's Creed II" },
            { name: 'Echoes of the Roman Ruins', fileName: 'echoes-of-the-roman-ruins', soundtrack: "Assassin's Creed: Brotherhood" },
            { name: "Assassin's Creed Theme", fileName: 'assassins-creed-theme', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'You Have Earned Your Rest', fileName: 'you-have-earned-your-rest', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
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
            { name: 'Welcome to Boston', fileName: 'welcome-to-boston', soundtrack: "Assassin's Creed III" },
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
            { name: 'For Her', fileName: 'for-her' }
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
            { name: 'Thunderstruck', fileName: 'thunderstruck' }
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
            { name: 'Have You Ever Seen the Rain', fileName: 'have-you-ever-seen-the-rain' }
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
            { name: 'Beautiful Day', fileName: 'beautiful-day' }
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
            { name: 'September', fileName: 'september' }
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
            { name: 'Till I Collapse', fileName: 'till-i-collapse' },
            { name: "Won't Back Down", fileName: 'wont-back-down' },
            { name: 'Like Toy Soldiers', fileName: 'like-toy-soldiers' },
            { name: 'Stan', fileName: 'stan' },
            { name: 'Fast Lane', fileName: 'fast-lane' },
            { name: 'Rap God', fileName: 'rap-god' },
            { name: 'Space Bound', fileName: 'space-bound' }
        ]
    },
    {
        id: 'dr-dre',
        name: 'Dr. Dre',
        songs: [
            { name: `Nuthin' but a "G" Thang`, fileName: 'nuthin-but-a-g-thang' },
            { name: 'Big Egos', fileName: 'big-egos' },
            { name: "What's the Difference", fileName: 'whats-the-difference' },
            { name: 'Light Speed', fileName: 'light-speed' },
            { name: 'The Watcher', fileName: 'the-watcher' },
            { name: 'Forgot About Dre', fileName: 'forgot-about-dre' },
            { name: 'The Message', fileName: 'the-message' },
            { name: 'Still D.R.E.', fileName: 'still-dre' }
        ]
    },
    {
        id: 'kendrick-lamar',
        name: 'Kendrick Lamar',
        songs: [
            { name: 'Hiiipower', fileName: 'hiiipower' },
            { name: 'Black Boy Fly', fileName: 'black-boy-fly' },
            { name: 'Ignorance Is Bliss', fileName: 'ignorance-is-bliss' },
            { name: 'Money Trees', fileName: 'money-trees' },
            { name: 'The Recipe', fileName: 'the-recipe' },
            { name: 'm.A.A.d city', fileName: 'maad-city' }
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
            { name: 'Blood on the Leaves', fileName: 'blood-on-the-leaves' },
            { name: 'Flashing Lights', fileName: 'flashing-lights' }
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
            { name: 'Superstar', fileName: 'superstar' }
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
            { name: "Day 'n' Nite", fileName: 'day-n-nite' }
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
        id: 'odesza',
        name: 'ODESZA',
        songs: [
            { name: 'Sun Models', fileName: 'sun-models' }
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
        id: 'calvin-harris',
        name: 'Calvin Harris',
        songs: [
            { name: 'Blame', fileName: 'blame' }
        ]
    },
    {
        id: 'sound-remedy',
        name: 'Sound Remedy',
        songs: [
            { name: 'Medicine (Sound Remedy Remix)', fileName: 'medicine-sound-remedy-remix', composer: 'Daughter' }
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
        id: 'moby',
        name: 'Moby',
        songs: [
            { name: 'Wait for Me', fileName: 'wait-for-me', contributors: 'Mindy Jones' }
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
            { name: 'Amazing Grace - Bagpipes', fileName: 'amazing-grace-bagpipes', recordingMusician: 'Bagpipe Master' }
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
            author: 'Chopin',
            quote: 'Bach is an astronomer discovering the most marvellous stars. Beethoven challenges the universe. I only try to express the soul and heart of man.'
        },
        {
            author: 'Debussy',
            quote: 'Chopin is the greatest of them all, for with the piano alone he discovered everything.'
        },
        { 
            author: 'Jack London',
            quote: 'The function of man is to live, not to exist. I shall not waste my days trying to prolong them. I shall use my time.'
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
        id: 'the-final-speech',
        title: 'The Final Speech',
        author: 'The Great Dictator',
        writing: [
            [
                "Soldiers! don't give yourselves to brutes -",
                "men who despise you - enslave you - who regiment your lives -",
                "tell you what to do - what to think and what to feel!",
                "Who drill you - diet you - treat you like cattle, use you as cannon fodder.",
                "Don't give yourselves to these unnatural men -",
                "machine men with machine minds and machine hearts!",
                "You are not machines! You are not cattle! You are men!",
                "You have the love of humanity in your hearts!",
                "You don't hate! Only the unloved hate - the unloved and the unnatural!",
                "Soldiers! Don't fight for slavery! Fight for liberty!",
                "In the 17th Chapter of St Luke it is written: “the Kingdom of God is within man” - not one man nor a group of men, but in all men!",
                "In you! You, the people have the power - the power to create machines. The power to create happiness!",
                "You, the people, have the power to make this life free and beautiful, to make this life a wonderful adventure.",
                "Then - in the name of democracy - let us use that power - let us all unite.",
                "Let us fight for a new world - a decent world that will give men a chance to work -",
                "that will give youth a future and old age a security.",
                "By the promise of these things, brutes have risen to power.",
                "But they lie! They do not fulfil that promise. They never will!",
                "Dictators free themselves but they enslave the people!",
                "Now let us fight to fulfil that promise! Let us fight to free the world -",
                "to do away with national barriers - to do away with greed, with hate and intolerance.",
                "Let us fight for a world of reason, a world where science and progress will lead to all men's happiness.",
                "Soldiers! in the name of democracy, let us all unite!"
            ]
        ]
    }
]