// id and name are used to initialize the html document
// songs is used to initialize musiciansObject which is used to play the songs
const musiciansArray = [
    {
        id: 'hans-zimmer',
        name: 'Hans Zimmer',
        songs: [
            'Why Do We Fall',          // The Dark Knight trilogy
            'Agent Of Chaos',
            'Molossus',
            'Corynorhinus',
            'Myotis',
            'Lasiurus',
            'Barbastella',
            'Eptescius',
            "Gotham's Reckoning",
            'Imagine The Fire',
            'Necessary Evil',
            'Nothing Out There',
            'Rise',
            'A Dark Knight',
            'Final Ascent',            // No Time To Die
            'Marry Me',                // Pirates Of The Carribean franchise
            'One Day',
            'Wheel Of Fortune',
            "At Wit's End",
            'Jack Sparrow',
            'Parlay',
            'Will And Elizabeth',
            'The Black Pearl',
            'Davy Jones',
            'Davy Jones - Piano',        
            'Time',                     // Inception
            'Projections',
            'First Step',
            'No Time For Caution',
            'Mountains',
            'Goodbye My Son',           // Man Of Steel
            'Is She With You',          // Batman V Superman
            'Not In Blood But In Bond', // Sherlock Holmes
            'Ah, Putrefaction',
            'Elysium',                  // Gladiator
            'Honor Him',
            'Now We Are Free',
            'Now We Are Free - Cello'
        ]
    },
    {
        id: 'chopin',
        name: 'Chopin',
        songs: [
            'N19 - Nocturne In E Minor Op. 72 No. 1',
            'P4 - Prelude In E Minor Op. 28 No. 4',
            'P15 - Prelude In D Flat Major Op. 28 No. 15 (Raindrop Prelude)',
            'N20 - Nocturne In C Sharp Minor, Op. Posth. - Interpretation 1',
            'N20 - Nocturne In C Sharp Minor, Op. Posth. - Interpretation 2',
            'N21 - Nocturne In C Minor Op. Posth.',
            'N1 - Nocturne In B Flat Minor Op. 9 No. 1',
            'N2 - Nocturne In E Flat Major Op. 9 No. 2',
            'N3 - Nocturne In B Major Op. 9 No. 3',
            'N4 - Nocturne In F Major Op. 15 No. 1',
            'N5 - Nocturne In F Sharp Major Op. 15 No. 2',
            'N6 - Nocturne In G Minor Op. 15 No. 3',
            'N7 - Nocturne In C Sharp Minor Op. 27 No. 1',
            'N8 - Nocturne In D Flat Major Op. 27 No. 2',
            'N9 - Nocturne In B Major Op. 32 No. 1',
            'N10 - Nocturne In A Flat Major Op. 32 No. 2',
            'N11 - Nocturne In G Minor Op. 37 No. 1',
            'N12 - Nocturne In G Major Op. 37 No. 2',
            'N13 - Nocturne In C Minor Op. 48 No. 1',
            'N14 - Nocturne In F Sharp Minor Op. 48 No. 2',
            'N15 - Nocturne In F Minor Op. 55 No. 1',
            'N16 - Nocturne In E Flat Major Op. 55 No. 2',
            'N17 - Nocturne In B Major Op. 62 No. 1',
            'N18 - Nocturne In E Major Op. 62 No. 2',
            'Ballade No. 1 In G Minor Op. 23.',
            'Etude In C Minor Op. 10 No. 12 (Revolutionary Etude)',
            'Etude In A Minor Op. 25 No. 11 (Winter Wind)',
            'Piano Sonata No. 2 In B Flat Minor Movement III (Funeral March)',
            'Fantaisie Impromptu in C Sharp Minor Op. Posth. 66 WN 46',
            'N20 - Nocturne In C Sharp Minor, Op. Posth. - Cello'
        ]
    },
    {
        id: 'schubert',
        name: 'Schubert',
        songs: [
            'Impromptu In G Flat Major Op. 90 No. 3',
            'Piano Trio No. 2 In E Flat Major Movement II Op. 100',
            'Serenade - Interpretation 1',
            'Serenade - Interpretation 2',
            'Serenade - Piano and Cello',
            'Serenade - Piano (arr. Liszt)'
        ]
    },
    {
        id: 'liszt',
        name: 'Liszt',
        songs: [
            'Liebestraum No. 3 In A Flat Major',
            'Consolation No. 3 In D Flat Major',
            'Romance O Pourquoi Donc In E Minor S. 169',
            'Etude No. 3 In G Sharp Minor (La Campanella)'
        ]
    },
    {
        id: 'beethoven',
        name: 'Beethoven',
        songs: [
            'Moonlight Sonata 1st Movement',
            'Moonlight Sonata 1st Movement - Cello and Piano',
            'Moonlight Sonata 1st Movement - Ethereal',
            'Moonlight Sonata 3rd Movement',
            'Moonlight Sonata 3rd Movement - Guitar and Drums'
        ]
    },
    {
        id: 'mozart',
        name: 'Mozart',
        songs: [
            'Fantasia No. 3 In D Minor',
            'Serenade No. 10 For Winds In B Flat Major 3rd Movement',
            'Requiem In D Minor Introitus',
            'Requiem In D Minor Lacrimosa',
            'Requiem In D Minor Lacrimosa - Cello'
        ]
    },
    {
        id: 'bach',
        name: 'Bach',
        songs: [
            'Toccata And Fugue In D Minor',
            'Orchestral Suite No. 3 In D Major Movement II, BWV 1068 (Air On The G String)',
            'Cello Suite No. 1 In G Major Prelude'
        ]
    },
    {
        id: 'albinoni',
        name: 'Albinoni',
        songs: [
            'Adagio'
        ]
    },
    {
        id: 'saint-saens',
        name: 'Saint-Saens',
        songs: [
            'The Swan - Cello and Harp',
            'The Swan - Cello and Piano',
            'Cello Concerto No. 1 In A Minor Op. 33'
        ]
    },
    {
        id: 'satie',
        name: 'Satie',
        songs: [
            'Gnossienne No. 1 - Interpretation 1',
            'Gnossienne No. 1 - Interpretation 2',
            'Gnossienne No. 2',
            'Gnossienne No. 3',
            'Gnossienne No. 4',
            'Gnossienne No. 5',
            'Gymnopedie No. 1'
        ]
    },
    {
        id: 'debussy',
        name: 'Debussy',
        songs: [
            'Reverie',
            'Clair De Lune',
            'Arabesque No. 1'
        ]
    },
    {
        id: 'samuel-barber',
        name: 'Samuel Barber',
        songs: [
            'Adagio For Strings',
            'Agnus Dei'
        ]
    },
    {
        id: 'rachmaninoff',
        name: 'Rachmaninoff',
        songs: [
            'Piano Concerto No. 2 1st Movement',
            'Piano Concerto No. 2 2nd Movement',
            'Piano Concerto No. 2 3rd Movement',
            'Piano Concerto No. 2 2nd Movement - Cello'
        ]
    },
    {
        id: 'shostakovich',
        name: 'Shostakovich',
        songs: [
            'Waltz No. 2'
        ]
    },
    {
        id: 'bruch',
        name: 'Bruch',
        songs: [
            'Kol Nidre'
        ]
    },
    {
        id: 'gruber',
        name: 'Gruber',
        songs: [
            'Silent Night - Piano',
            'Silent Night - Cello'
        ]
    },
    {
        id: 'grieg',
        name: 'Grieg',
        songs: [
            'Peer Gynt Suite No. 1 Op. 46 (Morning Mood)'
        ]
    },
    {
        id: 'tchaikovsky',
        name: 'Tchaikovsky',
        songs: [
            'Swan Lake Suite Op. 20 - Swan Theme'
        ]
    },
    {
        id: 'harry-gregson-williams',
        name: 'Harry Gregson-Williams',
        songs: [
            'Narnia Lullaby'
        ]
    },
    {
        id: 'steve-jablonsky',
        name: 'Steve Jablonsky',
        songs: [
            'Tessa',
            'Sacrifice',
            'Arrival To Earth'
        ]
    },
    {
        id: 'james-newton-howard',
        name: 'James Newton Howard',
        songs: [
            'There Are Worse Games To Play-Deep In The Meadow-The Hunger Games Suite',
            "Rue's Farewell",
            "Snow's Execution"
        ]
    },
    {
        id: 'nicholas-hooper',
        name: 'Nicholas Hooper',
        songs: [
            'When Ginny Kissed Harry',
            "Dumbledore's Farewell",
            'Possession'
        ]
    },
    {
        id: 'patrick-doyle',
        name: 'Patrick Doyle',
        songs: [
            'Another Year Ends'
        ]
    },
    {
        id: 'alexandre-desplat',
        name: 'Alexandre Desplat',
        songs: [
            'Severus and Lily'
        ]
    },
    {
        id: 'howard-shore',
        name: 'Howard Shore',
        songs: [
            'Théoden King',
            'Edoras'
        ]
    },
    {
        id: 'michael-giacchino',
        name: 'Michael Giacchino',
        songs: [
            'Married Life',
        ]
    },
    {
        id: 'bear-mccreary',
        name: 'Bear McCreary',
        songs: [
            'Reconciliation',
        ]
    },
    {
        id: 'jesper-kyd',
        name: 'Jesper Kyd',
        songs: [
            "Ezio's Family",
            'Echoes Of The Roman Ruins'
        ]
    },
    {
        id: 'zack-hemsey',
        name: 'Zack Hemsey',
        songs: [
            'The Way'
        ]
    },
    {
        id: 'johann-johannsson',
        name: 'Johann Johannsson',
        songs: [
            "The Sun's Gone Dim And The Sky's Turned Black"
        ]
    },
    {
        id: 'atis-freivalds',
        name: 'Atis Freivalds',
        songs: [
            'Paradox',
            'For Her'
        ]
    },
    {
        id: 'mike-patton',
        name: 'Mike Patton',
        songs: [
            'The Snow Angel'
        ]
    },
    {
        id: 'lucio-dalla',
        name: 'Lucio Dalla',
        songs: [
            'Caruso',
            'Caruso - Cello',
        ]
    },
    {
        id: 'luciano-pavarotti',
        name: 'Luciano Pavarotti',
        songs: [
            'Nessun Dorma'
        ]
    },
    {
        id: 'ben-e-king',
        name: 'Ben E. King',
        songs: [
            'Stand By Me'
        ]
    },
    {
        id: 'eva-cassidy',
        name: 'Eva Cassidy',
        songs: [
            'Wade In The Water'
        ]
    },
    {
        id: 'charles-bradley',
        name: 'Charles Bradley',
        songs: [
            'Crying In The Chapel'
        ]
    },
    {
        id: 'marvin-gaye-tammi-terrell',
        name: 'Marvin Gaye and Tammi Terrell',
        songs: [
            "Ain't No Mountain High Enough"
        ]
    },
    {
        id: 'donny-hathaway',
        name: 'Donny Hathaway',
        songs: [
            'A Song For You'
        ]
    },
    {
        id: 'the-foundations',
        name: 'The Foundations',
        songs: [
            'Build Me Up Buttercup'
        ]
    },
    {
        id: 'righteous-brothers',
        name: 'Righteous Brothers',
        songs: [
            'Unchained Melody'
        ]
    },
    {
        id: 'johnny-hartman',
        name: 'Johnny Hartman',
        songs: [
            'For All We Know',
            'I See Your Face Before Me'
        ]
    },
    {
        id: 'bobby-darin',
        name: 'Bobby Darin',
        songs: [
            'The Curtain Falls'
        ]
    },
    {
        id: 'van-morrison',
        name: 'Van Morrison',
        songs: [
            'Moondance'
        ]
    },
    {
        id: 'james-brown',
        name: 'James Brown',
        songs: [
            'Try Me'
        ]
    },
    {
        id: 'etta-james',
        name: 'Etta James',
        songs: [
            "I'd Rather Go Blind",
            "Lord Don't Move That Mountain"
        ]
    },
    {
        id: 'charles-aznavour',
        name: 'Charles Aznavour',
        songs: [
            'For Me Formidable'
        ]
    },
    {
        id: 'israel-kamakawiwoole',
        name: 'Israel Kamakawiwoole',
        songs: [
            'Somewhere Over The Rainbow'
        ]
    },
    {
        id: 'nick-cave',
        name: 'Nick Cave',
        songs: [
            'O Children'
        ]
    },
    {
        id: 'imogen-heap',
        name: 'Imogen Heap',
        songs: [
            'Hide And Seek'
        ]
    },
    {
        id: 'don-mclean',
        name: 'Don McLean',
        songs: [
            'Vincent',
            'Vincent - Guitar',
            'American Pie'
        ]
    },
    {
        id: 'the-mamas-and-the-papas',
        name: 'The Mamas And The Papas',
        songs: [
            "California Dreamin'"
        ]
    },
    {
        id: 'patrick-watson',
        name: 'Patrick Watson',
        songs: [
            'To Build A Home'
        ]
    },
    {
        id: 'rufus-wainwright',
        name: 'Rufus Wainwright',
        songs: [
            'Hallelujah'
        ]
    },
    {
        id: 'duffy',
        name: 'Duffy',
        songs: [
            'Delayed Devotion'
        ]
    },
    {
        id: 'maxwell',
        name: 'Maxwell',
        songs: [
            'Pretty Wings'
        ]
    },
    {
        id: 'bob-dylan',
        name: 'Bob Dylan',
        songs: [
            'Things Have Changed'
        ]
    },
    {
        id: 'johnny-cash',
        name: 'Johnny Cash',
        songs: [
            "God's Gonna Cut You Down",
            'Hurt'
        ]
    },
    {
        id: 'ben-howard',
        name: 'Ben Howard',
        songs: [
            'Oats In The Water'
        ]
    },
    {
        id: 'jamie-n-commons',
        name: 'Jamie N Commons',
        songs: [
            'Lead Me Home'
        ]
    },
    {
        id: 'phillip-phillips',
        name: 'Phillip Phillips',
        songs: [
            'Home'
        ]
    },
    {
        id: 'john-denver',
        name: 'John Denver',
        songs: [
            'Take Me Home, Country Roads'
        ]
    },
    {
        id: 'ritchie-valens',
        name: 'Ritchie Valens',
        songs: [
            'La Bamba'
        ]
    },
    {
        id: 'jon-batiste',
        name: 'Jon Batiste',
        songs: [
            'Blackbird'
        ]
    },
    {
        id: 'the-chords',
        name: 'The Chords',
        songs: [
            'Sh-Boom'
        ]
    },
    {
        id: 'imad-fares',
        name: 'Imad Fares',
        songs: [
            'Gipsy Kings'
        ]
    },
    {
        id: 'rodrigo-and-gabriela',
        name: 'Rodrigo And Gabriela',
        songs: [
            'Diablo Rojo'
        ]
    },
    {
        id: 'steve-vai',
        name: 'Steve Vai',
        songs: [
            'For The Love Of God',
            'Tender Surrender'
        ]
    },
    {
        id: 'neogeofanatic',
        name: 'Neogeofanatic',
        songs: [
            'My Gibson Les Paul Is Crying'
        ]
    },
    {
        id: 'rhapsody-of-fire',
        name: 'Rhapsody Of Fire',
        songs: [
            'Gargoyles Angels Of Darkness'
        ]
    },
    {
        id: 'meshuggah',
        name: 'Meshuggah',
        songs: [
            'Bleed',
            'Demiurge'
        ]
    },
    {
        id: 'slipknot',
        name: 'Slipknot',
        songs: [
            'All Out Life',
            'Psychosocial',
            'Sulfur',
            'Disasterpiece',
            'Skin Ticket',
            'Purity',
            '(sic)',
            'Surfacing',
            'Duality',
            'Custer',
            'The Devil In I',
            'The Devil In I (Live)',
            'Everything Ends',
            'The Negative One',
            'Snuff'
        ]
    },
    {
        id: 'firewind',
        name: 'Firewind',
        songs: [
            'Allegiance'
        ]
    },
    {
        id: 'pantera',
        name: 'Pantera',
        songs: [
            'Mouth For War'
        ]
    },
    {
        id: 'rage-against-the-machine',
        name: 'Rage Against The Machine',
        songs: [
            'Killing In The Name'
        ]
    },
    {
        id: 'disturbed',
        name: 'Disturbed',
        songs: [
            'Down With The Sickness',
            'The Sound Of Silence'
        ]
    },
    {
        id: 'nirvana',
        name: 'Nirvana',
        songs: [
            'Smells Like Teen Spirit',
            'Heart-Shaped Box'
        ]
    },
    {
        id: 'aerosmith',
        name: 'Aerosmith',
        songs: [
            'Dream On'
        ]
    },
    {
        id: 'blue-oyster-cult',
        name: 'Blue Oyster Cult',
        songs: [
            "(Don't Fear) The Reaper"
        ]
    },
    {
        id: 'metallica',
        name: 'Metallica',
        songs: [
            'Enter Sandman',
            'Nothing Else Matters',
            'Master Of Puppets',
            'For Whom The Bell Tolls'
        ]
    },
    {
        id: 'guns-n-roses',
        name: "Guns N' Roses",
        songs: [
            "Sweet Child O' Mine",
            'Welcome To The Jungle'
        ]
    },
    {
        id: 'ac-dc',
        name: 'AC/DC',
        songs: [
            'Thunderstruck',
            'Thunderstruck - Cello'
        ]
    },
    {
        id: 'motley-crue',
        name: 'Motley Crue',
        songs: [
            'Kickstart My Heart'
        ]
    },
    {
        id: 'linkin-park',
        name: 'Linkin Park',
        songs: [
            'Numb'
        ]
    },
    {
        id: 'my-chemical-romance',
        name: 'My Chemical Romance',
        songs: [
            'The Ghost Of You'
        ]
    },
    {
        id: 'radiohead',
        name: 'Radiohead',
        songs: [
            'Creep'
        ]
    },
    {
        id: 'the-who',
        name: 'The Who',
        songs: [
            "Baba O'Riley",
            'Who Are You',
            'Pinball Wizard'
        ]
    },
    {
        id: 'rem',
        name: 'R.E.M.',
        songs: [
            'Losing My Religion',
            'Man On The Moon'
        ]
    },
    {
        id: 'steely-dan',
        name: 'Steely Dan',
        songs: [
            'Do It Again'
        ]
    },
    {
        id: 'the-band',
        name: 'The Band',
        songs: [
            'The Weight'
        ]
    },
    {
        id: 'creedence-clearwater-revival',
        name: 'Creedence Clearwater Revival',
        songs: [
            'Have You Ever Seen The Rain'
        ]
    },
    {
        id: 'the-beatles',
        name: 'The Beatles',
        songs: [
            'In My Life',
            'Let It Be',
            'Girl',
            'Michelle',
            'Eleanor Rigby',
            'The Long And Winding Road',
            'Yesterday',
            'Twist And Shout',
            'Help!',
            'All You Need Is Love',
            'Hey Jude'
        ]
    },
    {
        id: 'electric-light-orchestra',
        name: 'Electric Light Orchestra',
        songs: [
            'Mr. Blue Sky'
        ]
    },
    {
        id: 'cream',
        name: 'Cream',
        songs: [
            'White Room'
        ]
    },
    {
        id: 'the-goo-goo-dolls',
        name: 'The Goo Goo Dolls',
        songs: [
            'Iris'
        ]
    },
    {
        id: 'oasis',
        name: 'Oasis',
        songs: [
            'Wonderwall'
        ]
    },
    {
        id: 'augustana',
        name: 'Augustana',
        songs: [
            'Boston'
        ]
    },
    {
        id: 'the-killers',
        name: 'The Killers',
        songs: [
            'Mr. Brightside'
        ]
    },
    {
        id: 'wilco',
        name: 'Wilco',
        songs: [
            'How To Fight Loneliness'
        ]
    },
    {
        id: 'coldplay',
        name: 'Coldplay',
        songs: [
            'The Scientist',
            'Yellow',
            'Fix You',
            'Viva La Vida',
            'Adventure Of A Lifetime'
        ]
    },
    {
        id: 'muse',
        name: 'Muse',
        songs: [
            'Uprising',
            'Starlight',
            'Supermassive Black Hole'
        ]
    },
    {
        id: 'bag-raiders',
        name: 'Bag Raiders',
        songs: [
            'Shooting Stars'
        ]
    },
    {
        id: 'wang-chung',
        name: 'Wang Chung',
        songs: [
            'Space Junk'
        ]
    },
    {
        id: 'joe-strummer-and-the-mescaleros',
        name: 'Joe Strummer And The Mescaleros',
        songs: [
            'Mondo Bongo'
        ]
    },
    {
        id: 'stray-cats',
        name: 'Stray Cats',
        songs: [
            'Stray Cat Strut'
        ]
    },
    {
        id: 'tears-for-fears',
        name: 'Tears For Fears',
        songs: [
            'Sowing The Seeds Of Love',
            'Everybody Wants To Rule The World'
        ]
    },
    {
        id: 'culture-club',
        name: 'Culture Club',
        songs: [
            'Karma Chameleon'
        ]
    },
    {
        id: 'john-waite',
        name: 'John Waite',
        songs: [
            'Missing You'
        ]
    },
    {
        id: 'eddie-money',
        name: 'Eddie Money',
        songs: [
            'Baby Hold On'
        ]
    },
    {
        id: 'phil-collins',
        name: 'Phil Collins',
        songs: [
            'In The Air Tonight'
        ]
    },
    {
        id: 'eminem',
        name: 'Eminem',
        songs: [
            'Sing For The Moment',
            'Sing For The Moment (Instrumental)',
            'Lose Yourself',
            'Till I Collapse',
            "Won't Back Down",
            'Stan',
            'Fast Lane'
        ]
    },
    {
        id: 'kendrick-lamar',
        name: 'Kendrick Lamar',
        songs: [
            'Hiiipower',
            'Black Boy Fly',
            'Ignorance Is Bliss',
            'Money Trees',
            'The Recipe'
        ]
    },
    {
        id: 'kanye-west',
        name: 'Kanye West',
        songs: [
            'Heartless',
            'Love Lockdown',
            'Send It Up',
            'No Church In The Wild',
            'Blood On The Leaves',
            'Flashing Lights'
        ]
    },
    {
        id: 'lupe-fiasco',
        name: 'Lupe Fiasco',
        songs: [
            'Superstar'
        ]
    },
    {
        id: 'suicidal-tendencies',
        name: 'Suicidal Tendencies',
        songs: [
            'Institutionalized'
        ]
    },
    {
        id: 'flobots',
        name: 'Flobots',
        songs: [
            'Handlebars'
        ]
    },
    {
        id: 'house-of-pain',
        name: 'House Of Pain',
        songs: [
            'Jump Around'
        ]
    },
    {
        id: 'naughty-by-nature',
        name: 'Naughty By Nature',
        songs: [
            'Hip Hop Hooray'
        ]
    },
    {
        id: 'tom-pepe',
        name: 'Tom Pepe',
        songs: [
            'The River Runs Deep'
        ]
    },
    {
        id: 'gerry-mulligan',
        name: 'Gerry Mulligan',
        songs: [
            'Prelude In E Minor Op. 28 No. 4 - Jazz'
        ]
    },
    {
        id: 'dave-brubeck',
        name: 'Dave Brubeck',
        songs: [
            'Take Five',
            'Maria'
        ]
    },
    {
        id: 'larnell-lewis',
        name: 'Larnell Lewis',
        songs: [
            'Drum Solo'
        ]
    },
    {
        id: 'carly-comando',
        name: 'Carly Comando',
        songs: [
            'Everyday'
        ]
    },
    {
        id: 'joseph-kilna-mackenzie',
        name: 'Joseph Kilna MacKenzie',
        songs: [
            'Sgt. MacKenzie'
        ]
    },
    {
        id: 'the-xx',
        name: 'The XX',
        songs: [
            'Intro',
            'Angels'
        ]
    },
    {
        id: 'henry-krinkle',
        name: 'Henry Krinkle',
        songs: [
            'Stay'
        ]
    },
    {
        id: 'tony-anderson',
        name: 'Tony Anderson',
        songs: [
            'Ember'
        ]
    },
    {
        id: 'disclosure',
        name: 'Disclosure',
        songs: [
            'You & Me'
        ]
    },
    {
        id: 'feed-me-and-crystal-fighters',
        name: 'Crystal Fighters',
        songs: [
            'Love Is All I Got'
        ]
    },
    {
        id: 'junior-senior',
        name: 'Junior Senior',
        songs: [
            'Move Your Feet'
        ]
    },
    {
        id: 'stromae',
        name: 'Stromae',
        songs: [
            'Alors On Danse'
        ]
    },
    {
        id: 'ta-ku',
        name: 'Ta-Ku',
        songs: [
            'Night 3'
        ]
    },
    {
        id: 'dylan-thomas',
        name: 'Dylan Thomas',
        songs: [
            'Do Not Go Gentle Into That Good Night'
        ]
    },
    {
        id: 'william-ernest-henley',
        name: 'William Ernest Henley',
        songs: [
            'Invictus'
        ]
    },
    {
        id: 'charles-dickens',
        name: 'Charles Dickens',
        songs: [
            'A Tale Of Two Cities'
        ]
    },
];


/*
    Built based on musiciansArray
    {
        'musician1-id' : {
            songs: ['song1', 'song2'...],
            idx: 0
        },
        'musician2-id' : {
            songs: ['song1', 'song2'...],
            idx: 0
        },
        ...
    }
*/
const musiciansObject = {};


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


// tracks the current song being played
const audioWrapper = {
    audio: new Audio()
};

// tracks the current musician
const currentMusicianWrapper = {
    currentMusician: ''
};

// prevents issues with setTimeout
const songAndMusicianIntervalWrapper = {
    intervalId: 0
};




/********** function definitions **********/
const initializeInspirationPage = (musiciansArray) => {
    const musiciansSection = document.getElementById('musicians-section');
    musiciansSection.insertAdjacentHTML('afterbegin', '<div class="container" id="musicians-container"></div>');
    const musiciansContainer = document.getElementById('musicians-container');
    let newHTML;

    for (let i = 0; i < musiciansArray.length; i += 3) {
        if (i === musiciansArray.length - 1) {
            newHTML = 
                `
                    <div class="row title-container">
                        <div class="col">
                            <h4 id="${musiciansArray[i].id}-title">${musiciansArray[i].name}</h4>
                        </div>
                    </div>
                    <div class="row img-container">
                        <div class="col img-col parent ">
                            <img src="img/musicians/${musiciansArray[i].id}.jpg" class="musician-img" id="${musiciansArray[i].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i].id}-play-button-img">
                        </div>
                    </div>
                    <div class="row song-container">
                        <div class="col">
                            <p id="${musiciansArray[i].id}-song"></p>
                        </div>
                    </div>
                `;
        } else if (i === musiciansArray.length - 2) {
            newHTML = 
                `
                    <div class="row title-container">
                        <div class="col">
                            <h4 id="${musiciansArray[i].id}-title">${musiciansArray[i].name}</h4>
                        </div>
                        <div class="col">
                            <h4 id="${musiciansArray[i + 1].id}-title">${musiciansArray[i + 1].name}</h4>
                        </div>
                    </div>
                    <div class="row img-container">
                        <div class="col img-col parent ">
                            <img src="img/musicians/${musiciansArray[i].id}.jpg" class="musician-img" id="${musiciansArray[i].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i].id}-play-button-img">
                        </div>
                        <div class="col img-col parent">
                            <img src="img/musicians/${musiciansArray[i + 1].id}.jpg" class="musician-img" id="${musiciansArray[i + 1].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i + 1].id}-play-button-img">
                        </div>
                    </div>
                    <div class="row song-container">
                        <div class="col">
                            <p id="${musiciansArray[i].id}-song"></p>
                        </div>
                        <div class="col">
                            <p id="${musiciansArray[i + 1].id}-song"></p>
                        </div>
                    </div>
                `;
        } else {
            newHTML = 
                `
                    <div class="row title-container">
                        <div class="col">
                            <h4 id="${musiciansArray[i].id}-title">${musiciansArray[i].name}</h4>
                        </div>
                        <div class="col">
                            <h4 id="${musiciansArray[i + 1].id}-title">${musiciansArray[i + 1].name}</h4>
                        </div>
                        <div class="col">
                            <h4 id="${musiciansArray[i + 2].id}-title">${musiciansArray[i + 2].name}</h4>
                        </div>
                    </div>
                    <div class="row img-container">
                        <div class="col img-col parent ">
                            <img src="img/musicians/${musiciansArray[i].id}.jpg" class="musician-img" id="${musiciansArray[i].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i].id}-play-button-img">
                        </div>
                        <div class="col img-col parent">
                            <img src="img/musicians/${musiciansArray[i + 1].id}.jpg" class="musician-img" id="${musiciansArray[i + 1].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i + 1].id}-play-button-img">
                        </div>
                        <div class="col img-col parent">
                            <img src="img/musicians/${musiciansArray[i + 2].id}.jpg" class="musician-img" id="${musiciansArray[i + 2].id}-img">
                            <img src="img/background/PlayButton.jpg" class="play-button-img" id="${musiciansArray[i + 2].id}-play-button-img">
                        </div>
                    </div>
                    <div class="row song-container">
                        <div class="col">
                            <p id="${musiciansArray[i].id}-song"></p>
                        </div>
                        <div class="col">
                            <p id="${musiciansArray[i + 1].id}-song"></p>
                        </div>
                        <div class="col">
                            <p id="${musiciansArray[i + 2].id}-song"></p>
                        </div>
                    </div>
                `;
        }
        musiciansContainer.insertAdjacentHTML('beforeend', newHTML);
    }
}


const initializeMusiciansObject = (musiciansArray, musiciansObject) => {
    musiciansArray.forEach(musician => {
        musiciansObject[`${musician.id}`] = {
            songs: [],
            idx: 0
        };
        musician.songs.forEach(song => {
            musiciansObject[`${musician.id}`].songs.push(song);
        });
    });
}


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


const initializePlaySongEvents = musiciansObject => {
    for (const musician in musiciansObject) {
        document.getElementById(`${musician}-play-button-img`).addEventListener('click', () => {
            playSong(musician, musiciansObject, audioWrapper, currentMusicianWrapper);
            cycleSongAndMusicianOpacity(musician, songAndMusicianIntervalWrapper);
        });
        document.getElementById(`${musician}-play-button-img`).addEventListener('mouseenter', () => {
            document.getElementById(`${musician}-play-button-img`).style.opacity = '50%';
        });
        document.getElementById(`${musician}-play-button-img`).addEventListener('mouseleave', () => {
            document.getElementById(`${musician}-play-button-img`).style.opacity = '0%';
        });       
    }
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
initializeInspirationPage(musiciansArray);
initializeMusiciansObject(musiciansArray, musiciansObject);
cycleQuotes(quotesAndAuthors);
initializePlaySongEvents(musiciansObject);