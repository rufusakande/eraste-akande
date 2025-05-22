// TrainingHero.jsx
import React, { useEffect, useRef } from 'react';
import { Award, Users, BookOpen } from 'lucide-react';
import './TrainingHero.css';

const TrainingHero = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const stats = statsRef.current;
    
    if (hero) {
      hero.classList.add('animate');
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    if (stats) {
      observer.observe(stats);
    }
    
    return () => {
      if (stats) observer.unobserve(stats);
    };
  }, []);

  return (
    <section id="training-hero" className="training-hero">
      <div className="training-hero__container" ref={heroRef}>
        <h1 className="training-hero__title">Formez-vous avec un Expert Certifié</h1>
        <p className="training-hero__subtitle">
          Développez vos compétences en Elasticsearch, data engineering et télécoms avec des formations 
          conçues par un ingénieur certifié et Elastic Gold Contributor.
        </p>
        <div className="training-hero__cta-container">
          <a href="#training-list" className="training-hero__cta training-hero__cta--primary">
            Découvrir mes formations 
          </a>
          <a href="#" className="training-hero__cta training-hero__cta--secondary">
            Formation en entreprise
          </a>
        </div>
      </div>
      
      <div className="training-hero__stats" ref={statsRef}>
        <div className="training-hero__stat-item">
          <Award className="training-hero__stat-icon" aria-hidden="true" />
          <span className="training-hero__stat-number">100+</span>
          <p className="training-hero__stat-text">Professionnels formés</p>
        </div>
        <div className="training-hero__stat-item">
          <Users className="training-hero__stat-icon" aria-hidden="true" />
          <span className="training-hero__stat-number">4.5+</span>
          <p className="training-hero__stat-text">Note moyenne Udemy</p>
        </div>
        <div className="training-hero__stat-item">
          <BookOpen className="training-hero__stat-icon" aria-hidden="true" />
          <span className="training-hero__stat-number">8h+</span>
          <p className="training-hero__stat-text">De contenu exclusif</p>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;