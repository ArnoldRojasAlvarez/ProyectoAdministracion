// src/pages/About.jsx
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HeroSection, SectionHeader, Button } from '../components/ui/SharedComponents';
import { ArrowRight } from 'lucide-react';

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
        <div className="flex flex-col min-h-screen bg-neutral-950">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <HeroSection
                    backgroundImage="https://www.teahub.io/photos/full/355-3559242_wine-and-steak-house.jpg"
                    badge="Nuestra Historia"
                    title="Nuestro Legado"
                    subtitle="Donde la tradición se encuentra con la excelencia"
                />

                {/* Main Content Section */}
                <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        {/* History & Vision Section */}
                        <div
                            id="section1"
                            className="observe grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 md:mb-32"
                        >
                            <div
                                className={`order-2 lg:order-1 space-y-6 transition-all duration-1000 ${isVisible.section1
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-10'
                                    }`}
                            >
                                <div className="space-y-4">
                                    <div className="w-16 h-1 bg-primary-500 rounded-full" />
                                    <h2
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                                        style={{ fontFamily: 'Georgia, serif' }}
                                    >
                                        Historia y Visión
                                    </h2>
                                </div>

                                <p className="text-base md:text-lg leading-relaxed text-neutral-300">
                                    PrimeCut es más que un asadero—es una celebración del arte 
                                    culinario. Nacimos de la pasión por la excelencia y nos hemos 
                                    ganado nuestra reputación seleccionando únicamente los mejores 
                                    cortes y tratando cada pieza con el respeto que merece.
                                </p>

                                <p className="text-base md:text-lg leading-relaxed text-neutral-300">
                                    Nuestra visión es crear una experiencia gastronómica 
                                    inolvidable donde cada platillo refleja maestría y cada 
                                    comida une a las personas.
                                </p>
                            </div>

                            <div
                                className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible.section1
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-10'
                                    }`}
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-neutral-800 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl shadow-black/20">
                                        <img
                                            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80"
                                            alt="Nuestra Historia y Visión"
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
                            <div
                                className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible.section2
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-10'
                                    }`}
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-neutral-800 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl shadow-black/20">
                                        <img
                                            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                                            alt="El Arte del Asado"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`order-1 lg:order-2 space-y-6 transition-all duration-1000 ${isVisible.section2
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-10'
                                    }`}
                            >
                                <div className="space-y-4">
                                    <div className="w-16 h-1 bg-primary-500 rounded-full" />
                                    <h2
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                                        style={{ fontFamily: 'Georgia, serif' }}
                                    >
                                        El Arte del Asado
                                    </h2>
                                </div>

                                <p className="text-base md:text-lg leading-relaxed text-neutral-300">
                                    El fuego es nuestro lienzo y la parrilla donde ocurre la magia. 
                                    Nuestros maestros chef entienden que preparar el corte perfecto 
                                    es ciencia y arte. Cada pieza se selecciona cuidadosamente, se 
                                    madura a la perfección y se sella a temperaturas precisas.
                                </p>

                                <p className="text-base md:text-lg leading-relaxed text-neutral-300">
                                    Desde el momento en que el corte toca la llama hasta que llega 
                                    a tu mesa, cada paso se ejecuta con atención meticulosa. No solo 
                                    cocinamos carnes—creamos experiencias memorables.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="relative bg-gradient-to-r from-accent-500 via-primary-500 to-accent-500 text-white py-16 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="w-full h-full"
                            style={{
                                backgroundImage:
                                    'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'4.5\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                            }}
                        />
                    </div>

                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <svg
                            className="w-12 h-12 md:w-16 md:h-16 text-white/30 mx-auto mb-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>

                        <h3
                            className="text-2xl md:text-3xl lg:text-4xl font-light italic max-w-4xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            "El corte perfecto no se cocina, se elabora con pasión, 
                            precisión y un compromiso inquebrantable con la excelencia."
                        </h3>

                        <div className="w-20 h-1 bg-white/30 mx-auto mt-8 rounded-full" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;