import { FaSeedling, FaTools, FaTree } from "react-icons/fa";

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
    return (
        <section id="services" className="bg-color-blanco py-16 px-6 text-negro">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-verdeOpaco mb-10 uppercase">
                    Nuestros Servicios
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            className="p-2 rounded transform transition-transform duration-300 hover:scale-105"
                        >
                            <div className="text-verdeOpaco flex justify-center text-5xl mb-3">
                                {servicio.icono}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{servicio.nombre}</h3>
                            <p className="text-sm">{servicio.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
