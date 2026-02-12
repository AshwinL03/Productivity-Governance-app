import "../../../stylesheet/Profile.css";
 
const ProfileAbout = ({ profileData, isEditing, setProfileData }) => {
    return (
        <div className="prof-section">
            <h3 className="prof-section-title">About Me</h3>
            <p className="prof-section-desc">Tell others more about yourself</p>
            {isEditing ? (
                <textarea
                    className="prof-project-desc"
                    style={{
                        width: "100%",
                        minHeight: "100px",
                        padding: "1rem",
                        background: "#e5e7eb",
                        border: "none",
                        borderRadius: "8px",
                        resize: "vertical",
                        fontFamily: "inherit",
                        fontSize: "0.95rem",
                        outline: "none",
                        color: "#374151"
                    }}
                    placeholder="Write a brief description about yourself..."
                    value={profileData.about || ""}
                    onChange={(e) => {
                        const val = e.target.value;
                        setProfileData(prev => ({ ...prev, about: val }));
                    }}
                />
            ) : (
                <p className="prof-project-desc" style={{ maxWidth: "100%" }}>
                    {profileData.about}
                </p>
            )}
        </div>
    );
};
 
export default ProfileAbout;
 