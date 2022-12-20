import { useEffect, useState } from "react";
import ImageDisplay from "../components/ImageDisplay";
import UtilityBar from "../components/UtilityBar";
import DropdownMenu from "../components/DropdownMenu";
import Alert from "../components/Alert";

const App = (props) => {
    const [findPoke, setFindPoke] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownCoord, setDropdownCoord] = useState([]);
    const [clickedCoord, setClickedCoord] = useState([]);
    const [alert, setAlert] = useState("");

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

    useEffect(() => {
        const clearMessage = setTimeout(() => {
            setAlert("");
        }, 2500);

        return () => {
            clearTimeout(clearMessage);
        };
    }, [alert]);

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
                        setAlert(`You found ${item.name}!`);
                        props.correctHandler(findPoke.length);
                        return { ...item, found: true };
                    } else {
                        setAlert(`${item.name} is already Found!`);
                        return item;
                    }
                } else if (item.name === pokeObj.name) {
                    setAlert("Pokemon not Found!");
                    props.wrongHandler();
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
            <UtilityBar findPoke={findPoke} wrong={props.wrong} />
            <ImageDisplay />
            {showDropdown ? (
                <DropdownMenu
                    findPoke={findPoke}
                    dropdownCoord={dropdownCoord}
                    checkPoke={checkPoke}
                />
            ) : null}
            <Alert alert={alert} />
        </div>
    );
};

export default App;
