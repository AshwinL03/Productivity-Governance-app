import { useParams } from "react-router-dom";
import "./memberDetail.css";

import MemberHeader from "./MemberHeader";
import MemberMetrics from "./MemberMetrics";
import MemberProjects from "./MemberProjects";
import MemberActivityChart from "./MemberActivityChart";

const MemberDetail = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name || "Sarah Johnson");

  const member = {
    name: decodedName,
    role: "Senior Software Engineer",
    availability: "Available",
    utilization: 87,
    totalHours: 154,
    projectHours: 129,
    nonProjectHours: 25,
    capacityUsed: 154,
    capacityTotal: 160,
    projects: [
      {
        name: "E-Commerce Platform Redesign",
        start: "2025-01-05",
        end: "2025-03-15",
        hours: 68,
      },
      {
        name: "Mobile App Development",
        start: "2025-02-10",
        end: "2025-04-25",
        hours: 52,
      },
      {
        name: "API Integration Project",
        start: "2025-03-01",
        end: "2025-05-10",
        hours: 22,
      },
    ],
  };

  return (
    <div className="member-page">

      {/* ===== TOP HEADER ===== */}
      <div className="page-header">
        <div>
          <h1>Actual Hours Tracking</h1>
          <p>Individual Workload Analysis</p>

          <div className="mode-toggle">
            <span>Project Mode</span>
            <span className="active-mode">Team Mode</span>
          </div>
        </div>

        <div className="header-right">
          <button className="export-btn">Export Report</button>
          <div className="filter-btn">Monthly ▾</div>
        </div>
      </div>

      {/* ===== MEMBER CARD ===== */}
      <MemberHeader member={member} />

      {/* ===== KPI RIBBON ===== */}
      <MemberMetrics member={member} />

      {/* ===== BOTTOM SECTION ===== */}
      <div className="bottom-section">
        <MemberProjects projects={member.projects} />
        <MemberActivityChart />
      </div>

    </div>
  );
};

export default MemberDetail;
