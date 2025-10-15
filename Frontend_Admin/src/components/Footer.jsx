import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-[#0a0a0a] to-black text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <svg className="w-10 h-10 text-[#b8812e]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8.5l7-3.5 7 3.5V13c0 4-3 7-7 7z" />
                            </svg>
                            <div>
                                <div className="text-xl font-bold tracking-[0.3em]">PRIMECUT</div>
                                <div className="text-[#b8812e] text-[10px] tracking-[0.2em] -mt-1">STEAKHOUSE</div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Where fire meets perfection. Experience the finest cuts, expertly prepared with passion.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#b8812e] rounded-full flex items-center justify-center transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#b8812e] rounded-full flex items-center justify-center transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#b8812e] rounded-full flex items-center justify-center transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 tracking-wider">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'Menu', 'About Us', 'Reservations', 'Gallery', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`/${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-[#b8812e] transition-colors text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-0.5 bg-[#b8812e] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 tracking-wider">
                            Hours
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between">
                                <span className="text-gray-400">Monday - Thursday</span>
                                <span className="text-white font-light">5pm - 10pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-400">Friday - Saturday</span>
                                <span className="text-white font-light">5pm - 11pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-400">Sunday</span>
                                <span className="text-white font-light">4pm - 9pm</span>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 bg-white/5 border border-[#b8812e]/30 rounded">
                            <p className="text-[#b8812e] text-xs font-semibold mb-1">HOLIDAY HOURS</p>
                            <p className="text-gray-400 text-xs">Please call for special holiday hours</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 tracking-wider">
                            Contact
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-[#b8812e] mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-400">
                                    123 Steakhouse Lane<br />
                                    City, State 12345
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-[#b8812e] flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#b8812e] transition-colors">
                                    (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-[#b8812e] flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@primecut.com" className="text-gray-400 hover:text-[#b8812e] transition-colors">
                                    info@primecut.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            &copy; {currentYear} PrimeCut Steakhouse. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="/privacy" className="text-gray-400 hover:text-[#b8812e] transition-colors">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-[#b8812e] transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;