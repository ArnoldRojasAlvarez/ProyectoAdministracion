import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative bg-[#3B1F0B] text-white shadow-md z-50 px-4">
            <div className="mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
                    <div className="h-10 px-4 py-2 bg-gray-700 text-gray-300 text-sm flex items-center justify-center rounded">
                        *insert image*
                    </div>
                </Link>

                <button
                    className="md:hidden flex items-center px-2 py-1 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                    <ul className="flex space-x-4 lg:space-x-6">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-3 lg:px-4 py-2 rounded-sm transition-colors duration-200 text-sm lg:text-base whitespace-nowrap ${
                                        isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'
                                    }`
                                }
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/reservations"
                                className={({ isActive }) =>
                                    `px-3 lg:px-4 py-2 rounded-sm transition-colors duration-200 text-sm lg:text-base whitespace-nowrap ${
                                        isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'
                                    }`
                                }
                            >
                                RESERVATIONS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `px-3 lg:px-4 py-2 rounded-sm transition-colors duration-200 text-sm lg:text-base whitespace-nowrap ${
                                        isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'
                                    }`
                                }
                            >
                                ABOUT US
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `px-3 lg:px-4 py-2 rounded-sm transition-colors duration-200 text-sm lg:text-base whitespace-nowrap ${
                                        isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'
                                    }`
                                }
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>

                    <Link
                        to="/book-a-table"
                        className="px-4 lg:px-6 py-2 bg-red-800 text-white text-sm lg:text-base font-semibold
                                 border-2 border-yellow-600 hover:bg-red-900 transition-colors duration-200 whitespace-nowrap"
                    >
                        BOOK A TABLE
                    </Link>
                </div>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#3B1F0B] z-50 md:hidden shadow-lg">
                        <ul className="flex flex-col space-y-2 px-4 py-4">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 rounded-sm transition-colors duration-200 ${
                                            isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'
                                        }`
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/reservations"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 rounded-sm transition-colors duration-200 ${
                                            isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'
                                        }`
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    RESERVATIONS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 rounded-sm transition-colors duration-200 ${
                                            isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'
                                        }`
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    ABOUT US
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 rounded-sm transition-colors duration-200 ${
                                            isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'
                                        }`
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            <li>
                                <Link
                                    to="/book-a-table"
                                    className="block px-6 py-2 bg-red-800 text-white font-semibold border-2 border-yellow-600 hover:bg-red-900 transition-colors duration-200 mt-2 text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    BOOK A TABLE
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;