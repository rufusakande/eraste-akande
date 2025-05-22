// Hero.jsx
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';
import iyanuEraste from '../../assets/Images/erasteAkande.webp';

const Hero = () => {
  // Tableau contenant les titres et sous-titres
  const heroContent = [
    {
      title: "Optimisez vos données avec un expert certifié Elasticsearch",
      subtitle: "Je suis Iyanou Eraste AKANDE, consultant Elasticsearch et formateur certifié Elastic Engineer. J'accompagne les entreprises dans la mise en place de solutions de recherche, monitoring et analyse de données en temps réel."
    },
    {
      title: "Une expertise télécom solide au service de vos données",
      subtitle: "En tant qu'ingénieur télécom, avec une spécialisation en qualité de service (QoS) des réseaux mobiles, j'apporte une compréhension fine de la donnée technique dans les projets liés aux télécoms."
    }
  ];

  // État pour suivre l'index du contenu actuellement affiché
  const [currentIndex, setCurrentIndex] = useState(0);
  // États pour gérer les animations de fade
  const [isVisible, setIsVisible] = useState(true);

  // Effet pour faire défiler le contenu
  useEffect(() => {
    const interval = setInterval(() => {
      // Masquer le contenu actuel
      setIsVisible(false);
      
      // Changer d'index après la fin de l'animation de disparition
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
        
        // Réafficher le nouveau contenu
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }, 500); // Délai correspondant à la durée de l'animation de fade-out
      
    }, 5000); // Changer tous les 5 secondes
    
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
            <a href="/contact" className="cta-button primary">
              Discutons <ArrowRight size={18} className="cta-icon" />
            </a>
            <a href="/skills" className="cta-button secondary">
              Voir mes expertises
            </a>
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