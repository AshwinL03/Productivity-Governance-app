function ProgressRow({ label, value, max, muted }) {
  const percent = (value / max) * 100;

  return (
    <div className="progress-row">
      <div className="progress-label">
        <span>{label}</span>
        <span>{value} hrs</span>
      </div>

      <div className="progress-bar">
        <div
          className={`progress-fill ${muted ? "muted" : ""}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressRow;
