import React from "react";
import "./Hero.css";
import node from "../../assets/images/node.png";
import css from "../../assets/images/css.png";
import python from "../../assets/images/python.png";
import swift from "../../assets/images/swift.png";
import db from "../../assets/images/db.png";

const Hero = () => {
  return (
    <div className="hero">

<div className="all-icon">


    <div className="lang-icon">
    <img src={node}/>
    <h4>Node Js</h4>
    </div>

    <div className="lang-icon">
    <img src={css}/>
    <h4>CSS3</h4>
    </div>

    <div className="lang-icon">
    <img src={python}/>
    <h4>Python</h4>
    </div>

    <div className="lang-icon">
    <img src={swift}/>
    <h4>Swift</h4>
    </div>

    <div className="lang-icon">
    <img src={db}/>
    <h4>SQL Database</h4>
    </div>

    </div>
   
      <div className="hero-text">
        <h2 className="hero-heading">Learn to <span>code</span> your dreams and <span>design</span> your future</h2>
        <p className="hero-paragraph">
        Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of technology.
        </p>
        <button className="btn">Explore Course</button>
        <button className="blank-btn">Join Community</button>
      </div>
    </div>
  );
};

export default Hero;
