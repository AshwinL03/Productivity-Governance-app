import { useState } from "react";
import { Plus, X, Award } from "lucide-react";
import "../../../stylesheet/Profile.css";
 
const ProfileCertifications = ({ profileData, isEditing, setProfileData }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newCert, setNewCert] = useState({ name: "", year: "" });
 
    const handleAddCert = () => {
        if (!newCert.name.trim() || !newCert.year.trim()) {
            return;
        }
        if (isNaN(newCert.year)) {
            alert("Please enter a valid year");
            return;
        }
        setProfileData(prev => ({
            ...prev,
            certifications: [...prev.certifications, { ...newCert }]
        }));
        setNewCert({ name: "", year: "" });
        setIsAdding(false);
    };
 
    const handleRemoveCert = (indexToRemove) => {
        setProfileData(prev => ({
            ...prev,
            certifications: prev.certifications.filter((_, index) => index !== indexToRemove)
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
                    <h3 className="prof-section-title">Certifications</h3>
                    <p className="prof-section-desc">Your professional certifications</p>
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
                    <h4 style={{ margin: "0 0 1rem 0", fontSize: "0.95rem", color: "#334155" }}>Add New Certification</h4>
                    <div>
                        <label style={labelStyle}>Certification Name</label>
                        <input
                            type="text"
                            placeholder="e.g. AWS Certified Solutions Architect"
                            value={newCert.name}
                            onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Year</label>
                        <input
                            type="text"
                            placeholder="e.g. 2024"
                            value={newCert.year}
                            onChange={(e) => setNewCert({ ...newCert, year: e.target.value })}
                            style={inputStyle}
                        />
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                        <button className="prof-btn prof-btn-primary" onClick={handleAddCert}>Save</button>
                        <button className="prof-btn prof-btn-outline" onClick={() => setIsAdding(false)}>Cancel</button>
                    </div>
                </div>
            )}
 
            <div className="prof-cert-list-container">
                {profileData.certifications.map((cert, index) => (
                    <div key={index} style={{
                        padding: "1rem",
                        background: "#fff",
                        borderRadius: "8px",
                        border: "1px solid #f1f5f9",
                        marginBottom: "0.75rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        position: "relative"
                    }}>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            {/* Icon Placeholder? Optional */}
 
                            <div>
                                <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "0.95rem", color: "#1e293b" }}>
                                    {cert.name || cert /* Handle both object and old string format just in case */}
                                </h4>
                                {cert.year && (
                                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748b" }}>
                                        Certified in <br />
                                        <span style={{ fontWeight: "500", color: "#475569" }}>{cert.year}</span>
                                    </p>
                                )}
                            </div>
                        </div>
 
                        {isEditing && (
                            <button
                                onClick={() => handleRemoveCert(index)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    opacity: 0.6,
                                    padding: "0.25rem"
                                }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                                onMouseOut={(e) => e.currentTarget.style.opacity = 0.6}
                            >
                                <X size={16} color="#ef4444" />
                            </button>
                        )}
                    </div>
                ))}
 
                {profileData.certifications.length === 0 && !isAdding && (
                    <p style={{ color: "#94a3b8", fontSize: "0.9rem", fontStyle: "italic" }}>No certifications added yet.</p>
                )}
            </div>
        </div>
    );
};
 
export default ProfileCertifications;
 