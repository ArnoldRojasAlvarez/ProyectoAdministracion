import React, { useState, useEffect } from "react";
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { totalItems } = useCart();
    const { user, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "MENU", href: "/menu" },
        { name: "ABOUT", href: "/about" },
        { name: "CALENDAR", href: "/calendar" },
        ...(user?.role === 'admin' ? [{ name: "ADMIN", href: "/admin" }] : []),
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-black/95 backdrop-blur-md shadow-lg"
                    : "bg-gradient-to-b from-black/60 to-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 sm:py-5">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#b8812e] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                            <svg
                                className="w-8 h-8 sm:w-10 sm:h-10 text-[#b8812e] relative"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8.5l7-3.5 7 3.5V13c0 4-3 7-7 7z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-white text-xl sm:text-2xl font-bold tracking-[0.3em]">
                                QUECOS
                            </div>
                            <div className="text-[#b8812e] text-[8px] sm:text-[10px] tracking-[0.2em] -mt-1">
                                STEAKHOUSE
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation & Cart */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-white text-sm tracking-wider font-light group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b8812e] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        
                        {/* User Profile / Login */}
                        {user ? (
                            <div className="flex items-center gap-2">
                                <span className="text-white text-sm tracking-wider font-light">
                                    {user.name}
                                </span>
                                <button
                                    onClick={logout}
                                    className="p-1.5 text-neutral-400 hover:text-[#b8812e] transition-colors"
                                    title="Logout"
                                >
                                    <LogOut className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <a
                                href="/login"
                                className="relative text-white text-sm tracking-wider font-light group"
                            >
                                LOGIN
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b8812e] transition-all duration-300 group-hover:w-full" />
                            </a>
                        )}
                        
                        {/* Shopping Cart Icon */}
                        <a
                            href="/Shopping"
                            className="relative text-white hover:text-[#b8812e] transition-colors group"
                            aria-label="Shopping Cart"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {/* Optional: Cart item count badge */}
                            <span className="absolute -top-2 -right-2 bg-[#8b2e22] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                                {totalItems}
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button & Cart */}
                    <div className="lg:hidden flex items-center space-x-4">
                        {/* Mobile Cart Icon */}
                        <a
                            href="/cart"
                            className="relative text-white hover:text-[#b8812e] transition-colors"
                            aria-label="Shopping Cart"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-[#8b2e22] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                                {totalItems}
                            </span>
                        </a>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2 hover:text-[#b8812e] transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${
                        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="py-4 space-y-4 border-t border-white/10">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-white text-sm tracking-wider font-light hover:text-[#b8812e] 
                                transition-colors py-2 animate-slideInLeft"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        
                        {/* Mobile Auth Section */}
                        <div className="pt-4 border-t border-white/10">
                            {user ? (
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between px-4 py-2">
                                        <span className="text-white text-sm tracking-wider font-light">{user.name}</span>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="p-2 text-neutral-400 hover:text-[#b8812e] transition-colors"
                                            title="Logout"
                                        >
                                            <LogOut className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <a
                                    href="/login"
                                    className="block text-white text-sm tracking-wider font-light hover:text-[#b8812e] transition-colors py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    LOGIN
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.5s ease-out both;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;