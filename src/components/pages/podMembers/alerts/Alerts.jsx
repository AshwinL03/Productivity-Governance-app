import "../../../stylesheet/alert.css";

function Alerts() {
  return (
    <div className="fm-alert-container">

      {/* HEADER */}
      <div className="fm-alert-header">
        <div>
          <h1>Alerts & Signals</h1>
          <p>Stay updated with important notifications</p>
        </div>
        <button className="fm-alert-clear-btn">Clear All</button>
      </div>

      {/* SUMMARY */}
      <div className="fm-alert-summary-card">
        <div className="fm-alert-summary-left">
          <p className="fm-alert-summary-title">Active Alerts</p>
          <h2>6</h2>
        </div>

        <div className="fm-alert-summary-right">
          <div>
            <span className="fm-alert-count fm-alert-red">2</span>
            <p>Warnings</p>
          </div>
          <div>
            <span className="fm-alert-count fm-alert-orange">2</span>
            <p>Reminders</p>
          </div>
          <div>
            <span className="fm-alert-count fm-alert-purple">2</span>
            <p>Other</p>
          </div>
        </div>
      </div>


      {/* WARNING */}
      <div className="fm-alert-card fm-alert-warning">
        <div className="fm-alert-icon fm-alert-warning-icon">⚠</div>

        <div className="fm-alert-content">
          <div className="fm-alert-top">
            <h3>Missing Daily Log</h3>
            <span className="fm-alert-badge fm-alert-warning-badge">Warning</span>
          </div>
          <p>You haven't logged your hours for yesterday.</p>
          <span className="fm-alert-time">2 hours ago</span>
        </div>

        <button className="fm-alert-close">×</button>
      </div>


      {/* WARNING 2 */}
      <div className="fm-alert-card fm-alert-warning">
        <div className="fm-alert-icon fm-alert-warning-icon">⚠</div>

        <div className="fm-alert-content">
          <div className="fm-alert-top">
            <h3>Low Project Hours</h3>
            <span className="fm-alert-badge fm-alert-warning-badge">Warning</span>
          </div>
          <p>Your hours for Project Beta are below average this week.</p>
          <span className="fm-alert-time">5 hours ago</span>
        </div>

        <button className="fm-alert-close">×</button>
      </div>


      {/* REMINDER */}
      <div className="fm-alert-card fm-alert-reminder">
        <div className="fm-alert-icon fm-alert-reminder-icon">⏰</div>

        <div className="fm-alert-content">
          <div className="fm-alert-top">
            <h3>Certification Expiring Soon</h3>
            <span className="fm-alert-badge fm-alert-reminder-badge">Reminder</span>
          </div>
          <p>Your Google Analytics certification will expire in 30 days.</p>
          <span className="fm-alert-time">1 day ago</span>
        </div>

        <button className="fm-alert-close">×</button>
      </div>


      {/* INFO */}
      <div className="fm-alert-card fm-alert-info">
        <div className="fm-alert-icon fm-alert-info-icon">ℹ</div>

        <div className="fm-alert-content">
          <div className="fm-alert-top">
            <h3>New Project Assignment</h3>
            <span className="fm-alert-badge fm-alert-info-badge">Info</span>
          </div>
          <p>You've been assigned to Project Delta.</p>
          <span className="fm-alert-time">2 days ago</span>
        </div>

        <button className="fm-alert-close">×</button>
      </div>


      {/* NOTIFICATION */}
      <div className="fm-alert-card fm-alert-notification">
        <div className="fm-alert-icon fm-alert-notification-icon">🔔</div>

        <div className="fm-alert-content">
          <div className="fm-alert-top">
            <h3>Weekly Summary Available</h3>
            <span className="fm-alert-badge fm-alert-notification-badge">Notification</span>
          </div>
          <p>Your weekly work summary is ready to view.</p>
          <span className="fm-alert-time">3 days ago</span>
        </div>

        <button className="fm-alert-close">×</button>
      </div>


      {/* REMINDER 2 */}
      <div className="fm-alert-card fm-alert-reminder">
        <div className="fm-alert-icon fm-alert-reminder-icon">⏰</div>

        <div className="fm-alert-content">
          <div className="fm-alert-top">
            <h3>Skills Profile Update</h3>
            <span className="fm-alert-badge fm-alert-reminder-badge">Reminder</span>
          </div>
          <p>It's been 3 months since you updated your skills.</p>
          <span className="fm-alert-time">4 days ago</span>
        </div>

        <button className="fm-alert-close">×</button>
      </div>

    </div>
  );
}

export default Alerts;
