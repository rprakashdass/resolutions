import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://resolutions-pwwn.onrender.com/auth/login", {
                username,
                password,
            });
            localStorage.setItem("token", res.data.token);
            navigate("/");
        } catch (error) {
            alert("Login failed, please enter correct credentials!");
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center bg-cover bg-center w-screen h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 bg-white bg-opacity-80 shadow-lg p-8 rounded-xl w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-center text-green-700 mb-4">Log In</h2>

                <div className="flex flex-col gap-4">
                    <label
                        htmlFor="username"
                        className="font-semibold text-green-700"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        name="username"
                        className="bg-white bg-opacity-90 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <label
                        htmlFor="password"
                        className="font-semibold text-green-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white bg-opacity-90 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    />
                </div>

                <div className="flex justify-between items-center text-sm">
                    <Link to="/forgot-password" className="text-green-700 hover:text-green-500">
                        Forgot password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-600 p-4 rounded-full text-white font-semibold text-sm transition-all transform hover:scale-105"
                >
                    Log In
                </button>

                <div className="text-center text-gray-700 mt-4">
                    <span className="text-sm">Haven't Joined the contest? </span>
                    <a
                        href="https://instagram.com/rotaractsiet"
                        className="text-green-700 hover:text-green-500"
                    >
                        Contact Rotaract SIET
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Login;
