// src/components/pages/admin/adminMembers/AdminMembers.jsx
import { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Member from "./Member";
import "../../../stylesheet/adminMember.css";

function AdminMembers() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");

  // Complete skills list as provided
  const allSkillsList = [
    "Python",
    "SQL",
    "Power BI",
    "Frontend",
    "React",
    "TypeScript",
    "Project management",
    "Agile",
    "Power Apps",
    "SharePoint",
    "Power Automate",
    "Security",
    "Azure",
    "DevOps",
    "Data Science",
    "Machine Learning",
    "UX Design"
  ];

  // Sample member data
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@company.com",
      role: "POD Member",
      utilization: 42,
      status: "Active",
      skills: ["React", "TypeScript", "Frontend"],
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@company.com",
      role: "Practice Lead",
      utilization: 38,
      status: "Active",
      skills: ["Security", "Azure", "DevOps"],
    },
    {
      id: 3,
      name: "Sarah Chen",
      email: "sarah.chen@company.com",
      role: "Practice Lead",
      utilization: 48,
      status: "Active",
      warning: true,
      skills: ["Python", "Machine Learning", "Data Science", "SQL"],
    },
    {
      id: 4,
      name: "Michael Torres",
      email: "michael.torres@company.com",
      role: "POD Member",
      utilization: 28,
      status: "Active",
      skills: ["React", "UX Design", "Frontend", "TypeScript"],
    },
    {
      id: 5,
      name: "Emily Johnson",
      email: "emily.johnson@company.com",
      role: "Practice Lead",
      utilization: 40,
      status: "Active",
      skills: ["Project management", "Agile", "Power BI"],
    },
    {
      id: 6,
      name: "David Kim",
      email: "david.kim@company.com",
      role: "POD Member",
      utilization: 45,
      status: "Active",
      skills: ["DevOps", "Azure", "Security", "Power Automate"],
    },
    {
      id: 7,
      name: "Lisa Martinez",
      email: "lisa.martinez@company.com",
      role: "POD Member",
      utilization: 0,
      status: "Deactivated",
      skills: ["SharePoint", "Power Apps", "Power Automate"],
    },
    {
      id: 8,
      name: "Robert Wilson",
      email: "robert.wilson@company.com",
      role: "Admin",
      utilization: 40,
      status: "Active",
      skills: ["Security", "Azure", "DevOps", "SQL"],
    },
  ]);

  // Filter members based on search term and skill filter
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSkill =
      skillFilter === "all" ||
      (member.skills && member.skills.some(skill => 
        skill.toLowerCase() === skillFilter.toLowerCase()
      ));

    return matchesSearch && matchesSkill;
  });

  const handleViewMember = (member) => {
    console.log("View member:", member);
    alert(`Viewing member: ${member.name} (Feature coming soon)`);
  };

  const handleEditMember = (member) => {
    navigate(`/admin/members/edit/${member.id}`);
  };

  const handleDeleteMember = (member) => {
    if (window.confirm(`Are you sure you want to delete "${member.name}"?`)) {
      setMembers(members.filter((m) => m.id !== member.id));
      console.log("Delete member:", member);
    }
  };

  const handleAddMember = () => {
    navigate("/admin/members/add");
  };

  return (
    <div className="admin-members-container">
      {/* Header Section */}
      <div className="members-header">
        <div>
          <h1 className="members-title">Members</h1>
          <p className="members-subtitle">Manage all organization members</p>
        </div>
        <button className="add-member-btn" onClick={handleAddMember}>
          <Plus size={16} />
          Add Member
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-wrapper">
        <div className="search-box">
          <Search size={18} className="admin-members-search-icon" />
          <input
            type="text"
            placeholder="Search members by name, email or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-dropdown">
          <Filter size={18} className="filter-icon" />
          <select
            value={skillFilter}
            onChange={(e) => setSkillFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">Filter by skill</option>
            {allSkillsList.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Members Table Section */}
      <div className="table-wrapper">
        <table className="members-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Utilization %</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <Member
                  key={member.id}
                  member={member}
                  onView={handleViewMember}
                  onEdit={handleEditMember}
                  onDelete={handleDeleteMember}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-results">
                  No members found matching "{searchTerm}"
                  {skillFilter !== "all" && ` with skill "${skillFilter}"`}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Members Summary */}
      <div className="members-summary">
        <span>
          Showing {filteredMembers.length} of {members.length} members
        </span>
      </div>
    </div>
  );
}

export default AdminMembers;