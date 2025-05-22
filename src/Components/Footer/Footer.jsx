// Footer.jsx
import { useState } from 'react';
import { Linkedin, Twitter, Mail, Github, MapPin, Phone, ArrowRight, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Vérifier quand l'utilisateur a défilé suffisamment pour afficher le bouton de retour en haut
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 300);
    });
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour traiter l'abonnement à la newsletter
    alert(`Merci de vous être abonné avec l'email: ${email}`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Iyanou Eraste AKANDE</h3>
            <p className="footer-tagline">Ingénieur de données | Consultant Elasticsearch | Formateur</p>
            <p className="footer-description">
              Expert en engineering de données et technologies Elasticsearch, offrant des services 
              de consultation et de formation pour optimiser vos solutions de données.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/" aria-label="LinkedIn" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/" aria-label="Twitter" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/" aria-label="GitHub" className="social-icon">
                <Github size={20} />
              </a>
              <a href="mailto:contact@example.com" aria-label="Email" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">À propos</a></li>
                <li><a href="/skills">Compétences</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><a href="/services/data-engineering">Engineering de données</a></li>
                <li><a href="/services/elasticsearch-consulting">Consultation Elasticsearch</a></li>
                <li><a href="/services/elasticsearch-training">Formation Elasticsearch</a></li>
                <li><a href="/services/data-analysis">Analyse de données</a></li>
                <li><a href="/services/big-data">Solutions Big Data</a></li>
              </ul>
            </div>

            <div className="footer-links-column footer-contact">
              <h4>Contact</h4>
              <ul>
                <li>
                  <MapPin size={16} />
                  <span>Maroc</span>
                </li>
                <li>
                  <Phone size={16} />
                  <span>+212 658 15 28 58</span>
                </li>
                <li>
                  <Mail size={16} />
                  <span>eraste@erasteakande.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Abonnez-vous pour recevoir mes derniers articles et conseils sur l'engineering de données et Elasticsearch.</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={handleEmailChange}
                required
                aria-label="Adresse email pour la newsletter"
              />
              <button type="submit" aria-label="S'abonner à la newsletter">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Iyanou Eraste AKANDE. Tous droits réservés.</p>
          </div>
          <div className="footer-legal">
            <a href="/privacy">Politique de confidentialité</a>
            <a href="/terms">Conditions d'utilisation</a>
          </div>
        </div>
      </div>

      <button 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Retour en haut de page"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;