// AboutJourney.jsx
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Medal, Building, Briefcase, FileText, BookOpen } from 'lucide-react';
import './AboutJourney.css';

const AboutJourney = () => {
  const journeyRef = useRef(null);
  const timelineItemsRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (journeyRef.current) {
      observer.observe(journeyRef.current);
    }
    
    timelineItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });
    
    return () => {
      if (journeyRef.current) {
        observer.unobserve(journeyRef.current);
      }
      
      timelineItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);
  
  // Reset refs array when component re-renders
  timelineItemsRef.current = [];
  
  // Add to refs array
  const addToRefs = (el) => {
    if (el && !timelineItemsRef.current.includes(el)) {
      timelineItemsRef.current.push(el);
    }
  };

  return (
    <section id="aboutJourney" ref={journeyRef} className="about-journey">
      <div className="about-journey__container">
        <h2 className="about-journey__title">Un parcours reconnu</h2>
        
        <div className="about-journey__timeline">
          <div 
            ref={addToRefs}
            className="about-journey__timeline-item"
          >
            <div className="about-journey__timeline-icon">
              <GraduationCap size={24} />
            </div>
            <div className="about-journey__timeline-content">
              <h3 className="about-journey__timeline-title">INPT – Diplôme d'ingénieur télécom</h3>
              <p className="about-journey__timeline-date">Formation d'excellence</p>
              <p className="about-journey__timeline-description">
                Formation d'ingénieur en télécommunications à l'Institut National des Postes et Télécommunications, 
                établissement d'élite au Maroc.
              </p>
            </div>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-journey__timeline-item"
          >
            <div className="about-journey__timeline-icon">
              <Building size={24} />
            </div>
            <div className="about-journey__timeline-content">
              <h3 className="about-journey__timeline-title">Netopia – Business Analyst</h3>
              <p className="about-journey__timeline-date">2020 - 2021</p>
              <p className="about-journey__timeline-description">
                Expérience en tant que Business Analyst chez Netopia, développant une expertise 
                dans l'analyse de données et les processus d'affaires.
              </p>
            </div>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-journey__timeline-item"
          >
            <div className="about-journey__timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="about-journey__timeline-content">
              <h3 className="about-journey__timeline-title">Synaptique – Telecom Data Engineer</h3>
              <p className="about-journey__timeline-date">2021 - Aujourd'hui</p>
              <p className="about-journey__timeline-description">
                Ingénieur de données télécom chez Synaptique, spécialisé dans la conception 
                et l'implémentation de solutions de traitement de données pour le secteur des télécommunications.
              </p>
            </div>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-journey__timeline-item"
          >
            <div className="about-journey__timeline-icon">
              <FileText size={24} />
            </div>
            <div className="about-journey__timeline-content">
              <h3 className="about-journey__timeline-title">Certification en régulation de la qualité de service Telecom</h3>
              <p className="about-journey__timeline-date">2021 - Académie UIT</p>
              <p className="about-journey__timeline-description">
                Obtention d'une certification spécialisée en régulation de la qualité de service 
                dans le secteur des télécommunications, délivrée par l'Académie de l'Union Internationale des Télécommunications.
              </p>
            </div>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-journey__timeline-item"
          >
            <div className="about-journey__timeline-icon">
              <Award size={24} />
            </div>
            <div className="about-journey__timeline-content">
              <h3 className="about-journey__timeline-title">Elastic Engineer Certified</h3>
              <p className="about-journey__timeline-date">2022</p>
              <p className="about-journey__timeline-description">
                Obtention de la certification Elastic Engineer, validant une expertise technique approfondie 
                dans le déploiement et la gestion des solutions Elasticsearch.
              </p>
            </div>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-journey__timeline-item"
          >
            <div className="about-journey__timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="about-journey__timeline-content">
              <h3 className="about-journey__timeline-title">Consultant Elasticsearch & Opensearch</h3>
              <p className="about-journey__timeline-date">2024 - Aujourd'hui</p>
              <p className="about-journey__timeline-description">
                Prestation de services de consultation spécialisés en Elasticsearch et Opensearch, 
                accompagnant les entreprises dans l'implémentation et l'optimisation de solutions 
                de recherche et d'analyse de données.
              </p>
            </div>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-journey__timeline-item"
          >
            <div className="about-journey__timeline-icon">
              <Medal size={24} />
            </div>
            <div className="about-journey__timeline-content">
              <h3 className="about-journey__timeline-title">Elastic Gold Contributor</h3>
              <p className="about-journey__timeline-date">2025</p>
              <p className="about-journey__timeline-description">
                Désigné Gold Contributor par Elastic pour l'Europe, l'Afrique et l'Asie, 
                en reconnaissance de ma contribution active à la communauté et mon expertise technique.
              </p>
            </div>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-journey__timeline-item"
          >
            <div className="about-journey__timeline-icon">
              <BookOpen size={24} />
            </div>
            <div className="about-journey__timeline-content">
              <h3 className="about-journey__timeline-title">Formateur ELK</h3>
              <p className="about-journey__timeline-date">2025 - Aujourd'hui</p>
              <p className="about-journey__timeline-description">
                Transmission de connaissances et partage d'expertise en tant que formateur spécialisé 
                dans la stack ELK (Elasticsearch, Logstash, Kibana), formant la prochaine génération 
                de professionnels des données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;