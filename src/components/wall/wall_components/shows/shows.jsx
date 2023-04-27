import React, { useEffect, useState } from 'react';
import './shows.css';
import '../../wall.css';
const Shows = ({ activeWall }) => {
  const [shows, setShows] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isHoverIndex, setIsHoverIndex] = useState(null);
  let transDelay = 0;
  const groupedShows = {};
  function formatDate(dateString) {
    const date = new Date(dateString);
    const days = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName} ${day} ${monthName}`;
  }

  useEffect(() => {
    async function getShows() {
      const response = await fetch('http://localhost:3000/shows');
      const data = await response.json();
      console.log(data);
      setShows(data);
    }
    getShows();
  }, []);

  if (!shows) {
    return (
      <div
        className={`shows_container_loading ${
          activeWall == 'show' ? 'show' : 'hidden'
        }`}
      >
        <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      </div>
    );
  }

  shows.forEach((show) => {
    const month = new Date(show.showDate).getMonth();
    if (!groupedShows[month]) {
      groupedShows[month] = {
        monthName: formatDate(show.showDate).split(' ')[2], // extract month name
        shows: [show],
      };
    } else {
      groupedShows[month].shows.push(show);
    }
  });
  const months = Object.values(groupedShows);
  console.log(activeWall);
  return (
    <div className={`${activeWall == 'show' ? 'show' : 'hidden'}`}>
      <div className="shows_container">
        <div className="shows_title">PROXIMOS SHOWS</div>
        {months.map((month) => (
          <div className="moth_container" key={month.monthName}>
            <div className="show_moth">{month.monthName.toUpperCase()}</div>
            {month.shows.map((show) => {
              transDelay += 100;
              return (
                <a
                  target="_blank"
                  href={show.buyticketlink}
                  className={`columns ${
                    activeWall == 'show'
                      ? 'show_container'
                      : 'show_container_hidden'
                  } is-mobile`}
                  id={show._id}
                  style={{
                    transitionDelay: `${transDelay}ms`,
                    boxShadow:
                      show._id == isHoverIndex &&
                      isHover &&
                      `3px 3px 1px ${show.dominantColor}`,
                    border: `2px solid ${show.dominantColor}`,
                    transform:
                      show._id == isHoverIndex && isHover && 'translate(-3px)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={() => {
                    setIsHover(true);
                    setIsHoverIndex(show._id);
                  }}
                  onMouseOut={() => {
                    setIsHover(false);
                    setIsHoverIndex(null);
                  }}
                >
                  <figure className=" column image show_container_image is-3">
                    <img src={show.image} className="show_image" />
                  </figure>
                  <div className="column show_text_container is-auto">
                    <p className="show_text">{show.title.toUpperCase()}</p>
                    {show.location} <br />
                    {formatDate(show.showDate).toUpperCase()}.
                  </div>
                  <div
                    style={{ backgroundColor: show.dominantColor }}
                    className="column show_button is-1"
                  >
                    <i class="fa-solid fa-angle-right show_icon fa-2x"></i>
                  </div>
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
