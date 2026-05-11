import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef(null)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
    const [errors, setErrors] = useState({})

    // Inicializar EmailJS (una sola vez)
    React.useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    }, [])

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        const fieldName = id.replace('contact-', '')
        setFormData(prev => ({ ...prev, [fieldName]: value }))
        // Limpiar error cuando empieza a escribir
        if (errors[fieldName]) {
            setErrors(prev => ({ ...prev, [fieldName]: '' }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = {}

        // Validación
        if (!formData.name.trim()) newErrors.name = 'El nombre es requerido'
        if (!formData.email.trim()) newErrors.email = 'El email es requerido'
        else if (!validateEmail(formData.email)) newErrors.email = 'Email inválido'
        if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido'
        if (formData.message.trim().length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setStatus('sending')

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'contactocanopia@gmail.com'
                }
            )

            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setStatus(null), 5000)
        } catch (error) {
            console.error('Error sending email:', error)
            setStatus('error')
            setTimeout(() => setStatus(null), 5000)
        }
    }

    return (
        <section id="contacto" className="w-full flex flex-col justify-center min-h-screen text-negro py-12 sm:py-16 bg-blanco">
            <div className="w-11/12 m-auto flex flex-col sm:flex-row gap-16 font-comfortaa h-auto justify-center">
                {/* Description */}
                <div className="flex w-full sm:w-1/2 justify-center flex-col">
                    <h2 className="mb-6 text-2xl sm:text-4xl border-b-8 pb-4 border-violeta w-fit">
                        Contacto
                    </h2>
                    <p className="text-sm sm:text-xl leading-8 sm:leading-10 text-negro">
                        Si tienes alguna consulta o necesitas más información, no dudes en enviarnos un mensaje. Estamos aquí para ayudarte.
                    </p>
                </div>

                {/* Formulario */}
                <form ref={formRef} onSubmit={handleSubmit} className="w-full sm:w-1/2 justify-center items-center gap-10 flex flex-col flex-wrap" noValidate>
                    {/* Status Messages */}
                    {status === 'success' && (
                        <div className="w-full p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center" role="alert" aria-live="polite">
                            ✓ Mensaje enviado exitosamente. Nos contactaremos pronto.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="w-full p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center" role="alert" aria-live="polite">
                            ✗ Error al enviar. Intenta nuevamente.
                        </div>
                    )}

                    {/* Name Field */}
                    <div className="w-full flex flex-col group">
                        <label htmlFor="contact-name" className="text-sm mb-1 transition-colors duration-300 group-focus-within:text-violeta text-negro">
                            Nombre: <span className="text-violeta">*</span>
                        </label>
                        <input
                            type="text"
                            id="contact-name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={status === 'sending'}
                            className="text-sm text-negro border-b-2 border-negro py-2 transition-all duration-300 focus:border-violeta focus:outline-none bg-transparent disabled:opacity-50"
                            aria-label="Nombre"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'error-name' : undefined}
                            placeholder="Tu nombre completo"
                        />
                        {errors.name && (
                            <span id="error-name" className="text-red-600 text-xs mt-1">{errors.name}</span>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="w-full flex flex-col group">
                        <label htmlFor="contact-email" className="text-sm mb-1 transition-colors duration-300 group-focus-within:text-violeta text-negro">
                            Email: <span className="text-violeta">*</span>
                        </label>
                        <input
                            type="email"
                            id="contact-email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={status === 'sending'}
                            className="text-sm text-negro border-b-2 border-negro py-2 transition-all duration-300 focus:border-violeta focus:outline-none bg-transparent disabled:opacity-50"
                            aria-label="Email"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'error-email' : undefined}
                            placeholder="tu@email.com"
                            autoComplete="email"
                        />
                        {errors.email && (
                            <span id="error-email" className="text-red-600 text-xs mt-1">{errors.email}</span>
                        )}
                    </div>

                    {/* Message Field */}
                    <div className="w-full flex flex-col group">
                        <label htmlFor="contact-message" className="text-sm mb-1 transition-colors duration-300 group-focus-within:text-violeta text-negro">
                            Mensaje: <span className="text-violeta">*</span>
                        </label>
                        <textarea
                            id="contact-message"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={status === 'sending'}
                            rows="5"
                            className="text-sm text-negro border-b-2 border-negro py-2 transition-all duration-300 focus:border-violeta focus:outline-none bg-transparent resize-none disabled:opacity-50"
                            aria-label="Mensaje"
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? 'error-message' : undefined}
                            placeholder="Cuéntanos en qué podemos ayudarte..."
                        />
                        {errors.message && (
                            <span id="error-message" className="text-red-600 text-xs mt-1">{errors.message}</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full m-auto bg-verdeOpaco hover:bg-verdeOpaco/90 disabled:bg-gray-400 p-3 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl transform font-semibold"
                        type="submit"
                        disabled={status === 'sending'}
                        aria-busy={status === 'sending'}
                    >
                        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact