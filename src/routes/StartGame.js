import { useState } from "react";
import Ranking from "../components/Ranking";

const StartGame = (props) => {
    const [showRanking, setShowRanking] = useState(false);

    const closeRanking = () => {
        setShowRanking(false);
    };

    return (
        <div className="start-page">
            <button onClick={props.startingGame}>Start Game</button>
            <button
                onClick={() => {
                    setShowRanking(true);
                }}
            >
                Ranking
            </button>
            {showRanking ? <Ranking closeRanking={closeRanking} /> : null}
        </div>
    );
};

export default StartGame;
