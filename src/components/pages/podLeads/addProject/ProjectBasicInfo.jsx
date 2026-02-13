// ProjectBasicInfo.jsx
function ProjectBasicInfo() {
  return (
    <div className="project-section">
      <h2>Project Basic Information</h2>
      
      <div className="field-label">
        <strong>Project Name</strong>
        <span className="asterisk">*</span>
      </div>
      <div className="input-wrapper">
        <input 
          type="text" 
          placeholder="Enter Project Name" 
        />
      </div>

      <div className="field-label">
        <strong>Project Category</strong>
        <span className="asterisk">*</span>
      </div>
      <div className="input-wrapper">
        <input 
          type="text" 
          placeholder="Enter Project Category" 
        />
      </div>
    </div>
  );
}

export default ProjectBasicInfo;