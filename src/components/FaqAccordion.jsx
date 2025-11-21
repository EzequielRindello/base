import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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

export default FaqAccordion;