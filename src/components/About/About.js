import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Certificates from "../Certificates/Certificates";

function About() {
  return (
    <>
      <Particle />

      <Container fluid className="about-section">
        <Container>

          {/* ================= ABOUT INTRO ================= */}
          <section style={{ paddingTop: "40px" }}>
            <Row
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {/* LEFT CONTENT */}
              <Col
                md={7}
                style={{
                  paddingTop: "20px",
                  paddingBottom: "40px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "7px 16px",
                    marginBottom: "15px",
                    borderRadius: "30px",
                    background: "rgba(168, 85, 247, 0.12)",
                    border: "1px solid rgba(168, 85, 247, 0.35)",
                    color: "#c084fc",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  ABOUT ME
                </div>

                <h1
                  style={{
                    fontSize: "2.5em",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                >
                  Know Who <strong className="purple">I'M</strong>
                </h1>

                <Aboutcard />
              </Col>

              {/* RIGHT IMAGE */}
              <Col
                md={5}
                style={{
                  paddingTop: "30px",
                  paddingBottom: "50px",
                  textAlign: "center",
                }}
                className="about-img"
              >
                <img
                  src={laptopImg}
                  alt="Vijendra working as a developer"
                  className="img-fluid"
                  style={{
                    maxWidth: "420px",
                    width: "100%",
                    filter: "drop-shadow(0 15px 30px rgba(128, 0, 255, 0.18))",
                  }}
                />
              </Col>
            </Row>
          </section>

          {/* ================= PROFILE HIGHLIGHTS ================= */}
          <Row
            style={{
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "60px",
            }}
          >
            {/* CARD 1 */}
            <Col xs={12} md={4} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  height: "100%",
                  padding: "25px",
                  textAlign: "center",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(168,85,247,0.20)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    marginBottom: "10px",
                  }}
                >
                  💻
                </div>

                <h4 style={{ color: "#fff", marginBottom: "8px" }}>
                  Full Stack Developer
                </h4>

                <p
                  style={{
                    color: "#aaa",
                    marginBottom: 0,
                    fontSize: "14px",
                  }}
                >
                  Building modern and responsive web applications.
                </p>
              </div>
            </Col>

            {/* CARD 2 */}
            <Col xs={12} md={4} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  height: "100%",
                  padding: "25px",
                  textAlign: "center",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(168,85,247,0.20)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    marginBottom: "10px",
                  }}
                >
                  ⚙️
                </div>

                <h4 style={{ color: "#fff", marginBottom: "8px" }}>
                  Backend Development
                </h4>

                <p
                  style={{
                    color: "#aaa",
                    marginBottom: 0,
                    fontSize: "14px",
                  }}
                >
                  Developing APIs, authentication and database-driven
                  applications.
                </p>
              </div>
            </Col>

            {/* CARD 3 */}
            <Col xs={12} md={4} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  height: "100%",
                  padding: "25px",
                  textAlign: "center",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(168,85,247,0.20)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    marginBottom: "10px",
                  }}
                >
                  🚀
                </div>

                <h4 style={{ color: "#fff", marginBottom: "8px" }}>
                  Continuous Learning
                </h4>

                <p
                  style={{
                    color: "#aaa",
                    marginBottom: 0,
                    fontSize: "14px",
                  }}
                >
                  Continuously improving coding, problem-solving and
                  development skills.
                </p>
              </div>
            </Col>
          </Row>

          {/* ================= SKILLS ================= */}
          <section style={{ marginBottom: "30px" }}>
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset</strong>
            </h1>

            <p
              style={{
                textAlign: "center",
                color: "#aaa",
                marginBottom: "35px",
                fontSize: "15px",
              }}
            >
              Technologies and frameworks I use to build modern web
              applications.
            </p>

            <Techstack />
          </section>

          {/* ================= TOOLS ================= */}
          <section style={{ marginTop: "20px" }}>
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I Use
            </h1>

            <p
              style={{
                textAlign: "center",
                color: "#aaa",
                marginBottom: "35px",
                fontSize: "15px",
              }}
            >
              Development tools and platforms I use throughout my workflow.
            </p>

            <Toolstack />
          </section>

          {/* ================= GITHUB ================= */}
          <section style={{ marginTop: "20px" }}>
            <h1 className="project-heading">
              My <strong className="purple">GitHub</strong>
            </h1>

            <p
              style={{
                textAlign: "center",
                color: "#aaa",
                marginBottom: "30px",
                fontSize: "15px",
              }}
            >
              Explore my projects, repositories and development activity.
            </p>

            <Github />
          </section>

          {/* ================= CERTIFICATES ================= */}
          <section style={{ marginTop: "30px", paddingBottom: "60px" }}>
            <h1 className="project-heading">
              My <strong className="purple">Certificates</strong>
            </h1>

            <p
              style={{
                textAlign: "center",
                color: "#aaa",
                marginBottom: "35px",
                fontSize: "15px",
              }}
            >
              Certifications and courses that support my technical learning.
            </p>

            <Certificates />
          </section>

        </Container>
      </Container>
    </>
  );
}

export default About;