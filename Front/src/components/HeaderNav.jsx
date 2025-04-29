import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="left-0 w-full p-4 flex justify-between items-center bg-verdeOpaco z-20">
            <Link to="/" className="text-white text-2xl font-bold">Canopia</Link>

            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                </button>
            </div>

            <ul className={`md:flex space-x-6 hidden`}>
                <li><Link to="/" className="text-white hover:text-negro transition-colors">Inicio</Link></li>
                <li><Link to="/about" className="text-white hover:text-negro transition-colors">Nosotros</Link></li>
                <li><Link to="/services" className="text-white hover:text-negro transition-colors">Servicios</Link></li>
                <li><Link to="/gallery" className="text-white hover:text-negro transition-colors">Galería</Link></li>
                <li><Link to="/contact" className="text-white hover:text-negro transition-colors">Contacto</Link></li>
            </ul>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-verdeOpaco bg-opacity-80 text-white text-center py-6 md:hidden z-40">
                    <ul className="space-y-4">
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
                        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
                        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Galería</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default HeaderNav;
