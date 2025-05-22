// ContactHome.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, Linkedin, Globe, Award, BarChart } from 'lucide-react';
import './ContactHome.css';

const ContactHome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const profileLinksRef = useRef(null);

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
      title: "Email",
      icon: <Mail size={24} color="#007BFF" />,
      description: "eraste.akande@gmail.com",
      url: "mailto:eraste.akande@gmail.com",
      color: "#FEC514",
    }/* ,
    {
      title: "Formation Udemy",
      icon: <BarChart size={24} />,
      description: "Maîtriser Elasticsearch : De l'Initiation à la Certification",
      url: "https://www.udemy.com/course/maitriser-elasticsearch/?couponCode=ST7MT290425G1",
      color: "#EA5252",
    } */
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    if (profileLinksRef.current) {
      observer.observe(profileLinksRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
      if (profileLinksRef.current) {
        observer.unobserve(profileLinksRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler un envoi d'API
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contactHome" ref={sectionRef} className="contact-home-section">
      <div className="contact-home-container">
        <div className="contact-home-header">
          <h2 className="contact-home-title">Un projet en tête ?</h2>
          <div className="contact-home-title-underline"></div>
          <p className="contact-home-subtitle">
            Contactez-moi pour discuter de vos besoins en data et Elasticsearch
          </p>
        </div>

        {/* Section pour les liens de profil */}
        <div className="profile-links-section" ref={profileLinksRef}>
          <div className="profile-links-container">
            {profileLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-link-card"
                style={{'--accent-color': link.color}}
              >
                <div className="profile-link-icon">
                  {link.icon}
                </div>
                <div className="profile-link-content">
                  <h3 className="profile-link-title">{link.title}</h3>
                  <p className="profile-link-description">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* <div className="contact-home-content" ref={formRef}>
          <div className="contact-home-info">
            <div className="contact-home-info-item">
              <div className="contact-home-info-icon">
                <Mail size={24} color="#007BFF" />
              </div>
              <div className="contact-home-info-text">
                <h3 className="contact-home-info-title">Email</h3>
                <p className="contact-home-info-value">pro@iyanou.com</p>
              </div>
            </div>
            
            <div className="contact-home-info-item">
              <div className="contact-home-info-icon">
                <Phone size={24} color="#007BFF" />
              </div>
              <div className="contact-home-info-text">
                <h3 className="contact-home-info-title">LinkedIn</h3>
                <p className="contact-home-info-value">linkedin.com/in/iyanou-eraste-akande</p>
              </div>
            </div>
          </div>

          <form className="contact-home-form" onSubmit={handleSubmit}>
            {formSubmitted ? (
              <div className="contact-home-success">
                <svg viewBox="0 0 24 24" width="24" height="24" className="contact-home-success-icon">
                  <circle cx="12" cy="12" r="10" fill="#007BFF" />
                  <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                </svg>
                <p>Message envoyé avec succès ! Je vous recontacterai dès que possible.</p>
              </div>
            ) : (
              <>
                <div className="contact-home-form-group">
                  <label htmlFor="name" className="contact-home-form-label">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-home-form-input" 
                    placeholder="Votre nom" 
                    required 
                  />
                </div>
                
                <div className="contact-home-form-group">
                  <label htmlFor="email" className="contact-home-form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-home-form-input" 
                    placeholder="Votre email" 
                    required 
                  />
                </div>
                
                <div className="contact-home-form-group">
                  <label htmlFor="message" className="contact-home-form-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-home-form-textarea" 
                    placeholder="Comment puis-je vous aider ?" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`contact-home-form-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact-home-form-submit-text">Envoi en cours...</span>
                      <div className="contact-home-form-submit-loader"></div>
                    </>
                  ) : (
                    <>
                      <span className="contact-home-form-submit-text">Envoyer ma demande</span>
                      <Send size={18} className="contact-home-form-submit-icon" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default ContactHome;