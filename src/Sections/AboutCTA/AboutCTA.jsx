// AboutCTA.jsx
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './AboutCTA.css';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  const ctaRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ctaRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section id="aboutCTA" ref={ctaRef} className="about-cta">
      <div className="about-cta__container">
        <h2 className="about-cta__title">Ready to optimize your data infrastructure?</h2>
        <p className="about-cta__subtitle">
          Let's discuss your Elasticsearch and data management needs
        </p>
        <div className="about-cta__buttons">
          <Link to="/contact" className="about-cta__button about-cta__button--primary">
            <span>Let's talk</span>
            <ArrowRight size={18} />
          </Link>
          <Link to="/skills" className="about-cta__button about-cta__button--secondary">
            View my expertise
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;