import "./SocialMediaButton.css";

const SocialMediaButton = ({ smName, smLogo }) => {
  return (
    <button className="social-media__button">
      <div className="social-media__logo">
        {smLogo}
      </div>
      <p className="social-media__name">{smName}</p>
    </button>
  );
};

export default SocialMediaButton;
