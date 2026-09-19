import { Container } from "react-bootstrap";
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

      <Container
        fluid
        className="about-section w-full max-w-full overflow-x-hidden px-0"
      >
        <Container className="w-full max-w-[1200px] mx-auto px-3 sm:px-4 md:px-5">

          {/* ================= ABOUT INTRO ================= */}
          <section className="pt-8 sm:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8">

              {/* LEFT CONTENT */}
              <div className="md:col-span-7 w-full min-w-0 pt-2 sm:pt-4 pb-4 sm:pb-8">

                {/* Badge */}
                <div
                  className="
                    inline-block
                    px-4 py-2
                    mb-4
                    rounded-full
                    bg-purple-500/10
                    border border-purple-500/30
                    text-purple-300
                    text-xs sm:text-sm
                    font-semibold
                  "
                >
                  ABOUT ME
                </div>

                {/* Heading */}
                <h1
                  className="
                    text-[1.8rem]
                    sm:text-[2.2rem]
                    md:text-[2.5rem]
                    leading-tight
                    font-semibold
                    mb-5
                    break-words
                  "
                >
                  Know Who <strong className="purple">I'M</strong>
                </h1>

                {/* About Content */}
                <div className="w-full min-w-0 break-words">
                  <Aboutcard />
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div
                className="
                  md:col-span-5
                  w-full
                  min-w-0
                  flex
                  justify-center
                  items-center
                  pt-2
                  sm:pt-5
                  pb-8
                  sm:pb-10
                "
              >
                <img
                  src={laptopImg}
                  alt="Vijendra working as a developer"
                  className="
                    block
                    w-[85%]
                    sm:w-[75%]
                    md:w-full
                    max-w-[420px]
                    h-auto
                    object-contain
                    mx-auto
                    drop-shadow-[0_15px_30px_rgba(128,0,255,0.18)]
                  "
                />
              </div>
            </div>
          </section>

          {/* ================= PROFILE HIGHLIGHTS ================= */}
          <section className="w-full min-w-0 mt-2 mb-12 sm:mb-16">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

              {/* CARD 1 */}
              <div className="w-full min-w-0">
                <div
                  className="
                    h-full
                    w-full
                    p-5 sm:p-6
                    text-center
                    rounded-2xl
                    bg-white/[0.03]
                    border border-purple-500/20
                    transition-all
                    duration-300
                    hover:border-purple-500/40
                    hover:bg-purple-500/[0.05]
                  "
                >
                  <div className="text-3xl mb-3">
                    💻
                  </div>

                  <h4 className="text-white text-lg font-semibold mb-2 break-words">
                    Full Stack Developer
                  </h4>

                  <p className="text-gray-400 text-sm leading-6 mb-0 break-words">
                    Building modern and responsive web applications.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="w-full min-w-0">
                <div
                  className="
                    h-full
                    w-full
                    p-5 sm:p-6
                    text-center
                    rounded-2xl
                    bg-white/[0.03]
                    border border-purple-500/20
                    transition-all
                    duration-300
                    hover:border-purple-500/40
                    hover:bg-purple-500/[0.05]
                  "
                >
                  <div className="text-3xl mb-3">
                    ⚙️
                  </div>

                  <h4 className="text-white text-lg font-semibold mb-2 break-words">
                    Backend Development
                  </h4>

                  <p className="text-gray-400 text-sm leading-6 mb-0 break-words">
                    Developing APIs, authentication and database-driven
                    applications.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="w-full min-w-0">
                <div
                  className="
                    h-full
                    w-full
                    p-5 sm:p-6
                    text-center
                    rounded-2xl
                    bg-white/[0.03]
                    border border-purple-500/20
                    transition-all
                    duration-300
                    hover:border-purple-500/40
                    hover:bg-purple-500/[0.05]
                  "
                >
                  <div className="text-3xl mb-3">
                    🚀
                  </div>

                  <h4 className="text-white text-lg font-semibold mb-2 break-words">
                    Continuous Learning
                  </h4>

                  <p className="text-gray-400 text-sm leading-6 mb-0 break-words">
                    Continuously improving coding, problem-solving and
                    development skills.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* ================= SKILLS ================= */}
          <section className="w-full min-w-0 mb-8 sm:mb-10">

            <h1
              className="
                text-center
                text-[1.7rem]
                sm:text-[2rem]
                md:text-[2.3rem]
                leading-tight
                font-semibold
                break-words
              "
            >
              Professional <strong className="purple">Skillset</strong>
            </h1>

            <p
              className="
                text-center
                text-gray-400
                text-sm sm:text-[15px]
                leading-6
                mt-3
                mb-7 sm:mb-9
                max-w-2xl
                mx-auto
                px-2
              "
            >
              Technologies and frameworks I use to build modern web
              applications.
            </p>

            {/* Important for mobile overflow */}
            <div className="w-full min-w-0 max-w-full overflow-hidden">
              <Techstack />
            </div>

          </section>

          {/* ================= TOOLS ================= */}
          <section className="w-full min-w-0 mt-8">

            <h1
              className="
                text-center
                text-[1.7rem]
                sm:text-[2rem]
                md:text-[2.3rem]
                leading-tight
                font-semibold
                break-words
              "
            >
              <strong className="purple">Tools</strong> I Use
            </h1>

            <p
              className="
                text-center
                text-gray-400
                text-sm sm:text-[15px]
                leading-6
                mt-3
                mb-7 sm:mb-9
                max-w-2xl
                mx-auto
                px-2
              "
            >
              Development tools and platforms I use throughout my workflow.
            </p>

            <div className="w-full min-w-0 max-w-full overflow-hidden">
              <Toolstack />
            </div>

          </section>

          {/* ================= GITHUB ================= */}
          <section className="w-full min-w-0 mt-8">

            <h1
              className="
                text-center
                text-[1.7rem]
                sm:text-[2rem]
                md:text-[2.3rem]
                leading-tight
                font-semibold
                break-words
              "
            >
              My <strong className="purple">GitHub</strong>
            </h1>

            <p
              className="
                text-center
                text-gray-400
                text-sm sm:text-[15px]
                leading-6
                mt-3
                mb-7
                max-w-2xl
                mx-auto
                px-2
              "
            >
              Explore my projects, repositories and development activity.
            </p>

            <div
              className="
                w-full
                min-w-0
                max-w-full
                overflow-x-auto
                overflow-y-hidden
              "
            >
              <Github />
            </div>

          </section>

          {/* ================= CERTIFICATES ================= */}
          <section
            className="
              w-full
              min-w-0
              mt-8
              pb-12 sm:pb-16
            "
          >

            <h1
              className="
                text-center
                text-[1.7rem]
                sm:text-[2rem]
                md:text-[2.3rem]
                leading-tight
                font-semibold
                break-words
              "
            >
              My <strong className="purple">Certificates</strong>
            </h1>

            <p
              className="
                text-center
                text-gray-400
                text-sm sm:text-[15px]
                leading-6
                mt-3
                mb-7 sm:mb-9
                max-w-2xl
                mx-auto
                px-2
              "
            >
              Certifications and courses that support my technical learning.
            </p>

            <div className="w-full min-w-0 max-w-full overflow-hidden">
              <Certificates />
            </div>

          </section>

        </Container>
      </Container>
    </>
  );
}

export default About;
