import { useState, useRef, useEffect } from 'react';
import { Book, Activity, Database, Radio } from 'lucide-react';
import './TrainingList.css';

function TrainingList() {
  const [activeCard, setActiveCard] = useState(null);
  const trainingRefs = useRef([]);
  
  const trainings = [
    {
      id: 1,
      title: "Analyse des KPI de la qualité des services des réseaux télécoms 2G/3G/4G",
      description: "Optimisez vos réseaux télécoms avec des dashboards dynamiques. Grâce à la collecte automatisée des fichiers OMC-R et à l'analyse visuelle via la suite ELK (Elasticsearch, Logstash, Kibana), nous vous aidons à surveiller efficacement la qualité de vos réseaux mobiles.",
      icon: <Book className="training-card-icon" aria-hidden="true" />,
      platform: "Udemy & Sessions personnalisées"
    },
    {
      id: 2,
      title: "Maîtriser Elasticsearch – De l'initiation à la certification Elastic Engineer",
      description: "Formez-vous pas à pas jusqu'à la certification officielle. Disponible sur Udemy ou en sessions personnalisées, cette formation vous accompagne de la découverte à la maîtrise avancée d'Elasticsearch, en vue de la certification.",
      icon: <Book className="training-card-icon" aria-hidden="true" />,
      platform: "Udemy & Sessions personnalisées"
    },
    {
      id: 3,
      title: "Monitoring & Observabilité avec la stack ELK",
      description: "Apprenez à surveiller vos systèmes efficacement. Une formation pratique sur la configuration des Beats, la gestion des logs, l'analyse des métriques, et la création de dashboards dans Kibana.",
      icon: <Activity className="training-card-icon" aria-hidden="true" />,
      platform: "Sessions personnalisées"
    },
    {
      id: 4,
      title: "Collecte & traitement des données avec ELK",
      description: "Automatisez le traitement de vos données. Formation axée sur Logstash et les pipelines d'ingestion, pour traiter et enrichir vos données avant indexation dans Elasticsearch.",
      icon: <Database className="training-card-icon" aria-hidden="true" />,
      platform: "Sessions personnalisées"
    },
    {
      id: 5,
      title: "Comprendre les Données Télécoms",
      description: "Du fonctionnement des réseaux mobiles à l'analyse de leurs données. Un parcours unique combinant théorie des télécoms (2G/3G/4G), formats de données réseau, et cas pratiques de traitement avec ELK.",
      icon: <Radio className="training-card-icon" aria-hidden="true" />,
      platform: "Sessions personnalisées"
    }
  ];

  // Observer pour l'animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('training-card-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    trainingRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      trainingRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Fonction pour gérer le focus via clavier
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveCard(activeCard === id ? null : id);
    }
  };

  return (
    <section id="training-list" className="training-list-section" aria-labelledby="training-heading">
      <div className="training-list-container">
        <h2 id="training-heading" className="training-list-heading">Formations Spécialisées</h2>
        <p className="training-list-subheading">Expertise en Elasticsearch, ELK Stack et Données Télécoms</p>
        
        <div className="training-list-grid">
          {trainings.map((training, index) => (
            <div 
              key={training.id}
              ref={el => trainingRefs.current[index] = el}
              className={`training-card ${activeCard === training.id ? 'training-card-active' : ''}`}
              onClick={() => setActiveCard(activeCard === training.id ? null : training.id)}
              onKeyDown={(e) => handleKeyDown(e, training.id)}
              tabIndex="0"
              role="button"
              aria-expanded={activeCard === training.id}
              aria-controls={`training-desc-${training.id}`}
            >
              <div className="training-card-header">
                <div className="training-card-icon-wrapper">
                  {training.icon}
                </div>
                <h3 className="training-card-title">{training.title}</h3>
              </div>
              
              <div 
                id={`training-desc-${training.id}`}
                className="training-card-content"
              >
                <p className="training-card-description">{training.description}</p>
                <div className="training-card-footer">
                  <div className="training-card-platform">
                    <span className="training-card-platform-label">Disponible sur:</span>
                    <span className="training-card-platform-value">{training.platform}</span>
                  </div>
                  <button className="training-card-button" aria-label={`En savoir plus sur ${training.title}`}>
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingList