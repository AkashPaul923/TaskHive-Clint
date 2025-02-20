import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const links = <>
        <Link to="/" className="hover:text-gray-300 transition-colors duration-300"> Home</Link>
        <Link className="hover:text-gray-300 transition-colors duration-300">About</Link>
        <Link className="hover:text-gray-300 transition-colors duration-300">Services</Link>
        <Link className="hover:text-gray-300 transition-colors duration-300">Contact</Link>
        <Link to="/register" className="hover:text-gray-300 transition-colors duration-300">Register</Link>
        <Link to="/login" className="hover:text-gray-300 transition-colors duration-300">Login</Link>
    </>

    return (
        <nav className="bg-blue-600 text-white py-4 shadow-lg relative">
            <div className="container mx-auto flex justify-between items-center px-5">
                <h1 className="text-2xl font-bold">
                    TaskHive
                </h1>
                <div className="hidden md:flex space-x-6">
                    {links}
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="transition-transform duration-300 hover:scale-110"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute w-full flex flex-col items-center space-y-4 mt-4 bg-blue-700 p-4 transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-5 pointer-events-none"
                }`}
            >
                {links}
            </div>
        </nav>
    );
};

export default Navbar;
