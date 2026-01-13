import { useEffect, useRef, useState } from "react";

const servicios = [
    {
        nombre: "Diseño de Jardines",
        descripcion: "Espacios verdes a tu medida.",
        icono: "/iconos-svg/LapizIcon.svg",
    },
    {
        nombre: "Mantenimiento",
        descripcion: "Cuidado periódico de tu jardín.",
        icono: "/iconos-svg/GuantesIcon.svg",
    },
    {
        nombre: "Riego automatizado",
        descripcion: "Sistemas de riego eficientes.",
        icono: "/iconos-svg/RegaderaIcon.svg",
    },
    {
        nombre: "Poda especializada",
        descripcion: "Métodos acordes a cada necesidad",
        icono: "/iconos-svg/TijeraIcon.svg",
    },
    {
        nombre: "Sanidad vegetal",
        descripcion: "Aplicación de productos para la salud vegetal.",
        icono: "/iconos-svg/PalaIcon.svg",
    },
    {
        nombre: "Relleno y nivelación",
        descripcion: "Preparación del terreno ideal.",
        icono: "/iconos-svg/Pala2Icon.svg",
    },
    {
        nombre: "Cerco perimetral",
        descripcion: "Delimitación y seguridad.",
        icono: "/iconos-svg/TabletIcon.svg",
    },
    {
        nombre: "Venta y colocación de cesped ",
        descripcion: "Grama bahiana de 1era calidad.",
        icono: "/iconos-svg/RamoIcon.svg",
    },
    {
        nombre: "Cerco vivo",
        descripcion: "Plantas que protegen y decoran.",
        icono: "/iconos-svg/MacetaIcon.svg",
    },
];

const Services = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);
    const observerRef = useRef(null);
    const autoPlayRef = useRef(null);
    const isDragging = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleCards((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observerRef.current = observer;

        const cards = document.querySelectorAll('[data-service-card]');
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    // Auto-play rápido (1.5s) que se pausa al hacer scroll manual
    useEffect(() => {
        if (window.innerWidth >= 768) return;

        autoPlayRef.current = setInterval(() => {
            if (!isDragging.current) {
                const nextIndex = (currentIndex + 1) % servicios.length;
                const scrollContainer = scrollRef.current;
                if (!scrollContainer) return;

                const cardWidth = scrollContainer.querySelector('.service-card')?.offsetWidth || 0;
                const gap = 24;
                const scrollPosition = nextIndex * (cardWidth + gap);

                scrollContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });

                setCurrentIndex(nextIndex);
            }
        }, 2000);

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [currentIndex]);

    // Detectar scroll manual para pausar auto-play temporalmente
    const handleTouchStart = () => {
        isDragging.current = true;
    };

    const handleTouchEnd = () => {
        setTimeout(() => {
            isDragging.current = false;
        }, 2000); // Espera 2s antes de reanudar auto-play
    };

    return (
        <section id="services" className="bg-color-blanco min-h-screen py-16 px-6 text-negro flex items-center">
            <div className="max-w-6xl mx-auto text-center w-full">
                <h2 className="text-4xl font-bold text-verdeOpaco mb-10 uppercase">
                    Nuestros Servicios
                </h2>

                {/* Carousel con scroll natural para mobile */}
                <div className="md:hidden relative">
                    <div
                        ref={scrollRef}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                        style={{
                            scrollBehavior: 'smooth',
                            scrollSnapType: 'x mandatory'
                        }}
                    >
                        {servicios.map((servicio, index) => (
                            <div
                                key={index}
                                className="service-card shrink-0 w-80 p-8 rounded-lg bg-white shadow-xl snap-center transition-all duration-300"
                            >
                                <div className="flex justify-center mb-6">
                                    <img
                                        src={servicio.icono}
                                        alt={servicio.nombre}
                                        className="w-20 h-20 transition-all duration-500 hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3 text-verdeOpaco">
                                    {servicio.nombre}
                                </h3>
                                <p className="text-base text-gray-600">
                                    {servicio.descripcion}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Solo indicadores minimalistas */}
                    <div className="flex justify-center gap-2 mt-6">
                        {servicios.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'bg-verdeOpaco w-8'
                                    : 'bg-gray-300 w-2'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Grid para desktop */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            data-service-card
                            data-index={index}
                            className={`p-6 rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl bg-white hover:bg-linear-to-br hover:from-verdeOpaco/5 hover:to-violeta/5 cursor-pointer group ${visibleCards.includes(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={servicio.icono}
                                    alt={servicio.nombre}
                                    className="w-16 h-16 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-verdeOpaco">
                                {servicio.nombre}
                            </h3>
                            <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                                {servicio.descripcion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
