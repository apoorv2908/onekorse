import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "../../Header/Header";
import "./Contactus.css";
import img from "./Assets/image-2.png";
import img1 from "./Assets/image.png";
import Testinomials from "../../Body/Testinomials";
import Footer from "../../Footer/Footer";

const Contactus = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (data.success) {
          setMessage(data.message);
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          setError(data.message);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setError("There was an error submitting the form. Please try again.");
      });
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <div className="banner-container">
        <img src={img1} className="contactus-banner-1" alt="banner" />
        <h1 className="banner-heading">Contact Us</h1>
      </div>
      <Row className="contact-form-section p-5">
        <Col md={6} className="mt-3">
          <h2>Contact Form</h2>
          <p>
            Got a question about Lancer? Are you interested in partnering with
            us? Have some suggestions or just want to say hi? Contact us.
          </p>
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="p-3"
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName" className="mt-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="p-3"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Your Subject</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3"
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Your Message (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-3"
                rows={4}
              />
            </Form.Group>
            <button className="get-started-button">Submit</button>
          </Form>
        </Col>
        <Col md={6} className="customer-care mt-3">
          <div>
            <img src={img} className="contactus-banner-2" alt="customer care" />
          </div>
          <div className="contact-info d-flex flex-wrap justify-content-between mt-4">
            <div className="location-block">
              <h5 className="fw-bold" style={{ color: "#FF807C" }}>
                America
              </h5>
              <p>
                <FaMapMarkerAlt /> 21 Ravenswood Rd, America
              </p>
              <p>
                <FaPhoneAlt /> +(000) 123-456789
              </p>
              <p>
                <FaEnvelope /> info@example.com
              </p>
            </div>
            <div className="location-block">
              <h5 className="fw-bold" style={{ color: "#FF807C" }}>
                Canada
              </h5>
              <p>
                <FaMapMarkerAlt /> 30 Saskatoon, Canada
              </p>
              <p>
                <FaPhoneAlt /> +(000) 123-456789
              </p>
              <p>
                <FaEnvelope /> info@example.com
              </p>
            </div>
            <div className="location-block">
              <h5 className="fw-bold" style={{ color: "#FF807C" }}>
                Japan
              </h5>
              <p>
                <FaMapMarkerAlt /> 50 Taito-ku, Japan
              </p>
              <p>
                <FaPhoneAlt /> +(000) 123-456789
              </p>
              <p>
                <FaEnvelope /> info@example.com
              </p>
            </div>
            <div className="location-block">
              <h5 className="fw-bold" style={{ color: "#FF807C" }}>
                Australia
              </h5>
              <p>
                <FaMapMarkerAlt /> 12 Thule, Australia
              </p>
              <p>
                <FaPhoneAlt /> +(000) 123-456789
              </p>
              <p>
                <FaEnvelope /> info@example.com
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Testinomials />
      <div style={{ marginTop: "200px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Contactus;
