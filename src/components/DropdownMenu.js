const DropdownMenu = (props) => {
    return (
        <ul
            className="dropdown"
            style={{
                left: props.dropdownCoord[0],
                top: props.dropdownCoord[1],
            }}
        >
            {props.findPoke.map((element, index) => {
                return (
                    <li
                        key={index}
                        onClick={() => {
                            props.checkPoke(element);
                        }}
                    >
                        {element.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default DropdownMenu;
