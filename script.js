const dummy = document.getElementById("dummy")
const t1 = document.getElementById("t1")
const t2 = document.getElementById("t2")
const t3 = document.getElementById("t3")
const t4 = document.getElementById("t4")
const t5 = document.getElementById("t5")
const allTracks = [dummy, t1, t2, t3, t4, t5]

let animationEndListener = null
let playing = false

function playAnim() {
    if (finished) {
        alert("Finished!")
        return
    }

    if (playing) return

    playing = true

    setNewTrack()

    if (animationEndListener) {
        t1.removeEventListener("animationend", animationEndListener)
    }

    // reset anims
    allTracks.forEach(track => {
        track.style.animation = "none"
    })

    // force refolw
    void dummy.offsetWidth

    // clean in-line shit
    allTracks.forEach(track => {
        track.style.animation = ""
    })

    animationEndListener = () => {
        setTracks()
        playing = false
    }
    t1.addEventListener("animationend", animationEndListener, { once: true })

    dummy.style.animationPlayState = "running"
    t1.style.animationPlayState = "running"
    t2.style.animationPlayState = "running"
    t3.style.animationPlayState = "running"
    t4.style.animationPlayState = "running"
    t5.style.animationPlayState = "running"
}

// TODO: TRACKS_PL
const TRACKS = [
    "Mario Bros. Circuit",
    "Crown City",
    "Whistlestop Summit",
    "DK Spaceport",
    "Desert Hills",
    "Shy Guy Bazaar",
    "Wario Stadium",
    "Aiship Fortress",
    "DK Pass",
    "Starview Peak",
    "Sky-High Sundae",
    "Wario Shipyard",
    "Koopa Troopa Beach",
    "Faraway Oasis",
    "Peach Beach",
    "Salty Salty Speedway",
    "Dino Dino Jungle",
    "Great ? Block Ruins",
    "Cheep Cheep Falls",
    "Dandelion Depths",
    "Boo Cinema",
    "Dry Bones Burnout",
    "Moo Moo Meadows",
    "Choco Mountain",
    "Toad's Factory",
    "Bowser's Castle",
    "Acorn Heights",
    "Mario Circuit",
    "Peach Stadium",
    "Rainbow Road"
]

let shuffledTracks = []
let track = 0
let finished = false

function shuffleTracks() {
    shuffledTracks = shuffle(TRACKS, 2137)
    // comment in prod
    console.log(shuffledTracks)
}

function setNewTrack() {
    if (track < 30) {
        const newTrack = shuffledTracks[track]
        dummy.innerHTML = newTrack
        track++
    } else {
        // finish logic
        finished = true
    }

}

function setTracks() {
    t5.innerHTML = t4.innerHTML
    t4.innerHTML = t3.innerHTML
    t3.innerHTML = t2.innerHTML
    t2.innerHTML = t1.innerHTML
    t1.innerHTML = dummy.innerHTML
}

shuffleTracks()

// following
// Source - https://stackoverflow.com/a/53758827
// Posted by Ulf Aslak
// Retrieved 2026-05-28, License - CC BY-SA 4.0

function shuffle(array, seed) {                // <-- ADDED ARGUMENT
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(random(seed) * m--);        // <-- MODIFIED LINE

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
        ++seed                                     // <-- ADDED LINE
    }

    return array;
}

function random(seed) {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
