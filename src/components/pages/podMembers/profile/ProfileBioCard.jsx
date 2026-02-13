import { Mail, Briefcase } from "lucide-react"
 
import "../../../stylesheet/Profile.css";
 
 
export const getInitials = (name) => {
    if (!name) return "";
    const words = name.trim().split(/\s+/);
    if (words.length === 0) return "";
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};
 
 
export const formatExperience = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
 
    return `${years} years ${months} months experience`;
};
 
 
const ProfileBioCard = ({ profileData, isEditing, setProfileData }) => {
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };
 
    const inputStyle = {
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        padding: "0.5rem 0.75rem",
        width: "100%",
        fontSize: "0.875rem",
        color: "#1f2937",
        marginTop: "0.25rem",
        marginBottom: "1rem"
    };
 
    const labelStyle = {
        display: "block",
        fontSize: "0.875rem",
        fontWeight: "600",
        color: "#374151"
    };
 
    return (
        <div className="prof-section">
            <div className="prof-card-content">
                <div className="prof-avatar">
                    <span>{getInitials(profileData.name)}</span>
                </div>
                <div className="prof-details" style={{ width: "100%" }}>
                    {isEditing ? (
                        <>
                            <div>
                                <label style={labelStyle}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={profileData.name}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={profileData.role}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Short Bio</label>
                                <textarea
                                    name="bio"
                                    value={profileData.bio}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>{profileData.name}</h2>
                            <span className="prof-role">{profileData.role}</span>
                            <p className="prof-bio">{profileData.bio}</p>
                            <div className="prof-meta">
                                <div className="prof-meta-item">
                                    <Mail size={16} />
                                    {profileData.email}
                                </div>
                                <div className="prof-meta-item">
                                    <Briefcase size={16} />
                                    {formatExperience(profileData.experience)}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
 
export default ProfileBioCard
 