function SecuritySection() {
  return (
    <div className="card security-card">
      <h3 className="section-heading">Security</h3>
      <p className="section-subtext">
        Manage your password and security settings
      </p>

      <div className="security-row">
        <div className="security-left">
          <p className="section-title">Change Password</p>
          <p className="section-description">
            Update your account password for security
          </p>
        </div>

        <button className="primary-btn">
          Change Password
        </button>
      </div>
    </div>
  );
}

export default SecuritySection;
