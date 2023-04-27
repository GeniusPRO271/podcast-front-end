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
      console.log(data);
      setProgramas(data);
    }
    getSeries();
  }, []);
  return (
    <div>
      <main>{programas && <Sponsosrs programas={programas} />}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Auspicios;
