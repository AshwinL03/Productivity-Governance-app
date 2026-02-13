import { useNavigate } from "react-router-dom";
import ProjectBasicInfo from "./ProjectBasicInfo";
import ProjectTimeline from "./ProjectTimeline";
import MemberAssignment from "./MemberAssignment";
import SkillRequirements from "./SkillRequirements";
import SuggestedMembers from "./SuggestedMembers";

import "../../../stylesheet/addProject.css";

function AddProject() {

  const navigate = useNavigate();

  return (
    <div className="add-project-page">
      <div className="add-project-header">
        <h1>Add a Project</h1>
        <p className="sub-heading">Give details to add in a new project</p>
      </div>

      <div className="add-project-layout">
        <div className="add-project-main">
          <ProjectBasicInfo />
          <hr className="section-divider" />

          <ProjectTimeline />
          <hr className="section-divider" />

          <MemberAssignment />
          <hr className="section-divider" />

          <SkillRequirements />

          <div className="add-project-actions">
            <button
              className="cancel-btn"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>

            <button
              className="create-btn"
              onClick={() => navigate("/lead/actual-hours")}
            >
              Create Project
            </button>
          </div>
        </div>
        <SuggestedMembers />
      </div>
    </div>
  );
}

export default AddProject;
