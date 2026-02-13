import { Search, Download } from "lucide-react";
 
const TeamModeActualHoursHeader = ({
    searchQuery,
    setSearchQuery
}) => {
    return (
        <div className="overview-header">
            <div className="header-left">
                <h1>POD Members Overview</h1>
                <p>Monitor team composition, workload, and utilization</p>
            </div>
 
            <div className="header-right">
                <div className="search-bar">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Search members..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className="add-project-btn">
                    <Download size={18} />
                    Export Report
                </button>
            </div>
        </div>
    );
};
 
export default TeamModeActualHoursHeader;