import React from 'react';
import { Calendar } from 'lucide-react';
 
const ProjectDetails = ({ details }) => {
    return (
        <div className="each_project_summary_details_card">
            <h3 className="each_project_summary_section_title">Project Details</h3>
 
            <div className="each_project_summary_detail_group">
                <div className="each_project_summary_label">DESCRIPTION</div>
                <p className="each_project_summary_detail_text">
                    {details.description}
                </p>
            </div>
 
            <div className="each_project_summary_detail_group">
                <div className="each_project_summary_label">CATEGORY</div>
                <div className="each_project_summary_badge">
                    {details.category}
                </div>
            </div>
 
            <div className="each_project_summary_detail_group">
                <div className="each_project_summary_label">MANAGER</div>
                <div className="each_project_summary_value">{details.manager}</div>
            </div>
 
            <div className="each_project_summary_detail_group">
                <div className="each_project_summary_label">DELIVERY MODEL</div>
                <div className="each_project_summary_value">{details.deliveryModel}</div>
            </div>
 
            <div className="each_project_summary_detail_group">
                <div className="each_project_summary_label">BILLING TYPE</div>
                <div className="each_project_summary_value">{details.billingType}</div>
            </div>
 
            <div className="each_project_summary_last_update">
                <Calendar size={14} />
                <span>Last updated: {details.lastUpdated}</span>
            </div>
        </div>
    );
};
 
export default ProjectDetails;
 