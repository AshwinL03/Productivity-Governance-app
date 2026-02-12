import SecuritySection from "../settings/SecuritySection";
import NotificationsSection from "../settings/NotificationsSection";
import HelpSupportSection from "../settings/HelpSupportSection";
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
