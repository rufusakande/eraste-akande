// TrainingBenefits.jsx
import React, { useEffect, useRef } from 'react';
import { CheckCircle, LifeBuoy, Upload, Video } from 'lucide-react';
import './TrainingBenefits.css';

const TrainingBenefits = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
    
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Add to refs
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const benefits = [
    {
      icon: <CheckCircle className="training-benefits__card-icon" aria-hidden="true" />,
      title: "Quizzes and practical exercises",
      description: "Consolidate your learning with practical exercises and interactive quizzes throughout the training."
    },
    {
      icon: <LifeBuoy className="training-benefits__card-icon" aria-hidden="true" />,
      title: "Direct support",
      description: "Benefit from direct support via Udemy's Q&A system to resolve your questions."
    },
    {
      icon: <Upload className="training-benefits__card-icon" aria-hidden="true" />,
      title: "Regular updates",
      description: "Content is regularly updated to stay in line with the latest Elasticsearch developments."
    },
    {
      icon: <Video className="training-benefits__card-icon" aria-hidden="true" />,
      title: "Detailed HD videos",
      description: "Clear demonstrations and detailed explanations to quickly grasp concepts."
    }
  ];

  return (
    <section id="training-benefits" className="training-benefits" ref={sectionRef}>
      <div className="training-benefits__container">
        <h2 className="training-benefits__title">The advantages of my training</h2>
        <p className="training-benefits__subtitle">
          Whether you choose my Udemy training or corporate training, here's what makes the difference
        </p>
        
        <div className="training-benefits__cards">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="training-benefits__card"
              ref={addToRefs}
            >
              <div className="training-benefits__card-icon-container">
                {benefit.icon}
              </div>
              <h3 className="training-benefits__card-title">{benefit.title}</h3>
              <p className="training-benefits__card-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingBenefits;