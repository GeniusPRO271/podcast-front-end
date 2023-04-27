import React, { useEffect } from 'react';
import './ebyb.css';

function Ebyb({ programa }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ebyb_show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.ebyb_hidden');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <div className="ebyb_container ebyb_hidden">
      <div className="ebyb_layout">
        <div className="ebyb_leftside">
          <img className="ebyb_image_style" src={programa.imagesMain} />
        </div>
        <div className="ebyb_center">
          <div className="ebyb_description_container">
            <p className="ebyb_description">{programa.description}</p>
          </div>
          <div className="ebyb_button_continer">
            <a href={programa.youtubeLink} className="ebyb_button">
              VER MAS
            </a>
            <a href={programa.brochure} className="ebyb_info_container">
              <i className="fa-solid fa-info"></i>
            </a>
          </div>
        </div>
        <div className="ebyb_rightside">
          <div className="ebyb_title"> INVITADOS</div>
          <div className="ebyb_top_row_imgs">
            <img
              className="ebyb_image_invitados_style"
              src={programa.images[0]}
            />
            <img
              className="ebyb_image_invitados_style_1"
              src={programa.images[1]}
            />
          </div>
          <div className="ebyb_bottom_row_imgs">
            <img
              className="ebyb_image_invitados_style_1"
              src={programa.images[2]}
            />
            <img
              className="ebyb_image_invitados_style"
              src={programa.images[3]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ebyb;
