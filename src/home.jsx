import { useEffect, useState } from 'react';
import './home.css';
import Navbar from './components/navbar/navbar';
import Programas from './components/programas/programas';
import Social from './components/social/social';
import Wall from './components/wall/wall';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="columns container_main">
        <div className="column is-7">
          <div className="vid-box columns">
            <figure className="image is-2by1 is-11 column">
              <iframe
                className="has-ratio border"
                width="500"
                height="400"
                src="https://www.youtube.com/embed/FplPDNBwuO8"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </figure>
            <Social />
          </div>
          <Programas />
        </div>
        <Wall />
      </div>
    </div>
  );
}

export default Home;
