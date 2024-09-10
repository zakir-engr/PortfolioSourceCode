/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(alert("Sending Message ......."));
    const formData = new FormData(event.target);

    formData.append("access_key", "b14e8634-9c8a-491e-970e-6ba980aeb49b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(alert("Message Sent Successfully"));
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error", error);
      setResult(alert("Message not sent, Somthing went wrong!"));
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Available for new opportunities! Contact me to discuss your project
            and see how I can help bring your vision to life.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
                alt="email-icon"
              />{" "}
              <p>zakirengineeer3@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img
                src="https://www.shutterstock.com/image-vector/phone-number-vector-icon-flat-260nw-606092714.jpg"
                alt="phone icon"
              />{" "}
              <p>03369653452</p>
            </div>
            <div className="contact-detail">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDz2B6sHRREc6HV-wxyMRXW7WQ9XqXModCw&s"
                alt="location icon"
              />{" "}
              <p>Khyber Pakhtunkhwa Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Type your name ...."
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Type your Email........"
            required
          />
          <label>Write your message</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Type your message....."
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
      <div className="result-message">{result}</div>
    </div>
  );
}

export default Contact;
