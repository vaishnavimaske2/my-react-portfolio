import { FaGithub, FaLinkedin } from "react-icons/fa";

function Connect() {
  return (
    <section id="connect" className="section connect-section">

      <div className="section-heading">
        <p>Find Me Online</p>
        <h2>Let's <span>Connect</span></h2>
      </div>

      <div className="connect-container">

        {/* GitHub */}
        <a
          href="https://github.com/vaishnavimaske2"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >

          <div className="social-icon">
            <FaGithub />
          </div>

          <div className="social-content">
            <h3>GitHub</h3>
            <p>View my projects and source code</p>
          </div>

          <span className="arrow">↗</span>

        </a>


        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vaishnavi-maske-019343434?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >

          <div className="social-icon">
            <FaLinkedin />
          </div>

          <div className="social-content">
            <h3>LinkedIn</h3>
            <p>Connect with me professionally</p>
          </div>

          <span className="arrow">↗</span>

        </a>

      </div>

    </section>
  );
}

export default Connect;