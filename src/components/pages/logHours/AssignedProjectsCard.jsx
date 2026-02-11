import "../../stylesheet/logHours.css";

function AssignedProjectsCard({ projects, setProjects }) {

  const handleSliderChange = (id, value) => {
    const numericValue = Number(value);

    setProjects((prev) =>
      prev.map((proj) =>
        proj.id === id
          ? { ...proj, hours: numericValue }
          : proj
      )
    );
  };

  const handleInputChange = (id, value) => {
    const numericValue = Number(value);
    const safeValue = Math.min(8, Math.max(0, numericValue));

    setProjects((prev) =>
      prev.map((proj) =>
        proj.id === id
          ? { ...proj, hours: safeValue }
          : proj
      )
    );
  };

  return (
    <div className="card-section">
      <h4>Assigned Projects</h4>
      <p className="section-subtext">
        Use the sliders to record your hours (0–8 hrs)
      </p>

      {projects.map((project) => {
        const percentage = (project.hours / 8) * 100;

        return (
          <div key={project.id} className="project-row">

            <div className="project-label">
              {project.name}
            </div>

            <div className="slider-wrapper">
              <input
                type="range"
                min="0"
                max="8"
                value={project.hours}
                onChange={(e) =>
                  handleSliderChange(project.id, e.target.value)
                }
                className="custom-slider"
                style={{
                  background: `linear-gradient(to right, #7c3aed ${percentage}%, #e5e7eb ${percentage}%)`
                }}
              />
            </div>

            <div className="hours-input">
              <input
                type="number"
                min="0"
                max="8"
                value={project.hours}
                onChange={(e) =>
                  handleInputChange(project.id, e.target.value)
                }
              />
              <span>hrs</span>
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default AssignedProjectsCard;
