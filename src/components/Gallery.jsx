const Gallery = () => {
  // Simulación de imágenes - reemplazar con rutas reales
  const images = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800'
  ];

  return (
    <section className="gallery-section">
      <h2 className="section-title">Nuestra Historia</h2>
      <div className="gallery-container">
        {images.map((img, idx) => (
          <a
            key={idx}
            className="gallery-item"
            href={img}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img} alt={`Momento ${idx + 1}`} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;