import { MoreHorizontal } from "lucide-react";
import "../../../stylesheet/membersSnapshot.css";

function MembersSnapshot() {
  const members = [
    { id: 1, name: "Jane Doe", role: "POD Member", hours: 42, workload: "Optimal" },
    { id: 2, name: "John Smith", role: "Practice Lead", hours: 38, workload: "Optimal" },
    { id: 3, name: "Sarah Chen", role: "Practice Lead", hours: 48, workload: "High" },
    { id: 4, name: "Michael Torres", role: "POD Member", hours: 28, workload: "Low" },
    { id: 5, name: "Emily Johnson", role: "Practice Lead", hours: 40, workload: "Optimal" },
    { id: 6, name: "David Kim", role: "POD Member", hours: 45, workload: "Optimal" },
  ];

  const getWorkloadClass = (workload) => {
    switch (workload) {
      case "Optimal":
        return "workload-optimal";
      case "High":
        return "workload-high";
      case "Low":
        return "workload-low";
      default:
        return "";
    }
  };

  return (
    <div className="snapshot-card">
      <div className="snapshot-list">
        {members.map((member) => (
          <div key={member.id} className="snapshot-item">
            <div className="snapshot-item-left">
              <div className="member-avatar-sm">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="member-details">
                <p className="member-name-sm">{member.name}</p>
                <p className="member-role-sm">{member.role}</p>
              </div>
            </div>
            
            <div className="snapshot-item-center">
              <div className="member-hours">
                <span className="hours-value">{member.hours}</span>
                <span className="hours-label">hrs/week</span>
              </div>
              <span className="workload-label">Current workload</span>
            </div>
            
            <div className="snapshot-item-right">
              <span className={`workload-badge ${getWorkloadClass(member.workload)}`}>
                {member.workload}
              </span>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MembersSnapshot;