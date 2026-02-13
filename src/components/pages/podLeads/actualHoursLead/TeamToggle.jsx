const TeamToggle = ({ viewMode, setViewMode }) => {
    return (
        <div className="mode-toggle">
            <button
                className={`toggle-btn ${viewMode === "project" ? "active" : ""}`}
                onClick={() => setViewMode("project")}
            >
                Project Mode
            </button>
            <button
                className={`toggle-btn ${viewMode === "team" ? "active" : ""}`}
                onClick={() => setViewMode("team")}
            >
                Team Mode
            </button>
        </div>
    );
};
 
export default TeamToggle;
 