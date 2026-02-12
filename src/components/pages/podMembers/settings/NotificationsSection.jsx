import { Bell, CheckCircle } from "lucide-react";

import "../../../stylesheet/settings.css";

function NotificationsSection() {
  const items = [
    {
      title: "Weekly hour summary",
      desc: "Receive a summary of your logged hours every week",
    },
    {
      title: "Over-utilization alerts",
      desc: "Get notified when you exceed optimal working hours",
    },
    {
      title: "Reminder to log hours",
      desc: "Daily reminders to log your working hours",
    },
    {
      title: "Project timeline notifications",
      desc: "Updates about project deadlines and milestones",
    },
  ];

  return (
    <div className="card">
      <h3>Notifications</h3>
      <p className="section-subtext">
        System-managed notification preferences
      </p>

      {items.map((item, index) => (
        <div key={index} className="notification-item">

          {/* Left Side */}
          <div className="notification-left">
            <div className="notification-icon">
              <Bell size={16} />
            </div>

            <div>
              <p className="section-title">{item.title}</p>
              <p className="section-description">{item.desc}</p>
            </div>
          </div>

          {/* Right Side Badge */}
          <span className="status-badge enabled">
            <CheckCircle size={14} className="badge-icon" />
            Enabled
          </span>

        </div>
      ))}

      <p className="section-footnote">
        Notification settings are managed by the system.
      </p>
    </div>
  );
}

export default NotificationsSection;
