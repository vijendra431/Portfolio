import { Col, Row } from "react-bootstrap";

import {
  SiGooglechrome,
  SiGithub,
  SiNpm,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

function Toolstack() {
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
      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <VscCode
          style={{
            ...iconStyle,
            color: "#8B5CF6",
          }}
        />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      {/* Google Chrome */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome
          style={{
            ...iconStyle,
            color: "#F472B6",
          }}
        />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub
          style={{
            ...iconStyle,
            color: "#A78BFA",
          }}
        />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      {/* npm */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm
          style={{
            ...iconStyle,
            color: "#FB7185",
          }}
        />
        <div className="tech-icons-text">npm</div>
      </Col>

      {/* Vercel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel
          style={{
            ...iconStyle,
            color: "#22D3EE",
          }}
        />
        <div className="tech-icons-text">Vercel</div>
      </Col>

      {/* Netlify */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify
          style={{
            ...iconStyle,
            color: "#34D399",
          }}
        />
        <div className="tech-icons-text">Netlify</div>
      </Col>

      {/* Figma */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma
          style={{
            ...iconStyle,
            color: "#FBBF24",
          }}
        />
        <div className="tech-icons-text">Figma</div>
      </Col>
    </Row>
  );
}

export default Toolstack;