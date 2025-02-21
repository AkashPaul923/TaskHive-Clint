import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user, logout } = useAuth()


    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? " font-bold border-b-2 ": ""}> Home</NavLink>
        <NavLink  className={({ isActive }) => isActive ? " font-bold border-b-2": ""}>About</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? " font-bold border-b-2": ""}>Tasks</NavLink>
        <NavLink to="/add-task"  className={({ isActive }) => isActive ? " font-bold border-b-2": ""}>Add Task</NavLink>
        {
            user?
            <>
            <button onClick={logout}  className={({ isActive }) => isActive ? " font-bold border-b-2": ""}>Logout</button>
            
            </>
            :
            <>
            <NavLink to="/register"  className={({ isActive }) => isActive ? " font-bold border-b-2": ""}>Register</NavLink>
            <NavLink to="/login"  className={({ isActive }) => isActive ? " font-bold border-b-2": ""}>Login</NavLink>
            </>
        }
    </>

    return (
        <nav className="bg-base-300 py-4 relative">
            <div className="max-w-[1920px] mx-auto flex justify-between items-center px-5">
                <h1 className="text-2xl font-bold">
                    TaskHive
                </h1>
                <div className="flex items-center gap-6">
                <div className="hidden md:flex space-x-6">
                    {links}
                </div>
                {user && <img className="h-8 w-8 object-cover rounded-full" src={user?.photoURL} alt="" />}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="transition-transform duration-300 hover:scale-110"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`md:hidden z-50 absolute w-full flex flex-col items-center space-y-4 mt-4 bg-base-300 p-4 transition-all duration-300 ease-in-out ${
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
