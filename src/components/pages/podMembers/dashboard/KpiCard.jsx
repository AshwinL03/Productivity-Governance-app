import "../../../stylesheet/kpiCard.css";

function KpiCard({ title, value, subtext, icon }) {
  return (
    <div className="kpi-card">
      <div className="kpi-header">
        <p className="kpi-title">{title}</p>
        {icon && <div className="kpi-icon">{icon}</div>}
      </div>

      <h3 className="kpi-value">{value}</h3>
      <p className="kpi-subtext">{subtext}</p>
    </div>
  );
}

export default KpiCard;
