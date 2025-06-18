// Consulting.jsx
import React, { useEffect, useRef } from 'react';
import { ExternalLink, BookOpen, Shield, Compass, Database, Server, Bell, Search, FileText } from 'lucide-react';
import './ConsultingPage.css';
import { Link } from 'react-router-dom';

const ConsultingPage = () => {
  const sectionRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    // Observer for scroll animations
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

    // Observe main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each service card
    serviceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Consulting services offered
  const consultingServices = [
    {
      id: 1,
      icon: <Database size={32} />,
      title: "Correct data type formatting on OpenSearch",
      description: "Optimization and structuring of your data for efficient use in OpenSearch, with implementation of mappings and formatting adapted to your specific needs.",
      benefits: ["Optimized data structure", "More efficient search", "Full exploitation of OpenSearch capabilities"]
    },
    {
      id: 2,
      icon: <BookOpen size={32} />,
      title: "Elasticsearch training and workshops",
      description: "Personalized training sessions for you and your team, covering Elasticsearch fundamentals to advanced techniques, with practical exercises adapted to your context.",
      benefits: ["Rapid skill development", "Contextualized practical exercises", "Comprehensive educational support"]
    },
    {
      id: 3,
      icon: <Bell size={32} />,
      title: "Elasticsearch alerts configuration (Rules/Watcher)",
      description: "Implementation of a personalized alert system to monitor your data and be notified in real-time of critical events according to precise rules.",
      benefits: ["Proactive anomaly detection", "Personalized notifications", "Reduced reaction times"]
    },
    {
      id: 4,
      icon: <Search size={32} />,
      title: "Elasticsearch configuration for search applications",
      description: "Complete Elasticsearch configuration with optimized mappings and custom analyzers to maximize performance and relevance of your search applications.",
      benefits: ["Relevant search results", "Improved user experience", "Optimized indexing"]
    },
    {
      id: 5,
      icon: <FileText size={32} />,
      title: "Data or log ingestion via Logstash/Beats",
      description: "Implementation of robust ingestion pipelines to collect, transform, and load your data or logs into Elasticsearch reliably and efficiently.",
      benefits: ["Data flow automation", "Transformation adapted to your needs", "Preserved data integrity"]
    },
    {
      id: 6,
      icon: <Server size={32} />,
      title: "Elasticsearch cluster configuration",
      description: "Design and deployment of scalable Elasticsearch architectures, with optimal configuration of nodes, shards, and replicas to guarantee performance and high availability.",
      benefits: ["High availability", "Scalability adapted to your needs", "Optimized performance"]
    }
  ];

  return (
    <main id="consulting" ref={sectionRef} className="consulting-container">
      <section className="consulting-hero">
        <div className="hero-content">
          <h1>Consulting Services</h1>
          <p>
            Benefit from the expertise of a certified Elastic Engineer telecommunications engineer
            to transform your data into true strategic levers.
          </p>
        </div>
      </section>

      <section className="consulting-approach">
        <div className="approach-content">
          <h2>My approach</h2>
          <div className="approach-steps">
            <div className="approach-step">
              <div className="step-number">1</div>
              <h3>Analysis</h3>
              <p>Thorough evaluation of your needs and existing infrastructure.</p>
            </div>
            <div className="approach-step">
              <div className="step-number">2</div>
              <h3>Recommendation</h3>
              <p>Proposal of solutions adapted to your specific objectives.</p>
            </div>
            <div className="approach-step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>Technical implementation of solutions with rigorous monitoring.</p>
            </div>
            <div className="approach-step">
              <div className="step-number">4</div>
              <h3>Knowledge transfer</h3>
              <p>Training your teams for sustainable technical autonomy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="consulting-services">
        <h2>My consulting services</h2>
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
                <h4>Benefits</h4>
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
          <Link 
            to="https://www.upwork.com/freelancers/~018b666e20302c5287" 
            className="upwork-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my services on Upwork"
          >
            View my services on Upwork <ExternalLink className="external-icon" size={16} />
          </Link>
        </div>
      </section>

      <section className="consulting-process">
        <h2>Collaboration process</h2>
        <div className="process-timeline">
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>First contact</h3>
              <p>Initial discussion to understand your objectives and challenges.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>Detailed proposal</h3>
              <p>Development of an action plan and personalized quote.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>Project execution</h3>
              <p>Implementation of solutions with regular checkpoints.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>Follow-up and support</h3>
              <p>Post-project support to guarantee your autonomy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="consulting-cta">
        <h2>Ready to optimize your data infrastructure?</h2>
        <p>
          Let's discuss your project and discover how my expertise can help you
          get the most out of your data.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">Request a free audit</Link>
          <Link to="/services/training" className="btn-secondary">Discover my training</Link>
        </div>
      </section>
    </main>
  );
};

export default ConsultingPage;