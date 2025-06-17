// AboutBio.jsx
import React, { useEffect, useRef } from 'react';
import { Briefcase, Award, Radio } from 'lucide-react';
import './AboutBio.css';

const AboutBio = () => {
  const bioRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bioRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (bioRef.current) {
      observer.observe(bioRef.current);
    }
    
    return () => {
      if (bioRef.current) {
        observer.unobserve(bioRef.current);
      }
    };
  }, []);

  return (
    <section id="aboutBio" ref={bioRef} className="about-bio">
      <div className="about-bio__container">
        <h2 className="about-bio__title">From INPT to the data elite</h2>
        
        <div className="about-bio__content">
          <div className="about-bio__text">
            <p className="about-bio__paragraph">
              Graduate of INPT Morocco, I put my skills at the service of companies to transform 
              their data into decision levers. My telecommunications engineering background naturally 
              led me to data engineering and advanced monitoring technologies.
            </p>
            <p className="about-bio__paragraph">
              My passion for distributed systems and information retrieval led me to specialize 
              in the Elasticsearch ecosystem, where I obtained the highest certifications and recognition 
              as a Gold contributor.
            </p>
          </div>
          
          <div className="about-bio__stats">
            <div className="about-bio__stat-item">
              <div className="about-bio__stat-icon">
                <Briefcase size={32} />
              </div>
              <div className="about-bio__stat-content">
                <h3 className="about-bio__stat-title">Expertise</h3>
                <p className="about-bio__stat-text">Certified Elasticsearch Consultant</p>
              </div>
            </div>
            
            <div className="about-bio__stat-item">
              <div className="about-bio__stat-icon">
                <Award size={32} />
              </div>
              <div className="about-bio__stat-content">
                <h3 className="about-bio__stat-title">Recognition</h3>
                <p className="about-bio__stat-text">Elastic Gold Contributor</p>
              </div>
            </div>
            
            <div className="about-bio__stat-item">
              <div className="about-bio__stat-icon">
                <Radio size={32} />
              </div>
              <div className="about-bio__stat-content">
                <h3 className="about-bio__stat-title">Training</h3>
                <p className="about-bio__stat-text">Udemy Trainer 4.5+ stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBio;