import React from "react";
import "./overview.css";
import KpiCard from "./KpiCard";
import ActivityChart from "./ActivityChart";


const Overview = () => {
  return (
    <div className="overview-container">

      {/* Header */}
      <div className="overview-header">
        <div>
          <h2>Dashboard</h2>
          <p>POD members Overview</p>
        </div>

        <div className="header-right">
          <select className="filter-select">
            <option>Monthly</option>
          </select>

          <button className="export-btn">Export Report</button>
        </div>
      </div>

      {/* Mode Switch */}
      <div className="mode-switch">
        <button className="mode-btn active">Project Mode</button>
        <button className="mode-btn">Team Mode</button>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <KpiCard
          title="Team Size"
          value="24"
          subtitle="Active team members"
          icon="👥"
          iconColor="icon-purple"
        />

        <KpiCard
          title="Available Capacity"
          value="18"
          subtitle="Members available"
          icon="🟢"
          iconColor="icon-green"
        />

        <KpiCard
          title="Avg Utilization"
          value="82%"
          subtitle="Productive Hours"
          icon="📈"
          iconColor="icon-blue"
        />

        <KpiCard
          title="Active Alerts"
          value="7"
          subtitle="Requires Attention"
          icon="⚠️"
          iconColor="icon-red"
        />
      </div>

      {/* Chart + Health */}
      <div className="dashboard-row">

        {/* Chart */}
        <div className="card">
          <h3>Project vs Non-Project Activities</h3>
          <ActivityChart />

        </div>

        {/* Health */}
        <div className="card">
          <h3>POD Health Score</h3>

          <div className="health-wrapper">
            <div className="health-circle">
              <div className="health-inner">
                <h2>85</h2>
                <span>Healthy</span>
              </div>
            </div>
          </div>

          <div className="health-stats">
            <div>
              <span>Availability</span>
              <strong className="good">Good</strong>
            </div>
            <div>
              <span>Utilization</span>
              <strong className="optimal">Optimal</strong>
            </div>
            <div>
              <span>Skill Balance</span>
              <strong className="fair">Fair</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Alerts Section */}
      <div className="card">
        <div className="alerts-header">
          <h3>Active Alerts & Risks</h3>
          <span className="view-all">View all alerts →</span>
        </div>

        <div className="alert red">
          <div>
            <strong>Overutilization Alert</strong>
            <p>3 team members exceed 90% utilization</p>
          </div>
          <span className="count">3</span>
        </div>

        <div className="alert yellow">
          <div>
            <strong>Leave Overlap</strong>
            <p>Senior developers on leave next week</p>
          </div>
          <span className="count">2</span>
        </div>

        <div className="alert yellow">
          <div>
            <strong>Skill Gap</strong>
            <p>No backend engineers for project</p>
          </div>
          <span className="count">1</span>
        </div>

      </div>

    </div>
  );
};

export default Overview;
