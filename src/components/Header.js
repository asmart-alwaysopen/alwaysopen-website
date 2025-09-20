import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on load in case already scrolled

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    // Only handle smooth scroll if we're on the home page
    if (location.pathname === '/') {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header>
      <nav className={`container ${isScrolled ? 'scrolled-nav' : ''}`}>
        <div className="logo">
          <Link to="/">Always Open</Link>
        </div>
        <div className="nav-links">
          <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>Features</a>
          <a href="#howitworks" onClick={(e) => handleSmoothScroll(e, '#howitworks')}>How it Works</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
        </div>
        <div className="auth-buttons">
          <a href="#contact" className="signup-btn" onClick={(e) => handleSmoothScroll(e, '#contact')}>Book a Demo</a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 