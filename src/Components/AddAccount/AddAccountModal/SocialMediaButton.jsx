import React from "react";
import "./SocialMediaButton.css";

const SocialMediaButton = ({ smName, smLogo, onSelect }) => (
  <button onClick={onSelect} className="social-media__button">
    <div className="social-media__logo">
      <img src={smLogo} alt="" />
    </div>
    <p className="social-media__name">{smName}</p>
  </button>
);

export default SocialMediaButton;
