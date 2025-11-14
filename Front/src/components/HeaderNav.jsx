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
                    <Link to="/" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Nosotros
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Servicios
                    </Link>
                </li>
                <li>
                    <Link to="/gallery" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Galería
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white hover:text-negro transition-all duration-300 hover:scale-110 inline-block">
                        Contacto
                    </Link>
                </li>
            </ul>

            {/* Menú móvil con transición suave */}
            <div
                className={`absolute top-16 left-0 w-full bg-verdeOpaco backdrop-blur-sm text-white text-center md:hidden z-40 overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
                    }`}
            >
                <ul className="space-y-4">
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Inicio
                        </Link>
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <Link to="/about" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Nosotros
                        </Link>
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <Link to="/services" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Servicios
                        </Link>
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <Link to="/gallery" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Galería
                        </Link>
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-2">
                        <Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-grisClaro">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderNav;
