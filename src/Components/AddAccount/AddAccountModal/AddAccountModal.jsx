import "../AddAccountModal/AddAccountModal.css";
import { facebookLogo, instagramLogo } from "../../../Data";
import SocialMediaButton from "./SocialMediaButton";
const AddAccountModal = ({ isActive, onClose }) => {
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
            <SocialMediaButton smName={"Instagram"} smLogo={instagramLogo} />
            <SocialMediaButton smName={"Facebook"} smLogo={facebookLogo} />
            <SocialMediaButton smName={"Instagram"} smLogo={instagramLogo} />
            <SocialMediaButton smName={"Facebook"} smLogo={facebookLogo} />
            <SocialMediaButton smName={"Instagram"} smLogo={instagramLogo} />
            <SocialMediaButton smName={"Facebook"} smLogo={facebookLogo} />
            <SocialMediaButton smName={"Instagram"} smLogo={instagramLogo} />
            <SocialMediaButton smName={"Facebook"} smLogo={facebookLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountModal;
