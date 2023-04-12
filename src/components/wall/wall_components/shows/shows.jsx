import React, { useEffect, useState } from 'react';
import './shows.css';

function Shows() {
  const [shows, setShows] = useState(null);

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
      <div className="shows_container_loading">
        <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      </div>
    );
  }

  const groupedShows = {};
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

  return (
    <>
      <div className="shows_container">
        <div className="shows_title">SHOWS</div>
        {months.map((month) => (
          <div className="moth_container" key={month.monthName}>
            <div className="show_moth">{month.monthName.toUpperCase()}</div>
            {month.shows.map((show) => (
              <a
                href={show.buyticketlink}
                target="_blank"
                className="columns show_container is-mobile"
                key={show.id}
              >
                <figure className=" column image show_container_image is-3">
                  <img src={show.image} className="show_image" />
                </figure>
                <div className="column show_text_container is-auto">
                  <p className="show_text">{show.title.toUpperCase()}</p>
                  {show.location} <br />
                  {formatDate(show.showDate).toUpperCase()}.
                </div>
                <div className="column show_button is-1">
                  <i class="fa-solid fa-angle-right show_icon fa-2x"></i>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Shows;
