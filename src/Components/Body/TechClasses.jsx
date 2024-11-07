import React from "react";
import "./Styles/TechClasses.css";
import img from "./Assets/image.png";

const TechClasses = () => {
  return (
    <div className="tech-classes mb-5">
      <div className="class-info">
        <p className="labella text-end">FREE</p>
        <h1 className="text-uppercase">
          We Make Amazing <span>Teching Classes</span> On Your Schedule
        </h1>
        <p className="description">
          Molestie nunc non blandit massa enim. Id cursus metus aliquam eleifend
          mi in nulla posuere. Dignissim sodales ut eu sem. Aliquam eleifend mi
          in nulla posuere sollicitudin aliquam ultrices.
        </p>

        <button className="get-started-button">Get Started</button>
      </div>

      <div className="class-image">
        <div className="image-container">
          <img src={img} alt="Teaching Classes" />
        </div>
      </div>
    </div>
  );
};

export default TechClasses;
