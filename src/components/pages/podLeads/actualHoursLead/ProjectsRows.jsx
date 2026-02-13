import { useNavigate } from "react-router-dom";
import { Eye, Calendar, TrendingUp } from "lucide-react";
 
const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
};
 
const ProjectsRows = ({ projectList }) => {
    const navigate = useNavigate();
 
    if (!projectList || projectList.length === 0) {
        return <div className="no-data">No projects found.</div>;
    }
 
    return (
        <div className="projectrows_table-container">
            <table className="projectrows_table">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Timeline</th>
                        <th>Progress</th>
                        <th>Team</th>
                        <th>Effort</th>
                        <th>Utilization</th>
                        <th style={{ textAlign: "right" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projectList.map((project) => (
                        <tr
                            key={project.project_id}
                            onClick={() => navigate(`/lead/project/${project.project_id}`)}
                        >
 
                            <td className="projectrows_name">
                                <h4>{project.name_of_project}</h4>
                                <p>{project.duration_weeks} weeks</p>
                            </td>
 
 
                            <td>
                                <div className="projectrows_timeline-cell">
                                    <Calendar size={14} style={{ marginTop: "2px" }} />
                                    <div className="projectrows_timeline-dates">
                                        <span>{formatDate(project.start_time)}</span>
                                        <span>{formatDate(project.end_time)}</span>
                                    </div>
                                </div>
                            </td>
 
                            <td>
                                <div className="projectrows_progress-wrapper">
                                    <div className="projectrows_progress-bar-mini">
                                        <div
                                            className="projectrows_progress-fill"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                    <span>{project.progress}%</span>
                                </div>
                            </td>
 
                            <td>
                                <div className="projectrows_team-avatars">
                                    {project.team_members.slice(0, 3).map((member, idx) => {
                                        // Get initials
                                        const initials = member
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .substring(0, 2);
                                        return (
                                            <div key={idx} className="projectrows_avatar-stack">
                                                {initials}
                                            </div>
                                        );
                                    })}
                                    {project.team_members.length > 3 && (
                                        <div className="projectrows_avatar-stack projectrows_avatar-more">
                                            +{project.team_members.length - 3}
                                        </div>
                                    )}
                                </div>
                            </td>
 
                            <td>
                                <div className="projectrows_effort-cell">
                                    <TrendingUp size={14} className="projectrows_effort-icon" />
                                    <span>{project.Effort}h</span>
                                </div>
                            </td>
 
                            <td>
                                <span
                                    className={`projectrows_util-cell ${project.utilization >= 90 ? "projectrows_util-high" :
                                        project.utilization >= 75 ? "projectrows_util-med" :
                                            "projectrows_util-low"
                                        }`}
                                >
                                    {project.utilization}%
                                </span>
                            </td>
 
                            <td className="projectrows_action-cell">
                                <button
                                    className="projectrows_action-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/lead/project/${project.project_id}`);
                                    }}
                                >
                                    <Eye size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
 
export default ProjectsRows;
 