import React from "react";
import "./Styles/EnrollCourse.css";
import img from "./Assets/image-1.png";

const EnrollCourse = () => {
  return (
    <div className="enroll-course">
      <div className="course-info">
        <h6 className="text-uppercase text-dark">School of Photography</h6>
        <h1>
          Enroll For <span>Your Course</span>
        </h1>
        <p>
          Egestas fringilla phasellus faucibus scelerisque eleifend donec
          pretium vulputate sapien. Amet mauris commodo quis imperdiet massa
          tincidunt nunc pulvinar sapien.
        </p>

        <div className="search-bar">
          <input type="text" placeholder='e.g "General Chemistry"' />
          <button className="text-dark">a</button>
        </div>

        <div className="action-buttons">
          <button className="explore-courses">Explore All Courses</button>
          <button className="watch-video">Our 3 Minutes Video</button>
        </div>
      </div>

      <div className="course-image">
        <img src={img} alt="Course Illustration" />
      </div>
    </div>
  );
};

export default EnrollCourse;
