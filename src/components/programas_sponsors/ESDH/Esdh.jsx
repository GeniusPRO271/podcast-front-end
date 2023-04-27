import React, { useEffect } from 'react';
import './Esdh.css';

function Esdh({ programa }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('esdh_show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.esdh_hidden');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <div className="esdh_container esdh_hidden">
      <div className="esdh_layout">
        <div className="esdh_image_container">
          <img className="esdh_image_style" src={programa.images[0]} />
        </div>
        <div className="esdh_bottom_container ">
          <div className="esdh_text_container">
            <p className="esdh_description">{programa.description}</p>
          </div>
          <div className="esdh_spotify_contaier"></div>
        </div>
        <div className="esdh_aus_button">
          <a className="esdh_button">AUSPICIAR</a>
          <a href={programa.brochure} className="esdh_info_container">
            <i className="fa-solid fa-info"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Esdh;
