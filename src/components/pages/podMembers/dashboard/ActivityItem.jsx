function ActivityItem({ title, time, hours }) {
  return (
    <div className="activity-item">
      <div>
        <p className="activity-title">{title}</p>
        <p className="activity-time">{time}</p>
      </div>

      <span className="activity-hours">{hours}</span>
    </div>
  );
}

export default ActivityItem;
