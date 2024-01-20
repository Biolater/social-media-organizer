import "./Hero.css";
import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.querySelector("#hero-section .container").style.transform =
        "translateX(0px)";
    }, 450);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <section id="hero-section">
      <div className="container">
        <h1 className="hero-title">WELCOME TO THE SMO</h1>
        <h4 className="hero-explanation">
          Easily access your social media account information,without the hassle
          of remembering usernames and passwords.
        </h4>
        <a href="#add-account" className="cta-button">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
