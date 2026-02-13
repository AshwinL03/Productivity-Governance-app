const MetricCard = ({ title, value, subtext, icon, colorClass }) => (
    <div className="metric-card">
        <div className="metric-info">
            <span className="metric-label">{title}</span>
            <span className="metric-value">{value}</span>
            <span className="metric-subtext">{subtext}</span>
        </div>
        <div className={`metric-icon-wrapper ${colorClass}`}>
            {icon}
        </div>
    </div>
);
 
 
export default MetricCard
 