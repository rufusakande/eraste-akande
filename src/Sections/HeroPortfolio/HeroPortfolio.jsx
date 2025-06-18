import React, { useEffect, useRef } from 'react';
import './HeroPortfolio.css';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroPortfolio = () => {
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Immediate addition of animate classes for elements already visible
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const elements = [titleRef.current, subtitleRef.current, ctaRef.current, imageRef.current];
    elements.forEach(el => {
      if (el && isInViewport(el)) {
        el.classList.add('animate');
      }
    });

    // IntersectionObserver configuration for elements entering the view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (contentRef.current) observer.observe(contentRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="hero-portfolio" aria-labelledby="hero-title">
      <div className="hero-portfolio__container">
        <div ref={contentRef} className="hero-portfolio__content">
          <h1 ref={titleRef} className="hero-portfolio__title" id="hero-title">
             Elasticsearch & Telecommunications at the service of performance
          </h1>
          <p ref={subtitleRef} className="hero-portfolio__subtitle">
            Discover my optimization and Elastic Stack implementation projects that have enabled my clients to improve their decision-making and operational performance.
          </p>
          <div ref={ctaRef} className="hero-portfolio__cta">
            <Link to="#projects" className="hero-portfolio__button">
              Explore my projects <ChevronRight size={18} />
            </Link>
          </div>
        </div>
        <div ref={imageRef} className="hero-portfolio__illustration">
          <div className="hero-portfolio__image-container">
            <div className="hero-portfolio__blob"></div>
            <div className="hero-portfolio__dashboard"></div>
            <div className="hero-portfolio__data-points">
              <span className="hero-portfolio__data-point"></span>
              <span className="hero-portfolio__data-point"></span>
              <span className="hero-portfolio__data-point"></span>
              <span className="hero-portfolio__data-point"></span>
              <span className="hero-portfolio__data-point"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;