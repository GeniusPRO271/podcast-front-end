import React, { useEffect, useState } from 'react';
import './auspicios.css';
import Sponsosrs from '../../components/sponsors/sponsors';
import Footer from '../../components/footer/footer';
function Auspicios({ programas }) {
  return (
    <div>
      <header>
        <div className="aus_ack_arrow">
          <a href="/" className="aus_icon_container">
            <i className="fa-solid fa-arrow-left fa-2x"></i>
          </a>
        </div>
      </header>
      <main>{programas && <Sponsosrs programas={programas} />}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Auspicios;
