const dummy = document.getElementById("dummy")
const t1 = document.getElementById("t1")
const t2 = document.getElementById("t2")
const t3 = document.getElementById("t3")
const t4 = document.getElementById("t4")
const t5 = document.getElementById("t5")

function playAnim() {
    t1.addEventListener("animationend", () => {
        setNewTracks()
    })

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