import React from 'react'

const Contact = () => {
    return (
        <section id="contacto" className="w-full flex flex-col justify-center min-h-screen text-negro py-12 sm:py-16 bg-blanco">
            <div className="w-11/12 m-auto flex flex-col sm:flex-row gap-16 font-comfortaa h-auto justify-center">
                {/* Description */}
                <div className="flex w-full sm:w-1/2 justify-center flex-col">
                    <h3 className="mb-6 text-2xl sm:text-4xl border-b-8 pb-4 border-violeta w-fit">
                        Contacto
                    </h3>
                    <p className="text-sm sm:text-xl leading-8 sm:leading-10">
                        Si tienes alguna consulta o necesitas más información, no dudes en enviarnos un mensaje. Estamos aquí para ayudarte.
                    </p>
                </div>
                {/* Formulario */}
                <form className="w-full sm:w-1/2 justify-center items-center gap-10 flex flex-col flex-wrap">
                    <div className="w-full flex flex-col group">
                        <label htmlFor="contact-name" className="text-sm mb-1 transition-colors duration-300 group-focus-within:text-violeta">
                            Nombre: *
                        </label>
                        <input
                            type="text"
                            id="contact-name"
                            className="text-sm text-verdeOscuro border-b-2 border-verdeOscuro py-2 transition-all duration-300 focus:border-violeta focus:outline-none bg-transparent"
                        />
                    </div>
                    <div className="w-full flex flex-col group">
                        <label htmlFor="contact-email" className="text-sm mb-1 transition-colors duration-300 group-focus-within:text-violeta">
                            Email: *
                        </label>
                        <input
                            type="email"
                            id="contact-email"
                            className="text-sm text-verdeOscuro border-b-2 border-verdeOscuro py-2 transition-all duration-300 focus:border-violeta focus:outline-none bg-transparent"
                        />
                    </div>
                    <div className="w-full flex flex-col group">
                        <label htmlFor="contact-message" className="text-sm mb-1 transition-colors duration-300 group-focus-within:text-violeta">
                            Mensaje: *
                        </label>
                        <textarea
                            id="contact-message"
                            rows="5"
                            className="text-sm text-verdeOscuro border-b-2 border-verdeOscuro py-2 transition-all duration-300 focus:border-violeta focus:outline-none bg-transparent resize-none"
                        />
                    </div>
                    <button
                        className="w-full m-auto bg-verdeOscuro p-3 rounded-lg text-white transition-all duration-300 hover:bg-violeta hover:scale-105 hover:shadow-xl transform"
                        type="submit"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact