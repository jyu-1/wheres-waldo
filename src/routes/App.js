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
        setFindPoke(props.pokeData);
    }, [props.pokeData]);

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
        setFindPoke(
            findPoke.map((item) => {
                if (
                    item.name === pokeObj.name &&
                    item.x1 < clickedCoord[0] &&
                    item.x2 > clickedCoord[0] &&
                    item.y1 < clickedCoord[1] &&
                    item.y2 > clickedCoord[1]
                ) {
                    if (item.found === false) {
                        console.log(`FOUND * ${item.name} *`);
                        return { ...item, found: true };
                    } else {
                        console.log(`${item.name} is already Found!`);
                        return item;
                    }
                } else if (item.name === pokeObj.name) {
                    console.log("Pokemon not Found!");
                    return item;
                } else {
                    return item;
                }
            })
        );

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
