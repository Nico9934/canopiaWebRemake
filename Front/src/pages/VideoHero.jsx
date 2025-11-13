import { useRef, useEffect } from "react";

const VideoHero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6; // Velocidad más lenta
        }
    }, []);

    return (
        <section className="w-full h-screen flex flex-col md:flex-row overflow-hidden">
            {/* Columna izquierda: texto */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-blanco flex items-center justify-center px-8 md:px-20 z-10">
                <div className="max-w-2xl text-verdeOpaco text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Quiénes Somos</h2>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Somos una empresa comprometida con la excelencia y la innovación.
                        Nuestro equipo está conformado por profesionales apasionados que trabajan
                        cada día para ofrecer soluciones eficientes, sostenibles y adaptadas
                        a las necesidades de nuestros clientes. Creemos en el valor del compromiso,
                        la integridad y la mejora continua.
                    </p>
                </div>
            </div>

            {/* Columna derecha: video */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/Videos/video-1.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                {/* Filtro sutil sobre el video en mobile */}
                <div className="md:hidden absolute inset-0 bg-emerald-900/30" />
            </div>
        </section>
    );
};

export default VideoHero;
