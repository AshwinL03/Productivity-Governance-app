import { useState } from "react";
import ProgressRow from "./ProgressRow";
import DateRangePicker from "./DateRangePicker";
import { CalendarDays } from "lucide-react";

import "../../../stylesheet/overview.css";

function OverviewCard() {
  const [showPicker, setShowPicker] = useState(false);
  const [dateRange, setDateRange] = useState("Feb 1 – Feb 7, 2026");

  return (
    <div className="card overview-card">
      <div className="card-header">
        <div>
          <h3>Overview</h3>
          <p>Total project hours this week</p>
        </div>

        <button className="date-btn" onClick={() => setShowPicker(true)}>
          <CalendarDays size={14} />
          <span>{dateRange}</span>
        </button>
      </div>

      {showPicker && (
        <div className="date-popover">
          <DateRangePicker
            onClose={() => setShowPicker(false)}
            onApply={(range) => {
              setDateRange(range);
              setShowPicker(false);
            }}
          />
        </div>
      )}

      <ProgressRow label="Project 1" value={18} max={20} />
      <ProgressRow label="Project 2" value={12} max={20} />
      <ProgressRow label="Project 3" value={8} max={20} />
      <ProgressRow label="Non-project" value={4} max={20} muted />
    </div>
  );
}

export default OverviewCard;
