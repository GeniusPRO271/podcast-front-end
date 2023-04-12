import React from 'react';
import './social.css';

function Social() {
  return (
    <div className="column">
      <div className="scoial_main_container">
        <a
          href="https://www.patreon.com/elsentidodelhumor"
          target="_blank"
          class="social_icon-box"
        >
          <div class="social_icon-container">
            <i class="fa-brands fa-patreon social_icon fa-xl"></i>
          </div>
        </a>
        <a
          href="https://www.youtube.com/@elsentidodelhumorproducciones"
          class="social_icon-box"
          target="_blank"
        >
          <div class="social_icon-container">
            <i class="fa-brands fa-youtube social_icon fa-xl"></i>
          </div>
        </a>
        <a
          href="https://twitter.com/esdh_cl"
          target="_blank"
          class="social_icon-box"
        >
          <div class="social_icon-container">
            <i class="fa-brands fa-twitter social_icon fa-xl"></i>
          </div>
        </a>
        <a
          href="https://www.facebook.com/programaelsentidodelhumor"
          class="social_icon-box"
          target="_blank"
        >
          <div class="social_icon-container">
            <i class="fa-brands fa-facebook social_icon fa-xl"></i>
          </div>
        </a>
        <a
          href="https://www.tiktok.com/@elsentidodelhumor"
          class="social_icon-box"
          target="_blank"
        >
          <div class="social_icon-container">
            <i class="fa-brands fa-tiktok social_icon fa-xl"></i>
          </div>
        </a>
        <a
          href="https://open.spotify.com/show/3FsJCopdhtm71W02NM55jZ?si=6a26023c5f6d4aca"
          class="social_icon-box"
          target="_blank"
        >
          <div class="social_icon-container">
            <i class="fa-brands fa-spotify social_icon fa-xl"></i>
          </div>
        </a>
        <a
          href="https://www.instagram.com/elsentidodelhumor"
          class="social_icon-box"
          target="_blank"
        >
          <div class="social_icon-container">
            <i class="fa-brands fa-instagram social_icon fa-xl"></i>
          </div>
        </a>
        <a
          href="https://www.twitch.tv/elsentidodelhumor/"
          class="social_icon-box"
          target="_blank"
        >
          <div class="social_icon-container">
            <i class="fa-brands fa-twitch social_icon fa-xl"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Social;
