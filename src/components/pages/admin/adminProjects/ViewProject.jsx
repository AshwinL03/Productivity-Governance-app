// src/components/pages/admin/adminProjects/ProjectView.jsx
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Edit2, Users, Calendar, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import "../../../stylesheet/viewProject.css";

function ProjectView() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  
  // Mock project data - This will come from API in future
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setProject({
        id: projectId,
        name: "Mobile App Redesign",
        description: "Complete overhaul of the mobile application interface with new design system and improved user experience",
        status: "Active",
        lead: "Sarah Chen",
        teamSize: 5,
        progress: 45,
        startDate: "January 15, 2025",
        endDate: "June 30, 2025",
        budget: "$150,000",
        milestones: [
          { id: 1, name: "Design System Complete", dueDate: "Feb 28, 2025", status: "completed" },
          { id: 2, name: "Component Library", dueDate: "Mar 31, 2025", status: "in-progress" },
          { id: 3, name: "User Testing Phase", dueDate: "May 15, 2025", status: "upcoming" },
          { id: 4, name: "Production Launch", dueDate: "Jun 30, 2025", status: "upcoming" }
        ],
        teamMembers: [
          { id: 1, name: "Sarah Chen", role: "Practice Lead", thisWeek: 38, utilization: 95, avatar: "SC" },
          { id: 2, name: "Jane Doe", role: "POD Member", thisWeek: 42, utilization: 105, avatar: "JD" },
          { id: 3, name: "John Smith", role: "POD Member", thisWeek: 40, utilization: 100, avatar: "JS" },
          { id: 4, name: "Emily Johnson", role: "POD Member", thisWeek: 36, utilization: 90, avatar: "EJ" },
          { id: 5, name: "Michael Torres", role: "POD Member", thisWeek: 24, utilization: 60, avatar: "MT" }
        ],
        weeklyHours: [
          { id: 1, week: "Feb 10 - Feb 16", logged: 180, budget: 200 },
          { id: 2, week: "Feb 3 - Feb 9", logged: 172, budget: 200 },
          { id: 3, week: "Jan 27 - Feb 2", logged: 185, budget: 200 },
          { id: 4, week: "Jan 20 - Jan 26", logged: 195, budget: 200 }
        ]
      });
      setLoading(false);
    }, 500);
  }, [projectId]);

  const handleEditProject = () => {
    navigate(`/admin/projects/edit/${projectId}`);
  };

  const handleBackToProjects = () => {
    navigate("/admin/projects");
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "completed":
        return "status-badge-completed";
      case "in-progress":
        return "status-badge-progress";
      case "upcoming":
        return "status-badge-upcoming";
      default:
        return "status-badge-upcoming";
    }
  };

  const getStatusDisplay = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return "Upcoming";
    }
  };

  const getMilestoneStatusIcon = (status) => {
    return <Calendar size={16} className="milestone-icon" />;
  };

  const getUtilizationColor = (utilization) => {
    if (utilization > 100) return "utilization-high";
    if (utilization < 75) return "utilization-low";
    return "utilization-optimal";
  };

  const getUtilizationClass = (utilization) => {
    if (utilization > 100) return "utilization-red";
    if (utilization < 75) return "utilization-grey";
    return "utilization-green";
  };

  if (loading) {
    return (
      <div className="project-view-loading">
        <div className="loading-spinner"></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-view-error">
        <h2>Project not found</h2>
        <button onClick={handleBackToProjects} className="back-to-projects-btn">
          <ArrowLeft size={16} />
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="project-view-container">
      {/* Back Navigation */}
      <button className="back-nav-btn" onClick={handleBackToProjects}>
        <ArrowLeft size={16} />
        Back to Projects
      </button>

      {/* Header with Edit Button */}
      <div className="project-view-header">
        <div>
          <h1 className="project-view-title">{project.name}</h1>
          <p className="project-view-subtitle">{project.description}</p>
        </div>
        <button className="edit-project-btn" onClick={handleEditProject}>
          <Edit2 size={16} />
          Edit Project
        </button>
      </div>

      {/* KPI Cards Row */}
      <div className="kpi-cards-row">
        {/* Status Card */}
        <div className="kpi-card status-card">
          <p className="kpi-card-label">Status</p>
          <div className="status-wrapper">
            <span className={`status-indicator ${project.status.toLowerCase()}`}></span>
            <span className="status-value">{project.status}</span>
          </div>
        </div>

        {/* Lead Card */}
        <div className="kpi-card">
          <p className="kpi-card-label">Lead</p>
          <p className="kpi-card-value">{project.lead}</p>
        </div>

        {/* Team Size Card */}
        <div className="kpi-card team-card">
          <p className="kpi-card-label">Team Size</p>
          <div className="team-size-wrapper">
            <div className="team-icon-wrapper">
              <Users size={16} color="#7c3aed" />
            </div>
            <span className="team-size-value">{project.teamSize}</span>
          </div>
        </div>

        {/* Progress Card */}
        <div className="kpi-card progress-card">
          <p className="kpi-card-label">Progress</p>
          <div className="progress-wrapper">
            <span className="progress-value">{project.progress}%</span>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout for Details and Milestones */}
      <div className="details-milestones-row">
        {/* Project Details Card - Updated */}
        <div className="details-card">
          <h2 className="card-title">Project Details</h2>
          <div className="details-list">
            <div className="detail-item">
              <p className="detail-label">Start Date</p>
              <p className="detail-value">{project.startDate}</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">End Date</p>
              <p className="detail-value">{project.endDate}</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">Budget</p>
              <p className="detail-value budget-value">{project.budget}</p>
            </div>
          </div>
        </div>

        {/* Project Milestones Card - Updated */}
        <div className="milestones-card">
          <h2 className="card-title">Project Milestones</h2>
          <p className="card-subtitle">Key deliverables and deadlines</p>
          <div className="milestones-grid">
            {project.milestones.map(milestone => (
              <div key={milestone.id} className="milestone-card-item">
                <div className="milestone-card-content">
                  <div className="milestone-card-left">
                    <h3 className="milestone-card-title">{milestone.name}</h3>
                    <div className="milestone-card-date">
                      <Calendar size={14} className="milestone-icon grey" />
                      <span>{milestone.dueDate}</span>
                    </div>
                  </div>
                  <div className="milestone-card-right">
                    <span className={`milestone-card-badge ${getStatusBadgeClass(milestone.status)}`}>
                      {getStatusDisplay(milestone.status)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members Card - Updated with card-style items */}
      <div className="team-members-card">
        <h2 className="card-title">Team Members</h2>
        <p className="card-subtitle">Current team allocation and hours</p>
        
        <div className="team-members-grid">
          {project.teamMembers.map(member => (
            <div key={member.id} className="team-member-card-item">
              <div className="team-member-card-content">
                <div className="team-member-left">
                  <div className="member-avatar">{member.avatar}</div>
                  <div className="member-info">
                    <p className="member-name">{member.name}</p>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>
                <div className="team-member-details">
                  <div className="member-detail-item">
                    <span className="detail-label">This Week</span>
                    <span className="detail-value hours">{member.thisWeek} hrs</span>
                  </div>
                  <div className="member-detail-item">
                    <span className="detail-label">Utilization</span>
                    <span className={`detail-value utilization ${getUtilizationClass(member.utilization)}`}>
                      {member.utilization}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Hours Card - New */}
      <div className="weekly-hours-card">
        <h2 className="card-title">Weekly Hours</h2>
        <p className="card-subtitle">Team hours logged vs. budget</p>
        
        <div className="weekly-hours-list">
          {project.weeklyHours.map(week => {
            const percentage = (week.logged / week.budget) * 100;
            
            return (
              <div key={week.id} className="weekly-hour-item">
                <div className="weekly-hour-header">
                  <span className="week-range">{week.week}</span>
                  <span className="week-total">
                    {week.logged} / {week.budget} hrs
                  </span>
                </div>
                <div className="weekly-progress-bar">
                  <div 
                    className="weekly-progress-fill" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectView;