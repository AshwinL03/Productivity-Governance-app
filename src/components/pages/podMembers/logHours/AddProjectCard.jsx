import { X, CalendarDays } from "lucide-react";
import { useState } from "react";
import "../../../stylesheet/logHours.css";

function AddProjectCard({ onClose, onAddProject }) {

  const [selectedProject, setSelectedProject] = useState("");

  const handleAdd = () => {
    if (!selectedProject) return;

    onAddProject(selectedProject);
  };

  return (
    <div className="log-add-project-card">

      <div className="log-add-pro-header">
        <h3>Assign Project to My Timeline</h3>
        <button className="close-btn" onClick={onClose}>
          <X size={16} />
        </button>
      </div>

      <div className="log-form-group">
        <label>Project</label>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">Select project</option>
          <option value="Project Alpha">Project Alpha</option>
          <option value="Project Beta">Project Beta</option>
          <option value="Project Gamma">Project Gamma</option>
        </select>
      </div>

      <div className="log-date-row">
        <div className="log-form-group">
          <label>Start Date</label>
          <div className="log-date-input">
            <CalendarDays size={14} />
            <input type="date" placeholder="Pick a date" />
          </div>
        </div>

        <div className="log-form-group">
          <label>End Date</label>
          <div className="log-date-input">
            <CalendarDays size={14} />
            <input type="date" placeholder="Pick a date" />
          </div>
        </div>
      </div>

      <p className="helper-text">
        This project will appear in your Log Hours during the selected period.
      </p>

      <div className="form-actions">
        <button className="log-primary-btn" onClick={handleAdd}>
          Add to Timeline
        </button>
        <button className="log-secondary-btn" onClick={onClose}>
          Cancel
        </button>
      </div>

    </div>
  );
}

export default AddProjectCard;
