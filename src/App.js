import React from "react";
import myimg from './images/myimg.png';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <nav className="nav-bar">
        <ul>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('education')}>Education</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('activities')}>Activities</li>
          <li onClick={() => scrollToSection('certifications')}>Certifications</li>
        </ul>
      </nav>

      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <img 
          src={myimg} 
          alt="Yumeth Ransana"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            marginBottom: "20px",
            border: "3px solid #ffd700",
            objectFit: "cover"
          }}
        />
        <h1>Yumeth Ransana</h1>
        <h3>Passionate IT Undergraduate | Aspiring Software Engineer | Problem Solver</h3>
        <p>
           📞 <a href="tel:0760317583">0760317583</a> | 📧 <a href="mailto:yumethransana@gmail.com">yumethransana@gmail.com</a>
       </p>

        <p>
          🔗 <a href="https://www.linkedin.com/in/yumeth-ransana-797275317" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Enthusiastic and motivated third-year IT undergraduate at SLIIT University, specializing in
          Information Technology. Passionate about developing efficient, scalable applications and solving complex problems.
        </p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <ul>
          <li><strong>BSc (Hons) in Information Technology</strong> - SLIIT University (2022 - Present)</li>
          <li> G.C.O.E Advanced Level by Technology stream.(2019-2021)</li>
          <li>G.C.O.E  Ordinary Level .(2007-2018)</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Work Experience</h2>
        <p><strong>IT Intern - J.F. Packaging Limited</strong></p>
        <ul>
          <li>Supported IT operations, troubleshooting technical issues, and maintaining system efficiency.</li>
          <li>Assisted in database management using MS SQL Server.</li>
          <li>Developed a sales management web application with a job scheduling feature, enabling job tracking and automatic analysis of job meterage and machines based on user inputted dates.</li>
          <li>If daily limits exceed, a warning message is generated to notify the user.</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Sales Management Web Application</strong> (React.js, Node.js, MS SQL Server)
            <p>Developed a web-based sales management system for J.F. Packaging Limited, where users can add jobs (packet prints) with desired dates. The system analyzes and displays job meterage and machine allocation, warning users if daily limits are exceeded.</p>
          </li>
          <li>
            <strong>HomeStock - Shopping List & Expense Tracker</strong> (MERN Stack)
            <p>Developed a full-stack web application for household inventory and expense tracking.</p>
          </li>
          <li>
            <strong>Human Care Center Website</strong> (React, Node.js, Express, MongoDB)
            <p>Built a fully functional web platform integrating front-end and back-end functionalities.</p>
          </li>
          <li>
            <strong>C# Windows Application</strong> (.NET, C#)
            <p>Designed and developed a desktop application for J.F. Packaging Limited.</p>
          </li>
          <li>
            <strong>Java Application Development</strong> (Java, HTML, MySQL, JavaScript)
            <p>Developed a Java-based application with database integration.</p>
          </li>
          <li>
            <strong>Simple Website Development</strong> (HTML, CSS, JavaScript, PHP, MySQL)
            <p>Created a user-friendly website for academic purposes.</p>
          </li>
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming:</strong> C, C++, Java, Python, JavaScript, Kotlin, R</li>
          <li><strong>Web Development:</strong> HTML, CSS, React.js, Node.js, Express, PHP</li>
          <li><strong>Database Management:</strong> MySQL, MongoDB, MS SQL Server</li>
          <li><strong>Languages:</strong> English (Professional), Sinhala (Native)</li>
          <li><strong>Other Skills:</strong> Problem-Solving, Team Collaboration, Quick Learning</li>
        </ul>
      </section>

      <section id="activities">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>Completed Leadership and Team Building Program – The Commando Regiment Training School (2019)</li>
          <li>Senior Prefect – WP/KE Karunarathne Buddhist National College (2020)</li>
          <li>3rd Position in Under 18 Boys 4x100 Relay – Seventh-Day Adventist High School (2018)</li>
        </ul>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li><strong>British Council</strong> - General English Course (Intermediate) - 1 Year (2023 - 2024)</li>
          <li><strong>British Council</strong> - 20-hour English Language Course - 20 Hours (2022)</li>
          <li><strong>British Way English Academy</strong> - Diploma in English Language - 360 Hours (2019)</li>
          <li><strong>British Way English Academy</strong> - 40-day English Speaking Camp - 40 Days (2019)</li>
          <li><strong>ESOFT Digital Campus</strong> - Foundation in Information Technology & Foundation in English - Scholarship (2022)</li>
        </ul>
      </section>

      <footer style={{ textAlign: "center", marginTop: "40px", fontSize: "14px" }}>
        <p>© 2025 Yumeth Ransana | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
