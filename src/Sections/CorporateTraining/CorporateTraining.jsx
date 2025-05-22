// CorporateTraining.jsx
import React, { useEffect, useRef } from 'react';
import { Users, Building, Clock, Map } from 'lucide-react';
import './CorporateTraining.css';
import ElasticsearchImg from '../../assets/Images/Elasticsearch.webp'

const CorporateTraining = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const elements = [sectionRef.current, contentRef.current, imageRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: <Users size={20} className="corporate-training__feature-icon" aria-hidden="true" />,
      text: "Formations adaptées à tous les niveaux"
    },
    {
      icon: <Building size={20} className="corporate-training__feature-icon" aria-hidden="true" />,
      text: "Personnalisation selon vos besoins spécifiques"
    },
    {
      icon: <Clock size={20} className="corporate-training__feature-icon" aria-hidden="true" />,
      text: "Ateliers d'une journée ou programmes complets"
    },
    {
      icon: <Map size={20} className="corporate-training__feature-icon" aria-hidden="true" />,
      text: "En présentiel ou à distance"
    }
  ];

  return (
    <section id="corporate-training" className="corporate-training" ref={sectionRef}>
      <div className="corporate-training__container">
        <div className="corporate-training__content" ref={contentRef}>
          <h2 className="corporate-training__title">Formations en entreprise</h2>
          <p className="corporate-training__description">
            Je propose des formations personnalisées directement dans vos locaux ou à distance. 
            Spécialement conçues pour les équipes techniques, ces formations couvrent Elasticsearch, 
            le monitoring de données, et les technologies télécom.
          </p>
          
          <ul className="corporate-training__features">
            {features.map((feature, index) => (
              <li key={index} className="corporate-training__feature">
                {feature.icon}
                <span className="corporate-training__feature-text">{feature.text}</span>
              </li>
            ))}
          </ul>
          
          <div className="corporate-training__topics">
            <h3 className="corporate-training__topics-title">Thématiques disponibles :</h3>
            <div className="corporate-training__topics-grid">
              <span className="corporate-training__topic">Elasticsearch</span>
              <span className="corporate-training__topic">Kibana</span>
              <span className="corporate-training__topic">Logstash</span>
              <span className="corporate-training__topic">Beats</span>
              <span className="corporate-training__topic">Opensearch</span>
              <span className="corporate-training__topic">Kafka</span>
              <span className="corporate-training__topic">Monitoring Data</span>
              <span className="corporate-training__topic">Télécom</span>
            </div>
          </div>
          
          <a href="contact" className="corporate-training__cta">
            Demander un devis
          </a>
        </div>
        
        <div className="corporate-training__image-container" ref={imageRef}>
          <img 
            src={ElasticsearchImg}
            alt="Formation en entreprise par Iyanou Eraste AKANDE" 
            className="corporate-training__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;