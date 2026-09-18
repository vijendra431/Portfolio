import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {
  CgGitFork,
  CgFileDocument,
  CgMail,
} from "react-icons/cg";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import logo from "../Assets/logo.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky custom-navbar" : "navbar custom-navbar"}
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex">
          <img
            src={logo}
            className="img-fluid logo"
            alt="Vijendra logo"
          />
        </Navbar.Brand>

        {/* Mobile Menu */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            {/* Home */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* Projects */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* Resume */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* Contact */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <CgMail style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            {/* GitHub */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/vijendra431/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Navbar Styling */}
      <style>{`
        .custom-navbar {
          background: linear-gradient(
            90deg,
            #12001f 0%,
            #1b0533 50%,
            #240046 100%
          ) !important;

          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);

          transition: all 0.3s ease;

          padding-top: 10px;
          padding-bottom: 10px;
        }

        /* Navbar links */
        .custom-navbar .nav-link {
          color: #ffffff !important;

          font-weight: 500;

          margin-left: 8px;
          margin-right: 8px;

          padding: 8px 10px !important;

          transition: all 0.3s ease;
        }

        /* Hover effect */
        .custom-navbar .nav-link:hover {
          color: #c084fc !important;

          transform: translateY(-2px);
        }

        /* Active / clicked link */
        .custom-navbar .nav-link.active {
          color: #c084fc !important;
        }

        /* GitHub button */
        .custom-navbar .fork-btn-inner {
          background: linear-gradient(
            135deg,
            #7c3aed,
            #9333ea
          ) !important;

          border: 1px solid #a855f7 !important;

          color: #ffffff !important;

          border-radius: 8px;

          padding: 7px 12px;

          margin-left: 10px;

          transition: all 0.3s ease;
        }

        .custom-navbar .fork-btn-inner:hover {
          background: linear-gradient(
            135deg,
            #9333ea,
            #a855f7
          ) !important;

          transform: translateY(-2px);

          box-shadow: 0 5px 15px rgba(168, 85, 247, 0.35);
        }

        /* Mobile menu icon */
        .custom-navbar .navbar-toggler {
          border: none !important;

          padding: 6px;

          outline: none !important;

          box-shadow: none !important;
        }

        .custom-navbar .navbar-toggler span {
          display: block;

          width: 25px;
          height: 3px;

          margin: 5px 0;

          border-radius: 5px;

          background: #ffffff;

          transition: all 0.3s ease;
        }

        /* Mobile navbar */
        @media (max-width: 767px) {
          .custom-navbar {
            padding-top: 8px;
            padding-bottom: 8px;
          }

          .custom-navbar .navbar-collapse {
            background: #160025;

            margin-top: 10px;

            padding: 15px;

            border-radius: 12px;

            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          }

          .custom-navbar .nav-link {
            margin: 4px 0;

            padding: 10px !important;

            border-radius: 8px;
          }

          .custom-navbar .nav-link:hover {
            background: rgba(168, 85, 247, 0.12);

            transform: none;
          }

          .custom-navbar .fork-btn-inner {
            margin-left: 0;

            margin-top: 8px;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;