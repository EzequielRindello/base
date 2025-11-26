import Marquee from "react-fast-marquee";
import img1 from '../assets/images/DSC_9354.jpg';
import img2 from '../assets/images/DSC_9364.jpg';
import img3 from '../assets/images/DSC_9366.jpg';
import img4 from '../assets/images/DSC_9369.jpg';
import img5 from '../assets/images/DSC_9370.jpg';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="section-title">Nuestra Historia</h2>
        <p className="section-text">
          Cada momento capturado es un recuerdo que atesoramos.
          Aquí están algunos de nuestros instantes favoritos juntos.
        </p>
      </div>
      <div className="gallery-wrapper">
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item-marquee">
              <img src={img} alt={`Momento ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Gallery;