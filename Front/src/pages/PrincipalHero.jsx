// const PrincipalHero = () => {
//     return (
//         <div className="w-full h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center bg-blanco text-white bg-center">

//             <div className="flex items-center w-full h-full">

//                 {/* Texto a la izquierda */}
//                 <div className="flex flex-col justify-center items-start md:-mr-44 m-auto w-full p-6 md:w-2/5 z-10">
//                     <h1 className="text-5xl text-verdeOpaco text-start  md:text-7xl font-bold mb-4">Bienvenido a Canopia</h1>
//                     <p className="text-lg text-verdeOpaco md:text-xl text-start max-w-2xl  mb-6">
//                         Transformamos espacios en armonía con la naturaleza, creando jardines sostenibles y elegantes.
//                     </p>
//                     <a href="#contacto" className="bg-verdeOpaco hover:bg-grisClaro text-white py-3 px-6 rounded-lg text-lg transition duration-300">
//                         Contactanos
//                     </a>
//                 </div>

//                 {/* Imagen con borde curvo a la izquierda */}
//                 <div className="relative bg-gray-50 hidden md:block w-3/5 h-full overflow-hidden ">
//                     {/* Imagen de fondo */}
//                     <img
//                         src="/IMG-20250327-WA0015.jpg"
//                         alt="Imagen Canopia"
//                         className="w-full h-full object-cover"
//                     />

//                     {/* SVG para la curva */}
//                     <svg
//                         className="absolute left-0 top-0 h-full w-[400px] -translate-x-1"
//                         viewBox="0 0 180 800"
//                         preserveAspectRatio="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             d="M180,0 
//                                 C180,400 0,700 0,900 
//                                 L0,0 Z"
//                             fill="#F4F4F4"
//                         />
//                     </svg>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default PrincipalHero;


const PrincipalHero = () => {
    return (
        <div className="relative w-full h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center text-white bg-center">

            {/* Imagen de fondo para mobile */}
            <div className="absolute md:hidden inset-0 z-0">
                <img
                    src="/IMG-20250327-WA0015.jpg"
                    alt="Imagen Canopia"
                    className="w-full h-full object-cover"
                />
                {/* Overlay translúcido blanco */}
                {/* <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" /> */}
            </div>

            <div className="flex items-center w-full h-full bg-gray-50 relative z-10">

                {/* Texto */}
                <div className="flex flex-col justify-center items-start md:-mr-44 m-auto w-full p-6 md:w-2/5 z-10">
                    <h1 className="text-5xl text-verdeOpaco text-start md:text-7xl font-bold mb-4">Bienvenido a Canopia</h1>
                    <p className="text-lg text-verdeOpaco md:text-xl text-start max-w-2xl mb-6">
                        Transformamos espacios en armonía con la naturaleza, creando jardines sostenibles y elegantes.
                    </p>
                    <a href="#contacto" className="bg-verdeOpaco hover:bg-grisClaro text-white py-3 px-6 rounded-lg text-lg transition duration-300">
                        Contactanos
                    </a>
                </div>

                {/* Imagen y curva solo en desktop */}
                <div className="relative bg-gray-50 hidden md:block w-3/5 h-full overflow-hidden">
                    <img
                        src="/IMG-20250327-WA0015.jpg"
                        alt="Imagen Canopia"
                        className="w-full h-full object-cover"
                    />
                    <svg
                        className="absolute left-0 top-0 h-full w-[400px] -translate-x-1"
                        viewBox="0 0 180 800"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M180,0 
                                C180,400 0,700 0,900 
                                L0,0 Z"
                            fill="#F4F4F4"
                        />
                    </svg>
                </div>

            </div>
        </div>
    );
};

export default PrincipalHero;