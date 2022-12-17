import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        document.title = "Find the Pokemon! | Page Not Found";
    }, []);

    return <div>404: Page not found</div>;
};

export default NotFound;
