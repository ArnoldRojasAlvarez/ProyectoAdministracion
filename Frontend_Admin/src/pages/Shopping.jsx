import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CartPage = () => {
    // Sample cart items - can be managed with state management later
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Ribeye Supreme",
            description: "16oz prime ribeye, aged 28 days",
            price: 58.00,
            quantity: 2,
            weight: "16 oz"
        },
        {
            id: 2,
            name: "Truffle Mac & Cheese",
            description: "House blend with black truffle",
            price: 14.00,
            quantity: 1,
            weight: null
        },
        {
            id: 3,
            name: "House Red Wine",
            description: "Cabernet Sauvignon",
            price: 12.00,
            quantity: 2,
            weight: "Glass"
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    return (
        <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <main className="flex-grow pt-20 md:pt-24">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-b from-[#1a1410] to-[#0a0a0a] py-12 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="w-16 h-1 bg-[#b8812e] mb-4" />
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white"
                                    style={{ fontFamily: 'Georgia, serif' }}>
                                    Your Cart
                                </h1>
                                <p className="text-gray-400 mt-2">
                                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                                </p>
                            </div>
                            <a
                                href="/menu"
                                className="hidden md:flex items-center text-[#b8812e] hover:text-white transition-colors text-sm uppercase tracking-wider"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                </svg>
                                Continue Shopping
                            </a>
                        </div>
                    </div>
                </section>

                {cartItems.length === 0 ? (
                    /* Empty Cart State */
                    <section className="py-20 md:py-32">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <div className="max-w-md mx-auto">
                                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Your cart is empty</h2>
                                <p className="text-gray-400 mb-8">Add some delicious items to get started</p>
                                <a
                                    href="/menu"
                                    className="inline-flex items-center px-8 py-4 bg-[#8b2e22] text-white text-sm font-semibold
                                             border-2 border-[#b8812e] hover:bg-transparent hover:text-[#b8812e]
                                             transition-all duration-300 uppercase tracking-wider"
                                >
                                    Browse Menu
                                </a>
                            </div>
                        </div>
                    </section>
                ) : (
                    /* Cart Content */
                    <section className="py-8 md:py-12">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                
                                {/* Cart Items */}
                                <div className="lg:col-span-2 space-y-4">
                                    {cartItems.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 
                                                     rounded-lg p-4 md:p-6 hover:border-[#b8812e]/50 transition-all duration-300"
                                            style={{
                                                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                                            }}
                                        >
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                {/* Product Image Placeholder */}
                                                <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] 
                                                              rounded-lg flex items-center justify-center flex-shrink-0
                                                              border-2 border-[#b8812e]/30">
                                                    <svg className="w-12 h-12 text-[#b8812e]/30" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8.5l7-3.5 7 3.5V13c0 4-3 7-7 7z"/>
                                                    </svg>
                                                </div>

                                                {/* Product Details */}
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div>
                                                            <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                                                                {item.name}
                                                            </h3>
                                                            <p className="text-sm text-gray-400">
                                                                {item.description}
                                                            </p>
                                                            {item.weight && (
                                                                <p className="text-xs text-gray-500 mt-1">
                                                                    {item.weight}
                                                                </p>
                                                            )}
                                                        </div>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="text-gray-400 hover:text-red-500 transition-colors p-2"
                                                            aria-label="Remove item"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-4">
                                                        {/* Quantity Controls */}
                                                        <div className="flex items-center space-x-3">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="w-8 h-8 bg-white/5 hover:bg-[#8b2e22] border border-white/10 
                                                                         hover:border-[#b8812e] rounded flex items-center justify-center
                                                                         transition-all duration-300 text-white"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path d="M20 12H4"/>
                                                                </svg>
                                                            </button>
                                                            <span className="text-white font-semibold w-8 text-center">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-8 h-8 bg-white/5 hover:bg-[#8b2e22] border border-white/10 
                                                                         hover:border-[#b8812e] rounded flex items-center justify-center
                                                                         transition-all duration-300 text-white"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path d="M12 4v16m8-8H4"/>
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        {/* Price */}
                                                        <div className="text-right">
                                                            <p className="text-[#b8812e] font-bold text-xl">
                                                                ${(item.price * item.quantity).toFixed(2)}
                                                            </p>
                                                            {item.quantity > 1 && (
                                                                <p className="text-gray-500 text-xs">
                                                                    ${item.price.toFixed(2)} each
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Continue Shopping - Mobile */}
                                    <a
                                        href="/menu"
                                        className="md:hidden flex items-center justify-center text-[#b8812e] hover:text-white 
                                                 transition-colors text-sm uppercase tracking-wider py-4
                                                 border border-white/10 rounded-lg hover:border-[#b8812e]/50"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                        </svg>
                                        Continue Shopping
                                    </a>
                                </div>

                                {/* Order Summary */}
                                <div className="lg:col-span-1">
                                    <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 
                                                  rounded-lg p-6 sticky top-28">
                                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">
                                            Order Summary
                                        </h2>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-gray-300">
                                                <span>Subtotal</span>
                                                <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-gray-300">
                                                <span>Tax (8%)</span>
                                                <span className="font-semibold">${tax.toFixed(2)}</span>
                                            </div>
                                            <div className="border-t border-white/10 pt-4">
                                                <div className="flex justify-between text-white text-xl font-bold">
                                                    <span>Total</span>
                                                    <span className="text-[#b8812e]">${total.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Checkout Button */}
                                        <button className="w-full px-6 py-4 bg-[#8b2e22] text-white text-sm font-bold
                                                         border-2 border-[#b8812e] hover:bg-transparent hover:text-[#b8812e]
                                                         transition-all duration-300 uppercase tracking-wider mb-4
                                                         flex items-center justify-center group">
                                            Proceed to Checkout
                                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                                                 fill="none" strokeLinecap="round" strokeLinejoin="round" 
                                                 strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                            </svg>
                                        </button>

                                        {/* Additional Info */}
                                        <div className="space-y-3 text-sm text-gray-400">
                                            <div className="flex items-start space-x-2">
                                                <svg className="w-5 h-5 text-[#b8812e] flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M5 13l4 4L19 7"/>
                                                </svg>
                                                <span>Secure checkout</span>
                                            </div>
                                            <div className="flex items-start space-x-2">
                                                <svg className="w-5 h-5 text-[#b8812e] flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                <span>Estimated preparation: 45-60 min</span>
                                            </div>
                                            <div className="flex items-start space-x-2">
                                                <svg className="w-5 h-5 text-[#b8812e] flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                                                </svg>
                                                <span>All major cards accepted</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default CartPage;