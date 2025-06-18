// UdemyCourse.jsx
import React, { useEffect, useRef } from 'react';
import { Star, Clock, Languages, GraduationCap } from 'lucide-react';
import './UdemyCourse.css';
import ElasticsearchImg from '../../assets/Images/Elasticsearch.webp'
import { Link } from 'react-router-dom';

const UdemyCourse = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const elements = [sectionRef.current, imageRef.current, contentRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="udemy-course" className="udemy-course" ref={sectionRef}>
      <div className="udemy-course__container">
        <div className="udemy-course__image-container" ref={imageRef}>
          <img 
            src={ElasticsearchImg}
            alt="Preview of Master Elasticsearch course on Udemy" 
            className="udemy-course__image"
            loading="lazy"
          />
          <div className="udemy-course__badge">
            <Star className="udemy-course__badge-icon" aria-hidden="true" />
            <span className="udemy-course__badge-text">4.5+ stars</span>
          </div>
        </div>
        
        <div className="udemy-course__content" ref={contentRef}>
          <h2 className="udemy-course__title">Master Elasticsearch: From Beginner to Certification</h2>
          <p className="udemy-course__description">
            Discover my comprehensive training available in French and English on Udemy. Over 8 hours of 
            exclusive content to master deployment, optimization, and administration of an Elasticsearch cluster.
          </p>
          
          <div className="udemy-course__features">
            <div className="udemy-course__feature">
              <Clock className="udemy-course__feature-icon" aria-hidden="true" />
              <span className="udemy-course__feature-text">Lifetime access & free updates</span>
            </div>
            <div className="udemy-course__feature">
              <Languages className="udemy-course__feature-icon" aria-hidden="true" />
              <span className="udemy-course__feature-text">Available in French and English</span>
            </div>
            <div className="udemy-course__feature">
              <GraduationCap className="udemy-course__feature-icon" aria-hidden="true" />
              <span className="udemy-course__feature-text">Certificate of completion</span>
            </div>
          </div>
          
          <div className="udemy-course__cta-container">
            <Link 
              to="https://www.udemy.com/course/master-elasticsearch/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="udemy-course__cta"
              aria-label="Access training on Udemy"
            >
              Access the training
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UdemyCourse;