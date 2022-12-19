import Timer from "./Timer";

const UtilityBar = (props) => {
    return (
        <div className="util-bar">
            <ul className="utility-list">
                {props.findPoke.map((element, index) => {
                    return <li key={index}>{element.name}</li>;
                })}
            </ul>
            <Timer />
            <div>Wrong: {props.wrong}</div>
        </div>
    );
};

export default UtilityBar;
