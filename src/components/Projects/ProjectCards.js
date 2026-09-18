import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={`${props.title} project`}
      />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Technology Stack */}
        {props.techStack && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "20px",
            }}
          >
            {props.techStack.map((tech, index) => (
              <span
                key={index}
                style={{
                  fontSize: "12px",
                  padding: "5px 9px",
                  borderRadius: "12px",
                  background: "rgba(128, 90, 213, 0.15)",
                  color: "#c084fc",
                  border: "1px solid rgba(192, 132, 252, 0.3)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> &nbsp; GitHub
          </Button>

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;