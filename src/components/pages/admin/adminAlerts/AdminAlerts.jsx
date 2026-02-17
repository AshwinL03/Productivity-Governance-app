import { User, Briefcase, Calendar, AlertTriangle, Users, UserPlus } from "lucide-react";
import "../../../stylesheet/adminAlerts.css";

function AdminAlerts() {
  const pendingRequests = [
    {
      id: 1,
      name: "Jane Doe",
      role: "POD Member",
      projectName: "Mobile App Redesign",
      duration: "Feb 15, 2026 – May 15, 2026",
      lead: "Sarah Chen",
      reason: "I have expertise in React Native and mobile UX design which would be valuable for this project. My current workload allows me to contribute 10-15 hours weekly.",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      name: "Michael Torres",
      role: "POD Member",
      projectName: "Data Analytics Platform",
      duration: "Feb 20, 2026 – Apr 20, 2026",
      lead: "David Kim",
      reason: "The team needs additional support with data visualization components. I have prior experience with Recharts and D3.js.",
      timeAgo: "5 hours ago"
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Practice Lead",
      projectName: "Security Infrastructure Upgrade",
      duration: "Mar 1, 2026 – Mar 31, 2026",
      lead: "Sarah Chen",
      reason: "I'd like to support the security review phase and contribute to documentation. This aligns with my professional development goals.",
      timeAgo: "1 day ago"
    }
  ];

  const otherAlerts = {
    overutilized: [
      { 
        id: 1, 
        name: "Sarah Chen", 
        role: "Practice Lead", 
        hours: 48, 
        projects: "3 projects" 
      },
      { 
        id: 2, 
        name: "David Kim", 
        role: "POD Member", 
        hours: 46, 
        projects: "2 projects" 
      }
    ],
    projectsWithoutLeads: [
      { 
        id: 1, 
        name: "Legacy System Migration", 
        members: "4 members assigned"
      }
    ],
    membersWithoutProjects: [
      { 
        id: 1, 
        name: "Lisa Martinez", 
        role: "POD Member"
      }
    ]
  };

  return (
    <div className="admin-alerts-container">
      {/* HEADER */}
      <div className="admin-alerts-header">
        <div>
          <h1 className="admin-alerts-title">Alerts</h1>
          <p className="admin-alerts-subtitle">Review pending actions and system notifications</p>
        </div>
      </div>

      {/* PENDING PROJECT REQUESTS SECTION */}
      <div className="admin-alerts-section">
        <div className="section-header">
          <h2 className="section-title">Pending Project Requests</h2>
          <span className="section-count">{pendingRequests.length}</span>
        </div>

        {pendingRequests.map((request) => (
          <div key={request.id} className="request-card">
            {/* Top Row with User Info and Action Buttons */}
            <div className="request-top-row">
              <div className="user-info-container">
                <div className="user-icon violet-bg">
                  <User size={16} color="white" />
                </div>
                <div className="user-info">
                  <span className="user-name">{request.name}</span>
                  <span className="user-role grey-text"> • {request.role}</span>
                </div>
              </div>
              
              {/* Action Buttons in Top Right */}
              <div className="top-action-buttons">
                <button className="approve-btn">Approve</button>
                <button className="deny-btn">Deny</button>
              </div>
            </div>

            {/* Subline - Requested temporary project access */}
            <div className="request-subline grey-text">
              Requested temporary project access
            </div>

            {/* Project Details without extra styling */}
            <div className="project-details-plain">
              <div className="plain-detail-row">
                <Briefcase size={14} className="grey-icon" />
                <span className="project-name-black">{request.projectName}</span>
              </div>
              
              <div className="plain-detail-row">
                <Calendar size={14} className="grey-icon" />
                <span className="project-duration">{request.duration}</span>
                <span className="project-lead-label"> • Lead: {request.lead}</span>
              </div>
            </div>

            {/* Reason with label */}
            <div className="reason-with-label">
              <span className="reason-label-text">Reason:</span>
              <p className="reason-plain-text">{request.reason}</p>
            </div>

            {/* Footer with Time */}
            <div className="request-footer-new">
              <span className="time-ago">{request.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>

      {/* OTHER ALERTS SECTION */}
      <div className="admin-alerts-section">
        <h2 className="section-title">Other Alerts</h2>

        <div className="other-alerts-horizontal">
          {/* Card 1: Overutilized Members - Orange Theme */}
          <div className="alert-card">
            <div className="alert-card-header">
              <div className="card-icon orange-bg">
                <AlertTriangle size={18} color="#f97316" />
              </div>
              <div className="card-header-text">
                <h3 className="card-title orange-title">Overutilized Members</h3>
                <p className="card-subtitle">Above 45 hours/week</p>
              </div>
            </div>

            <div className="alert-inner-cards">
              {otherAlerts.overutilized.map((member) => (
                <div key={member.id} className="inner-card orange-inner">
                  <div className="inner-card-content">
                    <div className="inner-card-left">
                      <span className="member-name">{member.name}</span>
                      <span className="member-projects">{member.projects}</span>
                    </div>
                    <div className="inner-card-right">
                      <span className="hours-badge orange-hours">{member.hours}h</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Projects Without Leads - Red Theme */}
          <div className="alert-card">
            <div className="alert-card-header">
              <div className="card-icon red-bg">
                <Users size={18} color="#000000" />
              </div>
              <div className="card-header-text">
                <h3 className="card-title red-title">Projects Without Leads</h3>
                <p className="card-subtitle">Requires assignment</p>
              </div>
            </div>

            <div className="alert-inner-cards">
              {otherAlerts.projectsWithoutLeads.map((project) => (
                <div key={project.id} className="inner-card red-inner">
                  <div className="inner-card-content">
                    <div className="inner-card-left">
                      <span className="project-name-bold">{project.name}</span>
                      <span className="project-members">{project.members}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Members Without Projects - Grey Theme */}
          <div className="alert-card">
            <div className="alert-card-header">
              <div className="card-icon grey-bg">
                <UserPlus size={18} color="#6b7280" />
              </div>
              <div className="card-header-text">
                <h3 className="card-title grey-title">Members Without Projects</h3>
                <p className="card-subtitle grey-subtitle">Available for assignment</p>
              </div>
            </div>

            <div className="alert-inner-cards">
              {otherAlerts.membersWithoutProjects.map((member) => (
                <div key={member.id} className="inner-card grey-inner">
                  <div className="inner-card-content">
                    <div className="inner-card-left">
                      <span className="member-name">{member.name}</span>
                      <span className="member-role-light">{member.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAlerts;