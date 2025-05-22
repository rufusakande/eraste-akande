// Formation.jsx
import React, { useEffect, useRef } from 'react';
import { Video, Clock, Award, MessageCircle } from 'lucide-react';
import './Formation.css';

const Formation = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef([]);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    featuresRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
      featuresRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  // Réinitialiser les références lors des re-rendus
  featuresRef.current = [];

  // Fonction pour ajouter des références aux éléments
  const addToRefs = (el) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
    }
  };

  const features = [
    {
      icon: <Clock />,
      title: "Accès à vie",
      description: "Profitez du contenu et des mises à jour sans limite dans le temps"
    },
    {
      icon: <Video />,
      title: "Exercices pratiques",
      description: "Consolidez vos connaissances avec des cas pratiques réels"
    },
    {
      icon: <Award />,
      title: "Certificat",
      description: "Obtenez un certificat de réussite à la fin de la formation"
    },
    {
      icon: <MessageCircle />,
      title: "Support direct",
      description: "Posez vos questions et recevez une réponse d'expert"
    }
  ];

  return (
    <section id="formation" ref={sectionRef} className="formation-section">
      <div className="formation-container">
        <div className="formation-header">
          <h2 className="formation-title">Formez-vous avec un expert certifié</h2>
          <div className="formation-title-underline"></div>
        </div>

        <div className="formation-content" ref={contentRef}>
          <div className="formation-image-container">
            <div className="formation-image-wrapper">
              <div className="formation-image-placeholder" aria-label="Image de la formation Elasticsearch">
                <span className="formation-image-text">Maîtriser Elasticsearch</span>
              </div>
              <div className="formation-image-badge">Français & Anglais</div>
            </div>
          </div>

          <div className="formation-details">
            <h3 className="formation-details-title">Maîtriser Elasticsearch : De l'Initiation à la Certification</h3>
            <p className="formation-details-description">
              Découvrez ma formation complète disponible sur Udemy. Plus de 8h de contenu exclusif pour maîtriser le déploiement, 
              l'optimisation et l'administration d'un cluster Elasticsearch.
            </p>

            <div className="formation-features">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="formation-feature"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="formation-feature-icon">
                    {React.cloneElement(feature.icon, { size: 24, color: '#007BFF' })}
                  </div>
                  <div className="formation-feature-content">
                    <h4 className="formation-feature-title">{feature.title}</h4>
                    <p className="formation-feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://www.udemy.com/course/maitriser-elasticsearch/?couponCode=ST7MT290425G1" className="formation-cta" aria-label="Accéder à la formation sur Udemy">
              <span>Accéder à la formation</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="formation-cta-icon">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;