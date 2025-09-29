import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-brown-900 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="path/to/your/quecos-logo.png" alt="Quecos Steak House Logo" className="h-10" />
                </Link>
                <div className="flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-sm transition-colors duration-200 ${isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'}`
                                }
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/reservations"
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-sm transition-colors duration-200 ${isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'}`
                                }
                            >
                                RESERVATIONS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-sm transition-colors duration-200 ${isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'}`
                                }
                            >
                                ABOUT US
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-sm transition-colors duration-200 ${isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'}`
                                }
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                    <Link
                        to="/book-a-table"
                        className="px-6 py-2 bg-red-800 text-white font-semibold rounded-sm 
                        border-2 border-yellow-600 hover:bg-red-900 transition-colors duration-200"
                    >
                        BOOK A TABLE
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
