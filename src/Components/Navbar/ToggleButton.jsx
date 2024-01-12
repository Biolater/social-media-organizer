import React from 'react';
import './ToggleButton.css'; // Import your CSS file for styling

const ToggleButton = ({ isClicked, onClick }) => {
  return (
    <div className={`toggle-button ${isClicked ? 'open' : ''}`} onClick={onClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default ToggleButton;