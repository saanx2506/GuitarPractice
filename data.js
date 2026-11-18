const MODULES = [
    // ===== 01 — Musical Foundations =====
    {
      id:1, title:"Musical Foundations", icon:"🎵",
      description:"Notes, rhythm, and the fretboard — the absolute basics.",
      youtube:"guitar beginner lesson notes rhythm fretboard basics",
      exercises:["exWarm1","exWarm2"],
      sections:[
        {h:"What is a beat?", body:`
  <p>The <span class="term" data-def="The steady pulse of music.">beat</span> is the pulse you feel when tapping your foot. <strong>Tempo</strong> = speed in BPM. Beats group into <strong>bars</strong> (4 beats in 4/4 time).</p>
  <div class="example">60 BPM = 1 beat per second
  4/4 time = 4 beats per bar, beat 1 strongest</div>`},
        {h:"Subdivision", body:`
  <p>Each beat splits into eighths (2), <span class="term" data-def="Three notes per beat. Shuffle feel.">triplets</span> (3), or sixteenths (4).</p>`},
        {h:"The 12 notes", body:`
  <p>A B C D E F G — plus sharps/flats = 12 pitches per octave.</p>
  <div class="example">E F F# G G# A A# B C C# D D# E
  0 1 2  3 4  5 6  7 8 9  10 11 12 (frets on low E)</div>`},
        {h:"Whole and half steps", body:`
  <p><span class="term" data-def="Two frets.">Whole tone</span> = 2 frets. <span class="term" data-def="One fret.">Semitone</span> = 1 fret. B–C and E–F are semitones.</p>`},
        {h:"Fretboard map", body:`
  <div class="example">String: open  1   2   3   4   5   6   7   8   9  10  11  12
  E (6th) E    F  F#  G  G#  A  A#  B  C  C#  D  D#  E
  A (5th) A   A#  B   C  C#  D  D#  E  F  F#  G  G#  A
  D (4th) D   D#  E   F  F#  G  G#  A  A#  B  C  C#  D
  G (3rd) G   G#  A  A#  B   C  C#  D  D#  E   F  F#  G
  B (2nd) B   C   C#  D  D#  E   F  F#  G  G#  A  A#  B
  e (1st) E   F  F#  G  G#  A  A#  B  C  C#  D  D#  E</div>`}
      ]
    },
    // ===== 02 — Intervals =====
    {
      id:2, title:"Intervals", icon:"📏",
      description:"Distance between notes — the building blocks of scales, chords and melody.",
      youtube:"guitar intervals lesson major minor perfect ear training",
      exercises:["exIntervals"],
      sections:[
        {h:"What is an interval?", body:`
  <p>Distance between two notes, counted by letter names and measured in semitones.</p>
  <div class="example">C→D = 2nd (2 frets)
  C→E = 3rd (4 frets)
  C→G = 5th (7 frets)
  C→C = octave (12 frets)</div>`},
        {h:"Quality", body:`
  <p><span class="term" data-def="Major, minor, perfect, augmented, diminished.">Quality</span> changes the sound:</p>
  <ul>
    <li>Major 3rd (4 frets) — bright</li>
    <li>Minor 3rd (3 frets) — dark</li>
    <li>Perfect 4th (5 frets) — strong</li>
    <li>Perfect 5th (7 frets) — powerful</li>
  </ul>`},
        {h:"Inversion", body:`
  <p>Flip an interval upside-down: a 3rd becomes a 6th; a 4th becomes a 5th. Major ↔ minor.</p>`},
        {h:"Ear training", body:`
  <p>Practice recognising intervals by ear. Play two notes and name the distance. Start with octaves (easy), then 5ths, then 3rds.</p>`}
      ]
    },
    // ===== 03 — Scales =====
    {
      id:3, title:"Scales", icon:"🎼",
      description:"Major, minor, pentatonic, blues — the melodic vocabulary of music.",
      youtube:"guitar major minor pentatonic blues scale lesson",
      exercises:["exGmajor","exAminor"],
      sections:[
        {h:"Major scale", body:`
  <p>Pattern: <strong>W W H W W W H</strong>.</p>
  <div class="example">G major: G A B C D E F# G
  C major: C D E F G A B C</div>`},
        {h:"Natural minor scale", body:`
  <p>Pattern: <strong>W H W W H W W</strong>. A natural minor: A B C D E F G.</p>`},
        {h:"Minor pentatonic", body:`
  <p>5-note scale: <strong>1 ♭3 4 5 ♭7</strong>. The most-used scale in rock and blues.</p>
  <div class="example">A minor pentatonic: A C D E G</div>`},
        {h:"Blues scale", body:`
  <p>Minor pentatonic + ♭5 (blue note): A C D E♭ E G.</p>`},
        {h:"Major pentatonic", body:`
  <p><strong>1 2 3 5 6</strong>. Brighter, used in country and southern rock. A major pentatonic: A B C# E F#.</p>`}
      ]
    },
    // ===== 04 — Keys & Key Signatures =====
    {
      id:4, title:"Keys & Key Signatures", icon:"🗝️",
      description:"How keys work, the circle of fifths, and relative major/minor.",
      youtube:"music theory key signatures circle of fifths relative keys guitar",
      exercises:["exGmajor"],
      sections:[
        {h:"What is a key?", body:`
  <p>A key = the set of notes a piece centres around. The <span class="term" data-def="The 'home' chord — the I chord.">tonic</span> is the key's centre.</p>`},
        {h:"Key signatures", body:`
  <div class="example">C major: 0 sharps/flats
  G major: 1 sharp (F#)
  D major: 2 sharps (F#, C#)
  F major: 1 flat (B♭)</div>`},
        {h:"Circle of fifths", body:`
  <div class="example">Sharps: C(0) → G(1) → D(2) → A(3) → E(4) → B(5)
  Flats:  C(0) → F(1) → Bb(2) → Eb(3) → Ab(4)</div>
  <p>Each step up a 5th adds one sharp. Each step down a 5th adds one flat.</p>`},
        {h:"Relative major/minor", body:`
  <p>A minor and C major share the same notes. The relative minor is always the 6th degree of the major scale.</p>
  <div class="example">C major ← → A minor
  G major ← → E minor
  D major ← → B minor</div>`}
      ]
    },
    // ===== 05 — Chord Construction =====
    {
      id:5, title:"Chord Construction", icon:"🎹",
      description:"Triads, seventh chords and extended chords — how chords are built.",
      youtube:"guitar chord construction triads seventh chords lesson",
      exercises:["exTriads","ex7ths"],
      sections:[
        {h:"Triads", body:`
  <p>Stack every other scale note: <strong>1–3–5</strong>.</p>
  <div class="example">C major triad = C E G
  C minor triad = C Eb G
  C diminished = C Eb Gb
  C augmented = C E G#</div>`},
        {h:"Seventh chords", body:`
  <p>Add the 7th: <strong>1–3–5–7</strong>.</p>
  <div class="example">G7 (dominant) = G B D F
  Gmaj7 = G B D F#
  Gm7 = G Bb D F</div>`},
        {h:"Extensions", body:`
  <p>Continue stacking: 9ths, 11ths, 13ths. Alterations (♭5, ♯9, ♭13) add colour.</p>`}
      ]
    },
    // ===== 06 — Diatonic Harmony =====
    {
      id:6, title:"Diatonic Harmony", icon:"🎶",
      description:"Chord progressions, Roman numerals, and harmonic function.",
      youtube:"diatonic harmony guitar chord progressions roman numerals",
      exercises:["exHarmonize"],
      sections:[
        {h:"Diatonic chords", body:`
  <p>Build a chord on each scale degree.</p>
  <div class="example">G major: G  Am Bm C  D  Em F#dim
  Numerals: I  ii iii IV V  vi vii°</div>`},
        {h:"Harmonic function", body:`
  <p>Chords fall into three functions:</p>
  <ul>
    <li><strong>Tonic</strong> (I, vi, iii) — home, rest</li>
    <li><strong>Subdominant</strong> (IV, ii) — motion, preparation</li>
    <li><strong>Dominant</strong> (V, vii°) — tension, wants to resolve to I</li>
  </ul>`},
        {h:"Common progressions", body:`
  <div class="example">I–IV–V     (G–C–D)
  I–V–vi–IV  (G–D–Em–C)
  ii–V–I     (Am–D–G, jazz)
  12-bar blues (I7–IV7–V7)</div>`}
      ]
    },
    // ===== 07 — Fretboard Mastery =====
    {
      id:7, title:"Fretboard Mastery", icon:"🗺️",
      description:"CAGED system, arpeggios, and mapping scales across the neck.",
      youtube:"CAGED system guitar arpeggios scale mapping lesson",
      exercises:["exCaged","exTriads"],
      sections:[
        {h:"CAGED system", body:`
  <p>Five movable chord shapes: C, A, G, E, D. Every major chord can be played with any of these five shapes.</p>
  <div class="example">C shape → root on 2nd string
  A shape → root on 5th string
  G shape → root on 6th string
  E shape → root on 6th string
  D shape → root on 4th string</div>`},
        {h:"Arpeggios", body:`
  <p>Chord tones played one at a time. Arpeggios connect scales and chords — every scale contains chord shapes.</p>`},
        {h:"Scale mapping", body:`
  <p>Learn one scale (e.g., A minor pentatonic) in all 5 positions. Connect them so you can play anywhere on the neck.</p>`}
      ]
    },
    // ===== 08 — Lead Improvisation =====
    {
      id:8, title:"Lead Improvisation", icon:"🎸",
      description:"Phrasing, note targeting, and soloing over changes.",
      youtube:"guitar improvisation lesson phrasing targeting notes soloing",
      exercises:["exAminor","exBlues"],
      sections:[
        {h:"Phrasing", body:`
  <p>Phrasing = how you play a series of notes. Bends, vibrato, slides, and pauses turn notes into music. Sing what you play.</p>`},
        {h:"Note targeting", body:`
  <p>Land on <strong>chord tones</strong> (root, 3rd, 5th) at strong beats. Use passing tones in between.</p>`},
        {h:"Soloing over changes", body:`
  <p>As chords change, change scale. Over G7 → G Mixolydian. Over Am7 → A Dorian. Follow the harmony.</p>`}
      ]
    },
    // ===== 09 — Modes =====
    {
      id:9, title:"Modes", icon:"🌓",
      description:"Seven modes and their modal sounds.",
      youtube:"guitar modes lesson dorian phrygian lydian mixolydian explained",
      exercises:["exModes"],
      sections:[
        {h:"What are modes?", body:`
  <p>The major scale started from a different degree. Same notes, different centre.</p>
  <div class="example">C major: C D E F G A B
  Ionian (1)    C D E F G A B
  Dorian (2)    D E F G A B C
  Phrygian (3)  E F G A B C D
  Lydian (4)    F G A B C D E
  Mixolydian (5) G A B C D E F
  Aeolian (6)   A B C D E F G
  Locrian (7)   B C D E F G A</div>`},
        {h:"Characteristic notes", body:`
  <ul>
    <li>Dorian: natural 6 (jazzy)</li>
    <li>Phrygian: flat 2 (Spanish)</li>
    <li>Lydian: sharp 4 (dreamy)</li>
    <li>Mixolydian: flat 7 (bluesy)</li>
  </ul>`},
        {h:"Modal chord vamps", body:`
  <p>To hear each mode, play over a drone or chord that emphasises the modal root.</p>
  <div class="example">D Dorian: vamp Dm7–G7
  E Phrygian: vamp Em–F
  G Mixolydian: vamp G–F</div>`}
      ]
    },
    // ===== 10 — Advanced Harmony =====
    {
      id:10, title:"Advanced Harmony", icon:"🔀",
      description:"Substitutions and reharmonization.",
      youtube:"advanced guitar harmony chord substitution reharmonization",
      exercises:["exSub"],
      sections:[
        {h:"Functional substitution", body:`
  <p>Swap chords that share a function: Dm7 for D, Am7 for Am, Em7 for Em.</p>`},
        {h:"Tritone substitution", body:`
  <p>Replace V7 with the dominant 7th a tritone away. G7 → D♭7. Common in jazz.</p>`},
        {h:"Reharmonization", body:`
  <p>Rewrite a melody's chords using substitutions. Start with one chord change and hear the effect.</p>`}
      ]
    },
    // ===== 11 — Advanced Scales =====
    {
      id:11, title:"Advanced Scales", icon:"🎯",
      description:"Altered, diminished, and melodic minor scales.",
      youtube:"guitar advanced scales altered diminished melodic minor lesson",
      exercises:["exDim"],
      sections:[
        {h:"Melodic minor", body:`
  <p>Major with a flat 3. Ascending: A B C D E F# G#. Common in jazz.</p>`},
        {h:"Altered scale", body:`
  <p>7th mode of melodic minor. All alterations: ♭9, ♯9, ♭5, ♯5. Play over altered dominant chords.</p>`},
        {h:"Diminished scale", body:`
  <p>Alternating whole–half steps: A B C D E♭ F F# G# A. Symmetrical — only 3 shapes cover the whole neck.</p>`}
      ]
    },
    // ===== 12 — Ear Training =====
    {
      id:12, title:"Ear Training", icon:"👂",
      description:"Transcription and recognition.",
      youtube:"guitar ear training intervals transcription beginner lesson",
      exercises:["exEar"],
      sections:[
        {h:"Interval recognition", body:`
  <p>Play two notes and name the interval. Start with octaves → 5ths → 4ths → 3rds → 2nds.</p>`},
        {h:"Transcription", body:`
  <p>Learn licks by ear: slow the recording, hum it, find the first note, then work out the rest.</p>`},
        {h:"Call and response", body:`
  <p>Play a short phrase, sing it back, then play your own answer. Builds phrasing and ear.</p>`}
      ]
    },
    // ===== 13 — Composition =====
    {
      id:13, title:"Composition", icon:"✍️",
      description:"Writing and arranging music.",
      youtube:"guitar composition songwriting lesson arrangement",
      exercises:["exCompose"],
      sections:[
        {h:"Start with a chord progression", body:`
  <p>Pick a key and use a common progression: I–V–vi–IV, ii–V–I, or the 12-bar blues.</p>`},
        {h:"Write a melody", body:`
  <p>Hum over the chords. Land on chord tones on strong beats, use passing tones between.</p>`},
        {h:"Arrange", body:`
  <p>Add a second guitar part: counter-melody, rhythm part, bass line. Think about texture.</p>`}
      ]
    }
  ];
  
  /* ===== WARM-UPS — Bernth-style, level tagged ===== */
  const WARMUPS = {
    exWarm1:{
      title:"Finger Stretch", technique:"Warm-Up", genre:"All Styles", bpmKey:"warmup",
      level:"Level 1 (Beginner)",
      description:"Slow deliberate stretch. Fingers 1-2-3-4 on consecutive frets.",
      tip:"Hold each stretch a second. Move up one fret each pass.",
      tab:`e|-----------------------------------|
  B|-----------------------------------|
  G|-----------------------------------|
  D|-----------------------------------|
  A|-----------------------------------|
  E|--5--6--7--8-----------------------|`,
      videoQuery:"Bernth guitar warm up play along beginner level 1 finger stretch"
    },
    exWarm2:{
      title:"Chromatic Warm-Up", technique:"Warm-Up", genre:"All Styles", bpmKey:"warmup",
      level:"Level 1 (Beginner)",
      description:"Every fret from open to 12th on each string.",
      tip:"Strict alternate picking. Say each note name aloud.",
      tab:`e|--0-1-2-3-4-5-6-7-8-9-10-11-12--|
  B|--0-1-2-3-4-5-6-7-8-9-10-11-12--|
  G|--0-1-2-3-4-5-6-7-8-9-10-11-12--|
  D|--0-1-2-3-4-5-6-7-8-9-10-11-12--|
  A|--0-1-2-3-4-5-6-7-8-9-10-11-12--|
  E|--0-1-2-3-4-5-6-7-8-9-10-11-12--|`,
      videoQuery:"Bernth chromatic warm up guitar play along level 1"
    },
    exWarm3:{
      title:"String Skipping Workout", technique:"Warm-Up", genre:"All Styles", bpmKey:"warmup",
      level:"Level 2 (Intermediate)",
      description:"Skip strings while alternate picking.",
      tip:"Mute skipped strings with the fretting hand.",
      tab:`e|-------------------5--8--
  B|----------------8--------
  G|----------5--7-----------
  D|----5--7-----------------
  A|-7-----------------------`,
      videoQuery:"Bernth string skipping warm up play along intermediate level 2"
    }
  };
  
  /* ===== EXERCISES — each links to its module ===== */
  const EXERCISES = {
    exGmajor:{title:"G Major Scale Run",technique:"Alternate Picking",genre:"Rock",bpmKey:"rockblues",theoryCh:3,
      description:"Ascend and descend the G major scale in 1st position.",
      tip:"Strict alternate picking. Start at 60 BPM.",
      tab:`e|---------------------------3--
  B|-------------------0--1--3----
  G|----------0--2--4-------------
  D|----0--2--4------------------
  A|-2--4--5---------------------
  E|-3---------------------------`,
      videoQuery:"G major scale guitar lesson 1st position beginner"},
    exAminor:{title:"A Minor Pentatonic — Position 1",technique:"Legato",genre:"Blues",bpmKey:"bluesshuffle",theoryCh:3,
      description:"Classic A minor pentatonic box.",
      tip:"Fingers 1-4 then 1-3.",
      tab:`e|---------------------5--8--
  B|-----------------5--8------
  G|-------------5--7----------
  D|---------5--7--------------
  A|-----5--7------------------
  E|-5--8----------------------`,
      videoQuery:"A minor pentatonic scale position 1 guitar lesson"},
    exIntervals:{title:"Interval Practice — 3rds & 5ths",technique:"Intervals",genre:"All Styles",bpmKey:"rockblues",theoryCh:2,
      description:"Play the G major scale in 3rds, then in 5ths.",
      tip:"Listen for the distance.",
      tab:`e|---------------------------3--
  B|-------------------0--1--3----
  G|----------0--2--4-------------
  D|----0--2--4------------------
  A|-2--4--5---------------------
  E|-3---------------------------`,
      videoQuery:"guitar interval practice thirds fifths exercise"},
    exTriads:{title:"G–D–C Triad Arpeggio",technique:"Arpeggios",genre:"Rock",bpmKey:"rockblues",theoryCh:5,
      description:"Notes of G, D and C triads individually.",
      tip:"Say the note names as you play.",
      tab:`e|-----------------|-----------------|
  B|-------0---3-----|-------1---0-----|
  G|---0-------2-----|---0-------0-----|
  D|-----------------|-2-------2-------|
  A|-2-------0-------|-3-------3-------|
  E|---------2-------|-----------------|`,
      videoQuery:"G major triad arpeggio guitar exercise"},
    ex7ths:{title:"G7–Cmaj7–D7 Progression",technique:"Rhythm",genre:"Jazz",bpmKey:"jazzswing",theoryCh:5,
      description:"Hear the difference between dominant, major, and minor 7ths.",
      tip:"G7 = tension. Cmaj7 = smooth. D7 resolves to G.",
      tab:`G7   Cmaj7  D7
  e|-1-|-0-|-2-|
  B|-0-|-0-|-1-|
  G|-0-|-0-|-2-|
  D|-0-|-2-|-0-|
  A|-2-|-3-|-x-|
  E|-3-|-x-|-x-|`,
      videoQuery:"G7 Cmaj7 D7 seventh chord guitar lesson"},
    exHarmonize:{title:"Diatonic Chords in G",technique:"Rhythm",genre:"Rock",bpmKey:"rockblues",theoryCh:6,
      description:"Strum G, Am, Bm, C, D, Em — diatonic chords in G.",
      tip:"I major, ii minor, iii minor, IV major, V major, vi minor.",
      tab:`G   Am  Bm  C   D   Em
  e|-3-|-0-|-2-|-0-|-2-|-0-|
  B|-0-|-1-|-3-|-1-|-3-|-0-|
  G|-0-|-2-|-4-|-0-|-2-|-0-|
  D|-0-|-2-|-4-|-2-|-0-|-2-|
  A|-2-|-0-|-2-|-3-|-x-|-2-|
  E|-3-|-x-|-x-|-x-|-x-|-0-|`,
      videoQuery:"diatonic chords G major guitar lesson"},
    exCaged:{title:"CAGED Arpeggio — C Shape",technique:"Arpeggios",genre:"All Styles",bpmKey:"rockblues",theoryCh:7,
      description:"Play the C major chord as an arpeggio using the CAGED C shape.",
      tip:"Move the shape up the neck to get other major chords.",
      tab:`e|--------0--------
  B|------1---1------
  G|----0-------0----
  D|--2-----------2--
  A|-3-------------3-
  E|------------------`,
      videoQuery:"CAGED system C shape arpeggio guitar lesson"},
    exBlues:{title:"A Blues Scale Lick",technique:"String Skipping",genre:"Blues",bpmKey:"bluesshuffle",theoryCh:8,
      description:"A blues scale phrase with string skipping.",
      tip:"Play over the Blues Shuffle ladder (48–160 BPM).",
      tab:`e|---------------------5--8--
  B|------------------5--------
  G|--------5--7--8------------
  D|--5--7---------------------`,
      videoQuery:"A blues scale guitar lick lesson"},
    exModes:{title:"G Dorian Exercise",technique:"Alternate Picking",genre:"Rock",bpmKey:"rockblues",theoryCh:9,
      description:"Play G Dorian — the G major scale starting from A.",
      tip:"Same notes as G major, but starting from A gives it a jazzier sound.",
      tab:`e|---------------------------5--
  B|-------------------5--7--8----
  G|----------4--5--7-------------
  D|----5--7--8------------------
  A|-5--7--8---------------------
  E|-5---------------------------`,
      videoQuery:"G Dorian mode guitar exercise lesson"},
    exSub:{title:"G–Dm7–C Substitution",technique:"Rhythm",genre:"Jazz",bpmKey:"jazzswing",theoryCh:10,
      description:"Replace D with Dm7 in a G–D–C progression.",
      tip:"Dm7 has a softer, more jazzy sound.",
      tab:`G   Dm7  C
  e|-3-|-1-|-0-|
  B|-0-|-1-|-1-|
  G|-0-|-2-|-0-|
  D|-0-|-0-|-2-|
  A|-2-|-x-|-3-|
  E|-3-|-x-|-x-|`,
      videoQuery:"chord substitution guitar lesson Dm7 for D"},
    exDim:{title:"A Diminished Scale Run",technique:"Alternate Picking",genre:"Metal",bpmKey:"metal",theoryCh:11,
      description:"A whole-half diminished scale run.",
      tip:"Symmetrical pattern — repeat shapes every 3 frets.",
      tab:`e|---------------------------5--
  B|-------------------5--6--8----
  G|----------4--5--7-------------
  D|----5--7--8------------------
  A|-5--7--8---------------------
  E|-5---------------------------`,
      videoQuery:"diminished scale guitar lesson run exercise"},
    exEar:{title:"Call and Response",technique:"Ear Training",genre:"All Styles",bpmKey:"rockblues",theoryCh:12,
      description:"Play a short phrase, sing it back, then play your answer.",
      tip:"Start with 3-note phrases. Use the A minor pentatonic.",
      tab:`e|-------------------5--8--
  B|----------------5--------
  G|--------5--7-------------
  D|--5--7-------------------`,
      videoQuery:"guitar call and response ear training exercise"},
    exCompose:{title:"Write a 12-Bar Blues",technique:"Composition",genre:"Blues",bpmKey:"bluesshuffle",theoryCh:13,
      description:"Write your own 12-bar blues in A with a melody.",
      tip:"Use the A blues scale for the melody. Add a turnaround.",
      tab:`| A7 | D7 | A7 | A7 |
  | D7 | D7 | A7 | A7 |
  | E7 | D7 | A7 | E7 |`,
      videoQuery:"writing a 12 bar blues guitar composition lesson"}
  };
  
  const GENRE_LADDERS = {
    rockblues:[40,48,58,72,84,96,108,120],
    metal:[40,48,56,66,76,88,100,112],
    bluesshuffle:[48,60,76,92,108,126,144,160],
    jazzswing:[56,69,80,92,104,116,132,144],
    country:[56,60,76,92,108,126,144,168],
    funk:[40,48,56,66,76,88,100,112],
    warmup:[50,55,60,65,70,75,80,85]
  };