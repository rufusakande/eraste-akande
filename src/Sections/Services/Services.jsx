import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Headphones, 
  GraduationCap,
  BarChart3 
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  // Réinitialiser les références lors des re-rendus
  itemsRef.current = [];

  // Fonction pour ajouter des références aux éléments
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const services = [
    {
      icon: <Database />,
      title: "Solutions Personnalisées pour vos Données",
      description: "Transformez vos données en leviers stratégiques avec des solutions sur mesure conçues par un expert Elasticsearch certifié.",
      cta: "Découvrir mes solutions",
      url: "/services/solution"
    },
    {
      icon: <Headphones />,
      title: "Services de Consulting",
      description: "Bénéficiez de l'expertise d'un ingénieur télécom certifié Elastic Engineer pour transformer vos données en véritables leviers stratégiques.",
      cta: "Consulter mes services",
      url: "/services/consulting"
    },
    {
      icon: <GraduationCap />,
      title: "Formez-vous avec un Expert Certifié",
      description: "Développez vos compétences en Elasticsearch, data engineering et télécoms avec des formations conçues par un ingénieur certifié et Elastic Gold Contributor.",
      cta: "Découvrir mes formations",
      url: "/services/training"
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Mes services</h2>
          <div className="services-title-underline"></div>
          <p className="services-subtitle">Des solutions adaptées à vos besoins data</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              ref={addToRefs}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-icon-container">
                {React.cloneElement(service.icon, { size: 32, color: '#E4B31A' })}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={service.url}>
                <button className="service-cta">
                  {service.cta}
                  <span className="service-cta-arrow">→</span>
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;