import { useState } from "react";
import { Plus, X } from "lucide-react";
import "../../../stylesheet/Profile.css";
 
const ProfileProjects = ({ profileData, isEditing, setProfileData }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newProject, setNewProject] = useState({
        title: "",
        start_year: "",
        end_year: "",
        description: ""
    });
 
    const handleAddProject = () => {
        if (!newProject.title.trim() || !newProject.start_year.trim()) {
            return;
        }
        if (isNaN(newProject.start_year)) {
            alert("Start year must be a number");
            return;
        }
        if (newProject.end_year && isNaN(newProject.end_year)) {
            alert("End year must be a number");
            return;
        }
 
        setProfileData(prev => ({
            ...prev,
            projects: [...prev.projects, { ...newProject }]
        }));
        setNewProject({ title: "", start_year: "", end_year: "", description: "" });
        setIsAdding(false);
    };
 
    const handleRemoveProject = (indexToRemove) => {
        setProfileData(prev => ({
            ...prev,
            projects: prev.projects.filter((_, index) => index !== indexToRemove)
        }));
    };
 
    const inputStyle = {
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        padding: "0.6rem 0.75rem",
        width: "100%",
        fontSize: "0.875rem",
        color: "#1f2937",
        marginTop: "0.25rem",
        marginBottom: "0.75rem"
    };
 
    const labelStyle = {
        display: "block",
        fontSize: "0.85rem",
        fontWeight: "600",
        color: "#4b5563"
    };
 
    return (
        <div className="prof-section">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                <div>
                    <h3 className="prof-section-title">Project Highlights</h3>
                    <p className="prof-section-desc">Notable projects and contributions</p>
                </div>
                {isEditing && !isAdding && (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="prof-btn prof-btn-primary"
                        style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem" }}
                    >
                        <Plus size={16} /> Add
                    </button>
                )}
            </div>
 
            {isAdding && (
                <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", marginBottom: "1.5rem" }}>
                    <h4 style={{ margin: "0 0 1rem 0", fontSize: "0.95rem", color: "#334155" }}>Add New Project</h4>
                    <div>
                        <label style={labelStyle}>Project Title</label>
                        <input
                            type="text"
                            placeholder="e.g. Project Alpha"
                            value={newProject.title}
                            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                            style={inputStyle}
                        />
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <div style={{ flex: 1 }}>
                            <label style={labelStyle}>Start Year</label>
                            <input
                                type="text"
                                placeholder="e.g. 2024"
                                value={newProject.start_year}
                                onChange={(e) => setNewProject({ ...newProject, start_year: e.target.value })}
                                style={inputStyle}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={labelStyle}>End Year (Optional)</label>
                            <input
                                type="text"
                                placeholder="e.g. 2025 or leave empty for Present"
                                value={newProject.end_year}
                                onChange={(e) => setNewProject({ ...newProject, end_year: e.target.value })}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                    <div>
                        <label style={labelStyle}>Description</label>
                        <textarea
                            placeholder="Brief description of your role and contribution..."
                            value={newProject.description}
                            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                            style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                        />
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                        <button className="prof-btn prof-btn-primary" onClick={handleAddProject}>Save</button>
                        <button className="prof-btn prof-btn-outline" onClick={() => setIsAdding(false)}>Cancel</button>
                    </div>
                </div>
            )}
 
            <div className="prof-projects-list">
                {profileData.projects.map((project, index) => (
                    <div key={index} className="prof-project-item" style={{ position: "relative" }}>
                        <div className="prof-project-header">
                            <h4 className="prof-project-title">{project.title}</h4>
                            <span className="prof-project-year">
                                {project.start_year} - {project.end_year || "Present"}
                            </span>
                        </div>
                        <p className="prof-project-desc">{project.description}</p>
 
                        {isEditing && (
                            <button
                                onClick={() => handleRemoveProject(index)}
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    opacity: 0.6,
                                    padding: "0.25rem"
                                }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                                onMouseOut={(e) => e.currentTarget.style.opacity = 0.6}
                            >
                                <X size={16} color="#ef4444" style={{ cursor: "pointer", position: "absolute", top: "-0.5rem", right: "-0.5rem" }} />
                            </button>
                        )}
                    </div>
                ))}
 
                {profileData.projects.length === 0 && !isAdding && (
                    <p style={{ color: "#94a3b8", fontSize: "0.9rem", fontStyle: "italic" }}>No projects added yet.</p>
                )}
            </div>
        </div>
    );
};
 
export default ProfileProjects;