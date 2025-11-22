// src/pages/Menu.jsx (o donde lo tengas)

import React, { useState } from 'react'; // Ya no necesitamos useEffect aquí
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMenuData } from '../hooks/useMenuData'; // <--- 1. IMPORTAMOS EL HOOK

// Las categorías de los botones se quedan aquí, son parte de la UI
const categories = [
    { id: 'steaks', name: 'Cuts' },
    { id: 'appetizers', name: 'Starters' },
    { id: 'sides', name: 'Sides' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Beverages' }
];

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('steaks');

    // 2. LLAMAMOS AL HOOK Y OBTENEMOS LOS DATOS
    // Toda la lógica de fetch, loading, error y transform está encapsulada aquí
    const { menuItems, loading, error } = useMenuData();

    // 3. RENDERIZADO CONDICIONAL (exactamente igual que antes)
    if (loading) {
        return (
            <div className="flex flex-col min-h-screen bg-[#0a0a0a] items-center justify-center pt-20">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <h2 className="text-white text-3xl font-light">Cargando menú...</h2>
                </main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col min-h-screen bg-[#0a0a0a] items-center justify-center pt-20">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-red-500 text-3xl font-bold">Error al cargar el menú</h2>
                    <p className="text-gray-400 mt-2">({error})</p>
                    <p className="text-gray-500 mt-4">
                        Asegúrate de que la API de Django esté corriendo en: <br />
                        <code className="text-yellow-500">http://127.0.0.1:8000</code>
                    </p>
                </main>
                <Footer />
            </div>
        );
    }

    // 4. RENDERIZADO DE LA PÁGINA (exactamente igual que antes)
    return (
        <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <main className="flex-grow pt-20 md:pt-24">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-b from-[#1a1410] to-[#0a0a0a] py-16 md:py-24">
                    <div className="absolute inset-0 opacity-5"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")' }}>
                    </div>
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="w-20 h-1 bg-[#b8812e] mx-auto mb-6" />
                        <p className="text-[#b8812e] text-sm md:text-base font-light tracking-[0.4em] uppercase mb-4">
                            CULINARY EXCELLENCE
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 tracking-wider text-white"
                            style={{ fontFamily: 'Georgia, serif' }}>
                            Our Menu
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="sticky top-20 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 py-4">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex overflow-x-auto space-x-2 md:space-x-4 scrollbar-hide">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`
                                        flex items-center space-x-2 px-6 py-3 rounded-lg whitespace-nowrap
                                        transition-all duration-300 font-semibold text-sm uppercase tracking-wider
                                        ${activeCategory === category.id
                                            ? 'bg-[#8b2e22] text-white border-2 border-[#b8812e]'
                                            : 'bg-white/5 text-gray-400 border-2 border-transparent hover:border-[#b8812e] hover:text-white'
                                        }
                                    `}
                                >
                                    <span className="text-xl">{category.icon}</span>
                                    <span>{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Menu Items */}
                <section className="relative py-12 md:py-20 bg-[#0a0a0a]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

                            {menuItems[activeCategory] && menuItems[activeCategory].length > 0 ? (
                                menuItems[activeCategory].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-gradient-to-b from-white/5 to-transparent 
                                                   border border-white/10 rounded-lg p-6 md:p-8
                                                   hover:border-[#b8812e]/50 transition-all duration-500
                                                   hover:transform hover:-translate-y-1"
                                        style={{
                                            animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#b8812e]/0 to-[#8b2e22]/0 
                                                        group-hover:from-[#b8812e]/5 group-hover:to-[#8b2e22]/5 
                                                        rounded-lg transition-all duration-500 pointer-events-none" />
                                        <div className="relative">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex-1">
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#b8812e] transition-colors">
                                                        {item.name}
                                                    </h3>
                                                </div>
                                                <div className="text-2xl font-bold text-[#b8812e] ml-4">
                                                    {item.price}
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                                                {item.description}
                                            </p>
                                            <button className="mt-4 w-full px-4 py-2.5 bg-transparent text-white text-sm font-semibold
                                                               border-2 border-white/20 rounded hover:border-[#b8812e] hover:text-[#b8812e]
                                                               transition-all duration-300 uppercase tracking-wider opacity-0 
                                                               group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                                                Add to Order
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="md:col-span-2 text-center py-12">
                                    <p className="text-gray-400 text-lg">
                                        No hay productos disponibles en esta categoría.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="relative bg-gradient-to-r from-[#8b2e22] via-[#a03628] to-[#8b2e22] py-16 md:py-20">
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")' }}>
                    </div>
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                            style={{ fontFamily: 'Georgia, serif' }}>
                            Ready to Experience Excellence?
                        </h2>
                        <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Reserve your table and let us take you on a culinary journey
                        </p>
                        <a
                            href="/reservations"
                            className="inline-flex items-center px-8 py-4 bg-white text-[#8b2e22] text-sm font-bold
                                       hover:bg-[#b8812e] hover:text-white transition-all duration-300 
                                       uppercase tracking-wider group"
                        >
                            Make a Reservation
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                fill="none" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </section>
            </main>

            <Footer />

            <style>{`
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
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default MenuPage;