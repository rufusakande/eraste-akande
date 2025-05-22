import { useState, useEffect } from 'react';
import './ExpertisePage.css';
import ExpertiseHero from '../ExpertiseHero/ExpertiseHero';
import TechStack from '../TechStack/TechStack';
import Services from '../Services/Services';
import CallToAction from '../CallToAction/CallToAction';
import Expertise from '../Expertise/Expertise';

const ExpertisePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure animations work properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="expertise-page" className={`expertise-page ${isLoaded ? 'loaded' : ''}`}>
      <div className="expertise-page__container">
        <ExpertiseHero />
        <Expertise/>
        <CallToAction />
      </div>
    </main>
  );
};

export default ExpertisePage;