import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_text">
        Copyright © ElSentidoDelHumor.cl | Desarrollado por{' '}
        <a
          className="footer_link"
          href="https://www.linkedin.com/in/benjamin-toro-25266b259/"
          target="_blank"
        >
          Benjamin Toro
        </a>
      </div>
    </div>
  );
}

export default Footer;
