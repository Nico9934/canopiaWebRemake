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
        <section id="gallery" className="bg-blanco min-h-screen py-16 px-0 flex items-center">
            <div className="w-full">
                <h2 className="text-4xl font-bold mb-10 text-center text-negro px-6">Nuestros proyectos</h2>

                {/* Grid masonry style - imágenes a pantalla completa */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(project)}
                            className="relative aspect-square overflow-hidden group cursor-pointer"
                        >
                            {/* Imagen de fondo */}
                            <img
                                src={project.imageUrl}
                                alt={`${project.title} - ${project.subtitle}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay con color que aparece en hover */}
                            <div className="absolute inset-0 bg-verdeOpaco/0 group-hover:bg-verdeOpaco/85 transition-all duration-500" />

                            {/* Icono + centrado que aparece en hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                                    <span className="text-white text-4xl font-light">+</span>
                                </div>
                            </div>

                            {/* Título y subtítulo que aparecen en hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-xs font-light uppercase tracking-wide">
                                    {project.title}
                                </h3>
                                <h2 className="text-lg font-bold">
                                    {project.subtitle}
                                </h2>
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