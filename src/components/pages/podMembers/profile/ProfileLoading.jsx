import "../../../stylesheet/Profile.css";
 
const ProfileLoading = () => {
    return (
        <div className="prof-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div className="prof-section" style={{ minWidth: "300px", textAlign: "center", padding: "3rem", color: "#0a4098ff" }}>
                <h2>Loading Profile...</h2>
            </div>
        </div>
    );
};
 
export default ProfileLoading;
 