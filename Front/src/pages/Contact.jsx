import React from 'react'

const Contact = () => {
    return (
        <section id="contacto" className="bg-gray-100 text-black py-16 px-6 flex md:justify-between flex-col md:flex-row items-center md:gap-24">
            <div className="md:w-1/2 mx-auto flex flex-col md:flex-row items-center">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold mb-6 text-violeta">Contacto</h2>
                    <p className="text-lg"></p>
                    Si tienes alguna consulta o necesitas más información, no dudes en enviarnos un mensaje. Estamos aquí para ayudarte.
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <form className="grid gap-6">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="p-3 rounded-lg border-2 border-gray-300 bg-white text-black transition-all duration-300 focus:border-violeta focus:ring-4 focus:ring-violeta/20 focus:outline-none hover:border-gray-400"
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="p-3 rounded-lg border-2 border-gray-300 bg-white text-black transition-all duration-300 focus:border-violeta focus:ring-4 focus:ring-violeta/20 focus:outline-none hover:border-gray-400"
                    />
                    <textarea
                        rows="5"
                        placeholder="Mensaje"
                        className="p-3 rounded-lg border-2 border-gray-300 bg-white text-black transition-all duration-300 focus:border-violeta focus:ring-4 focus:ring-violeta/20 focus:outline-none hover:border-gray-400 resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-violeta text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl transform group"
                    >
                        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                            Enviar Mensaje
                        </span>
                    </button>
                </form>
            </div>
        </section >
    );
};

export default Contact