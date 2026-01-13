import { useState, useEffect, useRef } from 'react';

const BackAfter = () => {
    const [activeStates, setActiveStates] = useState([false, false, false]);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const images = [
        { before: "/Antes y despues 1/imagen-1.png", after: "/Antes y despues 1/imagen-2.png" },
        { before: "/Antes y despues 2/imagen-1.jpeg", after: "/Antes y despues 2/imagen-2.jpeg" },
        { before: "/IMG-20250327-WA0017.jpg", after: "/IMG-20250327-WA0013.jpg" },
    ];

    // Auto-play en mobile: cambiar cada 1.5 segundos
    useEffect(() => {
        if (window.innerWidth < 768) {
            const intervals = images.map((_, index) => {
                return setInterval(() => {
                    setActiveStates(prev => {
                        const newStates = [...prev];
                        newStates[index] = !newStates[index];
                        return newStates;
                    });
                }, 3000);
            });

            return () => intervals.forEach(interval => clearInterval(interval));
        }
    }, []);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (index) => {
        if (touchStartX.current - touchEndX.current > 50) {
            // Swipe left - mostrar después
            setActiveStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
            });
        }

        if (touchStartX.current - touchEndX.current < -50) {
            // Swipe right - mostrar antes
            setActiveStates(prev => {
                const newStates = [...prev];
                newStates[index] = false;
                return newStates;
            });
        }
    };

    return (
        <section className="bg-blanco min-h-screen py-16 px-6 flex items-center">
            <div className="max-w-6xl mx-auto text-center w-full">
                <h2 className="text-4xl font-bold mb-12 uppercase text-negro">Antes y Después</h2>

                {/* Galería */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative w-full h-[600px] overflow-hidden shadow-2xl rounded-lg group cursor-pointer transform transition-all duration-500 md:hover:scale-105 md:hover:shadow-3xl"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={() => handleTouchEnd(index)}
                        >
                            {/* Imagen Antes */}
                            <img
                                src={img.before}
                                alt="Antes"
                                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${activeStates[index] || false
                                    ? 'opacity-0 scale-110'
                                    : 'opacity-100 scale-100'
                                    } md:group-hover:opacity-0 md:group-hover:scale-110`}
                            />

                            {/* Imagen Después */}
                            <img
                                src={img.after}
                                alt="Después"
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${activeStates[index] || false
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-95'
                                    } md:opacity-0 md:scale-95 md:group-hover:opacity-100 md:group-hover:scale-100`}
                            />

                            {/* Etiquetas que aparecen */}
                            <div className={`absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold transition-opacity duration-500 ${activeStates[index] || false ? 'opacity-0' : 'opacity-100'
                                } md:opacity-100 md:group-hover:opacity-0`}>
                                Antes
                            </div>
                            <div className={`absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold transition-opacity duration-500 ${activeStates[index] || false ? 'opacity-100' : 'opacity-0'
                                } md:opacity-0 md:group-hover:opacity-100`}>
                                Después
                            </div>

                            {/* Indicador de swipe solo en mobile */}
                            <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${!activeStates[index] ? 'bg-white w-6' : 'bg-white/50'
                                    }`} />
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeStates[index] ? 'bg-white w-6' : 'bg-white/50'
                                    }`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BackAfter;
