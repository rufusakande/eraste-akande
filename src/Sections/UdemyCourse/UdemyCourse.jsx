// UdemyCourse.jsx
import React, { useEffect, useRef } from 'react';
import { Star, Clock, Languages, GraduationCap } from 'lucide-react';
import './UdemyCourse.css';
import ElasticsearchImg from '../../assets/Images/Elasticsearch.webp'

const UdemyCourse = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const elements = [sectionRef.current, imageRef.current, contentRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="udemy-course" className="udemy-course" ref={sectionRef}>
      <div className="udemy-course__container">
        <div className="udemy-course__image-container" ref={imageRef}>
          <img 
            src={ElasticsearchImg}
            alt="Aperçu du cours Maîtriser Elasticsearch sur Udemy" 
            className="udemy-course__image"
            loading="lazy"
          />
          <div className="udemy-course__badge">
            <Star className="udemy-course__badge-icon" aria-hidden="true" />
            <span className="udemy-course__badge-text">4.5+ étoiles</span>
          </div>
        </div>
        
        <div className="udemy-course__content" ref={contentRef}>
          <h2 className="udemy-course__title">Maîtriser Elasticsearch: De l'Initiation à la Certification</h2>
          <p className="udemy-course__description">
            Découvrez ma formation complète disponible en français et en anglais sur Udemy. Plus de 8h de contenu 
            exclusif pour maîtriser le déploiement, l'optimisation et l'administration d'un cluster Elasticsearch.
          </p>
          
          <div className="udemy-course__features">
            <div className="udemy-course__feature">
              <Clock className="udemy-course__feature-icon" aria-hidden="true" />
              <span className="udemy-course__feature-text">Accès à vie & mises à jour gratuites</span>
            </div>
            <div className="udemy-course__feature">
              <Languages className="udemy-course__feature-icon" aria-hidden="true" />
              <span className="udemy-course__feature-text">Disponible en français et anglais</span>
            </div>
            <div className="udemy-course__feature">
              <GraduationCap className="udemy-course__feature-icon" aria-hidden="true" />
              <span className="udemy-course__feature-text">Certificat de fin de formation</span>
            </div>
          </div>
          
          <div className="udemy-course__cta-container">
            <a 
              href="https://www.udemy.com/course/maitriser-elasticsearch/?couponCode=ST7MT290425G1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="udemy-course__cta"
              aria-label="Accéder à la formation sur Udemy"
            >
              Accéder à la formation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UdemyCourse;