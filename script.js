const dummy = document.getElementById("dummy")
const t1 = document.getElementById("t1")
const t2 = document.getElementById("t2")
const t3 = document.getElementById("t3")
const t4 = document.getElementById("t4")
const t5 = document.getElementById("t5")
const allTracks = [dummy, t1, t2, t3, t4, t5]

let animationEndListener = null

function playAnim() {
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
        setNewTracks()
    }
    t1.addEventListener("animationend", animationEndListener, { once: true })

    dummy.style.animationPlayState = "running"
    t1.style.animationPlayState = "running"
    t2.style.animationPlayState = "running"
    t3.style.animationPlayState = "running"
    t4.style.animationPlayState = "running"
    t5.style.animationPlayState = "running"
}

function setNewTracks() {
    console.log("done")
}
