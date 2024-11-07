import React from "react";
import "./Styles/DigitalPhotographyGuide.css";
import backgroundImage from "./Assets/image-1.png";

const DigitalPhotographyGuide = () => {
  return (
    <div
      className="guide-section mb-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="content">
          <h1 className="text-start text-uppercase fw-bold">
            Guide to Digital <br></br>Photography & Digital <br></br>Printing
          </h1>
          <div className="stats ">
            <div className="stat mx-5">
              <span className="number">75</span>
              <span className="label">Satisfied Clients</span>
            </div>
            <div className="stat mx-5">
              <span className="number">50</span>
              <span className="label">Branches Globally</span>
            </div>
            <div className="stat mx-5">
              <span className="number">32</span>
              <span className="label">Expert Instructors</span>
            </div>
            <div className="stat mx-5">
              <span className="number">10</span>
              <span className="label">Years Field Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPhotographyGuide;
