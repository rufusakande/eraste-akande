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
        <h1 id="contact-heading" className="contact-banner__title">Let's discuss your project</h1>
        <p className="contact-banner__subtitle">
          Need an Elasticsearch expert for your team or personalized training?
          I'm here to listen.
        </p>
        <div className="contact-banner__decoration"></div>
      </div>
    </section>
  );
};

export default ContactBanner;