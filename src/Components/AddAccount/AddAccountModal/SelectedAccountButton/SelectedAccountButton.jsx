import "./SelectedAccountButton.css";

const SelectedAccountButton = ({
  socialMediaName,
  userName,
  userEmail,
  userPassword,
  userAccountLink,
}) => {
  return <button className="account-button">{userName}</button>;
};

export default SelectedAccountButton;
