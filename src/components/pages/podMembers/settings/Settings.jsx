import SecuritySection from "./SecuritySection";
import NotificationsSection from "./NotificationsSection";
import HelpSupportSection from "./HelpSupportSection";
import "../../../stylesheet/settings.css";

function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-header">
        <h2>Settings</h2>
        <p>Manage your account and preferences</p>
      </div>

      <SecuritySection />
      <NotificationsSection />
      <HelpSupportSection />
    </div>
  );
}

export default Settings;
