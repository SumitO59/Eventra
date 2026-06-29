import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-6">
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;