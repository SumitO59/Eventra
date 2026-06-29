import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import Login from "./pages/Login/Login";




function App() {
    return (
        <Routes>

            <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />

                <Route path="/events" element={<Events />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

            </Route>

            <Route
                path="/login"
                element={<Login />}
            />

        </Routes>
        
    );
}

export default App;