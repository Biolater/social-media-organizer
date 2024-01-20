import "../AddAccountModal/AddAccountModal.css";
import {
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  twitterLogo,
  pinterestLogo,
  youtubeLogo,
  snapchatLogo,
  tiktokLogo,
} from "../../../Data";
import SocialMediaButton from "./SocialMediaButton";

const socialMediaData = [
  { name: "Instagram", logo: instagramLogo },
  { name: "Facebook", logo: facebookLogo },
  { name: "Twitter", logo: twitterLogo },
  { name: "LinkedIn", logo: linkedinLogo },
  { name: "Pinterest", logo: pinterestLogo },
  { name: "Youtube", logo: youtubeLogo },
  { name: "Snapchat", logo: snapchatLogo },
  { name: "Tiktok", logo: tiktokLogo },
];

const AddAccountModal = ({ isActive, onClose, setAccount }) => {
  const onSocialMediaButtonClick = (smName) => {
    setAccount(smName);
    onClose();
  };

  return (
    <div id="accounts-modal" className={`${isActive ? "active" : ""}`}>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="close-icon">
            <span onClick={onClose} className="material-symbols-outlined">
              close
            </span>
          </div>
          <div className="modal-body">
            {socialMediaData.map((socialMedia) => (
              <SocialMediaButton
                key={socialMedia.name}
                onSelect={() => onSocialMediaButtonClick(socialMedia.name)}
                smName={socialMedia.name}
                smLogo={socialMedia.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountModal;
