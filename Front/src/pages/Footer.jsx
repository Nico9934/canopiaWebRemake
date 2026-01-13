import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    // Configuración de WhatsApp - misma que WhatsAppButton
    const phoneNumber = "5492224503912";
    const message = "Hola! Me gustaría consultar sobre sus servicios.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const formattedPhone = "+54 9 2224 50-3912";

    const sections = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Proyectos', href: '#gallery' },
        { name: 'Contacto', href: '#contacto' },
        { name: 'Tienda Online', href: 'https://canopia2.mitiendanube.com/productos/' }
    ];

    return (
        <footer className="bg-negro text-grisClaro">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div>
                        <h2 className="text-2xl font-bold text-verdeOpaco mb-4">
                            CANOPIA
                        </h2>
                        <p className="text-sm text-gray-400 mb-4">
                            Diseñamos espacios que reflejan tu esencia. 
                            Arquitectura sustentable con materiales naturales.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/canopia.ok/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-violeta transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-verdeOliva transition-all duration-300 hover:scale-110"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h3 className="text-blanco font-semibold mb-4">Navegación</h3>
                        <ul className="space-y-2">
                            {sections.map((section, index) => (
                                <li key={index}>
                                    <a
                                        href={section.href}
                                        className="text-sm text-gray-400 hover:text-verdeOpaco hover:translate-x-1 transition-all duration-200 inline-block"
                                    >
                                        {section.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h3 className="text-blanco font-semibold mb-4">Servicios</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#services" className="text-sm text-gray-400 hover:text-verdeOpaco hover:translate-x-1 transition-all duration-200 inline-block">
                                    Diseños Personalizados
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-sm text-gray-400 hover:text-verdeOpaco hover:translate-x-1 transition-all duration-200 inline-block">
                                    Construcción Sustentable
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-sm text-gray-400 hover:text-verdeOpaco hover:translate-x-1 transition-all duration-200 inline-block">
                                    Asesoramiento
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="text-sm text-gray-400 hover:text-verdeOpaco hover:translate-x-1 transition-all duration-200 inline-block">
                                    Proyectos Realizados
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="text-blanco font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-gray-400">
                                <FaWhatsapp className="mt-1 flex-shrink-0 text-verdeOliva" />
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-verdeOpaco transition-all duration-200">
                                    {formattedPhone}
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-400">
                                <FaInstagram className="mt-1 flex-shrink-0 text-violeta" />
                                <a href="https://www.instagram.com/canopia.ok/" target="_blank" rel="noopener noreferrer" className="hover:text-verdeOpaco transition-all duration-200">
                                    canopia.ok
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-400">
                                <FaEnvelope className="mt-1 flex-shrink-0 text-grisClaro" />
                                <a href="mailto:contactocanopia@gmail.com" className="hover:text-verdeOpaco transition-all duration-200">
                                    contactocanopia@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-400">
                                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-verdeOpaco" />
                                <span>Argentina</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Separador */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Canopia. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-500">
                            <span className="hover:text-verdeOpaco transition-colors cursor-pointer">Términos y Condiciones</span>
                            <span className="hover:text-verdeOpaco transition-colors cursor-pointer">Política de Privacidad</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
