import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./routes/App";
import NotFound from "./routes/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Data from "./Data";

const RouteSwitch = () => {
    const [pokeData, setPokeData] = useState([]);

    useEffect(() => {
        setPokeData(Data[Math.floor(Math.random() * Data.levels)]);
    }, []);

    return (
        <BrowserRouter basename="wheres-waldo">
            <Header />
            <Routes>
                <Route path="/" element={<App pokeData={pokeData} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RouteSwitch;
