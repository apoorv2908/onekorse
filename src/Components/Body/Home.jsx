import React from "react";
import Header from "../Header/Header";
import EnrollCourse from "./EnrollCourse";
import Benefits from "./Benefits";
import TechClasses from "./TechClasses";
import ProfessionalClasses from "./ProfessionalClasses";
import ExperienceTeam from "./ExperienceTeam";
import Plans from "./Plans";
import Events from "./Events";
import Testimonials from "./Testinomials";
import NewsBlogs from "./NewsBlogs";
import Footer from "../Footer/Footer";
import DigitalPhotographyGuide from "./DigitalPhotographyGuide";

const Home = () => {
  return (
    <div>
      <Header />

      <EnrollCourse />
      <Benefits />
      <TechClasses />
      <ProfessionalClasses />
      <DigitalPhotographyGuide />
      <ExperienceTeam />
      <Plans />
      <div style={{ marginTop: "100px" }}>
        <Events />
      </div>
      <div style={{ marginTop: "100px" }}>
        <Testimonials />
      </div>
      <div style={{ marginTop: "100px" }}>
        <NewsBlogs />
      </div>

      <div style={{ marginTop: "200px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
