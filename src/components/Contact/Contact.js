import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineSend,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
    setError(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError(false);

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "50px",
        position: "relative",
      }}
    >
      <Particle />

      <div
        style={{
          width: "100%",
          maxWidth: "850px",
          margin: "0 auto",
          padding: "20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              color: "white",
              marginBottom: "8px",
            }}
          >
            Get In <span className="purple">Touch</span>
          </h1>

          <p
            style={{
              fontSize: "14px",
              color: "#ccc",
              marginBottom: "0",
            }}
          >
            I'm currently looking for Junior Full Stack Developer
            opportunities.
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#aaa",
              marginTop: "5px",
            }}
          >
            Feel free to contact me regarding job opportunities, projects, or
            collaboration.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {/* Contact Information */}
          <div
            style={{
              flex: "1 1 250px",
              maxWidth: "320px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                color: "white",
                marginBottom: "15px",
              }}
            >
              Let's Connect
            </h2>

            <p
              style={{
                fontSize: "13px",
                color: "#ccc",
                lineHeight: "1.7",
              }}
            >
              If you have a suitable opportunity or would like to discuss a
              project, feel free to reach out.
            </p>

            <a
              href="mailto:vijendraraddy@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "white",
                textDecoration: "none",
                fontSize: "13px",
                marginTop: "20px",
              }}
            >
              <AiOutlineMail
                style={{
                  fontSize: "20px",
                  color: "#c770f0",
                }}
              />
              <span>vijendraraddy@gmail.com</span>
            </a>

            <a
              href="https://github.com/vijendra431"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "white",
                textDecoration: "none",
                fontSize: "13px",
                marginTop: "15px",
              }}
            >
              <AiOutlineGithub
                style={{
                  fontSize: "20px",
                  color: "#c770f0",
                }}
              />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vijendra-7bb817290/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "white",
                textDecoration: "none",
                fontSize: "13px",
                marginTop: "15px",
              }}
            >
              <AiOutlineLinkedin
                style={{
                  fontSize: "20px",
                  color: "#c770f0",
                }}
              />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Contact Form */}
          <div
            style={{
              flex: "1 1 350px",
              maxWidth: "470px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Send Me a Message
            </h2>

            <Form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <div
                style={{
                  position: "absolute",
                  overflow: "hidden",
                  clip: "rect(0 0 0 0)",
                  height: "1px",
                  width: "1px",
                  margin: "-1px",
                  padding: 0,
                  border: 0,
                }}
              >
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" type="text" />
                </label>
              </div>

              <Form.Group style={{ marginBottom: "15px" }}>
                <Form.Label
                  style={{
                    fontSize: "13px",
                    color: "white",
                    marginBottom: "6px",
                  }}
                >
                  <AiOutlineUser /> &nbsp; Name
                </Form.Label>

                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    height: "40px",
                    fontSize: "13px",
                    background: "rgba(255,255,255,0.05)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
              </Form.Group>

              <Form.Group style={{ marginBottom: "15px" }}>
                <Form.Label
                  style={{
                    fontSize: "13px",
                    color: "white",
                    marginBottom: "6px",
                  }}
                >
                  <AiOutlineMail /> &nbsp; Email
                </Form.Label>

                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    height: "40px",
                    fontSize: "13px",
                    background: "rgba(255,255,255,0.05)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
              </Form.Group>

              <Form.Group style={{ marginBottom: "18px" }}>
                <Form.Label
                  style={{
                    fontSize: "13px",
                    color: "white",
                    marginBottom: "6px",
                  }}
                >
                  Message
                </Form.Label>

                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    fontSize: "13px",
                    background: "rgba(255,255,255,0.05)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                    resize: "none",
                  }}
                />
              </Form.Group>

              <div style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  style={{
                    fontSize: "13px",
                    padding: "8px 20px",
                    borderRadius: "6px",
                    minWidth: "140px",
                  }}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <AiOutlineSend /> &nbsp; Send Message
                    </>
                  )}
                </Button>
              </div>

              {submitted && (
                <p
                  style={{
                    textAlign: "center",
                    color: "#c770f0",
                    fontSize: "12px",
                    marginTop: "15px",
                    marginBottom: 0,
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </p>
              )}

              {error && (
                <p
                  style={{
                    textAlign: "center",
                    color: "#ff6b6b",
                    fontSize: "12px",
                    marginTop: "15px",
                    marginBottom: 0,
                  }}
                >
                  Something went wrong. Please try again.
                </p>
              )}
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;