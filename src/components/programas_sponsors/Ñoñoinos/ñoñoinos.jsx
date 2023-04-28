import React, { useEffect } from 'react';
import './ñoñoinos.css';
function Ñoñoinos({ programa }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ñoño_show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.ñoño_hidden');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <div className="ñoño_container ñoño_hidden">
      <div className="ñoño_layout">
        <div className="ñoño_leftside">
          <img className="ñoño_image_style" src={programa.imagesMain} />
        </div>
        <div className="ñoño_rightside">
          <div className="ñoño_description_container">
            <p className="ñoño_description">{programa.description}</p>
          </div>
          <div className="ñoño_button_container">
            <a href={programa.youtubeLink} className="ñoño_button">
              VER MAS
            </a>
            <a href={programa.brochure} className="ñoño_info_container">
              <i className="fa-solid fa-info"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ñoñoinos;
