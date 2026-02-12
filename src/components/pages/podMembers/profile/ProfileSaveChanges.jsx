import "../../../stylesheet/Profile.css";
 
const ProfileSaveChanges = ({ visible, onSave, onCancel }) => {
    if (!visible) return null;
 
    return (
        <div className="prof-section" style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.5rem",
            marginTop: "1rem",
            padding: "0px",
            margin: "0px",
            boxShadow: "none",
            border: "none",
            borderRadius: "0px",
            background:"none"
        }}>
            <button className="prof-btn prof-btn-primary" onClick={onSave}>
                Save Changes
            </button>
            <button className="prof-btn prof-btn-outline" onClick={onCancel}>
                Cancel
            </button>
        </div>
    );
};
 
export default ProfileSaveChanges;
 