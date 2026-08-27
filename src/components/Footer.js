import React from 'react';
import './Footer.css';

function Footer({ name }) {
  return (
    <footer className="footer">
      <p>Designed &amp; Built by <span>{name || 'Ayush Upadhyay'}</span></p>
    </footer>
  );
}

export default Footer;
