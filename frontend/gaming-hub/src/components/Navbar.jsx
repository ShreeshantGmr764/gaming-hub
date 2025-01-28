import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse hover:opacity-80 transition-opacity duration-300">
                    <img src={logo} className="h-16" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300 font-sans">YourBrand</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-sans">About</Link>
                        </li>
                        <li>
                            <Link to="/services" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-sans">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-sans">Contact</Link>
                        </li>
                    </ul>
                    <div className="relative">
                        <button onClick={toggleMenu} className="flex items-center space-x-2 text-gray-700 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300 md:fixed  md:right-10">
                            <CiUser className="w-6 h-6" />
                            <span className="hidden md:block">Profile</span>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-20">
                                <Link to="/profile" className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">My Profile</Link>
                                <Link to="/login" className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Login</Link>
                                <Link to="/signup" className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Signup</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;