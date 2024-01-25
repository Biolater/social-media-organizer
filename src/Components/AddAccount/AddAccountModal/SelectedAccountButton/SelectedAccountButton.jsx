// SelectedAccountButton.js
import React, { useState } from "react";
import "./SelectedAccountButton.css";

const AccountInfoModal = ({ title, isOpen, onClose, children }) => (
  <div className={`account-information__modal ${isOpen ? "active" : ""}`}>
    <div className="account-information__modal-overlay">
      <div className="account-information__modal-content">
        <div className="account-information__modal-header">
          <p className="account-information__modal-header-text">{title}</p>
          <div className="account-information__modal-header-close" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </div>
        </div>
        <div className="account-information__modal-body">{children}</div>
      </div>
    </div>
  </div>
);

const EditModal = ({ title, isOpen, onClose, children }) => (
  <div className={`account-information__modal edit-modal ${isOpen ? "active" : ""}`}>
    <div className="account-information__modal-overlay">
      <div className="account-information__modal-content">
        <div className="account-information__modal-header">
          <p className="account-information__modal-header-text">{title}</p>
          <div className="account-information__modal-header-close" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </div>
        </div>
        <div className="account-information__modal-body">{children}</div>
      </div>
    </div>
  </div>
);

const SelectedAccountButton = ({
  socialMediaName,
  userName,
  userEmail,
  userPassword,
  userAccountLink,
  onDelete,
}) => {
  const [informationModalActive, setInformationModalActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedInformation, setEditedInformation] = useState({
    userName,
    userEmail,
    userPassword,
    userAccountLink,
  });
  
  const handleClick = () => {
    setInformationModalActive((previous) => !previous);
  };

  const handleEditClick = () => {
    setIsEditing((previous) => !previous);
  };

  const handleEditInputChange = (event,informationType) => {
    const newInformationObject = {...editedInformation}
    newInformationObject[informationType] = event.target.value;
    setEditedInformation(newInformationObject)
  }

  return (
    <button className="account-button">
      <p className="account-name">{`Account name : ${userName}`}</p>
      {socialMediaName !== null && (
        <p className="social-media__name">{`Social Media name : ${socialMediaName}`}</p>
      )}
      <span onClick={handleClick}>Click here to view information</span>
      
      {/* Delete Button */}
      <div className="delete-button__wrapper">
        <div className="delete-button" onClick={onDelete}>
          <span>Delete Account</span>
        </div>
      </div>

      {/* Edit Button */}
      <div className="edit-button__wrapper">
        <div className="edit-button" onClick={handleEditClick}>
          <span>Edit Account</span>
        </div>
      </div>

      {/* Information Modal */}
      <AccountInfoModal
        title="Account Information"
        isOpen={informationModalActive}
        onClose={handleClick}
      >
        <p className="account-information__modal-body-text">Username : {userName}</p>
        <p className="account-information__modal-body-text">Email : {userEmail}</p>
        <p className="account-information__modal-body-text">Password : {userPassword}</p>
        <p className="account-information__modal-body-text">
          Account Link : <a target="_blank" href={userAccountLink}>{userAccountLink}</a>
        </p>
      </AccountInfoModal>

      <EditModal
        title="Account Edit"
        isOpen={isEditing}
        onClose={handleEditClick}
      >
        <p className="account-information__modal-body-text">Username : <input type="text" onChange={(e) => handleEditInputChange(e,"userName")} value={editedInformation['userName']} /></p>
        <p className="account-information__modal-body-text">Email : <input type="text" onChange={(e) => handleEditInputChange(e,"userEmail")} value={editedInformation['userEmail']} /></p>
        <p className="account-information__modal-body-text">Password : <input type="text" onChange={(e) => handleEditInputChange(e,"userPassword")} value={editedInformation['userPassword']} /></p>
        <p className="account-information__modal-body-text">Account Link : <input type="text" onChange={(e) => handleEditInputChange(e,"userAccountLink")} value={editedInformation['userAccountLink']} /></p>
      </EditModal>
    </button>
  );
};

export default SelectedAccountButton;
