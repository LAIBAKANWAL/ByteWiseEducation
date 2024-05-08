import React, { useRef } from "react";
import "./Testimonials.css";
import back_icon from "../../assets/images/back_icon.png";
import next_icon from "../../assets/images/next_icon.png";
import user_1 from "../../assets/images/user_1.jpg";
import user_2 from "../../assets/images/user_2.jpg";
import user_3 from "../../assets/images/user_3.jpg";
import user_4 from "../../assets/images/user_4.jpg";

const Testimonials = () => {
  const slider = useRef();
  let translatex = 0;

  const slideForward = () => {
    if (translatex > -50) {
      translatex -= 25;
    }
    slider.current.style.transform = `translateX(${translatex}%)`;
  };

  const sideBackward = () => {
    if (translatex < 0) {
      translatex += 25;
    }
    slider.current.style.transform = `translateX(${translatex}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="next_btn"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="back_btn"
        className="back-btn"
        onClick={sideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user1" />
                <div>
                  <h3>Robert James</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                The courses offered here outshine other coding platforms.
                Instructors deliver clear explanations and practical examples,
                significantly enhancing my programming skills.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user1" />
                <div>
                  <h3>Olivia</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                With no prior coding experience, I felt intimidated to start
                learning. However, the beginner-friendly courses here quickly
                put me at ease.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user1" />
                <div>
                  <h3>Sophia</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                The instructors here genuinely prioritize their students'
                success. Whenever I faced questions or coding challenges, they
                promptly offered valuable guidance. 
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user1" />
                <div>
                  <h3>John Daniel</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                I've been a professional developer for years, but I wanted to
                expand my skill set with new technologies. The advanced courses
                on this platform exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
