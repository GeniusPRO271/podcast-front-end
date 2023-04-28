import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setActiveWall }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dpoefum0k/image/upload/v1680084810/podcast-api/LogoESDH2022_se2vuk.png"
            alt="Logo"
          />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/programas">Programas</a>
          </li>
          <li>
            <a
              onClick={() => {
                setActiveWall('show');
              }}
            >
              Próximos Shows
            </a>
          </li>
          <li>
            <a href="https://mokingskills.com/collections/esdh" target="_blank">
              Tienda
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActiveWall('contacto');
              }}
            >
              Contacto
            </a>
          </li>
          <li>
            <a href="auspicios">Auspicios</a>
          </li>
        </ul>
        <div className="patreon_button_container">
          <a
            href="https://www.patreon.com/elsentidodelhumor"
            className="patreon_button"
          >
            <span className="button_text">CONTENIDO EXCLUSIVO</span>
            <i className="fa-brands fa-patreon"></i>
          </a>
        </div>
      </nav>
      <nav className="navbar_mobile_content">
        <div className="navbar_mobile">
          <div className="logo_mobile">
            <img
              src="https://res.cloudinary.com/dpoefum0k/image/upload/v1680084810/podcast-api/LogoESDH2022_se2vuk.png"
              alt="Logo"
            />
          </div>
          <div className="toggle_button">
            <i
              className={`fa-solid ${
                toggle ? 'fa-bars' : 'fa-xmark'
              } fa-lg toggle_icon`}
              onClick={() => setToggle((prev) => !prev)}
            ></i>
          </div>
        </div>
        <div
          className="toggle_content"
          style={{
            height: !toggle ? '220px' : '0px',
            background: !toggle && '#01051D',
            borderRadius: 30,
          }}
        >
          <ul className="nav-links_mobile">
            <li>
              <a style={{ opacity: !toggle && 1 }} href="/programas">
                Programas
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActiveWall('show');
                }}
                style={{ opacity: !toggle && 1 }}
                href="#"
              >
                Próximos Shows
              </a>
            </li>
            <li>
              <a
                style={{ opacity: !toggle && 1 }}
                target="_blank"
                href="https://mokingskills.com/collections/esdh"
              >
                Tienda
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActiveWall('contacto');
                }}
                style={{ opacity: !toggle && 1 }}
              >
                Contacto
              </a>
            </li>
            <li>
              <a style={{ opacity: !toggle && 1 }} href="auspicios">
                Auspicios
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
