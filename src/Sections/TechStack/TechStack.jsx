import { useEffect, useRef } from 'react';
import './TechStack.css';

const TechStack = () => {
  const techStackRef = useRef(null);
  const technologies = [
    { name: 'Elasticsearch', category: 'ELK Stack' },
    { name: 'Logstash', category: 'ELK Stack' },
    { name: 'Kibana', category: 'ELK Stack' },
    { name: 'Opensearch', category: 'Search Engine' },
    { name: 'Beats', category: 'Data Shippers', subItems: ['Filebeat', 'Metricbeat', 'Heartbeat'] },
    { name: 'Kafka', category: 'Event Streaming' },
    { name: 'Redpanda', category: 'Event Streaming' },
    { name: 'Java', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'Spark', category: 'Data Processing' },
    { name: 'Flink', category: 'Data Processing' },
    // ✅ Ajout des compétences Télécoms
    { name: 'Réseaux 4G/LTE', category: 'Telecommunications' },
    { name: 'Réseaux 3G/UMTS', category: 'Telecommunications' },
    { name: 'Réseaux 2G/GSM', category: 'Telecommunications' },
    { name: 'KPI Télécoms', category: 'Telecom Performance' },
    { name: 'QoS Monitoring', category: 'Network Monitoring' },
    { name: 'Network Architecture', category: 'Network Design' },
    { name: 'Analyse de données télécom', category: 'Data Analysis' },
  ];

  useEffect(() => {
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
    
    if (techStackRef.current) {
      observer.observe(techStackRef.current);
    }
    
    // Observe each tech item
    document.querySelectorAll('.tech-stack__item').forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      if (techStackRef.current) {
        observer.unobserve(techStackRef.current);
      }
      document.querySelectorAll('.tech-stack__item').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section
      ref={techStackRef}
      id="tech-stack"
      className="tech-stack"
      aria-labelledby="tech-stack-heading"
    >
      <div className="tech-stack__container">
        <h2 id="tech-stack-heading" className="tech-stack__title">
          Stack de compétences
        </h2>
        <p className="tech-stack__description">
          Mon expertise technique couvre un large éventail de technologies modernes pour le traitement, 
          l'analyse et la visualisation des données.
        </p>
        
        <div className="tech-stack__grid">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-stack__item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tech-stack__card">
                <h3 className="tech-stack__tech-name">{tech.name}</h3>
                <span className="tech-stack__category">{tech.category}</span>
                
                {tech.subItems && (
                  <ul className="tech-stack__subitems">
                    {tech.subItems.map((subItem, idx) => (
                      <li key={idx} className="tech-stack__subitem">{subItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;