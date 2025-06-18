// Hero.jsx
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';
import iyanuEraste from '../../assets/Images/erasteAkande.webp';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Array containing titles and subtitles
  const heroContent = [
    {
      title: "Optimize your data with a certified Elasticsearch expert",
      subtitle: "I am Iyanou Eraste AKANDE, Elasticsearch consultant and certified Elastic Engineer trainer. I help companies implement search, monitoring, and real-time data analysis solutions."
    },
    {
      title: "Solid telecom expertise at the service of your data",
      subtitle: "As a telecommunications engineer, with specialization in Quality of Service (QoS) for mobile networks, I bring a deep understanding of technical data in telecom-related projects."
    }
  ];

  // State to track the index of currently displayed content
  const [currentIndex, setCurrentIndex] = useState(0);
  // States to manage fade animations
  const [isVisible, setIsVisible] = useState(true);

  // Effect to cycle through content
  useEffect(() => {
    const interval = setInterval(() => {
      // Hide current content
      setIsVisible(false);
      
      // Change index after fade-out animation ends
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
        
        // Show new content
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }, 500); // Delay corresponding to fade-out animation duration
      
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [heroContent.length]);

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="title-container">
            <h1 className={`hero-title ${isVisible ? 'content-visible' : 'content-hidden'}`}>
              {heroContent[currentIndex].title}
            </h1>
          </div>
          <div className="subtitle-container">
            <p className={`hero-subtitle ${isVisible ? 'content-visible' : 'content-hidden'}`}>
              {heroContent[currentIndex].subtitle}
            </p>
          </div>
          <div className="hero-cta">
            <Link to="/contact" className="cta-button primary">
              Let's talk <ArrowRight size={18} className="cta-icon" />
            </Link>
            <Link to="/skills" className="cta-button secondary">
              View my expertise
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <div className="image-container">
              <div className="profile-image">
                <img src={iyanuEraste} alt="Eraste akande" />
              </div>
            </div>
            <div className="tech-dots">
              <span className="tech-dot" style={{ animationDelay: '0.2s' }}></span>
              <span className="tech-dot" style={{ animationDelay: '0.5s' }}></span>
              <span className="tech-dot" style={{ animationDelay: '0.8s' }}></span>
              <span className="tech-dot" style={{ animationDelay: '1.1s' }}></span>
              <span className="tech-dot" style={{ animationDelay: '1.4s' }}></span>
            </div>
          </div>
          <div className="tech-badges">
            <div className="tech-badge elasticsearch">Elasticsearch</div>
            <div className="tech-badge kibana">Kibana</div>
            <div className="tech-badge logstash">Logstash</div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#F5F7FA" d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,56C1248,48,1344,32,1392,24L1440,16L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;