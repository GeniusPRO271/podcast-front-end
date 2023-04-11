import React, { useEffect, useState } from 'react';
import './programas.css';
function Programas() {
  const [series, setSeries] = useState('');
  async function getProgramas() {
    const response = await fetch('http://localhost:3000/series');
    const data = await response.json();
    console.log(data);
    setSeries(data);
  }

  useEffect(() => {
    getProgramas();
  }, []);
  return (
    <div className="programas_container">
      <div className="program_title_container">
        <div className="programas_container_text">
          PROGRAMAS <span style={{ color: '#00D6F2' }}> & </span> ESPECIALES
        </div>
        <div>
          <div class="icon-box">
            <div class="icon-container">
              <i class="fa-solid fa-angle-left icon fa-lg"></i>
            </div>
          </div>

          <div class="icon-box">
            <div class="icon-container">
              <i class="fa-solid fa-angle-right icon fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
      {series && (
        <div className="columns" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {series.map((d, index) => {
            return (
              <div
                className={`column program_container ${
                  index !== 0 ? 'program_container_if_not_first' : ''
                }`}
                key={d._id}
              >
                {console.log(d)}
                <figure className="image">
                  <img src={d.imagesMain} className="image-cover" />
                </figure>
                <div className="program_text_container">
                  <p className="program_description">
                    109 capitulos <br></br>
                    <span className="program_title">
                      {d.title.toUpperCase()}
                    </span>
                    <br></br>asdas
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Programas;
