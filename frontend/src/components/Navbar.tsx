import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg p-4 fixed top-0 h-16 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-semibold">New Year New Me!!</h1>
                <div className="flex items-center gap-6">
                    <a href="#contact" className="text-white hover:text-gray-300 transition-all duration-300">
                        Contact
                    </a>
                    {token && (
                        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300">
                            <Logout />
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
