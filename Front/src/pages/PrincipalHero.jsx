
const PrincipalHero = () => {
    return (
        <div className="w-full h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center bg-gray-50 text-white bg-center">

            <div className="flex w-full h-full">

                <div className="justify-center items-center m-auto w-full p-6 md:w-1/2 ">
                    <div></div>
                    <h1 className="text-5xl text-verdeOpaco text-start md:text-7xl font-bold mb-4">Bienvenido a Canopia</h1>
                    <p className="text-lg text-verdeOpaco md:text-xl max-w-2xl text-start mb-6">
                        Transformamos espacios en armonía con la naturaleza, creando jardines sostenibles y elegantes.
                    </p>
                    <a href="#contacto" className="bg-verdeOpaco text-white py-3 px-6 rounded-lg text-lg transition duration-300">
                        Contáctanos
                    </a>
                </div>
                <div className="w-0 md:w-1/2 bg-red-400">
                    <div className="w-full h-full">
                        <img src="/IMG-20250327-WA0015.jpg" alt="wave effect"
                            className="w-full h-full object-cover"
                            style={{ clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 40% 0)" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalHero;
