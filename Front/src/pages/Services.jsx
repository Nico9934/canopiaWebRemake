import { FaSeedling, FaTools, FaTree } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const servicios = [
    {
        nombre: "Diseño de Jardines",
        descripcion: "Espacios verdes a tu medida.",
        icono: <FaSeedling />,
    },
    {
        nombre: "Mantenimiento",
        descripcion: "Cuidado periódico de tu jardín.",
        icono: <FaTools />,
    },
    {
        nombre: "Riego por aspersión",
        descripcion: "Sistemas de riego eficientes.",
        icono: <FaTree />,
    },
    {
        nombre: "Poda especializada",
        descripcion: "Corte seguro y profesional.",
        icono: <FaTree />,
    },
    {
        nombre: "Limpieza de obra",
        descripcion: "Dejamos todo impecable.",
        icono: <FaTree />,
    },
    {
        nombre: "Relleno y nivelación",
        descripcion: "Preparación del terreno ideal.",
        icono: <FaTree />,
    },
    {
        nombre: "Cerco perimetral",
        descripcion: "Delimitación y seguridad.",
        icono: <FaTree />,
    },
    {
        nombre: "Césped y panes",
        descripcion: "Siembra y colocación rápida.",
        icono: <FaTree />,
    },
    {
        nombre: "Cerco vivo",
        descripcion: "Plantas que protegen y decoran.",
        icono: <FaTree />,
    },
];

const Services = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const observerRef = useRef(null);

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

    return (
        <section id="services" className="bg-color-blanco py-16 px-6 text-negro">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-verdeOpaco mb-10 uppercase">
                    Nuestros Servicios
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                            <div className="text-verdeOpaco flex justify-center text-5xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                {servicio.icono}
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
