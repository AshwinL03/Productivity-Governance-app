import { Users, TrendingUp, AlertTriangle, TrendingDown } from "lucide-react";
import MetricCard from "./MetricCard";
 
const TeamMetricsRow = ({ teamData }) => {
    return (
        <div className="metrics-row">
            <MetricCard
                title="Total POD Members"
                value={teamData.totalPodMembers}
                subtext="Active team members"
                icon={<Users size={20} />}
                colorClass="icon-purple"
            />
            <MetricCard
                title="Fully Utilized"
                value={teamData.fullyUtilizedMembers}
                subtext="70-100% capacity"
                icon={<TrendingUp size={20} />}
                colorClass="icon-green"
            />
            <MetricCard
                title="Overloaded"
                value={teamData.overloadedMembers}
                subtext="Above 100% capacity"
                icon={<AlertTriangle size={20} />}
                colorClass="icon-red"
            />
            <MetricCard
                title="Underutilized"
                value={teamData.underUtilizedMembers}
                subtext="Below 70% capacity"
                icon={<TrendingDown size={20} />}
                colorClass="icon-orange" // Wait, I need to check if orange class exists or just use a custom one
            />
        </div>
    );
};
 
export default TeamMetricsRow;
 