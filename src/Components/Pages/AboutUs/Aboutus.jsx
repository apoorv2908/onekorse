import React from "react";
import Header from "../../Header/Header";
import "./Aboutus.css";
import img1 from "./Assets/image-3.png";
import Footer from "../../Footer/Footer";
import abc from "./Assets/abc.png";
import heroImage from "./Assets/image.png";

import m1 from "./Assets/mno.png";
import m2 from "./Assets/4d47c89dc57749995a4e55d395377112.png";
import m3 from "./Assets/8ea7cd260462982fe9f678ad0ff3c246.png";
import m4 from "./Assets/d45931d1f6fcb66ead7a2c741a35cda6.png";
const imageNames = ["MAKEBA ANDRES", "NEMA JACKSON", "JAMAL LAL", "ELIJAH SAM"];

const imageUrls = [m1, m2, m3, m4];

const Aboutus = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <div className="banner-container">
        <img src={img1} className="contactus-banner-1" alt="banner" />
        <h1 className="banner-heading">About Us</h1>
      </div>
      <section className="hero-section bg-white">
        <div className="hero-content">
          <h2 className="text-uppercase" style={{ letterSpacing: "7px" }}>
            AT URNA CONDIMENTUM  MATTIS PELLENTES QUEID. 
            CURUSUS IN CURSUS IN HAC  HABITASSE PLATEA DICTUMST  QUISQUE.
          </h2>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" className="main-image" />
        </div>
      </section>
      <section className="bio-section bg-white">
        <div className="bio-content">
          <h5 style={{ color: "#FF807C" }}>Hii! I am</h5>
          <h2>JESSICA SMITH</h2>
          <p className="bio-description mb-5">
            Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.
            Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Elit
            eget gravida cum sociis. Gravida neque convallis a cras. Orci a
            scelerisque purus semper eget.
          </p>
          <div className="bio-details">
            {[
              {
                number: "1",
                title: "Fashion Photography",
                description:
                  "Platea dictumst vestibulum rhoncus est pellentesque. Dis parturient montes nascetur ridiculus mus mauris vitae.",
              },
              {
                number: "2",
                title: "Add Photography",
                description:
                  "Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.",
              },
              {
                number: "3",
                title: "Safari Photography",
                description:
                  "Integer eget aliquet nibh praesent tristique magna sit amet.",
              },
              {
                number: "4",
                title: "Business Photography",
                description:
                  "Eu turpis egestas pretium aenean pharetra magna ac.",
              },
            ].map((item, index) => (
              <div className="bio-item" key={index}>
                <span className="bio-number">{item.number}</span>
                <div className="bio-text">
                  <p className="bio-title">{item.title}</p>
                  <p className="bio-description">{item.description}</p>
                </div>
                <div className="bio-arrow">→</div>
              </div>
            ))}
          </div>

          <button className="get-started-btn">Know More</button>
        </div>
        <div className="bio-image">
          <img src={abc} alt="Profile" className="main-image" />
        </div>
      </section>
      <div className="image-galleryy">
        {imageUrls.map((url, index) => (
          <div key={index}>
            <div className="image-wrapper">
              <img
                className="gallery-image"
                src={url}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
            <p className="image-caption text-center fw-bold">
              {imageNames[index]}
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "200px" }}>
        <Footer />
      </div>{" "}
    </div>
  );
};

export default Aboutus;
