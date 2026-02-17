import React, { useState } from 'react';
 
const ProjectHeader = () => {
    const [mode, setMode] = useState('project');
 
    return (
        <div className="each_project_summary_header">
            <div>
                <h1 className="each_project_summary_title">Actual Hours Tracking</h1>
                <p className="each_project_summary_subtitle">Project Workload Analysis</p>
 
                <div className="each_project_summary_mode_toggle">
                    <button
                        className={`each_project_summary_btn ${mode === 'project' ? 'each_project_summary_btn_active' : 'each_project_summary_btn_inactive'}`}
                        onClick={() => setMode('project')}
                    >
                        Project Mode
                    </button>
                    <button
                        className={`each_project_summary_btn ${mode === 'team' ? 'each_project_summary_btn_active' : 'each_project_summary_btn_inactive'}`}
                        onClick={() => setMode('team')}
                    >
                        Team Mode
                    </button>
                </div>
            </div>
 
            <button className="each_project_summary_export_btn">
                Export Report
            </button>
        </div>
    );
};
 
export default ProjectHeader;
 