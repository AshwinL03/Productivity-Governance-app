import { useState } from "react";
import { Plus } from "lucide-react";
import TabSwitch from "../logHours/TabSwitch";
import AddProjectCard from "../logHours/AddProjectCard";
import AssignedProjectsCard from "../logHours/AssignedProjectsCard";
import NonProjectCard from "../logHours/NonProjectCard";
import TotalHoursCard from "../logHours/TotalHoursCard";
import "../../stylesheet/logHours.css";

function LogHours() {
  const [activeTab, setActiveTab] = useState("today");
  const [showAddProject, setShowAddProject] = useState(false);

  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", hours: 0 },
    { id: 2, name: "Project 2", hours: 0 },
    { id: 3, name: "Project 3", hours: 0 },
  ]);

  // 🔥 UPDATED: Non-project total state
  const [nonProjectTotal, setNonProjectTotal] = useState(0);

  const totalProjectHours = projects.reduce(
    (sum, proj) => sum + proj.hours,
    0
  );

  // 🔥 Combined total
  const totalHours = totalProjectHours + nonProjectTotal;

  return (
    <div className="loghours-container">

      {/* HEADER */}
      <div className="loghours-header">
        <div className="header-left">
          <h2>Log Hours</h2>
          <p>
            {activeTab === "today"
              ? "How many hours did you work?"
              : "How many hours did you work this week?"}
          </p>
        </div>

        <button
          className="add-project-btn"
          onClick={() => setShowAddProject(!showAddProject)}
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab} />

      {showAddProject && (
        <AddProjectCard onClose={() => setShowAddProject(false)} />
      )}

      <AssignedProjectsCard
        projects={projects}
        setProjects={setProjects}
      />

      {/* 🔥 Updated Prop */}
      <NonProjectCard
        setNonProjectTotal={setNonProjectTotal}
      />

      <TotalHoursCard
        totalHours={totalHours}
        activeTab={activeTab}
      />

      <div className="submit-wrapper">
        <button className="submit-btn">Submit</button>
      </div>

    </div>
  );
}

export default LogHours;
