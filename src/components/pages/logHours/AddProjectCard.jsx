import { X, CalendarDays } from "lucide-react";
import "../../stylesheet/logHours.css";

function AddProjectCard({ onClose }) {
  return (
    <div className="add-project-card">
      
      {/* Header */}
      <div className="add-project-header">
        <h3>Assign Project to My Timeline</h3>
        <button className="close-btn" onClick={onClose}>
          <X size={16} />
        </button>
      </div>

      {/* Form Fields */}
      <div className="form-group">
        <label>Project</label>
        <select>
          <option>Select project</option>
          <option>Project 1</option>
          <option>Project 2</option>
        </select>
      </div>

      <div className="date-row">
        <div className="form-group">
          <label>Start Date</label>
          <div className="date-input">
            <CalendarDays size={14} />
            <input type="text" placeholder="Pick a date" />
          </div>
        </div>

        <div className="form-group">
          <label>End Date</label>
          <div className="date-input">
            <CalendarDays size={14} />
            <input type="text" placeholder="Pick a date" />
          </div>
        </div>
      </div>

      <p className="helper-text">
        This project will appear in your Log Hours during the selected period.
      </p>

      {/* Actions */}
      <div className="form-actions">
        <button className="primary-btn">Add to Timeline</button>
        <button className="secondary-btn" onClick={onClose}>
          Cancel
        </button>
      </div>

    </div>
  );
}

export default AddProjectCard;
