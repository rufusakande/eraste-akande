// Header.jsx - Version modifiée avec AutoTranslate
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    { title: 'Accueil', link: '/' },
    { 
      title: 'Services', 
      link: '/services',
      dropdown: [
        { title: 'Solutions', link: '/services/solution' },
        { title: 'Consultation', link: '/services/consulting' },
        { title: 'Formation', link: '/services/training' }
      ]
    },
    { title: 'À propos', link: '/about' },
    { title: 'Compétences', link: '/skills' },
    { title: 'Portfolio', link: '/portfolio' },
    { title: 'Contact', link: '/contact' }
  ];

  return (
      <header id="header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <a href="/" aria-label="Accueil">
              <span className="logo-text">Iyanou Eraste AKANDE</span>
              <span className="logo-subtitle">Ingénieur de données | Consultant Elasticsearch</span>
            </a>
          </div>
          
          <nav className={`nav-desktop ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}>
                  {item.dropdown ? (
                    <>
                      <button 
                        className="dropdown-toggle"
                        onClick={() => toggleDropdown(index)}
                        aria-expanded={activeDropdown === index}
                        aria-haspopup="true"
                      >
                        {item.title}
                        <ChevronDown size={16} className={`dropdown-icon ${activeDropdown === index ? 'rotate' : ''}`} />
                      </button>
                      <ul className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <li key={dropIndex} className="dropdown-item">
                            <Link style={{color:'black'}} to={dropItem.link}>{dropItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button className="search-button" aria-label="Rechercher">
              <Search size={20} />
            </button>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              style={{color:'white', position:'absolute', top:'20px', right:'20px'}}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={24} />}
            </button>
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                {item.dropdown ? (
                  <>
                    <button 
                      className="mobile-dropdown-toggle"
                      onClick={() => toggleDropdown(index)}
                      aria-expanded={activeDropdown === index}
                    >
                      {item.title}
                      <ChevronDown size={16} className={`dropdown-icon ${activeDropdown === index ? 'rotate' : ''}`} />
                    </button>
                    <ul className={`mobile-dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <li key={dropIndex} className="mobile-dropdown-item">
                          <Link to={dropItem.link}>{dropItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.link}>{item.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
  );
};

export default Header;