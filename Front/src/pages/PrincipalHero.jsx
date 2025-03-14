import HeaderNav from "../components/HeaderNav";

const PrincipalHero = () => {
    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
            <div className="absolute inset-0 bg-blanco bg-opacity-50"></div> {/* Capa oscura para mejorar legibilidad */}

            <HeaderNav />
            <div className="flex w-full h-full">

            <div className="relative z-10 p-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Bienvenido a Canopia</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
                    Transformamos espacios en armonía con la naturaleza, creando jardines sostenibles y elegantes.
                </p>
                <a href="#contacto" className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg transition duration-300">
                    Contáctanos
                </a>
            </div>
            <div>
                <img src="https://images.adsttc.com/media/images/5e6e/8e3f/b357/653d/d300/025b/medium_jpg/07.jpg?1584303642" alt="imagen-paisajismo" />
            </div>
            </div>
        </div>
    );
};

export default PrincipalHero;
