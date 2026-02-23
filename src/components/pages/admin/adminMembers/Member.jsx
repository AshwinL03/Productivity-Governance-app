// src/components/pages/admin/adminMembers/Member.jsx
import { Eye, Edit2, Trash2, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Member({ member, onDelete }) {
  const navigate = useNavigate();

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "status-active";
      case "Deactivated":
        return "status-deactivated";
      default:
        return "";
    }
  };

  const getUtilizationClass = (utilization) => {
    if (utilization >= 45) return "utilization-high";
    if (utilization <= 30) return "utilization-low";
    return "utilization-optimal";
  };

  const handleView = () => {
    navigate(`/admin/members/view/${member.id}`);
  };

  const handleEdit = () => {
    navigate(`/admin/members/edit/${member.id}`);
  };

  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete "${member.name}"?`)) {
      onDelete(member);
    }
  };

  return (
    <tr className="member-row">
      <td className="member-name-cell">
        <span className="member-name">{member.name}</span>
      </td>
      <td className="member-email-cell">{member.email}</td>
      <td className="member-role-cell">
        <span className={`role-badge ${member.role === 'Admin' ? 'role-admin' : member.role === 'Practice Lead' ? 'role-lead' : 'role-member'}`}>
          {member.role}
        </span>
      </td>
      <td className="member-utilization-cell">
        <div className="utilization-wrapper">
          <span className={`utilization-value ${getUtilizationClass(member.utilization)}`}>
            {member.utilization}%
          </span>
          {member.warning && (
            <AlertTriangle size={12} className="utilization-warning" />
          )}
        </div>
      </td>
      <td className="member-status-cell">
        <span className={`status-badge ${getStatusClass(member.status)}`}>
          {member.status}
        </span>
      </td>
      <td className="member-actions-cell">
        <div className="action-icons">
          <button 
            className="action-btn view-btn" 
            onClick={handleView}
            title="View Member"
          >
            <Eye size={18} />
          </button>
          <button 
            className="action-btn edit-btn" 
            onClick={handleEdit}
            title="Edit Member"
          >
            <Edit2 size={18} />
          </button>
          <button 
            className="action-btn delete-btn" 
            onClick={handleDeleteClick}
            title="Delete Member"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Member;