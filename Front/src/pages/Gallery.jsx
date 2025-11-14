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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative h-96 overflow-hidden shadow-lg rounded-lg group cursor-pointer"
                        >
                            {/* Imagen de fondo */}
                            <img
                                src={project.imageUrl}
                                alt={`${project.title} - ${project.subtitle}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay que aparece en hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Título y subtítulo */}
                            <div className="absolute top-0 left-0 p-6 z-10 text-white transform transition-all duration-500 group-hover:translate-y-2">
                                <h3 className="text-lg font-light transition-all duration-300 group-hover:text-grisClaro">
                                    {project.title}
                                </h3>
                                <h2 className="text-3xl font-bold transition-all duration-300 group-hover:text-verdeOliva">
                                    {project.subtitle}
                                </h2>
                            </div>

                            {/* Badge "Ver más" que aparece en hover */}
                            <div className="absolute bottom-4 right-4 bg-verdeOpaco text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                Ver más
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;