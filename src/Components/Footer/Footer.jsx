import React from "react";
import "./Footer.css";
import img1 from "./Assets/img7.png";
import img2 from "./Assets/img6.png";
import img3 from "./Assets/img5.png";
import img4 from "./Assets/img4.png";
import img5 from "./Assets/img3.png";
import img6 from "./Assets/img2.png";
import centralImage from "./Assets/ci.png";

const imageUrls = [img1, img2, img3, img4, img5, img6];

const Footer = () => {
  return (
    <div className="onekorse-section">
      <div className="central-image">
        <img src={centralImage} alt="Central Image" />
      </div>

      <p
        className="text-center h3"
        style={{ marginTop: "150px", marginBottom: "20px" }}
      >
        FOLLOW <span> #ONEKORSE</span>
      </p>

      <div className="image-gallery">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            className="galery-image"
            src={url}
            alt={`Gallery Image ${index + 1}`}
          />
        ))}
      </div>

      <footer className="footer">
        <h2 className="footer-title">ONEKORSE</h2>
        <p className="footer-description">
          Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.
          Metus quis commodo odio aenean. Blandit turpis cursus in hac habitasse
          platea.
        </p>

        <div className="footer-links">
          <div className="footer-column">
            <h4>ABOUT</h4>
            <ul>
              <li>About Us</li>
              <li>Learner Stories</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Leadership</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>ONE PAGES</h4>
            <ul>
              <li>Development</li>
              <li>Business</li>
              <li>Finance & Account</li>
              <li>IT & Software</li>
              <li>Office Productivity</li>
              <li>Design</li>
              <li>Marketing</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>PAGES</h4>
            <ul>
              <li>Documentation</li>
              <li>FAQs</li>
              <li>Dashboard</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>BLOG</h4>
            <ul>
              <li>Job Opening</li>
              <li>Internship</li>
              <li>Remote Job</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>CONTACT US</h4>
            <ul>
              <li>New York 19754, United States</li>
              <li>info@example.com</li>
              <li>+00123456789</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2023 OneKorse WebDesignTech</p>
          <div className="social-icons">
            <span>FB</span> / <span>IN</span> / <span>YU</span> /{" "}
            <span>TW</span>
          </div>
          <div className="footer-terms">
            <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
