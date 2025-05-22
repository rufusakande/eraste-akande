import { useEffect, useRef } from 'react';
import { Linkedin, Award, FileText, Globe, BarChart } from 'lucide-react';
import './ProfileLinks.css';
// Import du fichier CV
import cvPDF from '../../assets/PDF/CV_Eraste_AKANDE.pdf'; // Assurez-vous que le chemin est correct selon votre structure de dossiers

const ProfileLinks = () => {
  const containerRef = useRef(null);
  const linksRef = useRef([]);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    linksRef.current.forEach((link) => {
      if (link) observer.observe(link);
    });

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
     
      linksRef.current.forEach((link) => {
        if (link) observer.unobserve(link);
      });
    };
  }, []);

  const handleDownloadCV = () => {
    // Création d'un élément <a> pour télécharger le PDF
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'Iyanou-Eraste-Akande-CV.pdf'; // Nom du fichier lors du téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const profileLinks = [
    {
      title: "LinkedIn",
      icon: <Linkedin size={24} />,
      description: "Consultez mon profil professionnel et mon réseau",
      url: "https://www.linkedin.com/in/iyanou-eraste-akande",
      color: "#0077B5",
    },
    {
      title: "Upwork",
      icon: <Globe size={24} />,
      description: "Découvrez mes prestations et avis clients",
      url: "https://www.upwork.com/freelancers/~018b666e20302c5287",
      color: "#6FDA44",
    },
    {
      title: "Elastic Gold",
      icon: <Award size={24} />,
      description: "Ma contribution en tant qu'Elastic Gold Contributor",
      url: "https://www.elastic.co/fr/community/contributors",
      color: "#FEC514",
    },
    {
      title: "Formation Udemy",
      icon: <BarChart size={24} />,
      description: "Maîtriser Elasticsearch : De l'Initiation à la Certification",
      url: "https://www.udemy.com/course/maitriser-elasticsearch/?couponCode=ST7MT290425G1",
      color: "#EA5252",
    }
  ];

  return (
    <section id="profileLinks" className="profile-links-section" aria-labelledby="profile-links-heading">
      <div className="profile-links-container" ref={containerRef}>
        <h2 id="profile-links-heading" className="section-title">Me Suivre & Me Contacter</h2>
        <p className="section-subtitle">Retrouvez mon parcours professionnel et mes prestations sur ces plateformes</p>
       
        <div className="cv-download-container">
          <button
            className="cv-download-button"
            onClick={handleDownloadCV}
            aria-label="Télécharger mon CV"
          >
            <FileText size={20} />
            <span>Télécharger mon CV</span>
          </button>
          <p className="cv-description">Un aperçu complet de mon parcours et de mes compétences techniques</p>
        </div>
       
        <div className="profile-links-grid">
          {profileLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.url}
              className="profile-link-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter mon profil ${link.title}`}
              ref={el => linksRef.current[index] = el}
              style={{'--accent-color': link.color}}
            >
              <div className="link-icon">{link.icon}</div>
              <div className="link-content">
                <h3 className="link-title">{link.title}</h3>
                <p className="link-description">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileLinks;