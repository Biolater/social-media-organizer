import "./AddAccount.css";
import socialMediaImg from "../../assets/bg-img5.jpg";
import AddAccountModal from "./AddAccountModal/AddAccountModal";
const AddAccount = () => {
  return (
    <section id="add-account">
      <div className="container">
        <h2 className="add-account__title">Start by adding a new Account</h2>
        <div className="content-wrapper">
          <div className="img-wrapper">
            <img src={socialMediaImg} alt="social media icons and logos" />
          </div>
          <div className="content">
            <button className="add-account__button">
              <div className="add-icon">
                <i class="fa-solid fa-plus"></i>
              </div>
              <span className="content-text">Add Account here</span>
            </button>
            <AddAccountModal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAccount;
