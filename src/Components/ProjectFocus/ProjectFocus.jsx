// src/components/portfolio/ProjectFocus.jsx
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, BarChart2, Shield } from 'lucide-react';
import './ProjectFocus.css';

const ProjectFocus = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Featured project data - in a real app, this could come from props or context
  const featuredProject = {
    title: "Optimisation Elasticsearch pour système bancaire international",
    client: "Groupe bancaire multinational",
    description: "Refonte complète de l'architecture Elasticsearch supportant les opérations transactionnelles et analytiques de l'une des plus grandes banques européennes. Ce projet a permis d'améliorer significativement les performances tout en renforçant la sécurité et la conformité aux normes financières.",
    results: [
      {
        icon: <BarChart2 />,
        title: "Performance",
        value: "85%",
        text: "d'amélioration des temps de réponse"
      },
      {
        icon: <Shield />,
        title: "Sécurité",
        value: "100%",
        text: "conformité RGPD et PCI DSS"
      },
      {
        icon: <Award />,
        title: "Impact",
        value: "12M€",
        text: "économies annuelles estimées"
      }
    ],
    testimonial: {
      quote: "La solution développée par Iyanou a transformé notre manière d'exploiter nos données. Les performances sont exceptionnelles et notre équipe est maintenant autonome.",
      author: "Directeur du département Data Analytics",
      company: "Groupe bancaire multinational"
    },
    caseStudyUrl: "/case-study/banking-elasticsearch"
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section 
      id="project-focus" 
      ref={sectionRef} 
      className={isVisible ? 'visible' : ''}
      aria-labelledby="featured-project-heading"
    >
      <div className="project-focus__container">
        <div className="project-focus__header">
          <h2 id="featured-project-heading" className="project-focus__heading">Projet en vedette</h2>
          <div className="project-focus__subheading">Étude de cas</div>
        </div>

        <div className="project-focus__content">
          <div className="project-focus__image-container">
            <div className="project-focus__image">
              <div className="project-focus__image-overlay"></div>
              <div className="project-focus__elastic-logo"></div>
            </div>
          </div>

          <div className="project-focus__details">
            <h3 className="project-focus__title">{featuredProject.title}</h3>
            <div className="project-focus__client">Pour: {featuredProject.client}</div>
            <p className="project-focus__description">{featuredProject.description}</p>
            
            <div className="project-focus__results">
              {featuredProject.results.map((result, index) => (
                <div key={index} className="project-focus__result">
                  <div className="project-focus__result-icon">{result.icon}</div>
                  <div className="project-focus__result-content">
                    <div className="project-focus__result-title">{result.title}</div>
                    <div className="project-focus__result-value">{result.value}</div>
                    <div className="project-focus__result-text">{result.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="project-focus__testimonial">
              <blockquote className="project-focus__quote">
                {featuredProject.testimonial.quote}
                <footer className="project-focus__quote-author">
                  <strong>{featuredProject.testimonial.author}</strong>, {featuredProject.testimonial.company}
                </footer>
              </blockquote>
            </div>

            <div className="project-focus__cta">
              <a href={featuredProject.caseStudyUrl} className="project-focus__button">
                Voir l'étude de cas complète <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFocus;