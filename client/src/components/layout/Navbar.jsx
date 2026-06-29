import Button from "../ui/Button";
import { Link } from "react-router-dom";

const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

function Navbar() {
    return (
        <nav className="h-16 border-b">
            <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/">
                    <h1 className="text-2xl font-bold">
                        Eventra
                    </h1>
                </Link>
                {/* Navigation Links */}
                <ul className="flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <Link to="/login">
                        <Button variant="outline">
                            Login
                        </Button>
                    </Link>

                    <Button variant="primary">
                        Sign Up
                    </Button>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;