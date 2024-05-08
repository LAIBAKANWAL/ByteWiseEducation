import React from "react";
import "./Benefits.css";
import quality from "../../assets/images/quality.png";
import resume from "../../assets/images/resume.png";
import career from "../../assets/images/career.png";
import certify from "../../assets/images/certify.png";
import cap from "../../assets/images/cap.png";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="main-left">
        <h2>Benefits Of ByteWiseEducation Certificate </h2>

        <div className="point">
          <img src={quality} />
          <h3>Certify Your Skills</h3>
          <p>
            A CPD accredited ByteWiseEducation Certificate certifies the skills
            you've learned
          </p>
        </div>

        <div className="point">
          <img src={resume} />
          <h3>Stand Out From The Crowd</h3>
          <p>
            Add your ByteWiseEducation certification to your resume and stay
            ahead of the competition
          </p>
        </div>

        <div className="point">
          <img src={career} />
          <h3>Advance in Your Career</h3>
          <p>
            Share your ByteWiseEducation certification with potential employers
            to show off your skills amd capabilities
          </p>
        </div>
      </div>
      <div className="main-right">
        <img src={certify} />

        <div className="cap">
          <div className="cap-icon">
            <img src={cap} />
          </div>

          <div className="cap-icon">
            <img src={cap} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
