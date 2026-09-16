import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineSend,
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
      setError(false);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError(true);
      setSubmitted(false);
    }
  }

  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "40px",
        position: "relative",
      }}
    >
      <Particle />

      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          margin: "0 auto",
          padding: "20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h1
            style={{
              fontSize: "26px",
              textAlign: "center",
              marginBottom: "8px",
              color: "white",
            }}
          >
            Get In <span className="purple">Touch</span>
          </h1>

          <p
            style={{
              fontSize: "13px",
              textAlign: "center",
              color: "#ccc",
              marginBottom: "20px",
            }}
          >
            Let's build something great together — reach out anytime.
          </p>

          <Form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Required by Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot spam protection */}
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

            <Form.Group style={{ marginBottom: "12px" }}>
              <Form.Label
                style={{
                  fontSize: "13px",
                  color: "white",
                  marginBottom: "5px",
                }}
              >
                <AiOutlineUser /> Name
              </Form.Label>

              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  height: "38px",
                  fontSize: "13px",
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
            </Form.Group>

            <Form.Group style={{ marginBottom: "12px" }}>
              <Form.Label
                style={{
                  fontSize: "13px",
                  color: "white",
                  marginBottom: "5px",
                }}
              >
                <AiOutlineMail /> Email
              </Form.Label>

              <Form.Control
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  height: "38px",
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
                  marginBottom: "5px",
                }}
              >
                Message
              </Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Your message"
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
                style={{
                  fontSize: "13px",
                  padding: "7px 18px",
                  borderRadius: "6px",
                }}
              >
                <AiOutlineSend /> Send Message
              </Button>
            </div>

            {submitted && (
              <p
                style={{
                  textAlign: "center",
                  color: "#c770f0",
                  fontSize: "12px",
                  marginTop: "12px",
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
                  marginTop: "12px",
                  marginBottom: 0,
                }}
              >
                Something went wrong. Please try again.
              </p>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
