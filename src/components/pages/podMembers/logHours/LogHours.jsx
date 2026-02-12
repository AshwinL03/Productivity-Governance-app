import { useState } from "react";
import { Plus, CheckCircle } from "lucide-react";
import TabSwitch from "./TabSwitch";
import AddProjectCard from "./AddProjectCard";
import AssignedProjectsCard from "./AssignedProjectsCard";
import NonProjectCard from "./NonProjectCard";
import TotalHoursCard from "./TotalHoursCard";
import "../../../stylesheet/logHours.css";

function LogHours() {
  const [activeTab, setActiveTab] = useState("today");
  const [showAddProject, setShowAddProject] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", hours: 0, status: "approved" },
    { id: 2, name: "Project 2", hours: 0, status: "approved" },
    { id: 3, name: "Project 3", hours: 0, status: "approved" },
  ]);

  const [nonProjectTotal, setNonProjectTotal] = useState(0);

  const totalProjectHours = projects.reduce(
    (sum, proj) => sum + proj.hours,
    0
  );

  const totalHours = totalProjectHours + nonProjectTotal;

  // 🔥 ADD PROJECT HANDLER
  const handleAddProject = (projectName) => {
    const newProject = {
      id: Date.now(),
      name: projectName,
      hours: 0,
      status: "pending", // 🔥 important
    };

    setProjects((prev) => [...prev, newProject]);
    setShowAddProject(false);
    setShowSuccessBanner(true);
  };

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

      {/* 🔥 SUCCESS BANNER BELOW TAB SWITCH */}
      {showSuccessBanner && (
        <div className="success-banner">
          <CheckCircle size={18} />
          <div>
            <div>Your request has been sent for approval.</div>
            <div style={{ fontSize: "12px" }} className="succban">
              The project will appear below once approved by an admin.
            </div>
          </div>
        </div>
      )}

      {showAddProject && (
        <AddProjectCard
          onClose={() => setShowAddProject(false)}
          onAddProject={handleAddProject}
        />
      )}

      <AssignedProjectsCard
        projects={projects}
        setProjects={setProjects}
      />

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
