import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PortfolioCTA.css';

const PortfolioCTA = () => {
  return (
    <section id="portfolio-cta" className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Prêt à optimiser votre infrastructure de données?</h2>
          <p className="cta-description">
            Discutons de votre projet et voyons comment mon expertise en Elasticsearch peut transformer 
            vos données en avantage stratégique.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="cta-btn primary">
              Parlons de votre projet <ArrowRight size={20} />
            </Link>
            <Link to="/services/training" className="cta-btn secondary">
              Découvrir mes services
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