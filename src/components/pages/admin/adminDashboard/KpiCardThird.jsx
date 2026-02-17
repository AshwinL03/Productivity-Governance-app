import "../../../stylesheet/adminKpiCard.css";

function KpiCard({ title, value, subtext, icon }) {
  return (
    <div className="admin-kpi-card">
      <div className="admin-kpi-icon-wrapper">
        {icon}
      </div>
      <h3 className="admin-kpi-value">{value}</h3>
      <p className="admin-kpi-title">{title}</p>
      <p className="admin-kpi-subtext">{subtext}</p>
    </div>
  );
}

export default KpiCard;