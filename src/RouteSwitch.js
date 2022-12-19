import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./routes/App";
import NotFound from "./routes/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const RouteSwitch = () => {
    const [level, setLevel] = useState(0);

    useEffect(() => {
        setLevel(Math.floor(Math.random() * 2));
    }, []);

    return (
        <BrowserRouter basename="wheres-waldo">
            <Header />
            <Routes>
                <Route path="/" element={<App level={level} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RouteSwitch;
