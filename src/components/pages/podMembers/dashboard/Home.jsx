import { Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import KpiCard from "./KpiCard";
import OverviewCard from "./OverviewCard";
import RecentActivity from "./RecentActivity";
import "../../../stylesheet/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-dashboard">
      {/* Header */}
      <div className="home-header">
        <div>
          <h2 className="home-title">Welcome back, Jane</h2>
          <p className="home-subtitle">Here’s your work overview</p>
        </div>

        <button
          className="log-hours-btn"
          onClick={() => navigate("/member/log-hours")}
        >
          Log Today’s Hours
        </button>
      </div>

      {/* KPI Section */}
      <div className="kpi-row">
        <KpiCard
          title="Hours This Week"
          value="42 hrs"
          subtext="Out of 40 hrs target"
          icon={<Clock size={16} />}
        />

        <KpiCard
          title="Monthly Average"
          value="38.5 hrs"
          subtext="Per week average"
          icon={<TrendingUp size={16} />}
        />
      </div>

      {/* Overview */}
      <OverviewCard />

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
}

export default Home;
