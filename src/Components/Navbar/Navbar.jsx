import "./Navbar.css";
import { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleButtonClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.querySelector(".main-header").style.top = "0px";
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="main-header">
      <div className="container">
        <nav className={`navbar ${navbarOpen ? "navbar-menu__open" : ""}`}>
          <a href="" className="logo">
            SMO.
          </a>
          <ul className="navbar-links">
            <li className="navbar-item">
              <a href="#add-account" className="navbar-link">
                Get Started
              </a>
            </li>
            <li className="navbar-item">
              <a href="#what-is-smo" className="navbar-link">
                What is SMO
              </a>
            </li>
            <li className="navbar-item">
              <a href="#testimonials  " className="navbar-link">
                Testimonials
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact-us" className="navbar-link">
                Contact Us
              </a>
            </li>
          </ul>
          <a
            className="navbar__toggle-button"
            onClick={() => handleButtonClick()}
          >
            <ToggleButton
              isClicked={navbarOpen}
              onClick={() => handleButtonClick()}
            />
          </a>
          <ul
            className={`navbar-links__toggle ${
              navbarOpen ? "navbar-toggle__active" : ""
            }`}
          >
            <li className="navbar-item">
              <a href="#add-account" className="navbar-link">
                Get Started
              </a>
            </li>
            <li className="navbar-item">
              <a href="#what-is-smo" className="navbar-link">
                What is SMO
              </a>
            </li>
            <li className="navbar-item">
              <a href="#testimonials" className="navbar-link">
                Testimonials
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact-us  " className="navbar-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
