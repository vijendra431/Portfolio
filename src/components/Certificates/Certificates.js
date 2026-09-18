import React, { useState } from "react";

import bootstrap from "../../Assets/Certificates/bootstrap.pdf";
import database from "../../Assets/Certificates/database.pdf";
import flexbox from "../../Assets/Certificates/flexbox.pdf";
import git from "../../Assets/Certificates/git.pdf";
import htmlCss from "../../Assets/Certificates/html-css.pdf";
import javascript from "../../Assets/Certificates/javascript.pdf";

const certificates = [
  {
    id: 1,
    title: "Bootstrap",
    issuer: "NxtWave",
    file: bootstrap,
  },
  {
    id: 2,
    title: "Database",
    issuer: "NxtWave",
    file: database,
  },
  {
    id: 3,
    title: "Flexbox",
    issuer: "NxtWave",
    file: flexbox,
  },
  {
    id: 4,
    title: "Git",
    issuer: "NxtWave",
    file: git,
  },
  {
    id: 5,
    title: "HTML & CSS",
    issuer: "NxtWave",
    file: htmlCss,
  },
  {
    id: 6,
    title: "JavaScript",
    issuer: "NxtWave",
    file: javascript,
  },
];

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="py-5" id="certificates">
      {/* Heading */}
      <div className="text-center mb-5">
        <p
          className="purple mb-2"
          style={{
            fontWeight: "600",
            letterSpacing: "2px",
            fontSize: "14px",
          }}
        >
          MY ACHIEVEMENTS
        </p>

        <h1 className="project-heading mb-3">
          My <strong className="purple">Certifications</strong>
        </h1>

        <p className="text-secondary mx-auto" style={{ maxWidth: "650px" }}>
          Certifications and courses that showcase my continuous learning
          and technical development.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="row g-4">
        {certificates.map((certificate) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            key={certificate.id}
          >
            <div
              className="h-100 bg-white rounded-4 overflow-hidden"
              style={{
                border: "1px solid rgba(128, 128, 128, 0.2)",
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s ease",
              }}
            >
              {/* PDF Preview */}
              <div
                style={{
                  height: "220px",
                  background: "#f5f5f5",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <iframe
                  src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  title={`${certificate.title} certificate preview`}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    pointerEvents: "none",
                  }}
                />

                {/* Preview Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    background: "rgba(0, 0, 0, 0)",
                    transition: "0.3s",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="btn btn-light shadow"
                    style={{
                      opacity: 0,
                      transition: "0.3s",
                    }}
                  >
                    Preview
                  </button>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-4">
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "21px",
                    fontWeight: "700",
                  }}
                >
                  {certificate.title}
                </h3>

                <p className="purple mb-3" style={{ fontWeight: "600" }}>
                  {certificate.issuer}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="btn btn-primary px-4"
                >
                  View Certificate →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: "rgba(0, 0, 0, 0.85)",
            zIndex: 9999,
            padding: "20px",
          }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-4 overflow-hidden position-relative"
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "90vh",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="d-flex align-items-center justify-content-between px-4 py-3"
              style={{
                borderBottom: "1px solid #ddd",
              }}
            >
              <div>
                <h4 className="mb-0">
                  {selectedCertificate.title}
                </h4>

                <small className="text-secondary">
                  {selectedCertificate.issuer}
                </small>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="btn btn-outline-secondary rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  padding: 0,
                  fontSize: "20px",
                }}
                aria-label="Close certificate"
              >
                ×
              </button>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={selectedCertificate.file}
              title={selectedCertificate.title}
              style={{
                width: "100%",
                height: "calc(100% - 75px)",
                border: "none",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;