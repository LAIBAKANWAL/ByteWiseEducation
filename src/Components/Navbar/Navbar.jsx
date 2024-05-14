import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import menu_icon from "../../assets/images/menu_icon.png";
import close_icon from "../../assets/images/close_icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="ByteWiseEducation Logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} duration={500} offset={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="courses" smooth={true} duration={500} offset={-260}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-150}>
            About us
          </Link>
        </li>
        <li>
          <Link to="solution" smooth={true} duration={500} offset={-260}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="benefits" smooth={true} duration={500} offset={-260}>
            Certification
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500} offset={-260}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-260}>
            Contact us
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-260}>
            Sign Up
          </Link>
        </li>
      </ul>
      <img
        src={mobileMenu ? close_icon : menu_icon}
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;