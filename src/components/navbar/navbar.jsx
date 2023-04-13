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
            <a href="#">Programas</a>
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
            <a href="#">Últimos Videos</a>
          </li>
          <li>
            <a href="#">Patreon y Tienda</a>
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
            <a href="#">Auspicios</a>
          </li>
        </ul>
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
            height: !toggle && '260px',
            background: !toggle && '#01051D',
            borderRadius: 30,
          }}
        >
          <ul className="nav-links_mobile">
            <li>
              <a style={{ opacity: !toggle && 1 }} href="#">
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
              <a style={{ opacity: !toggle && 1 }} href="#">
                Últimos Videos
              </a>
            </li>
            <li>
              <a style={{ opacity: !toggle && 1 }} href="#">
                Patreon y Tienda
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActiveWall('contacto');
                }}
                style={{ opacity: !toggle && 1 }}
                href="#"
              >
                Contacto
              </a>
            </li>
            <li>
              <a style={{ opacity: !toggle && 1 }} href="#">
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
{
  /* <ul className="nav-links">
        <li>
          <a href="#">Programas</a>
        </li>
        <li>
          <a href="#">Próximos Shows</a>
        </li>
        <li>
          <a href="#">Últimos Videos</a>
        </li>
        <li>
          <a href="#">Patreon y Tienda</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Auspicios</a>
        </li>
      </ul> */
}
