import { useEffect, useRef } from 'react';
import Icono1 from '/src/Clientes-svg/icono-1.svg?react';
import Icono2 from '/src/Clientes-svg/icono-2.svg?react';
import Icono3 from '/src/Clientes-svg/icono-3.svg?react';
import Icono4 from '/src/Clientes-svg/icono-4.svg?react';
import Icono5 from '/src/Clientes-svg/icono-5.svg?react';
import Icono6 from '/src/Clientes-svg/icono-6.svg?react';



const Coments = () => {
    const scrollRef = useRef(null);

    const testimonials = [
        {
            name: "María González",
            comment: "¡Canopia transformó mi jardín en un verdadero paraíso! Estoy feliz con el resultado.",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            name: "Javier Pérez",
            comment: "El equipo fue muy profesional y respetuoso con los tiempos. ¡Muy recomendable!",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            name: "Luciana Díaz",
            comment: "No puedo creer el cambio que lograron. ¡Ahora disfruto mucho más de mi espacio exterior!",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
        },
    ];

    // Duplicar testimonios para el efecto infinito
    const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

    const companies = [
        { name: "YPF", icon: Icono1 },
        { name: "YPF", icon: Icono2 },
        { name: "YPF", icon: Icono3 },
        { name: "YPF", icon: Icono4 },
        { name: "YPF", icon: Icono5 },
        { name: "YPF", icon: Icono6 },
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 0.5;

        const scroll = () => {
            scrollPosition += scrollSpeed;

            // Reset cuando llegue al final del primer set
            if (scrollPosition >= scrollContainer.scrollWidth / 3) {
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;
            requestAnimationFrame(scroll);
        };

        const animationId = requestAnimationFrame(scroll);

        // Pausar en hover
        const handleMouseEnter = () => cancelAnimationFrame(animationId);
        const handleMouseLeave = () => requestAnimationFrame(scroll);

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className="bg-gray-50 min-h-screen py-20 px-6 overflow-hidden flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Testimonios */}
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-verdeOpaco">
                    Lo que dicen nuestros clientes
                </h2>

                {/* Carrusel infinito */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-hidden pb-4"
                    style={{ scrollBehavior: 'auto' }}
                >
                    {infiniteTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-80 md:w-96 p-8 rounded-lg bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover transition-all duration-500 group-hover:scale-110"
                                />
                                <div className="flex-1 text-left">
                                    <h3 className="text-xl font-semibold text-verdeOpaco mb-1">
                                        {testimonial.name}
                                    </h3>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <svg
                                                key={starIndex}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-4 h-4 text-verdeOpaco"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">
                                "{testimonial.comment}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Empresas */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold mb-12 text-center text-verdeOpaco">
                        Empresas que confiaron en nosotros
                    </h3>
                    <div className="flex gap-12 items-center justify-center flex-wrap">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transform transition-all duration-500 hover:scale-125 cursor-pointer group grayscale hover:grayscale-0"
                            >
                                <company.icon className="w-full h-full fill-gray-300 transition-all duration-500 group-hover:fill-verdeOpaco" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coments;
