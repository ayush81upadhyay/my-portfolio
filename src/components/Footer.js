import React from 'react';
import './Footer.css';

function Footer({ name }) {
  return (
    <footer className="footer">
      <p>Designed &amp; Built by <a href="https://www.linkedin.com/in/ayush7upadhyay/" target="_blank" rel="noopener noreferrer">{name || 'Ayush Upadhyay'}</a></p>
    </footer>
  );
}

export default Footer;
