import "../../../stylesheet/logHours.css";

function TabSwitch({ activeTab, setActiveTab }) {
  return (
    <div className="tab-switch">
      <button
        className={`tab-btn ${activeTab === "today" ? "active" : ""}`}
        onClick={() => setActiveTab("today")}
      >
        Today
      </button>

      <button
        className={`tab-btn ${activeTab === "week" ? "active" : ""}`}
        onClick={() => setActiveTab("week")}
      >
        This Week
      </button>
    </div>
  );
}

export default TabSwitch;
