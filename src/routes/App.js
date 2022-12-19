import { useEffect, useState } from "react";
import Timer from "../components/Timer";
import ImageDisplay from "../components/ImageDisplay";
import PokemonList from "../components/PokemonList";
import DropdownMenu from "../components/DropdownMenu";

const App = (props) => {
    const [findPoke, setFindPoke] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownCoord, setDropdownCoord] = useState([]);
    const [clickedCoord, setClickedCoord] = useState([]);

    useEffect(() => {
        if (props.level === 0) {
            setFindPoke([
                { name: "Vaporeon", found: false },
                { name: "Jolteon", found: false },
                { name: "Flareon", found: false },
            ]);
        } else {
            setFindPoke([
                { name: "Ivysaur", found: false },
                { name: "Charmander", found: false },
                { name: "Charizard", found: false },
                { name: "Wartortle", found: false },
                { name: "Blastoise", found: false },
            ]);
        }
    }, [props.level]);

    useEffect(() => {
        const dropDownMenu = (event) => {
            setShowDropdown(true);
            setDropdownCoord([event.pageX, event.pageY]);
            setClickedCoord([event.offsetX, event.offsetY]);
        };

        const selectImg = document.querySelector(".main-img");
        selectImg.addEventListener("click", dropDownMenu);

        return () => {
            selectImg.removeEventListener("click", dropDownMenu);
        };
    }, [showDropdown]);

    const checkPoke = (pokeObj) => {
        if (props.level === 0) {
            if (
                clickedCoord[0] > 803 &&
                clickedCoord[0] < 904 &&
                clickedCoord[1] > 1009 &&
                clickedCoord[1] < 1124 &&
                pokeObj.name === "Vaporeon"
            ) {
                console.log("Vaporeon");
            } else if (
                clickedCoord[0] > 8 &&
                clickedCoord[0] < 135 &&
                clickedCoord[1] > 1259 &&
                clickedCoord[1] < 1349 &&
                pokeObj.name === "Jolteon"
            ) {
                console.log("Jolteon");
            } else if (
                clickedCoord[0] > 976 &&
                clickedCoord[0] < 1077 &&
                clickedCoord[1] > 314 &&
                clickedCoord[1] < 434 &&
                pokeObj.name === "Flareon"
            ) {
                console.log("Flareon");
            }
        } else {
            if (
                clickedCoord[0] > 157 &&
                clickedCoord[0] < 253 &&
                clickedCoord[1] > 891 &&
                clickedCoord[1] < 999 &&
                pokeObj.name === "Ivysaur"
            ) {
                console.log("Ivysaur");
            } else if (
                clickedCoord[0] > 373 &&
                clickedCoord[0] < 472 &&
                clickedCoord[1] > 791 &&
                clickedCoord[1] < 914 &&
                pokeObj.name === "Wartortle"
            ) {
                console.log("Wartortle");
            } else if (
                clickedCoord[0] > 710 &&
                clickedCoord[0] < 815 &&
                clickedCoord[1] > 1101 &&
                clickedCoord[1] < 1255 &&
                pokeObj.name === "Blastoise"
            ) {
                console.log("Blastoise");
            } else if (
                clickedCoord[0] > 857 &&
                clickedCoord[0] < 931 &&
                clickedCoord[1] > 555 &&
                clickedCoord[1] < 659 &&
                pokeObj.name === "Charmander"
            ) {
                console.log("Charmander");
            } else if (
                clickedCoord[0] > 6 &&
                clickedCoord[0] < 168 &&
                clickedCoord[1] > 17 &&
                clickedCoord[1] < 179 &&
                pokeObj.name === "Charizard"
            ) {
                console.log("Charizard");
            }
        }
        setShowDropdown(false);
    };

    return (
        <div className="App">
            <Timer />
            <ImageDisplay />
            <PokemonList findPoke={findPoke} />
            {showDropdown ? (
                <DropdownMenu
                    findPoke={findPoke}
                    dropdownCoord={dropdownCoord}
                    checkPoke={checkPoke}
                />
            ) : null}
        </div>
    );
};

export default App;
