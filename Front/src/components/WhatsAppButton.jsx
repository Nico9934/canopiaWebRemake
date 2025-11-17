import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    // Número de teléfono de la empresa (formato internacional sin + ni espacios)
    // Ejemplo: 5491123456789 (Argentina: 549 + código de área + número)
    const phoneNumber = "5492224503912"; // CAMBIAR POR EL NÚMERO REAL
    const message = "Hola! Me gustaría consultar sobre sus servicios.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group animate-pulse hover:animate-none"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp className="text-4xl group-hover:scale-110 transition-transform duration-300" />

            {/* Tooltip que aparece en hover */}
            <span className="absolute right-20 bg-negro text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Chateá con nosotros
            </span>
        </a>
    );
};

export default WhatsAppButton;
