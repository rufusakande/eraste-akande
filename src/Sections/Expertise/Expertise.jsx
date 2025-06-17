// Expertise.jsx
import React, { useEffect, useRef } from 'react';
import './Expertise.css';

const Expertise = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  // Reset references on re-renders
  itemsRef.current = [];

  // Function to add references to elements
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const technologies = [
    {
      name: "Elasticsearch",
      level: 95,
      icon: "elastic.svg"
    },
    {
      name: "Logstash",
      level: 90,
      icon: "logstash.svg"
    },
    {
      name: "Kibana",
      level: 92,
      icon: "kibana.svg"
    },
    {
      name: "Opensearch",
      level: 85,
      icon: "opensearch.svg"
    },
    {
      name: "Beats",
      level: 88,
      icon: "beats.svg"
    },
    {
      name: "Kafka",
      level: 80,
      icon: "kafka.svg"
    },
    {
      name: "Redpanda",
      level: 75,
      icon: "redpanda.svg"
    },
    {
      name: "Java",
      level: 85,
      icon: "java.svg"
    },
    {
      name: "Python",
      level: 82,
      icon: "python.svg"
    },
    {
      name: "Spark",
      level: 78,
      icon: "spark.svg"
    },
    {
      name: "Flink",
      level: 75,
      icon: "flink.svg"
    },
    {
      name: "4G/LTE Networks",
      level: 92,
      icon: "4g.svg"
    },
    {
      name: "Telecom KPIs",
      level: 90,
      icon: "kpi.svg"
    },
    {
      name: "QoS Monitoring",
      level: 88,
      icon: "qos.svg"
    },
    {
      name: "3G/UMTS Networks",
      level: 85,
      icon: "3g.svg"
    },
    {
      name: "2G/GSM Networks",
      level: 83,
      icon: "2g.svg"
    },
    {
      name: "Network Architecture",
      level: 87,
      icon: "network.svg"
    },
    {
      name: "Telecom Data Analysis",
      level: 84,
      icon: "data-analysis.svg"
    }
  ];

  return (
    <section id="expertise" ref={sectionRef} className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-header">
          <h2 className="expertise-title">Technical Expertise</h2>
          <div className="expertise-title-underline"></div>
          <p className="expertise-subtitle">
            Mastered technology stack to meet your data needs
          </p>
        </div>

        <div className="expertise-grid">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="expertise-item" 
              ref={addToRefs}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="expertise-icon-placeholder" aria-label={`${tech.name} icon`}>
                {tech.name.charAt(0)}
              </div>
              <div className="expertise-content">
                <div className="expertise-name-container">
                  <h3 className="expertise-name">{tech.name}</h3>
                  <span className="expertise-level">{tech.level}%</span>
                </div>
                <div className="expertise-progress-container">
                  <div 
                    className="expertise-progress-bar" 
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;