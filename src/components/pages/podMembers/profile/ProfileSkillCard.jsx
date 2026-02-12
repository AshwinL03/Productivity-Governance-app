import { useState } from "react";
import { Plus, X } from "lucide-react";
import "../../../stylesheet/Profile.css";
 
const ProfileSkillCard = ({ profileData, isEditing, setProfileData }) => {
    const [newSkill, setNewSkill] = useState("");
 
    const handleAddSkill = () => {
        if (newSkill.trim()) {
            setProfileData(prev => ({
                ...prev,
                skills: [...prev.skills, newSkill.trim()]
            }));
            setNewSkill("");
        }
    };
 
    const handleRemoveSkill = (indexToRemove) => {
        setProfileData(prev => ({
            ...prev,
            skills: prev.skills.filter((_, index) => index !== indexToRemove)
        }));
    };
 
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddSkill();
        }
    };
 
    const inputContainerStyle = {
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1.5rem",
        marginBottom: "2rem"
    };
 
    const inputStyle = {
        background: "#f3f4f6",
        border: "none",
        borderRadius: "6px",
        padding: "0.75rem 1rem",
        width: "100%",
        fontSize: "0.95rem",
        color: "#1f2937",
        outline: "none"
    };
 
    return (
        <div className="prof-section">
            {isEditing && (
                <div style={inputContainerStyle}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem" }}>Add New Skill</h3>
                    <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "1rem" }}>Enter a skill you want to add to your profile</p>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <input
                            type="text"
                            placeholder="e.g., Python, Data Analysis, Leadership..."
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyDown={handleKeyDown}
                            style={inputStyle}
                        />
                        <button
                            onClick={handleAddSkill}
                            className="prof-btn prof-btn-primary"
                            style={{ padding: "0 1.5rem", whiteSpace: "nowrap" }}
                        >
                            <Plus size={18} /> Add
                        </button>
                    </div>
                </div>
            )}
 
            <h3 className="prof-section-title">Skills</h3>
            <p className="prof-section-desc">Your professional skills</p>
            <div className="prof-skills-list">
                {profileData.skills.map((skill, index) => (
                    <span key={index} className="prof-skill-tag" style={isEditing ? { display: "inline-flex", alignItems: "center", gap: "0.5rem", paddingRight: "0.5rem" } : {}}>
                        {skill}
                        {isEditing && (
                            <X
                                size={14}
                                style={{ cursor: "pointer", opacity: 0.7 }}
                                onClick={() => handleRemoveSkill(index)}
                                onMouseOver={(e) => e.target.style.opacity = 1}
                                onMouseOut={(e) => e.target.style.opacity = 0.7}
                            />
                        )}
                    </span>
                ))}
            </div>
        </div>
    )
}
 
export default ProfileSkillCard