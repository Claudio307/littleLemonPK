import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Booking from "@/pages/Booking/Booking";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
        </Routes>
    );
};

export default AppRoutes;
