import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: 'Dress Code',
      content: 'Formal. Sugerimos no usar blanco. Esperamos que todos se sientan cómodos y disfruten del día con nosotros.'
    },
    {
      title: 'Regalo',
      content: 'Si querés tener un detalle con nosotros, no estamos necesitando nada para el hogar, aceptamos el dinero.'
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
              {faq.title === 'Regalo' && (
                <>
                  <p>Alias: <strong>gianirindello1</strong></p>
                  <p>Datos: <strong>Gianella Rindello - Mercado Pago</strong></p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
