import { useEffect } from 'react';

const SEOHead = () => {
  useEffect(() => {
    // Agregar Schema.json al head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Canopia',
      'image': 'https://canopia-opal.vercel.app/IMG-20250327-WA0015.jpg',
      'description': 'Diseño y cuidado profesional de espacios verdes con arquitectura sustentable',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'AR',
        'addressRegion': 'Argentina'
      },
      'telephone': '+54 9 2224 50-3912',
      'email': 'contactocanopia@gmail.com',
      'url': 'https://canopia-opal.vercel.app',
      'sameAs': [
        'https://www.instagram.com/canopia.ok/',
        'https://canopia2.mitiendanube.com/productos/'
      ],
      'priceRange': '$$$',
      'areaServed': 'AR',
      'serviceType': ['Paisajismo', 'Diseño de Jardines', 'Mantenimiento', 'Riego Automatizado']
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default SEOHead;
