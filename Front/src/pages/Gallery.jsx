import { useState } from 'react';

const Gallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects = [
        {
            title: "Casa",
            subtitle: "ZEN",
            imageUrl: "/Proyecto 1/imagen-1.jpeg",
            images: [
                "/Proyecto 1/imagen-1.jpeg",
                "/Proyecto 1/imagen-2.jpeg",
                "/Proyecto 1/imagen-3.jpeg"
            ]
        },
        {
            title: "CASA",
            subtitle: "MIRADOR",
            imageUrl: "/Proyecto 2/imagen-1.jpg",
            images: ["/Proyecto 2/imagen-1.jpg"]
        },
        {
            title: "CASA",
            subtitle: "DORREGO",
            imageUrl: "/Proyecto 3/imagen-1.jpeg",
            images: ["/Proyecto 3/imagen-1.jpeg"]
        },
        {
            title: "OFICINAS",
            subtitle: "DYNAMIC",
            imageUrl: "/Proyecto 4/imagen-1.jpeg",
            images: [
                "/Proyecto 4/imagen-1.jpeg",
                "/Proyecto 4/imagen-2.jpeg"
            ]
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <section id="gallery" className="bg-blanco min-h-screen py-16 px-6 flex items-center">
            <div className="max-w-6xl mx-auto text-white w-full">
                <h2 className="text-4xl font-bold mb-10 text-center text-negro">Nuestros proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(project)}
                            className="relative h-96 overflow-hidden shadow-lg rounded-lg group cursor-pointer"
                        >
                            {/* Imagen de fondo */}
                            <img
                                src={project.imageUrl}
                                alt={`${project.title} - ${project.subtitle}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay que aparece en hover */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

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

                {/* Modal minimalista */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
                        onClick={closeModal}
                    >
                        <div
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Botón cerrar */}
                            <button
                                onClick={closeModal}
                                className="absolute -top-12 right-0 text-white hover:text-grisClaro transition-colors duration-300 text-4xl font-light z-10"
                            >
                                ×
                            </button>

                            {/* Información del proyecto */}
                            <div className="absolute top-4 left-4 z-10 text-white">
                                <h3 className="text-sm font-light">{selectedProject.title}</h3>
                                <h2 className="text-2xl font-bold">{selectedProject.subtitle}</h2>
                            </div>

                            {/* Carousel */}
                            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                                <img
                                    src={selectedProject.images[currentImageIndex]}
                                    alt={`${selectedProject.subtitle} - ${currentImageIndex + 1}`}
                                    className="w-full h-[70vh] object-cover"
                                />

                                {/* Controles del carousel - solo si hay más de 1 imagen */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        >
                                            ‹
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        >
                                            ›
                                        </button>

                                        {/* Indicadores */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {selectedProject.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex
                                                            ? 'bg-white w-8'
                                                            : 'bg-white/50 hover:bg-white/70'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Contador de imágenes */}
                            {selectedProject.images.length > 1 && (
                                <p className="text-white text-center mt-4 text-sm">
                                    {currentImageIndex + 1} / {selectedProject.images.length}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;