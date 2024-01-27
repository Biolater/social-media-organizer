import React, { useState, useEffect } from "react";
import "./AddAccount.css";
import socialMediaImg from "../../assets/bg-img5.jpg";
import AddAccountModal from "./AddAccountModal/AddAccountModal";
import SelectedAccountModal from "./AddAccountModal/SelectedAccountModal/SelectedAccountModal";
import SelectedAccountButton from "./AddAccountModal/SelectedAccountButton/SelectedAccountButton";

const AddAccount = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSocialMediaAccount, setSelectedSocialMediaAccount] =
    useState(null);
  const [addedSocialMediaAccounts, setAddedSocialMediaAccounts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const handleModalButtonClick = () => {
    setModalOpen((previous) => !previous);
  };

  const handleSocialMediaSelect = (smName) => {
    setSelectedSocialMediaAccount(smName);
  };

  const handleAddSocialMediaAccount = (data) => {
    setAddedSocialMediaAccounts((prevAccounts) => [...prevAccounts, data]);
  };

  const handleDeleteSocialMediaAccount = (accountIndex) => {
    setAddedSocialMediaAccounts((previous) =>
      previous.filter((_, idx) => accountIndex !== idx)
    );
  };

  const handleEditInformation = (
    index,
    userName,
    userEmail,
    userPassword,
    userAccountLink
  ) => {
    const newAddedSocialMediaAccountsArray = [...addedSocialMediaAccounts];
    newAddedSocialMediaAccountsArray[index].username = userName;
    newAddedSocialMediaAccountsArray[index].email = userEmail;
    newAddedSocialMediaAccountsArray[index].password = userPassword;
    newAddedSocialMediaAccountsArray[index].linkToProfile = userAccountLink;
    setAddedSocialMediaAccounts(newAddedSocialMediaAccountsArray);
  };

  useEffect(() => {
    const storedAccounts =
      JSON.parse(localStorage.getItem("socialMediaAccounts")) || [];
    setAddedSocialMediaAccounts(storedAccounts);
    setDataLoaded(true); // Signal that data has been loaded
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      localStorage.setItem(
        "socialMediaAccounts",
        JSON.stringify(addedSocialMediaAccounts)
      );
    }
  }, [addedSocialMediaAccounts, dataLoaded]);

  if (!dataLoaded) {
    // Render a loading state or return null until data is loaded
    return null;
  }

  return (
    <section id="add-account">
      <div className="container">
        <h2 className="add-account__title font-bold text-2xl md:text-4xl">Start by adding a new Account</h2>
        <div className="content-wrapper">
          <div className="img-wrapper">
            <img src={socialMediaImg} alt="social media icons and logos" />
          </div>
          <div className="content">
            <button
              className="add-account__button"
              onClick={handleModalButtonClick}
            >
              <div className="add-icon">
                <i className="fa-solid fa-plus"></i>
              </div>
              <span className="content-text">Add Account here</span>
            </button>
            <div className="add-account__accounts">
              {addedSocialMediaAccounts.map((accountData, index) => (
                <SelectedAccountButton
                  key={index}
                  userName={accountData.username}
                  userEmail={accountData.email}
                  userPassword={accountData.password}
                  userAccountLink={accountData.linkToProfile}
                  socialMediaName={accountData.platformName}
                  onDelete={() => handleDeleteSocialMediaAccount(index)}
                  onSave={(e) =>
                    handleEditInformation(
                      index,
                      e.userName,
                      e.userEmail,
                      e.userPassword,
                      e.userAccountLink
                    )
                  }
                />
              ))}
            </div>
            <AddAccountModal
              onClose={handleModalButtonClick}
              isActive={modalOpen}
              setAccount={handleSocialMediaSelect}
            />
            <SelectedAccountModal
              isActive={selectedSocialMediaAccount !== null}
              socialMediaName={selectedSocialMediaAccount}
              onClose={() => handleSocialMediaSelect(null)}
              onFormSubmit={(e) => handleAddSocialMediaAccount(e)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAccount;
