import React from "react";
import "./Courses.css";
import javascript from "../../assets/images/javascript.png";
import webdev from "../../assets/images/webdev.png";
import swiftcard from "../../assets/images/swiftcard.png";
import jsicon from "../../assets/images/jsicon.png";
import devicon from "../../assets/images/devicon.png";
import swifticon from "../../assets/images/swifticon.png";

const Courses = () => {
  return (
    <div className="courses">
      <div className="course">
        <img src={javascript} alt="javascript card" />
        <div className="caption">
          <img src={jsicon} alt="JS" />
        </div>
      </div>
      <div className="course">
        <img src={webdev} alt="webdev card" />
        <div className="caption">
          <img src={devicon} alt="JS" />
        </div>
      </div>
      <div className="course">
        <img src={swiftcard} alt="swift card" />
        <div className="caption">
          <img src={swifticon} alt="JS" />
        </div>
      </div>
    </div>
  );
};

export default Courses;
