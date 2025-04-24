import React from 'react'

const Contact = () => {
    return (
        <section id="contacto" className="bg-gray-100 text-black py-16 px-6 flex md:justify-between flex-col md:flex-row items-center">
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
                        className="p-3 rounded border border-gray-300 bg-white text-black"
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="p-3 rounded border border-gray-300 bg-white text-black"
                    />
                    <textarea
                        rows="5"
                        placeholder="Mensaje"
                        className="p-3 rounded border border-gray-300 bg-white text-black"
                    />
                    <button
                        type="submit"
                        className="bg-violeta text-white py-3 px-6 rounded hover:bg-purple-600 transition"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section >
    );
};

export default Contact