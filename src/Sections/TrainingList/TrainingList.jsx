import { useState, useRef, useEffect } from 'react';
import { Book, Activity, Database, Radio } from 'lucide-react';
import './TrainingList.css';

function TrainingList() {
  const [activeCard, setActiveCard] = useState(null);
  const trainingRefs = useRef([]);
  
  const trainings = [
    {
      id: 1,
      title: "Analysis of KPIs for 2G/3G/4G telecom network service quality",
      description: "Optimize your telecom networks with dynamic dashboards. Through automated collection of OMC-R files and visual analysis via the ELK suite (Elasticsearch, Logstash, Kibana), we help you effectively monitor the quality of your mobile networks.",
      icon: <Book className="training-card-icon" aria-hidden="true" />,
      platform: "Udemy & Custom sessions"
    },
    {
      id: 2,
      title: "Master Elasticsearch – From beginner to Elastic Engineer certification",
      description: "Train step by step to official certification. Available on Udemy or in custom sessions, this training takes you from discovery to advanced mastery of Elasticsearch, towards certification.",
      icon: <Book className="training-card-icon" aria-hidden="true" />,
      platform: "Udemy & Custom sessions"
    },
    {
      id: 3,
      title: "Monitoring & Observability with the ELK stack",
      description: "Learn to monitor your systems effectively. Practical training on Beats configuration, log management, metrics analysis, and dashboard creation in Kibana.",
      icon: <Activity className="training-card-icon" aria-hidden="true" />,
      platform: "Custom sessions"
    },
    {
      id: 4,
      title: "Data collection & processing with ELK",
      description: "Automate your data processing. Training focused on Logstash and ingestion pipelines, to process and enrich your data before indexing in Elasticsearch.",
      icon: <Database className="training-card-icon" aria-hidden="true" />,
      platform: "Custom sessions"
    },
    {
      id: 5,
      title: "Understanding Telecom Data",
      description: "From mobile network operation to data analysis. A unique journey combining telecom theory (2G/3G/4G), network data formats, and practical processing cases with ELK.",
      icon: <Radio className="training-card-icon" aria-hidden="true" />,
      platform: "Custom sessions"
    }
  ];

  // Observer for scroll animation
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

  // Function to handle keyboard focus
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveCard(activeCard === id ? null : id);
    }
  };

  return (
    <section id="training-list" className="training-list-section" aria-labelledby="training-heading">
      <div className="training-list-container">
        <h2 id="training-heading" className="training-list-heading">Specialized Training</h2>
        <p className="training-list-subheading">Expertise in Elasticsearch, ELK Stack and Telecom Data</p>
        
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
                    <span className="training-card-platform-label">Available on:</span>
                    <span className="training-card-platform-value">{training.platform}</span>
                  </div>
                  <button className="training-card-button" aria-label={`Learn more about ${training.title}`}>
                    Learn more
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