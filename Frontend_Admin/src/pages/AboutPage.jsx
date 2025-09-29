import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import { Link } from 'react-router-dom';

import aboutBanner from '../assets/images/hero-steak.jpg'; 
import background from '../assets/images/wood-bg.jpg'; 

const AboutPage = () => {
    const bgColor = 'bg-[#3d2c20]'; 
    const darkTextColor = 'text-[#3d2c20]';
    const redButtonColor = 'bg-[#8b2e22]';
    const yellowBorderColor = 'border-[#b8812e]';

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">

                <section
                    className="relative py-24 md:py-32 lg:py-48 bg-cover bg-center text-white"
                    style={{ backgroundImage: `url(${aboutBanner})` }} 
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4 tracking-wider">
                            Our Legacy
                        </h1>
                        <p className="text-xl md:text-2xl font-serif italic max-w-2xl mx-auto">
                            The heart of our kitchen beats with tradition, fire, and passion.
                        </p>
                    </div>
                </section>

                <section
                    className="relative py-16 md:py-24 text-gray-200 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${background})` }} 
                >

                    <div className="relative z-10 container mx-auto px-4 max-w-6xl">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-32">
                            <div className="order-2 lg:order-1 space-y-6">
                                <h2 className="text-4xl font-semibold uppercase text-white border-b-2 border-red-700 pb-2 inline-block">
                                    The History & Vision
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Our journey began two decades ago with a simple dream: to serve the finest steaks in the region. Founded by Chef Roberto, Quecos Steak House was built on the principle that exceptional ingredients, traditional cooking methods, and warm hospitality are the cornerstones of a memorable dining experience.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    From a humble, family-run grill to a city landmark, our commitment to quality has never wavered. Every cut is hand-selected, and every dish is prepared with meticulous care, honoring the legacy of the great steakhouses of the past while embracing modern culinary artistry.
                                </p>
                                <Link to="/contact" className={`mt-4 inline-block px-6 py-3 font-semibold text-white ${redButtonColor} border-2 ${yellowBorderColor} hover:bg-red-900 transition-colors duration-300`}>
                                    MEET THE TEAM
                                </Link>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="h-96 bg-gray-600 shadow-xl border-4 border-yellow-800 flex items-center justify-center">
                                                                    </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-2">
                                <div className="h-96 bg-gray-600 shadow-xl border-4 border-yellow-800 flex items-center justify-center">
                                                                    </div>
                            </div>
                            <div className="order-1 lg:order-1 space-y-6">
                                <h2 className="text-4xl font-semibold uppercase text-white border-b-2 border-red-700 pb-2 inline-block">
                                    The Art of the Grill
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Our signature flavor comes from our custom-built wood-fired grill. We use select hardwoods to achieve a smokiness that perfectly complements the rich marbling of our USDA Prime beef. It's an ancient technique refined for a contemporary palate.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Beyond the steak, our culinary philosophy extends to every component: farm-fresh vegetables, house-made sauces, and a sommelier-curated wine list designed to enhance the intense flavors of the grill. Quality is not just an ingredient; it is the process.
                                </p>
                                <Link to="/reservations" className={`mt-4 inline-block px-6 py-3 font-semibold text-white ${redButtonColor} border-2 ${yellowBorderColor} hover:bg-red-900 transition-colors duration-300`}>
                                    BOOK YOUR EXPERIENCE
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="bg-red-800 text-white py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl md:text-5xl font-serif italic font-light">
                            "The perfect steak is not cooked, it is crafted."
                        </h3>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;