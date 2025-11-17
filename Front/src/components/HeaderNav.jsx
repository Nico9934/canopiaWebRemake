import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="left-0 w-full p-4 flex justify-between items-center bg-verdeOpaco z-20 shadow-lg">
            <Link to="/" className="text-white text-2xl font-bold hover:scale-110 transition-transform duration-300">
                Canopia
            </Link>

            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="hover:scale-110 transition-transform duration-300 focus:outline-none"
                >
                    {menuOpen ?
                        <FaTimes className="text-white text-2xl" /> :
                        <FaBars className="text-white text-2xl" />
                    }
                </button>
            </div>

            <ul className="md:flex space-x-6 hidden">
                <li>
                    <a href="#inicio" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#about" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Nosotros
                    </a>
                </li>
                <li>
                    <a href="#services" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Nuestros Servicios
                    </a>
                </li>
                <li>
                    <a href="#gallery" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Nuestros proyectos
                    </a>
                </li>
                <li>
                    <a href="#contacto" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Contacto
                    </a>
                </li>
                <li>
                    <a
                        href="https://canopia2.mitiendanube.com/productos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block"
                    >
                        Tienda Online
                    </a>
                </li>
            </ul>

            {/* Menú móvil con transición suave */}
            <div
                className={`absolute top-16 left-0 w-full bg-verdeOpaco backdrop-blur-sm text-white text-center md:hidden z-40 overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
                    }`}
            >
                <ul className="space-y-4">
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <a href="#inicio" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Inicio
                        </a>
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <a href="#about" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Nosotros
                        </a>
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <a href="#services" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Nuestros Servicios
                        </a>
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <a href="#gallery" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Nuestros proyectos
                        </a>
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <a href="#contacto" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Contacto
                        </a>
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <a
                            href="https://canopia2.mitiendanube.com/productos/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 hover:text-grisClaro"
                            onClick={() => setMenuOpen(false)}
                        >
                            Tienda Online
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderNav;
