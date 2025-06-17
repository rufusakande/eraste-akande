// Footer.jsx
import { useState } from 'react';
import { Linkedin, Twitter, Mail, Github, MapPin, Phone, ArrowRight, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check when user has scrolled enough to show back to top button
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
    // Logic to process newsletter subscription
    alert(`Thank you for subscribing with email: ${email}`);
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
            <p className="footer-tagline">Data Engineer | Elasticsearch Consultant | Trainer</p>
            <p className="footer-description">
              Expert in data engineering and Elasticsearch technologies, offering consulting 
              and training services to optimize your data solutions.
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
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><a href="/services/data-engineering">Data Engineering</a></li>
                <li><a href="/services/elasticsearch-consulting">Elasticsearch Consulting</a></li>
                <li><a href="/services/elasticsearch-training">Elasticsearch Training</a></li>
                <li><a href="/services/data-analysis">Data Analysis</a></li>
                <li><a href="/services/big-data">Big Data Solutions</a></li>
              </ul>
            </div>

            <div className="footer-links-column footer-contact">
              <h4>Contact</h4>
              <ul>
                <li>
                  <MapPin size={16} />
                  <span>Morocco</span>
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
            <p>Subscribe to receive my latest articles and tips on data engineering and Elasticsearch.</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" aria-label="Subscribe to newsletter">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Iyanou Eraste AKANDE. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
        </div>
      </div>

      <button 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;