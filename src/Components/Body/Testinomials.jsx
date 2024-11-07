import React from "react";
import "./Styles/Testinomials.css";

const testimonialsData = [
  {
    name: "Margaret",
    role: "Student",
    rating: 5,
    testimonial:
      "In pellentesque massa placerat duis ultricies lacus. Diam quam nulla porttitor massa id. Pellentesque nec nam aliquam sem. In ante metus dictum at tempor.",
    imgSrc: require("./Assets/margret.png"),
  },
  {
    name: "Stephanie",
    role: "Student",
    rating: 5,
    testimonial:
      "Quam viverra orci sagittis eu volutpat odio facilisis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.",
    imgSrc: require("./Assets/stephanie.png"),
  },
];

const logos = [
  "path/to/digital-school-logo.jpg",
  "path/to/smart-education-logo.jpg",
];

const Testimonials = () => {
  return (
    <div>
      <div className="a2">
        <h6 className="text-uppercase text-center">WHY CHOOSE US</h6>
        <h2 className="text-uppercase text-center">
          STUDENT'S <span>TESTIMONIALS</span>
        </h2>
      </div>

      <div className="testimonials-section">
        <div className="testimonials-container">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img
                className="student-image"
                src={testimonial.imgSrc}
                alt={testimonial.name}
              />
              <h3 className="student-name">{testimonial.name}</h3>
              <p className="student-role">{testimonial.role}</p>
              <div className="rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>

        <div className="trusted-by">
          <p>-------Trusted By-------</p>
          <div className="logos-container">
            {logos.map((logo, index) => (
              <img key={index} className="logo" src={logo} alt="Brand Logo" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
