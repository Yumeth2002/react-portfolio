import React from "react";
import myimg from "./images/myimg.png";
import "./App.css";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="App">
      {/* Background orbs */}
      <div className="bg-orb one" />
      <div className="bg-orb two" />
      <div className="bg-orb three" />

      {/* Navbar */}
      <nav className="nav-bar">
        <ul>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("education")}>Education</li>
          <li onClick={() => scrollToSection("experience")}>Experience</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("activities")}>Activities</li>
          <li onClick={() => scrollToSection("certifications")}>Certifications</li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <div className="profile-wrap">
            <img className="profile-img" src={myimg} alt="Yumeth Ransana" />
          </div>

          <div className="hero-content">
            <h1 className="hero-title">Yumeth Ransana</h1>

            <p className="hero-subtitle">
              Passionate IT Undergraduate • Aspiring Software Engineer • Problem Solver
            </p>

            <div className="hero-badges">
              <span className="badge">📍 Sri Lanka</span>
              <span className="badge">⚡ React • .NET • SQL</span>
              <span className="badge">🚀 Open to Work</span>
            </div>

            <div className="hero-actions">
              <a className="btn primary" href="mailto:yumethransana@gmail.com">
                ✉️ Email Me
              </a>

              <a className="btn ghost" href="tel:0760317583">
                📞 Call
              </a>

              <a
                className="btn"
                href="https://www.linkedin.com/in/yumeth-ransana-797275317"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          Enthusiastic and motivated 4th-year IT undergraduate at SLIIT University, specializing in
          Information Technology. Passionate about building efficient, scalable applications and solving
          real-world problems with clean, maintainable code.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <h2 className="section-title">Education</h2>

        <div className="grid">
          <div className="card-item">
            <strong>BSc (Hons) in Information Technology</strong>
            <p>SLIIT University • 2022 - Present</p>
          </div>

          <div className="card-item">
            <strong>G.C.E Advanced Level (Technology Stream)</strong>
            <p>2019 - 2021</p>
          </div>

          <div className="card-item">
            <strong>G.C.E Ordinary Level</strong>
            <p>2007 - 2018</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <h2 className="section-title">Work Experience</h2>

        <div className="grid">
          {/* JF */}
          <div className="card-item">
            <strong>IT Intern — J.F. Packaging Limited</strong>

            <div className="chips" style={{ marginTop: "10px" }}>
              <span className="chip">React</span>
              <span className="chip">MS SQL Server</span>
              <span className="chip">C# Desktop</span>
              <span className="chip">Power BI</span>
              <span className="chip">IT Support</span>
              <span className="chip">Networking</span>
              <span className="chip">Server Backup</span>
            </div>

            <p style={{ marginTop: "12px" }}>
              Supported IT operations including user support, troubleshooting, network assistance, server
              backup handling, and system maintenance. Contributed to software development and reporting
              dashboards using modern tools and databases.
            </p>
          </div>

          {/* Star */}
          <div className="card-item">
            <strong>IT Trainee / Training Programmer — Star Garment</strong>

            <div className="chips" style={{ marginTop: "10px" }}>
              <span className="chip">FoxPro</span>
              <span className="chip">MS SQL Server</span>
              <span className="chip">C# MVC</span>
              <span className="chip">Testing</span>
              <span className="chip">Bug Fixing</span>
              <span className="chip">Error Handling</span>
            </div>

            <p style={{ marginTop: "12px" }}>
              Assisted with development and testing tasks on legacy and modern modules. Focused on finding
              issues, debugging, fixing errors, and improving system stability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2 className="section-title">Projects</h2>

        <div className="grid">
          <div className="card-item">
            <strong>Sales Management Web Application</strong>
            <p>
              React.js • Node.js • MS SQL Server
              <br />
              Job scheduling + automatic analysis of meterage & machines. Warns users when daily limits are
              exceeded.
            </p>
          </div>

          <div className="card-item">
            <strong>HomeStock — Shopping List & Expense Tracker</strong>
            <p>
              MERN Stack
              <br />
              Full-stack household inventory + expense tracking web application.
            </p>
          </div>

          <div className="card-item">
            <strong>Human Care Center Website</strong>
            <p>
              React • Node.js • Express • MongoDB
              <br />
              Full web platform integrating front-end and back-end functionalities.
            </p>
          </div>

          <div className="card-item">
            <strong>C# Windows Application</strong>
            <p>
              .NET • C#
              <br />
              Desktop application developed for J.F. Packaging Limited.
            </p>
          </div>

          <div className="card-item">
            <strong>Java Application Development</strong>
            <p>
              Java • HTML • MySQL • JavaScript
              <br />
              Java-based app with database integration.
            </p>
          </div>

          <div className="card-item">
            <strong>Simple Website Development</strong>
            <p>
              HTML • CSS • JavaScript • PHP • MySQL
              <br />
              Academic web project with frontend + backend integration.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="chips">
          <span className="chip">C</span>
          <span className="chip">C++</span>
          <span className="chip">C#</span>
          <span className="chip">.NET Core</span>
          <span className="chip">Java</span>
          <span className="chip">Python</span>
          <span className="chip">JavaScript</span>
          <span className="chip">Kotlin</span>
          <span className="chip">R</span>
          <span className="chip">React.js</span>
          <span className="chip">Node.js</span>
          <span className="chip">Express</span>
          <span className="chip">PHP</span>
          <span className="chip">MySQL</span>
          <span className="chip">MongoDB</span>
          <span className="chip">MS SQL Server</span>
          <span className="chip">Problem Solving</span>
          <span className="chip">Teamwork</span>
          <span className="chip">Quick Learning</span>
          <span className="chip">English</span>
          <span className="chip">Sinhala</span>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section" id="activities">
        <h2 className="section-title">Activities</h2>

        <div className="grid">
          <div className="card-item">
            <strong>Leadership & Team Building Program</strong>
            <p>The Commando Regiment Training School • 2019</p>
          </div>

          <div className="card-item">
            <strong>Senior Prefect</strong>
            <p>WP/KE Karunarathne Buddhist National College • 2020</p>
          </div>

          <div className="card-item">
            <strong>Under 18 Boys 4x100 Relay</strong>
            <p>3rd Position • Seventh-Day Adventist High School • 2018</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section" id="certifications">
        <h2 className="section-title">Certifications</h2>

        <div className="grid">
          <div className="card-item">
            <strong>British Council</strong>
            <p>General English Course (Intermediate) • 1 Year • 2023 - 2024</p>
          </div>

          <div className="card-item">
            <strong>British Council</strong>
            <p>20-hour English Language Course • 2022</p>
          </div>

          <div className="card-item">
            <strong>British Way English Academy</strong>
            <p>Diploma in English Language • 360 Hours • 2019</p>
          </div>

          <div className="card-item">
            <strong>British Way English Academy</strong>
            <p>40-day English Speaking Camp • 2019</p>
          </div>

          <div className="card-item">
            <strong>ESOFT Digital Campus</strong>
            <p>Foundation in IT & English • Scholarship • 2022</p>
          </div>

          {/* Microsoft Learn */}
          <div className="card-item">
            <strong>Microsoft Learn — Azure & .NET Modules (Completed)</strong>

            <div className="chips" style={{ marginTop: "10px" }}>
              <span className="chip">Azure VM</span>
              <span className="chip">Blob Storage</span>
              <span className="chip">Virtual Networks</span>
              <span className="chip">Identity & Security</span>
              <span className="chip">Azure Databases</span>
              <span className="chip">ASP.NET Core</span>
              <span className="chip">Blazor</span>
              <span className="chip">Scalability</span>
              <span className="chip">Cloud Shell</span>
              <span className="chip">AI Concepts</span>
              <span className="chip">Data Analysis</span>
            </div>
          </div>

          {/* AWS Skill Builder */}
          <div className="card-item">
            <strong>AWS Skill Builder — Cloud & Core Services Modules (Completed)</strong>

            <div className="chips" style={{ marginTop: "10px" }}>
              <span className="chip">Cloud Practitioner</span>
              <span className="chip">S3</span>
              <span className="chip">File Systems</span>
              <span className="chip">Networking</span>
              <span className="chip">VPC Connectivity</span>
              <span className="chip">Auto Healing</span>
              <span className="chip">Scaling</span>
              <span className="chip">High Availability</span>
              <span className="chip">Relational DB</span>
              <span className="chip">Security Concepts</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">© 2025 Yumeth Ransana • Built with React</footer>
    </div>
  );
}

export default App;
