// src/components/pages/admin/adminMembers/EditMember.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "../../../stylesheet/editMember.css";

function EditMember() {
  const navigate = useNavigate();
  const { memberId } = useParams();

  // Mock member data - In real app, fetch based on memberId
  const [formData, setFormData] = useState({
    fullName: "Jane Doe",
    email: "jane.doe@company.com",
    role: "POD Member",
    status: "Active"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBack = () => {
    navigate("/admin/members");
  };

  const handleCancel = () => {
    navigate("/admin/members");
  };

  const handleSaveChanges = () => {
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
    if (!formData.status) {
      alert("Account Status is required");
      return;
    }

    // In real app: API call to update member
    console.log("Updating member:", { id: memberId, ...formData });
    alert("Member updated successfully!");
    
    // Navigate back to members list
    navigate("/admin/members");
  };

  return (
    <div className="edit-member-container">
      {/* Back Button - Now navigates to Members list */}
      <button className="back-button" onClick={handleBack}>
        <ArrowLeft size={16} />
        <span>Back to Members</span>
      </button>

      {/* Header */}
      <div className="edit-member-header">
        <h1 className="edit-member-title">Edit Member</h1>
        <p className="edit-member-subtitle">Update member account details</p>
      </div>

      {/* Single Card */}
      <div className="edit-card">
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
            className="form-select"
          >
            <option value="POD Member">POD Member</option>
            <option value="POD Lead">POD Lead</option>
            <option value="Admin">Admin</option>
          </select>
          <p className="field-hint">
            This determines the user's access level across the platform
          </p>
        </div>

        {/* Account Status - Required Field */}
        <div className="form-group">
          <label className="required-field">Account Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="Active">Active</option>
            <option value="Deactivated">Deactivated</option>
          </select>
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

export default EditMember;