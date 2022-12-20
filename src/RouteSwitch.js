import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./routes/App";
import NotFound from "./routes/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Data from "./Data";
import StartGame from "./routes/StartGame";
import EndGame from "./routes/EndGame";
import { TimeContext } from "./components/TimeContext";
import { useEffect, useState } from "react";

const RouteSwitch = () => {
    const [pokeData, setPokeData] = useState([]);
    const [gameState, setGameState] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [pokeLength, setPokeLength] = useState(0);
    const [time, setTime] = useState(0);

    const startingGame = () => {
        const randomLevel = Math.floor(Math.random() * Data.levels);
        setPokeData(Data[randomLevel]);
        setPokeLength(Data[randomLevel].length);
        setWrong(0);
        setCorrect(0);
        setTime(0);
        setGameState(1);
    };

    const correctHandler = () => {
        setCorrect((prev) => prev + 1);
    };

    const wrongHandler = () => {
        setWrong((prev) => prev + 1);
    };

    useEffect(() => {
        if (pokeLength > 0 && pokeLength === correct) {
            setGameState(2);
        }
    }, [correct, pokeLength]);

    return (
        <BrowserRouter basename="wheres-waldo">
            <TimeContext.Provider value={{ time, setTime }}>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            gameState === 0 ? (
                                <StartGame startingGame={startingGame} />
                            ) : gameState === 1 ? (
                                <App
                                    pokeData={pokeData}
                                    wrong={wrong}
                                    wrongHandler={wrongHandler}
                                    correctHandler={correctHandler}
                                />
                            ) : (
                                <EndGame
                                    time={time}
                                    wrong={wrong}
                                    startingGame={startingGame}
                                />
                            )
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </TimeContext.Provider>
        </BrowserRouter>
    );
};

export default RouteSwitch;
