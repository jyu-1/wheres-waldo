import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./routes/App";
import NotFound from "./routes/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const RouteSwitch = () => {
    return (
        <BrowserRouter basename="wheres-waldo">
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RouteSwitch;
