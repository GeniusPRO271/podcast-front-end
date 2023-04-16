import React from 'react';
import './wall.css';
import Shows from './wall_components/shows/shows';
import Contacto from './wall_components/contact/contacto';

const Wall = ({ activeWall }) => {
  return (
    <div
      className="column wall_main_container"
      style={{ overflow: activeWall == 'show' ? 'scroll' : 'hidden' }}
    >
      <Contacto activeWall={activeWall} />
      <Shows activeWall={activeWall} />
    </div>
  );
};

export default Wall;
