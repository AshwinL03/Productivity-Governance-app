import { useState } from "react";
import { Search, Users, Plus, X } from "lucide-react";

function MemberAssignment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  // Dummy data (later you will replace with API data)
  const members = [
    { id: 1, name: "Nithesh A", empId: "102970" },
    { id: 2, name: "Shreenithish", empId: "102971" },
    { id: 3, name: "Arjun K", empId: "102972" },
    { id: 4, name: "Rahul M", empId: "102973" },
  ];

  // Filter members
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedMembers.some((m) => m.id === member.id)
  );

  const addMember = (member) => {
    setSelectedMembers([...selectedMembers, member]);
    setSearchTerm("");
  };

  const removeMember = (id) => {
    setSelectedMembers(selectedMembers.filter((m) => m.id !== id));
  };

  return (
    <div className="project-section">
      <h2 className="section-heading">
        <Users size={18} className="section-icon" />
        Member Assignment
      </h2>

      <div className="field-label">
        <strong>Add Team Members</strong>
        <span className="asterisk">*</span>
      </div>

      <div className="member-input-wrapper">
        <Search size={16} className="search-icon" />
        <input
          type="text"
          placeholder="Search and select team members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dropdown Results */}
      {searchTerm && filteredMembers.length > 0 && (
        <div className="member-dropdown">
          {filteredMembers.map((member) => (
            <div key={member.id} className="member-item">
              <span>
                {member.name} ({member.empId})
              </span>
              <button onClick={() => addMember(member)}>
                <Plus size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Selected Members */}
      {selectedMembers.length > 0 && (
        <div className="selected-members">
          {selectedMembers.map((member) => (
            <div key={member.id} className="member-chip">
              {member.name}
              <X size={14} onClick={() => removeMember(member.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MemberAssignment;
