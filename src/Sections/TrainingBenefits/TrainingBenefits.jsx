// TrainingBenefits.jsx
import React, { useEffect, useRef } from 'react';
import { CheckCircle, LifeBuoy, Upload, Video } from 'lucide-react';
import './TrainingBenefits.css';

const TrainingBenefits = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Add to refs
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const benefits = [
    {
      icon: <CheckCircle className="training-benefits__card-icon" aria-hidden="true" />,
      title: "Quiz et exercices pratiques",
      description: "Consolidez vos acquis avec des exercices pratiques et des quiz interactifs tout au long de la formation."
    },
    {
      icon: <LifeBuoy className="training-benefits__card-icon" aria-hidden="true" />,
      title: "Support direct",
      description: "Bénéficiez d'un support direct via le système de Q/R Udemy pour résoudre vos questions."
    },
    {
      icon: <Upload className="training-benefits__card-icon" aria-hidden="true" />,
      title: "Mises à jour régulières",
      description: "Le contenu est régulièrement mis à jour pour rester en phase avec les dernières évolutions d'Elasticsearch."
    },
    {
      icon: <Video className="training-benefits__card-icon" aria-hidden="true" />,
      title: "Vidéos HD détaillées",
      description: "Des démonstrations claires et des explications détaillées pour assimiler rapidement les concepts."
    }
  ];

  return (
    <section id="training-benefits" className="training-benefits" ref={sectionRef}>
      <div className="training-benefits__container">
        <h2 className="training-benefits__title">Les avantages de mes formations</h2>
        <p className="training-benefits__subtitle">
          Que vous choisissiez ma formation Udemy ou une formation en entreprise, voici ce qui fait la différence
        </p>
        
        <div className="training-benefits__cards">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="training-benefits__card"
              ref={addToRefs}
            >
              <div className="training-benefits__card-icon-container">
                {benefit.icon}
              </div>
              <h3 className="training-benefits__card-title">{benefit.title}</h3>
              <p className="training-benefits__card-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingBenefits;