import { useRef, useEffect } from "react";

const VideoHero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0; // Velocidad normal para mayor fluidez
        }
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Video de fondo a pantalla completa */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                style={{ transform: 'translateZ(0)' }}
            >
                <source src="/Videos/video-1.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
            </video>

            {/* Overlay oscuro para mejorar legibilidad */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />

            {/* Contenido centrado sobre el video */}
            <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
                <div className="max-w-4xl text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Quiénes Somos
                    </h2>
                    <div className="w-24 h-1 bg-verdeOliva mx-auto mb-8"></div>
                    <p className="text-lg md:text-2xl leading-relaxed mb-8 animate-fade-in-delay">
                        Somos una empresa comprometida con la excelencia y la innovación.
                        Nuestro equipo está conformado por profesionales apasionados que trabajan
                        cada día para ofrecer soluciones eficientes, sostenibles y adaptadas
                        a las necesidades de nuestros clientes.
                    </p>
                    <p className="text-base md:text-xl text-gray-200 animate-fade-in-delay-2">
                        Creemos en el valor del compromiso, la integridad y la mejora continua.
                    </p>
                </div>
            </div>

            {/* Indicador de scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

export default VideoHero;
