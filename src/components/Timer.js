import { useEffect, useContext } from "react";
import { TimeContext } from "./TimeContext";

const Timer = () => {
    const { time, setTime } = useContext(TimeContext);

    useEffect(() => {
        let interval;

        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [setTime]);

    return (
        <div className="util-timer">
            <span>{("0" + Math.floor(time / 3600)).slice(-2)}:</span>
            <span>{("0" + (Math.floor(time / 60) % 60)).slice(-2)}:</span>
            <span>{("0" + (time % 60)).slice(-2)}</span>
        </div>
    );
};

export default Timer;
