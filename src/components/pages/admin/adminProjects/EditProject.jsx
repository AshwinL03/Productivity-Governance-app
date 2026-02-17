// src/components/pages/admin/adminProjects/EditProject.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import DatePickerField from "./DatePickerField";
import "../../../stylesheet/editProject.css";

function EditProject() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  
  // Mock project data
  const [formData, setFormData] = useState({
    projectName: "Mobile App Redesign",
    description: "Complete redesign of the mobile application with new UI/UX patterns and improved performance.",
    startDate: "Jan 15, 2025",
    endDate: "Jun 30, 2025",
    projectLead: "Sarah Chen"
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [assignedMembers, setAssignedMembers] = useState([
    { 
      id: 1, 
      name: "Sarah Chen", 
      email: "sarah.chen@company.com", 
      role: "Lead" 
    },
    { 
      id: 2, 
      name: "Michael Torres", 
      email: "michael.torres@company.com", 
      role: "Member" 
    },
    { 
      id: 3, 
      name: "Emily Johnson", 
      email: "emily.johnson@company.com", 
      role: "Member" 
    }
  ]);

  // Mock available members for search
  const [availableMembers] = useState([
    { id: 4, name: "Jane Doe", email: "jane.doe@company.com", role: "Member" },
    { id: 5, name: "John Smith", email: "john.smith@company.com", role: "Member" },
    { id: 6, name: "David Kim", email: "david.kim@company.com", role: "Member" },
    { id: 7, name: "Lisa Wang", email: "lisa.wang@company.com", role: "Member" },
    { id: 8, name: "Robert Chen", email: "robert.chen@company.com", role: "Member" },
    { id: 9, name: "Amanda Lee", email: "amanda.lee@company.com", role: "Member" }
  ]);

  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle date changes
  const handleDateChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // Handle search
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
    } else {
      const results = availableMembers.filter(member => 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    }
  }, [searchTerm, availableMembers]);

  // Add member to assigned list
  const handleAddMember = (member) => {
    if (!assignedMembers.find(m => m.id === member.id)) {
      setAssignedMembers([...assignedMembers, { ...member, role: "Member" }]);
    }
    setSearchTerm("");
    setShowSearchResults(false);
  };

  // Remove member from assigned list
  const handleRemoveMember = (memberId) => {
    setAssignedMembers(assignedMembers.filter(m => m.id !== memberId));
  };

  // Handle save
  const handleSaveChanges = () => {
    // Validate required fields
    if (!formData.projectName.trim()) {
      alert("Project Name is required");
      return;
    }
    if (!formData.description.trim()) {
      alert("Description is required");
      return;
    }
    if (!formData.startDate.trim()) {
      alert("Start Date is required");
      return;
    }
    if (!formData.endDate.trim()) {
      alert("End Date is required");
      return;
    }
    if (!formData.projectLead.trim()) {
      alert("Project Lead is required");
      return;
    }

    // Check if at least one member is assigned
    if (assignedMembers.length === 0) {
      alert("Please assign at least one member to the project");
      return;
    }

    // Check if project lead is in assigned members
    const leadExists = assignedMembers.some(m => m.name === formData.projectLead);
    if (!leadExists) {
      alert("Project lead must be added as a member first");
      return;
    }

    console.log("Saving project changes:", { formData, assignedMembers });
    alert("Project updated successfully!");
    navigate("/admin/projects");
  };

  // Handle cancel
  const handleCancel = () => {
    navigate("/admin/projects");
  };

  return (
    <div className="edit-project-container">
      {/* Header */}
      <div className="edit-project-header">
        <div>
          <h1 className="edit-project-title">Edit Project</h1>
          <p className="edit-project-subtitle">Update project details and assignments</p>
        </div>
      </div>

      {/* Project Details Card */}
      <div className="edit-card">
        <h2 className="card-heading">Project Details</h2>
        
        <div className="form-group">
          <label className="required-field">Project Name</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            placeholder="Enter project name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="required-field">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter project description"
            className="form-textarea"
            rows="3"
          />
        </div>

        <div className="date-row">
          <div className="form-group date-field">
            <DatePickerField
              label="Start Date *"
              value={formData.startDate}
              onChange={(value) => handleDateChange("startDate", value)}
              placeholder="Select start date"
            />
          </div>

          <div className="form-group date-field">
            <DatePickerField
              label="End Date *"
              value={formData.endDate}
              onChange={(value) => handleDateChange("endDate", value)}
              placeholder="Select end date"
            />
          </div>
        </div>
      </div>

      {/* Assign Project Lead Card */}
      <div className="edit-card">
        <h2 className="card-heading">Assign Project Lead</h2>
        
        <div className="form-group">
          <label className="required-field">Project Lead</label>
          <input
            type="text"
            name="projectLead"
            value={formData.projectLead}
            onChange={handleInputChange}
            placeholder="Enter project lead name"
            className="form-input"
          />
        </div>
      </div>

      {/* Assign Members Card */}
      <div className="edit-card">
        <h2 className="card-heading">Assign Members</h2>
        
        {/* Search Bar */}
        <div className="search-member-container">
          <div className="search-member-box">
            <Search size={18} className="search-member-icon" />
            <input
              type="text"
              placeholder="Search members by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-member-input"
            />
          </div>
          
          {/* Search Results Dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="search-results-dropdown">
              {searchResults.map(member => (
                <div 
                  key={member.id} 
                  className="search-result-item"
                  onClick={() => handleAddMember(member)}
                >
                  <div className="result-info">
                    <span className="result-name">{member.name}</span>
                    <span className="result-email">{member.email}</span>
                  </div>
                  <button className="add-btn">Add</button>
                </div>
              ))}
            </div>
          )}
          
          {showSearchResults && searchResults.length === 0 && searchTerm !== "" && (
            <div className="search-results-dropdown no-results">
              No members found
            </div>
          )}
        </div>

        {/* Assigned Members Count */}
        <div className="assigned-members-header">
          <h3 className="assigned-members-title">Assigned Members ({assignedMembers.length})</h3>
        </div>

        {/* Assigned Members List */}
        <div className="assigned-members-list">
          {assignedMembers.map(member => (
            <div key={member.id} className="assigned-member-card">
              <div className="member-info">
                <div>
                  <p className="member-name">{member.name}</p>
                  <p className="member-email">{member.email}</p>
                </div>
              </div>
              <div className="member-role-section">
                <span className={`member-role-badge ${member.role === 'Lead' ? 'lead-badge' : 'member-badge'}`}>
                  {member.role}
                </span>
                <button 
                  className="remove-member-btn"
                  onClick={() => handleRemoveMember(member.id)}
                  title="Remove member"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
          
          {assignedMembers.length === 0 && (
            <p className="no-members-message">No members assigned yet</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="edit-actions">
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-btn" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditProject;