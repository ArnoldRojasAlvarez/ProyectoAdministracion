import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: (
                <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8.5l7-3.5 7 3.5V13c0 4-3 7-7 7z" />
                </svg>
            ),
            title: "Premium Cuts",
            description: "Only the finest selection"
        },
        {
            icon: (
                <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3H6zm10 6c0 2.21-1.79 4-4 4s-4-1.79-4-4V5h8v4z" />
                </svg>
            ),
            title: "Fine Wine Selection",
            description: "Expertly curated wines"
        },
        {
            icon: (
                <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.5 1.5c-1.77 0-3.33.78-4.42 2-.39-.31-.88-.5-1.41-.5-1.25 0-2.26 1.01-2.26 2.26 0 .54.19 1.03.51 1.41C3.78 7.67 3 9.23 3 11c0 2.76 2.24 5 5 5h1v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V16h2v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V16h1c2.76 0 5-2.24 5-5 0-1.77-.78-3.33-2-4.42.32-.38.5-.87.5-1.41 0-1.25-1.01-2.26-2.26-2.26-.53 0-1.02.19-1.41.51-1.09-1.23-2.65-2.01-4.42-2.01z" />
                </svg>
            ),
            title: "Artisanal Cooking",
            description: "Crafted with passion"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image with Parallax */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&h=1080&fit=crop')`,
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

                {/* Subtle Texture Overlay */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")' }} />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl animate-fadeIn">
                        {/* Accent Line */}
                        <div className="w-20 h-1 bg-[#b8812e] mb-6 animate-slideInLeft" />

                        <p className="text-[#b8812e] text-xs sm:text-sm md:text-base font-light tracking-[0.4em] uppercase mb-4 animate-fadeIn"
                            style={{ animationDelay: '0.2s' }}>
                            AUTHENTIC EXPERIENCE
                        </p>

                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeInUp"
                            style={{ animationDelay: '0.3s', fontFamily: 'Georgia, serif' }}>
                            Where Fire Meets
                            <span className="block text-[#b8812e] mt-2">Perfection</span>
                        </h1>

                        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-2xl animate-fadeIn"
                            style={{ animationDelay: '0.4s' }}>
                            Experience the finest cuts, expertly prepared and served with passion
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
                            style={{ animationDelay: '0.5s' }}>
                            <a
                                href="/menu"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold
                                                        border-2 border-[#b8812e] transition-all duration-300
                                                        uppercase tracking-wider overflow-hidden text-white"
                            >
                                <span className="relative z-10">
                                    Explore Menu
                                </span>
                                <div className="absolute inset-0 bg-[#b8812e] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative bg-gradient-to-b from-[#1a1410] to-[#0a0a0a] py-20 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative text-center p-8 rounded-lg bg-gradient-to-b from-white/5 to-transparent
                                border border-white/10 hover:border-[#b8812e]/50 transition-all duration-500
                                hover:transform hover:-translate-y-2"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.1}s both`
                                }}
                            >
                                {/* Icon Container */}
                                <div className="relative w-24 h-24 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#b8812e] to-[#8b2e22] rounded-full 
                                blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="relative w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-full 
                                flex items-center justify-center
                                border-2 border-[#b8812e]/30 group-hover:border-[#b8812e] 
                                transition-all duration-500 group-hover:rotate-12">
                                        <div className="text-[#b8812e] group-hover:scale-110 transition-transform duration-500">
                                            {feature.icon}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-white text-base sm:text-lg font-semibold uppercase tracking-wider mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeInUp {
            from {
            opacity: 0;
            transform: translateY(30px);
            }
            to {
            opacity: 1;
            transform: translateY(0);
            }
        }

        @keyframes slideInLeft {
            from {
            opacity: 0;
            transform: translateX(-30px);
            }
            to {
            opacity: 1;
            transform: translateX(0);
            }
        }

        @keyframes scroll {
            0% { transform: translateY(0); opacity: 0; }
            40% { opacity: 1; }
            80% { transform: translateY(20px); opacity: 0; }
            100% { opacity: 0; }
        }

        .animate-fadeIn {
            animation: fadeIn 0.8s ease-out both;
        }

        .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out both;
        }

        .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out both;
        }

        .animate-scroll {
            animation: scroll 2s ease-in-out infinite;
        }
        `}</style>
        </div>
    );
};

export default LandingPage;