// src/components/pages/admin/adminMembers/AddMember.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Info } from "lucide-react";
import "../../../stylesheet/addMembers.css";

function AddMember() {
  const navigate = useNavigate();

  // Mock POD Leads data - In real app, fetch users with role "Lead"
  const [podLeads] = useState([
    { id: 1, name: "John Smith", email: "john.smith@company.com" },
    { id: 2, name: "Sarah Chen", email: "sarah.chen@company.com" },
    { id: 3, name: "Emily Johnson", email: "emily.johnson@company.com" }
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    podLead: "",
    tempPassword: ""
  });

  const [showPodLeadField, setShowPodLeadField] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Show POD Lead field only when "POD Member" is selected
    if (name === "role") {
      setShowPodLeadField(value === "POD Member");
      // Clear POD Lead value when role changes
      if (value !== "POD Member") {
        setFormData(prev => ({ ...prev, podLead: "" }));
      }
    }
  };

  const handleBack = () => {
    navigate("/admin/members");
  };

  const handleCancel = () => {
    navigate("/admin/members");
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleCreateMember = () => {
    // Validate required fields
    if (!formData.fullName.trim()) {
      alert("Full Name is required");
      return;
    }
    if (!formData.email.trim()) {
      alert("Email Address is required");
      return;
    }
    if (!formData.role) {
      alert("System Role is required");
      return;
    }
    if (showPodLeadField && !formData.podLead) {
      alert("POD Lead is required for POD Members");
      return;
    }
    if (!formData.tempPassword) {
      alert("Temporary Password is required");
      return;
    }
    if (!validatePassword(formData.tempPassword)) {
      alert("Password must be at least 8 characters long");
      return;
    }

    // In real app: API call to create member
    console.log("Creating new member:", {
      ...formData,
      id: Date.now(),
      utilization: 0,
      status: "Active",
      skills: []
    });
    
    alert("Member created successfully!");
    navigate("/admin/members");
  };

  return (
    <div className="add-member-container">
      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>
        <ArrowLeft size={16} />
        <span>Back to Members</span>
      </button>

      {/* Header */}
      <div className="add-member-header">
        <h1 className="add-member-title">Add New Member</h1>
        <p className="add-member-subtitle">Create a new employee account</p>
      </div>

      {/* Card 1: Member Details */}
      <div className="details-card">
        <h2 className="card-heading">Member Details</h2>

        {/* Full Name - Required Field */}
        <div className="form-group">
          <label className="required-field">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter full name"
            className="form-input"
          />
        </div>

        {/* Email Address - Required Field */}
        <div className="form-group">
          <label className="required-field">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            className="form-input"
          />
        </div>

        {/* System Role - Required Field */}
        <div className="form-group">
          <label className="required-field">System Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="form-select grey-theme"
          >
            <option value="">Select a role</option>
            <option value="POD Member">POD Member</option>
            <option value="POD Lead">POD Lead</option>
            <option value="Admin">Admin</option>
          </select>
          <p className="field-hint">
            This determines the user's access level across the platform
          </p>
        </div>

        {/* POD Lead Field - Conditional, only for POD Members */}
        {showPodLeadField && (
          <div className="form-group pod-lead-field">
            <label className="required-field">POD Lead</label>
            <select
              name="podLead"
              value={formData.podLead}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="">Select POD Lead</option>
              {podLeads.map(lead => (
                <option key={lead.id} value={lead.name}>
                  {lead.name} - {lead.email}
                </option>
              ))}
            </select>
            <p className="field-hint">
              Only users with the role "Lead" are available for selection
            </p>
          </div>
        )}
      </div>

      {/* Card 2: Security */}
      <div className="security-card">
        <h2 className="card-heading">Security</h2>

        {/* Temporary Password - Required Field */}
        <div className="form-group">
          <label className="required-field">Temporary Password</label>
          <input
            type="password"
            name="tempPassword"
            value={formData.tempPassword}
            onChange={handleInputChange}
            placeholder="Enter temporary password"
            className="form-input"
          />
          <p className="field-hint password-hint">
            Must be at least 8 characters long
          </p>
        </div>

        {/* Inner Card - First Login Information */}
        <div className="first-login-card">
          <div className="first-login-header">
            <Shield size={18} className="first-login-icon" />
            <span className="first-login-title">First Login</span>
          </div>
          <div className="first-login-content">
            <Info size={16} className="info-icon" />
            <p className="first-login-message">
              User will be prompted to reset their password on first login for security purposes
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="add-actions">
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
        <button className="create-btn" onClick={handleCreateMember}>
          Create Member
        </button>
      </div>
    </div>
  );
}

export default AddMember;