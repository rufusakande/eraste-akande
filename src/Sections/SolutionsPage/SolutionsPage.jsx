import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, BarChart, Server, CheckCircle, Users, Activity, Database } from 'lucide-react';
import './SolutionsPage.css';
import servicesReseauTelecomImg from '../../assets/Images/Optimisation_de_la_Qualite_de_Service_des_Reseaux_Mobiles.webp';
import SurveillanceAvanceInfrastructureImg from '../../assets/Images/Surveillance_Avance_Infrastructure_Cloud.webp';
import TransformationDonneesImg from '../../assets/Images/Transformation_des_Donnees.webp';

function SolutionsPage () {
  // Refs for animation elements
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const processRef = useRef(null);
  const casesRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all section elements
    [heroRef, solutionsRef, processRef, casesRef, ctaRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up
    return () => {
      [heroRef, solutionsRef, processRef, casesRef, ctaRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <main id="solutions">
      {/* Hero Section */}
      <section ref={heroRef} className="solutions-hero" aria-labelledby="solutions-heading">
        <div className="solutions-container">
          <h1 id="solutions-heading">Solutions Personnalisées pour vos Données</h1>
          <p>Transformez vos données en leviers stratégiques avec des solutions sur mesure conçues par un expert Elasticsearch certifié.</p>
          <div className="solutions-cta">
            <a href="/contact" className="solutions-primary-btn" aria-label="Discuter de votre projet">
              Discuter de votre projet <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section ref={solutionsRef} className="solutions-main" aria-labelledby="main-solutions-heading">
        <div className="solutions-container">
          <h2 id="main-solutions-heading">Solutions Expertes</h2>
          <p className="solutions-subtitle">Des solutions complètes et personnalisées pour répondre aux défis de votre infrastructure de données.</p>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <Server aria-hidden="true" />
              </div>
              <h3>Surveillance intelligente de la qualité de service des réseaux 2G/3G/4G</h3>
              <p>Optimisez vos réseaux télécoms avec des dashboards dynamiques. Grâce à la collecte automatisée des fichiers OMC-R et à l'analyse visuelle via la suite ELK (Elasticsearch, Logstash, Kibana), nous vous aidons à surveiller efficacement la qualité de vos réseaux mobiles.</p>
              <ul className="solution-features">
                <li><CheckCircle size={16} aria-hidden="true" /> Dashboards dynamiques</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Collecte automatisée</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Analyse visuelle</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <Activity aria-hidden="true" />
              </div>
              <h3>Observabilité complète de vos systèmes</h3>
              <p>Gardez un œil sur chaque aspect de votre infrastructure. Avec les Beats, Elasticsearch et Kibana, nous collectons et analysons logs, métriques et temps de disponibilité pour une visibilité temps réel et des alertes intelligentes.</p>
              <ul className="solution-features">
                <li><CheckCircle size={16} aria-hidden="true" /> Surveillance en temps réel</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Alertes intelligentes</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Analyse de logs et métriques</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <Database aria-hidden="true" />
              </div>
              <h3>Valorisation des données par l'analyse et la visualisation</h3>
              <p>Transformez vos données en informations stratégiques. Nous mettons en place des pipelines de collecte, traitement et visualisation des données de toute source avec Logstash, Elasticsearch et Kibana pour une prise de décision éclairée.</p>
              <ul className="solution-features">
                <li><CheckCircle size={16} aria-hidden="true" /> Pipelines de données</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Visualisations interactives</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Support décisionnel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section ref={processRef} className="solutions-process" aria-labelledby="process-heading">
        <div className="solutions-container">
          <h2 id="process-heading">Processus d'Implémentation</h2>
          <p className="solutions-subtitle">Une approche méthodique pour garantir le succès de votre projet.</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Analyse des Besoins</h3>
              <p>Évaluation approfondie de votre infrastructure existante et identification des objectifs clés à atteindre.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Conception de Solution</h3>
              <p>Élaboration d'une architecture personnalisée répondant à vos exigences techniques et fonctionnelles.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Déploiement & Configuration</h3>
              <p>Mise en place des composants Elastic Stack et intégration à votre environnement existant.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Formation & Support</h3>
              <p>Transfert de compétences à vos équipes et accompagnement continu pour une autonomie progressive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="solutions-cases" aria-labelledby="cases-heading">
        <div className="solutions-container">
          <h2 id="cases-heading">Études de Cas</h2>
          <p className="solutions-subtitle">Des solutions concrètes qui résolvent des problématiques réelles.</p>
          
          {/* Case Study 1 - Matching the first solution */}
          <div className="case-study">
            <div className="case-content">
              <h3>Optimisation de la Qualité de Service des Réseaux Mobiles</h3>
              <p className="case-client"><Users size={16} aria-hidden="true" /> Opérateur Télécom National</p>
              <p>Mise en place d'une solution de surveillance intelligente pour optimiser les performances des réseaux 2G/3G/4G et améliorer l'expérience utilisateur.</p>
              <h4>Résultats:</h4>
              <ul>
                <li>Réduction de 40% des temps d'identification des incidents</li>
                <li>Amélioration de 25% de la qualité de service perçue</li>
                <li>Tableaux de bord centralisés pour la prise de décision</li>
              </ul>
              <a href="/contact" className="case-link">En savoir plus <ArrowRight size={16} /></a>
            </div>
            <div className="case-image" aria-hidden="true">
              <div className="case-placeholder">
                <img 
                  src={servicesReseauTelecomImg}
                  alt="Optimisation de la Qualité de Service des Réseaux Mobiles" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Case Study 2 - Matching the second solution */}
          <div className="case-study" style={{ marginTop: "2rem" }}>
            <div className="case-image" aria-hidden="true">
              <div className="case-placeholder">
                <img 
                  src={SurveillanceAvanceInfrastructureImg}
                  alt="Surveillance Avancé d'Infrastructure Cloud" 
                  loading="lazy"
                />
              </div>
            </div>
            <div className="case-content">
              <h3>Monitoring Avancé d'Infrastructure Cloud</h3>
              <p className="case-client"><Users size={16} aria-hidden="true" /> Entreprise SaaS</p>
              <p>Déploiement d'une solution d'observabilité complète pour surveiller et optimiser une infrastructure cloud critique hébergeant des applications métier.</p>
              <h4>Résultats:</h4>
              <ul>
                <li>Détection proactive des anomalies réduisant les temps d'arrêt de 60%</li>
                <li>Visibilité complète sur les performances des applications</li>
                <li>Réduction des coûts d'infrastructure de 20% grâce à l'optimisation</li>
              </ul>
              <a href="/contact" className="case-link">En savoir plus <ArrowRight size={16} /></a>
            </div>
          </div>
          
          {/* Case Study 3 - Matching the third solution */}
          <div className="case-study" style={{ marginTop: "2rem" }}>
            <div className="case-content">
              <h3>Transformation des Données en Insights Commerciaux</h3>
              <p className="case-client"><Users size={16} aria-hidden="true" /> Groupe de Distribution</p>
              <p>Création d'une plateforme d'analyse et de visualisation des données commerciales pour optimiser les décisions stratégiques et opérationnelles.</p>
              <h4>Résultats:</h4>
              <ul>
                <li>Augmentation de 15% du chiffre d'affaires grâce aux insights clients</li>
                <li>Optimisation des stocks basée sur l'analyse prédictive</li>
                <li>Tableaux de bord personnalisés par département pour une meilleure prise de décision</li>
              </ul>
              <a href="/contact" className="case-link">En savoir plus <ArrowRight size={16} /></a>
            </div>
            <div className="case-image" aria-hidden="true">
              <div className="case-placeholder">
                <img 
                  src={TransformationDonneesImg}
                  alt="Transformation des Données en Insights Commerciaux"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="solutions-cta-section" aria-labelledby="cta-heading">
        <div className="solutions-container">
          <h2 id="cta-heading">Prêt à Transformer vos Données en Avantage Stratégique?</h2>
          <p>Discutons ensemble de votre projet et des solutions adaptées à vos besoins spécifiques.</p>
          <div className="cta-buttons">
            <a href="/contact" className="solutions-primary-btn">
              Demander une consultation <ArrowRight size={18} />
            </a>
            <a href="/skills" className="solutions-secondary-btn">
              Découvrir mes expertises
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage;