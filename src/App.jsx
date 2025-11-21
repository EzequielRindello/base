import { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaInstagram, FaWhatsapp, FaChevronDown, FaMapMarkerAlt, FaMusic, FaChevronUp } from 'react-icons/fa';

// Hook useCountdown
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

// Hook useAudioPlayer
// Hook useAudioPlayer mejorado
const useAudioPlayer = (audioSrc) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowSplash(false);
        })
        .catch(err => {
          console.log('Error al reproducir:', err);
          setShowSplash(false);
        });
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return { isPlaying, togglePlay, showSplash, startMusic };
};

// Component: MusicPlayerButton
const MusicPlayerButton = ({ isPlaying, onToggle }) => {
  return (
    <button className="music-player-btn" onClick={onToggle} aria-label="Reproducir música">
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
};

// Component: Hero
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Lihuel y Giane</h1>
        <h2 className="hero-subtitle">¡NOS CASAMOS!</h2>
      </div>
      <div className="hero-scroll-hint">
        <FaChevronDown className="bounce" />
      </div>
    </section>
  );
};

// Component: Countdown
const Countdown = () => {
  const timeLeft = useCountdown('2025-04-14T00:00:00');

  return (
    <section className="countdown-section">
      <h2 className="section-title">14 de Abril 2025</h2>
      <p className="countdown-text">¡Listos para festejar juntos! Faltan...</p>
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">días</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
          <span className="countdown-label">horas</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <span className="countdown-label">minutos</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <span className="countdown-label">segundos</span>
        </div>
      </div>
    </section>
  );
};

// Component: Gallery
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

// Component: Ceremony
const Ceremony = () => {
  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Rosario,Santa+Fe,Argentina', '_blank');
  };

  return (
    <section className="ceremony-section">
      <h2 className="section-title">Ceremonia y Fiesta</h2>
      <div className="ceremony-content">
        <FaMapMarkerAlt className="ceremony-icon" />
        <p className="ceremony-address">
          Salón de Eventos "El Jardín"<br />
          Av. Belgrano 1234<br />
          Rosario, Santa Fe
        </p>
        <button className="cta-btn" onClick={handleMapClick}>
          <FaMapMarkerAlt /> Cómo llegar
        </button>
      </div>
    </section>
  );
};

// Component: SongRequest
const SongRequest = () => {
  const handleFormClick = () => {
    window.open('https://forms.google.com/', '_blank');
  };

  return (
    <section className="song-request-section">
      <FaMusic className="song-icon" />
      <h2 className="section-title">¡Que no falte tu tema favorito!</h2>
      <p className="section-text">Ayudanos a armar tu playlist</p>
      <button className="cta-btn" onClick={handleFormClick}>
        Sugerir canción
      </button>
    </section>
  );
};

// Component: FaqAccordion
const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: 'Dress Code',
      content: 'Elegante sport. Sugerimos colores claros y pasteles acorde a la primavera. ¡Queremos que te sientas cómodo y hermoso!'
    },
    {
      title: 'Regalo',
      content: 'Tu presencia es nuestro mejor regalo. Si querés obsequiarnos algo, agradecemos contribuciones para nuestra luna de miel.'
    }
  ];

  return (
    <section className="faq-section">
      <h2 className="section-title">Dudas Frecuentes</h2>
      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button
              className={`faq-question ${openIndex === idx ? 'active' : ''}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.title}
              {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={`faq-answer ${openIndex === idx ? 'open' : ''}`}>
              <p>{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Component: Rsvp
const Rsvp = () => {
  const handleRsvpClick = () => {
    window.open('https://forms.google.com/', '_blank');
  };

  return (
    <section className="rsvp-section">
      <h2 className="section-title">Confirmación de Asistencia</h2>
      <h3 className="rsvp-subtitle">Esperamos que puedas acompañarnos en este momento tan especial</h3>
      <p className="section-text">
        Por favor, confirmanos tu asistencia antes del 1 de abril.
        Tu presencia hará de este día algo inolvidable.
      </p>
      <button className="cta-btn primary" onClick={handleRsvpClick}>
        Confirmar Asistencia
      </button>
    </section>
  );
};

// Component: SocialFooter
const SocialFooter = () => {
  return (
    <section className="social-section">
      <h2 className="section-title">Contactanos</h2>

      {/* Giane */}
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

      {/* Lihuel */}
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

// Main App Component
export default function App() {
  const { isPlaying, togglePlay, showSplash, startMusic } = useAudioPlayer('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

  // Bloquear scroll cuando el splash está activo
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  return (
    <div className="app">
      {/* Splash Screen */}
      {showSplash && (
        <div className="splash-screen" onClick={startMusic}>
          <div className="splash-content">
            <h1 className="splash-title">Lihuel y Giane</h1>
            <p className="splash-subtitle">¡NOS CASAMOS!</p>
            <button className="splash-btn">
              <FaPlay /> Entrar
            </button>
          </div>
        </div>
      )}

      <MusicPlayerButton isPlaying={isPlaying} onToggle={togglePlay} />
      <Hero />
      <Countdown />
      <Gallery />
      <Ceremony />
      <SongRequest />
      <FaqAccordion />
      <Rsvp />
      <SocialFooter />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500&display=swap');

        :root {
          --color-primary: #E8B4B8;
          --color-secondary: #F5E6D3;
          --color-accent: #D4A373;
          --color-olive: #A8B5A0;
          --color-salmon: #F4A582;
          --color-text: #4A4A4A;
          --color-text-light: #6B6B6B;
          --color-white: #FFFFFF;
          --color-overlay: rgba(0, 0, 0, 0.3);
          
          --font-cursive: 'Great Vibes', cursive;
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Montserrat', sans-serif;
          
          --spacing-xs: 0.5rem;
          --spacing-sm: 1rem;
          --spacing-md: 2rem;
          --spacing-lg: 3rem;
          --spacing-xl: 4rem;
          
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
          --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
          --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-sans);
          color: var(--color-text);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .app {
          width: 100%;
        }

        /* Music Player Button */
        .music-player-btn {
          position: fixed;
          top: 20px;
          left: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--color-white);
          border: 2px solid var(--color-primary);
          color: var(--color-primary);
          font-size: 1.2rem;
          cursor: pointer;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }

        .music-player-btn:hover {
          transform: scale(1.1);
          background: var(--color-primary);
          color: var(--color-white);
        }

        /* Hero Section */
        .hero {
          height: 100vh;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-salmon) 100%);
          background-image: url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-overlay);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: var(--spacing-md);
        }

        .hero-title {
          font-family: var(--font-cursive);
          font-size: clamp(3rem, 10vw, 6rem);
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
          text-shadow: var(--shadow-md);
        }

        .hero-subtitle {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: var(--color-white);
          letter-spacing: 0.3em;
          font-weight: 400;
          text-shadow: var(--shadow-sm);
        }

        .hero-scroll-hint {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          color: var(--color-white);
          font-size: 2rem;
        }

        .bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

        /* Section Base */
        section {
          padding: var(--spacing-xl) var(--spacing-md);
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 5vw, 3rem);
          text-align: center;
          color: var(--color-accent);
          margin-bottom: var(--spacing-md);
          font-weight: 600;
        }

        .section-text {
          font-family: var(--font-sans);
          font-size: 1rem;
          text-align: center;
          color: var(--color-text-light);
          max-width: 600px;
          margin: 0 auto var(--spacing-md);
          font-weight: 300;
        }

        /* Countdown Section */
        .countdown-section {
          background: linear-gradient(to bottom, var(--color-secondary), var(--color-white));
        }

        .countdown-text {
          text-align: center;
          font-size: 1.2rem;
          color: var(--color-text);
          margin-bottom: var(--spacing-lg);
          font-family: var(--font-serif);
        }

        .countdown-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-md);
          max-width: 500px;
          margin: 0 auto;
        }

        .countdown-item {
          background: var(--color-white);
          padding: var(--spacing-md);
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .countdown-number {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 700;
          color: var(--color-primary);
          font-family: var(--font-serif);
        }

        .countdown-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-light);
          font-weight: 500;
        }

        /* Gallery Section */
        .gallery-section {
          background: var(--color-white);
        }

        .gallery-container {
          display: flex;
          gap: var(--spacing-md);
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: thin;
          scrollbar-color: var(--color-primary) var(--color-secondary);
          padding: var(--spacing-sm) 0;
        }

        .gallery-container::-webkit-scrollbar {
          height: 8px;
        }

        .gallery-container::-webkit-scrollbar-track {
          background: var(--color-secondary);
          border-radius: 10px;
        }

        .gallery-container::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border-radius: 10px;
        }

        .gallery-item {
          flex: 0 0 85%;
          scroll-snap-align: center;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        .gallery-item img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }

        @media (min-width: 768px) {
          .gallery-item {
            flex: 0 0 45%;
          }
        }

        /* Ceremony Section */
        .ceremony-section {
          background: linear-gradient(135deg, var(--color-olive) 0%, var(--color-secondary) 100%);
          text-align: center;
        }

        .ceremony-content {
          max-width: 500px;
          margin: 0 auto;
        }

        .ceremony-icon {
          font-size: 3rem;
          color: var(--color-accent);
          margin-bottom: var(--spacing-md);
        }

        .ceremony-address {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: var(--spacing-lg);
          color: var(--color-text);
        }

        /* CTA Button */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          padding: 1rem 2rem;
          background: var(--color-white);
          color: var(--color-accent);
          border: 2px solid var(--color-accent);
          border-radius: 50px;
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: var(--shadow-sm);
        }

        .cta-btn:hover {
          background: var(--color-accent);
          color: var(--color-white);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .cta-btn.primary {
          background: var(--color-primary);
          color: var(--color-white);
          border-color: var(--color-primary);
        }

        .cta-btn.primary:hover {
          background: var(--color-salmon);
          border-color: var(--color-salmon);
        }

        /* Song Request Section */
        .song-request-section {
          background: var(--color-white);
          text-align: center;
        }

        .song-icon {
          font-size: 3rem;
          color: var(--color-salmon);
          margin-bottom: var(--spacing-md);
        }

        /* FAQ Section */
        .faq-section {
          background: var(--color-secondary);
        }

        .faq-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .faq-item {
          margin-bottom: var(--spacing-md);
          background: var(--color-white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .faq-question {
          width: 100%;
          padding: var(--spacing-md);
          background: var(--color-white);
          border: none;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--color-accent);
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          transition: background 0.3s ease;
        }

        .faq-question:hover {
          background: var(--color-secondary);
        }

        .faq-question.active {
          background: var(--color-secondary);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          padding: 0 var(--spacing-md);
        }

        .faq-answer.open {
          max-height: 500px;
          padding: var(--spacing-md);
        }

        .faq-answer p {
          color: var(--color-text);
          line-height: 1.8;
        }

        /* RSVP Section */
        .rsvp-section {
          background: linear-gradient(to bottom, var(--color-white), var(--color-secondary));
          text-align: center;
        }

        .rsvp-subtitle {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--color-text);
          font-weight: 400;
          margin-bottom: var(--spacing-md);
          font-style: italic;
        }

        /* Social Section */
        .social-section {
          background: var(--color-primary);
          text-align: center;
          padding-bottom: var(--spacing-md);
        }

        .social-section .section-title {
          color: var(--color-white);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .social-link {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--color-white);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .social-link:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: var(--shadow-md);
        }

        /* Footer */
        .footer {
          margin-top: var(--spacing-lg);
          padding-top: var(--spacing-md);
          border-top: 1px solid rgba(255, 255, 255, 0.3);
        }

        .footer p {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--color-white);
          font-style: italic;
        }

        /* Responsive adjustments */
        @media (min-width: 768px) {
          .countdown-grid {
            grid-template-columns: repeat(4, 1fr);
            max-width: 800px;
          }

          section {
            padding: var(--spacing-xl) var(--spacing-lg);
          }
        }

        /* Contact Person */
        .contact-person {
          margin-bottom: var(--spacing-lg);
        }

        .contact-name {
          font-family: var(--font-cursive);
          font-size: 2rem;
          color: var(--color-white);
          margin-bottom: var(--spacing-md);
          text-align: center;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: var(--spacing-md);
        }

                /* Splash Screen */
        .splash-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-salmon) 100%);
          background-image: url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920');
          background-size: cover;
          background-position: center;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          animation: fadeIn 0.5s ease;
        }

        .splash-screen::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
        }

        .splash-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: var(--spacing-md);
        }

        .splash-title {
          font-family: var(--font-cursive);
          font-size: clamp(3.5rem, 12vw, 7rem);
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
          text-shadow: var(--shadow-lg);
          animation: slideDown 0.8s ease;
        }

        .splash-subtitle {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: var(--color-white);
          letter-spacing: 0.3em;
          margin-bottom: var(--spacing-xl);
          text-shadow: var(--shadow-md);
          animation: slideDown 1s ease;
        }

        .splash-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: 1.2rem 2.5rem;
          background: var(--color-white);
          color: var(--color-primary);
          border: none;
          border-radius: 50px;
          font-family: var(--font-sans);
          font-size: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .splash-btn:hover {
          transform: scale(1.05);
          background: var(--color-primary);
          color: var(--color-white);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}