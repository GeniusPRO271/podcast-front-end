import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
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
        <div className="toggle_button">
          <i
            className={`fa-solid ${
              toggle ? 'fa-bars' : 'fa-xmark'
            } fa-lg toggle_icon`}
            onClick={() => setToggle((prev) => !prev)}
          ></i>
        </div>
        <ul className="nav-links">
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
        </ul>
      </nav>
      <div className="toggle_content" style={{ display: toggle && 'none' }}>
        <ul className="nav-links_mobile">
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
        </ul>
      </div>
    </>
  );
}

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
