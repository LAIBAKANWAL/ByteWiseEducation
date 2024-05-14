import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Courses from "../../Components/Courses/Courses";
import Title from "../../Components/Title/Title";
import About from "../../Components/About/About";
import Benefits from "../../Components/Benefits/Benefits";
import Solution from "../../Components/Solution/Solution";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
   <>
      <Navbar />
      <Hero />

      <div className="container">
        <Title title="Trending Cource" size='25px'/>
        <Courses />
        <About />
      
        <Title title="Not sure where to begin? What is your main goal on ByteWiseEducation?" size='20px'/>
        <Solution />
      </div>
      <Benefits />
      <div className="container">
        <Title title="What Learner Says" size='25px'/>
      <Testimonials />

      <Title title="Get in Touch" size='25px'/>
      <Contact />
      <Footer />
      </div>
      </>
  );
};

export default Home;
