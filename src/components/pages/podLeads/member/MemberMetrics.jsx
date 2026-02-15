const MemberMetrics = ({ member }) => {
  return (
    <div className="kpi-ribbon">

      <div className="kpi-item">
        <p>Total Hours</p>
        <h3>{member.totalHours}h</h3>
        <span>This month</span>
      </div>

      <div className="kpi-item">
        <p>Project Hours</p>
        <h3 className="purple">{member.projectHours}h</h3>
        <span className="green">84% of total</span>
      </div>

      <div className="kpi-item">
        <p>Non-Project Hours</p>
        <h3>{member.nonProjectHours}h</h3>
        <span>16% of total</span>
      </div>

      <div className="kpi-item">
        <p>Capacity Used</p>
        <h3>
          {member.capacityUsed} / {member.capacityTotal}h
        </h3>

        <div className="capacity-bar">
          <div
            className="capacity-fill"
            style={{ width: `${member.utilization}%` }}
          ></div>
        </div>
      </div>

    </div>
  );
};

export default MemberMetrics;
