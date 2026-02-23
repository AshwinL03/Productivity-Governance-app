import React from "react";
import "../../../stylesheet/KpiCardSec.css";


const KpiCard = ({ title, value, subtitle, icon, iconColor }) => {
  return (
    <div className="kpi-sec-card">
      <div className="kpi-sec-left">
        <h4>{title}</h4>
        <h2>{value}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={`kpi-sec-icon ${iconColor}`}>
        {icon}
      </div>
    </div>
  );
};

export default KpiCard;
