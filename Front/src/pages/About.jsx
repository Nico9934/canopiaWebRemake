import { useMediaQuery } from 'react-responsive'
import { CarouselDefault } from '../components/CarouselDefault'

const About = () => {
    const mobile = useMediaQuery({ query: '(max-width: 680px)' })

    return (
        <div className="bg-grisClaro py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Texto descriptivo */}
                    <div className="text-gray-800">
                        <h3 className="text-3xl font-bold mb-4 text-green-700">Diseños Personalizados</h3>
                        <p className="text-lg leading-relaxed max-w-xl">
                            Diseñamos espacios únicos que combinan naturaleza y arquitectura.
                            Creamos ambientes armoniosos con vegetación, agua y estructuras naturales,
                            adaptados a tus necesidades y estilo.
                        </p>
                    </div>

                    {/* Galería o Slider en móviles */}
                    {mobile ? (
                        <CarouselDefault />
                    ) : (
                        <div className="grid grid-cols-3 gap-4">
                            <img src="/IMG-20250327-WA0013.jpg" className="" alt="Paisaje 1" />
                            <img src="/IMG-20250327-WA0014.jpg" className="" alt="Paisaje 2" />
                            <img src="/IMG-20250327-WA0015.jpg" className="" alt="Paisaje 3" />
                            <img src="/IMG-20250327-WA0016.jpg" className="" alt="Paisaje 4" />
                            <img src="/IMG-20250327-WA0017.jpg" className="" alt="Paisaje 5" />
                            <img src="/IMG-20250327-WA0018.jpg" className="" alt="Paisaje 6" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default About
