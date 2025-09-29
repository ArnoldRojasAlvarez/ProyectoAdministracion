import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative min-h-screen bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&h=1080&fit=crop')`,
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl">
                        <p className="text-white text-sm sm:text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">
                            EXPERIENCE
                        </p>
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-tight mb-4 sm:mb-6">
                            EXPERIENCE PRIMCUT PERFECTION
                        </h1>
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl italic mb-6 sm:mb-8 font-serif">
                            Where Fire Meets Flavor
                        </p>
                        <Link
                            to="/menu"
                            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#8b2e22] text-white text-sm sm:text-base font-semibold
                                    border-2 border-[#b8812e] hover:bg-[#6b1e12] transition-colors duration-300
                                    uppercase tracking-wider"
                        >
                            VIEW MENU
                        </Link>
                    </div>
                </div>

                {/* Bottom Icons Section */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#8b4513]/90 via-[#8b4513]/70 to-transparent py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                            {/* Premium Cuts */}
                            <div className="text-center">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/90 rounded-full 
                                                flex items-center justify-center mx-auto mb-3 sm:mb-4 
                                                border-4 border-[#b8812e] shadow-lg">
                                    <div className="text-[#8b2e22] font-bold text-xs sm:text-sm">
                                        <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider">
                                    Premium Cuts
                                </h3>
                            </div>

                            {/* Fine Wine Selection */}
                            <div className="text-center">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/90 rounded-full 
                                                flex items-center justify-center mx-auto mb-3 sm:mb-4 
                                                border-4 border-[#b8812e] shadow-lg">
                                    <div className="text-[#8b2e22] font-bold">
                                        <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3H6zm10 6c0 2.21-1.79 4-4 4s-4-1.79-4-4V5h8v4z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider">
                                    Fine Wine Selection
                                </h3>
                            </div>

                            {/* Artisanal Cooking */}
                            <div className="text-center">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/90 rounded-full 
                                                flex items-center justify-center mx-auto mb-3 sm:mb-4 
                                                border-4 border-[#b8812e] shadow-lg">
                                    <div className="text-[#8b2e22] font-bold">
                                        <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.5 1.5c-1.77 0-3.33.78-4.42 2-.39-.31-.88-.5-1.41-.5-1.25 0-2.26 1.01-2.26 2.26 0 .54.19 1.03.51 1.41C3.78 7.67 3 9.23 3 11c0 2.76 2.24 5 5 5h1v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V16h2v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V16h1c2.76 0 5-2.24 5-5 0-1.77-.78-3.33-2-4.42.32-.38.5-.87.5-1.41 0-1.25-1.01-2.26-2.26-2.26-.53 0-1.02.19-1.41.51-1.09-1.23-2.65-2.01-4.42-2.01z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider">
                                    Artisanal Cooking
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;