import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import './AlternativeContacts.css';

const AlternativeContacts = () => {
  const contactsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );
    
    if (contactsRef.current) {
      observer.observe(contactsRef.current);
    }
    
    return () => {
      if (contactsRef.current) {
        observer.unobserve(contactsRef.current);
      }
    };
  }, []);

  return (
    <section id="alternativeContacts" className="alternative-contacts" ref={contactsRef}>
      <div className="alternative-contacts__container">
        <h2 className="alternative-contacts__title">Autres moyens de contact</h2>
        
        <div className="alternative-contacts__grid">
          <div className="alternative-contacts__card">
            <div className="alternative-contacts__icon-wrapper">
              <Mail size={24} className="alternative-contacts__icon" />
            </div>
            <h3 className="alternative-contacts__card-title">Email</h3>
            <p className="alternative-contacts__text">
              Contactez-moi directement par email
            </p>
            <a 
              href="mailto:eraste@erasteakande.com" 
              className="alternative-contacts__link"
              aria-label="Envoyer un email à pro@iyanou.com"
            >
              eraste@erasteakande.com
              <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="alternative-contacts__card">
            <div className="alternative-contacts__icon-wrapper">
              <Linkedin size={24} className="alternative-contacts__icon" />
            </div>
            <h3 className="alternative-contacts__card-title">LinkedIn</h3>
            <p className="alternative-contacts__text">
              Connectons-nous sur LinkedIn
            </p>
            <a 
              href="https://linkedin.com/in/iyanou-eraste-akande" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="alternative-contacts__link"
              aria-label="Visiter le profil LinkedIn de Iyanou Eraste AKANDE"
            >
              linkedin.com/in/iyanou-eraste-akande
              <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="alternative-contacts__card">
            <div className="alternative-contacts__icon-wrapper">
              <MapPin size={24} className="alternative-contacts__icon" />
            </div>
            <h3 className="alternative-contacts__card-title">Localisation</h3>
            <p className="alternative-contacts__text">
              Disponible pour des missions à distance ou en présentiel
            </p>
            <span className="alternative-contacts__location">
              Rabat, Maroc & International
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeContacts;