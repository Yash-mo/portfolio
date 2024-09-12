import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="./yashmodi.pdf">My Resume</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Hi, I'm Yash</h1>
        <p>Fresher Web Developer | Passionate about coding and learning new technologies.</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer with a focus on frontend technologies. I love building responsive
          and interactive websites.
        </p>
      </section>
      
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <img src="./ipearl.png" alt="I-pearl" className="project-image" />
            <h3>I-pearl</h3>
            <p>
              A product-based web app for iPhones at a cheap price with functionalities such as add to cart and online payment.
            </p>
            <a href="http://upl-ipearl-fe.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
              View Project
            </a>
          </div>
          <div className="project">
            <img src="./weather.png" alt="Weather Application" className="project-image" />
            <h3>Weather Application</h3>
            <p>
              A weather application that displays real-time weather information based on your location and searched locations.
            </p>
            <a href="https://weather-react-ten-smoky.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
              View Project
            </a>
          </div>
          <div className="project">
            <img src="./kaamwale.jpg" alt="KamWale" className="project-image" />
            <h3>KamWale</h3>
            <p>
              A user guide webpage for an Android application called KamWale.
            </p>
            <a href="https://kaamwale-3d3ec.web.app/" target="_blank" rel="noopener noreferrer" className="btn">
              View Project
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5} size="3x" color="#e34c26" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#2965f1" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJs} size="3x" color="#f7df1e" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" color="#61dafb" />
            <p>React.js</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" color="#3c873a" />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faGitAlt} size="3x" color="#f1502f" />
            <p>Git</p>
          </div>
        </div>
      </section>



      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to work together or have any questions, feel free to reach out!</p>
        <ul className="contact-list">
          <li>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="contact-icon" />
            <span>Email: <a href="mailto:modiyash3002@gmail.com">modiyash3002@gmail.com</a></span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="contact-icon" />
            <span>LinkedIn: <a href="https://www.linkedin.com/in/yash-modi-907bb0252/" target="_blank" rel="noopener noreferrer">yash modi</a></span>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2024 Yashmodi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
