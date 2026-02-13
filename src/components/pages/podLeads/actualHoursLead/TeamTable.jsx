import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../../stylesheet/podActualHours.css";
const TeamTable = ({ members, searchQuery }) => {
    const navigate = useNavigate();
    // Filter by name and role
    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
    );
 
    if (!filteredMembers.length) {
        return <div className="no-data">No members found</div>;
    }
 
    return (
        <div className="projectrows_table-container">
            <table className="projectrows_table">
                <thead>
                    <tr>
                        <th>MEMBER</th>
                        <th>ROLE</th>
                        <th style={{ textAlign: "center" }}>PROJECTS</th>
                        <th style={{ textAlign: "center" }}>ACTUAL HOURS</th>
                        <th>UTILIZATION</th>
                        <th style={{ textAlign: "center" }}>AVAILABILITY</th>
                        <th style={{ textAlign: "right" }}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMembers.map((member, idx) => (
                        <tr key={idx} onClick={() => navigate(`/lead/member/${member.name}`)}>
                            {/* Member Name */}
                            <td>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div className="projectrows_avatar-stack" style={{ fontSize: "11px", fontWeight: "bold", marginLeft: 0 }}>
                                        {member.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
                                    </div>
                                    <span style={{ fontWeight: "600", fontSize: "14px" }}>{member.name}</span>
                                </div>
                            </td>
 
                            {/* Role */}
                            <td style={{ color: "#6b7280" }}>{member.role}</td>
 
                            {/* Projects Count */}
                            <td style={{ textAlign: "center" }}>
                                <span style={{
                                    background: "#f3e8ff",
                                    color: "#9333ea",
                                    padding: "4px 10px",
                                    borderRadius: "12px",
                                    fontSize: "12px",
                                    fontWeight: "600"
                                }}>
                                    {member.projectinvolvedcount}
                                </span>
                            </td>
 
                            <td style={{ textAlign: "center", fontWeight: "600" }}>
                                {member.actualhoursworked}h
                            </td>
 
                            <td>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "600" }}>
                                        <span className={
                                            member.utlization > 100 ? "projectrows_util-high" :
                                                member.utlization < 70 ? "projectrows_util-med" :
                                                    "projectrows_util-low"
                                        }>
                                            {member.utlization}%
                                        </span>
                                        <span className={
                                            member.utlization > 100 ? "util-tag-danger" :
                                                member.utlization < 70 ? "util-tag-warning" :
                                                    "util-tag-success"
                                        } style={{
                                            padding: "2px 8px",
                                            borderRadius: "10px",
                                            fontSize: "10px",
                                            background: member.utlization > 100 ? "#fee2e2" : member.utlization < 70 ? "#ffedd5" : "#dcfce7",
                                            color: member.utlization > 100 ? "#dc2626" : member.utlization < 70 ? "#c2410c" : "#16a34a"
                                        }}>
                                            {member.utlization > 100 ? "Overloaded" : member.utlization < 70 ? "Underutilized" : "Optimal"}
                                        </span>
                                    </div>
                                    <div className="projectrows_progress-bar-mini" style={{ width: "100%" }}>
                                        <div
                                            className="projectrows_progress-fill"
                                            style={{
                                                width: `${Math.min(member.utlization, 100)}%`,
                                                background: member.utlization > 100 ? "#ef4444" : member.utlization < 70 ? "#f97316" : "#10b981"
                                            }}
                                        />
                                    </div>
                                </div>
                            </td>
 
                            <td style={{ textAlign: "center" }}>
                                <span style={{
                                    padding: "4px 10px",
                                    borderRadius: "12px",
                                    fontSize: "11px",
                                    fontWeight: "600",
                                    background: member.availability === "Available" ? "#dcfce7" : member.availability === "Unavailable" ? "#fee2e2" : "#fef9c3", // light yellow for partial
                                    color: member.availability === "Available" ? "#16a34a" : member.availability === "Unavailable" ? "#dc2626" : "#ca8a04" // darker yellow
                                }}>
                                    {member.availability}
                                </span>
                            </td>
 
                            <td className="projectrows_action-cell">
                                <button className="projectrows_action-btn" onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/lead/member/${member.name}`)
                                }} style={{ display: "flex", alignItems: "center", gap: "4px", color: "#9333ea", fontSize: "13px", fontWeight: "600" }}>
                                    <Eye size={16} /> View
                                </button>
                            </td>
 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
 
export default TeamTable;