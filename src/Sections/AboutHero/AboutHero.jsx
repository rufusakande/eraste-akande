// AboutHero.jsx
import React, { useEffect, useRef } from 'react';
import './AboutHero.css';
import erasteAkande from '../../assets/Images/erasteAkande.webp'

const AboutHero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="aboutHero" ref={heroRef} className="about-hero">
      <div className="about-hero__container">
        <div className="about-hero__content">
          <h1 className="about-hero__title">Mon parcours d'expert en données</h1>
          <p className="about-hero__subtitle">
            De l'ingénierie télécom à l'expertise Elasticsearch, découvrez mon parcours professionnel
          </p>
        </div>
        <div className="about-hero__image-container">
          <div className="about-hero__image-wrapper">
            <img 
              src={erasteAkande}
              alt="Iyanou Eraste AKANDE - Expert Elasticsearch" 
              className="about-hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;