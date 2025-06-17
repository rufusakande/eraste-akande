import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PortfolioCTA.css';

const PortfolioCTA = () => {
  return (
    <section id="portfolio-cta" className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to optimize your data infrastructure?</h2>
          <p className="cta-description">
            Let's discuss your project and see how my Elasticsearch expertise can transform 
            your data into a strategic advantage.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="cta-btn primary">
              Let's talk about your project <ArrowRight size={20} />
            </Link>
            <Link to="/services/training" className="cta-btn secondary">
              Discover my services
            </Link>
          </div>
        </div>
        <div className="cta-decoration">
          <div className="cta-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;