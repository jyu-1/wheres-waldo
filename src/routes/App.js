import { useEffect, useState } from "react";
import Timer from "../components/Timer";
import ImageDisplay from "../components/ImageDisplay";
import PokemonList from "../components/PokemonList";
import DropdownMenu from "../components/DropdownMenu";

const App = (props) => {
    const [findPoke, setFindPoke] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownCoord, setDropdownCoord] = useState([]);

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
            if (showDropdown === false) {
                setShowDropdown(true);
                setDropdownCoord([event.pageX, event.pageY]);
            } else {
                setShowDropdown(false);
            }
        };

        const selectImg = document.querySelector(".main-img");
        selectImg.addEventListener("click", dropDownMenu);

        return () => {
            selectImg.removeEventListener("click", dropDownMenu);
        };
    }, [showDropdown]);

    //////////////////////////////////////////////////////////////////////

    const getCoord = (e) => {
        console.log("X: " + e.offsetX);
        console.log("Y: " + e.offsetY);

        if (
            e.offsetX > 157 &&
            e.offsetX < 253 &&
            e.offsetY > 891 &&
            e.offsetY < 999
        ) {
            console.log("Ivysaur");
        } else if (
            e.offsetX > 373 &&
            e.offsetX < 472 &&
            e.offsetY > 791 &&
            e.offsetY < 914
        ) {
            console.log("Wartortle");
        } else if (
            e.offsetX > 710 &&
            e.offsetX < 815 &&
            e.offsetY > 1101 &&
            e.offsetY < 1255
        ) {
            console.log("Blastoise");
        } else if (
            e.offsetX > 857 &&
            e.offsetX < 931 &&
            e.offsetY > 555 &&
            e.offsetY < 659
        ) {
            console.log("Charmander");
        } else if (
            e.offsetX > 6 &&
            e.offsetX < 168 &&
            e.offsetY > 17 &&
            e.offsetY < 179
        ) {
            console.log("Charizard");
        } else if (
            e.offsetX > 976 &&
            e.offsetX < 1077 &&
            e.offsetY > 314 &&
            e.offsetY < 434
        ) {
            console.log("Flareon");
        } else if (
            e.offsetX > 803 &&
            e.offsetX < 904 &&
            e.offsetY > 1009 &&
            e.offsetY < 1124
        ) {
            console.log("Vaporeon");
        } else if (
            e.offsetX > 8 &&
            e.offsetX < 135 &&
            e.offsetY > 1259 &&
            e.offsetY < 1349
        ) {
            console.log("Flareon");
        }
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
                />
            ) : null}
        </div>
    );
};

export default App;
