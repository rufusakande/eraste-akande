// Consulting.jsx
import React, { useEffect, useRef } from 'react';
import { ExternalLink, BookOpen, Shield, Compass, Database, Server, Bell, Search, FileText } from 'lucide-react';
import './ConsultingPage.css';

const ConsultingPage = () => {
  const sectionRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    // Observer pour les animations au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer la section principale
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observer chaque carte de service
    serviceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Services de consulting offerts
  const consultingServices = [
    {
      id: 1,
      icon: <Database size={32} />,
      title: "Formatage correct des types de données sur OpenSearch",
      description: "Optimisation et structuration de vos données pour une utilisation efficace dans OpenSearch, avec mise en place des mappings et formatages adaptés à vos besoins spécifiques.",
      benefits: ["Structure de données optimisée", "Recherche plus performante", "Exploitation complète des capacités d'OpenSearch"]
    },
    {
      id: 2,
      icon: <BookOpen size={32} />,
      title: "Formation et ateliers Elasticsearch",
      description: "Sessions de formation personnalisées pour vous et votre équipe, couvrant les fondamentaux d'Elasticsearch jusqu'aux techniques avancées, avec des exercices pratiques adaptés à votre contexte.",
      benefits: ["Montée en compétence rapide", "Exercices pratiques contextualisés", "Support pédagogique complet"]
    },
    {
      id: 3,
      icon: <Bell size={32} />,
      title: "Configuration des alertes Elasticsearch (Rules/Watcher)",
      description: "Mise en place d'un système d'alertes personnalisé pour surveiller vos données et être notifié en temps réel des événements critiques selon des règles précises.",
      benefits: ["Détection proactive des anomalies", "Notifications personnalisées", "Réduction des temps de réaction"]
    },
    {
      id: 4,
      icon: <Search size={32} />,
      title: "Configuration Elasticsearch pour applications de recherche",
      description: "Configuration complète d'Elasticsearch avec mappings optimisés et analyseurs personnalisés pour maximiser les performances et la pertinence de vos applications de recherche.",
      benefits: ["Résultats de recherche pertinents", "Expérience utilisateur améliorée", "Indexation optimisée"]
    },
    {
      id: 5,
      icon: <FileText size={32} />,
      title: "Ingestion de données ou logs via Logstash/Beats",
      description: "Mise en place de pipelines d'ingestion robustes pour collecter, transformer et charger vos données ou logs dans Elasticsearch de manière fiable et efficace.",
      benefits: ["Automatisation des flux de données", "Transformation adaptée à vos besoins", "Intégrité des données préservée"]
    },
    {
      id: 6,
      icon: <Server size={32} />,
      title: "Configuration de clusters Elasticsearch",
      description: "Conception et déploiement d'architectures Elasticsearch évolutives, avec configuration optimale des nœuds, shards et réplicas pour garantir performance et haute disponibilité.",
      benefits: ["Haute disponibilité", "Scalabilité adaptée à vos besoins", "Performances optimisées"]
    }
  ];

  return (
    <main id="consulting" ref={sectionRef} className="consulting-container">
      <section className="consulting-hero">
        <div className="hero-content">
          <h1>Services de Consulting</h1>
          <p>
            Bénéficiez de l'expertise d'un ingénieur télécom certifié Elastic Engineer
            pour transformer vos données en véritables leviers stratégiques.
          </p>
        </div>
      </section>

      <section className="consulting-approach">
        <div className="approach-content">
          <h2>Mon approche</h2>
          <div className="approach-steps">
            <div className="approach-step">
              <div className="step-number">1</div>
              <h3>Analyse</h3>
              <p>Évaluation approfondie de vos besoins et de votre infrastructure existante.</p>
            </div>
            <div className="approach-step">
              <div className="step-number">2</div>
              <h3>Recommandation</h3>
              <p>Proposition de solutions adaptées à vos objectifs spécifiques.</p>
            </div>
            <div className="approach-step">
              <div className="step-number">3</div>
              <h3>Implémentation</h3>
              <p>Mise en œuvre technique des solutions avec un suivi rigoureux.</p>
            </div>
            <div className="approach-step">
              <div className="step-number">4</div>
              <h3>Transfert de compétences</h3>
              <p>Formation de vos équipes pour une autonomie technique durable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="consulting-services">
        <h2>Mes services de consulting</h2>
        <div className="services-grid">
          {consultingServices.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              ref={el => serviceRefs.current[index] = el}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-benefits">
                <h4>Bénéfices</h4>
                <ul>
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div id='upworkCTA' className="portfolio-cta">
          <a 
            href="https://www.upwork.com/freelancers/~018b666e20302c5287" 
            className="upwork-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir tous mes projets sur Upwork"
          >
            Voir mes services sur Upwork <ExternalLink className="external-icon" size={16} />
          </a>
        </div>
      </section>

      <section className="consulting-process">
        <h2>Processus de collaboration</h2>
        <div className="process-timeline">
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>Premier contact</h3>
              <p>Discussion initiale pour comprendre vos objectifs et défis.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>Proposition détaillée</h3>
              <p>Élaboration d'un plan d'action et d'un devis personnalisé.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>Réalisation du projet</h3>
              <p>Mise en œuvre des solutions avec des points d'étape réguliers.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>Suivi et support</h3>
              <p>Accompagnement post-projet pour garantir votre autonomie.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="consulting-cta">
        <h2>Prêt à optimiser votre infrastructure data ?</h2>
        <p>
          Discutons de votre projet et découvrez comment mon expertise peut vous aider
          à tirer le meilleur parti de vos données.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">Demander un audit gratuit</a>
          <a href="/services/training" className="btn-secondary">Découvrir mes formations</a>
        </div>
      </section>
    </main>
  );
};

export default ConsultingPage;