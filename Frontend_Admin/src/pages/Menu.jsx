import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('steaks');

    const categories = [
        { id: 'steaks', name: 'Cuts' },
        { id: 'appetizers', name: 'Starters'},
        { id: 'sides', name: 'Sides'},
        { id: 'desserts', name: 'Desserts'},
        { id: 'drinks', name: 'Beverages' }
    ];

    const menuItems = {
        steaks: [
            {
                name: "Ribeye Supreme",
                description: "16oz prime ribeye, perfectly marbled and aged 28 days",
                price: "$58",
                tags: ["Chef's Choice", "Premium"],
                weight: "16 oz"
            },
            {
                name: "Filet Mignon",
                description: "8oz center-cut tenderloin, butter-soft texture",
                price: "$52",
                tags: ["Signature"],
                weight: "8 oz"
            },
            {
                name: "New York Strip",
                description: "14oz premium strip steak with bold, beefy flavor",
                price: "$48",
                tags: ["Popular"],
                weight: "14 oz"
            },
            {
                name: "Porterhouse",
                description: "24oz combination of tenderloin and strip loin",
                price: "$68",
                tags: ["For Sharing"],
                weight: "24 oz"
            },
            {
                name: "Wagyu A5",
                description: "6oz authentic Japanese Wagyu, exceptional marbling",
                price: "$145",
                tags: ["Premium", "Limited"],
                weight: "6 oz"
            },
            {
                name: "Tomahawk Ribeye",
                description: "32oz bone-in ribeye, dramatic presentation",
                price: "$85",
                tags: ["Showstopper"],
                weight: "32 oz"
            }
        ],
        appetizers: [
            {
                name: "Beef Tartare",
                description: "Hand-cut premium beef, capers, shallots, quail egg",
                price: "$18",
                tags: ["Raw"]
            },
            {
                name: "Seared Scallops",
                description: "Pan-seared scallops with brown butter and herbs",
                price: "$22",
                tags: ["Signature"]
            },
            {
                name: "Charcuterie Board",
                description: "Selection of cured meats, artisan cheeses, preserves",
                price: "$26",
                tags: ["For Sharing"]
            },
            {
                name: "Grilled Octopus",
                description: "Tender octopus, chorizo, roasted peppers",
                price: "$19",
                tags: ["Mediterranean"]
            },
            {
                name: "Bone Marrow",
                description: "Roasted bone marrow with herb crust and toast points",
                price: "$16",
                tags: ["Rich"]
            },
            {
                name: "Oysters on the Half Shell",
                description: "Fresh daily selection, mignonette, cocktail sauce",
                price: "$24",
                tags: ["Fresh", "Daily"]
            }
        ],
        sides: [
            {
                name: "Truffle Mac & Cheese",
                description: "Creamy house blend, black truffle oil, parmesan crust",
                price: "$14"
            },
            {
                name: "Loaded Baked Potato",
                description: "Butter, sour cream, bacon, chives, aged cheddar",
                price: "$10"
            },
            {
                name: "Grilled Asparagus",
                description: "Charred asparagus, lemon zest, parmesan",
                price: "$12"
            },
            {
                name: "Creamed Spinach",
                description: "Classic preparation with cream, garlic, nutmeg",
                price: "$11"
            },
            {
                name: "Wild Mushroom Medley",
                description: "Sautéed seasonal mushrooms, garlic butter, thyme",
                price: "$13"
            },
            {
                name: "Brussels Sprouts",
                description: "Roasted with bacon, balsamic glaze, pecans",
                price: "$12"
            }
        ],
        desserts: [
            {
                name: "Molten Chocolate Cake",
                description: "Warm chocolate center, vanilla ice cream, berry compote",
                price: "$12"
            },
            {
                name: "Crème Brûlée",
                description: "Classic vanilla custard, caramelized sugar crust",
                price: "$11"
            },
            {
                name: "New York Cheesecake",
                description: "Rich and creamy, graham cracker crust, fresh berries",
                price: "$10"
            },
            {
                name: "Tiramisu",
                description: "Espresso-soaked ladyfingers, mascarpone, cocoa",
                price: "$11"
            },
            {
                name: "Seasonal Sorbet Trio",
                description: "Chef's selection of fresh fruit sorbets",
                price: "$9"
            }
        ],
        drinks: [
            {
                name: "House Red Wine",
                description: "Cabernet Sauvignon, full-bodied with notes of dark fruit",
                price: "$12/glass"
            },
            {
                name: "House White Wine",
                description: "Chardonnay, crisp with hints of apple and vanilla",
                price: "$12/glass"
            },
            {
                name: "Old Fashioned",
                description: "Bourbon, bitters, sugar, orange twist",
                price: "$14"
            },
            {
                name: "Espresso Martini",
                description: "Vodka, coffee liqueur, fresh espresso",
                price: "$15"
            },
            {
                name: "Classic Manhattan",
                description: "Rye whiskey, sweet vermouth, bitters, cherry",
                price: "$14"
            },
            {
                name: "Craft Beer Selection",
                description: "Rotating local and imported craft beers",
                price: "$8-12"
            }
        ]
    };

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
                            {menuItems[activeCategory].map((item, index) => (
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
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#b8812e]/0 to-[#8b2e22]/0 
                                                    group-hover:from-[#b8812e]/5 group-hover:to-[#8b2e22]/5 
                                                    rounded-lg transition-all duration-500 pointer-events-none" />

                                    <div className="relative">
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#b8812e] transition-colors">
                                                    {item.name}
                                                </h3>
                                                {item.tags && (
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        {item.tags.map((tag, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-xs px-2 py-1 bg-[#b8812e]/20 text-[#b8812e] 
                                                                            rounded-full border border-[#b8812e]/30"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-2xl font-bold text-[#b8812e] ml-4">
                                                {item.price}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        {/* Weight (for steaks) */}
                                        {item.weight && (
                                            <div className="flex items-center text-sm text-gray-500">
                                                <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                                </svg>
                                                <span>{item.weight}</span>
                                            </div>
                                        )}

                                        {/* Add to Cart Button */}
                                        <button className="mt-4 w-full px-4 py-2.5 bg-transparent text-white text-sm font-semibold
                                                            border-2 border-white/20 rounded hover:border-[#b8812e] hover:text-[#b8812e]
                                                            transition-all duration-300 uppercase tracking-wider opacity-0 
                                                            group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                                            Add to Order
                                        </button>
                                    </div>
                                </div>
                            ))}
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