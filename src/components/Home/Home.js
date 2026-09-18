import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import developerVideo from "../../Assets/vijendra-intro.mp4";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="home-section" id="home">

        <video
          className="home-background-video"
          autoPlay
          loop
          playsInline
          preload="auto"
        >
          <source src={developerVideo} type="video/mp4" />
        </video>

        <div className="home-video-overlay" />

        <div className="home-particles">
          <Particle />
        </div>

        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">

              <h1
                className="heading"
                style={{
                  paddingBottom: "15px",
                  color: "#F8FAFC",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Hi There!

                <span
                  className="wave"
                  role="img"
                  aria-label="waving hand"
                  style={{
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                >
                  👋🏻
                </span>
              </h1>

              <h1
                className="heading-name"
                style={{
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                }}
              >
                I'M{" "}
                <strong
                  className="main-name"
                  style={{ color: "#A855F7" }}
                >
                  VIJENDRA
                </strong>
              </h1>

              <div
                style={{
                  paddingTop: "35px",
                  paddingBottom: "35px",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                }}
              >
                <Type />
              </div>

            </Col>
          </Row>
        </Container>

        <style>{`
          .home-section {
            position: relative;
            width: 100%;
            height: 100vh;
            min-height: 100vh;
            overflow: hidden;
            background: #12001f;
          }

          .home-background-video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 55% center;
            z-index: 0;
            filter: brightness(1.18) contrast(1.05) saturate(1.08);
            pointer-events: none;
          }

          .home-video-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              90deg,
              rgba(18, 0, 31, 0.30) 0%,
              rgba(18, 0, 31, 0.10) 45%,
              rgba(18, 0, 31, 0.02) 100%
            );
            z-index: 1;
            pointer-events: none;
          }

          .home-particles {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            pointer-events: none;
          }

          .home-content {
            position: relative;
            z-index: 3;
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          .home-header {
            position: relative;
            z-index: 4;
          }

          @media (min-width: 992px) and (max-width: 1399px) {
            .home-background-video {
              object-position: 58% center;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .home-background-video {
              object-position: 60% center;
              filter: brightness(1.15) contrast(1.04) saturate(1.06);
            }

            .home-video-overlay {
              background: linear-gradient(
                90deg,
                rgba(18, 0, 31, 0.25) 0%,
                rgba(18, 0, 31, 0.06) 100%
              );
            }
          }

          @media (max-width: 767px) {
            .home-section {
              height: 100svh;
              min-height: 100svh;
            }

            .home-background-video {
              object-position: 65% center;
              filter: brightness(1.12) contrast(1.04) saturate(1.06);
            }

            .home-content {
              min-height: 100svh;
              padding-top: 75px;
              padding-bottom: 40px;
            }

            .home-video-overlay {
              background: linear-gradient(
                90deg,
                rgba(18, 0, 31, 0.25) 0%,
                rgba(18, 0, 31, 0.05) 100%
              );
            }
          }

          @media (max-width: 480px) {
            .home-background-video {
              object-position: 67% center;
              filter: brightness(1.10) contrast(1.03) saturate(1.05);
            }

            .home-content {
              padding-top: 70px;
              padding-bottom: 30px;
            }
          }

          @media (max-width: 360px) {
            .home-background-video {
              object-position: 68% center;
            }
          }
        `}</style>
      </section>

      <Home2 />

      <Container>
        <Row
          style={{
            paddingTop: "50px",
            paddingBottom: "80px",
          }}
        >
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>

            <p>
              Feel free to{" "}
              <span className="purple">connect </span>
              with me
            </p>

            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://github.com/vijendra431"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vijendra-7bb817290/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vijay_virat385"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;