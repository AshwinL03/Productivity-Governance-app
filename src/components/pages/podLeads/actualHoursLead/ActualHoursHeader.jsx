import { Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
 
const ActualHoursHeader = ({
    searchQuery,
    setSearchQuery
}) => {
    const navigate = useNavigate();
 
    return (
        <div className="overview-header">
            <div className="header-left">
                <h1>Projects Overview</h1>
                <p>Monitor all projects and their delivery health</p>
            </div>
 
            <div className="header-right">
                <div className="search-bar">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button
                    className="add-project-btn"
                    onClick={() => navigate("/lead/addprojects")}
                >
                    <Plus size={18} />
                    Add a Project
                </button>
            </div>
        </div>
    );
};
 
export default ActualHoursHeader;
 