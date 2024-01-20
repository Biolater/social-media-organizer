import "./AddAccount.css";
import socialMediaImg from "../../assets/bg-img5.jpg";
import AddAccountModal from "./AddAccountModal/AddAccountModal";
import SelectedAccountModal from "./AddAccountModal/SelectedAccountModal/SelectedAccountModal";
import { useState } from "react";
const AddAccount = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSocialMediaAccount, setSelectedSocialMediaAccount] =
    useState(null);
  const handleModalButtonClick = () => {
    setModalOpen((previous) => !previous);
  };

  const handleSocialMediaSelect = (smName) => {
    setSelectedSocialMediaAccount(smName);
  };
  return (
    <section id="add-account">
      <div className="container">
        <h2 className="add-account__title">Start by adding a new Account</h2>
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
            <AddAccountModal
              onClose={handleModalButtonClick}
              isActive={modalOpen}
              setAccount={handleSocialMediaSelect}
            />
            <SelectedAccountModal
              isActive={selectedSocialMediaAccount !== null}
              socialMediaName={selectedSocialMediaAccount}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAccount;
