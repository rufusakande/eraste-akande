import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Headphones, 
  GraduationCap,
  BarChart3 
} from 'lucide-react';
import './Services.css';

const Services = () => {
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

  const services = [
    {
      icon: <Database />,
      title: "Custom Solutions for Your Data",
      description: "Transform your data into strategic levers with tailor-made solutions designed by a certified Elasticsearch expert.",
      cta: "Discover my solutions",
      url: "/services/solution"
    },
    {
      icon: <Headphones />,
      title: "Consulting Services",
      description: "Benefit from the expertise of a certified Elastic Engineer telecommunications engineer to transform your data into true strategic levers.",
      cta: "View my services",
      url: "/services/consulting"
    },
    {
      icon: <GraduationCap />,
      title: "Train with a Certified Expert",
      description: "Develop your skills in Elasticsearch, data engineering, and telecommunications with training designed by a certified engineer and Elastic Gold Contributor.",
      cta: "Discover my training",
      url: "/services/training"
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">My services</h2>
          <div className="services-title-underline"></div>
          <p className="services-subtitle">Solutions adapted to your data needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              ref={addToRefs}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-icon-container">
                {React.cloneElement(service.icon, { size: 32, color: '#E4B31A' })}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to={service.url}>
                <button className="service-cta">
                  {service.cta}
                  <span className="service-cta-arrow">→</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;