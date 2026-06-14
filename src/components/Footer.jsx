import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-panel">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo" onClick={() => scrollTo('home')}>
            <Code className="logo-icon animate-pulse" />
            <span className="logo-text">Kushal<span className="accent-text">.RV</span></span>
          </div>
          
          <div className="footer-links">
            <button onClick={() => scrollTo('home')}>Home</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('skills')}>Skills</button>
            <button onClick={() => scrollTo('projects')}>Projects</button>
            <button onClick={() => scrollTo('certifications')}>Certifications</button>
            <button onClick={() => scrollTo('timeline')}>Timeline</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Kushal RV. All rights reserved. 
            Designed with premium glassmorphism.
          </p>

          <div className="footer-socials">
            <a href="https://github.com/KUSHAL-RV" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/r-v-kushal-aa0851288" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:cb.en.u4cce23065@cb.students.amrita.edu" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
