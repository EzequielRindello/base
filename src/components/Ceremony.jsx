import { FaMapMarkerAlt } from 'react-icons/fa';

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

export default Ceremony;