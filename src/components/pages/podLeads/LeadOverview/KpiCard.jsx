import React from "react";
import "./kpiCard.css";

const KpiCard = ({ title, value, subtitle, icon, iconColor }) => {
  return (
    <div className="kpi-card">
      <div className="kpi-left">
        <h4>{title}</h4>
        <h2>{value}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={`kpi-icon ${iconColor}`}>
        {icon}
      </div>
    </div>
  );
};
export default KpiCard;