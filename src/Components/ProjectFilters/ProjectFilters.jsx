// src/components/portfolio/ProjectFilters.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ProjectFilters.css';

const ProjectFilters = ({ categories, activeFilter, setActiveFilter }) => {
  const filtersRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isAnimated) {
        setIsAnimated(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.2 });

    if (filtersRef.current) {
      observer.observe(filtersRef.current);
    }

    return () => {
      if (filtersRef.current) {
        observer.unobserve(filtersRef.current);
      }
    };
  }, [isAnimated]);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <section id="project-filters" aria-labelledby="filters-heading">
      <div className="project-filters__container">
        <h2 id="filters-heading" className="project-filters__heading">
          Découvrez mes projets
        </h2>
        <div 
          ref={filtersRef} 
          className={`project-filters__filters ${isAnimated ? 'animate' : ''}`}
          role="tablist" 
          aria-label="Filtres de projets"
        >
          <button
            className={`project-filters__filter ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
            role="tab"
            aria-selected={activeFilter === 'all'}
            id="filter-all"
            aria-controls="projects-all"
          >
            Tous
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`project-filters__filter ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(category.id)}
              role="tab"
              aria-selected={activeFilter === category.id}
              id={`filter-${category.id}`}
              aria-controls={`projects-${category.id}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;