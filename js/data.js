/*
  - In addition to be used to create the html document this is used to create musiciansObject which is used to create the events for playing the songs.
  - name vs. fileName in songs array
      - The name of the songs often contain characters for which it's best practice to omit them from file names.
      - The actual file name of the song will be stored in fileName and will only include lowercase letters and dashes.
  - Required fields in songs array
      - name, fileName, recordingMusician
  - Optional fields in songs array
      - soundtrack: if the song is part of a movie/video game soundtrack
      - composer: if the song is an arrangement (like a piano version of a non-piano song), this is the original composer
      - arrangement: if the song is an arrangement, this is the composer that did the arrangement
      - nickname: if the song has a nickname (mostly for class)
      - translation: if part of the song name is not in English, this is the english translation
      - movementOrWorkName: if the song is classical this is the movement name or name of the work be that it's actual name or a nickname given to it
          - Piano Concerto No. 2 in C Minor Op. 18 I. Moderato - in this case, movementOrWorkName would be Moderato
          - Morceaux de Fantaisie Op. 3 No. 1 Elegie in E-Flat Minor - in this case, movementOrWorkName would be Elegie in E-Flat Minor
      - arrangedFor: if the song is an arrangement, what it's arranged for, like (Arr. for Piano)
          
*/
export const musiciansArray = [
    {
        id: 'chopin',
        name: 'Chopin',
        songs: [
            { 
                name: 'P4 - Prelude in E Minor Op. 28 No. 4',
                fileName: 'p4-prelude-in-e-minor-op-28-no-4',
                recordingMusician: 'Kassia'
            },
            { 
                name: 'P6 - Prelude in B Minor Op. 28 No. 6',
                fileName: 'p6-prelude-in-b-minor-op-28-no-6',
                recordingMusician: 'Rousseau'
            },
            { 
                name: 'P15 - Prelude in D-Flat Major Op. 28 No. 15',
                fileName: 'p15-prelude-in-d-flat-major-op-28-no-15',
                recordingMusician: 'Ivo Pogorelich',
                movementOrWorkName: 'Raindrop Prelude'
            },
            { 
                name: 'N1 - Nocturne in B-Flat Minor Op. 9 No. 1',
                fileName: 'n1-nocturne-in-b-flat-minor-op-9-no-1',
                recordingMusician: 'François Chaplin'
            },
            { 
                name: 'N2 - Nocturne in E-Flat Major Op. 9 No. 2',
                fileName: 'n2-nocturne-in-e-flat-major-op-9-no-2',
                recordingMusician: 'François Chaplin'
            },
            { 
                name: 'N3 - Nocturne in B Major Op. 9 No. 3',
                fileName: 'n3-nocturne-in-b-major-op-9-no-3',
                recordingMusician: 'François Chaplin'
            },
            { 
                name: 'N4 - Nocturne in F Major Op. 15 No. 1',
                fileName: 'n4-nocturne-in-f-major-op-15-no-1',
                recordingMusician: 'François Chaplin'
            },
            { 
                name: 'N5 - Nocturne in F-Sharp Major Op. 15 No. 2',
                fileName: 'n5-nocturne-in-f-sharp-major-op-15-no-2',
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N6 - Nocturne in G Minor Op. 15 No. 3', 
                fileName: 'n6-nocturne-in-g-minor-op-15-no-3', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N7 - Nocturne in C-Sharp Minor Op. 27 No. 1', 
                fileName: 'n7-nocturne-in-c-sharp-minor-op-27-no-1', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N8 - Nocturne in D-Flat Major Op. 27 No. 2', 
                fileName: 'n8-nocturne-in-d-flat-major-op-27-no-2', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N9 - Nocturne in B Major Op. 32 No. 1', 
                fileName: 'n9-nocturne-in-b-major-op-32-no-1', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N10 - Nocturne in A-Flat Major Op. 32 No. 2', 
                fileName: 'n10-nocturne-in-a-flat-major-op-32-no-2', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N11 - Nocturne in G Minor Op. 37 No. 1', 
                fileName: 'n11-nocturne-in-g-minor-op-37-no-1', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N12 - Nocturne in G Major Op. 37 No. 2', 
                fileName: 'n12-nocturne-in-g-major-op-37-no-2', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N13 - Nocturne in C Minor Op. 48 No. 1', 
                fileName: 'n13-nocturne-in-c-minor-op-48-no-1', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N14 - Nocturne in F-Sharp Minor Op. 48 No. 2', 
                fileName: 'n14-nocturne-in-f-sharp-minor-op-48-no-2', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N15 - Nocturne in F Minor Op. 55 No. 1', 
                fileName: 'n15-nocturne-in-f-minor-op-55-no-1', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N16 - Nocturne in E-Flat Major Op. 55 No. 2', 
                fileName: 'n16-nocturne-in-e-flat-major-op-55-no-2',
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N17 - Nocturne in B Major Op. 62 No. 1', 
                fileName: 'n17-nocturne-in-b-major-op-62-no-1', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N18 - Nocturne in E Major Op. 62 No. 2', 
                fileName: 'n18-nocturne-in-e-major-op-62-no-2', 
                recordingMusician: 'François Chaplin' 
            },
            { 
                name: 'N19 - Nocturne in E Minor Op. Posth. 72 No. 1', 
                fileName: 'n19-nocturne-in-e-minor-op-posth-72-no-1', 
                recordingMusician: 'SLDD Piano' 
            },
            { 
                name: 'N20 - Nocturne in C-Sharp Minor Op. Posth., P. 1 No. 16', 
                fileName: 'n20-nocturne-in-c-sharp-minor-op-posth-p1-no-16', 
                recordingMusician: 'Nelson Goerner' 
            },
            { 
                name: 'N21 - Nocturne in C Minor Op. Posth., P. 2 No. 8', 
                fileName: 'n21-nocturne-in-c-minor-op-posth-p2-no-8', 
                recordingMusician: 'François Chaplin'
            },
            { 
                name: 'Etude in C Minor Op. 10 No. 12', 
                fileName: 'etude-in-c-minor-op-10-no-12', 
                recordingMusician: 'Rousseau',
                movementOrWorkName: 'Revolutionary Etude'
            },
            { 
                name: 'Etude in A Minor Op. 25 No. 11', 
                fileName: 'etude-in-a-minor-op-25-no-11', 
                recordingMusician: 'Rousseau',
                movementOrWorkName: 'Winter Wind' 
            },
            { 
                name: 'Piano Sonata No. 2 in B-Flat Minor Op. 35 III.', 
                fileName: 'piano-sonata-no-2-in-b-flat-minor-op-35-iii', 
                recordingMusician: 'Rousseau',
                movementOrWorkName: 'Marche Funèbre: Lento',
                translation: 'Funeral March'
            },
            { 
                name: 'Fantaisie-Impromptu in C-Sharp Minor Op. Posth. 66', 
                fileName: 'fantaisie-impromptu-in-c-sharp-minor-op-posth-66', 
                recordingMusician: 'Dmitry Shishkin' 
            },
            { 
                name: 'Ballade No. 1 in G Minor Op. 23', 
                fileName: 'ballade-no-1-in-g-minor-op-23', 
                recordingMusician: 'Seong-Jin Cho' 
            }
        ]
    },
    {
        id: 'liszt',
        name: 'Liszt',
        songs: [
            { 
                name: 'Liebestraum No. 3 in A-Flat Major S. 541/3', 
                fileName: 'liebestraum-no-3-in-a-flat-major-s-541-3', 
                recordingMusician: 'Rousseau',
                translation: 'Love Dream' 
            },
            { 
                name: 'Romance in E Minor S. 169', 
                fileName: 'romance-in-e-minor-s-169', 
                recordingMusician: 'Genny Basso' 
            },
            { 
                name: 'Consolation No. 3 in D-Flat Major S. 172/3', 
                fileName: 'consolation-no-3-in-d-flat-major-s-172-3', 
                recordingMusician: 'Rousseau' 
            },
            { 
                name: 'Ständchen S. 559a', 
                fileName: 'standchen-s-559a', 
                recordingMusician: 'Rousseau',
                translation: 'Serenade', 
                composer: 'Schubert',

            },
            { 
                name: 'Etude No. 3 in D-Flat Major S. 144/3', 
                fileName: 'etude-no-3-in-d-flat-major-s-144-3', 
                recordingMusician: 'Rousseau',
                movementOrWorkName: 'Un Sospiro',
                translation: 'A Sigh' 
            },
            { 
                name: 'Etude No. 3 in G-Sharp Minor S. 141/3', 
                fileName: 'etude-no-3-in-g-sharp-minor-s-141-3', 
                recordingMusician: 'Rousseau',
                movementOrWorkName: 'La Campanella',
                translation: 'The Little Bell',
                composer: 'Paganini' 
            },
            { 
                name: 'Auf dem Wasser zu singen S. 558/2', 
                fileName: 'auf-dem-wasser-zu-singen-s-558-2', 
                recordingMusician: 'Fatjon Zefi',
                translation: 'To Sing on the Water', 
                composer: 'Schubert' 
            },
            { 
                name: 'Der Doppelgänger S. 560/12', 
                fileName: 'der-doppelganger-s-560-12', 
                recordingMusician: 'Traum Piano',
                translation: 'The Double Walker',
                composer: 'Schubert' 
            },
            { 
                name: 'Hungarian Rhapsody No. 2 in C-Sharp Minor S. 244/2', 
                fileName: 'hungarian-rhapsody-no-2-in-c-sharp-minor-s-244-2', 
                recordingMusician: 'Rousseau' 
            },
            { 
                name: 'Transcendental Etude No. 11 in D-Flat Major S. 139/11', 
                fileName: 'transcendental-etude-no-11-in-d-flat-major-s-139-11',
                movementOrWorkName: 'Harmonies du soir',
                translation: 'Evening Harmonies',
                recordingMusician: 'Traum Piano' 
            },
            { 
                name: 'Bénédiction de Dieu dans la Solitude S. 173/3', 
                fileName: 'benediction-de-dieu-dans-la-solitude-s-173-3',
                translation: 'The Blessing of God in Solitude', 
                recordingMusician: 'Claudio Arrau' }
        ]
    },
    {
        id: 'rachmaninoff',
        name: 'Rachmaninoff',
        songs: [
            { 
                name: 'Piano Concerto No. 2 in C Minor Op. 18 I.', 
                fileName: 'piano-concerto-no-2-in-c-minor-op-18-i', 
                recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie',
                movementOrWorkName: 'Moderato'
            },
            { 
                name: 'Piano Concerto No. 2 in C Minor Op. 18 II.', 
                fileName: 'piano-concerto-no-2-in-c-minor-op-18-ii', 
                recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie',
                movementOrWorkName: 'Adagio sostenuto' 
            },
            { 
                name: 'Piano Concerto No. 2 in C Minor Op. 18 III.', 
                fileName: 'piano-concerto-no-2-in-c-minor-op-18-iii', 
                recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie',
                movementOrWorkName: 'Allegro scherzando'
            },
            { 
                name: 'Piano Concerto No. 2 in C Minor Op. 18 II.', 
                fileName: 'piano-concerto-no-2-in-c-minor-op-18-ii-arr-for-cello-and-orchestra', 
                recordingMusician: 'Stjepan Hauser, London Symphony Orchestra',
                movementOrWorkName: 'Adagio sostenuto',
                arrangedFor: 'Cello and Orchestra',
                arrangement: 'Unknown' 
            },
            { 
                name: 'Piano Concerto No. 3 in D Minor Op. 30 I.', 
                fileName: 'piano-concerto-no-3-in-d-minor-op-30-i', 
                recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie',
                movementOrWorkName: 'Allegro ma non tanto'
            },
            { 
                name: 'Piano Concerto No. 3 in D Minor Op. 30 II.', 
                fileName: 'piano-concerto-no-3-in-d-minor-op-30-ii', 
                recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie',
                movementOrWorkName: 'Intermezzo'
            },
            { 
                name: 'Piano Concerto No. 3 in D Minor Op. 30 III.', 
                fileName: 'piano-concerto-no-3-in-d-minor-op-30-iii', 
                recordingMusician: 'Anna Fedorova, Nordwestdeutsche Philharmonie',
                movementOrWorkName: 'Finale'
            },
            { 
                name: 'Six Moments Musicuax Op. 16 No. 4', 
                fileName: 'six-moments-musicaux-op-16-no-4', 
                recordingMusician: 'Nikolai Lugansky',
                movementOrWorkName: 'Presto, E Minor',
                translation: 'Six Musical Moments'
            },
            { 
                name: 'Morceaux de Fantaisie Op. 3 No. 1', 
                fileName: 'morceaux-de-fantaisie-fantasy-pieces-op-3-no-1', 
                recordingMusician: 'Luke Faulkner',
                movementOrWorkName: 'Elegie in E-Flat Minor',
                translation: 'Fantasy Pieces'
            },
            { 
                name: 'Morceaux de Fantaisie Op. 3 No. 1', 
                fileName: 'morceaux-de-fantaisie-fantasy-pieces-op-3-no-1-arr-for-cello-and-piano', 
                recordingMusician: 'Isata Kanneh-Mason (Piano), Sheku Kanneh-Mason (Cello)',
                movementOrWorkName: 'Elegie in E-Flat Minor',
                translation: 'Fantasy Pieces',
                arrangedFor: 'Cello and Piano',
                arrangement: 'Alexander Vlasov' 
            },
            { 
                name: 'Morceaux de Fantaisie Op. 3 No. 2', 
                fileName: 'morceaux-de-fantaisie-fantasy-pieces-op-3-no-2', 
                recordingMusician: 'Nikolai Lugansky',
                movementOrWorkName: 'Prelude in C-Sharp Minor',
                translation: 'Fantasy Pieces'
            },
            { 
                name: '14 Romances Op. 34 No. 14', 
                fileName: '14-romances-op-34-no-14-arr-for-cello-and-orchestra', 
                recordingMusician: 'Han-Na Chang, Philharmonia Orchestra',
                movementOrWorkName: 'Vocalise',
                arrangedFor: 'Cello and Orchestra',
                arrangement: 'Chris Hazell' 
            },
            { 
                name: 'Cello Sonata in G Minor Op. 19 III.', 
                fileName: 'cello-sonata-in-g-minor-op-19-iii', 
                recordingMusician: 'Marie-Ève Scarfone (Piano), Stéphane Tétreault (Cello)',
                movementOrWorkName: 'Andante'
            },
            { 
                name: 'Isle of the Dead Op. 29', 
                fileName: 'isle-of-the-dead-op-29', 
                recordingMusician: 'Royal Stockholm Philharmonic Orchestra' 
            }
        ]
    },
    {
        id: 'beethoven',
        name: 'Beethoven',
        songs: [
            { 
                name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 I.', 
                fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-i', 
                recordingMusician: 'Unknown',
                nickname: 'Moonlight Sonata 1st Movement',
                movementOrWorkName: 'Adagio sostenuto'
            },
            { 
                name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 II.', 
                fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-ii', 
                recordingMusician: 'Unknown',
                nickname: 'Moonlight Sonata 2nd Movement',
                movementOrWorkName: 'Allegretto'
            },
            { 
                name: 'Piano Sonata No. 14 in C-Sharp Minor Op. 27 No. 2 III.', 
                fileName: 'piano-sonata-no-14-in-c-charp-minor-op-27-no-2-iii', 
                recordingMusician: 'Unknown',
                nickname: 'Moonlight Sonata 3rd Movement',
                movementOrWorkName: 'Presto agitato'
            },
            { 
                name: 'Piano Sonata No. 8 in C Minor Op. 13 I.', 
                fileName: 'piano-sonata-no-8-in-c-minor-op-13-i', 
                recordingMusician: 'Kassia',
                nickname: 'Sonata Pathétique 1st Movement',
                movementOrWorkName: 'Grave - Allegro di molto e con brio'
            },
            { 
                name: 'Piano Sonata No. 8 in C Minor Op. 13 II.', 
                fileName: 'piano-sonata-no-8-in-c-minor-op-13-ii', 
                recordingMusician: 'Kassia',
                nickname: 'Sonata Pathétique 2nd Movement',
                movementOrWorkName: 'Adagio cantabile'
            },
            { 
                name: 'Piano Sonata No. 8 in C Minor Op. 13 III.', 
                fileName: 'piano-sonata-no-8-in-c-minor-op-13-iii', 
                recordingMusician: 'Kassia',
                nickname: 'Sonata Pathétique 3rd Movement',
                movementOrWorkName: 'Rondo: Allegro'
            },
            { 
                name: 'Symphony No. 5 in C Minor Op. 67 I.', 
                fileName: 'symphony-no-5-in-c-minor-op-67-i', 
                recordingMusician: 'Berlin Philharmonic Orchestra',
                movementOrWorkName: 'Allegro con brio'
            },
            { 
                name: `Symphony No. 9 in D Minor Op. 125 IV.`, 
                fileName: 'symphony-no-9-in-d-minor-op-125-iv', 
                recordingMusician: 'London Symphony Orchestra',
                movementOrWorkName: `Finale "Ode to Joy"`
            }
        ]
    },
    {
        id: 'mozart',
        name: 'Mozart',
        songs: [
            { 
                name: 'Fantasia No. 3 in D Minor K. 397 (385g)', 
                fileName: 'fantasia-no-3-in-d-minor-k-397-385g', 
                recordingMusician: 'Kassia' 
            },
            { 
                name: 'Serenade No. 10 for Winds in B-Flat Major K. 361 (370a) III.', 
                fileName: 'serenade-no-10-for-winds-in-b-flat-major-k-361-370a-iii', 
                recordingMusician: 'Academy of St. Martin in the Fields Orchestra',
                movementOrWorkName: 'Adagio. Andante'
            },
            { 
                name: 'Serenade No. 10 for Winds in B-Flat Major K. 361 (370a) VII.', 
                fileName: 'serenade-no-10-for-winds-in-b-flat-major-k-361-370a-vii', 
                recordingMusician: 'Orpheus Chamber Orchestra',
                movementOrWorkName: 'Finale. Molto allegro'
            },
            { 
                name: 'Serenade No. 13 for Strings in G Major K. 525 I.', 
                fileName: 'serenade-no-13-for-strings-in-g-major-k-525-i', 
                recordingMusician: 'Academy of St. Martin in the Fields Orchestra',
                movementOrWorkName: 'Allegro',
                nickname: 'Eine kleine Nachtmusik',
                translation: 'A Little Night Music',
                
            },
            { 
                name: 'The Marriage of Figaro K. 492', 
                fileName: 'the-marriage-of-figaro-k-492-overture', 
                recordingMusician: 'Berlin Philharmonic Orchestra',
                movementOrWorkName: 'Overture'
            },
            { 
                name: 'Requiem in D Minor K. 626 I.', 
                fileName: 'requiem-in-d-minor-k-626-i-introitus-requiem-aeternam', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Introitus - Requiem aeternam'
            },
            { 
                name: 'Requiem in D Minor K. 626 II.', 
                fileName: 'requiem-in-d-minor-k-626-ii-kyrie', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Kyrie'
            },
            { 
                name: 'Requiem in D Minor K. 626 III.', 
                fileName: 'requiem-in-d-minor-k-626-iii-sequentia-dies-irae', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Sequentia - Dies irae'
            },
            { 
                name: 'Requiem in D Minor K. 626 III.', 
                fileName: 'requiem-in-d-minor-k-626-iii-sequentia-tuba-mirum', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Sequentia - Tuba mirum'
            },
            { 
                name: 'Requiem in D Minor K. 626 III.', 
                fileName: 'requiem-in-d-minor-k-626-iii-sequentia-rex-tremendae', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Sequentia - Rex tremendae'
            },
            { 
                name: 'Requiem in D Minor K. 626 III.', 
                fileName: 'requiem-in-d-minor-k-626-iii-sequentia-recordare', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Sequentia - Recordare'
            },
            { 
                name: 'Requiem in D Minor K. 626 III.', 
                fileName: 'requiem-in-d-minor-k-626-iii-sequentia-confutatis', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Sequentia - Confutatis'
            },
            { 
                name: 'Requiem in D Minor K. 626 III.', 
                fileName: 'requiem-in-d-minor-k-626-iii-sequentia-lacrimosa', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Sequentia - Lacrimosa'
            },
            { 
                name: 'Requiem in D Minor K. 626 IV.', 
                fileName: 'requiem-in-d-minor-k-626-iv-offertorium-domine-jesu', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Offertorium - Domine Jesu'
            },
            { 
                name: 'Requiem in D Minor K. 626 IV.', 
                fileName: 'requiem-in-d-minor-k-626-iv-offertorium-hostias', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Offertorium - Hostias'
            },
            { 
                name: 'Requiem in D Minor K. 626 V.', 
                fileName: 'requiem-in-d-minor-k-626-v-sanctus', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Sanctus'
            },
            { 
                name: 'Requiem in D Minor K. 626 VI.', 
                fileName: 'requiem-in-d-minor-k-626-vi-benedictus', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Benedictus'
            },
            { 
                name: 'Requiem in D Minor K. 626 VII.',
                fileName: 'requiem-in-d-minor-k-626-vii-agnus-dei',
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Agnus dei'
            },
            { 
                name: 'Requiem in D Minor K. 626 VIII.', 
                fileName: 'requiem-in-d-minor-k-626-viii-communio-lux-aeterna', 
                recordingMusician: 'Academy of St. Martin in the Fields Choir',
                movementOrWorkName: 'Communio - Lux aeterna'
            },
            { 
                name: 'Requiem in D Minor K. 626 VIII.', 
                fileName: 'requiem-in-d-minor-k-626-viii-communio-cum-sanctus-tuis', 
                recordingMusician: "Choir of King's College, Cambridge",
                movementOrWorkName: 'Communio - Cum sanctus tuis'
            }
        ]
    },
    {
        id: 'bach',
        name: 'Bach',
        songs: [
            { 
                name: 'The Well-Tempered Clavier Book 1: Prelude and Fugue No. 1 in C Major BWV 846 I.', 
                fileName: 'the-well-tempered-clavier-book-1-prelude-and-fugue-no-1-in-c-major-bwv-846-i',
                recordingMusician: 'Sviatoslav Richter',
                movementOrWorkName: 'Prelude',
            },
            { 
                name: 'The Well-Tempered Clavier Book 1: Prelude and Fugue No. 1 in C Major BWV 846 II.', 
                fileName: 'the-well-tempered-clavier-book-1-prelude-and-fugue-no-1-in-c-major-bwv-846-ii',
                recordingMusician: 'Sviatoslav Richter',
                movementOrWorkName: 'Fugue'
            },
            { 
                name: 'Orchestral Suite No. 3 in D Major BWV 1068 II.', 
                fileName: 'orchestral-suite-no-3-in-d-major-bwv-1068-ii-arr-for-air-on-the-g-string', 
                recordingMusician: 'Emiri Miyamoto (Violin), Takashi Sato (Piano)',
                movementOrWorkName: 'Air (Air on the G String arrangement)',
                arrangedFor: 'Violin and Piano',
                arrangement: 'August Wilhelmj',
            },
            { 
                name: 'Concerto in D Minor BWV 974 II.', 
                fileName: 'concerto-in-d-minor-bwv-974-ii', 
                recordingMusician: 'Khatia Buniatishvili',
                movementOrWorkName: 'Adagio',
                composer: 'Alessandro Marcello' 
            },
            { 
                name: 'Cello Suite No. 1 in G Major BWV 1007 I.', 
                fileName: 'cello-suite-no-1-in-g-major-bwv-1007-i', 
                recordingMusician: 'Yo-Yo Ma',
                movementOrWorkName: 'Prelude' 
            },
            { 
                name: 'Toccata and Fugue in D Minor BWV 565', 
                fileName: 'toccata-and-fugue-in-d-minor-bwv-565', 
                recordingMusician: 'Rousseau' 
            }
        ]
    },
    {
        id: 'schubert',
        name: 'Schubert',
        songs: [
            { 
                name: 'Impromptu Op. 90 No. 3, D. 899', 
                fileName: 'impromptu-op-90-no-3-d-899', 
                recordingMusician: 'Olga Jegunova',
                movementOrWorkName: 'Andante, G-Flat Major'
            },
            { 
                name: 'Piano Trio No. 2 in E-Flat Major Op. 100, D. 929 II.', 
                fileName: 'piano-trio-no-2-in-e-flat-major-op-100-d-929-ii', 
                recordingMusician: 'Howard Shelley (Piano), Raphael Wallfisch (Cello), Ralph Holmes (Violin)',
                movementOrWorkName: 'Andante con moto'
            },
            { 
                name: 'Ständchen D. 889', 
                fileName: 'standchen-d-889', 
                recordingMusician: 'Unknown',
                translation: 'Serenade'
            },
            { 
                name: 'String Quartet No. 14 in D Minor D. 810', 
                fileName: 'string-quartet-no-14-in-d-minor-d-810-ii', 
                recordingMusician: 'Emerson String Quartet',
                nickname: 'Death and the Maiden 2nd Movement',
                movementOrWorkName: 'Andante con moto'
            }
        ]
    },
    {
        id: 'debussy',
        name: 'Debussy',
        songs: [
            { 
                name: 'Suite bergamasque L2. 82 III.', 
                fileName: 'suite-bergamasque-l2-82-iii', 
                recordingMusician: 'Rousseau',
                movementOrWorkName: 'Clair de lune',
                translation: 'Moonlight'
            },
            { 
                name: 'Deux arabesques L2. 74 No. 1', 
                fileName: 'deux-arabesques-l2-74-no-1', 
                recordingMusician: 'Rousseau',
                movementOrWorkName: 'Première Arabesque',
                translation: 'First Arabesque'

            },
            { 
                name: 'Rêverie L2. 77', 
                fileName: 'reverie-l2-77', 
                recordingMusician: 'Rousseau' 
            },
            { 
                name: 'Préludes Book 1 L2. 125 VIII.', 
                fileName: 'preludes-book-1-l2-125-viii', 
                recordingMusician: 'Jacques Rouvier',
                movementOrWorkName: 'La fille aux cheveux de lin',
                translation: 'The Girl with the Flaxen Hair'
            }
        ]
    },
    {
        id: 'satie',
        name: 'Satie',
        songs: [
            { 
                name: 'Gymnopédie No. 1', 
                fileName: 'gymnopedie-no-1', 
                recordingMusician: 'Unknown',
                movementOrWorkName: 'Lent et douloureux'
            },
            { 
                name: 'Gymnopédie No. 2', 
                fileName: 'gymnopedie-no-2', 
                recordingMusician: 'Unknown',
                movementOrWorkName: 'Lent et triste'
            },
            { 
                name: 'Gymnopédie No. 3', 
                fileName: 'gymnopedie-no-3', 
                recordingMusician: 'Unknown',
                movementOrWorkName: 'Lent et grave'
            },
            { 
                name: 'Gnossienne No. 1', 
                fileName: 'gnossienne-no-1', 
                recordingMusician: 'Anne Queffélec',
                movementOrWorkName: 'Lent'
            },
            { 
                name: 'Gnossienne No. 2', 
                fileName: 'gnossienne-no-2', 
                recordingMusician: 'Anne Queffélec',
                movementOrWorkName: 'Avec étonnement'
            },
            { 
                name: 'Gnossienne No. 3', 
                fileName: 'gnossienne-no-3', 
                recordingMusician: 'Anne Queffélec',
                movementOrWorkName: 'Lent'
            },
            { 
                name: 'Gnossienne No. 4', 
                fileName: 'gnossienne-no-4', 
                recordingMusician: 'Anne Queffélec',
                movementOrWorkName: 'Lent'
            },
            { 
                name: 'Gnossienne No. 5', 
                fileName: 'gnossienne-no-5', 
                recordingMusician: 'Anne Queffélec',
                movementOrWorkName: 'Modéré'
            },
            { 
                name: 'Gnossienne No. 6', 
                fileName: 'gnossienne-no-6', 
                recordingMusician: 'Anne Queffélec',
                movementOrWorkName: 'Avec conviction et avec une tristesse rigoureuse'
            },
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
            { 
                name: 'Cello Concerto in E Minor Op. 85 I.', 
                fileName: 'cello-concerto-in-e-minor-op-85-i', 
                recordingMusician: 'Sol Gabetta, Danish National Symphony Orchestra',
                movementOrWorkName: 'Adagio - Moderato'
            },
            { 
                name: 'Cello Concerto in E Minor Op. 85 II.', 
                fileName: 'cello-concerto-in-e-minor-op-85-ii', 
                recordingMusician: 'Sol Gabetta, Danish National Symphony Orchestra',
                movementOrWorkName: 'Lento - Allegro molto'
            },
            { 
                name: 'Cello Concerto in E Minor Op. 85 III.', 
                fileName: 'cello-concerto-in-e-minor-op-85-iii', 
                recordingMusician: 'Sol Gabetta, Danish National Symphony Orchestra',
                movementOrWorkName: 'Adagio'
            },
            { 
                name: 'Cello Concerto in E Minor Op. 85 IV.', 
                fileName: 'cello-concerto-in-e-minor-op-85-iv', 
                recordingMusician: 'Sol Gabetta, Danish National Symphony Orchestra',
                movementOrWorkName: 'Allegro - Moderato - Allegro, ma non-troppo - Poco più lento - Adagio'
            }
        ]
    },
    {
        id: 'saint-saens',
        name: 'Saint-Saëns',
        songs: [
            { 
                name: 'The Carnival of the Animals XIII.', 
                fileName: 'the-carnival-of-the-animals-xiii', 
                recordingMusician: 'Stjepan Hauser, Zagreb Philharmonic Orchestra',
                movementOrWorkName: 'Le cygne',
                translation: 'The Swan'
            },
            { 
                name: 'Cello Concerto No. 1 in A Minor Op. 33 I. and III.', 
                fileName: 'cello-concerto-no-1-in-a-minor-op-33-i-and-iii', 
                recordingMusician: 'Unknown',
                movementOrWorkName: 'Excerpt'
            }
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
        id: 'dvorak',
        name: 'Dvořák',
        songs: [
            { 
                name: 'Symphony No. 9 in E Minor Op. 95 B. 178 II.', 
                fileName: 'symphony-no-9-in-e-minor-op-95-b-178-ii', 
                recordingMusician: 'Berlin Philharmonic Orchestra',
                nickname: 'From the New World 2nd Movement',
                movementOrWorkName: 'Largo'
            },
        ]
    },
    {
        id: 'mascagni',
        name: 'Mascagni',
        songs: [
            { 
                name: 'Cavalleria rusticana: Intermezzo sinfonico', 
                fileName: 'cavalleria-rusticana-intermezzo-sinfonico', 
                recordingMusician: 'Orchestra del Teatro alla Scala di Milano',
                translation: 'Symphonic Interlude from the opera Rustic Chivalry'
            }
        ]
    },
    {
        id: 'massenet',
        name: 'Massenet',
        songs: [
            { 
                name: 'Thaïs: Méditation', 
                fileName: 'thais-meditation', 
                recordingMusician: 'Anne-Sophie Bertrand (Harp), Renaud Capuçon (Violin)',
                translation: 'Meditation from the opera Thaïs'
            }
        ]
    },
    {
        id: 'shostakovich',
        name: 'Shostakovich',
        songs: [
            { 
                name: 'Suite for Variety Orchestra No. 1 VII.', 
                fileName: 'suite-for-varity-orchestra-no-1-vii', 
                recordingMusician: 'Abbraccio Classical',
                movementOrWorkName: 'Waltz No. 2',
                arrangement: 'Levon Atovmyan'
            }
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
        id: 'tchaikovsky',
        name: 'Tchaikovsky',
        songs: [
            { 
                name: 'Swan Lake Op. 20 I.', 
                fileName: 'swan-lake-op-20-i', 
                recordingMusician: 'Royal Philharmonic Orchestra',
                movementOrWorkName: 'Enchanted Lake'
            },
            { 
                name: 'Swan Lake Op. 20 XXI.', 
                fileName: 'swan-lake-op-20-xxi', 
                recordingMusician: 'Royal Philharmonic Orchestra',
                movementOrWorkName: 'Spanish Dance'
            },
            { 
                name: 'The Nutcracker Op. 71', 
                fileName: 'the-nutcracker-op-71', 
                recordingMusician: 'London Symphony Orchestra',
                movementOrWorkName: 'Pas de Deux',
                translation: 'Step of Two'
            },
            { 
                name: 'The Nutcracker Suite Op. 71a No. 2a', 
                fileName: 'the-nutcracker-suite-op-71a-no-2a', 
                recordingMusician: 'Metamorphose String Orchestra',
                movementOrWorkName: 'March of the Toy Soldiers'
            },
            { 
                name: 'The Nutcracker Suite Op. 71a No. 2b', 
                fileName: 'the-nutcracker-suite-op-71a-no-2b', 
                recordingMusician: 'Metamorphose String Orchestra',
                movementOrWorkName: 'Dance of the Sugar Plum Fairy'
            },
            { 
                name: 'The Nutcracker Suite Op. 71a No. 2c', 
                fileName: 'the-nutcracker-suite-op-71a-no-2c', 
                recordingMusician: 'Metamorphose String Orchestra',
                movementOrWorkName: 'Russian Dance'
            },
            { 
                name: 'The Nutcracker Suite Op. 71a No. 2f', 
                fileName: 'the-nutcracker-suite-op-71a-no-2f', 
                recordingMusician: 'Metamorphose String Orchestra',
                movementOrWorkName: 'Dance of the Mirlitons'
            },
            { 
                name: 'The Nutcracker Suite Op. 71a No. 3', 
                fileName: 'the-nutcracker-suite-op-71a-no-3', 
                recordingMusician: 'London Symphony Orchestra',
                movementOrWorkName: 'Waltz of the Flowers'
            },
            { name: '1812 Overture Op. 49', fileName: '1812-overture-op-49', recordingMusician: 'St. Petersburg Chamber Choir, Leningrad Military Orchestra' }
        ]
    },
    {
        id: 'brahms',
        name: 'Brahms',
        songs: [
            { name: 'Hungarian Dance No. 1 in G Minor WoO 1', fileName: 'hungarian-dance-no-1-in-g-minor-woo-1', recordingMusician: 'Vienna Philharmonic Orchestra' },
            { name: 'Hungarian Dance No. 5 in G Minor WoO 1', fileName: 'hungarian-dance-no-5-in-g-minor-woo-1', recordingMusician: 'Vienna Philharmonic Orchestra' },
            { 
                name: 'Symphony No. 3 in F Major Op. 90 III.', 
                fileName: 'symphony-no-3-in-f-major-op-90-iii', 
                recordingMusician: 'Berlin Philharmonic Orchestra',
                movementOrWorkName: 'Poco allegretto'
            }
        ]
    },
    {
        id: 'verdi',
        name: 'Verdi',
        songs: [
            { 
                name: 'Messa da Requiem II.', 
                fileName: 'messa-da-requiem-ii-dies-irae-dies-irae', 
                recordingMusician: 'Frankfurt Radio Symphony Orchestra',
                movementOrWorkName: 'Dies irae - Dies irae'
            }
        ]
    },
    {
        id: 'mussorgsky',
        name: 'Mussorgsky',
        songs: [
            { 
                name: 'Night on Bald Mountain', 
                fileName: 'night-on-bald-mountain', 
                recordingMusician: 'New York Philharmonic Orchestra',
                arrangement: 'Rimsky-Korsakov' 
            },
            { 
                name: 'Pictures at an Exhibition No. 2', 
                fileName: 'pictures-at-an-exhibition-no-2', 
                recordingMusician: 'Khatia Buniatishvili',
                movementOrWorkName: 'Il Vecchio Castello',
                translation: 'The Old Castle'
            },
            { 
                name: 'Pictures at an Exhibition No. 2', 
                fileName: 'pictures-at-an-exhibition-no-2-arr-for-orchestra', 
                recordingMusician: 'Metamorphose String Orchestra',
                movementOrWorkName: 'Il Vecchio Castello',
                translation: 'The Old Castle',
                arrangedFor: 'Orchestra',
                arrangement: 'Ravel' 
            }
        ]
    },
    {
        id: 'grieg',
        name: 'Grieg',
        songs: [
            { 
                name: 'Peer Gynt Suite No. 1 Op. 46 I.', 
                fileName: 'peer-gynt-suite-no-1-op-46-i', 
                recordingMusician: 'Berlin Philharmonic Orchestra',
                movementOrWorkName: 'Morning Mood'
            },
            { 
                name: 'Peer Gynt Suite No. 1 Op. 46 IV.', 
                fileName: 'peer-gynt-suite-no-1-op-46-iv', 
                recordingMusician: 'Kassia',
                movementOrWorkName: 'In the Hall of the Mountain King'
            },
            { 
                name: 'Holberg Suite Op. 40 IV.', 
                fileName: 'holberg-suite-op-40-iv', 
                recordingMusician: 'Peter Jablonski',
                movementOrWorkName: 'Air'
            }
        ]
    },
    {
        id: 'handel',
        name: 'Handel',
        songs: [
            { 
                name: 'Suite No. 1 in B-Flat Major HWV 434 IV.', 
                fileName: 'suite-no-1-in-b-flat-major-hwv-434-iv-arr-for-piano', 
                recordingMusician: 'Khatia Buniatishvili',
                movementOrWorkName: 'Menuet',
                arrangedFor: 'Piano',
                arrangement: 'Wilhelm Kempff'
            },
        ]
    },
    {
        id: 'schumann',
        name: 'Schumann',
        songs: [
            { 
                name: 'Kinderszenen Op. 15 No. 7', 
                fileName: 'kinderszenen-op-15-no-7', 
                recordingMusician: 'Kassia',
                movementOrWorkName: 'Träumerei',
                translation: 'Scenes from Childhood - Dreaming'
            },
        ]
    },
    {
        id: 'respighi',
        name: 'Respighi',
        songs: [
            { 
                name: 'Six Pieces for the Piano P 044 No. 3', 
                fileName: 'six-pieces-for-the-piano-p-044-no-3', 
                recordingMusician: 'Gabriele Leporatti',
                movementOrWorkName: 'Notturno in G-Flat Major'
            },
        ]
    },
    {
        id: 'mendelssohn',
        name: 'Mendelssohn',
        songs: [
            { 
                name: 'Songs Without Words Book 2: Op. 30 No. 6 in F-Sharp Minor', 
                fileName: 'songs-without-words-book-2-op-30-no-6-in-f-sharp-minor', 
                recordingMusician: 'Vadim Chaimovich',
                movementOrWorkName: 'Allegretto tranquillo: Venetianisches Gondellied',
                translation: 'Venetian Boat Song'
            },
        ]
    },
    {
        id: 'bruckner',
        name: 'Bruckner',
        songs: [
            { 
                name: 'Stille Betrachtung an einem Herbstabend in F-Sharp Minor WAB 123', 
                fileName: 'stille-betrachtung-an-einem-herbstabend-in-f-sharp-minor-wab-123', 
                recordingMusician: 'Vadim Chaimovich',
                translation: 'Quiet Meditation on an Autumn Evening'
            },
        ]
    },
    {
        id: 'gluck',
        name: 'Gluck',
        songs: [
            { 
                name: 'Orfeo ed Euridice Wq. 30', 
                fileName: 'orfeo-ed-euridice-wq-30-melody-arr-for-piano', 
                recordingMusician: 'Vadim Chaimovich',
                movementOrWorkName: 'Melody',
                translation: 'Orpheus and Eurydice',
                arrangedFor: 'Piano',
                arrangement: 'Alexander Siloti' 
            },
        ]
    },
    {
        id: 'bruch',
        name: 'Bruch',
        songs: [
            { 
                name: 'Kol Nidre Op. 47', 
                fileName: 'kol-nidre-op-47', 
                recordingMusician: 'Mischa Maisky, Frankfurt Radio Symphony Orchestra' 
            }
        ]
    },
    {
        id: 'gruber',
        name: 'Gruber',
        songs: [
            { 
                name: 'Silent Night', 
                fileName: 'silent-night-arr-for-piano', 
                recordingMusician: 'Rousseau',
                arrangedFor: 'Piano',
                arrangement: 'Unknown' 
            },
            { 
                name: 'Silent Night', 
                fileName: 'silent-night-arr-for-cello', 
                recordingMusician: 'Future Cello',
                arrangedFor: 'Cello',
                arrangement: 'Unknown' 
            }
        ]
    },
    {
        id: 'arvo-part',
        name: 'Arvo Pärt',
        songs: [
            { 
                name: 'Spiegel im Spiegel', 
                fileName: 'spiegel-im-spiegel', 
                recordingMusician: 'Yoshika Masuda (Cello), Van-Anh Nguyen (Piano)',
                translation: 'Mirror in the Mirror',
                arrangedFor: 'Cello and Piano'
            
            }
        ]
    },
    {
        id: 'hans-zimmer',
        name: 'Hans Zimmer',
        songs: [
            { name: 'Eptescius', fileName: 'eptescius', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Myotis', fileName: 'myotis', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Barbastella', fileName: 'barbastella', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Molossus', fileName: 'molossus', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Corynorhinus', fileName: 'corynorhinus', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Lasiurus', fileName: 'lasiurus', soundtrack: 'Batman Begins', contributors: 'James Newton Howard' },
            { name: 'Agent of Chaos', fileName: 'agent-of-chaos', soundtrack: 'The Dark Knight', contributors: 'James Newton Howard' },
            { name: 'A Dark Knight', fileName: 'a-dark-knight', soundtrack: 'The Dark Knight', contributors: 'James Newton Howard' },
            { name: 'A Watchful Guardian', fileName: 'a-watchful-guardian', soundtrack: 'The Dark Knight', contributors: 'James Newton Howard' },
            { name: "Gotham's Reckoning", fileName: 'gothams-reckoning', soundtrack: 'The Dark Knight Rises' },
            { name: 'Born in Darkness', fileName: 'born-in-darkness', soundtrack: 'The Dark Knight Rises' },
            { name: 'Nothing Out There', fileName: 'nothing-out-there', soundtrack: 'The Dark Knight Rises' },
            { name: 'Why Do We Fall?', fileName: 'why-do-we-fall', soundtrack: 'The Dark Knight Rises' },
            { name: 'Imagine the Fire', fileName: 'imagine-the-fire', soundtrack: 'The Dark Knight Rises' },
            { name: 'Necessary Evil', fileName: 'necessary-evil', soundtrack: 'The Dark Knight Rises' },
            { name: 'Rise', fileName: 'rise', soundtrack: 'The Dark Knight Rises' },
            { name: 'The End', fileName: 'the-end', soundtrack: 'The Dark Knight Rises' },
            { name: 'Final Ascent', fileName: 'final-ascent', soundtrack: 'No Time to Die' },
            { name: 'The Black Pearl', fileName: 'the-black-pearl', soundtrack: "Pirates of the Caribbean: The Curse of the Black Pearl", contributors: 'Klaus Badelt' },
            { name: 'Will and Elizabeth', fileName: 'will-and-elizabeth', soundtrack: "Pirates of the Caribbean: The Curse of the Black Pearl", contributors: 'Klaus Badelt' },
            { name: "He's a Pirate", fileName: 'hes-a-pirate', soundtrack: "Pirates of the Caribbean: The Curse of the Black Pearl", contributors: 'Klaus Badelt' },
            { name: 'Jack Sparrow', fileName: 'jack-sparrow', soundtrack: "Pirates of the Caribbean: Dead Man's Chest" },
            { name: 'Davy Jones', fileName: 'davy-jones', soundtrack: "Pirates of the Caribbean: Dead Man's Chest" },
            { name: 'Wheel of Fortune', fileName: 'wheel-of-fortune', soundtrack: "Pirates of the Caribbean: Dead Man's Chest" },
            { name: "At Wit's End", fileName: 'at-wits-end', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'Parlay', fileName: 'parlay', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'One Day', fileName: 'one-day', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'Marry Me (Unreleased Track)', fileName: 'marry-me-unreleased-track', soundtrack: "Pirates of the Caribbean: At World's End" },
            { name: 'Time', fileName: 'time', soundtrack: 'Inception' },
            { name: 'Projections', fileName: 'projections', soundtrack: 'Inception' },
            { name: 'Mountains', fileName: 'mountains', soundtrack: 'Interstellar' },
            { name: 'First Step', fileName: 'first-step', soundtrack: 'Interstellar' },
            { name: 'No Time for Caution', fileName: 'no-time-for-caution', soundtrack: 'Interstellar' },
            { name: 'Goodbye My Son', fileName: 'goodbye-my-son', soundtrack: 'Man of Steel' },
            { name: 'Is She with You?', fileName: 'is-she-with-you', specialCharactersName: 'Is She with You?', soundtrack: 'Batman v Superman' },
            { name: 'Discombobulate', fileName: 'discombobulate', soundtrack: 'Sherlock Holmes' },
            { name: 'Not in Blood, But in Bond', fileName: 'not-in-blood-but-in-bond', soundtrack: 'Sherlock Holmes' },
            { name: 'Ah, Putrefaction', fileName: 'ah-putrefaction', soundtrack: 'Sherlock Holmes' },
            { name: 'A Way of Life', fileName: 'a-way-of-life', soundtrack: 'The Last Samurai' },
            { name: 'A Small Measure of Peace', fileName: 'a-small-measure-of-peace', soundtrack: 'The Last Samurai' },
            { name: 'This Land', fileName: 'this-land', soundtrack: 'The Lion King' },
            { name: '...To Die For', fileName: 'to-die-for', soundtrack: 'The Lion King' },
            { name: 'Under the Stars', fileName: 'under-the-stars', soundtrack: 'The Lion King' },
            { name: 'King of Pride Rock', fileName: 'king-of-pride-rock', soundtrack: 'The Lion King' },
            { name: 'Elysium', fileName: 'elysium', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Honor Him', fileName: 'honor-him', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Now We Are Free', fileName: 'now-we-are-free', soundtrack: 'Gladiator', contributors: 'Klaus Badelt, Lisa Gerrard' },
            { name: 'Now We Are Free', fileName: 'now-we-are-free-arr-for-cello-and-orchestra', soundtrack: 'Gladiator', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra', arrangedFor: 'Cello and Orchestra' }
        ]
    },
    {
        id: 'james-newton-howard',
        name: 'James Newton Howard',
        songs: [
            { name: "Rue's Farewell", fileName: 'rues-farewell', soundtrack: 'The Hunger Games' },
            { name: 'Tenuous Winners/Returning Home', fileName: 'tenuous-winners-returning-home', soundtrack: 'The Hunger Games' },
            { name: 'The Tour', fileName: 'the-tour', soundtrack: 'The Hunger Games: Catching Fire' },
            { name: 'Katniss Is Chosen', fileName: 'katniss-is-chosen', soundtrack: 'The Hunger Games: Catching Fire' },
            { name: 'District 8 Hospital', fileName: 'district-8-hospital', soundtrack: 'The Hunger Games: Mockingjay Part 1' },
            { name: "They're Back", fileName: 'theyre-back', soundtrack: 'The Hunger Games: Mockingjay Part 1' },
            { name: 'Send Me to District 2', fileName: 'send-me-to-district-2', soundtrack: 'The Hunger Games: Mockingjay Part 2' },
            { name: "Snow's Execution", fileName: 'snows-execution', soundtrack: 'The Hunger Games: Mockingjay Part 2' },
            { name: 'Primrose', fileName: 'primrose', soundtrack: 'The Hunger Games: Mockingjay Part 2' },
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
            { name: 'Possession', fileName: 'possession', soundtrack: 'Harry Potter and the Order of the Phoenix' },
            { name: 'Death of Sirius', fileName: 'death-of-sirius', soundtrack: 'Harry Potter and the Order of the Phoenix' },
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
            { name: "Lily's Theme", fileName: 'lilys-theme', soundtrack: 'Harry Potter and the Deathly Hallows: Part 2' },
            { name: "Snape's Demise", fileName: 'snapes-demise', soundtrack: 'Harry Potter and the Deathly Hallows: Part 2' },
            { name: 'Severus and Lily', fileName: 'severus-and-lily', soundtrack: 'Harry Potter and the Deathly Hallows: Part 2' }
        ]
    },
    {
        id: 'howard-shore',
        name: 'Howard Shore',
        songs: [
            { name: 'Edoras', fileName: 'edoras', soundtrack: 'The Lord of the Rings: The Two Towers' },
            { name: 'Théoden King/The Funeral of Théodred', fileName: 'theoden-king-the-funeral-of-theodred', soundtrack: 'The Lord of the Rings: The Two Towers', contributors: 'Miranda Otto' },
        ]
    },
    {
        id: 'jesper-kyd',
        name: 'Jesper Kyd',
        songs: [
            { name: 'Earth', fileName: 'earth', soundtrack: "Assassin's Creed II" },
            { name: "Ezio's Family", fileName: 'ezios-family', soundtrack: "Assassin's Creed II" },
            { name: 'Tour of Venice', fileName: 'tour-of-venice', soundtrack: "Assassin's Creed II" },
            { name: 'Flight Over Venice 1', fileName: 'flight-over-venice-1', soundtrack: "Assassin's Creed II" },
            { name: 'Home of the Brotherhood', fileName: 'home-of-the-brotherhood', soundtrack: "Assassin's Creed II" },
            { name: 'City of Rome', fileName: 'city-of-rome', soundtrack: "Assassin's Creed: Brotherhood" },
            { name: 'Echoes of the Roman Ruins', fileName: 'echoes-of-the-roman-ruins', soundtrack: "Assassin's Creed: Brotherhood" },
            { name: "Assassin's Creed Theme", fileName: 'assassins-creed-theme', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'Byzantium', fileName: 'byzantium', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: "Suleiman's Grief", fileName: 'suleimans-grief', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'We Talk Together', fileName: 'we-talk-together', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'An Unsubtle Approach', fileName: 'an-unsubtle-approach', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'You Have Earned Your Rest', fileName: 'you-have-earned-your-rest', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'Labored and Lost', fileName: 'labored-and-lost', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'The Hunter', fileName: 'the-hunter', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' },
            { name: 'Chase the Target', fileName: 'chase-the-target', soundtrack: "Assassin's Creed: Revelations", contributors: 'Lorne Balfe' }
        ]
    },
    {
        id: 'lorne-balfe',
        name: 'Lorne Balfe',
        songs: [
            { name: "Assassin's Creed III Main Theme", fileName: 'assassins-creed-iii-main-theme', soundtrack: "Assassin's Creed III" },
            { name: 'An Uncertain Present', fileName: 'an-uncertain-present', soundtrack: "Assassin's Creed III" },
            { name: 'Welcome to Boston', fileName: 'welcome-to-boston', soundtrack: "Assassin's Creed III" },
            { name: "Connor's Life", fileName: 'connors-life', soundtrack: "Assassin's Creed III" },
            { name: 'Trouble in Town', fileName: 'trouble-in-town', soundtrack: "Assassin's Creed III" },
            { name: 'Farewell', fileName: 'farewell', soundtrack: "Assassin's Creed III" },
            { name: 'Homestead', fileName: 'homestead', soundtrack: "Assassin's Creed III" },
            { name: 'Fight Club', fileName: 'fight-club', soundtrack: "Assassin's Creed III" },
            { name: 'Beer and Friends', fileName: 'beer-and-friends', soundtrack: "Assassin's Creed III" },
            { name: 'Breaching the Walls', fileName: 'breaching-the-walls', soundtrack: "Assassin's Creed III" },
            { name: 'Wild Instincts', fileName: 'wild-instincts', soundtrack: "Assassin's Creed III" },
            { name: 'The Ends of the Earth', fileName: 'the-ends-of-the-earth', soundtrack: "Assassin's Creed IV: Black Flag" }
        ]
    },
    {
        id: 'bear-mccreary',
        name: 'Bear McCreary',
        songs: [
            { name: "Rick's Despair", fileName: 'ricks-despair', soundtrack: 'The Walking Dead' },
            { name: 'The Hand', fileName: 'the-hand', soundtrack: 'The Walking Dead' },
            { name: "Carl's Theme", fileName: 'carls-theme', soundtrack: 'The Walking Dead' },
            { name: 'Reconciliation', fileName: 'reconciliation', soundtrack: 'The Walking Dead' },
            { name: 'Coda', fileName: 'coda', soundtrack: 'The Walking Dead' },
            { name: 'The Day Will Come', fileName: 'the-day-will-come', soundtrack: 'The Walking Dead' },
            { name: 'New Journey', fileName: 'new-journey', soundtrack: 'The Walking Dead' },
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
            { name: 'Paradox', fileName: 'paradox' }
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
            { name: "Lord Don't Move That Mountain", fileName: 'lord-dont-move-that-mountain', composer: 'Inez Andrews' }
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
        id: 'lucio-dalla',
        name: 'Lucio Dalla',
        songs: [
            { name: 'Caruso', fileName: 'caruso' },
            { name: 'Caruso', fileName: 'caruso-arr-for-cello-and-orchestra', recordingMusician: 'Stjepan Hauser, London Symphony Orchestra', arrangedFor: 'Cello and Orchestra', arrangement: 'Unknown' }
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
            { name: 'American Pie', fileName: 'american-pie' },
            { name: 'Vincent', fileName: 'vincent' },
            { name: 'Vincent', fileName: 'vincent-arr-for-guitar', recordingMusician: 'Chet Atkins', arrangedFor: 'Guitar', arrangement: 'Chet Atkins' }
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
        id: 'jamie-n-commons',
        name: 'Jamie N Commons',
        songs: [
            { name: 'Lead Me Home', fileName: 'lead-me-home' }
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
        id: 'rodrigo-y-gabriela',
        name: 'Rodrigo y Gabriela',
        songs: [
            { name: 'Diablo Rojo', fileName: 'diablo-rojo' }
        ]
    },
    {
        id: 'steve-vai',
        name: 'Steve Vai',
        songs: [
            { name: 'Tender Surrender', fileName: 'tender-surrender' },
            { name: 'For the Love of God', fileName: 'for-the-love-of-god' }
        ]
    },
    {
        id: 'meshuggah',
        name: 'Meshuggah',
        songs: [
            { name: 'Bleed', fileName: 'bleed' }
        ]
    },
    {
        id: 'slipknot',
        name: 'Slipknot',
        songs: [
            { name: 'Psychosocial', fileName: 'psychosocial' },
            { name: 'Duality', fileName: 'duality' },
            { name: 'Sulfur', fileName: 'sulfur' },
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
        id: 'aerosmith',
        name: 'Aerosmith',
        songs: [
            { name: 'Dream On', fileName: 'dream-on' }
        ]
    },
    {
        id: 'the-beatles',
        name: 'The Beatles',
        songs: [
            { name: 'Twist and Shout', fileName: 'twist-and-shout', composer: 'Phil Medley, Bert Russell' },
            { name: 'Help!', fileName: 'help' },
            { name: 'Yesterday', fileName: 'yesterday' },
            { name: 'Norwegian Wood (This Bird Has Flown)', fileName: 'norwegian-wood-this-bird-has-flown' },
            { name: 'Michelle', fileName: 'michelle' },
            { name: 'Girl', fileName: 'girl' },
            { name: 'In My Life', fileName: 'in-my-life' },
            { name: 'Eleanor Rigby', fileName: 'eleanor-rigby' },
            { name: 'Yellow Submarine', fileName: 'yellow-submarine' },
            { name: 'Good Day Sunshine', fileName: 'good-day-sunshine' },
            { name: 'The Fool on the Hill', fileName: 'the-fool-on-the-hill' },
            { name: 'Strawberry Fields Forever', fileName: 'strawberry-fields-forever' },
            { name: 'Penny Lane', fileName: 'penny-lane' },
            { name: 'All You Need Is Love', fileName: 'all-you-need-is-love' },
            { name: 'Blackbird', fileName: 'blackbird' },
            { name: 'Hey Jude', fileName: 'hey-jude' },
            { name: 'Something', fileName: 'something' },
            { name: 'Here Comes the Sun', fileName: 'here-comes-the-sun' },
            { name: 'Let It Be', fileName: 'let-it-be' },
            { name: 'The Long and Winding Road', fileName: 'the-long-and-winding-road' }
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
        id: 'alice-in-chains',
        name: 'Alice in Chains',
        songs: [
            { name: 'Nutshell', fileName: 'nutshell' }
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
        id: 'dropkick-murphys',
        name: 'Dropkick Murphys',
        songs: [
            { name: "I'm Shipping Up to Boston", fileName: 'im-shipping-up-to-boston' },
            { name: 'Tessie', fileName: 'tessie' }
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
        id: 'muse',
        name: 'Muse',
        songs: [
            { name: 'Uprising', fileName: 'uprising' },
            { name: 'Supermassive Black Hole', fileName: 'supermassive-black-hole' },
            { name: 'Starlight', fileName: 'starlight' }
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
        id: 'augustana',
        name: 'Augustana',
        songs: [
            { name: 'Boston', fileName: 'boston' }
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
        name: 'Naughty by Nature',
        songs: [
            { name: 'Hip Hop Hooray', fileName: 'hip-hop-hooray' }
        ]
    },
    {
        id: 'eminem',
        name: 'Eminem',
        songs: [
            { name: 'Lose Yourself', fileName: 'lose-yourself' },
            { name: 'Till I Collapse', fileName: 'till-i-collapse', contributors: 'Nate Dogg' },
            { name: 'Sing for the Moment', fileName: 'sing-for-the-moment' },
            { name: 'Like Toy Soldiers', fileName: 'like-toy-soldiers' }
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
            { name: 'Where Is the Love?', fileName: 'where-is-the-love' },
            { name: "Let's Get It Started", fileName: 'lets-get-it-started' }
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
        id: 'henry-krinkle',
        name: 'Henry Krinkle',
        songs: [
            { name: 'Stay', fileName: 'stay' }
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
        id: 'carly-comando',
        name: 'Carly Comando',
        songs: [
            { name: 'Everyday', fileName: 'everyday' }
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
        }
    ],
    idx: 0,
    displayTime: 15000,             // time to display the quote
    transitionTime: 2500,           // time where opacity is fading
    opacityChangeIntervalTime: 100  // interval time between 1 opacity change
};




export const writingsArray = [
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
                `You don't hate! Only the unloved hate—the unloved and the unnatural!`,
                `Soldiers! Don't fight for slavery! Fight for liberty!`,
                `In the 17th Chapter of St. Luke it is written: "the Kingdom of God is within Man"—not one man nor a group of men, but in all men!`,
                `In you! You the People have the power!`,
                `The power to create machines! The power to create happiness!`,
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
    }
];