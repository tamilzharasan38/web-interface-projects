import { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>

        <div className="nav-links">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>Tamil Arasan</h1>

          <h2>React Developer & Computer Science Student</h2>

          <p className="hero-text">
            I enjoy building modern and user-friendly web applications
            using React, JavaScript, HTML and CSS.
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection("projects")}>
              View Projects
            </button>

            <button
              className="outline-btn"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="profile-circle">
          👨‍💻
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <div className="about-icon">🎓</div>

          <div>
            <h3>Computer Science Student</h3>

            <p>
              I am a passionate computer science student interested in
              web development and software development. I like learning
              new technologies and creating useful applications.
            </p>

            <p>
              My current focus is React development, JavaScript,
              responsive web design and problem solving.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React</h3>
            <p>Building interactive UI applications.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🟨</div>
            <h3>JavaScript</h3>
            <p>Creating dynamic web functionality.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>HTML</h3>
            <p>Creating structured web pages.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>CSS</h3>
            <p>Designing responsive user interfaces.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">☕</div>
            <h3>Java</h3>
            <p>Object-oriented programming and problem solving.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>SQL</h3>
            <p>Working with databases and queries.</p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>
            <h3>Student Career Dashboard</h3>
            <p>
              A React dashboard for tracking student career and
              placement activities.
            </p>

            <div className="tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>
            <h3>Hobby Management System</h3>
            <p>
              A web application to add, edit, delete and search
              personal hobbies.
            </p>

            <div className="tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>
            <h3>Simple Calculator</h3>
            <p>
              A responsive calculator application with basic
              arithmetic operations.
            </p>

            <div className="tech">
              <span>React</span>
              <span>JavaScript</span>
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section className="section education-section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <div className="education-year">2024 - 2027</div>

          <div>
            <h3>B.Sc Computer Science</h3>
            <p>Computer Science Department</p>
            <p>
              Studying programming, web development, data structures
              and database management.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-card">

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>student@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📱</span>
            <div>
              <h3>Phone</h3>
              <p>9876543210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>MyPortfolio</h3>
        <p>© 2026 Tamil Arasan. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;