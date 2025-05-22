import React, { useEffect, useRef } from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
  const bannerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );
    
    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }
    
    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <section id="contactBanner" className="contact-banner" ref={bannerRef} aria-labelledby="contact-heading">
      <div className="contact-banner__container">
        <h1 id="contact-heading" className="contact-banner__title">Discutons de votre projet</h1>
        <p className="contact-banner__subtitle">
          Besoin d'un expert Elasticsearch pour votre équipe ou d'une formation personnalisée ?
          Je suis à votre écoute.
        </p>
        <div className="contact-banner__decoration"></div>
      </div>
    </section>
  );
};

export default ContactBanner;