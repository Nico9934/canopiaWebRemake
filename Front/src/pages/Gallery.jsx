const Gallery = () => {
    const projects = [
        { title: "Casa", subtitle: "ZEN", imageUrl: "/Proyecto 1/imagen-1.jpeg" },
        { title: "CASA", subtitle: "MIRADOR", imageUrl: "/Proyecto 2/imagen-1.jpg" },
        { title: "CASA", subtitle: "DORREGO", imageUrl: "/Proyecto 3/imagen-1.jpeg" },
        { title: "OFICINAS", subtitle: "DYNAMIC", imageUrl: "/Proyecto 4/imagen-1.jpeg" },
    ];

    return (
        <section id="gallery" className="bg-blanco py-16 px-6">
            <div className="max-w-6xl mx-auto text-white">
                <h2 className="text-4xl font-bold mb-10 text-center text-negro">Nuestros proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative h-76 overflow-hidden shadow-lg"
                        >
                            {/* Imagen de fondo */}
                            <img
                                src={project.imageUrl}
                                alt={`${project.title} - ${project.subtitle}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay oscuro semitransparente */}
                            {/* <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" /> */}

                            {/* Título y subtítulo */}
                            <div className="absolute top-0 left-0 p-4 z-10 text-white">
                                <h3 className="text-lg font-light">{project.title}</h3>
                                <h2 className="text-2xl font-bold">{project.subtitle}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;