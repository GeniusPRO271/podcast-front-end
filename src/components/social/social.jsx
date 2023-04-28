import React from 'react';
import './social.css';

function Social() {
  return (
    <div className="column">
      <div className="scoial_main_container">
        <a
          href="https://www.patreon.com/elsentidodelhumor"
          target="_blank"
          className="social_icon-box"
        >
          <div className="social_icon-container">
            <i className="fa-brands fa-patreon social_icon"></i>
          </div>
        </a>
        <a
          href="https://www.youtube.com/@elsentidodelhumorproducciones"
          className="social_icon-box"
          target="_blank"
        >
          <div className="social_icon-container">
            <i className="fa-brands fa-youtube social_icon "></i>
          </div>
        </a>
        <a
          href="https://twitter.com/esdh_cl"
          target="_blank"
          className="social_icon-box"
        >
          <div className="social_icon-container">
            <i className="fa-brands fa-twitter social_icon "></i>
          </div>
        </a>
        <a
          href="https://www.facebook.com/programaelsentidodelhumor"
          className="social_icon-box"
          target="_blank"
        >
          <div className="social_icon-container">
            <i className="fa-brands fa-facebook social_icon "></i>
          </div>
        </a>
        <a
          href="https://www.tiktok.com/@elsentidodelhumor"
          className="social_icon-box"
          target="_blank"
        >
          <div className="social_icon-container">
            <i className="fa-brands fa-tiktok social_icon "></i>
          </div>
        </a>
        <a
          href="https://open.spotify.com/show/3FsJCopdhtm71W02NM55jZ?si=6a26023c5f6d4aca"
          className="social_icon-box"
          target="_blank"
        >
          <div className="social_icon-container">
            <i className="fa-brands fa-spotify social_icon "></i>
          </div>
        </a>
        <a
          href="https://www.instagram.com/elsentidodelhumor"
          className="social_icon-box"
          target="_blank"
        >
          <div className="social_icon-container">
            <i className="fa-brands fa-instagram social_icon"></i>
          </div>
        </a>
        <a
          href="https://www.twitch.tv/elsentidodelhumor/"
          className="social_icon-box"
          target="_blank"
        >
          <div className="social_icon-container">
            <i className="fa-brands fa-twitch social_icon"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Social;
