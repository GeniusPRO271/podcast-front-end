import React from 'react';
import './wall.css';
import Shows from './wall_components/shows/shows';
function Wall() {
  return (
    <div className="column wall_main_container">
      <Shows />
    </div>
  );
}

export default Wall;
