const MemberProjects = ({ projects }) => {
  return (
    <div className="projects-card">

      <div className="projects-header">
        <h3>Projects Worked On</h3>
        <button className="filter-btn">Filters ▾</button>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-left">
            <h4>{project.name}</h4>
            <p>{project.start} — {project.end}</p>
            <span className="hours-label">Hours logged</span>
          </div>
          <span className="project-hours">{project.hours}h</span>
        </div>
      ))}

    </div>
  );
};

export default MemberProjects;
