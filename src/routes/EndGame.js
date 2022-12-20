const EndGame = (props) => {
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
            <button onClick={props.startingGame}>Play Again</button>
        </div>
    );
};

export default EndGame;
