import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";

/* ================= DATE PICKER ================= */

function DatePickerModal({ onClose, onSelectDate }) {
  const today = new Date();
  const modalRef = useRef(null);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handleSelect = (day) => {
    const formattedDate = `${day} ${
      new Date(currentYear, currentMonth).toLocaleString("default", {
        month: "short",
      })
    } ${currentYear}`;

    setSelectedDate(day);
    onSelectDate(formattedDate);
    onClose();
  };

  /* Close on outside click */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="date-picker-modal">
      <div className="calendar-card" ref={modalRef}>
        <div className="date-picker-header">
          <h3>Select date</h3>
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={handlePrevMonth}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={handleNextMonth}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="date-picker-month">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </div>

        <div className="weekdays">
          {weekdays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="days-grid">
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
            (day) => (
              <button
                key={day}
                className={`day ${
                  day === selectedDate ? "selected" : ""
                }`}
                onClick={() => handleSelect(day)}
              >
                {day}
              </button>
            )
          )}
        </div>

        <div className="date-picker-footer">
          <button
            className="today-btn"
            onClick={() => {
              const todayFormatted = `${today.getDate()} ${today.toLocaleString(
                "default",
                { month: "short" }
              )} ${today.getFullYear()}`;
              onSelectDate(todayFormatted);
              onClose();
            }}
          >
            Today
          </button>

          <button className="clear-btn" onClick={onClose}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= PROJECT TIMELINE ================= */

function ProjectTimeline() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  return (
    <div className="project-section">
      <h2 className="section-heading">
        <Calendar size={18} className="section-icon" />
        Project Timeline
      </h2>

      <div className="timeline-container">
        {/* START DATE */}
        <div className="timeline-col">
          <div className="timeline-label">
            <strong>Start Date</strong>
            <span className="asterisk">*</span>
          </div>

          <div className="date-picker-container">
            <div
              className="date-wrapper"
              onClick={() => {
                setShowStartPicker(true);
                setShowEndPicker(false);
              }}
            >
              <div className="date-left">
                <span className={!startDate ? "date-placeholder" : ""}>
                  {startDate || "Enter Start date"}
                </span>
              </div>
              <ChevronDown className="chevron-icon" />
            </div>

            {showStartPicker && (
              <DatePickerModal
                onClose={() => setShowStartPicker(false)}
                onSelectDate={(date) => setStartDate(date)}
              />
            )}
          </div>
        </div>

        {/* END DATE */}
        <div className="timeline-col">
          <div className="timeline-label">
            <strong>End Date</strong>
            <span className="asterisk">*</span>
          </div>

          <div className="date-picker-container">
            <div
              className="date-wrapper"
              onClick={() => {
                setShowEndPicker(true);
                setShowStartPicker(false);
              }}
            >
              <div className="date-left">
                <span className={!endDate ? "date-placeholder" : ""}>
                  {endDate || "Enter End date"}
                </span>
              </div>
              <ChevronDown className="chevron-icon" />
            </div>

            {showEndPicker && (
              <DatePickerModal
                onClose={() => setShowEndPicker(false)}
                onSelectDate={(date) => setEndDate(date)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;
