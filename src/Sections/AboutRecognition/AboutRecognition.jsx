// AboutRecognition.jsx
import React, { useEffect, useRef } from 'react';
import './AboutRecognition.css';
import ElasticCertifiedEngineerImg from '../../assets/Images/elastic-certified-engineer-badge.svg'
import ElasticContributorGoldImg from '../../assets/Images/elastic_contibutor_gold.webp'
import udemyImg from '../../assets/Images/udemy.webp'
import uitImg from '../../assets/Images/uit.webp'

const AboutRecognition = () => {
  const recognitionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          recognitionRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (recognitionRef.current) {
      observer.observe(recognitionRef.current);
    }
    
    return () => {
      if (recognitionRef.current) {
        observer.unobserve(recognitionRef.current);
      }
    };
  }, []);

  return (
    <section id="aboutRecognition" ref={recognitionRef} className="about-recognition">
      <div className="about-recognition__container">
        <h2 className="about-recognition__title">Certifications et distinctions</h2>
        
        <div className="about-recognition__badges">
          <div className="about-recognition__badge">
            <div className="about-recognition__badge-image">
              <img 
                src={ElasticCertifiedEngineerImg}
                alt="Elastic Engineer Certified" 
                className="about-recognition__badge-icon"
              />
            </div>
            <h3 className="about-recognition__badge-title">Elastic Engineer Certified</h3>
            <p className="about-recognition__badge-desc">
              Certification officielle validant une expertise approfondie dans le déploiement 
              et la gestion des solutions Elasticsearch
            </p>
          </div>
          
          <div className="about-recognition__badge">
            <div className="about-recognition__badge-image about-recognition__badge-image--gold">
              <img 
                src={ElasticContributorGoldImg}
                alt="Elastic Gold Contributor" 
                className="about-recognition__badge-icon"
              />
            </div>
            <h3 className="about-recognition__badge-title">Elastic Gold Contributor</h3>
            <p className="about-recognition__badge-desc">
              Reconnaissance d'élite décernée par Elastic pour l'Europe, l'Afrique et l'Asie 
              pour l'année 2024-2025
            </p>
          </div>
          
          <div className="about-recognition__badge">
            <div className="about-recognition__badge-image">
              <img 
                src={udemyImg}
                alt="Formateur Udemy" 
                className="about-recognition__badge-icon"
              />
            </div>
            <h3 className="about-recognition__badge-title">Formateur Udemy 4.5+</h3>
            <p className="about-recognition__badge-desc">
              Formation Elasticsearch reconnue par la communauté avec une note d'excellence 
              supérieure à 4.5/5
            </p>
          </div>

          <div className="about-recognition__badge">
            <div className="about-recognition__badge-image">
              <img 
                src={uitImg}
                alt="Formateur Udemy" 
                className="about-recognition__badge-icon"
              />
            </div>
            <h3 className="about-recognition__badge-title">Certifié par l’UIT Academy</h3>
            <p className="about-recognition__badge-desc">
              Certification délivrée par l’Union Internationale des Télécommunications (UIT) validant les compétences en évaluation, gestion et régulation de la qualité de service (QoS) et de l’expérience utilisateur (QoE) dans les réseaux fixes et mobiles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRecognition;