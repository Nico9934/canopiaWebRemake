const BackAfter = () => {
    // Array de proyectos antes y después
    const images = [
        { before: "/IMG-20250327-WA0013.jpg", after: "/IMG-20250327-WA0017.jpg" },
        { before: "/IMG-20250327-WA0015.jpg", after: "/IMG-20250327-WA0017.jpg" },
        { before: "/IMG-20250327-WA0017.jpg", after: "/IMG-20250327-WA0013.jpg" },
    ];

    return (
        <section className="bg-blanco min-h-screen py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-negro">Antes y Después</h2>

                {/* Galería */}
                <div className="grid grid-cols-3 md:grid-cols-1 md:gap-1">
                    {images.map((img, index) => (
                        <div key={index} className="relative w-full h-80 overflow-hidden shadow-lg group cursor-pointer">
                            {/* Imagen Antes */}
                            <img
                                src={img.before}
                                alt="Antes"
                                className="w-full h-full object-cover transition-opacity duration-400 ease-in-out group-hover:opacity-0"
                            />

                            {/* Imagen Después */}
                            <img
                                src={img.after}
                                alt="Después"
                                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BackAfter;
