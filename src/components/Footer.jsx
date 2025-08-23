import React from 'react';
import './Footer.css';

function Footer({ content }) {
  return (
    <footer className="site-footer-sticky" id="contact">
      <div className="contact-info">
        <p>{content.name}</p>
        <a href={`mailto:${content.email}`}>{content.email}</a>
      </div>
      <div className="copyright">
        {content.copyright}
      </div>
    </footer>
  );
}

export default Footer;