import React from 'react';
import { ChevronRight, AlertCircle, TrendingDown, CheckCircle, Activity } from 'lucide-react';
 
const InsightsList = ({ insights }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'warning': return <AlertCircle size={20} color="#F97316" />; // Orange
            case 'danger': return <TrendingDown size={20} color="#EF4444" />; // Red
            case 'success': return <CheckCircle size={20} color="#10B981" />; // Green
            case 'info': return <Activity size={20} color="#3B82F6" />; // Blue
            default: return <Activity size={20} />;
        }
    };
 
    const getBgColor = (type) => {
        switch (type) {
            case 'warning': return '#UTF8FF'; // Very light orange/yellow - trying to match screenshot
            case 'danger': return '#FEF2F2'; // Light red
            case 'success': return '#F0FDF4'; // Light green
            case 'info': return '#EFF6FF'; // Light blue
            default: return '#F9FAFB';
        }
    };
 
    // Custom backgrounds to match screenshot more closely
    const getCustomStyle = (type) => {
        switch (type) {
            case 'warning': return { backgroundColor: '#FFF7ED', color: '#C2410C' }; // Orange background
            case 'danger': return { backgroundColor: '#FEF2F2', color: '#B91C1C' }; // Red background
            case 'success': return { backgroundColor: '#F0FDF4', color: '#15803D' }; // Green background
            case 'info': return { backgroundColor: '#EFF6FF', color: '#1D4ED8' }; // Blue background
            default: return { backgroundColor: '#F3F4F6', color: '#374151' };
        }
    }
 
    return (
        <div className="each_project_summary_insights_card">
            <h3 className="each_project_summary_section_title">Insights & Flags</h3>
 
            <div className="each_project_summary_insights_list">
                {insights.map((insight, index) => {
                    const style = getCustomStyle(insight.type);
                    return (
                        <div key={index} className="each_project_summary_insight_item" style={{ backgroundColor: style.backgroundColor }}>
                            <div className="each_project_summary_insight_content">
                                <div className="each_project_summary_insight_icon">
                                    {getIcon(insight.type)}
                                </div>
                                <div>
                                    <div className="each_project_summary_insight_title" style={{ color: style.color }}>{insight.title}</div>
                                    <div className="each_project_summary_insight_desc">{insight.description}</div>
                                </div>
                            </div>
                            <ChevronRight size={16} color="#9CA3AF" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
 
export default InsightsList;
 