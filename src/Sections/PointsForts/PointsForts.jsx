// PointsForts.jsx
import { Award, Globe, GraduationCap, Network, FileText } from 'lucide-react';
import './PointsForts.css';

const PointsForts = () => {
  const points = [
    {
      icon: <Award size={36} />,
      title: "Consultant certifié Elastic Engineer",
      description: "Certification officielle garantissant l'application des meilleures pratiques pour la performance, la sécurité et la scalabilité des clusters Elasticsearch."
    },
    {
      icon: <Globe size={36} />,
      title: "Elastic Gold Contributor 2024-2025",
      description: "Distinction remise par Elastic en reconnaissance de mes contributions techniques à la communauté."
    },
    {
      icon: <GraduationCap size={36} />,
      title: "Formateur Udemy – 4.5+ étoiles",
      description: "Auteur de formations suivies par plus de 100 professionnels, disponibles en ligne et en entreprise."
    },
    {
      icon: <Award size={36} />,
      title: "Certification UIT Academy",
      description: "Certifié sur la qualité de service des réseaux télécoms."
    },
    {
      icon: <Network size={36} />,
      title: "Architecture Réseaux Mobiles",
      description: "Solide maîtrise de l'architecture des réseaux mobiles 2G/3G/4G, des KPI et de leur suivi opérationnel."
    },
    {
      icon: <FileText size={36} />,
      title: "Auteur Projet QoS 4G",
      description: "Projet détaillé sur le monitoring de la QoS 4G, incluant l'architecture des réseaux et les indicateurs QoS.",
      lien: "https://www.researchgate.net/publication/376679223_VDR_and_PDIA3_Are_Essential_for_Activation_of_Calcium_Signaling_and_Membrane_Response_to_125OH2D3_in_Squamous_Cell_Carcinoma_Cells"
    },
  ];

  return (
    <section id="points-forts">
      <div className="points-forts-container">
        <h2 className="points-forts-title">Pourquoi travailler avec moi ?</h2>
        
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
                <a target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lire le document"
                  href={point.lien}>
                    Lire le document
                </a>
              </p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsForts;