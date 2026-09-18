import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import routing from "../../Assets/Projects/routing.png.png";
import jobbyApp from "../../Assets/Projects/jobby-app.png.png";
import jobHunt from "../../Assets/Projects/job-hunt.png.png";
import projectManagement from "../../Assets/Projects/project-managment.png.png";
import iplDashboard from "../../Assets/Projects/ipl-dashboard.png.png";
import nxtTrend from "../../Assets/Projects/nxt-trend.png.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
       
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          {/* Project Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectManagement}
              title="Project Management"
              description="A full-stack Project Management application designed to help users create, organize, and manage projects and tasks efficiently. Built with React.js, Node.js, Express.js, and PostgreSQL, with features such as project and task management, user authentication, and a responsive user interface."
              ghLink="https://github.com/vijendra431/project-management"
              demoLink="https://project-management-apps.netlify.app/"
              techStack={[
                "React.js",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "JWT",
                "REST API",
              ]}
            />
          </Col>

          {/* NXT Trend */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nxtTrend}
              title="NXT Trend"
              description="A responsive video streaming web application built with React.js. The application allows users to browse and explore videos, search for content, view video details, and interact with content through a clean and responsive interface."
              ghLink="https://github.com/vijendra431/nxtWatchApp"
              demoLink="https://app.netlify.com/projects/nxt-watch-app/deploys"
              
              techStack={[
                "React.js",
                "JavaScript",
                "React Router",
                "REST API",
                "CSS",
              ]}
            />
          </Col>

          {/* Job Hunt */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobHunt}
              title="Job Hunt"
              description="A full-stack Job Hunt application designed to help users search, explore, and manage job opportunities efficiently. Built with React.js, Node.js, Express.js, and PostgreSQL, featuring user authentication, job search and filtering, application management, and a responsive user interface."
              ghLink="https://github.com/vijendra431/jobbys-app"
              demoLink="https://myjobbyapp.netlify.app/"
              techStack={[
                "React.js",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "JWT",
                "REST API",
              ]}
            />
          </Col>

          {/* Routing Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={routing}
              title="Routing Project"
              description="A React.js routing project built to demonstrate client-side navigation and multi-page application structure. The application uses React Router to navigate between different pages and provides a smooth and responsive user experience without full page reloads."
              ghLink="https://github.com/vijendra431/routing-websites"
              demoLink="https://routing-singlepages-navigate.netlify.app/"
              techStack={[
                "React.js",
                "JavaScript",
                "React Router",
                "CSS",
              ]}
            />
          </Col>

          {/* IPL Dashboard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iplDashboard}
              title="IPL Dashboard"
              description="A responsive IPL Dashboard application built with React.js to display IPL teams, match details, and team-specific information. The application uses React Router for navigation and provides an interactive and user-friendly interface for exploring IPL data."
              ghLink="https://github.com/vijendra431/IPL-dash-board"
              demoLink="https://ipl-dashboard-details.netlify.app/"
              techStack={[
                "React.js",
                "JavaScript",
                "React Router",
                "REST API",
                "CSS",
              ]}
            />
          </Col>

          {/* Jobby App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobbyApp}
              title="Jobby App"
              description="A job search web application built with React.js that allows users to explore and search for job opportunities. The Jobby App provides features such as job search, filtering, job details, and a responsive user interface."
              ghLink="https://github.com/vijendra431/projects-show"
              demoLink="https://jobbys-app.netlify.app/"
              techStack={[
                "React.js",
                "JavaScript",
                "React Router",
                "REST API",
                "CSS",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;