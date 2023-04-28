import React from 'react';
import Footer from '../../components/footer/footer';
import './auspicios.css';
function Auspicios() {
  const sponsorLogos = [
    '../../../public/auspicios/0.png',
    '../../../public/auspicios/1.png',
    '../../../public/auspicios/2.png',
    '../../../public/auspicios/3.png',
    '../../../public/auspicios/4.png',
    '../../../public/auspicios/5.png',
    '../../../public/auspicios/6.png',
    '../../../public/auspicios/7.png',
    '../../../public/auspicios/8.png',
    '../../../public/auspicios/9.png',
    '../../../public/auspicios/10.png',
    '../../../public/auspicios/11.png',
    '../../../public/auspicios/12.png',
    '../../../public/auspicios/13.png',
    '../../../public/auspicios/14.png',
    '../../../public/auspicios/15.png',
    // Add more logos here as needed
  ];
  return (
    <div>
      <header>
        <div className="aus_buttons_container">
          <div className="aus_ack_arrow">
            <a href="/" className="aus_icon_container">
              <i className="fa-solid fa-arrow-left fa-2x"></i>
            </a>
          </div>
          <div className="aus_patreon_button_container">
            <a
              href="https://www.patreon.com/elsentidodelhumor"
              className="aus_patreon_button"
            >
              <span className="aus_button_text">CONTENIDO EXCLUSIVO</span>
              <i className="fa-brands fa-patreon"></i>
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="spon_text">
          <p className="spon_title">AUSPICIOS</p>
          <p className="spon_description">
            Algunas de las empresas que han confiado en nosotros. ¿Quieres
            anunciar en nuestros programas? Escríbenos a contacto@esdh.cl
          </p>
        </div>
        <div className="images_container">
          {sponsorLogos.map((logo, index) => (
            <div key={index} className="sponsor-logo-container">
              <img
                className="spon_img_style"
                key={index}
                src={logo}
                alt={`Sponsor ${index}`}
              />
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Auspicios;
