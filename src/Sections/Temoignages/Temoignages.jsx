// Temoignages.jsx
import React, { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import './Temoignages.css';

const Temoignages = () => {
  const sectionRef = useRef(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="temoignages" ref={sectionRef} className="temoignages-section">
      <div className="temoignages-container">
        <div className="temoignages-title-container">
          <h2 className="temoignages-title">Impact & Confiance</h2>
          <div className="temoignages-underline"></div>
        </div>
        
        <div className="temoignages-content">
          <div className="temoignages-icon">
            <Award size={48} color="#E4B31A" />
          </div>
          <p className="temoignages-quote">
            "Déjà plus de <span className="temoignages-highlight">100 professionnels</span> formés à Elasticsearch en ligne et en entreprise."
          </p>
        </div>
        
        <div className="temoignages-future-indicator">
          <p>Témoignages clients à venir</p>
        </div>
      </div>
    </section>
  );
};

export default Temoignages;