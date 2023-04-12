import { useEffect, useState } from 'react';
import './home.css';
import Navbar from './components/navbar/navbar';
import Programas from './components/programas/programas';
import Social from './components/social/social';
import Wall from './components/wall/wall';
import Footer from './components/footer/footer';

function Home() {
  const [vidBoxLink, setVidBoxLink] = useState(
    'https://www.youtube.com/embed/Th_RkEsD0Zs'
  );
  const [activeWall, setActiveWall] = useState('show');
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
    <div className="Home">
      <header>
        <Navbar setActiveWall={setActiveWall} />
      </header>
      <main>
        <div className="columns container_main">
          <div className="column is-7">
            <div className="vid-box columns">
              <figure className="image is-16by9 is-11 column">
                <iframe
                  className="has-ratio border"
                  width="720"
                  src={vidBoxLink}
                />
              </figure>
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
