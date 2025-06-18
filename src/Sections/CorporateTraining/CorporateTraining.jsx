// CorporateTraining.jsx
import React, { useEffect, useRef } from 'react';
import { Users, Building, Clock, Map } from 'lucide-react';
import './CorporateTraining.css';
import ElasticsearchImg from '../../assets/Images/Elasticsearch.webp'
import { Link } from 'react-router-dom';

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
      text: "Training adapted to all levels"
    },
    {
      icon: <Building size={20} className="corporate-training__feature-icon" aria-hidden="true" />,
      text: "Customization according to your specific needs"
    },
    {
      icon: <Clock size={20} className="corporate-training__feature-icon" aria-hidden="true" />,
      text: "One-day workshops or complete programs"
    },
    {
      icon: <Map size={20} className="corporate-training__feature-icon" aria-hidden="true" />,
      text: "In-person or remote"
    }
  ];

  return (
    <section id="corporate-training" className="corporate-training" ref={sectionRef}>
      <div className="corporate-training__container">
        <div className="corporate-training__content" ref={contentRef}>
          <h2 className="corporate-training__title">Corporate Training</h2>
          <p className="corporate-training__description">
            I offer personalized training directly at your premises or remotely. 
            Specially designed for technical teams, these trainings cover Elasticsearch, 
            data monitoring, and telecom technologies.
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
            <h3 className="corporate-training__topics-title">Available topics:</h3>
            <div className="corporate-training__topics-grid">
              <span className="corporate-training__topic">Elasticsearch</span>
              <span className="corporate-training__topic">Kibana</span>
              <span className="corporate-training__topic">Logstash</span>
              <span className="corporate-training__topic">Beats</span>
              <span className="corporate-training__topic">Opensearch</span>
              <span className="corporate-training__topic">Kafka</span>
              <span className="corporate-training__topic">Data Monitoring</span>
              <span className="corporate-training__topic">Telecom</span>
            </div>
          </div>
          
          <Link to="/contact" className="corporate-training__cta">
            Request a quote
          </Link>
        </div>
        
        <div className="corporate-training__image-container" ref={imageRef}>
          <img 
            src={ElasticsearchImg}
            alt="Corporate training by Iyanou Eraste AKANDE" 
            className="corporate-training__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;