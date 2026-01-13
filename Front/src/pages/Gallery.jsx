import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [[page, direction], setPage] = useState([0, 0]);

// Configuración de proyectos - Gestión simplificada
    // El cliente solo necesita agregar imágenes con nombres: imagen-1.jpg, imagen-2.jpg, etc.
    // Y actualizar el imageCount aquí
    const projects = [
        {
            title: "CASA",
            subtitle: "ZEN",
            folder: "Casa ZEN",
            imageCount: 13
        },
        {
            title: "CASA",
            subtitle: "BRISA",
            folder: "Casa Brisa",
            imageCount: 7
        },
        {
            title: "CASA",
            subtitle: "TERRA",
            folder: "Casa Terra",
            imageCount: 6
        },
        {
            title: "CASA",
            subtitle: "OHANA",
            folder: "Casa Ohana",
            imageCount: 5
        },
        {
            title: "CASA",
            subtitle: "ENCUENTRO",
            folder: "Casa Encuentro",
            imageCount: 8
        },
        {
            title: "CASA",
            subtitle: "ENERGÍA",
            folder: "Casa Energía",
            imageCount: 3
        },
        {
            title: "CASA",
            subtitle: "HABITAR",
            folder: "Casa Habitar",
            imageCount: 7
        },
        {
            title: "CASA",
            subtitle: "LAPSO",
            folder: "Casa Lapso",
            imageCount: 2
        },
        {
            title: "CASA",
            subtitle: "RENACER",
            folder: "Casa Renacer",
            imageCount: 3
        },
        {
            title: "CASA",
            subtitle: "SENTIR",
            folder: "Casa Sentir",
            imageCount: 9
        },
    ].map(project => {
        // Generar automáticamente las rutas de imágenes
        const images = Array.from({ length: project.imageCount }, (_, i) =>
            `/Galeria/${project.folder}/imagen-${i + 1}.jpg`
        );

        return {
            title: project.title,
            subtitle: project.subtitle,
            imageUrl: images[0], // Primera imagen como portada
            images: images
        };
    });

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setPage([0, 0]);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const paginate = (newDirection) => {
        if (!selectedProject) return;
        
        const newIndex = currentImageIndex + newDirection;
        
        if (newIndex >= 0 && newIndex < selectedProject.images.length) {
            setCurrentImageIndex(newIndex);
            setPage([newIndex, newDirection]);
        } else if (newIndex < 0) {
            // Volver al final
            setCurrentImageIndex(selectedProject.images.length - 1);
            setPage([selectedProject.images.length - 1, newDirection]);
        } else {
            // Volver al inicio
            setCurrentImageIndex(0);
            setPage([0, newDirection]);
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <section id="gallery" className="bg-blanco min-h-screen py-16 px-0 flex items-center">
            <div className="w-full">
                <h2 className="text-4xl font-bold mb-10 text-center uppercase text-negro px-6">Nuestros proyectos</h2>

                {/* Grid masonry style - imágenes a pantalla completa */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                    {projects.map((project, index) => {
                        // Calcular si es uno de los últimos elementos y cuántos son
                        const totalItems = projects.length;
                        const remainder = totalItems % 4;
                        const isLastRow = index >= totalItems - remainder && remainder !== 0;
                        
                        // Determinar span según cuántos elementos quedan (solo ancho, no altura)
                        let spanClass = '';
                        if (isLastRow && remainder === 1) {
                            spanClass = 'lg:col-span-4'; // 1 elemento ocupa todo el ancho
                        } else if (isLastRow && remainder === 2) {
                            spanClass = 'lg:col-span-2'; // 2 elementos ocupan 2 columnas cada uno
                        } else if (isLastRow && remainder === 3) {
                            spanClass = index === totalItems - 3 ? 'lg:col-span-2' : 'lg:col-span-1'; // Primero 2 columnas, otros 1
                        }
                        
                        return (
                            <div
                                key={index}
                                onClick={() => openModal(project)}
                                className={`relative aspect-square overflow-hidden group cursor-pointer ${spanClass}`}
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
                    );
                    })}
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

                            {/* Carousel con Framer Motion */}
                            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden h-[70vh]">
                                <AnimatePresence initial={false} custom={direction}>
                                    <motion.img
                                        key={currentImageIndex}
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.subtitle} - ${currentImageIndex + 1}`}
                                        className="w-full h-full object-cover absolute inset-0"
                                        custom={direction}
                                        variants={{
                                            enter: (direction) => ({
                                                x: direction > 0 ? 1000 : -1000,
                                                opacity: 0
                                            }),
                                            center: {
                                                zIndex: 1,
                                                x: 0,
                                                opacity: 1
                                            },
                                            exit: (direction) => ({
                                                zIndex: 0,
                                                x: direction < 0 ? 1000 : -1000,
                                                opacity: 0
                                            })
                                        }}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 400, damping: 35 },
                                            opacity: { duration: 0.15 }
                                        }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = swipePower(offset.x, velocity.x);

                                            if (swipe < -swipeConfidenceThreshold) {
                                                paginate(1);
                                            } else if (swipe > swipeConfidenceThreshold) {
                                                paginate(-1);
                                            }
                                        }}
                                    />
                                </AnimatePresence>

                                {/* Controles del carousel - solo si hay más de 1 imagen */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => paginate(-1)}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                                        >
                                            ‹
                                        </button>
                                        <button
                                            onClick={() => paginate(1)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                                        >
                                            ›
                                        </button>

                                        {/* Indicadores */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                            {selectedProject.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        const newDirection = idx > currentImageIndex ? 1 : -1;
                                                        setCurrentImageIndex(idx);
                                                        setPage([idx, newDirection]);
                                                    }}
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