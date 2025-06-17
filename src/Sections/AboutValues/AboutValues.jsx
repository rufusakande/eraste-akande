// AboutValues.jsx
import React, { useEffect, useRef } from 'react';
import { Code, Database, Shield, BookOpen } from 'lucide-react';
import './AboutValues.css';

const AboutValues = () => {
  const valuesRef = useRef(null);
  const valueItemsRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }
    
    valueItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });
    
    return () => {
      if (valuesRef.current) {
        observer.unobserve(valuesRef.current);
      }
      
      valueItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);
  
  // Reset refs array when component re-renders
  valueItemsRef.current = [];
  
  // Add to refs array
  const addToRefs = (el) => {
    if (el && !valueItemsRef.current.includes(el)) {
      valueItemsRef.current.push(el);
    }
  };

  return (
    <section id="aboutValues" ref={valuesRef} className="about-values">
      <div className="about-values__container">
        <h2 className="about-values__title">My professional values</h2>
        <p className="about-values__subtitle">
          The principles that guide my approach as a consultant and trainer
        </p>
        
        <div className="about-values__grid">
          <div 
            ref={addToRefs}
            className="about-values__card"
          >
            <div className="about-values__card-icon">
              <Code size={32} />
            </div>
            <h3 className="about-values__card-title">Technical excellence</h3>
            <p className="about-values__card-text">
              I commit to maintaining cutting-edge expertise in Elasticsearch technologies 
              and providing optimal solutions based on best practices.
            </p>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-values__card"
          >
            <div className="about-values__card-icon">
              <Database size={32} />
            </div>
            <h3 className="about-values__card-title">Tailored solutions</h3>
            <p className="about-values__card-text">
              Every company is unique. I develop personalized approaches 
              that precisely meet your specific data needs.
            </p>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-values__card"
          >
            <div className="about-values__card-icon">
              <Shield size={32} />
            </div>
            <h3 className="about-values__card-title">Security first</h3>
            <p className="about-values__card-text">
              Data protection is non-negotiable. I implement robust solutions 
              that guarantee the security and compliance of your infrastructures.
            </p>
          </div>
          
          <div 
            ref={addToRefs}
            className="about-values__card"
          >
            <div className="about-values__card-icon">
              <BookOpen size={32} />
            </div>
            <h3 className="about-values__card-title">Knowledge transfer</h3>
            <p className="about-values__card-text">
              I firmly believe in knowledge sharing. My mission is to make you 
              autonomous in managing your Elasticsearch solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;