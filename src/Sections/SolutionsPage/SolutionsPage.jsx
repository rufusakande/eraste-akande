import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, BarChart, Server, CheckCircle, Users, Activity, Database } from 'lucide-react';
import './SolutionsPage.css';
import servicesReseauTelecomImg from '../../assets/Images/Optimisation_de_la_Qualite_de_Service_des_Reseaux_Mobiles.webp';
import SurveillanceAvanceInfrastructureImg from '../../assets/Images/Surveillance_Avance_Infrastructure_Cloud.webp';
import TransformationDonneesImg from '../../assets/Images/Transformation_des_Donnees.webp';
import { Link } from 'react-router-dom';

function SolutionsPage () {
  // Refs for animation elements
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const processRef = useRef(null);
  const casesRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all section elements
    [heroRef, solutionsRef, processRef, casesRef, ctaRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up
    return () => {
      [heroRef, solutionsRef, processRef, casesRef, ctaRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <main id="solutions">
      {/* Hero Section */}
      <section ref={heroRef} className="solutions-hero" aria-labelledby="solutions-heading">
        <div className="solutions-container">
          <h1 id="solutions-heading">Custom Solutions for Your Data</h1>
          <p>Transform your data into strategic levers with tailor-made solutions designed by a certified Elasticsearch expert.</p>
          <div className="solutions-cta">
            <Link to="/contact" className="solutions-primary-btn" aria-label="Discuss your project">
              Discuss your project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section ref={solutionsRef} className="solutions-main" aria-labelledby="main-solutions-heading">
        <div className="solutions-container">
          <h2 id="main-solutions-heading">Expert Solutions</h2>
          <p className="solutions-subtitle">Complete and personalized solutions to meet your data infrastructure challenges.</p>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <Server aria-hidden="true" />
              </div>
              <h3>Intelligent monitoring of 2G/3G/4G network quality of service</h3>
              <p>Optimize your telecom networks with dynamic dashboards. Through automated collection of OMC-R files and visual analysis via the ELK suite (Elasticsearch, Logstash, Kibana), we help you effectively monitor the quality of your mobile networks.</p>
              <ul className="solution-features">
                <li><CheckCircle size={16} aria-hidden="true" /> Dynamic dashboards</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Automated collection</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Visual analysis</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <Activity aria-hidden="true" />
              </div>
              <h3>Complete observability of your systems</h3>
              <p>Keep an eye on every aspect of your infrastructure. With Beats, Elasticsearch, and Kibana, we collect and analyze logs, metrics, and uptime for real-time visibility and intelligent alerts.</p>
              <ul className="solution-features">
                <li><CheckCircle size={16} aria-hidden="true" /> Real-time monitoring</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Intelligent alerts</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Log and metrics analysis</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <Database aria-hidden="true" />
              </div>
              <h3>Data valorization through analysis and visualization</h3>
              <p>Transform your data into strategic information. We implement data collection, processing, and visualization pipelines from any source with Logstash, Elasticsearch, and Kibana for informed decision-making.</p>
              <ul className="solution-features">
                <li><CheckCircle size={16} aria-hidden="true" /> Data pipelines</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Interactive visualizations</li>
                <li><CheckCircle size={16} aria-hidden="true" /> Decision support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section ref={processRef} className="solutions-process" aria-labelledby="process-heading">
        <div className="solutions-container">
          <h2 id="process-heading">Implementation Process</h2>
          <p className="solutions-subtitle">A methodical approach to guarantee the success of your project.</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Needs Analysis</h3>
              <p>Thorough evaluation of your existing infrastructure and identification of key objectives to achieve.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Solution Design</h3>
              <p>Development of a personalized architecture meeting your technical and functional requirements.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Deployment & Configuration</h3>
              <p>Implementation of Elastic Stack components and integration into your existing environment.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Training & Support</h3>
              <p>Knowledge transfer to your teams and ongoing support for progressive autonomy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="solutions-cases" aria-labelledby="cases-heading">
        <div className="solutions-container">
          <h2 id="cases-heading">Case Studies</h2>
          <p className="solutions-subtitle">Concrete solutions that solve real problems.</p>
          
          {/* Case Study 1 - Matching the first solution */}
          <div className="case-study">
            <div className="case-content">
              <h3>Mobile Network Quality of Service Optimization</h3>
              <p className="case-client"><Users size={16} aria-hidden="true" /> National Telecom Operator</p>
              <p>Implementation of an intelligent monitoring solution to optimize 2G/3G/4G network performance and improve user experience.</p>
              <h4>Results:</h4>
              <ul>
                <li>40% reduction in incident identification times</li>
                <li>25% improvement in perceived quality of service</li>
                <li>Centralized dashboards for decision-making</li>
              </ul>
              <Link to="/contact" className="case-link">Learn more <ArrowRight size={16} /></Link>
            </div>
            <div className="case-image" aria-hidden="true">
              <div className="case-placeholder">
                <img 
                  src={servicesReseauTelecomImg}
                  alt="Mobile Network Quality of Service Optimization" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Case Study 2 - Matching the second solution */}
          <div className="case-study" style={{ marginTop: "2rem" }}>
            <div className="case-image" aria-hidden="true">
              <div className="case-placeholder">
                <img 
                  src={SurveillanceAvanceInfrastructureImg}
                  alt="Advanced Cloud Infrastructure Monitoring" 
                  loading="lazy"
                />
              </div>
            </div>
            <div className="case-content">
              <h3>Advanced Cloud Infrastructure Monitoring</h3>
              <p className="case-client"><Users size={16} aria-hidden="true" /> SaaS Company</p>
              <p>Deployment of a complete observability solution to monitor and optimize a critical cloud infrastructure hosting business applications.</p>
              <h4>Results:</h4>
              <ul>
                <li>Proactive anomaly detection reducing downtime by 60%</li>
                <li>Complete visibility on application performance</li>
                <li>20% reduction in infrastructure costs through optimization</li>
              </ul>
              <Link to="/contact" className="case-link">Learn more <ArrowRight size={16} /></Link>
            </div>
          </div>
          
          {/* Case Study 3 - Matching the third solution */}
          <div className="case-study" style={{ marginTop: "2rem" }}>
            <div className="case-content">
              <h3>Transforming Data into Business Insights</h3>
              <p className="case-client"><Users size={16} aria-hidden="true" /> Distribution Group</p>
              <p>Creation of a commercial data analysis and visualization platform to optimize strategic and operational decisions.</p>
              <h4>Results:</h4>
              <ul>
                <li>15% increase in revenue through customer insights</li>
                <li>Inventory optimization based on predictive analysis</li>
                <li>Personalized dashboards by department for better decision-making</li>
              </ul>
              <a href="/contact" className="case-link">Learn more <ArrowRight size={16} /></a>
            </div>
            <div className="case-image" aria-hidden="true">
              <div className="case-placeholder">
                <img 
                  src={TransformationDonneesImg}
                  alt="Transforming Data into Business Insights"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="solutions-cta-section" aria-labelledby="cta-heading">
        <div className="solutions-container">
          <h2 id="cta-heading">Ready to Transform Your Data into Strategic Advantage?</h2>
          <p>Let's discuss your project and solutions adapted to your specific needs together.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="solutions-primary-btn">
              Request a consultation <ArrowRight size={18} />
            </Link>
            <Link to="/skills" className="solutions-secondary-btn">
              Discover my expertise
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage;