const Gallery = () => {
  const images = [
    '../src/assets/images/DSC_9354.jpg',
    '../src/assets/images/DSC_9364.jpg',
    '../src/assets/images/DSC_9366.jpg',
    '../src/assets/images/DSC_9369.jpg',
    '../src/assets/images/DSC_9354.jpg',
    '../src/assets/images/DSC_9370.jpg',
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