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

export default Rsvp;