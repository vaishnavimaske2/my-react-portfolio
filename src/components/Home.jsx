import profileImage from "../assets/Profile.jpeg";
function Home() {
  return (
    <section id="home" className="home">

      <div className="home-content">

        <p className="intro">Hello, I'm</p>

        <h1>
          Vaishnavi <span>Maske</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="home-description">
          I am a BCA student passionate about web development,
          software development, and emerging technologies such as
          Artificial Intelligence and Machine Learning.
        </p>

        <div className="home-buttons">

          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>

        </div>

      </div>

      <div className="home-image">
        <div className="profile-circle">
          <img src={profileImage} alt="Vaishnavi Maske" />
        </div>
      </div>

    </section>
  );
}

export default Home;