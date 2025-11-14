const BackAfter = () => {
    const images = [
        { before: "/Antes y despues 1/imagen-1.png", after: "/Antes y despues 1/imagen-2.png" },
        { before: "/Antes y despues 2/imagen-1.jpeg", after: "/Antes y despues 2/imagen-2.jpeg" },
        { before: "/IMG-20250327-WA0017.jpg", after: "/IMG-20250327-WA0013.jpg" },
    ];

    return (
        <section className="bg-blanco min-h-screen py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-negro">Antes y Después</h2>

                {/* Galería */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative w-full h-[600px] overflow-hidden shadow-2xl rounded-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
                        >
                            {/* Imagen Antes */}
                            <img
                                src={img.before}
                                alt="Antes"
                                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-110"
                            />

                            {/* Imagen Después */}
                            <img
                                src={img.after}
                                alt="Después"
                                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-95 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                            />

                            {/* Etiquetas que aparecen */}
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                Antes
                            </div>
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Después
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BackAfter;
