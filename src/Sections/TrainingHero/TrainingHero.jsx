// TrainingHero.jsx
import React, { useEffect, useRef } from 'react';
import { Award, Users, BookOpen } from 'lucide-react';
import './TrainingHero.css';
import { Link } from 'react-router-dom';

const TrainingHero = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const stats = statsRef.current;
    
    if (hero) {
      hero.classList.add('animate');
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    if (stats) {
      observer.observe(stats);
    }
    
    return () => {
      if (stats) observer.unobserve(stats);
    };
  }, []);

  return (
    <section id="training-hero" className="training-hero">
      <div className="training-hero__container" ref={heroRef}>
        <h1 className="training-hero__title">Train with a Certified Expert</h1>
        <p className="training-hero__subtitle">
          Develop your skills in Elasticsearch, data engineering, and telecommunications with training 
          designed by a certified engineer and Elastic Gold Contributor.
        </p>
        <div className="training-hero__cta-container">
          <Link to="#training-list" className="training-hero__cta training-hero__cta--primary">
            Discover my training 
          </Link>
          <Link to="#" className="training-hero__cta training-hero__cta--secondary">
            Corporate training
          </Link>
        </div>
      </div>
      
      <div className="training-hero__stats" ref={statsRef}>
        <div className="training-hero__stat-item">
          <Award className="training-hero__stat-icon" aria-hidden="true" />
          <span className="training-hero__stat-number">100+</span>
          <p className="training-hero__stat-text">Professionals trained</p>
        </div>
        <div className="training-hero__stat-item">
          <Users className="training-hero__stat-icon" aria-hidden="true" />
          <span className="training-hero__stat-number">4.5+</span>
          <p className="training-hero__stat-text">Average Udemy rating</p>
        </div>
        <div className="training-hero__stat-item">
          <BookOpen className="training-hero__stat-icon" aria-hidden="true" />
          <span className="training-hero__stat-number">8h+</span>
          <p className="training-hero__stat-text">Exclusive content</p>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;