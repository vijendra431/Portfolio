import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vijendra</span> from{" "}
            <span className="purple">Karnataka, India</span>.
            <br />
            I’m a{" "}
            <span className="purple">Junior Full Stack Developer</span>{" "}
            passionate about building modern, responsive, and user-friendly web
            applications.
            <br />
            I hold a{" "}
            <span className="purple">
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            from <span className="purple">Gulbarga University</span>.
            <br />
            <br />
            I enjoy turning ideas into real-world applications and continuously
            improving my skills in{" "}
            <span className="purple">
              React, JavaScript, Node.js, Express.js, and PostgreSQL
            </span>
            .
            <br />
            <br />
            Outside of coding, I enjoy building personal projects, exploring
            new technologies, and improving my technical and problem-solving
            skills.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 🏏
            </li>

            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 💻
            </li>

            <li className="about-activity">
              <ImPointRight /> Building Personal Projects 🚀
            </li>

            <li className="about-activity">
              <ImPointRight /> Fitness and Gym Workouts 💪
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Keep learning, keep building, and turn ideas into meaningful
            solutions.”
          </p>

          <footer className="blockquote-footer">Vijendra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;