// PointsForts.jsx
import { Award, Globe, GraduationCap, Network, FileText } from 'lucide-react';
import './PointsForts.css';
import { Link } from 'react-router-dom';

const PointsForts = () => {
  const points = [
    {
      icon: <Award size={36} />,
      title: "Certified Elastic Engineer Consultant",
      description: "Official certification guaranteeing the application of best practices for performance, security, and scalability of Elasticsearch clusters."
    },
    {
      icon: <Globe size={36} />,
      title: "Elastic Gold Contributor 2024-2025",
      description: "Distinction awarded by Elastic in recognition of my technical contributions to the community."
    },
    {
      icon: <GraduationCap size={36} />,
      title: "Udemy Trainer – 4.5+ stars",
      description: "Author of training courses followed by over 100 professionals, available online and in-company."
    },
    {
      icon: <Award size={36} />,
      title: "ITU Academy Certification",
      description: "Certified in telecommunications network quality of service."
    },
    {
      icon: <Network size={36} />,
      title: "Mobile Network Architecture",
      description: "Strong mastery of 2G/3G/4G mobile network architecture, KPIs, and their operational monitoring."
    },
    {
      icon: <FileText size={36} />,
      title: "Author of 4G QoS Project",
      description: "Detailed project on 4G QoS monitoring, including network architecture and QoS indicators.",
      lien: "https://fr.scribd.com/document/740152086/Developpement-d-une-solution-de-monitoring-et-d-analyse-des-performances-4G"
    },
  ];

  return (
    <section id="points-forts">
      <div className="points-forts-container">
        <h2 className="points-forts-title">Why work with me?</h2>
        
        <div className="points-forts-grid">
          {points.map((point, index) => (
            <div 
              className="point-fort-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="point-fort-icon">
                {point.icon}
              </div>
              <h3 className="point-fort-title">{point.title}</h3>
              <p className="point-fort-description">{point.description}</p>
              {point.lien && <p className="point-fort-description">
                <Link target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read the document"
                  to={point.lien}>
                    Read the document
                </Link>
              </p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsForts;