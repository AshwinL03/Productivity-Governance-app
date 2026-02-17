// src/components/pages/admin/adminProjects/DatePickerField.jsx
import { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import "../../../stylesheet/datePickerField.css";

function DatePickerField({ value, onChange, placeholder = "Select date", label }) {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || "");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const pickerRef = useRef(null);

  // Handle click outside to close picker
  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Generate calendar days
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days = [];
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    // Add days of month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i);
    }
    return days;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleDateSelect = (day) => {
    if (!day) return;
    
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    
    setSelectedDate(formattedDate);
    onChange(formattedDate);
    setShowPicker(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  return (
    <div className="date-picker-field" ref={pickerRef}>
      {label && <label className={label.includes("*") ? "required-field" : ""}>{label}</label>}
      
      <div 
        className={`date-input-wrapper ${showPicker ? 'active' : ''}`}
        onClick={() => setShowPicker(!showPicker)}
      >
        <input
          type="text"
          value={selectedDate}
          placeholder={placeholder}
          readOnly
          className="date-input"
        />
        <Calendar size={18} className="calendar-icon" />
      </div>

      {showPicker && (
        <div className="date-picker-popup">
          <div className="date-picker-header">
            <button className="month-nav-btn" onClick={handlePrevMonth}>
              <ChevronLeft size={16} />
            </button>
            <span className="month-year">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button className="month-nav-btn" onClick={handleNextMonth}>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="date-picker-weekdays">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
              <span key={day} className="weekday">{day}</span>
            ))}
          </div>

          <div className="date-picker-days">
            {getDaysInMonth(currentMonth).map((day, index) => (
              <button
                key={index}
                className={`day-cell ${day ? '' : 'empty'} ${
                  selectedDate === `${monthNames[currentMonth.getMonth()]} ${day}, ${currentMonth.getFullYear()}` 
                    ? 'selected' 
                    : ''
                }`}
                onClick={() => handleDateSelect(day)}
                disabled={!day}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="date-picker-footer">
            <button 
              className="today-btn"
              onClick={() => {
                const today = new Date();
                setCurrentMonth(today);
                handleDateSelect(today.getDate());
              }}
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DatePickerField;