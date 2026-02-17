import "../../../stylesheet/projectsOverview.css";

function ProjectsOverview() {
  const projects = [
    {
      id: 1,
      name: "Mobile App Redesign",
      status: "Active",
      lead: "Sarah Chen",
      members: 6,
    },
    {
      id: 2,
      name: "Cloud Migration",
      status: "At risk",
      lead: "Michael Torres",
      members: 8,
    },
    {
      id: 3,
      name: "Customer Portal V2",
      status: "Active",
      lead: "Emily Johnson",
      members: 5,
    },
    {
      id: 4,
      name: "Data Analytics Platform",
      status: "Active",
      lead: "David Kim",
      members: 7,
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "status-active";
      case "At risk":
        return "status-at-risk";
      default:
        return "";
    }
  };

  return (
    <div className="projects-overview-card-admin">
      <div className="projects-list-admin">
        {projects.map((project) => (
          <div key={project.id} className="project-item-admin">
            <div className="project-name-row-admin">
              <span className="project-name-admin">{project.name}</span>
              <span className={`status-badge-admin ${getStatusClass(project.status)}`}>
                {project.status}
              </span>
            </div>
            <p className="project-details-admin">
              Lead: {project.lead} · {project.members} members
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsOverview;