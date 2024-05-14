import React, { useState } from "react";
// import { useAuth } from "../../Components/hooks/useAuth";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import InputField from "../../Components/InputField/InputField";
import { Link, useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Please enter email";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Please enter password";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const saveLoginDataToStorage = async (userData) => {
    try {
      if (userData) {
        const { user, access_token } = userData;

      localStorage.setItem("user", JSON.stringify(user.user));
      localStorage.setItem("access_token", access_token.access_token);
      } else {
        console.warn(
          "Attempting to save undefined or null user data to localStorage."
        );
      }
    } catch (error) {
      console.error("Error saving login data to localStorage:", error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate()
    try {
      const response = await axios.post(
        "https://ali-crud-test.onrender.com/api/auth/login",
        formData
      );
      // const { user, access_token } = response.data;

      const {access_token } = response.data;
     console.log('token', access_token)

      setFormData({
        email: "",
        password: "",
      });

     if (email === "user" && password === "password") {
      // Replace with actual authentication logic
      // await login({ email });
    } else {
      alert("Invalid username or password");
    }

    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }

  };

  return (
    <>
      <Navbar />
      <div className="loginContainer">
        <div className="header">
          <div className="text">Log in to ByteWiseEducation</div>
          <div className="underline"></div>
        </div>

        <InputField
          type="email"
          placeholder="Enter your email"
          onChange={handleOnChange}
          error={errors.email}
          value={formData.email}
          name='email'
        />
        <InputField
          type="password"
          placeholder="Enter your password"
          onChange={handleOnChange}
          error={errors.password}
          value={formData.password}
          name='password'
        />

        <div className="forgot-password">
          Forgot <span>password?</span>
        </div>

        <div className="submit-container">
          <button className="btn" onClick={handleSubmit}>
            Login
          </button>
        </div>

        <div className="forgot-password">
          Not a member yet? <span> <Link to='/register'>Sign up for free </Link></span>
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default Login;
