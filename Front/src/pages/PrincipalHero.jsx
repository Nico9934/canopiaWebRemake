const PrincipalHero = () => {
    return (
        <section id="inicio" className="relative w-full min-h-screen md:h-screen flex flex-col justify-center items-center text-center text-white bg-center">

            {/* Imagen de fondo para mobile */}
            <div className="absolute md:hidden inset-0 z-0">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/IMG-20250327-WA0015.jpg?w=600&h=800&auto=format&q=80" />
                    <img
                        src="/IMG-20250327-WA0015.jpg"
                        alt="Canopia - Espacios Verdes Sustentables"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </picture>
                {/* Overlay translúcido para legibilidad */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
            </div>

            <div className="flex items-center md:bg-gray-100 w-full h-full relative z-10">

                {/* Texto */}
                <div className="flex flex-col justify-center items-start md:-mr-44 m-auto w-full p-6 md:w-2/5 z-20">
                    <h1 className="text-5xl text-blanco md:text-verdeOpaco text-start md:text-7xl font-bold mb-4 animate-fade-in">
                        Bienvenido a <span className="block">CANOPIA</span>
                    </h1>
                    <p className="text-lg text-blanco md:text-verdeOpaco md:text-xl text-start max-w-2xl mb-6 animate-fade-in-delay">
                        Un lugar donde diseñamos y cuidamos espacios verdes desde la escucha, el proceso y el vínculo con la naturaleza.
                    </p>
                    <a
                        href="#contacto"
                        className="bg-verdeOpaco hover:bg-verdeOpaco/90 text-white py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform inline-block group font-semibold"
                        aria-label="Ir a sección de contacto"
                    >
                        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                            Contáctanos
                        </span>
                    </a>
                </div>

                {/* Imagen y curva solo en desktop */}
                <div className="relative hidden md:block w-3/5 h-full overflow-hidden">
                    <picture>
                        <source media="(min-width: 769px)" srcSet="/IMG-20250327-WA0015.jpg?w=1200&h=1600&auto=format&q=85" />
                        <img
                            src="/IMG-20250327-WA0015.jpg"
                            alt="Canopia - Diseño de Espacios Verdes"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </picture>
                    <svg
                        className="absolute left-0 top-0 h-full w-[400px] -translate-x-1"
                        viewBox="0 0 180 800"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M180,0
                                C180,400 0,700 0,900
                                L0,0 Z"
                            fill="#F4F4F4"
                        />
                    </svg>
                </div>

            </div>
        </section>
    );
};

export default PrincipalHero;
