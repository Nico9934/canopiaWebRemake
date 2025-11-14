import { useMediaQuery } from 'react-responsive'
import { CarouselDefault } from '../components/CarouselDefault'

const About = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className="bg-verdeOpaco py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-8 md:gap-24 items-center flex-col md:flex-row">
                    {/* Texto descriptivo */}
                    <div className="text-white w-full md:w-2/5 text-center md:text-left">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 hover:text-grisClaro">
                            Diseños Personalizados
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            Diseñamos espacios únicos que combinan diferentes elementos y naturaleza.
                            Creamos ambientes armoniosos con vegetación, adaptados a cada necesidad y
                            estilo de nuestro cliente y la arquitectura de su hogar.
                        </p>
                    </div>

                    {/* Galería de imágenes o carrusel */}
                    {isMobile ? (
                        <CarouselDefault />
                    ) : (
                        <div className="w-full md:w-3/5 grid grid-cols-6 grid-rows-6 gap-4 h-[500px]">
                            <img src="/IMG-20250327-WA0013.jpg" alt="Paisaje 1" className="col-span-3 row-span-3 object-cover w-full h-full rounded-xl shadow-md transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-pointer" />
                            <img src="/IMG-20250327-WA0014.jpg" alt="Paisaje 2" className="col-span-2 row-span-2 object-cover w-full h-full rounded-xl shadow-md transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-pointer" />
                            <img src="/IMG-20250327-WA0015.jpg" alt="Paisaje 3" className="col-span-1 row-span-5 object-cover w-full h-full rounded-xl shadow-md transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-pointer" />
                            <img src="/IMG-20250327-WA0016.jpg" alt="Paisaje 4" className="col-span-2 row-span-3 object-cover w-full h-full rounded-xl shadow-md transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-pointer" />
                            <img src="/IMG-20250327-WA0017.jpg" alt="Paisaje 5" className="col-span-3 row-span-4 object-cover w-full h-full rounded-xl shadow-md transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-pointer" />
                            <img src="/IMG-20250327-WA0018.jpg" alt="Paisaje 6" className="col-span-3 row-span-2 object-cover w-full h-full rounded-xl shadow-md transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-pointer" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default About
