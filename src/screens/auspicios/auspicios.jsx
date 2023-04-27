import React, { useEffect, useState } from 'react';
import './auspicios.css';
import Sponsosrs from '../../components/sponsors/sponsors';
import Footer from '../../components/footer/footer';
function Auspicios() {
  const [programas, setProgramas] = useState();
  useEffect(() => {
    async function getSeries() {
      const response = await fetch('http://localhost:3000/series');
      const data = await response.json();
      setProgramas(data);
    }
    getSeries();
  }, []);
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
