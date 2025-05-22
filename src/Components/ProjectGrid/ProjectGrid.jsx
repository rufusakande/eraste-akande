// src/components/portfolio/ProjectGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import './ProjectGrid.css';

const ProjectGrid = ({ activeFilter }) => {
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Sample project data - in a real app, this would come from props or API
  const projects = [
    {
      id: 1,
      title: "Optimisation cluster Elasticsearch",
      description: "Amélioration des performances d'un cluster Elasticsearch pour un acteur majeur des télécoms.",
      image: "/assets/images/elasticsearch-project.jpg", // Placeholder - use real path in production
      technologies: ["Elasticsearch", "Kibana", "Java"],
      category: "elasticsearch",
      caseStudyUrl: "/case-study/telecom-elasticsearch"
    },
    {
      id: 2,
      title: "Plateforme de monitoring Beats",
      description: "Mise en place d'une solution de monitoring complète avec la stack Elastic Beats.",
      image: "/assets/images/monitoring-project.jpg", // Placeholder - use real path in production
      technologies: ["Filebeat", "Metricbeat", "Heartbeat", "Kibana"],
      category: "monitoring",
      caseStudyUrl: "/case-study/beats-monitoring"
    },
    {
      id: 3,
      title: "Formation Elasticsearch Enterprise",
      description: "Programme de formation sur mesure pour équipes DevOps d'une banque internationale.",
      image: "/assets/images/training-project.jpg", // Placeholder - use real path in production
      technologies: ["Elasticsearch", "Kibana", "DevOps"],
      category: "formation",
      caseStudyUrl: "/case-study/banking-training"
    },
    {
      id: 4,
      title: "Pipeline de données temps réel",
      description: "Architecture de traitement de données en temps réel avec Kafka et Elastic Stack.",
      image: "/assets/images/pipeline-project.jpg", // Placeholder - use real path in production
      technologies: ["Kafka", "Logstash", "Elasticsearch"],
      category: "pipelines",
      caseStudyUrl: "/case-study/realtime-pipeline"
    },
    {
      id: 5,
      title: "Sécurisation Stack Elastic",
      description: "Renforcement de la sécurité d'une infrastructure Elastic Stack pour conformité RGPD.",
      image: "/assets/images/security-project.jpg", // Placeholder - use real path in production
      technologies: ["Security", "Authentication", "Encryption"],
      category: "securite",
      caseStudyUrl: "/case-study/elastic-security"
    },
    {
      id: 6,
      title: "Dashboard Analytique E-commerce",
      description: "Tableaux de bord pour analyse temps réel des comportements utilisateurs sur une plateforme e-commerce.",
      image: "/assets/images/dashboard-project.jpg", // Placeholder - use real path in production
      technologies: ["Elasticsearch", "Kibana", "Analytics"],
      category: "elasticsearch",
      caseStudyUrl: "/case-study/ecommerce-analytics"
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, [isVisible]);

  // Create placeholder image for project cards
  const createPlaceholderImage = (index) => {
    const colors = ['#1E2A38', '#007BFF', '#E4B31A'];
    return `linear-gradient(45deg, ${colors[index % colors.length]}, #1E2A38)`;
  };

  return (
    <section id="project-grid" aria-labelledby="projects-heading">
      <div className="project-grid__container">
        <div 
          ref={gridRef} 
          className={`project-grid__grid ${isVisible ? 'animate' : ''}`}
          id={`projects-${activeFilter}`}
          role="tabpanel"
          aria-labelledby={`filter-${activeFilter}`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <article 
                key={project.id} 
                className="project-grid__card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="project-grid__image" 
                  style={{ 
                    backgroundImage: createPlaceholderImage(index)
                  }}
                  aria-hidden="true"
                >
                  <div className="project-grid__overlay">
                    <ArrowRight className="project-grid__icon" />
                  </div>
                </div>
                <div className="project-grid__content">
                  <h3 className="project-grid__title">{project.title}</h3>
                  <p className="project-grid__description">{project.description}</p>
                  <div className="project-grid__technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="project-grid__tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.caseStudyUrl} className="project-grid__link">
                    Voir le projet <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div className="project-grid__empty">
              <p>Aucun projet ne correspond à ce filtre actuellement.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;