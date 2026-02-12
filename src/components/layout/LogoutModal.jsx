import "../stylesheet/logoutModal.css";

function LogoutModal({ onCancel, onConfirm }) {
  return (
    <div className="logout-overlay">
      <div className="logout-modal">
        <h4>Log out?</h4>
        <p>Are you sure you want to log out of your account?</p>

        <div className="logout-actions">
          <button
            className="logout-cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="logout-confirm-btn"
            onClick={onConfirm}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
