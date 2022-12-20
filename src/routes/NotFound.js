import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        document.title = "Find the Pokemon! | Page Not Found";
    }, []);

    return (
        <div className="start-page">
            <div>404: Page not found</div>
        </div>
    );
};

export default NotFound;
