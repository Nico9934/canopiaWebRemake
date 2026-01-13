import { CarouselDefault } from '../components/CarouselDefault'

const About = () => {
    return (
        <div id="about" className="bg-blanco min-h-screen flex items-center">
            <div className="w-full h-screen flex flex-col md:flex-row">

                {/* Imagen a la izquierda - Solo Desktop */}
                <div className="hidden md:block md:w-1/2 h-full">
                    <img
                        src="/dibujoamano.jpg"
                        alt="Diseño a mano"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Texto a la derecha - Solo Desktop */}
                <div className="hidden md:flex md:w-1/2 bg-blanco p-8 md:p-16 items-center justify-center">
                    <div className="max-w-xl">
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-verdeOpaco border-b-8 border-violeta pb-4 w-fit">
                            Diseños Personalizados
                        </h3>
                        <p className="text-base md:text-xl leading-relaxed text-negro">
                            Desarrollamos proyectos de paisajismo a medida, considerando la arquitectura existente,
                            el entorno y las necesidades de cada cliente. <br />
                            Nuestro enfoque busca lograr espacios funcionales y equilibrados,
                            con una selección cuidada de vegetación y materiales.
                        </p>
                    </div>
                </div>

                {/* Sección Mobile - Imagen 100vh con blur y texto encima */}
                <div className="md:hidden w-full h-screen relative">
                    {/* Imagen de fondo */}
                    <img
                        src="/dibujoamano.jpg"
                        alt="Diseño a mano"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay con blur para legibilidad */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                    {/* Texto encima */}
                    <div className="relative z-10 p-8 flex items-center justify-center h-full">
                        <div className="max-w-xl">
                            <h3 className="text-3xl font-bold mb-6 text-white border-b-8 border-violeta pb-4 w-fit drop-shadow-lg">
                                Diseños Personalizados
                            </h3>
                            <p className="text-base leading-relaxed text-white drop-shadow-md">
                                Desarrollamos proyectos de paisajismo a medida, considerando la arquitectura existente,
                                el entorno y las necesidades de cada cliente. <br />
                                Nuestro enfoque busca lograr espacios funcionales y equilibrados,
                                con una selección cuidada de vegetación y materiales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
