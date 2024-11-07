import React from "react";
import "./Styles/Benefits.css";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "24x7 Tutor Availability",
      description:
        "Fames ac turpis egestas sed tempus. Fermentum dui faucibus in ornare quam.",
      icon: "👨‍🏫",
    },
    {
      id: 2,
      title: "Easy Access Technique",
      description:
        "Scelerisque in dictum non consectetur a erat. Nisi porta lorem mollis aliquam ut.",
      icon: "🔧",
    },
    {
      id: 3,
      title: "White Board Classes",
      description:
        "Nisi condimentum id venenatis a. Morbi leo urna molestie at elementum eu.",
      icon: "🖥️",
    },
    {
      id: 4,
      title: "Coding Experience Tutor",
      description:
        "Pharetra massa massa ultricies mi quis hendrerit. Orci a scelerisque purus.",
      icon: "💻",
    },
  ];

  return (
    <div className="bg-light mt-5">
      <div className="benefits-section">
        <div className="benefits-header">
          <h6>WHY CHOOSE US</h6>
          <h2>
            BENEFITS OF{" "}
            <span>
              PHOTOGRAPHY <br></br>
              <span>COURSE</span>
            </span>
          </h2>
        </div>

        <div className="bg-light">
          <div className="benefits-cards">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={benefit.id}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title text-uppercase">
                  {benefit.title}
                </h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
