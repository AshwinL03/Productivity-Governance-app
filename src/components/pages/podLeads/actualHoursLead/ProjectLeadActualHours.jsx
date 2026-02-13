import { useState, useEffect } from "react";
 
import ActualHoursHeader from "./ActualHoursHeader";
import TeamModeActualHoursHeader from "./TeamModeActualHoursHeader";
import TeamToggle from "./TeamToggle";
import FilterDropdown from "./FilterDropdown";
import MetricsRow from "./MetricsRow";
import ProjectsRows from "./ProjectsRows";
import TeamMetricsRow from "./TeamMetricsRow";
import TeamTable from "./TeamTable";
import TeamLoading from "./TeamLoading";
 
import "../../../stylesheet/podActualHours.css";
 
const ProjectLeadActualHours = () => {
    const [viewMode, setViewMode] = useState("project"); // 'project' or 'team'
    const [searchQuery, setSearchQuery] = useState("");
    const [projectOverviewData, setProjectOverviewData] = useState({});
    const [filterStatus, setFilterStatus] = useState("All");
 
    const [teamData, setTeamData] = useState(null);
    const [isTeamLoading, setIsTeamLoading] = useState(false);
 
    useEffect(() => {
        /* Fetch project overview data */
        const data = {
            totalProjects: 9,
            ongoingProjects: 5,
            completedProjects: 4,
            projectsAtRisk: 2,
            projectList: [
                {
                    name_of_project: "Customer Portal Redesign",
                    project_id: "1",
                    project_status: "Ongoing",
                    project_risk: "High",
                    start_time: new Date("2026-01-15").getTime(),
                    end_time: new Date("2026-02-28").getTime(),
                    progress: 75,
                    Effort: 280,
                    utilization: 93,
                    team_members: ["Sarah C.", "Mike L.", "Emma D.", "User 1"]
                },
                {
                    name_of_project: "Mobile App Development",
                    project_id: "2",
                    project_status: "Ongoing",
                    project_risk: "Medium",
                    start_time: new Date("2025-12-10").getTime(),
                    end_time: new Date("2026-03-15").getTime(),
                    progress: 65,
                    Effort: 340,
                    utilization: 88,
                    team_members: ["John S.", "Lisa W.", "Tom B."]
                },
                {
                    name_of_project: "Analytics Dashboard",
                    project_id: "3",
                    project_status: "Completed",
                    project_risk: "Low",
                    start_time: new Date("2026-01-20").getTime(),
                    end_time: new Date("2026-03-10").getTime(),
                    progress: 100,
                    Effort: 156,
                    utilization: 72,
                    team_members: ["Rachel C.", "David L.", "Steve M."]
                },
                {
                    name_of_project: "E-commerce Platform",
                    project_id: "4",
                    project_status: "Hold",
                    project_risk: "Medium",
                    start_time: new Date("2025-08-05").getTime(),
                    end_time: new Date("2026-04-30").getTime(),
                    progress: 82,
                    Effort: 620,
                    utilization: 78,
                    team_members: ["James W.", "Maria C.", "Chris A.", "User 2", "User 3"]
                }
            ]
        }
 
        if (data != null && data.projectList != null) {
            data.projectList = data.projectList.map(project => ({
                ...project,
                duration_weeks: Math.ceil((project.end_time - project.start_time) / (1000 * 60 * 60 * 24 * 7))
            }))
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setProjectOverviewData(data)
        }
 
    }, []);
 
    // Fetch Team Data when switching to Team Mode
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSearchQuery(""); // Clear search on mode switch
        if (viewMode === "team" && !teamData) {
            setIsTeamLoading(true);
            // Mock API call
            setTimeout(() => {
                const mockTeamData = {
                    totalPodMembers: 24,
                    fullyUtilizedMembers: 15,
                    overloadedMembers: 4,
                    underUtilizedMembers: 5,
                    teams: [
                        { name: "Sarah Johnson", role: "Senior Developer", projectinvolvedcount: 3, actualhoursworked: 168, utlization: 95, availability: "Available" },
                        { name: "Michael Chen", role: "Tech Lead", projectinvolvedcount: 5, actualhoursworked: 192, utlization: 115, availability: "Unavailable" },
                        { name: "Emily Rodriguez", role: "UI/UX Designer", projectinvolvedcount: 2, actualhoursworked: 145, utlization: 82, availability: "Available" },
                        { name: "James Wilson", role: "Developer", projectinvolvedcount: 1, actualhoursworked: 98, utlization: 55, availability: "Partial" },
                        { name: "Aisha Patel", role: "QA Engineer", projectinvolvedcount: 4, actualhoursworked: 178, utlization: 107, availability: "Unavailable" },
                        { name: "David Kim", role: "DevOps Engineer", projectinvolvedcount: 2, actualhoursworked: 156, utlization: 88, availability: "Available" },
                        { name: "Maria Garcia", role: "Product Manager", projectinvolvedcount: 6, actualhoursworked: 201, utlization: 120, availability: "Unavailable" },
                        { name: "Robert Taylor", role: "Developer", projectinvolvedcount: 2, actualhoursworked: 115, utlization: 65, availability: "Available" },
                        { name: "Lisa Anderson", role: "Senior Designer", projectinvolvedcount: 3, actualhoursworked: 172, utlization: 97, availability: "Available" },
                        { name: "Thomas Brown", role: "Data Analyst", projectinvolvedcount: 1, actualhoursworked: 88, utlization: 50, availability: "Partial" },
                        { name: "Jennifer Lee", role: "Frontend Developer", projectinvolvedcount: 4, actualhoursworked: 185, utlization: 110, availability: "Unavailable" },
                        { name: "Daniel Martinez", role: "Backend Developer", projectinvolvedcount: 2, actualhoursworked: 162, utlization: 92, availability: "Available" }
                    ]
                };
                setTeamData(mockTeamData);
                setIsTeamLoading(false);
            }, 1000);
        }
    }, [viewMode, teamData]);
 
    const getFilteredProjects = () => {
        if (!projectOverviewData.projectList) return [];
        if (filterStatus === "All") return projectOverviewData.projectList;
 
        const statusMap = {
            "Active": "Ongoing",
            "Completed": "Completed",
            "Hold": "Hold"
        };
 
        const targetStatus = statusMap[filterStatus] || filterStatus;
        return projectOverviewData.projectList.filter(p => p.project_status === targetStatus);
    };
 
    const filteredProjects = getFilteredProjects().filter(p =>
        p.name_of_project.toLowerCase().includes(searchQuery.toLowerCase())
    );
 
 
    return (
        <div className="lead-overview-container">
 
            {viewMode === "project" ? (
                <ActualHoursHeader
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            ) : (
                <TeamModeActualHoursHeader
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            )}
 
            <div className="controls-bar">
                <TeamToggle
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />
                {viewMode === "project" && <FilterDropdown
                    selectedFilter={filterStatus}
                    onFilterChange={setFilterStatus}
                />}
            </div>
 
            {
                viewMode === "project" ? (
                    <>
                        {/* Metrics Row could also be filtered, but usually shows global stats. keeping global for now as per dashboard practices */}
                        <MetricsRow projectOverviewData={projectOverviewData} />
                        <div style={{ marginTop: "24px" }}>
                            <ProjectsRows projectList={filteredProjects} />
                        </div>
                    </>
                ) : (
                    <>
                        {isTeamLoading ? (
                            <TeamLoading />
                        ) : (
                            teamData && (
                                <>
                                    <TeamMetricsRow teamData={teamData} />
                                    <div style={{ marginTop: "24px" }}>
                                        <TeamTable members={teamData.teams} searchQuery={searchQuery} />
                                    </div>
                                </>
                            )
                        )}
                    </>
                )
            }
 
        </div>
    );
};
 
export default ProjectLeadActualHours;