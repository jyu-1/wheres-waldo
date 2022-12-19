import ivysaur from "./assets/ivysaur.png";
import charmander from "./assets/charmander.png";
import charizard from "./assets/charizard.png";
import wartortle from "./assets/wartortle.png";
import blastoise from "./assets/blastoise.png";
import vaporeon from "./assets/vaporeon.png";
import jolteon from "./assets/jolteon.png";
import flareon from "./assets/flareon.png";

const Data = {
    levels: 2,
    0: [
        {
            name: "Vaporeon",
            found: false,
            x1: 803,
            x2: 904,
            y1: 1009,
            y2: 1124,
            img: vaporeon,
        },
        {
            name: "Jolteon",
            found: false,
            x1: 8,
            x2: 135,
            y1: 1259,
            y2: 1349,
            img: jolteon,
        },
        {
            name: "Flareon",
            found: false,
            x1: 976,
            x2: 1077,
            y1: 314,
            y2: 434,
            img: flareon,
        },
    ],
    1: [
        {
            name: "Ivysaur",
            found: false,
            x1: 157,
            x2: 253,
            y1: 891,
            y2: 999,
            img: ivysaur,
        },
        {
            name: "Charmander",
            found: false,
            x1: 857,
            x2: 931,
            y1: 555,
            y2: 659,
            img: charmander,
        },
        {
            name: "Charizard",
            found: false,
            x1: 6,
            x2: 168,
            y1: 17,
            y2: 179,
            img: charizard,
        },
        {
            name: "Wartortle",
            found: false,
            x1: 373,
            x2: 472,
            y1: 791,
            y2: 914,
            img: wartortle,
        },
        {
            name: "Blastoise",
            found: false,
            x1: 710,
            x2: 815,
            y1: 1101,
            y2: 1255,
            img: blastoise,
        },
    ],
};

export default Data;
