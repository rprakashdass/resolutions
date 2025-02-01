import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("https://resolutions-pwwn.onrender.com/auth/register", {
                username,
                email,
                password
            });
            alert(res.data.message);
            alert("Registration successful!");
            navigate("/");
        } catch (error) {
            alert("Registration failed, please try again! or user name already taken");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-300 px-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-white shadow-xl p-6 rounded-lg w-full max-w-sm text-center"
            >
                <h2 className="text-2xl font-bold text-gray-800">Register</h2>

                {/* Username Field */}
                <div className="flex flex-col gap-2 w-full text-left">
                    <label htmlFor="username" className="font-semibold text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                        className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div className="flex flex-col gap-2 w-full text-left">
                    <label htmlFor="email" className="font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
                    />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2 w-full text-left relative">
                    <label htmlFor="password" className="font-semibold text-gray-700">
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-10 right-3 text-sm text-blue-600 hover:text-blue-800"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-500 text-white font-semibold p-3 rounded-md transition duration-300"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>

                {/* Login Redirect */}
                <p className="text-gray-700">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-700 font-semibold hover:underline">
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
