import React from "react";
import "./Styles/ExperienceTeam.css";

const ExperienceTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nema Jackson",
      imageUrl: require("./Assets/pic1.png"),
    },
    {
      id: 2,
      name: "Kaylen",
      imageUrl: require("./Assets/pic2.png"),
    },
  ];

  return (
    <div className="experience-team mb-5">
      <div className="team-info">
        <h2>
          Our <span>Experience</span> Team
        </h2>
        <p>
          Orci a scelerisque purus semper. Mauris cursus mattis molestie a
          iaculis at erat pellentesque. Eu augue ut lectus arcu bibendum at.
          Molestie nunc non blandit massa enim.
        </p>
        <button className="book-class-button">Book Your Class</button>
      </div>

      <div className="team-cards">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div
              className="member-image"
              style={{
                backgroundImage: ` url(${member.imageUrl})`,
              }}
            ></div>
            <h3
              style={{
                backgroundImage: `linear-gradient(to bottom, #fec783, #ff807c)`,
              }}
              className="member-name"
            >
              {member.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTeam;
