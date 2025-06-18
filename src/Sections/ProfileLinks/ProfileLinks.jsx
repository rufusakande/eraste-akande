import { useEffect, useRef } from 'react';
import { Linkedin, Award, FileText, Globe, BarChart } from 'lucide-react';
import './ProfileLinks.css';
// Import CV file
import cvPDF from '../../assets/PDF/CV_Eraste_AKANDE.pdf'; // Make sure the path is correct according to your folder structure
import { Link } from 'react-router-dom';

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
    // Create an <a> element to download the PDF
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'Iyanou-Eraste-Akande-CV.pdf'; // File name when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const profileLinks = [
    {
      title: "LinkedIn",
      icon: <Linkedin size={24} />,
      description: "View my professional profile and network",
      url: "https://www.linkedin.com/in/iyanou-eraste-akande",
      color: "#0077B5",
    },
    {
      title: "Upwork",
      icon: <Globe size={24} />,
      description: "Discover my services and client reviews",
      url: "https://www.upwork.com/freelancers/~018b666e20302c5287",
      color: "#6FDA44",
    },
    {
      title: "Elastic Gold",
      icon: <Award size={24} />,
      description: "My contribution as an Elastic Gold Contributor",
      url: "https://www.elastic.co/fr/community/contributors",
      color: "#FEC514",
    },
    {
      title: "Udemy Training",
      icon: <BarChart size={24} />,
      description: "Master Elasticsearch: From Beginner to Certification",
      url: "https://www.udemy.com/course/maitriser-elasticsearch/?couponCode=ST7MT290425G1",
      color: "#EA5252",
    }
  ];

  return (
    <section id="profileLinks" className="profile-links-section" aria-labelledby="profile-links-heading">
      <div className="profile-links-container" ref={containerRef}>
        <h2 id="profile-links-heading" className="section-title">Follow Me & Contact Me</h2>
        <p className="section-subtitle">Find my professional journey and services on these platforms</p>
       
        <div className="cv-download-container">
          <button
            className="cv-download-button"
            onClick={handleDownloadCV}
            aria-label="Download my CV"
          >
            <FileText size={20} />
            <span>Download my CV</span>
          </button>
          <p className="cv-description">A comprehensive overview of my journey and technical skills</p>
        </div>
       
        <div className="profile-links-grid">
          {profileLinks.map((link, index) => (
            <Link
              key={link.title}
              to={link.url}
              className="profile-link-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${link.title} profile`}
              ref={el => linksRef.current[index] = el}
              style={{'--accent-color': link.color}}
            >
              <div className="link-icon">{link.icon}</div>
              <div className="link-content">
                <h3 className="link-title">{link.title}</h3>
                <p className="link-description">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileLinks;