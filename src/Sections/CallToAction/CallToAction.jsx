import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './CallToAction.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={ctaRef}
      id="call-to-action" 
      className="call-to-action"
      aria-labelledby="cta-heading"
    >
      <div className="call-to-action__container">
        <div className="call-to-action__content">
          <h2 id="cta-heading" className="call-to-action__title">
            Ready to optimize your data infrastructure?
          </h2>
          <p className="call-to-action__description">
            Let's discuss your needs and find the right solution for your challenges together.
          </p>
          
          <div className="call-to-action__buttons">
            <Link to="/contact" className="call-to-action__button call-to-action__button--primary">
              Schedule an appointment <ArrowRight size={18} className="call-to-action__button-icon" aria-hidden="true" />
            </Link>
            <Link to="/services/training" className="call-to-action__button call-to-action__button--secondary">
              Discover my training
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;