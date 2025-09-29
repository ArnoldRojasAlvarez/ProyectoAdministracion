import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `px-3 lg:px-3 py-2 rounded-sm transition-colors duration-200 text-sm lg:text-base whitespace-nowrap ${
            isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800 text-gray-200'
        }`;

    const mobileNavLinkClass = ({ isActive }) =>
        `block px-3 py-2 rounded-sm transition-colors duration-200 text-gray-200 ${
            isActive ? 'bg-red-700 text-white' : 'hover:bg-red-800'
        }`;

    return (
        <nav
            className="relative shadow-md z-50 px-3"
            style={{
                backgroundImage: 'url(/src/assets/images/wood-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full px-3 py-3 flex justify-between items-center text-white bg-[#643c1f]/80">
                {/* Logo remains first on the left */}
                <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
                    <div className="h-10 px-3 py- text-sm flex items-center justify-center rounded">
                        <img
                            src="https://tilapiasquecoscr.com/wp-content/uploads/2023/03/Steak-House.webp"
                            alt="Steak House Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </div>
                </Link>

                {/* Hamburger Button for Mobile */}
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

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                    <ul className="flex space-x-4 lg:space-x-6">
                        <li>
                            <NavLink to="/reservations" className={navLinkClass}>
                                RESERVATIONS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={navLinkClass}>
                                ABOUT US
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={navLinkClass}>
                                CONTACT
                            </NavLink>
                        </li>
                        {/* HOME moved to the last position and uses the same styling */}
                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                HOME
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu (Dropdown) */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#3B1F0B] z-50 md:hidden shadow-lg text-white">
                        <ul className="flex flex-col space-y-2 px-3 py-4">
                            <li>
                                <NavLink
                                    to="/reservations"
                                    className={mobileNavLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    RESERVATIONS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={mobileNavLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    ABOUT US
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={mobileNavLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            {/* HOME moved to the last position in mobile menu */}
                            <li>
                                <NavLink
                                    to="/"
                                    className={mobileNavLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
