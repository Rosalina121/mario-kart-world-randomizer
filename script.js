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

function setSeed() {
    if (track > 0) {
        alert("Can't set seed once started")
        return
    }
    const num = document.getElementById("seed-input").value
    shuffledTracks = shuffle(TRACKS, num)
    console.log(shuffledTracks)
}

function shuffleTracks() {
    // random seed
    let seed = Math.floor(Math.random() * 1000000)
    shuffledTracks = shuffle(TRACKS, seed)
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

function toggleAdmin() {
    const admin = document.querySelector(".admin")
    admin.classList.toggle("hidden")
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

/*
 * Konami-JS ~
 * :: Now with support for touch events and multiple instances for
 * :: those situations that call for multiple easter eggs!
 * Code: https://github.com/georgemandis/konami-js
 * Copyright (c) 2009 George Mandis (https://george.mand.is)
 * Version: 1.7.0 (09/03/2024)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 * Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1+ and Android
 */

var Konami = function (callback) {
  var konami = {
    addEvent: function (obj, type, fn, ref_obj) {
      if (obj.addEventListener) obj.addEventListener(type, fn, false);
      else if (obj.attachEvent) {
        // IE
        obj["e" + type + fn] = fn;
        obj[type + fn] = function () {
          obj["e" + type + fn](window.event, ref_obj);
        };
        obj.attachEvent("on" + type, obj[type + fn]);
      }
    },
    removeEvent: function (obj, eventName, eventCallback) {
      if (obj.removeEventListener) {
        obj.removeEventListener(eventName, eventCallback);
      } else if (obj.attachEvent) {
        obj.detachEvent(eventName);
      }
    },
    input: "",
    pattern: "38384040373937396665",
    keydownHandler: function (e, ref_obj) {
      if (ref_obj) {
        konami = ref_obj;
      } // IE
      konami.input += e ? e.keyCode : event.keyCode;
      if (konami.input.length > konami.pattern.length) {
        konami.input = konami.input.substr(
          konami.input.length - konami.pattern.length,
        );
      }
      if (konami.input === konami.pattern) {
        konami.code(konami._currentLink);
        konami.input = "";
        e.preventDefault();
        return false;
      }
    },
    load: function (link) {
      this._currentLink = link;
      this.addEvent(document, "keydown", this.keydownHandler, this);
      this.iphone.load(link);
    },
    unload: function () {
      this.removeEvent(document, "keydown", this.keydownHandler);
      this.iphone.unload();
    },
    code: function (link) {
      window.location = link;
    },
    iphone: {
      start_x: 0,
      start_y: 0,
      stop_x: 0,
      stop_y: 0,
      tap: false,
      capture: false,
      orig_keys: "",
      keys: [
        "UP",
        "UP",
        "DOWN",
        "DOWN",
        "LEFT",
        "RIGHT",
        "LEFT",
        "RIGHT",
        "TAP",
        "TAP",
      ],
      input: [],
      code: function (link) {
        konami.code(link);
      },
      touchmoveHandler: function (e) {
        if (e.touches.length === 1 && konami.iphone.capture === true) {
          var touch = e.touches[0];
          konami.iphone.stop_x = touch.pageX;
          konami.iphone.stop_y = touch.pageY;
          konami.iphone.tap = false;
          konami.iphone.capture = false;
        }
      },
      touchendHandler: function () {
        konami.iphone.input.push(konami.iphone.check_direction());

        if (konami.iphone.input.length > konami.iphone.keys.length)
          konami.iphone.input.shift();

        if (konami.iphone.input.length === konami.iphone.keys.length) {
          var match = true;
          for (var i = 0; i < konami.iphone.keys.length; i++) {
            if (konami.iphone.input[i] !== konami.iphone.keys[i]) {
              match = false;
            }
          }
          if (match) {
            konami.iphone.code(konami._currentLink);
          }
        }
      },
      touchstartHandler: function (e) {
        konami.iphone.start_x = e.changedTouches[0].pageX;
        konami.iphone.start_y = e.changedTouches[0].pageY;
        konami.iphone.tap = true;
        konami.iphone.capture = true;
      },
      load: function (link) {
        this.orig_keys = this.keys;
        konami.addEvent(document, "touchmove", this.touchmoveHandler);
        konami.addEvent(document, "touchend", this.touchendHandler, false);
        konami.addEvent(document, "touchstart", this.touchstartHandler);
      },
      unload: function () {
        konami.removeEvent(document, "touchmove", this.touchmoveHandler);
        konami.removeEvent(document, "touchend", this.touchendHandler);
        konami.removeEvent(document, "touchstart", this.touchstartHandler);
      },
      check_direction: function () {
        var x_magnitude = Math.abs(this.start_x - this.stop_x);
        var y_magnitude = Math.abs(this.start_y - this.stop_y);
        var x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT";
        var y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP";

        var result =
          this.tap === true ? "TAP" : x_magnitude > y_magnitude ? x : y;

        return result;
      },
    },
  };

  typeof callback === "string" && konami.load(callback);
  if (typeof callback === "function") {
    konami.code = callback;
    konami.load();
  }

  return konami;
};

const easterEgg = Konami(() => toggleAdmin())
