// src/components/pages/admin/adminProjects/AdminProjects.jsx
import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Add this import
import Project from "./Project";
import "../../../stylesheet/adminProjects.css";

function AdminProjects() {
  const navigate = useNavigate(); // Add this
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample project data
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Mobile App Redesign",
      lead: "Sarah Chen",
      members: 6,
      duration: "Jan 2025 - Jun 2025",
      status: "Active"
    },
    {
      id: 2,
      name: "Cloud Migration",
      lead: "Michael Torres",
      members: 8,
      duration: "Dec 2024 - Apr 2025",
      status: "Active"
    },
    {
      id: 3,
      name: "Customer Portal V2",
      lead: "Emily Johnson",
      members: 5,
      duration: "Feb 2025 - Aug 2025",
      status: "Active"
    },
    {
      id: 4,
      name: "Data Analytics Platform",
      lead: "David Kim",
      members: 7,
      duration: "Nov 2024 - May 2025",
      status: "Active"
    },
    {
      id: 5,
      name: "Customer Portal V2",
      lead: "Emily Johnson",
      members: 5,
      duration: "Feb 2025 - Aug 2025",
      status: "Active"
    },
    {
      id: 6,
      name: "Data Analytics Platform",
      lead: "David Kim",
      members: 7,
      duration: "Nov 2024 - May 2025",
      status: "Active"
    },
    {
      id: 7,
      name: "API Gateway Integration",
      lead: "Jane Doe",
      members: 4,
      duration: "Mar 2025 - Jul 2025",
      status: "At risk"
    },
    {
      id: 8,
      name: "Legacy System Migration",
      lead: "John Smith",
      members: 6,
      duration: "Oct 2024 - Mar 2025",
      status: "Completed"
    }
  ]);

  // Filter projects based on search term
  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.lead.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewProject = (project) => {
    navigate(`/admin/projects/view/${project.id}`);
  };

  const handleEditProject = (project) => {
    navigate(`/admin/projects/edit/${project.id}`);
  };

  const handleDeleteProject = (project) => {
    if (window.confirm(`Are you sure you want to delete "${project.name}"?`)) {
      setProjects(projects.filter(p => p.id !== project.id));
      console.log("Delete project:", project);
    }
  };

  // Updated handleAddProject - navigate to AddProject page
  const handleAddProject = () => {
    navigate("/admin/projects/add");
  };

  return (
    <div className="admin-projects-container">
      {/* Header Section */}
      <div className="projects-header">
        <div>
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">Manage all projects and assignments</p>
        </div>
        <button className="add-project-btn" onClick={handleAddProject}>
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {/* Search Filter Section - Full Width */}
      <div className="search-filter-container">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search projects by name or lead..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Projects Table Section - No Scrollbars */}
      <div className="table-wrapper">
        <table className="projects-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Lead</th>
              <th>Members</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Project
                  key={project.id}
                  project={project}
                  onView={handleViewProject}
                  onEdit={handleEditProject}
                  onDelete={handleDeleteProject}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-results">
                  No projects found matching "{searchTerm}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Projects Summary */}
      <div className="projects-summary">
        <span>Showing {filteredProjects.length} of {projects.length} projects</span>
      </div>
    </div>
  );
}

export default AdminProjects;