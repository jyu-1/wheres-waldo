import { useState, useEffect } from "react";
import Alert from "../components/Alert";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Ranking from "../components/Ranking";

const EndGame = (props) => {
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [alert, setAlert] = useState("");
    const [showRanking, setShowRanking] = useState(false);

    const rankingCollection = collection(db, "ranking");

    const addScore = async () => {
        await addDoc(rankingCollection, {
            name: name,
            time: props.time,
            wrong: props.wrong,
        });
    };

    const inputValidation = (value) => {
        if (value === "") {
            setAlert("Enter a Name");
        } else {
            setName(value);
            setSubmitted(true);
            addScore();
        }
    };

    const closeRanking = () => {
        setShowRanking(false);
    };

    useEffect(() => {
        const clearMessage = setTimeout(() => {
            setAlert("");
        }, 2500);

        return () => {
            clearTimeout(clearMessage);
        };
    }, [alert]);

    return (
        <div className="start-page">
            <div>You Won!</div>
            <div>Wrong Searches: {props.wrong}</div>
            <div>
                <span>Game Duration: </span>
                <span>{("0" + Math.floor(props.time / 3600)).slice(-2)}:</span>
                <span>
                    {("0" + (Math.floor(props.time / 60) % 60)).slice(-2)}:
                </span>
                <span>{("0" + (props.time % 60)).slice(-2)}</span>
            </div>
            {!submitted ? (
                <>
                    <input
                        placeholder="Enter your Name"
                        maxLength={20}
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            inputValidation(name);
                        }}
                    >
                        Submit Score
                    </button>
                </>
            ) : (
                <button
                    onClick={() => {
                        setShowRanking(true);
                    }}
                >
                    Ranking
                </button>
            )}
            <button onClick={props.startingGame}>Play Again</button>
            <Alert alert={alert} />
            {showRanking ? <Ranking closeRanking={closeRanking} /> : null}
        </div>
    );
};

export default EndGame;
