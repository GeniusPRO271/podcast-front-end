import React, { useEffect } from 'react';
import './Ecldp.css';

function Ecldp({ programa }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log('works');
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ecldp_show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.ecldp_hidden');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <div className="ecldp_container ecldp_hidden">
      <div className="ecdlp_layout">
        <div className="ecdlp_left">
          <div className="text_container">
            <p>{programa.description}</p>
          </div>
          <div className="button_container">
            <p className="ecdlp_button">AUSPICIAR</p>
            <a href={programa.brochure} className="ecdlp_info_container">
              <i className="fa-solid fa-info"></i>
            </a>
          </div>
        </div>
        <div className="ecdlp_right">
          <div className="ecdlp_image_container">
            <img className="img_style" src={programa.images[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecldp;
