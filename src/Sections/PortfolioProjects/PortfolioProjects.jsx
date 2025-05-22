import { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import './PortfolioProjects.css';
import ElasticsearchIndexingExpertPortfolio from '../../assets/Images/Elasticsearch_Indexing_Expert_portfolio.webp';
import SetupElasticsearchKibanaLogstashPortfolio from '../../assets/Images/Setup_Elasticsearch_avec_Kibana_Logstash_Portfolio.webp';
import IndexEmailDataElasticsearchPortfolio from '../../assets/Images/Index_Email_Data_Elasticsearch_Portfolio.webp';
import UnstableElasticEnterpriseSearch from '../../assets/Images/Unstable_Elastic_Enterprise_Search.webp';
import ELKStackSpringBootMinikube from '../../assets/Images/ELK_Stack_Spring_Boot__Minikube.webp';
import DataTypeOpenSearchPortfolio from '../../assets/Images/Data_Type_Opensearch_Portfolio.webp';
import ConsultationPortfolio from '../../assets/Images/30_Minute_Consultation_Portfolio.webp';
import RestartElasticsearchPortfolio from '../../assets/Images/Restart_Elasticsearch_ActiveCollab_Portfolio.webp';

const projects = [
  {
    id: 1,
    title: "Elasticsearch Indexing Expert",
    client: "Client Entreprise",
    description: "Résolution professionnelle d'un problème d'indexation critique pour un client avec des besoins importants en Elasticsearch.",
    feedback: "Akande est un vrai professionnel et très compétent en Elasticsearch. Il a résolu avec succès notre problème d'indexation. Hautement recommandé pour tout ce qui concerne Elasticsearch.",
    rating: 5.0,
    tags: ["Elasticsearch", "Indexation", "Performance"],
    imageUrl: ElasticsearchIndexingExpertPortfolio,
    alt: "Dashboard d'indexation Elasticsearch"
  },
  {
    id: 2,
    title: "Setup Elasticsearch avec Kibana & Logstash",
    client: "Mikrotik",
    description: "Mise en place complète d'une infrastructure ELK pour la gestion des logs et la visualisation de données pour Mikrotik.",
    feedback: "Le freelancer a fait un très bon travail, a compris les besoins du projet et les a parfaitement satisfaits... Akande montre...",
    rating: 5.0,
    tags: ["ELK Stack", "Kibana", "Logstash"],
    imageUrl: SetupElasticsearchKibanaLogstashPortfolio,
    alt: "Architecture ELK Stack"
  },
  {
    id: 3,
    title: "Index 365 Email Data in Elasticsearch",
    client: "Client Email",
    description: "Implémentation d'un système d'indexation pour données email Office 365 avec architecture optimisée pour la recherche rapide.",
    feedback: "Akande est un plaisir à travailler avec... Tout le travail a été achevé avec succès. Merci Akande A++++",
    rating: 5.0,
    tags: ["Office 365", "Email Indexing", "Data Pipeline"],
    imageUrl: IndexEmailDataElasticsearchPortfolio,
    alt: "Visualisation de données email"
  },
  {
    id: 4,
    title: "Unstable Elastic Enterprise Search",
    client: "Entreprise Docker",
    description: "Résolution d'instabilités dans une implémentation Docker d'Elastic Enterprise Search avec amélioration significative des performances.",
    feedback: "Akande a été très utile; il a résolu le problème que nous rencontrions. La communication était excellente!",
    rating: 5.0,
    tags: ["Docker", "Enterprise Search", "Troubleshooting"],
    imageUrl: UnstableElasticEnterpriseSearch,
    alt: "Architecture Docker Elasticsearch"
  },
  {
    id: 5,
    title: "ELK Stack pour Spring Boot avec Minikube",
    client: "Développeur Spring Boot",
    description: "Implémentation d'un stack ELK complet dans un environnement Kubernetes via Minikube pour une application Spring Boot.",
    rating: 5.0,
    tags: ["Spring Boot", "Kubernetes", "Minikube", "ELK"],
    imageUrl: ELKStackSpringBootMinikube,
    alt: "Dashboard Spring Boot avec ELK"
  },
  {
    id: 6,
    title: "Data Type Correctly Formatted on Opensearch",
    client: "Client OpenSearch",
    description: "Correction et optimisation du formatage des types de données dans OpenSearch pour améliorer les performances de recherche et d'indexation.",
    feedback: "",
    rating: 4.9,
    tags: ["OpenSearch", "Data Formatting", "Optimization"],
    imageUrl: DataTypeOpenSearchPortfolio,
    alt: "Interface OpenSearch avec données formatées"
  },
  {
    id: 7,
    title: "30 Minute Consultation",
    client: "Client Consultation",
    description: "Session de consultation express pour diagnostiquer et résoudre rapidement des problèmes liés à Elasticsearch.",
    feedback: "",
    rating: 5.0,
    tags: ["Consultation", "Elasticsearch", "Troubleshooting"],
    imageUrl: ConsultationPortfolio,
    alt: "Session de consultation Elasticsearch"
  },
  {
    id: 8,
    title: "Restart Elasticsearch for ActiveCollab",
    client: "ActiveCollab",
    description: "Configuration et redémarrage d'une instance Elasticsearch pour l'intégration avec ActiveCollab, améliorant les fonctionnalités de recherche de la plateforme.",
    feedback: "Great experience. Got Elasticsearch up and running quickly. Very happy with result.",
    rating: 5.0,
    tags: ["ActiveCollab", "Elasticsearch", "Integration"],
    imageUrl: RestartElasticsearchPortfolio,
    alt: "Dashboard ActiveCollab avec Elasticsearch"
  }
];

const PortfolioProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const carouselRef = useRef(null);
  const observerRef = useRef(null);

  // Animation au défilement
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
      observerRef.current.observe(item);
    });

    return () => {
      if (observerRef.current) {
        projectItems.forEach(item => {
          observerRef.current.unobserve(item);
        });
      }
    };
  }, []);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 500);
  };

  // Fonction pour afficher les étoiles de notation
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={`star-icon ${i < rating ? 'filled' : 'empty'}`}
          fill={i < rating ? "#FFD700" : "none"}
          stroke={i < rating ? "#FFD700" : "#A0AEC0"}
        />
      );
    }
    return stars;
  };

  return (
    <section id="portfolioProjects" className="portfolio-section" aria-labelledby="portfolio-heading">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 id="portfolio-heading" className="section-title">Projets Réalisés</h2>
          <p className="section-subtitle">Découvrez les projets les mieux notés par les clients d'Iyanou Eraste AKANDE</p>
        </div>
        
        <div className="portfolio-carousel-container">
          <button 
            className="carousel-control carousel-prev" 
            onClick={prevSlide}
            aria-label="Projet précédent"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="portfolio-carousel" ref={carouselRef}>
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-item ${index === activeIndex ? 'active' : ''}`}
                style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
                aria-hidden={index !== activeIndex}
              >
                <div className="project-image-container">
                  <img 
                    src={project.imageUrl} 
                    alt={project.alt}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-client-tag">{project.client}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  
                  <div className="project-rating">
                    <div className="rating-stars">
                      {renderStars(project.rating)}
                    </div>
                    <span className="rating-value">{project.rating?.toFixed(1)}</span>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  {project.feedback && (
                    <div className="project-feedback">
                      <p className="feedback-text">"{project.feedback}"</p>
                    </div>
                  )}
                  
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-control carousel-next" 
            onClick={nextSlide}
            aria-label="Projet suivant"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Aller au projet ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
        
        <div className="portfolio-cta">
          <a 
            href="https://www.upwork.com/freelancers/~018b666e20302c5287" 
            className="upwork-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir tous mes projets sur Upwork"
          >
            Voir tous mes projets sur Upwork <ExternalLink className="external-icon" size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default PortfolioProjects;