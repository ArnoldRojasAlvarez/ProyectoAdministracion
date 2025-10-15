import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import aboutBanner from '../assets/images/hero-steak.jpg';
import background from '../assets/images/wood-bg2.jpg';

const AboutPage = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.observe').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section
                    className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center text-white"
                    style={{ backgroundImage: `url(${aboutBanner})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="w-20 h-1 bg-[#b8812e] mx-auto mb-6 animate-slideIn" />
                        
                        <p className="text-[#b8812e] text-sm md:text-base font-light tracking-[0.4em] uppercase mb-4 animate-fadeIn">
                            OUR STORY
                        </p>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 tracking-wider animate-fadeInUp"
                            style={{ fontFamily: 'Georgia, serif' }}>
                            Our Legacy
                        </h1>
                        
                        <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-3xl mx-auto leading-relaxed animate-fadeIn"
                           style={{ animationDelay: '0.3s' }}>
                            Where tradition meets excellence, and every cut tells a story
                        </p>
                    </div>
                </section>

                {/* Main Content Section */}
                <section
                    className="relative py-16 md:py-24 lg:py-32 text-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="absolute inset-0 bg-black/85"></div>

                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        
                        {/* History & Vision Section */}
                        <div 
                            id="section1"
                            className="observe grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 md:mb-32"
                        >
                            <div className={`order-2 lg:order-1 space-y-6 transition-all duration-1000 ${
                                isVisible.section1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}>
                                <div className="space-y-4">
                                    <div className="w-16 h-1 bg-[#b8812e]"></div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white tracking-wide">
                                        The History & Vision
                                    </h2>
                                </div>
                                
                                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                    Since our founding, PrimeCut has been more than just a steakhouse—it's a 
                                    celebration of culinary artistry. Born from a passion for excellence and a 
                                    dedication to the craft, we've built our reputation on sourcing only the 
                                    finest cuts and treating each piece of meat with the respect it deserves.
                                </p>
                                
                                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                    Our vision is simple yet profound: to create an unforgettable dining experience 
                                    where every guest feels the warmth of our hospitality and the mastery behind 
                                    every dish. We believe that great food brings people together, and every meal 
                                    at PrimeCut is a testament to that belief.
                                </p>
                                
                                <Link 
                                    to="/contact" 
                                    className="group inline-flex items-center mt-6 px-8 py-3.5 font-semibold text-white 
                                             bg-[#8b2e22] border-2 border-[#b8812e] 
                                             hover:bg-transparent hover:text-[#b8812e] 
                                             transition-all duration-300 uppercase tracking-wider"
                                >
                                    Meet The Team
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                                         fill="none" strokeLinecap="round" strokeLinejoin="round" 
                                         strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </Link>
                            </div>
                            
                            <div className={`order-1 lg:order-2 transition-all duration-1000 ${
                                isVisible.section1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}>
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#b8812e] to-[#8b2e22] 
                                                  rounded-lg opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden 
                                                  border-2 border-[#b8812e]/30 group-hover:border-[#b8812e] 
                                                  transition-all duration-500 shadow-2xl">
                                        <img
                                            src="src/assets/images/history-bg.webp"
                                            alt="Our History and Vision"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Art of the Grill Section */}
                        <div 
                            id="section2"
                            className="observe grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                        >
                            <div className={`order-2 lg:order-1 transition-all duration-1000 ${
                                isVisible.section2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}>
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#8b2e22] to-[#b8812e] 
                                                  rounded-lg opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden 
                                                  border-2 border-[#b8812e]/30 group-hover:border-[#b8812e] 
                                                  transition-all duration-500 shadow-2xl bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
                                        <div className="flex items-center justify-center h-full">
                                            <svg className="w-32 h-32 text-[#b8812e]/20" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.5 1.5c-1.77 0-3.33.78-4.42 2-.39-.31-.88-.5-1.41-.5-1.25 0-2.26 1.01-2.26 2.26 0 .54.19 1.03.51 1.41C3.78 7.67 3 9.23 3 11c0 2.76 2.24 5 5 5h1v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V16h2v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V16h1c2.76 0 5-2.24 5-5 0-1.77-.78-3.33-2-4.42.32-.38.5-.87.5-1.41 0-1.25-1.01-2.26-2.26-2.26-.53 0-1.02.19-1.41.51-1.09-1.23-2.65-2.01-4.42-2.01z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`order-1 lg:order-2 space-y-6 transition-all duration-1000 ${
                                isVisible.section2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}>
                                <div className="space-y-4">
                                    <div className="w-16 h-1 bg-[#b8812e]"></div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white tracking-wide">
                                        The Art of the Grill
                                    </h2>
                                </div>
                                
                                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                    Fire is our canvas, and the grill is where magic happens. Our master chefs 
                                    understand that cooking the perfect steak is both a science and an art. Each 
                                    cut is carefully selected, aged to perfection, and seared at precise temperatures 
                                    to lock in the natural flavors and create that signature char.
                                </p>
                                
                                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                    From the moment the steak touches the flame to the second it reaches your plate, 
                                    every step is executed with meticulous attention to detail. We don't just cook 
                                    steaks—we craft experiences that awaken your senses and leave lasting memories.
                                </p>
                                
                                <Link 
                                    to="/reservations" 
                                    className="group inline-flex items-center mt-6 px-8 py-3.5 font-semibold text-white 
                                             bg-[#8b2e22] border-2 border-[#b8812e] 
                                             hover:bg-transparent hover:text-[#b8812e] 
                                             transition-all duration-300 uppercase tracking-wider"
                                >
                                    Book Your Experience
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                                         fill="none" strokeLinecap="round" strokeLinejoin="round" 
                                         strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Quote Section */}
                <section className="relative bg-gradient-to-r from-[#8b2e22] via-[#a03628] to-[#8b2e22] text-white py-16 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-10" 
                         style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulance type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")' }}>
                    </div>
                    
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <svg className="w-12 h-12 md:w-16 md:h-16 text-[#b8812e] mx-auto mb-6 opacity-50" 
                             fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                        </svg>
                        
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light italic max-w-4xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'Georgia, serif' }}>
                            "The perfect steak is not cooked, it is crafted with passion, 
                            precision, and an unwavering commitment to excellence."
                        </h3>
                        
                        <div className="w-20 h-1 bg-[#b8812e] mx-auto mt-8"></div>
                    </div>
                </section>

            </main>

            <Footer />

            <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: scaleX(0);
                    }
                    to {
                        opacity: 1;
                        transform: scaleX(1);
                    }
                }

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

                .animate-slideIn {
                    animation: slideIn 0.8s ease-out both;
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out both;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out both;
                }
            `}</style>
        </div>
    );
};

export default AboutPage;