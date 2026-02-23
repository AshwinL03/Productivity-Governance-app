import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Activity, Clock, TrendingUp, AlertCircle } from "lucide-react";
import "../../../stylesheet/eachProjects.css";

// Subcomponents
import ProjectHeader from "./ProjectHeader";
import ProjectSummaryCard from "./ProjectSummaryCard";
import ProjectMetrics from "./ProjectMetrics";
import ProjectDetails from "./ProjectDetails";
import EmployeesList from "./EmployeesList";
import DailyEffortChart from "./DailyEffortChart";
import InsightsList from "./InsightsList";

const EachProject = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Mock API call to fetch project data
    // In a real app, this would use the 'id' to fetch specific project details
    const mockData = {
      id: id || "PRJ-001",
      summary: {
        name: "E-Commerce Platform Redesign",
        startDate: "Dec 15, 2025",
        endDate: "Mar 30, 2026",
        duration: "15 weeks",
        status: "Active",
        totalHours: 309,
      },
      metrics: [
        {
          title: "Project Utilization",
          value: "82%",
          trend: "5%",
          trendUp: true,
          icon: <TrendingUp size={20} />, // Changed from Activity
          bgColor: "#F3E8FF", // Light Purple
          color: "#9333EA",
        },
        {
          title: "Avg Hours per Contributor",
          value: "51 hrs",
          trend: "3 hrs",
          trendUp: true,
          icon: <Clock size={20} />,
          bgColor: "#DBEAFE", // Light Blue
          color: "#3B82F6",
        },
        {
          title: "Effort Timeline Alignment",
          value: "94%",
          trend: "2%",
          trendUp: false,
          icon: <Activity size={20} />, // Changed from TrendingUp
          bgColor: "#D1FAE5", // Light Green
          color: "#10B981",
        },
        {
          title: "Effort Deviation",
          value: "+12%",
          trend: "Above Plan",
          trendUp: false,
          icon: <AlertCircle size={20} />,
          bgColor: "#FFEDD5", // Orange-ish to match screenshot (was light red)
          color: "#C2410C", // Dark Orange
        },
      ],
      details: {
        description:
          "Complete redesign of the e-commerce platform with focus on user experience, performance optimization, and mobile responsiveness.",
        category: "Web Development",
        manager: "David Miller",
        deliveryModel: "Agile / Sprint-based",
        billingType: "Time & Materials",
        lastUpdated: "Feb 2, 2026 at 09:45 AM",
      },
      employees: [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Senior Developer",
          hours: 78,
          contribution: "92%",
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "Full Stack Developer",
          hours: 72,
          contribution: "88%",
        },
        {
          id: 3,
          name: "Emily Rodriguez",
          role: "UI/UX Designer",
          hours: 56,
          contribution: "78%",
        },
        {
          id: 4,
          name: "David Kim",
          role: "Backend Developer",
          hours: 35,
          contribution: "65%",
        },
        {
          id: 5,
          name: "Lisa Wang",
          role: "QA Engineer",
          hours: 12,
          contribution: "42%",
        },
      ],
      // New Data for Graph
      dailyEffort: [
        { date: "Jan 27", hours: 30 },
        { date: "Jan 28", hours: 35 },
        { date: "Jan 29", hours: 32 },
        { date: "Jan 30", hours: 38 },
        { date: "Jan 31", hours: 34 },
        { date: "Feb 1", hours: 31 },
        { date: "Feb 2", hours: 35 },
      ],
      // New Data for Insights
      insights: [
        {
          type: "warning",
          title: "High Utilization Alert",
          description:
            "Sarah showing 92% utilization - monitor for burnout risk",
        },
        {
          type: "danger",
          title: "Under-Utilization Detected",
          description: "Lisa Wang at 42% utilization - may need reallocation",
        },
        {
          type: "success",
          title: "Consistent Daily Effort",
          description:
            "Project maintaining 34-40 hours daily across last 7 days",
        },
        {
          type: "info",
          title: "Non-Project Activity Trend",
          description: "Average 8 hours/day on non-project work - within range",
        },
      ],
    };

    setTimeout(() => {
      setProjectData(mockData);
    }, 0);
  }, [id]);

  if (!projectData) {
    return <div style={{ padding: "20px" }}>Loading project data...</div>;
  }

  return (
    <div className="each_project_summary_container">
      <ProjectHeader />

      <ProjectSummaryCard project={projectData.summary} />

      <ProjectMetrics metrics={projectData.metrics} />

      <div className="each_project_summary_split_layout">
        <ProjectDetails details={projectData.details} />
        <EmployeesList employees={projectData.employees} />
      </div>

      <div className="each_project_summary_chart_layout">
        <DailyEffortChart data={projectData.dailyEffort} />
        <InsightsList insights={projectData.insights} />
      </div>
    </div>
  );
};

export default EachProject;
