import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import woodBg from '../assets/images/wood-bg.jpg';

const Footer = () => {
    const redButtonColor = 'bg-[#8b2e22]';
    const yellowBorderColor = 'border-[#b8812e]';

    return (
        <footer
            className="relative text-white py-12 border-t border-gray-700 px-3 bg-cover bg-center"
            style={{ backgroundImage: `url(${woodBg})` }}
        >
            <div className="absolute inset-0 bg-[#3d2c20]/90"></div>
            <div className="relative mx-auto px-3">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-y-8 md:gap-x-8">

                    <div className="md:col-span-2 space-y-3">
                        <div className="flex flex-col items-start">
                            <div className="h-16 w-32 px-3 py-2 text-gray-300 text-sm flex items-center justify-center rounded mb-2">
                                <img
                                    src="https://tilapiasquecoscr.com/wp-content/uploads/2023/03/Steak-House.webp"
                                    alt="Steak House Logo"
                                    className="h-24 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 border-b-2 border-transparent hover:border-red-700 transition-colors duration-300 inline-block">
                            EXPLORE
                        </h4>
                        <ul className="space-y-2">
                            <li><Link to="/story" className="text-sm text-gray-300 hover:text-red-700 transition-colors">Our Story</Link></li>
                            <li><Link to="/gallery" className="text-sm text-gray-300 hover:text-red-700 transition-colors">Gallery</Link></li>
                            <li><Link to="/careers" className="text-sm text-gray-300 hover:text-red-700 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 border-b-2 border-transparent hover:border-red-700 transition-colors duration-300 inline-block">
                            VISIT
                        </h4>
                        <div className="text-sm space-y-2 text-gray-300">
                            <p>
                                <span className="font-medium">Location:</span> La Marina
                            </p>
                            <p>
                                <span className="font-medium">Hours:</span> Mon-Sun, 5 PM - 10 PM
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold border-b-2 border-transparent hover:border-red-700 transition-colors duration-300 inline-block">
                            CONNECT
                        </h4>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-xl text-white hover:text-red-700 transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-xl text-white hover:text-red-700 transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-xl text-white hover:text-red-700 transition-colors">
                                <FaInstagram />
                            </a>
                        </div>
                        <form className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">

                            <button
                                type="submit"
                                className={`py-2 px-3 text-sm font-semibold text-white w-full sm:w-auto
                            ${redButtonColor} border-2 ${yellowBorderColor} 
                            hover:bg-red-900 transition-colors duration-300`}
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;