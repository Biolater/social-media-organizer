import "./SelectedAccountButton.css";

const SelectedAccountButton = ({
  socialMediaName,
  userName,
  userEmail,
  userPassword,
  userAccountLink,
}) => {
  return (
    <button className="account-button">
      <p className="account-name">{`Account name : ${userName}`}</p>
      {socialMediaName !== null && (
        <p className="social-media__name">{`Social Media name : ${socialMediaName}`}</p>
      )}{" "}
    </button>
  );
};

export default SelectedAccountButton;
