import React, { useState, useCallback, useRef, useEffect } from "react";
import "./Smo.css";

const Answer = React.memo(({ title, description }) => (
  <div className="answer">
    <h2 className="section-title">{title}</h2>
    <p className="section-description">{description}</p>
  </div>
));

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

  const [activeAccordion, setActiveAccordion] = useState(null);
  const accordionRefs = qualities.reduce((acc, { name }) => {
    acc[name] = useRef(null);
    return acc;
  }, {});

  const handleAccordionClick = useCallback((accordionName) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionName ? null : accordionName
    );
  }, []);

  useEffect(() => {
    // Adjust the max-height of accordion items based on content
    qualities.forEach(({ name }) => {
      const ref = accordionRefs[name];
      if (ref && ref.current) {
        ref.current.style.maxHeight = `${
          activeAccordion === name ? ref.current.scrollHeight : 49
        }px`;
      }
    });
  }, [activeAccordion, accordionRefs, qualities]);

  return (
    <>
      <section id="what-is-smo">
        <div className="container">
          <Answer
            title="What is SMO?"
            description="SMO (Social Media Organizer) is a tool designed to simplify your social media experience. Forget about the hassle of managing multiple accounts and passwords. With SMO, you can centralize and organize your social media information in one place."
          />
          <Answer
            title="Why SMO?"
            description="SMO simplifies your social media experience. Centralize and organize all your accounts in one place, eliminating the hassle of managing multiple passwords."
          />
          <div className="accordion-container">
            <div className="accordion-title">
              <h2>Key Qualities</h2>
            </div>
            {qualities.map(({ name, icon, content }) => (
              <div
                key={name}
                onClick={() => handleAccordionClick(name)}
                className={`accordion-item ${
                  activeAccordion === name ? "active" : ""
                }`}
                ref={accordionRefs[name]}
              >
                <div className="accordion-header">
                  <p>
                    {name} {icon}
                  </p>
                </div>
                <div
                  className={`accordion-content ${
                    activeAccordion === name ? "content-active" : ""
                  }`}
                >
                  <p>{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Smo;
