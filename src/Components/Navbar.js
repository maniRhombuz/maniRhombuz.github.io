import DownloadResume from "./DownloadResume";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const section0Ref = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    section0Ref.current = document.getElementById("section0");
    section1Ref.current = document.getElementById("section1");
    section2Ref.current = document.getElementById("section2");
    section3Ref.current = document.getElementById("section3");
    AOS.init();
  }, []);

  return (
    <nav
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1000"
      className="navbar navbar-expand-lg py-4 "
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <DownloadResume />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <Hamburger />
        </button>
      </div>
      <div
        className="collapse navbar-collapse px-4"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto gap-lg-4 mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => scrollToSection(section0Ref)}
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => scrollToSection(section1Ref)}
            >
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => scrollToSection(section2Ref)}
            >
              SKILLS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => scrollToSection(section3Ref)}
            >
              PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
