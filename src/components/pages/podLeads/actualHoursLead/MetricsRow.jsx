import MetricCard from "./MetricCard"
import { Kanban, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react"
 
const MetricsRow = ({ projectOverviewData }) => {
    return (
        <div className="metrics-row">
            <MetricCard
                title="Total Projects"
                value={projectOverviewData.totalProjects}
                subtext=""
                icon={<Kanban size={20} />}
                colorClass="icon-purple"
            />
            <MetricCard
                title="Ongoing Projects"
                value={projectOverviewData.ongoingProjects}
                subtext="Active in development"
                icon={<TrendingUp size={20} />}
                colorClass="icon-blue"
            />
            <MetricCard
                title="Completed Projects"
                value={projectOverviewData.completedProjects}
                subtext="Successfully delivered"
                icon={<CheckCircle size={20} />}
                colorClass="icon-green"
            />
            <MetricCard
                title="Projects at Risk"
                value={projectOverviewData.projectsAtRisk}
                subtext="Require attention"
                icon={<AlertTriangle size={20} />}
                colorClass="icon-red"
            />
        </div>
    )
}
 
export default MetricsRow
 