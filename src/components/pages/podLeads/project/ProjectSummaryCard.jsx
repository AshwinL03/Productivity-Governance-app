import React from 'react';
 
const ProjectSummaryCard = ({ project }) => {
    return (
        <div className="each_project_summary_card">
            <h3 className="each_project_summary_title" style={{ fontSize: '18px', marginBottom: '20px' }}>Project Summary</h3>
 
            <div className="each_project_summary_info_grid">
                <div>
                    <div className="each_project_summary_label">PROJECT NAME</div>
                    <div className="each_project_summary_value">{project.name}</div>
                </div>
 
                <div>
                    <div className="each_project_summary_label">START DATE</div>
                    <div className="each_project_summary_value">{project.startDate}</div>
                </div>
 
                <div>
                    <div className="each_project_summary_label">END DATE</div>
                    <div className="each_project_summary_value">{project.endDate}</div>
                </div>
 
                <div>
                    <div className="each_project_summary_label">DURATION</div>
                    <div className="each_project_summary_value">{project.duration}</div>
                </div>
 
                <div>
                    <div className="each_project_summary_label">STATUS</div>
                    <div className="each_project_summary_value each_project_summary_status_active">
                        <span className="each_project_summary_status_dot"></span>
                        {project.status}
                    </div>
                </div>
 
                <div>
                    <div className="each_project_summary_label">TOTAL ACTUAL HOURS</div>
                    <div className="each_project_summary_value each_project_summary_total_hours">{project.totalHours} hrs</div>
                </div>
            </div>
        </div>
    );
};
 
export default ProjectSummaryCard;
 