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
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Elasticsearch Indexing Expert",
    client: "Enterprise Client",
    description: "Professional resolution of a critical indexing problem for a client with significant Elasticsearch needs.",
    feedback: "Akande is a true professional and very competent in Elasticsearch. He successfully solved our indexing problem. Highly recommended for anything related to Elasticsearch.",
    rating: 5.0,
    tags: ["Elasticsearch", "Indexing", "Performance"],
    imageUrl: ElasticsearchIndexingExpertPortfolio,
    alt: "Elasticsearch indexing dashboard"
  },
  {
    id: 2,
    title: "Setup Elasticsearch with Kibana & Logstash",
    client: "Mikrotik",
    description: "Complete setup of ELK infrastructure for log management and data visualization for Mikrotik.",
    feedback: "The freelancer did a very good job, understood the project needs and satisfied them perfectly... Akande shows...",
    rating: 5.0,
    tags: ["ELK Stack", "Kibana", "Logstash"],
    imageUrl: SetupElasticsearchKibanaLogstashPortfolio,
    alt: "ELK Stack architecture"
  },
  {
    id: 3,
    title: "Index 365 Email Data in Elasticsearch",
    client: "Email Client",
    description: "Implementation of an indexing system for Office 365 email data with architecture optimized for fast search.",
    feedback: "Akande is a pleasure to work with... All work was completed successfully. Thank you Akande A++++",
    rating: 5.0,
    tags: ["Office 365", "Email Indexing", "Data Pipeline"],
    imageUrl: IndexEmailDataElasticsearchPortfolio,
    alt: "Email data visualization"
  },
  {
    id: 4,
    title: "Unstable Elastic Enterprise Search",
    client: "Docker Enterprise",
    description: "Resolution of instabilities in a Docker implementation of Elastic Enterprise Search with significant performance improvement.",
    feedback: "Akande was very helpful; he solved the problem we were experiencing. Communication was excellent!",
    rating: 5.0,
    tags: ["Docker", "Enterprise Search", "Troubleshooting"],
    imageUrl: UnstableElasticEnterpriseSearch,
    alt: "Docker Elasticsearch architecture"
  },
  {
    id: 5,
    title: "ELK Stack for Spring Boot with Minikube",
    client: "Spring Boot Developer",
    description: "Implementation of a complete ELK stack in a Kubernetes environment via Minikube for a Spring Boot application.",
    rating: 5.0,
    tags: ["Spring Boot", "Kubernetes", "Minikube", "ELK"],
    imageUrl: ELKStackSpringBootMinikube,
    alt: "Spring Boot dashboard with ELK"
  },
  {
    id: 6,
    title: "Data Type Correctly Formatted on Opensearch",
    client: "OpenSearch Client",
    description: "Correction and optimization of data type formatting in OpenSearch to improve search and indexing performance.",
    feedback: "",
    rating: 4.9,
    tags: ["OpenSearch", "Data Formatting", "Optimization"],
    imageUrl: DataTypeOpenSearchPortfolio,
    alt: "OpenSearch interface with formatted data"
  },
  {
    id: 7,
    title: "30 Minute Consultation",
    client: "Consultation Client",
    description: "Express consultation session to quickly diagnose and resolve Elasticsearch-related issues.",
    feedback: "",
    rating: 5.0,
    tags: ["Consultation", "Elasticsearch", "Troubleshooting"],
    imageUrl: ConsultationPortfolio,
    alt: "Elasticsearch consultation session"
  },
  {
    id: 8,
    title: "Restart Elasticsearch for ActiveCollab",
    client: "ActiveCollab",
    description: "Configuration and restart of an Elasticsearch instance for integration with ActiveCollab, improving the platform's search functionality.",
    feedback: "Great experience. Got Elasticsearch up and running quickly. Very happy with result.",
    rating: 5.0,
    tags: ["ActiveCollab", "Elasticsearch", "Integration"],
    imageUrl: RestartElasticsearchPortfolio,
    alt: "ActiveCollab dashboard with Elasticsearch"
  }
];

const PortfolioProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const carouselRef = useRef(null);
  const observerRef = useRef(null);

  // Scroll animation
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

  // Function to display rating stars
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
          <h2 id="portfolio-heading" className="section-title">Completed Projects</h2>
          <p className="section-subtitle">Discover the highest-rated projects by Iyanou Eraste AKANDE's clients</p>
        </div>
        
        <div className="portfolio-carousel-container">
          <button 
            className="carousel-control carousel-prev" 
            onClick={prevSlide}
            aria-label="Previous project"
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
            aria-label="Next project"
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
              aria-label={`Go to project ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
        
        <div className="portfolio-cta">
          <Link 
            to="https://www.upwork.com/freelancers/~018b666e20302c5287" 
            className="upwork-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all my projects on Upwork"
          >
            View all my projects on Upwork <ExternalLink className="external-icon" size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PortfolioProjects;