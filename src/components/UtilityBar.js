import Timer from "./Timer";

const UtilityBar = (props) => {
    return (
        <div className="util-bar">
            <ul className="utility-list">
                {props.findPoke.map((element, index) => {
                    return (
                        <li key={index}>
                            <img
                                src={element.img}
                                alt="pokemon"
                                height={80}
                                width={80}
                                className={element.found ? "found-poke" : ""}
                            />
                        </li>
                    );
                })}
            </ul>
            <div>Wrong: {props.wrong}</div>
            <Timer />
        </div>
    );
};

export default UtilityBar;
