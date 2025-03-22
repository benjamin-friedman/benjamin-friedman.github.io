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
            { name: 'Marry Me', fileName: 'marry-me', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: "At Wit's End", fileName: 'at-wits-end', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'Parlay', fileName: 'parlay', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'One Day', fileName: 'one-day', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'Time', fileName: 'time', soundtrack: 'Inception' },
            { name: 'Projections', fileName: 'projections', soundtrack: 'Inception' },
            { name: 'First Step', fileName: 'first-step', soundtrack: 'Interstellar' },
            { name: 'No Time for Caution', fileName: 'no-time-for-caution', soundtrack: 'Interstellar' },
            { name: 'Mountains', fileName: 'mountains', soundtrack: 'Interstellar' },
            { name: 'Goodbye My Son', fileName: 'goodbye-my-son', soundtrack: 'Man of Steel' },
            { name: 'Is She with You?', fileName: 'is-she-with-you', specialCharactersName: 'Is She with You?', soundtrack: 'Batman v Superman' },
            { name: 'Not in Blood, But in Bond', fileName: 'not-in-blood-but-in-bond', soundtrack: 'Sherlock Holmes' },
            { name: 'Ah, Putrefaction', fileName: 'ah-putrefaction', soundtrack: 'Sherlock Holmes' },
            { name: 'Sherlock Holmes Fantasy', fileName: 'sherlock-holmes-fantasy', soundtrack: 'Sherlock Holmes', contributors: 'Aleksey Igudesman' },
            { name: 'A Way of Life', fileName: 'a-way-of-life', soundtrack: 'The Last Samurai' },
            { name: 'A Small Measure of Peace', fileName: 'a-small-measure-of-peace', soundtrack: 'The Last Samurai' },
            { name: 'King of Pride Rock', fileName: 'king-of-pride-rock', soundtrack: 'The Lion King' },
            { name: 'This Land', fileName: 'this-land', soundtrack: 'The Lion King' },
            { name: 'To Die For', fileName: 'to-die-for', soundtrack: 'The Lion King' },
            { name: 'Under the Stars', fileName: 'under-the-stars', soundtrack: 'The Lion King' },
            { name: 'Elysium', fileName: 'elysium', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Honor Him', fileName: 'honor-him', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Now We Are Free', fileName: 'now-we-are-free', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Now We Are Free - Cello', fileName: 'now-we-are-free-cello', soundtrack: 'Gladiator', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' }
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
            { name: 'Etude in C Minor Op. 10 No. 12 (Revolutionary Etude)', fileName: 'etude-in-c-minor-op-10-no-12-revolutionary-etude', recordingMusician: 'Rousseau' },
            { name: 'Etude in A Minor Op. 25 No. 11 (Winter Wind)', fileName: 'etude-in-a-minor-op-25-no-11-winter-wind', recordingMusician: 'Rousseau' },
            { name: 'Piano Sonata No. 2 in B-Flat Minor Op. 35 III. (Funeral March)', fileName: 'piano-sonata-no-2-in-b-flat-minor-op-35-iii-funeral-march', recordingMusician: 'Rousseau' },
            { name: 'Fantaisie-Impromptu in C-Sharp Minor Op. Posth. 66', fileName: 'fantaisie-impromptu-in-c-sharp-minor-op-posth-66', recordingMusician: 'Dmitry Shishkin' },
            { name: 'Ballade No. 1 in G Minor Op. 23', fileName: 'ballade-no-1-in-g-minor-op-23', recordingMusician: 'Seong-Jin Cho' }
        ]
    },
    {
        id: 'liszt',
        name: 'Liszt',
        songs: [
            { name: 'Liebestraum No. 3 in A-Flat Major S. 541/3 (Love Dream)', fileName: 'liebestraum-no-3-in-a-flat-major-s-541-3-love-dream', recordingMusician: 'Rousseau' },
            { name: 'Romance in E Minor S. 169', fileName: 'romance-in-e-minor-s-169', recordingMusician: 'Genny Basso' },
            { name: 'Consolation No. 3 in D-Flat Major S. 172/3', fileName: 'consolation-no-3-in-d-flat-major-s-172-3', recordingMusician: 'Rousseau' },
            { name: 'Ständchen S. 559a (Serenade)', fileName: 'standchen-s-559a-serenade', recordingMusician: 'Rousseau', composer: 'Schubert' },
            { name: 'Etude No. 3 in D-Flat Major S. 144/3 (Un Sospiro, or A Sigh)', fileName: 'etude-no-3-in-d-flat-major-s-144-3-un-sospiro-or-a-sigh', recordingMusician: 'Rousseau' },
            { name: 'Etude No. 3 in G-Sharp Minor S. 141/3 (La Campanella, or The Little Bell)', fileName: 'etude-no-3-in-g-sharp-minor-s-141-3-la-campanella-or-the-little-bell', recordingMusician: 'Rousseau', composer: 'Paganini' },
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
            { name: 'Piano Trio No. 2 in E-Flat Major Op. 100, D. 929 II.', fileName: 'piano-trio-no-2-in-e-flat-major-op-100-d-929', recordingMusician: 'Howard Shelley (Piano), Raphael Wallfisch (Cello), Ralph Holmes (Violin)' },
            { name: 'Ständchen D. 889 (Serenade)', fileName: 'standchen-d-889-serenade', recordingMusician: 'Unknown' },
            { name: 'String Quartet No. 14 in D Minor D. 810 II. (Death and the Maiden)', fileName: 'string-quartet-no-14-in-d-minor-d-810-ii-death-and-the-maiden', recordingMusician: 'Emerson String Quartet' }
        ]
    },
    {
        id: 'beethoven',
        name: 'Beethoven',
        songs: [
            { name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 I. (Moonlight Sonata)', fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-i-moonlight-sonata', recordingMusician: 'Unknown' },
            { name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 II. (Moonlight Sonata)', fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-ii-moonlight-sonata', recordingMusician: 'Rousseau' },
            { name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 III. (Moonlight Sonata)', fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-iii-moonlight-sonata', recordingMusician: 'Rousseau' },
            { name: 'Piano Sonata No. 8 in C Minor Op. 13 I. (Sonata Pathétique)', fileName: 'piano-sonata-no-8-in-c-minor-op-13-i-sonata-pathetique', recordingMusician: 'Kassia' },
            { name: 'Piano Sonata No. 8 in C Minor Op. 13 II. (Sonata Pathétique)', fileName: 'piano-sonata-no-8-in-c-minor-op-13-ii-sonata-pathetique', recordingMusician: 'Kassia' },
            { name: 'Piano Sonata No. 8 in C Minor Op. 13 III. (Sonata Pathétique)', fileName: 'piano-sonata-no-8-in-c-minor-op-13-iii-sonata-pathetique', recordingMusician: 'Kassia' },
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
            { name: 'Serenade No. 13 for Strings in G Major K. 525 I. (Eine kleine Nachtmusik, or A Little Night Music)', fileName: 'serenade-no-13-for-strings-in-g-major-k-525-i-eine-kleine-nachtmusik-or-a-little-night-music', recordingMusician: 'Academy of St. Martin in the Fields Orchestra' },
            { name: 'The Marriage of Figaro K. 492 Overture', fileName: 'the-marriage-of-figaro-k-492-overture', recordingMusician: 'Berlin Philharmonic Orchestra' },
            { name: 'Requiem in D Minor K. 626 I. Introitus - Requiem aeternam (Entrance - Eternal Rest)', fileName: 'requiem-in-d-minor-k-626-i-introitus-requiem-aeternam-entrance-eternal-rest', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 II. Kyrie (Lord)', fileName: 'requiem-in-d-minor-k-626-ii-kyrie-lord', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Dies irae (Sequence - Day of Wrath)', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-dies-irae-sequence-day-of-wrath', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Tuba mirum (Sequence - Wondrous Trumpet)', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-tuba-mirum-sequence-wondrous-trumpet', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Rex tremendae (Sequence - King of Tremendous Majesty)', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-rex-tremendae-sequence-king-of-tremendous-majesty', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Recordare (Sequence - Remember)', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-recordare-sequence-remember', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Confutatis (Sequence - Confounded)', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-confutatis-sequence-confounded', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 III. Sequentia - Lacrimosa (Sequence - Tearful)', fileName: 'requiem-in-d-minor-k-626-iii-sequentia-lacrimosa-sequence-tearful', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 IV. Offertorium - Domine Jesu (Offering - Lord Jesus)', fileName: 'requiem-in-d-minor-k-626-iv-offertorium-domine-jesu-offering-lord-jesus', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 IV. Offertorium - Hostias (Offering - Sacrifices)', fileName: 'requiem-in-d-minor-k-626-iv-offertorium-hostias-offering-sacrifices', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 V. Sanctus (Holy)', fileName: 'requiem-in-d-minor-k-626-v-sanctus-holy', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 VI. Benedictus (Blessed)', fileName: 'requiem-in-d-minor-k-626-vi-benedictus-blessed', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 VII. Agnus dei (Lamb of God)', fileName: 'requiem-in-d-minor-k-626-vii-agnus-dei-lamb-of-god', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 VIII. Communio - Lux aeterna (Communion - Eternal Light)', fileName: 'requiem-in-d-minor-k-626-viii-communio-lux-aeterna-communion-eternal-light', recordingMusician: 'Academy of St. Martin in the Fields Choir' },
            { name: 'Requiem in D Minor K. 626 VIII. Communio - Cum sanctus tuis (Communion - With Your Saint)', fileName: 'requiem-in-d-minor-k-626-viii-communio-cum-sanctus-tuis-communion-with-your-saint', recordingMusician: "Choir of King's College, Cambridge" }
        ]
    },
    {
        id: 'bach',
        name: 'Bach',
        songs: [
            { name: 'The Well-Tempered Clavier Book 1: Prelude and Fugue No. 1 in C Major BWV 846 I. Prelude', fileName: 'the-well-tempered-clavier-book-1-prelude-and-fugue-no-1-in-c-major-bwv-846-i-prelude', recordingMusician: 'Sviatoslav Richter' },
            { name: 'The Well-Tempered Clavier Book 1: Prelude and Fugue No. 1 in C Major BWV 846 II. Fugue', fileName: 'the-well-tempered-clavier-book-1-prelude-and-fugue-no-1-in-c-major-bwv-846-ii-fugue', recordingMusician: 'Sviatoslav Richter' },
            { name: 'Orchestral Suite No. 3 in D Major BWV 1068 II. (Air on the G String, arr. August Wilhelmj)', fileName: 'orchestral-suite-no-3-in-d-major-bwv-1068-ii-air-on-the-g-string-arr-august-wilhelmj', recordingMusician: 'Emiri Miyamoto (Violin), Takashi Sato (Piano)', arrangement: 'August Wilhelmj' },
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
            { name: 'Piano Concerto No. 2 in C Minor Op. 18 II. - Cello', fileName: 'piano-concerto-no-2-in-c-minor-op-18-ii-cello', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra' },
            { name: 'Piano Concerto No. 3 in D Minor Op. 30 I.', fileName: 'piano-concerto-no-3-in-d-minor-op-30-i', recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie' },
            { name: 'Piano Concerto No. 3 in D Minor Op. 30 II.', fileName: 'piano-concerto-no-3-in-d-minor-op-30-ii', recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie' },
            { name: 'Piano Concerto No. 3 in D Minor Op. 30 III.', fileName: 'piano-concerto-no-3-in-d-minor-op-30-iii', recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie' },
            { name: 'Moment Musicaux in E Minor Op. 16 No. 4 (Musical Moment)', fileName: 'moment-musicaux-in-e-minor-op-16-no-4-musical-moment', recordingMusician: 'Nikolai Lugansky' },
            { name: 'Morceaux de Fantaisie Op. 3 No. 1 Elegie in E-Flat Minor (Fantasy Pieces, Elegy)', fileName: 'morceaux-de-fantaisie-op-3-no-1-elegie-in-e-flat-minor-fantasy-pieces-elegy', recordingMusician: 'Luke Faulkner' },
            { name: 'Morceaux de Fantaisie Op. 3 No. 1 Elegie in E-Flat Minor (Fantasy Pieces, Elegy) - Cello', fileName: 'morceaux-de-fantaisie-op-3-no-1-elegie-in-e-flat-minor-fantasy-pieces-elegy-cello', recordingMusician: 'Isata Kanneh-Mason (Piano), Sheku Kanneh-Mason (Cello)' },
            { name: 'Morceaux de Fantaisie Op. 3 No. 2 Prelude in C-Sharp Minor (Fantasy Pieces)', fileName: 'morceaux-de-fantaisie-op-3-no-2-prelude-in-c-sharp-minor-fantasy-pieces', recordingMusician: 'Nikolai Lugansky' },
            { name: '14 Romances Op. 34 No. 14 (Vocalise, or Vocalize)', fileName: '14-romances-op-34-no-14-vocalise-or-vocalize', recordingMusician: 'Han-Na Chang, Philharmonia Orchestra' },
            { name: 'Cello Sonata in G Minor Op. 19 III.', fileName: 'cello-sonata-in-g-minor-op-19-iii', recordingMusician: 'Marie-Ève Scarfone (Piano), Stéphane Tétreault (Cello)' },
            { name: 'Isle of the Dead Op. 29', fileName: 'isle-of-the-dead-op-29', recordingMusician: 'Royal Stockholm Philharmonic Orchestra' }
        ]
    },
        {
        id: 'debussy',
        name: 'Debussy',
        songs: [
            { name: 'Rêverie', fileName: 'reverie', recordingMusician: 'Rousseau' },
            { name: 'Suite bergamasque L. 75 III. (Clair de lune, or Moonlight)', fileName: 'suite-bergamasque-l-75-iii-clair-de-lune-or-moonlight', recordingMusician: 'Rousseau' },
            { name: 'Arabesque No. 1 L. 66', fileName: 'arabesque-no-1-l-66', recordingMusician: 'Rousseau' },
            { name: 'Preludes Book 1 L. 117 VIII. (La fille aux cheveux de lin, or The Girl with the Flaxen Hair)', fileName: 'preludes-book-1-l-117-viii-la-fille-aux-cheveux-de-lin-or-the-girl-with-the-flaxen-hair', recordingMusician: 'Jacques Rouvier' }
        ]
    },
    {
        id: 'satie',
        name: 'Satie',
        songs: [
            { name: 'Gymnopédie No. 1', fileName: 'gymnopedie-no-1', recordingMusician: 'Unknown' },
            { name: 'Gymnopédie No. 2', fileName: 'gymnopedie-no-2', recordingMusician: 'Unknown' },
            { name: 'Gymnopédie No. 3', fileName: 'gymnopedie-no-3', recordingMusician: 'Unknown' },
            { name: 'Gnossienne No. 1', fileName: 'gnossienne-no-1', recordingMusician: 'Anne Queffélec' },
            { name: 'Gnossienne No. 2', fileName: 'gnossienne-no-2', recordingMusician: 'Reinbert de Leeuw' },
            { name: 'Gnossienne No. 3', fileName: 'gnossienne-no-3', recordingMusician: 'Anne Queffélec' },
            { name: 'Gnossienne No. 4', fileName: 'gnossienne-no-4', recordingMusician: 'Anne Queffélec' },
            { name: 'Gnossienne No. 5', fileName: 'gnossienne-no-5', recordingMusician: 'Anne Queffélec' },
            { name: 'Gnossienne No. 6', fileName: 'gnossienne-no-6', recordingMusician: 'Anne Queffélec' },
            { name: 'Gnossienne No. 7', fileName: 'gnossienne-no-7', recordingMusician: 'Fazil Say' }
        ]
    },
    {
        id: 'faure',
        name: 'Fauré',
        songs: [
            { name: 'Élégie Op. 24 (Elegy)', fileName: 'elegie-op-24-elegy', recordingMusician: 'Harriet Krijgh (Cello), Kamilla Isanbaeva (Piano)' }
        ]
    },
    {
        id: 'elgar',
        name: 'Elgar',
        songs: [
            { name: 'Cello Concerto in E Minor Op. 85 I.', fileName: 'cello-concerto-in-e-minor-op-85-i', recordingMusician: 'Sol Gabetta (Cello), Danish National Symphony Orchestra' },
            { name: 'Cello Concerto in E Minor Op. 85 II.', fileName: 'cello-concerto-in-e-minor-op-85-ii', recordingMusician: 'Sol Gabetta (Cello), Danish National Symphony Orchestra' },
            { name: 'Cello Concerto in E Minor Op. 85 III.', fileName: 'cello-concerto-in-e-minor-op-85-iii', recordingMusician: 'Sol Gabetta (Cello), Danish National Symphony Orchestra' },
            { name: 'Cello Concerto in E Minor Op. 85 IV.', fileName: 'cello-concerto-in-e-minor-op-85-iv', recordingMusician: 'Sol Gabetta (Cello), Danish National Symphony Orchestra' }
        ]
    },
    {
        id: 'saint-saens',
        name: 'Saint-Saëns',
        songs: [
            { name: 'The Carnival of the Animals XIII. (Le cygne, or The Swan)', fileName: 'the-carnival-of-the-animals-xiii-le-cygne-or-the-swan', recordingMusician: 'Stjepan Hauser, Zagreb Philharmonic Orchestra' },
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
            { name: 'Agnus Dei (Lamb of God)', fileName: 'agnus-dei-lamb-of-god', recordingMusician: 'Dale Warland Singers' }
        ]
    },
    {
        id: 'shostakovich',
        name: 'Shostakovich',
        songs: [
            { name: 'Suite for Variety Orchestra No. 1 VII. Waltz No. 2', fileName: 'suite-for-varity-orchestra-no-1-waltz-no-2', recordingMusician: 'Andre Rieu and the Johann Strauss Orchestra' }
        ]
    },
    {
        id: 'massenet',
        name: 'Massenet',
        songs: [
            { name: 'Thaïs: Méditation (Meditation from the opera Thaïs)', fileName: 'thais-meditation-meditation-from-the-opera-thais', recordingMusician: 'Anne-Sophie Bertrand (Harp), Renaud Capuçon (Violin)' }
        ]
    },
    {
        id: 'mussorgsky',
        name: 'Mussorgsky',
        songs: [
            { name: 'Pictures at an Exhibition No. 2 Il Vecchio Castello (The Old Castle)', fileName: 'pictures-at-an-exhibition-no-2-il-vecchio-castello-the-old-castle', recordingMusician: 'Khatia Buniatishvili' },
            { name: 'Pictures at an Exhibition No. 2 Il Vecchio Castello (The Old Castle) - Orchestra', fileName: 'pictures-at-an-exhibition-no-2-il-vecchio-castello-the-old-castle-orchestra', recordingMusician: 'Metamorphose String Orchestra and Pavel Lyubomudrov', arrangement: 'Ravel' },
            { name: 'Night on Bald Mountain', fileName: 'night-on-bald-mountain', recordingMusician: 'New York Philharmonic Orchestra', arrangement: 'Rimsky-Korsakov' }
        ]
    },
    {
        id: 'tchaikovsky',
        name: 'Tchaikovsky',
        songs: [
            { name: 'Swan Lake Op. 20 I. Enchanted Lake', fileName: 'swan-lake-op-20-i-enchanted-lake', recordingMusician: 'Royal Philharmonic Orchestra' },
            { name: 'Swan Lake Op. 20 XXI. Spanish Dance', fileName: 'swan-lake-op-20-xxi-spanish-dance', recordingMusician: 'Royal Philharmonic Orchestra' },
            { name: 'The Nutcracker Op. 71 Pas de Deux (Step of Two)', fileName: 'the-nutcracker-op-71-pas-de-deux-step-of-two', recordingMusician: 'London Symphony Orchestra' },
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
            { name: 'Messa da Requiem II. Dies irae - Dies irae (Day of Wrath - Day of Wrath)', fileName: 'messa-da-requiem-ii-dies-irae-dies-irae-day-of-wrath-day-of-wrath', recordingMusician: 'Frankfurt Radio Symphony Orchestra' }
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
            { name: 'Suite No. 1 in B-Flat Major HWV 434 IV. (arr. Wilhelm Kempff)', fileName: 'suite-no-1-in-b-flat-major-hwv-434-iv-arr-wilhelm-kempff', recordingMusician: 'Khatia Buniatishvili', arrangement: 'Wilhelm Kempff' },
        ]
    },
    {
        id: 'schumann',
        name: 'Schumann',
        songs: [
            { name: 'Kinderszenen Op. 15 No. 7 (Träumerei) (Scenes from Childhood, Dreaming)', fileName: 'kinderszenen-op-15-no-7-traumerei-scenes-from-childhood-dreaming', recordingMusician: 'Kassia' },
        ]
    },
    {
        id: 'respighi',
        name: 'Respighi',
        songs: [
            { name: 'Six Pieces for the Piano P 044 No. 3 Notturno in G-Flat Major', fileName: 'six-pieces-for-the-piano-p-044-no-3-notturno-in-g-flat-major', recordingMusician: 'Gabriele Leporatti' },
        ]
    },
    {
        id: 'mendelssohn',
        name: 'Mendelssohn',
        songs: [
            { name: 'Songs Without Words Book 2: Op. 30 No. 6 in F-Sharp Minor (Venetian Boat Song No. 2)', fileName: 'songs-without-words-book-2-op-30-no-6-in-f-sharp-minor-venetian-boat-song-no-2', recordingMusician: 'Vadim Chaimovich' },
        ]
    },
    {
        id: 'bruckner',
        name: 'Bruckner',
        songs: [
            { name: 'Stille Betrachtung an einem Herbstabend in F-Sharp Minor WAB 123 (Quiet Meditation on an Autumn Evening)', fileName: 'stille-betrachtung-an-einem-herbstabend-in-f-sharp-minor-wab-123-quiet-meditation-on-an-autumn-evening', recordingMusician: 'Vadim Chaimovich' },
        ]
    },
    {
        id: 'gluck',
        name: 'Gluck',
        songs: [
            { name: 'Orfeo ed Euridice Wq. 30: Melody (Orpheus and Eurydice) (arr. Alexander Siloti)', fileName: 'orfeo-ed-euridice-wq-30-melody-orpheus-and-eurydice-arr-alexander-siloti', recordingMusician: 'Vadim Chaimovich', arrangement: 'Alexander Siloti' },
        ]
    },
    {
        id: 'mascagni',
        name: 'Mascagni',
        songs: [
            { name: 'Cavalleria rusticana: Intermezzo sinfonico (Symphonic Interlude from the opera Rustic Chivalry)', fileName: 'cavalleria-rusticana-intermezzo-sinfonico-symphonic-interlude-from-the-opera-rustic-chivalry', recordingMusician: 'Orchestra del Teatro alla Scala di Milano' }
        ]
    },
    {
        id: 'arvo-part',
        name: 'Arvo Pärt',
        songs: [
            { name: 'Spiegel im Spiegel (Mirror in the Mirror)', fileName: 'spiegel-im-spiegel-mirror-in-the-mirror', recordingMusician: 'Yoshika Masuda (Cello), Van-Anh Nguyen (Piano)' }
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
        id: 'harry-gregson-williams',
        name: 'Harry Gregson-Williams',
        songs: [
            { name: 'A Narnia Lullaby', fileName: 'a-narnia-lullaby', soundtrack: 'The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe' }
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
            { name: 'Wade in the Water', fileName: 'wade-in-the-water' }
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
            { name: 'For All We Know', fileName: 'for-all-we-know' }
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
            { name: 'Moondance', fileName: 'moondance' }
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
        id: 'rufus-wainwright',
        name: 'Rufus Wainwright',
        songs: [
            { name: 'Hallelujah', fileName: 'hallelujah', composer: 'Leonard Bernstein' }
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
        id: 'joe-strummer-and-the-mescaleros',
        name: 'Joe Strummer and the Mescaleros',
        songs: [
            { name: 'Mondo Bongo', fileName: 'mondo-bongo' }
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
        id: 'the-chords',
        name: 'The Chords',
        songs: [
            { name: 'Sh-Boom', fileName: 'sh-boom' }
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
        id: 'steve-vai',
        name: 'Steve Vai',
        songs: [
            { name: 'For the Love of God', fileName: 'for-the-love-of-god' },
            { name: 'Tender Surrender', fileName: 'tender-surrender' }
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
        id: 'metallica',
        name: 'Metallica',
        songs: [
            { name: 'Enter Sandman', fileName: 'enter-sandman' },
            { name: 'For Whom the Bell Tolls', fileName: 'for-whom-the-bell-tolls' },
            { name: 'Master of Puppets', fileName: 'master-of-puppets' },
            { name: 'Nothing Else Matters', fileName: 'nothing-else-matters' },
            
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
        id: 'aerosmith',
        name: 'Aerosmith',
        songs: [
            { name: 'Dream On', fileName: 'dream-on' }
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
        id: 'blue-oyster-cult',
        name: 'Blue Oyster Cult',
        songs: [
            { name: "(Don't Fear) The Reaper", fileName: 'dont-fear-the-reaper' }
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
        name: 'Mötley Crüe',
        songs: [
            { name: 'Kickstart My Heart', fileName: 'kickstart-my-heart' }
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
        id: 'the-beatles',
        name: 'The Beatles',
        songs: [
            { name: 'In My Life', fileName: 'in-my-life' },
            { name: 'Let It Be', fileName: 'let-it-be' },
            { name: 'Yesterday', fileName: 'yesterday' },
            { name: 'Michelle', fileName: 'michelle' },
            { name: 'Girl', fileName: 'girl' },
            { name: 'Eleanor Rigby', fileName: 'eleanor-rigby' },
            { name: 'The Long and Winding Road', fileName: 'the-long-and-winding-road' },
            { name: 'Twist and Shout', fileName: 'twist-and-shout' },
            { name: 'Help!', fileName: 'help' },
            { name: 'All You Need Is Love', fileName: 'all-you-need-is-love' },
            { name: 'Penny Lane', fileName: 'penny-lane' },
            { name: 'Hey Jude', fileName: 'hey-jude' }
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
        id: 'creedence-clearwater-revival',
        name: 'Creedence Clearwater Revival',
        songs: [
            { name: 'Have You Ever Seen the Rain', fileName: 'have-you-ever-seen-the-rain' },
            { name: 'Fortunate Son', fileName: 'fortunate-son' }
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
        id: 'rem',
        name: 'R.E.M.',
        songs: [
            { name: 'Losing My Religion', fileName: 'losing-my-religion' },
            { name: 'Man on the Moon', fileName: 'man-on-the-moon' }
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
        id: 'linkin-park',
        name: 'Linkin Park',
        songs: [
            { name: 'Numb', fileName: 'numb' }
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
        id: 'dropkick-murphys',
        name: 'Dropkick Murphys',
        songs: [
            { name: "I'm Shipping Up to Boston", fileName: 'im-shipping-up-to-boston' },
            { name: 'Tessie', fileName: 'tessie' }
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
        id: 'tears-for-fears',
        name: 'Tears For Fears',
        songs: [
            { name: 'Sowing the Seeds of Love', fileName: 'sowing-the-seeds-of-love' },
            { name: 'Everybody Wants to Rule the World', fileName: 'everybody-wants-to-rule-the-world' }
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
        id: 'stray-cats',
        name: 'Stray Cats',
        songs: [
            { name: 'Stray Cat Strut', fileName: 'stray-cat-strut' }
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
        id: 'elton-john',
        name: 'Elton John',
        songs: [
            { name: 'Tiny Dancer', fileName: 'tiny-dancer' }
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
        id: 'outkast',
        name: 'Outkast',
        songs: [
            { name: 'Hey Ya!', fileName: 'hey-ya' },
            { name: 'Ms. Jackson', fileName: 'ms-jackson' }
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
            { name: 'Fast Lane', fileName: 'fast-lane', contributors: `Royce da 5'9"` }
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
            { name: 'Still D.R.E.', fileName: 'still-dre', contributors: 'Snoop Dogg' },
            { name: 'The Message', fileName: 'the-message', contributors: 'Mary J. Blige, Rell' }
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
        id: 'flobots',
        name: 'Flobots',
        songs: [
            { name: 'Handlebars', fileName: 'handlebars' }
        ]
    },
    {
        id: 'black-eyed-peas',
        name: 'Black Eyed Peas',
        songs: [
            { name: 'Where Is the Love', fileName: 'where-is-the-love' },
            { name: "Let's Get It Started", fileName: 'lets-get-it-started' }
        ]
    },
    {
        id: 'frank-ocean',
        name: 'Frank Ocean',
        songs: [
            { name: 'Nikes', fileName: 'nikes' }
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
        id: 'dave-brubeck',
        name: 'Dave Brubeck',
        songs: [
            { name: 'Take Five', fileName: 'take-five' },
            { name: 'Maria', fileName: 'maria' }
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
            { name: 'Intro', fileName: 'intro' }
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
        id: 'secret-garden',
        name: 'Secret Garden',
        songs: [
            { name: 'You Raise Me Up', fileName: 'you-raise-me-up', recordingMusician: 'Josh Groban' },
            { name: 'Adagio', fileName: 'adagio' },
            { name: 'Nocturne', fileName: 'nocturne' }
        ]
    },
    {
        id: 'john-newton',
        name: 'John Newton',
        songs: [
            { name: 'Amazing Grace', fileName: 'amazing-grace', recordingMusician: 'Bagpipe Master' }
        ]
    },
    {
        id: 'joseph-kilna-mackenzie',
        name: 'Joseph Kilna MacKenzie',
        songs: [
            { name: 'Sgt. MacKenzie', fileName: 'sgt-mackenzie' }
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