import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './programas.css';
const Programas = ({ setVidBoxLink }) => {
  const [series, setSeries] = useState(null);

  const [clicked, setClicked] = useState(null);
  useEffect(() => {
    getProgramas();
  }, []);

  function getProgramas() {
    axios
      .get('http://localhost:3000/series')
      .then((response) => {
        const data = response.data;
        console.log(data);
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
        <div
          className="columns program_slider "
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {series.map((d, index) => {
            return (
              <a
                onClick={() => {
                  programClick(d, index);
                }}
                className={`is-2 column program_container ${
                  index !== 0 ? 'program_container_if_not_first' : ''
                } `}
                id={d._id}
                style={{
                  boxShadow: clicked == index && '1px 1px 1px#ff3b56',
                  transform: clicked == index && 'translate(2px)',
                }}
              >
                {console.log(index, clicked)}
                <figure className="image">
                  <img src={d.imagesMain} className="image-cover" />
                </figure>
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
