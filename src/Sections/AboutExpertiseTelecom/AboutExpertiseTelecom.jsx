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
          <span className="accent-text">Solid telecom expertise</span> at the service of your data
        </h2> */}
        
        <div className="expertise-content">
          {/* <div className="intro-text">
            <p>
              As a <strong>telecommunications engineer</strong>, with specialization in 
              <strong> Quality of Service (QoS) for mobile networks</strong>, I bring a 
              <strong> deep understanding of technical data</strong> in telecom-related projects.
            </p>
          </div>
          
          <div className="credentials-grid">
            <div className="credential-card">
              <div className="icon-wrapper">
                <Award className="credential-icon" size={32} />
              </div>
              <div className="credential-content">
                <h3>ITU Academy Certification</h3>
                <p>Certified in telecommunications network quality of service.</p>
              </div>
            </div>
            
            <div className="credential-card">
              <div className="icon-wrapper">
                <Network className="credential-icon" size={32} />
              </div>
              <div className="credential-content">
                <h3>Mobile Network Architecture</h3>
                <p>Strong mastery of 2G/3G/4G mobile network architecture, KPIs, and their operational monitoring.</p>
              </div>
            </div>
            
            <div className="credential-card">
              <div className="icon-wrapper">
                <FileText className="credential-icon" size={32} />
              </div>
              <div className="credential-content">
                <h3>Author of 4G QoS Project</h3>
                <p>Detailed project on 4G QoS monitoring, including network architecture and QoS indicators.</p>
                <a 
                  href="https://www.researchgate.net/publication/376679223_VDR_and_PDIA3_Are_Essential_for_Activation_of_Calcium_Signaling_and_Membrane_Response_to_125OH2D3_in_Squamous_Cell_Carcinoma_Cells" 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read the research document on ResearchGate"
                >
                  Read the document
                </a>
              </div>
            </div>
          </div> */}
          
          <div className="expertise-conclusion">
            <div className="conclusion-icon">
              <Radio size={40} />
            </div>
            <p>
              With this dual expertise in <strong>data & telecommunications</strong>, I offer 
              precise technical solutions, aligned with both <strong>business needs</strong> and 
              <strong>infrastructure requirements</strong>.
            </p>
          </div>
          
          <div className="expertise-badges">
            <div className="badge">
              <CheckCircle size={20} />
              <span>Network architecture</span>
            </div>
            <div className="badge">
              <CheckCircle size={20} />
              <span>Telecom QoS</span>
            </div>
            <div className="badge">
              <CheckCircle size={20} />
              <span>Technical KPIs</span>
            </div>
            <div className="badge">
              <CheckCircle size={20} />
              <span>Data analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutExpertiseTelecom;