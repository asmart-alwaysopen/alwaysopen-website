import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  
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
    <footer>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className="logo" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Always Open</Link>
          </div>
          <div className="footer-bottom" style={{ textAlign: 'left', paddingTop: 0, borderTop: 'none', color: 'var(--text-secondary)', fontSize: '1rem' }}>
            <p style={{ margin: 0 }}>&copy; 2025 Always Open. All rights reserved.</p>
          </div>
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontSize: '1.1rem', fontWeight: 500 }}>
          <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>Features</a>
          {/* <a href="#pricing" onClick={(e) => handleSmoothScroll(e, '#pricing')}>Pricing</a> */}
          <a href="#howitworks" onClick={(e) => handleSmoothScroll(e, '#howitworks')}>How it Works</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
          <Link to="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</Link>
          <Link to="/terms-of-use" style={{ textDecoration: 'none', color: 'inherit' }}>Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 