import React, { useEffect, useState } from 'react';
import './programas.css';
import Sponsosrs from '../../components/sponsors/sponsors';
import Footer from '../../components/footer/footer';
function Programas({ programas }) {
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
      <main>{programas && <Sponsosrs programas={programas} />}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Programas;
