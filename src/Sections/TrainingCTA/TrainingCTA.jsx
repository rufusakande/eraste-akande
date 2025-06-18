// TrainingCTA.jsx
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './TrainingCTA.css';
import { Link } from 'react-router-dom';

const TrainingCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="training-cta" className="training-cta" ref={sectionRef}>
      <div className="training-cta__container">
        <h2 className="training-cta__title">Ready to develop your skills?</h2>
        <p className="training-cta__description">
          Whether you're a professional looking to improve your skills or a company 
          seeking to train your team, I have the solution adapted to your needs.
        </p>
        
        <div className="training-cta__buttons">
          <Link 
            to="#training-list"
            rel="noopener noreferrer"
            className="training-cta__button training-cta__button--primary"
          >
            My Training
            <ArrowRight className="training-cta__button-icon" aria-hidden="true" />
          </Link>
          
          <Link 
            to="contact" 
            className="training-cta__button training-cta__button--secondary"
          >
            Contact me
            <ArrowRight className="training-cta__button-icon" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingCTA;