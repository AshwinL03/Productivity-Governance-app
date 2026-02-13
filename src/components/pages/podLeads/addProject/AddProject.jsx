import { useState, useEffect } from "react";
import { Plus, X, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../../stylesheet/addProject.css";

const AddProject = () => {
    const navigate = useNavigate();
    const [projectName, setProjectName] = useState("");
    const [projectCategory, setProjectCategory] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [members, setMembers] = useState([]);
    const [memberInput, setMemberInput] = useState("");

    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState("");

    const [availableResourcePool, setAvailableResourcePool] = useState([]);
    const [showMemberDropdown, setShowMemberDropdown] = useState(false);
    const [showSkillDropdown, setShowSkillDropdown] = useState(false);

    useEffect(() => {
        const fetchResources = () => {
            const mockResources = [
                { member_name: "Sarah Johnson", skills: ["React", "Node.js", "Javascript"] },
                { member_name: "Michael Chen", skills: ["Python", "Django", "AWS"] },
                { member_name: "Emily Rodriguez", skills: ["UI/UX", "Figma", "CSS"] },
                { member_name: "James Wilson", skills: ["Java", "Spring Boot", "SQL"] },
                { member_name: "Aisha Patel", skills: ["QA", "Selenium", "Cypress"] },
                { member_name: "David Kim", skills: ["DevOps", "Docker", "Kubernetes"] },
                { member_name: "Maria Garcia", skills: ["Project Management", "Agile", "Scrum"] },
                { member_name: "Robert Taylor", skills: ["React", "TypeScript", "Redux"] },
                { member_name: "Lisa Anderson", skills: ["UI/UX", "Adobe XD", "Sketch"] },
                { member_name: "Thomas Brown", skills: ["Python", "Pandas", "Data Analysis"] }
            ];
            setAvailableResourcePool(mockResources);
        };
        fetchResources();
    }, []);

    const dropdownMembers = availableResourcePool.filter(resource => {
        if (members.includes(resource.member_name)) return false;
        const matchesInput = resource.member_name.toLowerCase().includes(memberInput.toLowerCase());
        return matchesInput;
    });

    const uniqueSkills = [...new Set(availableResourcePool.flatMap(r => r.skills))];

    const dropdownSkills = uniqueSkills.filter(skill => {
        if (skills.includes(skill)) return false;
        const matchesInput = skill.toLowerCase().includes(skillInput.toLowerCase());
        return matchesInput;
    });




    const handleAddMember = (name) => {
        const memberName = typeof name === 'string' ? name : memberInput.trim();
        if (memberName && !members.includes(memberName)) {
            setMembers([...members, memberName]);
            setMemberInput("");
            setShowMemberDropdown(false);
        }
    };

    const handleRemoveMember = (indexToRemove) => {
        setMembers(members.filter((_, index) => index !== indexToRemove));
    };

    const handleAddSkill = (name) => {
        const skillName = typeof name === 'string' ? name : skillInput.trim();
        if (skillName && !skills.includes(skillName)) {
            setSkills([...skills, skillName]);
            setSkillInput("");
            setShowSkillDropdown(false);
        }
    };

    const handleRemoveSkill = (indexToRemove) => {
        setSkills(skills.filter((_, index) => index !== indexToRemove));
    };

    const handleCreateProject = () => {
        const newProject = {
            projectName,
            projectCategory,
            startDate,
            endDate,
            members,
            skills
        };
        console.log("Creating new project:", newProject);
        navigate("/lead/actual-hours");
    };








    return (
        <div className="add-project-container">
            <h1>Add a Project</h1>
            <p className="add-project-desc">Give details to add in a new project</p>

            <div className="add-project-content">
                <div className="project-form">

                    <div className="form-section">
                        <h3>Project Basic Information</h3>
                        <div className="form-group">
                            <label className="form-label">Project Name <span className="required">*</span></label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Enter Project Name"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Project Category <span className="required">*</span></label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Enter Project Category"
                                value={projectCategory}
                                onChange={(e) => setProjectCategory(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3><Calendar size={18} /> Project Timeline</h3>
                        <div className="timeline-grid">
                            <div className="form-group">
                                <label className="form-label">Start Date <span className="required">*</span></label>
                                <input
                                    type="date"
                                    className="form-input"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">End Date <span className="required">*</span></label>
                                <input
                                    type="date"
                                    className="form-input"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3><Users size={18} /> Member Assignment</h3>
                        <div className="form-group">
                            <label className="form-label">Add Team Members <span className="required">*</span></label>
                            <div className="tag-input-wrapper">
                                <div className="tag-input-container" style={{ flex: 1, position: "relative" }}>


                                    {members.map((member, index) => (
                                        <div key={index} className="tag-item">
                                            <span>{member}</span>
                                            <X
                                                size={14}
                                                className="tag-remove"
                                                onClick={() => handleRemoveMember(index)}
                                            />
                                        </div>
                                    ))}
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none", flex: 1, minWidth: "120px", fontSize: "14px" }}
                                        placeholder={members.length === 0 ? "Search and select team members..." : ""}
                                        value={memberInput}
                                        onChange={(e) => {
                                            setMemberInput(e.target.value);
                                            setShowMemberDropdown(true);
                                        }}
                                        onFocus={() => setShowMemberDropdown(true)}
                                        onKeyDown={(e) => e.key === "Enter" && handleAddMember()}
                                        onBlur={() => setTimeout(() => setShowMemberDropdown(false), 200)}
                                    />

                                    {showMemberDropdown && (
                                        <div className="member-dropdown" style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            width: "100%",
                                            maxHeight: "200px",
                                            overflowY: "auto",
                                            background: "white",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "8px",
                                            marginTop: "4px",
                                            zIndex: 10,
                                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                        }}>
                                            {dropdownMembers.length > 0 ? (
                                                dropdownMembers.map((resource, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleAddMember(resource.member_name);
                                                        }}
                                                        style={{
                                                            padding: "8px 12px",
                                                            cursor: "pointer",
                                                            borderBottom: "1px solid #f3f4f6",
                                                            fontSize: "14px",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center"
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.background = "#f9fafb"}
                                                        onMouseLeave={(e) => e.currentTarget.style.background = "white"}
                                                        onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
                                                    >
                                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                                            <span style={{ fontWeight: "500", color: "#374151" }}>{resource.member_name}</span>
                                                            <span style={{ fontSize: "11px", color: "#6b7280" }}>
                                                                {resource.skills.slice(0, 3).join(", ")}
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            style={{
                                                                background: "#f3e8ff",
                                                                border: "none",
                                                                borderRadius: "4px",
                                                                padding: "4px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                cursor: "pointer",
                                                                color: "#9333ea"
                                                            }}
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                ))
                                            ) : (
                                                <div style={{ padding: "8px 12px", color: "#6b7280", fontSize: "14px" }}>
                                                    No members found
                                                </div>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>Skill Set Requirements</h3>
                        <div className="form-group">
                            <label className="form-label">Required Skills <span className="required">*</span></label>
                            <div className="tag-input-wrapper">
                                <div className="tag-input-container" style={{ flex: 1, position: "relative" }}>
                                    {skills.map((skill, index) => (
                                        <div key={index} className="tag-item">
                                            <span>{skill}</span>
                                            <X
                                                size={14}
                                                className="tag-remove"
                                                onClick={() => handleRemoveSkill(index)}
                                            />
                                        </div>
                                    ))}
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none", flex: 1, minWidth: "120px", fontSize: "14px" }}
                                        placeholder={skills.length === 0 ? "Search and select required skills..." : ""}
                                        value={skillInput}
                                        onChange={(e) => {
                                            setSkillInput(e.target.value);
                                            setShowSkillDropdown(true);
                                        }}
                                        onFocus={() => setShowSkillDropdown(true)}
                                        onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                                        onBlur={() => setTimeout(() => setShowSkillDropdown(false), 200)}
                                    />

                                    {showSkillDropdown && (
                                        <div className="skill-dropdown" style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            width: "100%",
                                            maxHeight: "200px",
                                            overflowY: "auto",
                                            background: "white",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "8px",
                                            marginTop: "4px",
                                            zIndex: 10,
                                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                        }}>
                                            {dropdownSkills.length > 0 ? (
                                                dropdownSkills.map((skill, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleAddSkill(skill);
                                                        }}
                                                        style={{
                                                            padding: "8px 12px",
                                                            cursor: "pointer",
                                                            borderBottom: "1px solid #f3f4f6",
                                                            fontSize: "14px",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center"
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.background = "#f9fafb"}
                                                        onMouseLeave={(e) => e.currentTarget.style.background = "white"}
                                                        onMouseDown={(e) => e.preventDefault()}
                                                    >
                                                        <span style={{ fontWeight: "500", color: "#374151" }}>{skill}</span>
                                                        <button
                                                            type="button"
                                                            style={{
                                                                background: "#f3e8ff",
                                                                border: "none",
                                                                borderRadius: "4px",
                                                                padding: "4px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                cursor: "pointer",
                                                                color: "#9333ea"
                                                            }}
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                ))
                                            ) : (
                                                skillInput.trim() !== "" && (
                                                    <div
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleAddSkill();
                                                        }}
                                                        style={{
                                                            padding: "8px 12px",
                                                            cursor: "pointer",
                                                            borderBottom: "1px solid #f3f4f6",
                                                            fontSize: "14px",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            color: "#9333ea"
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.background = "#f9fafb"}
                                                        onMouseLeave={(e) => e.currentTarget.style.background = "white"}
                                                        onMouseDown={(e) => e.preventDefault()}
                                                    >
                                                        <span>Add "{skillInput}"</span>
                                                        <Plus size={14} />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button className="btn-cancel">Cancel</button>
                        <button className="btn-create" onClick={handleCreateProject}>Create Project</button>
                    </div>

                </div>
                <div className="project-sidebar">
                    <div className="sidebar-card">
                        <h4 style={{ color: "#9333ea" }}>
                            Suggested Members
                        </h4>
                        <p>Select required skills to see suggested team members who match your project needs.</p>
                    </div>

                    <div className="sidebar-card">
                        <h4>Quick Tips</h4>
                        <ul className="tips-list">
                            <li>Choose team members with matching skills for better project alignment</li>
                            <li>Consider current workload when assigning members</li>
                            <li>Set realistic timelines based on team availability</li>
                            <li>Include diverse skills for well-rounded project execution</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProject;
