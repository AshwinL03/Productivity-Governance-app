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
    <div className="add-project-card">

      <div className="add-pro-header">
        <h3>Assign Project to My Timeline</h3>
        <button className="close-btn" onClick={onClose}>
          <X size={16} />
        </button>
      </div>

      <div className="form-group">
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

      <div className="form-actions">
        <button className="primary-btn" onClick={handleAdd}>
          Add to Timeline
        </button>
        <button className="secondary-btn" onClick={onClose}>
          Cancel
        </button>
      </div>

    </div>
  );
}

export default AddProjectCard;
