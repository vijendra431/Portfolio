import { Col, Row } from "react-bootstrap";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiExpress,
  SiTypescript,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

function Techstack() {
  const iconStyle = {
    fontSize: "40px",
    marginBottom: "6px",
    transition: "transform 0.3s ease",
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      {/* HTML5 */}
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5
          style={{ ...iconStyle, color: "#E34F26" }}
        />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      {/* CSS3 */}
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt
          style={{ ...iconStyle, color: "#1572B6" }}
        />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <FaJs
          style={{ ...iconStyle, color: "#F7DF1E" }}
        />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <FaReact
          style={{ ...iconStyle, color: "#61DAFB" }}
        />
        <div className="tech-icons-text">React.js</div>
      </Col>

      {/* Redux */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux
          style={{ ...iconStyle, color: "#764ABC" }}
        />
        <div className="tech-icons-text">Redux Toolkit</div>
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs
          style={{ ...iconStyle, color: "#339933" }}
        />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      {/* Express.js */}
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress
          style={{ ...iconStyle, color: "#FFFFFF" }}
        />
        <div className="tech-icons-text">Express.js</div>
      </Col>

      {/* TypeScript */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript
          style={{ ...iconStyle, color: "#3178C6" }}
        />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      {/* PostgreSQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql
          style={{ ...iconStyle, color: "#4169E1" }}
        />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      {/* Tailwind CSS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss
          style={{ ...iconStyle, color: "#06B6D4" }}
        />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      {/* Bootstrap */}
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap
          style={{ ...iconStyle, color: "#7952B3" }}
        />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt
          style={{ ...iconStyle, color: "#F05032" }}
        />
        <div className="tech-icons-text">Git</div>
      </Col>

      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman
          style={{ ...iconStyle, color: "#FF6C37" }}
        />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;