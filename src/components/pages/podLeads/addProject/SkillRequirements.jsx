import { useState } from "react";
import { Search, X } from "lucide-react";

function SkillRequirements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = [
    "React",
    "Node.js",
    "UI/UX Design",
    "Java",
    "Python",
    "Figma",
    "SQL",
    "AWS"
  ];

  const filteredSkills = skills.filter(
    (skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedSkills.includes(skill)
  );

  const addSkill = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
    setSearchTerm("");
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  return (
    <div className="project-section">
      <h2 className="section-heading">Skill Set Requirements</h2>

      <div className="field-label">
        <strong>Required Skills</strong>
        <span className="asterisk">*</span>
      </div>

      {/* Search Input */}
      <div className="skill-input-wrapper">
        <Search size={16} className="search-icon" />
        <input
          type="text"
          placeholder="Search and select required skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dropdown */}
      {searchTerm && filteredSkills.length > 0 && (
        <div className="skill-dropdown">
          {filteredSkills.map((skill) => (
            <div
              key={skill}
              className="skill-item"
              onClick={() => addSkill(skill)}
            >
              <span>{skill}</span>
              <button>+</button>
            </div>
          ))}
        </div>
      )}

      {/* Selected Skills */}
      {selectedSkills.length > 0 && (
        <div className="selected-skills">
          {selectedSkills.map((skill) => (
            <div key={skill} className="skill-chip">
              {skill}
              <X size={14} onClick={() => removeSkill(skill)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillRequirements;
