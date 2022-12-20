const Alert = (props) => {
    return (
        <div
            className={`alert-modal ${
                props.alert.slice(0, 3) === "You"
                    ? "green"
                    : props.alert.slice(0, 3) === "Pok"
                    ? "red"
                    : "yellow"
            }`}
        >
            {props.alert}
        </div>
    );
};

export default Alert;
