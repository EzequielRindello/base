import img1 from '../assets/images/DSC_9354.jpg';
import img2 from '../assets/images/DSC_9364.jpg';
import img3 from '../assets/images/DSC_9366.jpg';
import img4 from '../assets/images/DSC_9369.jpg';
import img5 from '../assets/images/DSC_9370.jpg';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5];

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
