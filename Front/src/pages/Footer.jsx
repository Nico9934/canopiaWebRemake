import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">© 2023 Canopia. All rights reserved.</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaWhatsapp size={24} />
                    </a>
                    <a href="mailto:yourmail@example.com" className="hover:text-gray-400">
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
