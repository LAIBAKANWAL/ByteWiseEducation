import React from "react";
import "./About.css";
import about from "../../assets/images/about.mp4";

const About = () => {
  return (
   
    <div className="about">
      <div className="about-left">
      <video src={about} controls className="about-video">
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about-right">
        <h3>ABOUT BYTEWISEEDUCATION</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>We're passionate about empowering learners of all levels to master coding skills and thrive in the digital world. Our mission is to democratize access to high-quality coding education and foster a vibrant community of learners and educators. </p>
        <p>Our dedicated team of coding enthusiasts and educators who are committed to making learning engaging, accessible, and fun. With years of experience in software development, education.</p>
        <p>Looking ahead, we envision as a premier destination for coding education, where learners of all ages and backgrounds can discover their passion for programming and unlock their full potential.</p>
      </div>
    </div>
   
  );
};

export default About;
