import { Eye, Share2, Pencil } from "lucide-react";
import "../../../stylesheet/Profile.css"
 
const ProfHeader = ({ setIsEditing, isEditing, setProfileData, initialProfileData }) => {
    return (
        <div className="prof-header-top">
            <div className="prof-title">
                <h1>Personal Profile</h1>
                <p>Manage your professional profile</p>
            </div>
            <div className="prof-actions">
                <button className="prof-btn prof-btn-outline">
                    <Eye size={18} />
                    Preview
                </button>
                <button className="prof-btn prof-btn-outline">
                    <Share2 size={18} />
                    Share Profile
                </button>
                {
                    isEditing ? (
                        <button className="prof-btn prof-btn-primary"
                            onClick={() => {
                                setIsEditing(false);
                                setProfileData(initialProfileData);
                            }}
                            style={{ background: "#7e22ce" }}>
                            <Pencil size={18} />
                            Cancel
                        </button>
                    ) : (
                        <button className="prof-btn prof-btn-primary" onClick={() => setIsEditing(true)}>
                            <Pencil size={18} />
                            Edit Profile
                        </button>
                    )
                }
            </div>
        </div>
    )
}
 
export default ProfHeader