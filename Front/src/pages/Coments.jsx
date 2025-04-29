import Icono1 from '/src/Clientes-svg/icono-1.svg?react';
import Icono2 from '/src/Clientes-svg/icono-2.svg?react';
import Icono3 from '/src/Clientes-svg/icono-3.svg?react';
import Icono4 from '/src/Clientes-svg/icono-4.svg?react';
import Icono5 from '/src/Clientes-svg/icono-5.svg?react';
import Icono6 from '/src/Clientes-svg/icono-6.svg?react';



const Coments = () => {
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


    const companies = [
        { name: "YPF", icon: Icono1 },
        { name: "YPF", icon: Icono2 },
        { name: "YPF", icon: Icono3 },
        { name: "YPF", icon: Icono4 },
        { name: "YPF", icon: Icono5 },
        { name: "YPF", icon: Icono6 },
    ];

    return (
        <section className="bg-gray-100 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Testimonios */}
                <h2 className="text-4xl font-bold mb-12 text-verdeOpaco">Lo que dicen nuestros clientes</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, starIndex) => (
                                    <svg

                                        key={starIndex}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="#000000"

                                        className="w-5 h-5 text-verdeOpaco mx-0.5"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm">{testimonial.comment}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-20">
                    <div className="overflow-hidden relative">
                        <div className="flex gap-8 items-center justify-center flex-wrap">
                            <div className="mt-20">
                                <h3 className="text-2xl font-bold mb-8 text-verdeOpaco">Empresas que confiaron en nosotros</h3>
                                <div className="overflow-hidden relative">
                                    <div className="flex gap-8 items-center justify-center flex-wrap">
                                        {companies.map((company, index) => (
                                            <div key={index} className="w-24 h-24 flex items-center justify-center">
                                                <company.icon className="w-full h-full fill-gray-300" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Coments;
