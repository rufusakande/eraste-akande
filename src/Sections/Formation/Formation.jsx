// Formation.jsx
import React, { useEffect, useRef } from 'react';
import { Video, Clock, Award, MessageCircle } from 'lucide-react';
import './Formation.css';
import { Link } from 'react-router-dom';

const Formation = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    featuresRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
      featuresRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  // Reset references on re-renders
  featuresRef.current = [];

  // Function to add references to elements
  const addToRefs = (el) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
    }
  };

  const features = [
    {
      icon: <Clock />,
      title: "Lifetime Access",
      description: "Enjoy content and updates without time limits"
    },
    {
      icon: <Video />,
      title: "Practical Exercises",
      description: "Consolidate your knowledge with real practical cases"
    },
    {
      icon: <Award />,
      title: "Certificate",
      description: "Get a completion certificate at the end of the training"
    },
    {
      icon: <MessageCircle />,
      title: "Direct Support",
      description: "Ask your questions and receive expert answers"
    }
  ];

  return (
    <section id="formation" ref={sectionRef} className="formation-section">
      <div className="formation-container">
        <div className="formation-header">
          <h2 className="formation-title">Train with a certified expert</h2>
          <div className="formation-title-underline"></div>
        </div>

        <div className="formation-content" ref={contentRef}>
          <div className="formation-image-container">
            <div className="formation-image-wrapper">
              <div className="formation-image-placeholder" aria-label="Elasticsearch training image">
                <span className="formation-image-text">Master Elasticsearch</span>
              </div>
              <div className="formation-image-badge">French & English</div>
            </div>
          </div>

          <div className="formation-details">
            <h3 className="formation-details-title">Master Elasticsearch: From Beginner to Certification</h3>
            <p className="formation-details-description">
              Discover my comprehensive training available on Udemy. Over 8 hours of exclusive content to master 
              deployment, optimization, and administration of an Elasticsearch cluster.
            </p>

            <div className="formation-features">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="formation-feature"
                  ref={addToRefs}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="formation-feature-icon">
                    {React.cloneElement(feature.icon, { size: 24, color: '#007BFF' })}
                  </div>
                  <div className="formation-feature-content">
                    <h4 className="formation-feature-title">{feature.title}</h4>
                    <p className="formation-feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="https://www.udemy.com/course/master-elasticsearch/" className="formation-cta" aria-label="Access training on Udemy">
              <span>Access the training</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="formation-cta-icon">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;