import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../../stylesheet/datePicker.css";

function DateRangePicker({ onClose, onApply }) {
  // Month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Current calendar month
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1));

  // Selected day
  const [selectedDay, setSelectedDay] = useState(1);

  // Selected range
  const [range, setRange] = useState("Feb 1 – Feb 7, 2026");

  // Days in current month
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  // Helper function to update range
  const updateRange = (date, day) => {
    const month = monthNames[date.getMonth()];

    const year = date.getFullYear();

    setRange(`${month} ${day} – ${month} ${day + 6}, ${year}`);
  };

  // Change month
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);

    newDate.setMonth(currentDate.getMonth() + direction);

    setCurrentDate(newDate);

    const day = 1;

    setSelectedDay(day);

    updateRange(newDate, day);
  };

  // Day click
  const handleDayClick = (day) => {
    setSelectedDay(day);

    updateRange(currentDate, day);
  };

  return (
    <div className="ofdr-container">
      {/* Calendar Section */}

      <div className="ofdr-section">
        <p className="ofdr-section-title">Select start date</p>

        <div className="ofdr-calendar">
          {/* Header */}

          <div className="ofdr-calendar-header">
            <button className="ofdr-nav-btn" onClick={() => changeMonth(-1)}>
              <ChevronLeft size={14} />
            </button>

            <span className="ofdr-calendar-title">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>

            <button className="ofdr-nav-btn" onClick={() => changeMonth(1)}>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Calendar Grid */}

          <div className="ofdr-calendar-grid">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <span key={d} className="ofdr-day-label">
                {d}
              </span>
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;

              return (
                <span
                  key={day}
                  className={`ofdr-day ${
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

      <div className="ofdr-selected-range-box">
        <p className="ofdr-selected-label">Selected Range</p>

        <p className="ofdr-selected-value">{range}</p>
      </div>

      {/* Actions */}

      <div className="ofdr-actions">
        <button className="ofdr-apply-btn" onClick={() => onApply(range)}>
          Apply
        </button>

        <button className="ofdr-cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default DateRangePicker;
