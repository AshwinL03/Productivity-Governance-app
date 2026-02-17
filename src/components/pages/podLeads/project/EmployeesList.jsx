import React from 'react';
 
const EmployeesList = ({ employees }) => {
    const getInitials = (name) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('');
    };
 
    // Helper to determine score color
    const getScoreClass = (score) => {
        const numScore = parseInt(score);
        if (numScore >= 90) return 'each_project_summary_score_high'; // This seems to be the orange one in screenshot
        if (numScore >= 80) return 'each_project_summary_score_med'; // Green
        return 'each_project_summary_score_low'; // Red? Or low is bad?
        // Logic might need tweaking based on exact business logic, but aiming for screenshot match
        // Screenshot: 92% Orange, 88% Green, 78% Green, 65% Red/Pink, 42% Red/Pink
    };
 
    // Revised logic based on visual cues:
    // 92% -> Orange Background/Dark Orange Text
    // 88% -> Green Background/Green Text
    // 78% -> Green Background
    // 65% -> Red Background
    // 42% -> Red Background
    const getScoreStyle = (scoreStr) => {
        const score = parseInt(scoreStr);
        if (score >= 90) return "each_project_summary_score_high"; // Orange
        if (score >= 70) return "each_project_summary_score_med";  // Green
        return "each_project_summary_score_low";  // Red
    };
 
    const getAvatarColor = (index) => {
        const colors = ['#8B5CF6', '#A855F7', '#D8B4FE', '#C084FC', '#7C3AED'];
        return colors[index % colors.length];
    }
 
    return (
        <div className="each_project_summary_employees_card">
            <h3 className="each_project_summary_section_title">Employees in Project</h3>
 
            <div>
                {employees.map((emp, index) => (
                    <div key={index} className="each_project_summary_employee_item">
                        <div className="each_project_summary_employee_info">
                            <div className="each_project_summary_avatar" style={{ backgroundColor: getAvatarColor(index) }}>
                                {getInitials(emp.name)}
                            </div>
                            <div>
                                <div className="each_project_summary_employee_name">{emp.name}</div>
                                <div className="each_project_summary_employee_role">{emp.role}</div>
                            </div>
                        </div>
 
                        <div className="each_project_summary_employee_stats">
                            <div className="each_project_summary_employee_hours">{emp.hours} hrs</div>
                            <div className="each_project_summary_employee_contribution">Contribution</div>
                        </div>
 
                        <div className={`each_project_summary_employee_score ${getScoreStyle(emp.contribution)}`}>
                            {emp.contribution}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
 
export default EmployeesList;