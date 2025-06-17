import { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, Check } from 'lucide-react';
import './StatisticsImpact.css';

const StatisticsImpact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    { icon: <Users size={48} />, value: 100, suffix: '+', label: 'Professionals trained', description: 'On Udemy and in-company' },
    { icon: <Award size={48} />, value: 95, suffix: '%', label: 'Client satisfaction', description: 'Average satisfaction rate' },
    { icon: <Clock size={48} />, value: 40, suffix: '%', label: "Efficiency gain", description: 'For optimized infrastructures' },
    { icon: <Check size={48} />, value: 50, suffix: '+', label: 'Projects completed', description: 'From design to production' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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

  const Counter = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      let startTime;
      let animationFrame;
      
      const animation = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(percentage * end));
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animation);
        }
      };
      
      animationFrame = requestAnimationFrame(animation);
      
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);
    
    return <span className="counter-value">{count}{suffix}</span>;
  };

  return (
    <section id="statistics-impact" ref={sectionRef} className="statistics-section">
      <div className="statistics-container">
        <h2 className="statistics-title">Impact & Results</h2>
        <p className="statistics-subtitle">Technical expertise at the service of performance</p>
        
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-value">
                  {isVisible ? <Counter end={stat.value} suffix={stat.suffix} /> : '0'}
                </h3>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsImpact;