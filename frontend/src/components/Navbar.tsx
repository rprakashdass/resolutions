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
        <div className=" bg-[#f7f1de] shadow-lg p-2">
            <div className="flex justify-end gap-4 me-5 text-xl text-black">
                {/* <a className="hover:text-[#A2A9D3] cursor-pointer">
                    History
                </a> */}
                <a href="#contact" className="hover:text-[#A2A9D3] cursor-pointer">
                    Contact
                </a>
                {token && (
                    <span className="hover:text-[#A2A9D3] cursor-pointer">
                        <Logout />
                    </span>
                )}
            </div>
        </div>
    );
}

export default Navbar;