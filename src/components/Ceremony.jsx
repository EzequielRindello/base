import { FaMapMarkerAlt } from 'react-icons/fa';

const Ceremony = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Club+Espa%C3%B1ol+de+Rosario/@-32.9476945,-60.6404249,17z/data=!3m1!4b1!4m6!3m5!1s0x95b7ab1985d9af7f:0xc594815469da9e8c!8m2!3d-32.947699!4d-60.63785!16s%2Fg%2F1tk4sbbj?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D', '_blank');
  };
  return (
    <section className="ceremony-section">
      <h2 className="section-title">Ceremonia y Fiesta</h2>
      <div className="ceremony-content">
        <FaMapMarkerAlt className="ceremony-icon" />
        <p className="ceremony-address">
          Salón de Eventos "Club Español"<br />
          Rioja 1052<br />
          Rosario, Santa Fe
        </p>
        <button className="cta-btn" onClick={handleMapClick}>
          <FaMapMarkerAlt /> Cómo llegar
        </button>
      </div>
      <br />
      <div className="events-timeline">
        <div className="event-item">
          <p className="event-time">21:30 PM</p>
          <p className="event-name">Inicio de ceremonia</p>
        </div>
        <div className="event-item">
          <p className="event-time">04:00 AM</p>
          <p className="event-name">Finalización de la fiesta</p>
        </div>
      </div>
      <p className="schedule-note">
        <em>* Cerca de la fecha se definirán los detalles</em>
      </p>
    </section>
  );
};
export default Ceremony;