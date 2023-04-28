import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './programas.css';

const Programas = ({ setVidBoxLink }) => {
  const [series, setSeries] = useState(null);

  const [clicked, setClicked] = useState(0);
  useEffect(() => {
    getProgramas();
  }, []);

  function getProgramas() {
    axios
      .get('http://localhost:3000/series')
      .then((response) => {
        const data = response.data;
        setSeries(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const programClick = (d, index) => {
    setClicked(index);
    setVidBoxLink(d.youtubeLink);
  };
  return (
    <div className="programas_container">
      <div className="program_title_container">
        <div className="programas_container_text">
          PROGRAMAS <span style={{ color: '#00D6F2' }}> & </span> ESPECIALES
        </div>
      </div>
      {series && (
        <div className="program_slider ">
          {series.map((d, index) => {
            return (
              <a
                key={index}
                onClick={() => {
                  programClick(d, index);
                }}
                className={`${
                  clicked == index ? ' program_selected' : ' program_container'
                }`}
                id={`slide-${index}`}
              >
                <img src={d.imagesMain} className="image-cover" />
                <div className="program_text_container">
                  <p className="program_description">
                    109 capitulos <br></br>
                    <span className="program_title">
                      {d.title.toUpperCase()}
                    </span>
                    <br></br>
                    {d.serieDays.map((d) => {
                      return ` ${d.toUpperCase()} `;
                    })}
                    <br></br>
                    {d.serieStart} - {d.serieEnd}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Programas;
