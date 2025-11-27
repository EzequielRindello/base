import { FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa';

const SocialFooter = () => {
  return (
    <section className="social-section">
      <h2 className="section-title">Contactanos</h2>

      <div className="contacts-grid">
        <div className="contact-card">
          <h3 className="contact-name">Giane</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/gianirindello/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram de Giane"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5493416486987"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp de Giane"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="contact-card">
          <h3 className="contact-name">Lihuel</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/lihueee7/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram de Lihuel"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5493413573053"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp de Lihuel"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-heart">
          <FaHeart />
        </div>
        <p className="footer-message">¡Gracias por acompañarnos en este día tan especial!</p>
        <p className="footer-date">03 • Abril • 2026</p>
      </footer>
    </section>
  );
};

export default SocialFooter;