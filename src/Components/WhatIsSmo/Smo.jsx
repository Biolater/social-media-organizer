import React from "react";
import "./Smo.css";
import { useState } from "react";
const Smo = () => {
  const qualities = [
    {
      name: "Easy to Use",
      content:
        "SMO provides a user-friendly interface for effortless navigation.",
      icon: "👍",
    },
    {
      name: "Time-Saving",
      content:
        "Save time by quickly accessing and managing all your social media accounts in one place.",
      icon: "⏰",
    },
    {
      name: "Secure",
      content:
        "Your social media information is securely stored, ensuring the safety of your accounts.",
      icon: "🔐",
    },
    {
      name: "Customization",
      content:
        "Tailor your account entries with personalized details, making organization a breeze.",
      icon: "✨",
    },
    {
      name: "Multi-Platform",
      content:
        "SMO supports various social media platforms, offering a versatile solution.",
      icon: "🌐",
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState([]);

  const handleAccordionClick = (accordionName) => {
    setActiveAccordion((previousArray) => {
      if (previousArray.includes(accordionName)) {
        const newArray = previousArray.filter((item) => item !== accordionName);
        return newArray;
      } else {
        return [...previousArray, accordionName];
      }
    });
  };

  return (
    <section id="what-is-smo">
      <div className="container">
        <div className="answer">
          <h2 className="section-title">What is SMO?</h2>
          <p className="section-description">
            SMO (Social Media Organizer) is a tool designed to simplify your
            social media experience. Forget about the hassle of managing
            multiple accounts and passwords. With SMO, you can centralize and
            organize your social media information in one place.
          </p>
        </div>
        <div className="answer">
          <h2 className="section-title">Why SMO?</h2>
          <p className="section-description">
            SMO simplifies your social media experience. Centralize and organize
            all your accounts in one place, eliminating the hassle of managing
            multiple passwords.
          </p>
        </div>
        <div className="accordion-container">
          <div className="accordion-title">
            <h2>Key Qualities</h2>
          </div>
          {qualities.map((item, index) => (
            <div
              key={index}
              onClick={() => handleAccordionClick(item.name)}
              className={`accordion-item ${activeAccordion.includes(item.name) ? "active" : ""}`}
            >
              <div className="accordion-header">
                <p>
                  {item.name} {item.icon}
                </p>
              </div>
              <div
                className={`accordion-content ${
                  activeAccordion.includes(item.name) ? "content-active" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Smo;
