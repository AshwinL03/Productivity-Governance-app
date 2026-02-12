import ActivityItem from "./ActivityItem";
import "../../../stylesheet/recentActivity.css";

function RecentActivity() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3>Recent Activity</h3>
          <p>Your last logged entries</p>
        </div>
      </div>

      <ActivityItem title="Project Alpha" time="Today, 10:30 AM" hours="6 hrs" />
      <ActivityItem title="Project Beta" time="Yesterday, 3:45 PM" hours="4 hrs" />
      <ActivityItem title="Project Gamma" time="Feb 1, 2026" hours="5 hrs" />
      <ActivityItem title="Internal meetings" time="Jan 31, 2026" hours="2 hrs" />
    </div>
  );
}

export default RecentActivity;
