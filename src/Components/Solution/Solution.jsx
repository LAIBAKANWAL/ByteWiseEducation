import React from "react";
import "./Solution.css";
import knowledge from "../../assets/images/knowledge.png";
import careeepath from "../../assets/images/careerpath.png";
import hobbies from "../../assets/images/hobbies.png";

const Solution = () => {
  return (
    <div className="solution">
      <div className="box">
        <p>
          I want to upskill and <span> improve my knowledge </span>
        </p>
        <img src={knowledge} />
      </div>

      <div className="box">
        <p>
          I want to explore my <span> career path </span>
        </p>
        <img src={careeepath} />
      </div>

      <div className="box">
        <p>
        I want to explore my <span> hobbies and interests </span>
        </p>
        <img src={hobbies} />
      </div>
    </div>
  );
};

export default Solution;
