function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section id="contact" className="section contact-section">

      <div className="section-heading">
        <p>Let's Connect</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Have a project in mind?</h3>

          <p>
            Feel free to contact me for projects, internships,
            collaborations or opportunities.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>vaishnavimaske22@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;