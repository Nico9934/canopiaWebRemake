import { FaSeedling, FaTools, FaTree } from "react-icons/fa";

const Services = () => {
    return (
        <section id="services" className="bg-color-blanco py-16 px-6 text-negro">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold text-verdeOpaco mb-12 decoration-verdeClaro">
                    Servicios
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 rounded  transform transition-transform duration-300 hover:scale-105">
                        <div className="text-verdeOpaco flex justify-center text-8xl mb-4">
                            <FaSeedling />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 ">Diseño de Jardines</h3>
                        <p>Espacios verdes adaptados a tu estilo y necesidades.</p>
                    </div>
                    <div className="p-6 rounded  transform transition-transform duration-300 hover:scale-105">
                        <div className="text-verdeOpaco flex justify-center text-8xl mb-4">
                            <FaTools />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Mantenimiento</h3>
                        <p>Servicios periódicos para mantener tu jardín impecable.</p>
                    </div>
                    <div className="p-6 rounded  transform transition-transform duration-300 hover:scale-105">
                        <div className="text-verdeOpaco flex justify-center text-8xl mb-4">
                            <FaTree />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Paisajismo</h3>
                        <p>Intervenciones estéticas con vegetación y elementos naturales.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;