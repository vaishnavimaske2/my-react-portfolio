function Skills() {

  const skills = [
    {
      category: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      category: "Backend",
      technologies: ["Python", "Django", "Java"]
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "SQL"]
    },
    {
      category: "Programming",
      technologies: ["C", "C++", "Java", "Python"]
    },
    {
      category: "Tools",
      technologies: ["Git", "GitHub", "VS Code"]
    },
    {
      category: "Exploring",
      technologies: ["AI", "Machine Learning", "Data Science"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-heading">
        <p>What I Work With</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-number">
              0{index + 1}
            </div>

            <h3>{skill.category}</h3>

            <div className="skill-list">

              {skill.technologies.map((technology, techIndex) => (
                <span key={techIndex}>
                  {technology}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;