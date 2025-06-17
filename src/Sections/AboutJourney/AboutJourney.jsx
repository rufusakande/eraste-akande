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
        <h2 className="about-journey__title">A recognized journey</h2>
        
        <div className="about-journey__timeline">
          <div 
            ref={addToRefs}
            className="about-journey__timeline-item"
          >
            <div className="about-journey__timeline-icon">
              <GraduationCap size={24} />
            </div>
            <div className="about-journey__timeline-content">
              <h3 className="about-journey__timeline-title">INPT – Telecommunications Engineering Degree</h3>
              <p className="about-journey__timeline-date">Excellence in Education</p>
              <p className="about-journey__timeline-description">
                Telecommunications engineering education at the National Institute of Posts and Telecommunications, 
                an elite institution in Morocco.
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
                Experience as Business Analyst at Netopia, developing expertise 
                in data analysis and business processes.
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
              <p className="about-journey__timeline-date">2021 - Present</p>
              <p className="about-journey__timeline-description">
                Telecommunications data engineer at Synaptique, specialized in designing 
                and implementing data processing solutions for the telecommunications sector.
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
              <h3 className="about-journey__timeline-title">Certification in Telecom Quality of Service Regulation</h3>
              <p className="about-journey__timeline-date">2021 - ITU Academy</p>
              <p className="about-journey__timeline-description">
                Obtained specialized certification in quality of service regulation 
                in the telecommunications sector, delivered by the International Telecommunication Union Academy.
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
                Obtained Elastic Engineer certification, validating deep technical expertise 
                in deploying and managing Elasticsearch solutions.
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
              <h3 className="about-journey__timeline-title">Elasticsearch & Opensearch Consultant</h3>
              <p className="about-journey__timeline-date">2024 - Present</p>
              <p className="about-journey__timeline-description">
                Providing specialized consulting services in Elasticsearch and Opensearch, 
                helping companies implement and optimize search and data analysis solutions.
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
                Designated Gold Contributor by Elastic for Europe, Africa, and Asia, 
                in recognition of my active contribution to the community and technical expertise.
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
              <h3 className="about-journey__timeline-title">ELK Trainer</h3>
              <p className="about-journey__timeline-date">2025 - Present</p>
              <p className="about-journey__timeline-description">
                Knowledge transmission and expertise sharing as a specialized trainer 
                in the ELK stack (Elasticsearch, Logstash, Kibana), training the next generation 
                of data professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;