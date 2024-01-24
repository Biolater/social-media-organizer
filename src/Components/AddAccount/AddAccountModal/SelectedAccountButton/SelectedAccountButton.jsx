import "./SelectedAccountButton.css";
import { useState } from "react";
const SelectedAccountButton = ({
  socialMediaName,
  userName,
  userEmail,
  userPassword,
  userAccountLink,
}) => {
  const [informationModalActive, setInformationModalActive] = useState(false);
  const handleClick = () => {
    setInformationModalActive((previous) => !previous);
  };
  return (
    <button className="account-button">
      <p className="account-name">{`Account name : ${userName}`}</p>
      {socialMediaName !== null && (
        <p className="social-media__name">{`Social Media name : ${socialMediaName}`}</p>
      )}
      <span onClick={handleClick}>Click here to view information</span>
      <div
        className={`account-information__modal ${
          informationModalActive ? "active" : ""
        }`}
      >
        <div className="account-information__modal-overlay">
          <div className="account-information__modal-content">
            <div className="account-information__modal-header">
              <p className="account-information__modal-header-text">
                Account Information
              </p>
              <button
                className="account-information__modal-header-close"
                onClick={handleClick}
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <div className="account-information__modal-body">
              <p className="account-information__modal-body-text">
                Username : {userName}
              </p>
              <p className="account-information__modal-body-text">
                Email : {userEmail}
              </p>
              <p className="account-information__modal-body-text">
                Password : {userPassword}
              </p>
              <p className="account-information__modal-body-text">
                Account Link :{" "}
                <a target="_blank" href={userAccountLink}>
                  {userAccountLink}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SelectedAccountButton;
