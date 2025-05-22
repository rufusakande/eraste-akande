import { useState, useEffect, useRef } from 'react';
import { Award, Network, FileText, Radio, CheckCircle } from 'lucide-react';
import './AboutExpertiseTelecom.css';

function AboutExpertiseTelecom() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
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
    <section 
      id="about-expertise-telecom" 
      ref={sectionRef} 
      className={`about-expertise-section ${isVisible ? 'visible' : ''}`}
      aria-labelledby="expertise-telecom-title"
    >
      <div className="container">
        {/* <h2 id="expertise-telecom-title" className="section-title">
          <span className="accent-text">Une expertise télécom</span> solide au service de vos données
        </h2> */}
        
        <div className="expertise-content">
          {/* <div className="intro-text">
            <p>
              En tant qu'<strong>ingénieur télécom</strong>, avec une spécialisation en 
              <strong> qualité de service (QoS) des réseaux mobiles</strong>, j'apporte une 
              <strong> compréhension fine de la donnée technique</strong> dans les projets liés aux télécoms.
            </p>
          </div>
          
          <div className="credentials-grid">
            <div className="credential-card">
              <div className="icon-wrapper">
                <Award className="credential-icon" size={32} />
              </div>
              <div className="credential-content">
                <h3>Certification UIT Academy</h3>
                <p>Certifié sur la qualité de service des réseaux télécoms.</p>
              </div>
            </div>
            
            <div className="credential-card">
              <div className="icon-wrapper">
                <Network className="credential-icon" size={32} />
              </div>
              <div className="credential-content">
                <h3>Architecture Réseaux Mobiles</h3>
                <p>Solide maîtrise de l'architecture des réseaux mobiles 2G/3G/4G, des KPI et de leur suivi opérationnel.</p>
              </div>
            </div>
            
            <div className="credential-card">
              <div className="icon-wrapper">
                <FileText className="credential-icon" size={32} />
              </div>
              <div className="credential-content">
                <h3>Auteur Projet QoS 4G</h3>
                <p>Projet détaillé sur le monitoring de la QoS 4G, incluant l'architecture des réseaux et les indicateurs QoS.</p>
                <a 
                  href="https://www.researchgate.net/publication/376679223_VDR_and_PDIA3_Are_Essential_for_Activation_of_Calcium_Signaling_and_Membrane_Response_to_125OH2D3_in_Squamous_Cell_Carcinoma_Cells" 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lire le document de recherche sur ResearchGate"
                >
                  Lire le document
                </a>
              </div>
            </div>
          </div> */}
          
          <div className="expertise-conclusion">
            <div className="conclusion-icon">
              <Radio size={40} />
            </div>
            <p>
              Avec cette double compétence <strong>données & télécoms</strong>, je propose des 
              solutions techniques précises, alignées à la fois sur les <strong>besoins métiers</strong> et 
              les <strong>exigences d'infrastructure</strong>.
            </p>
          </div>
          
          <div className="expertise-badges">
            <div className="badge">
              <CheckCircle size={20} />
              <span>Architecture réseaux</span>
            </div>
            <div className="badge">
              <CheckCircle size={20} />
              <span>QoS Télécom</span>
            </div>
            <div className="badge">
              <CheckCircle size={20} />
              <span>KPI Techniques</span>
            </div>
            <div className="badge">
              <CheckCircle size={20} />
              <span>Analyse des données</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutExpertiseTelecom;