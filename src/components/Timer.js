import { useEffect, useState } from "react";

const Timer = () => {
    const [active, setActive] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval;

        if (active === true) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [active]);

    return (
        <div>
            <span>{("0" + Math.floor(time / 3600)).slice(-2)}:</span>
            <span>{("0" + (Math.floor(time / 60) % 60)).slice(-2)}:</span>
            <span>{("0" + (time % 60)).slice(-2)}</span>
        </div>
    );
};

export default Timer;
