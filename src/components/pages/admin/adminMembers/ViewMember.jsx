import { useNavigate, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Briefcase, 
  Users, 
  Calendar, 
  CheckCircle,
  TrendingUp
} from "lucide-react";
import "../../../stylesheet/viewMember.css";

function ViewMember() {
  const navigate = useNavigate();
  const { memberId } = useParams();

  const member = {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@company.com",
    role: "POD Member",
    team: "Engineering POD",
    joinDate: "January 15, 2024",
    status: "Active",
    allocation: {
      assigned: 40,
      logged: 48,
      variance: 8,
      status: "Above allocation"
    },
    projects: [
      { 
        id: 1, 
        name: "Mobile App Redesign", 
        duration: "Jan 2025 - Jun 2025",
        role: "Member",
        status: "Active"
      },
      { 
        id: 2, 
        name: "Customer Portal V2", 
        duration: "Feb 2025 - Aug 2025",
        role: "Member",
        status: "Active"
      },
      { 
        id: 3, 
        name: "API Gateway Integration", 
        duration: "Mar 2025 - Jul 2025",
        role: "Member",
        status: "Active"
      }
    ]
  };

  const handleBack = () => {
    navigate("/admin/members");
  };

  return (
    <div className="view-member-container">
      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>
        <ArrowLeft size={16} />
        <span>Back to Members</span>
      </button>

      {/* Header */}
      <div className="view-member-header">
        <div className="member-title-section">
          <h1 className="member-title">{member.name}</h1>
          <p className="member-subtitle">Member details and activity overview</p>
        </div>
      </div>

      {/* Card 1: Basic Information */}
      <div className="info-card">
        <div className="card-header">
          <h2 className="card-heading">Basic Information</h2>
          <p className="card-subheading">Member account details (read-only)</p>
        </div>

        <div className="info-grid">
          {/* Row 1: Full Name & Email */}
          <div className="info-row">
            <div className="info-item">
              <div className="info-label">
                <div className="icon-wrapper">
                  <User size={16} className="info-icon" />
                </div>
                <span>Full Name</span>
              </div>
              <div className="info-value">{member.name}</div>
            </div>
            <div className="info-item">
              <div className="info-label">
                <div className="icon-wrapper">
                  <Mail size={16} className="info-icon" />
                </div>
                <span>Email Address</span>
              </div>
              <div className="info-value">{member.email}</div>
            </div>
          </div>

          {/* Row 2: Role & Team/POD */}
          <div className="info-row">
            <div className="info-item">
              <div className="info-label">
                <div className="icon-wrapper">
                  <Briefcase size={16} className="info-icon" />
                </div>
                <span>Role</span>
              </div>
              <div className="info-value">{member.role}</div>
            </div>
            <div className="info-item">
              <div className="info-label">
                <div className="icon-wrapper">
                  <Users size={16} className="info-icon" />
                </div>
                <span>Team / POD</span>
              </div>
              <div className="info-value">{member.team}</div>
            </div>
          </div>

          {/* Row 3: Join Date & Status */}
          <div className="info-row">
            <div className="info-item">
              <div className="info-label">
                <div className="icon-wrapper">
                  <Calendar size={16} className="info-icon" />
                </div>
                <span>Join Date</span>
              </div>
              <div className="info-value">{member.joinDate}</div>
            </div>
            <div className="info-item">
              <div className="info-label">
                <div className="icon-wrapper">
                  <CheckCircle size={16} className="info-icon" />
                </div>
                <span>Status</span>
              </div>
              <div className="info-value">
                <span className="status-badge status-active">
                  {member.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Allocation Overview */}
      <div className="allocation-card">
        <div className="card-header">
          <h2 className="card-heading">Allocation Overview</h2>
          <p className="card-subheading">Comparison of assigned vs logged hours</p>
        </div>

        <div className="allocation-grid">
          {/* Card 1: Assigned Allocation - Violet Theme */}
          <div className="allocation-stat-card violet-theme">
            <div className="stat-content">
              <span className="stat-label">Assigned allocation</span>
              <span className="stat-value">{member.allocation.assigned}%</span>
              <span className="stat-subtext">Project allocations</span>
            </div>
          </div>

          {/* Card 2: Logged Utilization - Blue Theme */}
          <div className="allocation-stat-card blue-theme">
            <div className="stat-content">
              <span className="stat-label">Logged utilization</span>
              <span className="stat-value">{member.allocation.logged}%</span>
              <span className="stat-subtext">Actual hours logged</span>
            </div>
          </div>

          {/* Card 3: Variance - Orange Theme with Icon */}
          <div className="allocation-stat-card orange-theme">
            <div className="stat-content">
              <span className="stat-label">Variance</span>
              <div className="variance-wrapper">
                <TrendingUp size={18} className="variance-icon" />
                <span className={`stat-value variance-positive`}>
                  {member.allocation.variance > 0 ? '+' : ''}{member.allocation.variance}%
                </span>
              </div>
              <span className="stat-subtext">{member.allocation.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Assigned Projects */}
      <div className="projects-card">
        <div className="card-header">
          <h2 className="card-heading">Assigned Projects</h2>
          <p className="card-subheading">Current project assignments</p>
        </div>

        <div className="projects-list">
          {member.projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-info">
                <div className="project-name-wrapper">
                  <span className="project-name">{project.name}</span>
                  <div className="project-badges">
                    <span className="project-role-badge">{project.role}</span>
                    <span className="project-status-badge status-active">{project.status}</span>
                  </div>
                </div>
                <div className="project-duration">
                  {project.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewMember;