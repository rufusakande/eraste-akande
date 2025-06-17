// Header.jsx - Corrected version
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close menu and restore scroll when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  }, [location.pathname]);

  // Effect to clean up overflow style on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    if (newMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // New function to handle link clicks
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'auto';
  };

  const navItems = [
    { title: 'Home', link: '/' },
    { 
      title: 'Services', 
      link: '/services',
      dropdown: [
        { title: 'Solutions', link: '/services/solution' },
        { title: 'Consulting', link: '/services/consulting' },
        { title: 'Training', link: '/services/training' }
      ]
    },
    { title: 'About', link: '/about' },
    { title: 'Skills', link: '/skills' },
    { title: 'Portfolio', link: '/portfolio' },
    { title: 'Contact', link: '/contact' }
  ];

  return (
      <header id="header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <a href="/" aria-label="Home">
              <span className="logo-text">Iyanou Eraste AKANDE</span>
              <span className="logo-subtitle">Data Engineer | Elasticsearch Consultant</span>
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
                            <Link 
                              style={{color:'black'}} 
                              to={dropItem.link}
                              onClick={handleLinkClick}
                            >
                              {dropItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={item.link} onClick={handleLinkClick}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button className="search-button" aria-label="Search">
              <Search size={20} />
            </button>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
                          <Link to={dropItem.link} onClick={handleLinkClick}>
                            {dropItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.link} onClick={handleLinkClick}>{item.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
  );
};

export default Header;