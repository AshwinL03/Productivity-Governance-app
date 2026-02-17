import { Calendar } from "lucide-react";
import "../../../stylesheet/upcomingAvailability.css";

function UpcomingAvailability() {
  const members = [
    {
      id: 1,
      name: "Lisa Martinez",
      project: "Mobile App Redesign",
      endDate: "Feb 18, 2026",
      daysLeft: 7,
      utilization: 40,
    },
    {
      id: 2,
      name: "Robert Wilson",
      project: "Cloud Migration",
      endDate: "Feb 25, 2026",
      daysLeft: 14,
      utilization: 38,
    },
    {
      id: 3,
      name: "Amanda Foster",
      project: "Customer Portal V2",
      endDate: "Mar 3, 2026",
      daysLeft: 20,
      utilization: 35,
    },
  ];

  return (
    <div className="availability-card">
      <div className="availability-list">
        {members.map((member) => (
          <div key={member.id} className="availability-item">
            {/* LEFT SECTION - 1,2,3 */}
            <div className="availability-left">
              <p className="member-name">{member.name}</p>
              <div className="project-end-row">
                <span className="project-name">{member.project}</span>
                <span className="dot">•</span>
                <span className="end-date">Ends {member.endDate}</span>
              </div>
            </div>

            {/* RIGHT SECTION - 4,5 */}
            <div className="availability-right">
              <div className="utilization-block">
                <span className="utilization-value">{member.utilization}%</span>
                <span className="utilization-label">Current utilization</span>
              </div>
              <div className="available-badge">
                Available in {member.daysLeft} days
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingAvailability;