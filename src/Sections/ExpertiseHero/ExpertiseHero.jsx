import { useEffect, useRef } from 'react';
import { Code, Shield, Database } from 'lucide-react';
import './ExpertiseHero.css';

const ExpertiseHero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
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
    <section 
      ref={heroRef}
      id="expertise-hero" 
      className="expertise-hero"
      aria-labelledby="expertise-heading"
    >
      <div className="expertise-hero__content">
        <h1 id="expertise-heading" className="expertise-hero__title">
          Expertises Techniques
        </h1>
        <p className="expertise-hero__subtitle">
          Des solutions data performantes, sécurisées et adaptées à vos besoins
        </p>
        
        <div className="expertise-hero__icons">
          <div className="expertise-hero__icon-container">
            <Database size={48} className="expertise-hero__icon" aria-hidden="true" />
            <span className="expertise-hero__icon-label">Gestion de données</span>
          </div>
          <div className="expertise-hero__icon-container">
            <Code size={48} className="expertise-hero__icon" aria-hidden="true" />
            <span className="expertise-hero__icon-label">Développement</span>
          </div>
          <div className="expertise-hero__icon-container">
            <Shield size={48} className="expertise-hero__icon" aria-hidden="true" />
            <span className="expertise-hero__icon-label">Sécurisation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseHero;