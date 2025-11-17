import { CarouselDefault } from '../components/CarouselDefault'

const About = () => {
    return (
        <div id="about" className="bg-blanco min-h-screen flex items-center">
            <div className="w-full h-screen flex flex-col md:flex-row">

                {/* Imagen a la izquierda - Desktop */}
                <div className="hidden md:block md:w-1/2 h-full">
                    <img
                        src="/dibujoamano.jpg"
                        alt="Diseño a mano"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Texto a la derecha - Desktop, arriba en Mobile */}
                <div className="w-full md:w-1/2 bg-blanco p-8 md:p-16 flex items-center justify-center">
                    <div className="max-w-xl">
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-verdeOpaco border-b-8 border-violeta pb-4 w-fit">
                            Diseños Personalizados
                        </h3>
                        <p className="text-base md:text-xl leading-relaxed text-negro">
                            Diseñamos espacios únicos que combinan diferentes elementos y naturaleza.
                            Creamos ambientes armoniosos con vegetación, adaptados a cada necesidad y
                            estilo de nuestro cliente y la arquitectura de su hogar.
                        </p>
                    </div>
                </div>

                {/* Imagen debajo en Mobile - ocupa toda la altura */}
                <div className="md:hidden w-full flex-1">
                    <img
                        src="/dibujoamano.jpg"
                        alt="Diseño a mano"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default About
