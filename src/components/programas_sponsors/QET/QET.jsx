import React, { useEffect } from 'react';
import './QET.css';

function Qet({ programa }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('qet_show');
          document.getElementById('qet_layout').style.animation =
            'move-up 1.5s ease-in-out forwards';
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.qet_hidden');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div id="bg_handeler" className="qet_container qet_hidden">
      <div className="container_box">
        <div className="box"></div>
      </div>
      <div id="qet_layout" className="qet_layout">
        <div className="qet_left_side">
          <div className="text_zone_container">
            <div className="text_zone_layout">
              <p>
                El Coronel, Arayita y Catalin presentan el nuevo programa de
                ESDH Producciones que NO es un matinal, con secciones, temas de
                conversación y todo lo necesario para partir bien la semana.
              </p>
            </div>
          </div>
          <div className="qet_aus_button">
            <a className="qet_button">AUSPICIAR</a>
            <a href={programa.brochure} className="qet_info_container">
              <i className="fa-solid fa-info"></i>
            </a>
          </div>
        </div>
        <div className="qet_right_side">
          <div className="qet_right_layout">
            <div className="qet_image_layout">
              <img className="qet_image_style" src={programa.imagesMain} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qet;
