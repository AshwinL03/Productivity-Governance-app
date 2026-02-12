import { AlertCircle, Check } from "lucide-react";
import "../../../stylesheet/logHours.css";

function TotalHoursCard({ totalHours, activeTab }) {
  const isWeek = activeTab === "week";
  const showWarning = isWeek && totalHours > 40;

  return (
    <div className="total-card">

      {/* Right Success Icon */}
      <div className="total-icon">
        <Check size={18} />
      </div>

      <div className="total-header">
        <h4>
          {isWeek
            ? "Total Hours This Week"
            : "Total Hours Today"}
        </h4>
      </div>

      <div className="total-value">
        {totalHours} hrs
      </div>

      {totalHours === 0 && (
        <p className="no-hours-text">
          No hours logged yet.
        </p>
      )}

      {showWarning && (
        <div className="warning-box">
          <AlertCircle size={16} />
          <span>
            You’ve logged more than 40 hours this week.
          </span>
        </div>
      )}

    </div>
  );
}

export default TotalHoursCard;
