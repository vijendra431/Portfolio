import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myphoto.svg.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <div className="home-about-body">
              <p>
                I’m a{" "}
                <span className="purple">Junior Full Stack Developer</span>{" "}
                passionate about building modern, responsive, and user-friendly
                web applications. I enjoy turning ideas into real-world
                projects using React, JavaScript, Node.js, Express.js, and
                PostgreSQL.
              </p>

              <p>
                I’m focused on developing{" "}
                <span className="purple">
                  responsive web applications and full-stack solutions
                </span>{" "}
                with clean code, intuitive user interfaces, and reliable
                backend functionality.
              </p>

              <p>
                I enjoy working with{" "}
                <span className="purple">
                  REST APIs, authentication, databases, and modern frontend
                  technologies
                </span>{" "}
                while continuously improving my technical and problem-solving
                skills.
              </p>

              <p>
                My goal is to build{" "}
                <span className="purple">
                  scalable and user-friendly applications
                </span>{" "}
                and continue growing as a professional Full Stack Developer.
              </p>
            </div>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Vijay"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;