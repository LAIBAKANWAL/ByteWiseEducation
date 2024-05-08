import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/images/msg_icon.png";
import email_icon from "../../assets/images/email_icon.png";
import phone_icon from "../../assets/images/phone_icon.png";
import location_icon from "../../assets/images/location_icon.png";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3a51c117-4ef9-4697-a386-f93cc7b7f68d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="icon" />{" "}
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          learner community.
        </p>
        <ul>
          <li><img src={email_icon}/>Contact@ByteWiseEducation.dev</li>
          <li><img src={phone_icon} />+92 123-6745467</li>
          <li><img src={location_icon} />PECHS Block 6, Karachi Pakistan</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required/>

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required/>

          <label>Write your messages here</label>
          <textarea name="message" rows='6' placeholder="Enter your message" required/>

          <button type="submit" className="btn dark-btn"> Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
