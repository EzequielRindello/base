import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialFooter = () => {
  return (
    <section className="social-section">
      <h2 className="section-title">Contactanos</h2>

      <div className="contact-person">
        <h3 className="contact-name">Giane</h3>
        <div className="social-links">
          <a href="https://instagram.com/giane" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5493415123456" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="contact-person">
        <h3 className="contact-name">Lihuel</h3>
        <div className="social-links">
          <a href="https://instagram.com/lihuel" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5493415654321" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>¡Gracias por acompañarnos!</p>
      </footer>
    </section>
  );
};

export default SocialFooter;