import "../../stylesheet/alert.css";

function Alerts() {
  return (
    <div className="alerts-container">

      {/* HEADER */}
      <div className="alerts-header">
        <div>
          <h1>Alerts & Signals</h1>
          <p>Stay updated with important notifications</p>
        </div>
        <button className="clear-btn">Clear All</button>
      </div>

      {/* SUMMARY */}
      <div className="summary-card">
        <div className="summary-left">
          <p className="summary-title">Active Alerts</p>
          <h2>6</h2>
        </div>

        <div className="summary-right">
          <div>
            <span className="count red">2</span>
            <p>Warnings</p>
          </div>
          <div>
            <span className="count orange">2</span>
            <p>Reminders</p>
          </div>
          <div>
            <span className="count purple">2</span>
            <p>Other</p>
          </div>
        </div>
      </div>

      {/* ALERT CARDS */}

      {/* WARNING 1 */}
      <div className="alert-card warning">
        <div className="alert-icon warning-icon">
          ⚠
        </div>

        <div className="alert-content">
          <div className="alert-top">
            <h3>Missing Daily Log</h3>
            <span className="badge warning-badge">Warning</span>
          </div>
          <p>You haven't logged your hours for yesterday.</p>
          <span className="time">2 hours ago</span>
        </div>

        <button className="close">×</button>
      </div>

      {/* WARNING 2 */}
      <div className="alert-card warning">
        <div className="alert-icon warning-icon">
          ⚠
        </div>

        <div className="alert-content">
          <div className="alert-top">
            <h3>Low Project Hours</h3>
            <span className="badge warning-badge">Warning</span>
          </div>
          <p>Your hours for Project Beta are below average this week.</p>
          <span className="time">5 hours ago</span>
        </div>

        <button className="close">×</button>
      </div>

      {/* REMINDER */}
      <div className="alert-card reminder">
        <div className="alert-icon reminder-icon">
          ⏰
        </div>

        <div className="alert-content">
          <div className="alert-top">
            <h3>Certification Expiring Soon</h3>
            <span className="badge reminder-badge">Reminder</span>
          </div>
          <p>Your Google Analytics certification will expire in 30 days.</p>
          <span className="time">1 day ago</span>
        </div>

        <button className="close">×</button>
      </div>

      {/* INFO */}
      <div className="alert-card info">
        <div className="alert-icon info-icon">
          ℹ
        </div>

        <div className="alert-content">
          <div className="alert-top">
            <h3>New Project Assignment</h3>
            <span className="badge info-badge">Info</span>
          </div>
          <p>You've been assigned to Project Delta.</p>
          <span className="time">2 days ago</span>
        </div>

        <button className="close">×</button>
      </div>

      {/* NOTIFICATION */}
      <div className="alert-card notification">
        <div className="alert-icon notification-icon">
          🔔
        </div>

        <div className="alert-content">
          <div className="alert-top">
            <h3>Weekly Summary Available</h3>
            <span className="badge notification-badge">Notification</span>
          </div>
          <p>Your weekly work summary is ready to view.</p>
          <span className="time">3 days ago</span>
        </div>

        <button className="close">×</button>
      </div>

      {/* REMINDER 2 */}
      <div className="alert-card reminder">
        <div className="alert-icon reminder-icon">
          ⏰
        </div>

        <div className="alert-content">
          <div className="alert-top">
            <h3>Skills Profile Update</h3>
            <span className="badge reminder-badge">Reminder</span>
          </div>
          <p>It's been 3 months since you updated your skills.</p>
          <span className="time">4 days ago</span>
        </div>

        <button className="close">×</button>
      </div>

    </div>
  );
}

export default Alerts;