import { Filter } from "lucide-react";
import "../../../stylesheet/dashboardFilters.css";

function DashboardFilters() {
  return (
    <div className="dashboard-filters">
      <div className="filter-label">
        <Filter size={16} />
        <span>Filter by:</span>
      </div>
      <div className="filter-selects">
        <select className="filter-select">
          <option>All Projects</option>
          <option>Project 1</option>
          <option>Project 2</option>
          <option>Project 3</option>
          <option>Project 4</option>
        </select>
        
        <select className="filter-select">
          <option>All Leads</option>
          <option>Lead 1</option>
          <option>Lead 2</option>
          <option>Lead 3</option>
          <option>Lead 4</option>
        </select>
      </div>
    </div>
  );
}

export default DashboardFilters;