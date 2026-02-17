import { FolderKanban, Users, TrendingUp, TrendingDown } from "lucide-react";
import KpiCard from "./KpiCardThird";
import DashboardFilters from "./DashboardFilters";
import ProjectsOverview from "./ProjectsOverview";
import UpcomingAvailability from "./UpcomingAvailability";
import MembersSnapshot from "./MembersSnapshot";
import "../../../stylesheet/adminHome.css";

function AdminHome() {
  const kpiData = [
    {
      id: 1,
      title: "Active Projects",
      value: "12",
      subtext: "Currently in progress",
      icon: <FolderKanban size={24} color="#7c3aed" />,
    },
    {
      id: 2,
      title: "Total Members",
      value: "48",
      subtext: "Across all projects",
      icon: <Users size={24} color="#0c9bd9" />,
    },
    {
      id: 3,
      title: "Overutilized Members",
      value: "5",
      subtext: "Above 45 hours/week",
      icon: <TrendingUp size={24} color="#000000" />,
    },
    {
      id: 4,
      title: "Underutilized Members",
      value: "8",
      subtext: "Below 30 hours/week",
      icon: <TrendingDown size={24} color="#72716f" />,
    },
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <div>
          <h1 className="admin-dashboard-title">Admin Dashboard</h1>
          <p className="admin-dashboard-subtitle">
            Overview of projects, members, and workload
          </p>
        </div>
      </div>

      <DashboardFilters />

      <div className="admin-kpi-grid">
        {kpiData.map((kpi) => (
          <KpiCard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            subtext={kpi.subtext}
            icon={kpi.icon}
          />
        ))}
      </div>

      {/* Projects Overview Section */}
      <div className="dashboard-section">
        <div className="section-header">
          <h2 className="section-title">Projects Overview</h2>
        </div>
        <ProjectsOverview />
      </div>

      {/* Upcoming Availability Section */}
      <div className="dashboard-section">
        <div className="section-header">
          <h2 className="section-title">Upcoming Availability</h2>
        </div>
        <UpcomingAvailability />
      </div>

      {/* Members Snapshot Section */}
      <div className="dashboard-section">
        <div className="section-header">
          <h2 className="section-title">Members Snapshot</h2>
        </div>
        <MembersSnapshot />
      </div>
    </div>
  );
}

export default AdminHome;