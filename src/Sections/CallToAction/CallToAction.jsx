import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './CallToAction.css';

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
            Prêt à optimiser votre infrastructure de données ?
          </h2>
          <p className="call-to-action__description">
            Discutons de vos besoins et trouvons ensemble la solution adaptée à vos enjeux.
          </p>
          
          <div className="call-to-action__buttons">
            <a href="/contact" className="call-to-action__button call-to-action__button--primary">
              Prendre rendez-vous <ArrowRight size={18} className="call-to-action__button-icon" aria-hidden="true" />
            </a>
            <a href="/services/training" className="call-to-action__button call-to-action__button--secondary">
              Découvrir mes formations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;