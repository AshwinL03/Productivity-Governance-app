import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
 
const ProjectMetrics = ({ metrics }) => {
    return (
        <div className="each_project_summary_metrics_grid">
            {metrics.map((metric, index) => (
                <div key={index} className="each_project_summary_metric_card">
                    <div className="each_project_summary_metric_icon" style={{ backgroundColor: metric.bgColor, color: metric.color }}>
                        {metric.icon}
                    </div>
                    <div className="each_project_summary_metric_title">{metric.title}</div>
                    <div className="each_project_summary_metric_value">{metric.value}</div>
 
                    <div className="each_project_summary_metric_trend">
                        <span className={metric.trendUp ? "each_project_summary_trend_up" : "each_project_summary_trend_down"} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {metric.trendUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                            {metric.trend}
                        </span>
                        <span style={{ color: '#9CA3AF', marginLeft: '4px' }}>vs last week</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
 
export default ProjectMetrics;