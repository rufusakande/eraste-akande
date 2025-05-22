// AboutBio.jsx
import React, { useEffect, useRef } from 'react';
import { Briefcase, Award, Radio } from 'lucide-react';
import './AboutBio.css';

const AboutBio = () => {
  const bioRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bioRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (bioRef.current) {
      observer.observe(bioRef.current);
    }
    
    return () => {
      if (bioRef.current) {
        observer.unobserve(bioRef.current);
      }
    };
  }, []);

  return (
    <section id="aboutBio" ref={bioRef} className="about-bio">
      <div className="about-bio__container">
        <h2 className="about-bio__title">De l'INPT à l'élite de la data</h2>
        
        <div className="about-bio__content">
          <div className="about-bio__text">
            <p className="about-bio__paragraph">
              Diplômé de l'INPT Maroc, je mets mes compétences au service des entreprises pour transformer 
              leurs données en leviers de décision. Mon parcours d'ingénieur en télécoms m'a naturellement 
              conduit vers l'ingénierie des données et les technologies de monitoring avancé.
            </p>
            <p className="about-bio__paragraph">
              Ma passion pour les systèmes distribués et la recherche d'information m'a amené à me spécialiser 
              dans l'écosystème Elasticsearch, où j'ai obtenu les plus hautes certifications et reconnaissance 
              en tant que contributeur Gold.
            </p>
          </div>
          
          <div className="about-bio__stats">
            <div className="about-bio__stat-item">
              <div className="about-bio__stat-icon">
                <Briefcase size={32} />
              </div>
              <div className="about-bio__stat-content">
                <h3 className="about-bio__stat-title">Expertise</h3>
                <p className="about-bio__stat-text">Consultant Elasticsearch certifié</p>
              </div>
            </div>
            
            <div className="about-bio__stat-item">
              <div className="about-bio__stat-icon">
                <Award size={32} />
              </div>
              <div className="about-bio__stat-content">
                <h3 className="about-bio__stat-title">Reconnaissance</h3>
                <p className="about-bio__stat-text">Elastic Gold Contributor</p>
              </div>
            </div>
            
            <div className="about-bio__stat-item">
              <div className="about-bio__stat-icon">
                <Radio size={32} />
              </div>
              <div className="about-bio__stat-content">
                <h3 className="about-bio__stat-title">Formation</h3>
                <p className="about-bio__stat-text">Formateur Udemy 4.5+ étoiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBio;