import { Eye, Edit2, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../../stylesheet/projects.css";

function Project({ project, onView, onDelete }) {
  const navigate = useNavigate();

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "status-active";
      case "At risk":
        return "status-at-risk";
      case "Completed":
        return "status-completed";
      default:
        return "";
    }
  };

  const handleEdit = () => {
    navigate(`/admin/projects/edit/${project.id}`);
  };

  return (
    <tr className="project-row">
      <td className="project-name-cell">{project.name}</td>
      <td className="project-lead-cell">{project.lead}</td>
      <td className="project-members-cell">{project.members}</td>
      <td className="project-duration-cell">{project.duration}</td>
      <td className="project-status-cell">
        <span className={`status-badge ${getStatusClass(project.status)}`}>
          {project.status}
        </span>
      </td>
      <td className="project-actions-cell">
        <div className="action-icons">
          <button 
            className="action-btn view-btn" 
            onClick={() => onView(project)}
            title="View Project"
          >
            <Eye size={18} />
          </button>
          <button 
            className="action-btn edit-btn" 
            onClick={handleEdit}
            title="Edit Project"
          >
            <Edit2 size={18} />
          </button>
          <button 
            className="action-btn delete-btn" 
            onClick={() => onDelete(project)}
            title="Delete Project"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Project;