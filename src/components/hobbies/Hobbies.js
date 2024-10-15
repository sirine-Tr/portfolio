import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faPaintBrush, faTheaterMasks } from '@fortawesome/free-solid-svg-icons'; 
import './hobbies.css'; 

const Hobbies = () => {
  return (
    <div id="hobbies">
      <h1 className='title'>Hobbies</h1>
      <div className="hobbies">
        <div className="hobbies-column">
          <FontAwesomeIcon icon={faPlane} className="hobby-icon" />
          <h3 className="hobbies-title">Traveling</h3>
        </div>
        <div className="hobbies-column">
          <FontAwesomeIcon icon={faPaintBrush} className="hobby-icon" />
          <h3 className="hobbies-title">Painting</h3>
        </div>
        <div className="hobbies-column">
          <FontAwesomeIcon icon={faTheaterMasks} className="hobby-icon" />
          <h3 className="hobbies-title">Playing theater</h3>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
