import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg h-20 p-4 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo / Title */}
                <h1 className="text-white text-2xl font-semibold">New Year New Me!!</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <a href="#contact" className="text-white hover:text-gray-300 transition duration-300">
                        Contact
                    </a>
                    {token && (
                        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                            <Logout />
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-purple-700 text-white py-4">
                    <a href="#contact" className="py-2 w-full text-center hover:bg-purple-600">Contact</a>
                    {token && (
                        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                            <Logout />
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
