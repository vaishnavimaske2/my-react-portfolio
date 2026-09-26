function About() {
  return (
    <section id="about" className="section">

      <div className="section-heading">
        <p>Get To Know Me</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-container">

        <div className="about-card">
          <div className="about-icon">
            🎓
          </div>

          <h3>BCA Student</h3>

          <p>
            Currently pursuing Bachelor of Computer Applications
            and developing my skills in programming and software
            development.
          </p>
        </div>

        <div className="about-content">

          <h3>
            Building solutions with <span>technology</span>
          </h3>

          <p>
            I am a passionate computer science student interested
            in building useful and user-friendly applications.
          </p>

          <p>
            My current areas of learning include React.js,
            JavaScript, Python, Django, PostgreSQL and Java.
            I am also exploring Artificial Intelligence,
            Machine Learning and Data Science.
          </p>

          <div className="about-info">

            <div>
              <strong>Education</strong>
              <p>BCA</p>
            </div>

            <div>
              <strong>Role</strong>
              <p>Student Developer</p>
            </div>

            <div>
              <strong>Interest</strong>
              <p>AI & Web Development</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;