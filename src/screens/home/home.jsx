import { useEffect, useRef, useState } from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar';
import Programas from '../../components/programas/programas';
import Social from '../../components/social/social';
import Wall from '../../components/wall/wall';
import Footer from '../../components/footer/footer';
import YouTube from 'react-youtube';
function Home() {
  const [vidBoxLink, setVidBoxLink] = useState(
    'https://www.youtube.com/playlist?list=PLgSG7f4hM1f574dIihVMQBwiy8tlQv_hk'
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => {
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
  };
  function getYoutubeVideoId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }
  const [activeWall, setActiveWall] = useState('show');
  const opts = {
    class: 'is-11',
    height: '360',
    width: '640',
    playerVars: {
      rel: 0, // remove related videos
      showinfo: 0, // remove video title and uploader
      modestbranding: 1, // remove YouTube logo
      iv_load_policy: 3, // remove annotations
      autoplay: 0,
      listType: 'playlist',
      list: vidBoxLink.split('list=')[1],
    },
  };

  useEffect(() => {
    const navbar = document.querySelector('header');
    const handleScroll = () => {
      if (window.pageYOffset > 45) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div id="main_div">
      <header>
        <Navbar setActiveWall={setActiveWall} />
      </header>
      <main>
        <div className="columns container_main">
          <div className="column is-7">
            <div className="vid-box columns">
              <YouTube
                videoId={getYoutubeVideoId(vidBoxLink.split('list=')[1])}
                iframeClassName={`has-ratio ${
                  isPlaying ? 'animation_border' : 'border'
                }`}
                className="image is-16by9 is-11 column"
                opts={opts}
                onPlay={onPlay}
                onPause={onPause}
              />

              <Social />
            </div>
            <Programas setVidBoxLink={setVidBoxLink} />
          </div>

          <Wall activeWall={activeWall} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
