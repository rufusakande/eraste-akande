// AboutValues.jsx
import React, { useEffect, useRef } from 'react';
import { Code, Database, Shield, BookOpen } from 'lucide-react';
import './AboutValues.css';

const AboutValues = () => {
  const valuesRef = useRef(null);
  const valueItemsRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }
    
    valueItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });
    
    return () => {
      if (valuesRef.current) {
        observer.unobserve(valuesRef.current);
      }
      
      valueItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);
  
  // Reset refs array when component re-renders
  valueItemsRef.current = [];
  
  // Add to refs array
  const addToRefs = (el) => {
    if (el && !valueItemsRef.current.includes(el)) {
      valueItemsRef.current.push(el);
    }
  };

  return (
    <section id="aboutValues" ref={valuesRef} className="about-values">
      <div className="about-values__container">
        <h2 className="about-values__title">Mes valeurs professionnelles</h2>
        <p className="about-values__subtitle">
          Les principes qui guident mon approche en tant que consultant et formateur
        </p>
        
        <div className="about-values__grid">
          <div 
            ref={addToRefs}
            className="about-values__card"
          >
            <div className="about-values__card-icon">
              <Code size={32} />
            </div>
            <h3 className="about-values__card-title">Excellence technique</h3>
            <p className="about-values__card-text">
              Je m'engage à maintenir une expertise de pointe sur les technologies Elasticsearch 
              et à fournir des solutions optimales basées sur les meilleures pratiques.
            </p>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-values__card"
          >
            <div className="about-values__card-icon">
              <Database size={32} />
            </div>
            <h3 className="about-values__card-title">Solutions adaptées</h3>
            <p className="about-values__card-text">
              Chaque entreprise est unique. Je développe des approches personnalisées 
              qui répondent précisément à vos besoins spécifiques en matière de données.
            </p>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-values__card"
          >
            <div className="about-values__card-icon">
              <Shield size={32} />
            </div>
            <h3 className="about-values__card-title">Sécurité avant tout</h3>
            <p className="about-values__card-text">
              La protection des données est non-négociable. J'implémente des solutions 
              robustes qui garantissent la sécurité et la conformité de vos infrastructures.
            </p>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-values__card"
          >
            <div className="about-values__card-icon">
              <BookOpen size={32} />
            </div>
            <h3 className="about-values__card-title">Transmission du savoir</h3>
            <p className="about-values__card-text">
              Je crois fermement au partage des connaissances. Ma mission est de vous rendre 
              autonome dans la gestion de vos solutions Elasticsearch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;