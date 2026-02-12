import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../../stylesheet/datePicker.css";

function DateRangePicker({ onClose, onApply }) {
  const [selectedDay, setSelectedDay] = useState(1);
  const [range, setRange] = useState("Feb 1 – Feb 7, 2026");

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setRange(`Feb ${day} – Feb ${day + 6}, 2026`);
  };

  return (
    <div className="date-picker">
      {/* Quick Presets */}
      <div className="date-section">
        <p className="section-title">Quick Presets</p>
        <div className="preset-row">
          <button>This Week</button>
          <button>Last 7 Days</button>
          <button>This Month</button>
        </div>
      </div>

      {/* Calendar */}
      <div className="date-section">
        <p className="section-title">Select start date</p>

        <div className="calendar">
          <div className="calendar-header">
            <button className="nav-btn">
              <ChevronLeft size={14} />
            </button>
            <span>February 2026</span>
            <button className="nav-btn">
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="calendar-grid">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <span key={d} className="day-label">
                {d}
              </span>
            ))}

            {Array.from({ length: 28 }).map((_, i) => {
              const day = i + 1;
              return (
                <span
                  key={day}
                  className={`day ${
                    selectedDay === day ? "selected" : ""
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Range */}
      <div className="date-section selected-range-box">
        <p className="selected-label">Selected Range</p>
        <p className="selected-value">{range}</p>
        <p className="helper-text">
          Select a date range to update your overview.
        </p>
      </div>

      {/* Actions */}
      <div className="date-actions">
        <button className="apply-btn" onClick={() => onApply(range)}>
          Apply
        </button>
        <button className="cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DateRangePicker;
