import "./SelectedAccountModal.css";

const SelectedAccountModal = ({ isActive, socialMediaName }) => {
  return (
    <div className={`account-modal ${isActive ? "active" : ""}`}>
        <div className="account-modal__layer">
            <div className="account-modal__content">
                <h1 className="account-modal__content-header">
                    {socialMediaName}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default SelectedAccountModal