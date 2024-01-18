import "../AddAccountModal/AddAccountModal.css";
import { instagramLogo } from "../../../Data";
import SocialMediaButton from "./SocialMediaButton";
import { useState } from "react";
const AddAccountModal = ({ isActive, onClose }) => {
  return (
    <div id="accounts-modal" className={`${isActive ? "active" : ""}`}>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="close-icon">
            <span onClick={onClose} className="material-symbols-outlined" >close</span>
          </div>
          <div className="modal-body">
            <SocialMediaButton smName={"Instagram"} smLogo={instagramLogo()}/>
            <SocialMediaButton smName={"Instagram"} smLogo={instagramLogo()}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountModal;
