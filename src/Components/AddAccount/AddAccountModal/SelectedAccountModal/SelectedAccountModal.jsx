import React, { useState, useEffect } from "react";
import "./SelectedAccountModal.css";

const SelectedAccountModal = ({
  isActive,
  socialMediaName,
  onClose,
  onFormSubmit,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    linkToProfile: "",
    platformName: socialMediaName,
  });

  useEffect(() => {
    if (isActive) {
      setFormData({
        username: "",
        email: "",
        password: "",
        linkToProfile: "",
        platformName: socialMediaName,
      });
    }
  }, [isActive]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    onFormSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={`account-modal ${isActive ? "active" : ""}`}>
      <div className="account-modal__layer">
        <div className="account-modal__content">
          <div className="close-icon">
            <span onClick={onClose} className="material-symbols-outlined">
              close
            </span>
          </div>
          <div className="account-modal__body">
            <h1 className="account-modal__content-header">
              Add your {socialMediaName} account
            </h1>
            <form className="account-modal__form" onSubmit={handleSubmit}>
              {Object.entries(formData).map(
                ([field, value]) =>
                  field !== "platformName" && (
                    <div key={field} className={field}>
                      <label htmlFor={field}>
                        {`${
                          field === "linkToProfile"
                            ? "Link to profile :"
                            : `${field[0].toUpperCase()}${field.slice(1)} :`
                        }`}
                      </label>
                      <input
                        type={field === "password" ? "password" : "text"}
                        id={field}
                        name={field}
                        placeholder={`Enter your account ${
                          field === "linkToProfile" ? "Link" : `${field}`
                        }`}
                        required
                        value={value}
                        onChange={handleChange}
                      />
                    </div>
                  )
              )}
              <div className="account-modal__button-wrapper">
                <button className="account-modal__button" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedAccountModal;
