import React, { useState } from "react";
import "./Registration.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import InputField from "../../Components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (!inputs.firstName) {
      newErrors.firstName = "First name should not be empty";
      valid = false;
    }

    if (!inputs.lastName) {
      newErrors.lastName = "Last name should not be empty";
      valid = false;
    }

    if (!inputs.email) {
      newErrors.email = "Email should not be empty";
      valid = false;
    }

    // password validation
    if (!inputs.password) {
      newErrors.password = "Password should not be empty";
      valid = false;
    } else if (inputs.password.length < 8) {
      newErrors.password =
        "Password is too short. It should be at least 8 characters long";
      valid = false;
    }

    // else if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(inputs.password)) {
    //   setErrors("Password must include a number and a letter", "password");
    //   console.log(errors);

    //   valid = false;
    // }

    // console.log('input ',inputs)
    // console.log('input error',errors)
    // console.log('input valid',valid)
    setErrors(newErrors);

    return valid;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(); 
    if (validate()) {
      await register();
    }
  };

  const register = async () => {
    try {
      const response = await axios.post(
        "https://ali-crud-test.onrender.com/api/user/create",
        {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          password: inputs.password,
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data.user));
      setInputs({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
      console.log("formData:", response.data);

      alert(response.data.message)
      // alert("Success: You are successfully signed up");

    navigate('/login');
    } catch (error) {
      console.error("Error signing up:", error.response.data);
      alert("Error: Signup failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="loginContainer">
        <div className="header">
          <div className="text">Get started for free</div>
          <div className="underline"></div>
        </div>

        <InputField
          type="text"
          placeholder="First name"
          onChange={handleOnChange}
          value={inputs.firstName}
          error={errors.firstName}
          name="firstName"
        />
        <InputField
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={handleOnChange}
          value={inputs.lastName}
          error={errors.lastName}
        />
        <InputField
          type="email"
          placeholder="Enter your email"
          name="email"
          value={inputs.email}
          onChange={handleOnChange}
          error={errors.email}
        />
        <InputField
          type="password"
          placeholder="Enter your password"
          name="password"
          value={inputs.password}
          onChange={handleOnChange}
          error={errors.password}
        />

        <div className="submit-container">
          <button className="btn" onClick={handleOnSubmit}>
            Sign Up
          </button>
        </div>

        <div className="forgot-password">
          Already have an account? <span> <Link to='/login'>Log in</Link></span>
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default Registration;
