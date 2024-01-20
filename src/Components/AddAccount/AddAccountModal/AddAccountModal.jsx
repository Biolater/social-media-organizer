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
const AddAccountModal = ({ isActive, onClose, setAccount }) => {
  const onSocialMediaButtonClick = (smName) => {
    setAccount(smName);
    onClose();
  }
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
            <SocialMediaButton
              onSelect={() => onSocialMediaButtonClick("Instagram")}
              smName={"Instagram"}
              smLogo={instagramLogo}
            />
            <SocialMediaButton
              onSelect={() => onSocialMediaButtonClick("Facebook")}
              smName={"Facebook"}
              smLogo={facebookLogo}
            />
            <SocialMediaButton
              onSelect={() => onSocialMediaButtonClick("Twitter")}
              smName={"Twitter"}
              smLogo={twitterLogo}
            />
            <SocialMediaButton
              onSelect={() => onSocialMediaButtonClick("LinkedIn")}
              smName={"LinkedIn"}
              smLogo={linkedinLogo}
            />
            <SocialMediaButton
              onSelect={() => onSocialMediaButtonClick("Pinterest")}
              smName={"Pinterest"}
              smLogo={pinterestLogo}
            />
            <SocialMediaButton
              onSelect={() => onSocialMediaButtonClick("Youtube")}
              smName={"Youtube"}
              smLogo={youtubeLogo}
            />
            <SocialMediaButton
              onSelect={() => onSocialMediaButtonClick("Snapchat")}
              smName={"Snapchat"}
              smLogo={snapchatLogo}
            />
            <SocialMediaButton
              onSelect={() => onSocialMediaButtonClick("Tiktok")}
              smName={"Tiktok"}
              smLogo={tiktokLogo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountModal;
