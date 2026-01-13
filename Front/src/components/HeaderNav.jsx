import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass = "text-white hover:text-grisClaro transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-grisClaro after:transition-all after:duration-200 hover:after:w-full pb-1";
    const mobileLinkClass = "block py-3 text-white hover:bg-white/10 px-4 rounded-lg transition-all duration-200";

    return (
        <nav className="left-0 w-full bg-verdeOpaco/95 backdrop-blur-sm z-20 shadow-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="text-white text-2xl font-bold hover:text-grisClaro transition-all duration-300 hover:scale-105"
                    >
                        CANOPIA
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <a href="#inicio" className={linkClass}>
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#about" className={linkClass}>
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#services" className={linkClass}>
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="#gallery" className={linkClass}>
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a href="#contacto" className={linkClass}>
                                Contacto
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://canopia2.mitiendanube.com/productos/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium border border-white/20 hover:scale-105"
                            >
                                Tienda Online
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white hover:text-grisClaro transition-colors duration-200"
                    >
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 z-[200] md:hidden"
                        onClick={() => setMenuOpen(false)}
                    />

                    {/* Menu Drawer */}
                    <div className="fixed right-0 top-0 h-full w-64 bg-verdeOpaco shadow-2xl z-[210] md:hidden overflow-y-auto animate-slideInRight">
                        <div className="p-4">
                            {/* Close button */}
                            <div className="flex justify-end mb-4">
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="text-white hover:text-grisClaro transition-colors"
                                >
                                    <FaTimes size={24} />
                                </button>
                            </div>

                            {/* Logo en mobile */}
                            <div className="mb-6 pb-4 border-b border-white/20">
                                <h2 className="text-2xl font-bold text-white">CANOPIA</h2>
                                <p className="text-sm text-grisClaro mt-1">Arquitectura sustentable</p>
                            </div>

                            {/* Navigation Links */}
                            <nav className="space-y-2">
                                <a
                                    href="#inicio"
                                    className={mobileLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Inicio
                                </a>
                                <a
                                    href="#about"
                                    className={mobileLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Nosotros
                                </a>
                                <a
                                    href="#services"
                                    className={mobileLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Servicios
                                </a>
                                <a
                                    href="#gallery"
                                    className={mobileLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Proyectos
                                </a>
                                <a
                                    href="#contacto"
                                    className={mobileLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contacto
                                </a>
                                <a
                                    href="https://canopia2.mitiendanube.com/productos/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-3 px-4 text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-center font-medium border border-white/20"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Tienda Online
                                </a>
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default HeaderNav;
