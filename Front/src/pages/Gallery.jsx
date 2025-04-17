const Gallery = () => {
    const images = [
        "/IMG-20250327-WA0013.jpg",
        "/IMG-20250327-WA0014.jpg",
        "/IMG-20250327-WA0015.jpg",
        "/IMG-20250327-WA0016.jpg",
        "/IMG-20250327-WA0017.jpg",
        "/IMG-20250327-WA0018.jpg",
    ];

    return (
        <section id="gallery" className="bg-verdeOliva py-16 px-6">
            <div className="max-w-6xl mx-auto text-white">
                <h2 className="text-4xl font-bold mb-10 text-center">Galería</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`img-${index}`} className="rounded shadow-lg" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;