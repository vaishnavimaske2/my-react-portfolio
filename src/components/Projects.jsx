function Projects() {

  const projects = [
    {
      title: "SmartAttend",
      description:
        "An AI-powered student attendance management system using face recognition. Teachers can upload classroom images and manage attendance and reports.",
      technologies: ["React", "FastAPI", "Python", "PostgreSQL"],
      github: "https://github.com/vaishnavimaske2/SAC.git",
      live: ""
    },

    {
      title: "Nritya – The Soul of India",
      description:
        "An educational website dedicated to Indian classical dance, featuring dance forms, Navarasas, Hasta Mudras, history and interactive sections.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "",
      live: "https://indian-classical-dance.netlify.app/"
    },

    {
      title: "Student Result Management",
      description:
        "A web-based application for managing student information and academic results using Java Servlet, JSP and PostgreSQL.",
      technologies: ["Java", "Servlet", "JSP", "PostgreSQL"],
      github: "",
      live: ""
    }
  ];

  return (
    <section id="projects" className="section">

      <div className="section-heading">
        <p>My Recent Work</p>

        <h2>
          My <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-top">
              <span>PROJECT 0{index + 1}</span>
              <span>↗</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-technologies">

              {project.technologies.map((technology, techIndex) => (
                <span key={techIndex}>
                  {technology}
                </span>
              ))}

            </div>

            <div className="project-buttons">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  GitHub ↗
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn live-btn"
                >
                  Live Demo ↗
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;